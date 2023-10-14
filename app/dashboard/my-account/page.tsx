import React from "react";

export default function ProfilePhotoUpload() {
    return (
        <section className="content-start self-stretch flex-wrap">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[35%] max-md:w-full">
                    <div className="min-w-[200px] max-w-[280px] items-start flex flex-col px-5 max-md:mt-8">
                        <div className="items-start flex w-[93px] max-w-full gap-0.5">
                            <div className="text-neutral-300 text-sm font-semibold leading-[142.86%] self-stretch">
                                Your photo
                            </div>
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ab85c493-5941-4517-b4c4-4d0770e094d8?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab85c493-5941-4517-b4c4-4d0770e094d8?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab85c493-5941-4517-b4c4-4d0770e094d8?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab85c493-5941-4517-b4c4-4d0770e094d8?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab85c493-5941-4517-b4c4-4d0770e094d8?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab85c493-5941-4517-b4c4-4d0770e094d8?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab85c493-5941-4517-b4c4-4d0770e094d8?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab85c493-5941-4517-b4c4-4d0770e094d8?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&" className="aspect-square object-cover object-center w-4 justify-center items-center overflow-hidden self-center shrink-0 my-auto"
                            />
                        </div>
                        <div className="text-neutral-400 text-sm leading-[142.86%] w-[280px] max-w-full">
                            This will be displayed on your profile.
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-stretch w-[65%] ml-5 max-md:w-full">
                    <div className="min-w-[480px] max-w-lg grow px-5 max-md:max-w-full max-md:mt-8">
                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                            <div className="flex flex-col items-stretch w-[13%] max-md:w-full">
                                <div className="flex-col justify-center items-center overflow-hidden relative flex aspect-square w-16 shrink-0 max-md:mt-5">
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/23774673-2c59-4c9d-8f8d-910a00029400?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/23774673-2c59-4c9d-8f8d-910a00029400?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/23774673-2c59-4c9d-8f8d-910a00029400?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/23774673-2c59-4c9d-8f8d-910a00029400?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/23774673-2c59-4c9d-8f8d-910a00029400?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/23774673-2c59-4c9d-8f8d-910a00029400?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/23774673-2c59-4c9d-8f8d-910a00029400?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/23774673-2c59-4c9d-8f8d-910a00029400?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&" className="absolute h-full w-full object-cover object-center"
                                    />
                                    <div className="relative self-stretch border-[color:var(--component-colors-components-avatars-avatar-contrast-border,rgba(255,255,255,0.12))] flex w-full h-16 flex-col rounded-full border-[0.75px] border-solid" />
                                </div>
                            </div>
                            <div className="flex flex-col items-stretch w-[87%] ml-5 max-md:w-full">
                                <div className="items-center self-stretch border-[color:var(--colors-border-border-brand-solid,#9E77ED)] bg-gray-900 flex grow flex-col w-[428px] mx-auto px-5 py-4 rounded-xl border-2 border-dashed max-md:max-w-full max-md:mt-5">
                                    <div className="items-center self-stretch flex flex-col w-full mx-1">
                                        <img
                                            loading="lazy"
                                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a90c5d88-57ce-458e-8844-91848ea16161?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a90c5d88-57ce-458e-8844-91848ea16161?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a90c5d88-57ce-458e-8844-91848ea16161?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a90c5d88-57ce-458e-8844-91848ea16161?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a90c5d88-57ce-458e-8844-91848ea16161?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a90c5d88-57ce-458e-8844-91848ea16161?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a90c5d88-57ce-458e-8844-91848ea16161?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a90c5d88-57ce-458e-8844-91848ea16161?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&" className="aspect-square object-cover object-center w-10 justify-center items-center shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] overflow-hidden self-center shrink-0"
                                        />
                                        <div className="items-center self-stretch flex grow flex-col w-full mt-3">
                                            <div className="justify-center items-start self-center flex w-[217px] max-w-full gap-1">
                                                <div className="text-neutral-300 text-sm font-semibold leading-[142.86%] self-stretch w-[109px]">
                                                    Click to upload
                                                </div>
                                                <div className="text-neutral-400 text-sm leading-[142.86%] self-stretch">
                                                    or drag and drop
                                                </div>
                                            </div>
                                            <div className="self-stretch text-neutral-400 text-center text-xs leading-[150%] w-full mt-1">
                                                SVG, PNG, JPG or GIF (max. 800x400px)
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}