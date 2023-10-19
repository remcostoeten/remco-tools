import React from "react";
import IconBox from "./IconBox";
import MoneyUpIcon from "../core/icons/MoneyUp";
import { FaTasks } from "react-icons/fa";
import { FileCode } from "lucide-react";
import {
    Box,
    Flex,
    FormLabel,
    Icon,
    Select,
    SimpleGrid,
    useColorModeValue,
} from "@chakra-ui/react";
import { ChartBarIcon } from "@heroicons/react/solid";
import MiniStatistics from "./MiniStatistiscs";

export default function Minis() {
    const brandColor = useColorModeValue("brand.500", "white");
    const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

    return (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }} gap="20px" mb="20px">
            <MiniStatistics
                startContent={
                    <IconBox w="56px" h="56px" bg={boxBg} icon={""}>
                        <Icon w="32px" h="32px" as={ChartBarIcon} color={brandColor} />
                    </IconBox>
                }
                name="Earnings"
                value="$350.4"
            />
            <MiniStatistics
                startContent={
                    <IconBox w="56px" h="56px" bg={boxBg} icon={""}>
                        <Icon w="32px" h="32px" as={MoneyUpIcon} color={brandColor} />
                    </IconBox>
                }
                name="Spend this month"
                value="$642.39"
            />
            <MiniStatistics growth="+23%" name="Sales" value="$574.34" />
            <MiniStatistics
                endContent={
                    <Flex me="-16px" mt="10px">
                        <FormLabel htmlFor="balance" />
                        <Select id="balance" variant="mini" mt="5px" me="0px" defaultValue="usd">
                            <option value="usd">USD</option>
                            <option value="eur">EUR</option>
                            <option value="gba">GBA</option>
                        </Select>
                    </Flex>
                }
                name="Your balance"
                value="$1,000"
            />
            <MiniStatistics
                startContent={
                    <IconBox w="56px" h="56px" bg="linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)">
                        <Icon w="28px" h="28px" as={FaTasks} color="white" />
                    </IconBox>
                }
                name="New Tasks"
                value="154"
            />
            <MiniStatistics
                startContent={
                    <IconBox w="56px" h="56px" bg={boxBg}>
                        <Icon w="32px" h="32px" as={FileCode} color={brandColor} />
                    </IconBox>
                }
                name="Total Projects"
                value="2935"
            />
        </SimpleGrid>
    );
}