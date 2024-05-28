import React, { useEffect } from 'react';
import {
    Button,
    CircularProgress,
    Grid,
    Link,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip,
    Typography
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Pill } from 'evergreen-ui'
import Stack from '@mui/material/Stack';
import { useApi, configApiRef } from '@backstage/core-plugin-api';
import { useEntity } from '@backstage/plugin-catalog-react';
import { InfoCard } from '@backstage/core-components';

export function IbutsuComponent() {
    const [results, setResults] = React.useState<any[]>([]);
    const [resultsPage, setResultsPage] = React.useState<any[]>([]);
    const [page, setPage] = React.useState<number>(0);
    const [infoData, setInfoData] = React.useState<any[]>([]);
    const [showHealthDataError, setShowHealthDataError] = React.useState(false)
    const [showRunsDataError, setShowRunsDataError] = React.useState(false)

    // state variable for spinner logic
    const [loading, setLoading] = React.useState(true)
    const pageSize: number = 5

    const config = useApi(configApiRef);
    const { entity } = useEntity();
    const title = 'Test Results';

    console.log(entity?.metadata?.annotations?.["ibutsu/component-name"]);

    // Style configurations for buttons
    const useStylesButton = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                '& > *': {
                    margin: theme.spacing(1),
                },
            },
        }),
    );

    // Style configurations for circluar progress icon
    const useStylesCircularProgress = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '& > * + *': {
                    marginLeft: theme.spacing(2),
                },
            },
        }),
    );

    const classesButton = useStylesButton();
    const classesCircularProgress = useStylesCircularProgress();

    const maxPages = () => {
        return results.length / pageSize;
    }

    const pageIncrement = () => {
        if (page >= maxPages()) {
            return
        }

        setPage(page + 1)
    }

    const pageDecrement = () => {
        if (page === 0) {
            return
        }

        setPage(page - 1)
    }

    const canIncrement = () => {
        return page < maxPages()
    }

    const canDecrement = () => {
        return page > 0
    }

    const formatISOdateOutput = (isoDateFormat) => {
        const date = isoDateFormat.substring(0,10)
        const time = isoDateFormat.substring(11,19)
    
        return `${date}, ${time}`
    }

    const appName = () => {
        // Some component names don't match the app's name
        if (entity?.metadata?.annotations?.["ibutsu/component-name"]) {
            return entity?.metadata?.annotations?.["ibutsu/component-name"]
        }

        return entity?.metadata?.name.substring(0, entity?.metadata?.name.indexOf("-"));
    }

    const apiBaseUrl = () => {
        const baseUrl: string = config.getString('backend.baseUrl');
        return `${baseUrl}/api/proxy/ibutsu/api`;
    }

    const getHealthData = async () => {
        const healthUrl = `${apiBaseUrl()}/health/info`;

        fetch(healthUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok ${response.statusText}`);
            }
            return response.json();
        }).then(data => {
            setInfoData(data.frontend);
            console.log(infoData);
        }).catch(error => {
            setShowHealthDataError(true);
            console.error('error fetching health data from Ibutsu API:', error);
        });
    }

    const getRunsData = async () => {
        const runsOpts = {
            'filter': `component=${appName()}`,
            'page': 1,
            'pageSize': 50,
        };

        const runsQueryString = new URLSearchParams(runsOpts).toString();
        const runsUrl = `${apiBaseUrl()}/run?${runsQueryString}`;

        fetch(runsUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok ${response.statusText}`);
            }

            return response.json();
        }).then(data => {
            const appRuns = data.runs;

            if (appRuns.length === 0) {
                throw new Error(
                    `No test runs data was returned from the Ibutsu API`);
            }

            setResults(appRuns.filter(d => d.component === appName()))
            console.log(data);
        }).catch(error => {
            setShowRunsDataError(true);
            console.error('Error fetching test run data from Ibutsu API:', error);
        }).finally(() => {
            setLoading(false)
        });
    }

    const RowHead = () => {
        return (
            <TableHead>
            <TableRow>
                <TableCell align="center"><Typography variant="button">Created</Typography></TableCell>
                <TableCell align="center"><Typography variant="button">Run ID</Typography></TableCell>
                <TableCell align="center"><Typography variant="button">Duration</Typography></TableCell>
                <TableCell align="center"><Typography variant="button">Environment</Typography></TableCell>
                <TableCell align="center"><Typography variant="button">Results</Typography></TableCell>
            </TableRow>
        </TableHead>
        )
    }

    const summaryItems = [
        { key: 'collected', title: 'Collected', color: '#0066CC' },
        { key: 'tests', title: 'Total', color: '#0066CC' },
        { key: 'passes', title: 'Passed', color: '#63993d' },
        { key: 'errors', title: 'Errors', color: '#EE0000' },
        { key: 'failures', title: 'Failures', color: '#EE0000' },
        { key: 'not_run', title: 'Not Run', color: '#0066CC' },
        { key: 'skips', title: 'Skipped', color: '#0066CC' },
        { key: 'xfailures', title: 'xFailures', color: '#EE0000' },
        { key: 'xpasses', title: 'xPasses', color: '#63993d' },
    ];

    const SummaryPills = ({ result }) => (
        <Stack direction="row" spacing={1}>
            {summaryItems.map(item => (
                result.summary[item.key] > 0 && (
                    <Tooltip title={item.title}>
                        <Pill style={{backgroundColor: item.color, color: "#FFFFFF"}}>{result.summary[item.key]}</Pill>
                    </Tooltip>
                )
            ))}
        </Stack>
    );

    const RowBody = ({ result }) => {
        return (
            <TableRow>
                <TableCell align="center">{formatISOdateOutput(result.created)}</TableCell>
                <TableCell align="center">
                    <Link href={`${infoData}/runs/${result.id}`}>
                        {result.id}
                    </Link>
                </TableCell>
                <TableCell align="center">{result.duration.toFixed(1)}s</TableCell>
                <TableCell align="center">{result.env}</TableCell>
                <TableCell align="center">
                    <SummaryPills result={result}/>
                </TableCell>
            </TableRow>
        )
    }

    const ShowTable = () => {
        return (
            <Table aria-label="simple table">
                <RowHead />
                <TableBody>
                    {resultsPage.map((item) => (
                        <RowBody result={item} />
                    ))}
                </TableBody>
            </Table>
        )
    }

    const PaginationButtons = () => {
        return (
            <div className={classesButton.root}>
                <Button variant="contained" color="primary" onClick={pageDecrement} disabled={!canDecrement()}>Previous</Button>
                <Button variant="contained" color="primary" onClick={pageIncrement} disabled={!canIncrement()}>Next</Button>
            </div>
        )
    }

    // fetch data from Ibutsu API on load only
    useEffect(() => {
        getHealthData()
        getRunsData()
    }, [])

    // Used for pagination
    useEffect(() => {
        const pageOffset = page * pageSize;
        setResultsPage(results.slice(pageOffset, pageOffset + pageSize))
    }, [page, results])

    if (showHealthDataError) {
        return (
            <InfoCard>
                <Typography>Error retrieving Ibutsu health data from Ibutsu API</Typography>
            </InfoCard>
        )
    }

    if (showRunsDataError) {
        return (
            <InfoCard>
                <Typography>Error retrieving Ibutsu test runs data from Ibutsu API</Typography>
            </InfoCard>
        )
    }

    if (loading) {
        return (
            <div className={classesCircularProgress.root}>
                <CircularProgress />
            </div>
        )
    }

    return (
        <InfoCard title={title} noPadding>
            <Grid container spacing={3} direction="column">
                <Grid item>
                    <TableContainer component={Paper}>
                        <ShowTable />
                    </TableContainer>
                </Grid>
            </Grid>
            <PaginationButtons />
        </InfoCard>
    )
}
