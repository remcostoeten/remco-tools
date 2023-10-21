import FetchCommits from "@/components/Github/FetchCommits";
import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import TransactionsList from "@/components/Dashboard/TransactionsList";

export default function Home() {
    return (
        <>
            {/* <FetchCommits /> */}
            <ECommerce />
            <TransactionsList />
        </>
    );
}
