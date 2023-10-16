"use client";
import * as React from "react";

export default function MaintenancePage() {
    const handleButtonClick = () => {
        // Handle button click event
    };

    return (
        <main className="justify-center items-center self-stretch bg-gray-900 flex flex-col px-5">
            <section className="max-w-[1177px] justify-center self-center w-full mt-80 mb-64 max-md:max-w-full max-md:mt-52">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[52%] max-md:w-full">
                        <div className="items-start flex grow flex-col max-md:max-w-full max-md:mt-12">
                            <div className="items-start flex w-[560px] max-w-full flex-col">
                                <h1 className="self-stretch text-neutral-300 text-base font-semibold leading-[150%] w-full max-md:max-w-full">
                                    404 error
                                </h1>
                                <h2 className="self-stretch text-neutral-100 text-6xl font-semibold leading-[120%] tracking-tighter w-full mt-3 max-md:max-w-full max-md:text-4xl">
                                    Under maintenance
                                </h2>
                            </div>
                            <p className="max-w-full text-neutral-400 text-xl leading-[150%] w-[480px] mt-6">
                                Sorry, the page you are looking for doesn't exist or has been moved. Try searching our site:
                            </p>
                        </div>
                        <div className="max-w-full items-start flex w-[480px] gap-4 mt-12 max-md:flex-wrap">
                            <div className="items-center self-stretch border border-[color:var(--colors-border-border-primary,#333741)] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-gray-900 flex w-[369px] max-w-full flex-col grow shrink-0 basis-auto px-3.5 py-3 rounded-lg border-solid">
                                <div className="items-start self-stretch flex justify-between gap-2">
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e054fe11-d400-4707-9033-9c9756b386ae?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e054fe11-d400-4707-9033-9c9756b386ae?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e054fe11-d400-4707-9033-9c9756b386ae?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e054fe11-d400-4707-9033-9c9756b386ae?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e054fe11-d400-4707-9033-9c9756b386ae?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e054fe11-d400-4707-9033-9c9756b386ae?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e054fe11-d400-4707-9033-9c9756b386ae?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e054fe11-d400-4707-9033-9c9756b386ae?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&" className="aspect-square object-cover object-center w-5 overflow-hidden self-center shrink-0 my-auto"
                                        alt="Search Icon"
                                    />
                                    <div className="overflow-hidden text-zinc-500 text-ellipsis text-base leading-[150%] self-stretch max-w-[336px] grow shrink-0 basis-auto">
                                        Search our site
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={handleButtonClick}
                                className="text-white text-base font-semibold leading-[150%] self-stretch justify-center items-center border border-[color:var(--component-colors-components-buttons-primary-button-primary-border,#7F56D9)] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-violet-500 w-[95px] max-w-full px-5 py-3 rounded-lg border-solid"
                            >
                                Search
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[48%] ml-5 max-md:w-full">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4996cdd2-e176-41d3-b66a-d701e536a00b?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4996cdd2-e176-41d3-b66a-d701e536a00b?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4996cdd2-e176-41d3-b66a-d701e536a00b?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4996cdd2-e176-41d3-b66a-d701e536a00b?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4996cdd2-e176-41d3-b66a-d701e536a00b?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4996cdd2-e176-41d3-b66a-d701e536a00b?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4996cdd2-e176-41d3-b66a-d701e536a00b?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4996cdd2-e176-41d3-b66a-d701e536a00b?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&" className="aspect-[3.13] object-cover object-center w-full overflow-hidden my-auto max-md:max-w-full max-md:mt-12"
                            alt="Maintenance Image"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}