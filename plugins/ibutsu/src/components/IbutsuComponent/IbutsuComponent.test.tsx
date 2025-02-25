import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { IbutsuComponent } from './IbutsuComponent';
import { useApi, configApiRef, fetchApiRef } from '@backstage/core-plugin-api';

//import { queryHealthAndRunsData } from '../../common/QueryHealthAndRunsData';
import { queryHealthData } from '../../common/QueryHealthData';
import { queryRunsData } from '../../common/QueryRunsData';

//jest.mock("../../common/QueryHealthAndRunsData", () => ({
//    queryHealthAndRunsData: jest.fn()
//}));

jest.mock("../../common/QueryHealthData", () => ({
    queryHealthData: jest.fn()
}));

jest.mock("../../common/QueryRunsData", () => ({
    queryRunsData: jest.fn()
}));

jest.mock('@backstage/core-plugin-api', () => ({
    ...jest.requireActual('@backstage/core-plugin-api'),
    useApi: jest.fn(),
}));

jest.mock('@backstage/plugin-catalog-react', () => ({
    ...jest.requireActual('@backstage/plugin-catalog-react'),
    useEntity: jest.fn(),
}));

const mockFetch = jest.fn();

describe('IbutsuComponent', () => {
    beforeEach(() => {
        jest.clearAllMocks();

        useApi.mockImplementation((apiRef) => {
            if (apiRef === fetchApiRef) {
                return { fetch: mockFetch };
            }
            if (apiRef === configApiRef) {
                return { getString: () => 'http://localhost:7007' };
            }
        });
    });

    test('displays loading state initially', () => {
        (queryHealthData as jest.Mock).mockReturnValue({
            infoData: [],
            showHealthDataError: false
        });

        (queryRunsData as jest.Mock).mockReturnValue({
            results: [],
            showRunsDataError: false,
            loading: true
        });

        render(<IbutsuComponent />);
        expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });

    test('displays an error message if fetching health data fails', async () => {
        (queryHealthData as jest.Mock).mockReturnValue({
            infoData: [],
            showHealthDataError: true
        });

        (queryRunsData as jest.Mock).mockReturnValue({
            results: [],
            showRunsDataError: false,
            loading: true
        });

        render(<IbutsuComponent />);
        expect(screen.getByText(/Error retrieving Ibutsu health data/i)).toBeInTheDocument();
    });

    test('displays an error message if fetching run data fails', async () => {
        (queryHealthData as jest.Mock).mockReturnValue({
            infoData: [],
            showHealthDataError: false
        });

        (queryRunsData as jest.Mock).mockReturnValue({
            results: [],
            showRunsDataError: true,
            loading: true
        });

        render(<IbutsuComponent />);
        expect(screen.getByText(/Error retrieving Ibutsu test runs data/i)).toBeInTheDocument();
    });
});
