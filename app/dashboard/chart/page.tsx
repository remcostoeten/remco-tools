'use client';
import ChartFour from "@/components/dashboard/Charts/ChartFour";
import ChartOne from "@/components/dashboard/Charts/ChartOne";
import ChartThree from "@/components/dashboard/Charts/ChartThree";
import ChartTwo from "@/components/dashboard/Charts/ChartTwo";
import Minis from "@/components/dashboard/Minis";
import MonthlyEarnings from "@/components/dashboard/MonthlyhEarnings";
import YearlyBreakup from "@/components/dashboard/YearlyRevenue";
import { Metadata } from "next";

const Chart = () => {
    return (
        <>

            <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
                <div className="col-span-12">
                    <ChartFour />
                </div>
                <ChartOne />
                <ChartTwo />
                <ChartThree />
                <Minis />
            </div>
            <YearlyBreakup />
            <MonthlyEarnings />
        </>
    );
};

export default Chart;
