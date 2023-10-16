import React from "react";

export default function ProjectionsChart() {
    return (
        <div className="min-w-[400px] items-start bg-white bg-opacity-10 flex w-[432px] flex-col px-5 rounded-2xl">
            <h2 className="self-stretch text-white text-sm font-semibold leading-[142.86%] w-full mt-6 mx-1">
                Projections vs Actuals
            </h2>
            <div className="items-start self-stretch flex justify-between gap-4 mt-4 mb-6 mx-1">
                <div className="justify-between items-end self-stretch flex flex-col">
                    <div className="self-stretch text-white text-opacity-40 text-right text-xs leading-[150%]">
                        30M
                    </div>
                    <div className="self-stretch text-white text-opacity-40 text-right text-xs leading-[150%]">
                        20M
                    </div>
                    <div className="self-stretch text-white text-opacity-40 text-right text-xs leading-[150%]">
                        10M
                    </div>
                    <div className="self-stretch text-white text-opacity-40 text-right text-xs leading-[150%]">
                        0
                    </div>
                </div>
                <div className="items-start self-stretch flex flex-col grow shrink-0 basis-auto pt-5">
                    <div className="justify-between items-start self-center flex w-[305px] max-w-full gap-5 max-md:justify-center">
                        <div className="rounded-2xl bg-indigo-300 bg-opacity-50 flex w-5 h-[90px] flex-col mt-8" />
                        <div className="rounded-2xl bg-indigo-300 bg-opacity-50 flex w-5 h-[110px] flex-col mt-2.5" />
                        <div className="rounded-2xl bg-indigo-300 bg-opacity-50 flex w-5 h-[95px] flex-col mt-6" />
                        <div className="rounded-2xl bg-indigo-300 bg-opacity-50 self-stretch flex w-5 h-[120px] flex-col" />
                        <div className="rounded-2xl bg-indigo-300 bg-opacity-50 flex w-5 h-20 flex-col mt-10" />
                        <div className="rounded-2xl bg-indigo-300 bg-opacity-50 flex w-5 h-[110px] flex-col mt-2.5" />
                    </div>
                    <div className="items-start self-stretch flex gap-0 mt-2.5 bottom-0 max-md:justify-center">
                        <div className="text-white text-opacity-40 text-center text-xs leading-[150%] self-stretch">
                            Jan
                        </div>
                        <div className="text-white text-opacity-40 text-center text-xs leading-[150%] self-stretch">
                            Feb
                        </div>
                        <div className="text-white text-opacity-40 text-center text-xs leading-[150%] self-stretch">
                            Mar
                        </div>
                        <div className="text-white text-opacity-40 text-center text-xs leading-[150%] self-stretch">
                            Apr
                        </div>
                        <div className="text-white text-opacity-40 text-center text-xs leading-[150%] self-stretch">
                            May
                        </div>
                        <div className="text-white text-opacity-40 text-center text-xs leading-[150%] self-stretch">
                            Jun
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}