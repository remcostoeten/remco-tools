import * as React from "react";
import Image from "next/image";
import { Link } from "@/ui/";

export default function SignUpForm() {
    return (
        <div className="flex w-[462px] max-w-full flex-col mt-36">
            <h2 className="text-[rgba(0,0,0,0.87)] text-xl font-medium leading-8 tracking-normal">
                Sign up to socialRepeat
            </h2>
            <div className="flex w-full items-start justify-between gap-5 mt-6 max-md:max-w-full max-md:flex-wrap">
                <div className="text-neutral-400 text-base leading-[150%] tracking-normal self-stretch w-[220px] items-start rounded border border-[color:var(--other-outlined-border,rgba(0,0,0,0.23))] max-w-full px-3 py-4 border-solid">
                    First name
                </div>
                <div className="text-neutral-400 text-base leading-[150%] tracking-normal self-stretch w-[220px] items-start rounded border border-[color:var(--other-outlined-border,rgba(0,0,0,0.23))] max-w-full px-3 py-4 border-solid">
                    Last name
                </div>
            </div>
            <div className="items-start rounded border border-[color:var(--other-outlined-border,rgba(0,0,0,0.23))] flex w-full flex-col mt-7 pb-4 px-3 border-solid max-md:max-w-full">
                <label
                    htmlFor="email"
                    className="text-[rgba(0,0,0,0.60)] text-xs leading-[100%] tracking-normal items-center bg-white w-[87px] max-w-full px-1"
                >
                    Email Address
                </label>
                <div className="text-[rgba(0,0,0,0.87)] text-base leading-[150%] tracking-normal w-[438px] max-w-full mt-4">
                    <input type="email" id="email" value="dev@domain.com" />
                </div>
            </div>
            <div className="items-start rounded border flex w-full flex-col mt-7 pb-4 px-3 border-solid border-zinc-200 max-md:max-w-full">
                <label
                    htmlFor="company"
                    className="text-neutral-400 text-xs leading-[100%] tracking-normal items-center bg-white w-[94px] max-w-full px-1"
                >
                    Company name
                </label>
                <div className="text-[rgba(0,0,0,0.87)] text-base leading-[150%] tracking-normal w-[438px] max-w-full mt-4">
                    <input type="text" id="company" value="socialhub" />
                </div>
            </div>
            <div className="flex w-full items-start justify-between gap-5 mt-7 max-md:max-w-full max-md:flex-wrap">
                <div className="items-start self-stretch rounded border border-neutral-200 flex w-[220px] max-w-full flex-col pb-4 px-3 border-solid">
                    <label
                        htmlFor="country"
                        className="text-[rgba(0,0,0,0.60)] text-xs leading-[100%] tracking-normal items-center bg-white w-[51px] max-w-full px-1"
                    >
                        Country
                    </label>
                    <div className="items-start flex w-[196px] max-w-full gap-2 mt-4">
                        <div className="text-[rgba(0,0,0,0.87)] text-base leading-[150%] tracking-normal self-stretch w-44">
                            United states
                        </div>
                        <Image
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6495f894-582a-46c1-bdfc-19779b709669?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197"
                            alt="Country Flag"
                            width={6}
                            height={6}
                            className="aspect-square object-cover object-center w-6 overflow-hidden shrink-0"
                        />
                    </div>
                </div>
                <div className="items-start self-stretch rounded border flex w-[220px] max-w-full flex-col pb-4 px-3 border-solid border-zinc-200">
                    <label
                        htmlFor="phone"
                        className="text-neutral-400 text-xs leading-[100%] tracking-normal items-center bg-white w-[54px] max-w-full px-1"
                    >
                        Phone #
                    </label>
                    <div className="text-[rgba(0,0,0,0.87)] text-base leading-[150%] tracking-normal w-[196px] max-w-full mt-4">
                        <input type="tel" id="phone" value="+20" />
                    </div>
                </div>
            </div>
            <div className="items-start rounded border border-neutral-200 flex w-full flex-col mt-7 pb-4 px-3 border-solid max-md:max-w-full">
                <label
                    htmlFor="timezone"
                    className="text-[rgba(0,0,0,0.60)] text-xs leading-[100%] tracking-normal items-center bg-white w-[102px] max-w-full px-1"
                >
                    Default timezone
                </label>
                <div className="items-start flex w-[438px] max-w-full gap-2 mt-4 max-md:flex-wrap">
                    <div className="text-[rgba(0,0,0,0)] text-base leading-[150%] tracking-normal self-stretch w-44">
                        United states
                    </div>
                    <Image
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f789cc56-cbd3-45c7-af77-a1b199fc4701?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197"
                        alt="Timezone Image"
                        width={6}
                        height={6}
                        className="aspect-square object-cover object-center w-6 overflow-hidden shrink-0"
                    />
                </div>
            </div>
        </div>
    );
}