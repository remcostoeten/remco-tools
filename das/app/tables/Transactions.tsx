import { CardContent } from "@/components/ui/card";
import useMoney from "@/hooks/useMoney";
import {
    MagnifyingGlassIcon,
    ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Tabs,
    TabsHeader,
    Tab,
    Avatar,
    IconButton,
    Tooltip,
} from "@material-tailwind/react";

const TABS = [
    {
        label: "All",
        value: "all",
    },
    {
        label: "Monitored",
        value: "monitored",
    },
    {
        label: "Unmonitored",
        value: "unmonitored",
    },
];

const TABLE_HEAD = ["Member", "Function", "Status", "Employed", ""];



export function SortableTable() {
    const { dataSum, isLoading } = useMoney("expenses", "name");

    // Defaulting to an empty array if dataSum isn't available or still loading
    const TABLE_ROWS = isLoading ? [] : dataSum;

    if (isLoading) {
        return <div>Loading...</div>;
    } return (

        <><div className="mb-8 flex items-center justify-between gap-8">
            <div>
                <h5 className="text-cream font-bold">Members</h5>
                <Typography color="gray" className="mt-1 font-normal">
                    See information about all members
                </Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                <Button variant="outlined" size="sm">
                    view all
                </Button>
                <Button className="flex items-center gap-3" size="sm">
                    <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add member
                </Button>
            </div>
        </div><div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <Tabs value="all" className="w-full md:w-max">
                    <TabsHeader>
                        {TABS.map(({ label, value }) => (
                            <Tab key={value} value={value}>
                                &nbsp;&nbsp;{label}&nbsp;&nbsp;
                            </Tab>
                        ))}
                    </TabsHeader>
                </Tabs>
                <div className="w-full md:w-72">
                    <Input
                        label="Search"
                        icon={<MagnifyingGlassIcon className="h-5 w-5" />} />
                </div>
            </div><CardBody className="overflow-scroll px-0">
                <table className="mt-4 w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head, index) => ([
                                <th
                                    key={head}
                                    className="cursor-pointer border-y border-[#1c1c1c] bg-transparent p-4 transition-colors hover:bg-blue-gray-50"
                                >
                                    <Typography
                                        variant="small"
                                        color="text-cream"
                                        className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                                    >
                                        {head}{" "}
                                        {index !== TABLE_HEAD.length - 1 && (
                                            <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                                        )}
                                    </Typography>
                                </th>
                            ]
                            ))}
                        </tr>
                    </thead>
            </CardBody></>
    );

}