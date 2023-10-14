import * as React from "react";

export default function SettingsComponent() {
    return (
        <main className="items-start bg-gray-900 flex flex-col px-5">
            <header className="items-start self-stretch flex flex-col mt-8 mx-3 max-md:max-w-full max-md:mr-2.5">
                <h1 className="items-start content-start self-stretch flex-wrap flex justify-between gap-4 max-md:max-w-full">
                    <span className="text-neutral-100 text-3xl font-semibold leading-[126.67%] max-w-[783px] grow shrink-0 basis-auto max-md:max-w-full">
                        Settings
                    </span>
                    <div className="items-center border border-[color:var(--colors-border-border-primary,#333741)] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-gray-900 flex w-80 max-w-full flex-col grow shrink-0 basis-auto px-3.5 py-2.5 rounded-lg border-solid">
                        <div className="items-start self-stretch flex justify-between gap-2">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/107ce081-0f90-452c-a66e-54763a534ac0?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/107ce081-0f90-452c-a66e-54763a534ac0?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/107ce081-0f90-452c-a66e-54763a534ac0?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/107ce081-0f90-452c-a66e-54763a534ac0?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/107ce081-0f90-452c-a66e-54763a534ac0?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/107ce081-0f90-452c-a66e-54763a534ac0?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/107ce081-0f90-452c-a66e-54763a534ac0?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/107ce081-0f90-452c-a66e-54763a534ac0?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&" className="aspect-square object-cover object-center w-5 overflow-hidden self-center shrink-0 my-auto"
                                alt="Search Icon"
                            />
                            <div className="overflow-hidden text-zinc-500 text-ellipsis text-base leading-[150%] self-stretch max-w-[284px] grow shrink-0 basis-auto">
                                Search
                            </div>
                        </div>
                    </div>
                </h1>
            </header>
            <section className="items-start self-stretch border-b-[color:var(--colors-border-border-secondary,#1F242F)] flex grow flex-col mt-6 pr-5 border-b border-solid max-md:max-w-full">
                <nav className="items-start flex w-[800px] max-w-full gap-4 max-md:flex-wrap max-md:justify-center">
                    <a
                        href="#"
                        className="text-neutral-300 text-sm font-semibold leading-[142.86%] justify-center items-center border-b-[color:var(--colors-foreground-fg-brand-primary-alt,#CECFD2)] pb-3 px-1 border-b-2 border-solid"
                    >
                        My details
                    </a>
                    <a href="#" className="text-neutral-400 text-sm font-semibold leading-[142.86%]">
                        Profile
                    </a>
                    <a href="#" className="text-neutral-400 text-sm font-semibold leading-[142.86%]">
                        Password
                    </a>
                    <div className="justify-center items-start flex gap-2">
                        <a href="#" className="text-neutral-400 text-sm font-semibold leading-[142.86%] self-stretch">
                            Team
                        </a>
                        <div className="text-neutral-300 text-center text-xs font-medium leading-[150%] self-stretch items-center border border-[color:var(--component-colors-utility-gray-utility-gray-200,#333741)] bg-gray-900 w-6 max-w-full pt-px pb-0.5 px-2 rounded-full border-solid">
                            4
                        </div>
                    </div>
                    <a href="#" className="text-neutral-400 text-sm font-semibold leading-[142.86%]">
                        Plan
                    </a>
                    <div className="justify-center items-start flex gap-2">
                        <a href="#" className="text-neutral-400 text-sm font-semibold leading-[142.86%] self-stretch">
                            Billing
                        </a>
                        <div className="text-neutral-300 text-center text-xs font-medium leading-[150%] self-stretch items-center border border-[color:var(--component-colors-utility-gray-utility-gray-200,#333741)] bg-gray-900 w-6 max-w-full pt-px pb-0.5 px-2 rounded-full border-solid">
                            2
                        </div>
                    </div>
                    <a href="#" className="text-neutral-400 text-sm font-semibold leading-[142.86%]">
                        Email
                    </a>
                    <div className="justify-center items-start flex gap-2">
                        <a href="#" className="text-neutral-400 text-sm font-semibold leading-[142.86%] self-stretch">
                            Notifications
                        </a>
                        <div className="text-neutral-300 text-center text-xs font-medium leading-[150%] self-stretch items-center border border-[color:var(--component-colors-utility-gray-utility-gray-200,#333741)] bg-gray-900 w-6 max-w-full pt-px pb-0.5 px-2 rounded-full border-solid">
                            2
                        </div>
                    </div>
                    <a href="#" className="text-neutral-400 text-sm font-semibold leading-[142.86%]">
                        Integrations
                    </a>
                    <a href="#" className="text-neutral-400 text-sm font-semibold leading-[142.86%]">
                        API
                    </a>
                </nav>
            </section>
            <form>
                <input
                    type="text"
                    placeholder="Hello there"
                    className="flex flex-col relative shrink-0 box-border border ml-5 p-2.5 rounded border-solid border-stone-300"
                    required={false}
                />
            </form>
            <section className="items-start self-stretch flex flex-col mt-8 mb-12 mx-3 max-md:max-w-full max-md:mr-2.5">
                <header className="items-start self-stretch flex justify-between gap-4 max-md:max-w-full max-md:flex-wrap">
                    <h2 className="justify-center items-start flex flex-col grow shrink-0 basis-auto w-[891px] max-md:max-w-full">
                        <span className="self-stretch text-neutral-100 text-lg font-semibold leading-[155.56%] w-full">
                            Personal info
                        </span>
                        <span className="self-stretch overflow-hidden text-neutral-400 text-ellipsis text-sm leading-[142.86%] w-full mt-1">
                            Update your photo and personal details here.
                        </span>
                    </h2>
                    <div className="items-start flex gap-3">
                        <button className="text-neutral-300 text-sm font-semibold leading-[142.86%] self-stretch justify-center items-center border border-[color:var(--component-colors-components-buttons-secondary-button-secondary-border,#333741)] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-gray-900 w-20 max-w-full px-4 py-2.5 rounded-lg border-solid">
                            Cancel
                        </button>
                        <button className="text-white text-sm font-semibold leading-[142.86%] self-stretch justify-center items-center border border-[color:var(--component-colors-components-buttons-primary-button-primary-border,#7F56D9)] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-violet-500 w-[65px] max-w-full px-4 py-2.5 rounded-lg border-solid">
                            Save
                        </button>
                    </div>
                </header>
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/43ccaf00-befd-49c4-aecb-af0e3c1a1f52?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/43ccaf00-befd-49c4-aecb-af0e3c1a1f52?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/43ccaf00-befd-49c4-aecb-af0e3c1a1f52?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/43ccaf00-befd-49c4-aecb-af0e3c1a1f52?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/43ccaf00-befd-49c4-aecb-af0e3c1a1f52?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/43ccaf00-befd-49c4-aecb-af0e3c1a1f52?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/43ccaf00-befd-49c4-aecb-af0e3c1a1f52?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/43ccaf00-befd-49c4-aecb-af0e3c1a1f52?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&" className="aspect-[1064] object-cover object-center w-full self-stretch fill-gray-800 overflow-hidden grow mt-5 max-md:max-w-full"
                    alt="Profile Image"
                />
            </section>
            <section className="items-start self-stretch flex flex-col mt-6 max-md:max-w-full">
                <div className="items-start content-start flex-wrap flex w-[824px] max-w-full justify-between gap-5">
                    <div className="text-neutral-300 text-sm font-semibold leading-[142.86%] max-w-[301px] grow shrink-0 basis-auto">
                        Name
                    </div>
                    <div className="min-w-[480px] max-w-full items-start flex w-[512px] grow shrink-0 basis-auto justify-between gap-5 max-md:flex-wrap">
                        <div className="overflow-hidden text-neutral-100 text-ellipsis text-base leading-[150%] self-stretch w-[244px] items-center border border-[color:var(--colors-border-border-primary,#333741)] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-gray-900 max-w-full px-3.5 py-2.5 rounded-lg border-solid">
                            Olivia
                        </div>
                        <div className="overflow-hidden text-neutral-100 text-ellipsis text-base leading-[150%] self-stretch w-[244px] items-center border border-[color:var(--colors-border-border-primary,#333741)] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-gray-900 max-w-full px-3.5 py-2.5 rounded-lg border-solid">
                            Rhye
                        </div>
                    </div>
                    <div className="min-w-[480px] max-w-full items-start flex w-[512px] grow shrink-0 basis-auto justify-between gap-5 max-md:flex-wrap">
                        <div className="overflow-hidden text-neutral-100 text-ellipsis text-base leading-[150%] self-stretch w-[244px] items-center border border-[color:var(--colors-border-border-primary,#333741)] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-gray-900 max-w-full px-3.5 py-2.5 rounded-lg border-solid">
                            Olivia
                        </div>
                        <div className="overflow-hidden text-neutral-100 text-ellipsis text-base leading-[150%] self-stretch w-[244px] items-center border border-[color:var(--colors-border-border-primary,#333741)] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-gray-900 max-w-full px-3.5 py-2.5 rounded-lg border-solid">
                            Rhye
                        </div>
                    </div>
                </div>
                <div className="bg-gray-800 flex w-[1064px] h-px flex-col mt-5 max-md:max-w-full" />
                <div className="items-start content-start flex-wrap flex w-[824px] max-w-full justify-between gap-5 mt-5">
                    <div className="text-neutral-300 text-sm font-semibold leading-[142.86%] max-w-[301px] grow shrink-0 basis-auto">
                        Email
                    </div>
                    <div className="min-w-[480px] max-w-full items-start flex w-[512px] grow shrink-0 basis-auto justify-between gap-5 max-md:flex-wrap">
                        <div className="overflow-hidden text-neutral-100 text-ellipsis text-base leading-[150%] self-stretch w-[244px] items-center border border-[color:var(--colors-border-border-primary,#333741)] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-gray-900 max-w-full px-3.5 py-2.5 rounded-lg border-solid">
                            Olivia
                        </div>
                        <div className="overflow-hidden text-neutral-100 text-ellipsis text-base leading-[150%] self-stretch w-[244px] items-center border border-[color:var(--colors-border-border-primary,#333741)] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-gray-900 max-w-full px-3.5 py-2.5 rounded-lg border-solid">
                            Rhye
                        </div>
                    </div>
                    <div className="min-w-[480px] max-w-full items-start flex w-[512px] grow shrink-0 basis-auto justify-between gap-5 max-md:flex-wrap">
                        <div className="overflow-hidden text-neutral-100 text-ellipsis text-base leading-[150%] self-stretch w-[244px] items-center border border-[color:var(--colors-border-border-primary,#333741)] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-gray-900 max-w-full px-3.5 py-2.5 rounded-lg border-solid">
                            Olivia
                        </div>
                        <div className="overflow-hidden text-neutral-100 text-ellipsis text-base leading-[150%] self-stretch w-[244px] items-center border border-[color:var(--colors-border-border-primary,#333741)] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-gray-900 max-w-full px-3.5 py-2.5 rounded-lg border-solid">
                            Rhye
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}