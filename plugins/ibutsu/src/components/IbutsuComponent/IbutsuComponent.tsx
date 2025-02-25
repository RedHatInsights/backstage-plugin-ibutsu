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
import { InfoCard } from '@backstage/core-components';
import { queryHealthData } from '../../common/QueryHealthData';
import { queryRunsData } from '../../common/QueryRunsData';

export function IbutsuComponent() {
    const [resultsPage, setResultsPage] = React.useState<any[]>([]);
    const [page, setPage] = React.useState<number>(0);

    // state variable for spinner logic
    const pageSize: number = 5

    const title = 'Test Results';

    const { infoData, showHealthDataError } = queryHealthData();
    const { results, showRunsDataError, loading } = queryRunsData();

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
        const date = isoDateFormat.substring(0, 10)
        const time = isoDateFormat.substring(11, 19)

        return `${date}, ${time}`
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
                        <Pill style={{ backgroundColor: item.color, color: "#FFFFFF" }}>{result.summary[item.key]}</Pill>
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
                    <SummaryPills result={result} />
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
    //useEffect(() => {
    //    getHealthData()
    //    getRunsData()
    //}, [])

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
