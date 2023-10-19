

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from '@mui/material/styles';
import { Stack, Typography, Avatar, Fab } from '@mui/material';
import { ArrowDownRight } from "lucide-react";
import { FaEuroSign } from "react-icons/fa";
import DashboardCard from "./MuiCard";
import Block from "../core/ThemeBlock";

const MonthlyEarnings = () => {
    // chart color
    const theme = useTheme();
    const secondary = theme.palette.secondary.main;
    const secondarylight = '#f5fcff';
    const errorlight = '#fdede8';

    // chart
    const optionscolumnchart: any = {
        chart: {
            type: 'area',
            fontFamily: "'Plus Jakarta Sans', sans-serif;",
            foreColor: '#adb0bb',
            toolbar: {
                show: false,
            },
            height: 60,
            sparkline: {
                enabled: true,
            },
            group: 'sparklines',
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        fill: {
            colors: [secondarylight],
            type: 'solid',
            opacity: 0.05,
        },
        markers: {
            size: 0,
        },
        tooltip: {
            theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
        },
    };
    const seriescolumnchart: any = [
        {
            name: '',
            color: secondary,
            data: [25, 66, 20, 40, 12, 58, 20],
        },
    ];

    return (
        <Block>
            <h2>xxxx</h2>


            <Fab color="secondary" size="medium" sx={{ color: '#ffffff' }}>
                <FaEuroSign width={24} />
            </Fab>
            <Chart options={optionscolumnchart} series={seriescolumnchart} type="area" height="60px" />
            <>
                <Typography variant="h3" fontWeight="700" mt="-20px">
                    $6,820
                </Typography>
                <Stack direction="row" spacing={1} my={1} alignItems="center">
                    <Avatar sx={{ bgcolor: errorlight, width: 27, height: 27 }}>
                        <ArrowDownRight width={20} color="#FA896B" />
                    </Avatar>
                    <Typography variant="subtitle2" fontWeight="600">
                        +9%
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                        last year
                    </Typography>
                </Stack>
            </>
        </Block>
    );
};

export default MonthlyEarnings;
