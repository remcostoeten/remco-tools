import NavBar from "@/components/core/NavBar";


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <><NavBar /><div className="clear-header ">{children}</div></>
    );
}
