import CountingNumber from "@/components/effects/CountingNumber";
import FolderIcon from "@/components/icons/FolderIcon";
import StonksUpIcon from "@/components/icons/StonksUpIcon";
import { Percent } from "lucide-react";

type GrowthCardProps = {
    title?: string;
    variant?: "sky-100" | "sky-200" | "sky-300";
    value?: string;
    percentage?: string;
    directionIcon?: React.ReactNode;
    rotate?: number;
};

export default function GrowthCard({
    title,
    variant,
    value,
    percentage,
    directionIcon,
    rotate,
}: GrowthCardProps) {
    return (
        <div className="self-stretch max-md:max-w-full w-6/12">
            <div
                className={`min-w-[200px] items-start bg-${variant} flex max-w-full grow flex-col mx-auto py-6 rounded-2xl max-md:mt-7 px-6`}
            >
                <div className="flex justify-between items-center w-full">
                    <h2 className="text-zinc-900 text-sm font-semibold leading-[142.86%] max-w-full">
                        {title}
                    </h2>
                    <FolderIcon />
                </div>
                <div className="justify-between items-start content-center gap-y-2 flex max-w-full gap-5 mt-2 rounded-lg w-full">
                    <div className="self-stretch text-zinc-900 text-2xl font-semibold leading-[150%]">
                        <CountingNumber start={0} end={Number(value)} duration={1} />
                    </div>
                    <div className="items-start content-center flex gap-1 my-auto rounded-lg">
                        <div className="self-stretch text-zinc-900 text-xs leading-[150%]">
                            <CountingNumber start={0} end={Number(percentage)} duration={1} />%
                        </div>
                        <span style={{ transform: `rotate(${rotate}deg)` }}>
                            {directionIcon}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
// export default function RevenueGrowthComponent() {
//     return (
//         <main className="w-full p-[28px] items-start content-start flex-wrap flex flex-col">
//             <h1 className="self-stretch text-creamn text-sm font-semibold leading-[142.86%]">Dashboard</h1>
//             <GrowthCard title="Customers" variant="sky-100" value="1219" percentage="12.01%" directionIcon=<StonksUpIcon /> />
//             <div className="flex gap-5 w-3/6 flex-wrap">
//                 <section className="self-stretch   max-md:max-w-full w-full">
//                     <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
//                         <div className="self-stretch   max-md:max-w-full w-6/12">
//                             <div className="min-w-[200px] items-start bg-sky-100 flex  max-w-full grow flex-col mx-auto  py-6 rounded-2xl max-md:mt-7 px-6">
//                                 <div className="flex justify-between items-center w-full">
//                                     <h2 className=" text-zinc-900 text-sm font-semibold leading-[142.86%]  max-w-full">Customers</h2>
//                                     <FolderIcon />
//                                 </div>
//                                 <div className="justify-between items-start content-center gap-y-2  flex  max-w-full gap-5 mt-2 rounded-lg">
//                                     <div className="self-stretch text-zinc-900 text-2xl font-semibold leading-[150%]">3,781</div>
//                                     <div className="items-start content-center  flex gap-1 my-auto rounded-lg">
//                                         <div className="self-stretch text-zinc-900 text-xs leading-[150%]">+11.01%</div>
//                                         <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/921aec0b-07d4-4bda-ba07-5e056d7a5791?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/921aec0b-07d4-4bda-ba07-5e056d7a5791?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/921aec0b-07d4-4bda-ba07-5e056d7a5791?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/921aec0b-07d4-4bda-ba07-5e056d7a5791?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/921aec0b-07d4-4bda-ba07-5e056d7a5791?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/921aec0b-07d4-4bda-ba07-5e056d7a5791?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/921aec0b-07d4-4bda-ba07-5e056d7a5791?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/921aec0b-07d4-4bda-ba07-5e056d7a5791?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&" className="aspect-square object-cover object-center w-4 overflow-hidden shrink-0 mt-px" />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="self-stretch   max-md:max-w-full w-6/12">
//                             <div className=" bg-[#282828] items-start  flex  max-w-full grow flex-col mx-auto  py-6 rounded-2xl max-md:mt-7 px-6">
//                                 <h2 className=" text-white text-sm font-semibold leading-[142.86%]  max-w-full">Orders</h2>
//                                 <div className="justify-between items-start content-center gap-y-2  flex max-w-full gap-5 mt-2 rounded-lg">
//                                     <div className="self-stretch text-white text-2xl font-semibold leading-[150%]">1,219</div>
//                                     <div className="items-start content-center flex-wrap  flex gap-1 my-auto rounded-lg">
//                                         <div className="self-stretch text-white text-xs leading-[150%]">-0.03%</div>
//                                         <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7272ce51-33a1-41a7-8cd4-420fdf65e513?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7272ce51 -33a1-41a7-8cd4-420fdf65e513?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7272ce51-33a1-41a7-8cd4-420fdf65e513?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7272ce51-33a1-41a7-8cd4-420fdf65e513?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7272ce51-33a1-41a7-8cd4-420fdf65e513?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7272ce51-33a1-41a7-8cd4-420fdf65e513?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7272ce51-33a1-41a7-8cd4-420fdf65e513?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7272ce51-33a1-41a7-8cd4-420fdf65e513?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&" className="aspect-square object-cover object-center w-4 overflow-hidden shrink-0 mt-px" />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//                 <section className="self-stretch   max-md:max-w-full">
//                     <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
//                         <div className="self-stretch   max-md:max-w-full w-6/12">
//                             <div className="min-w-[200px] items-start bg-sky-100 flex  max-w-full grow flex-col mx-auto  py-6 rounded-2xl max-md:mt-7 px-6">
//                                 <h2 className=" text-zinc-900 text-sm font-semibold leading-[142.86%]  max-w-full">Customers</h2>
//                                 <img
//                                     loading="lazy"
//                                     srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1fac686b-5d32-410c-adc6-3f1ca0ed0c37?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fac686b-5d32-410c-adc6-3f1ca0ed0c37?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fac686b-5d32-410c-adc6-3f1ca0ed0c37?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fac686b-5d32-410c-adc6-3f1ca0ed0c37?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fac686b-5d32-410c-adc6-3f1ca0ed0c37?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fac686b-5d32-410c-adc6-3f1ca0ed0c37?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fac686b-5d32-410c-adc6-3f1ca0ed0c37?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fac686b-5d32-410c-adc6-3f1ca0ed0c37?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&" className="aspect-square object-cover object-center w-6 overflow-hidden shrink-0"
//                                     alt="Description of the image"
//                                 />
//                                 <div className="justify-between items-start content-center gap-y-2  flex  max-w-full gap-5 mt-2 rounded-lg">
//                                     <div className="self-stretch text-zinc-900 text-2xl font-semibold leading-[150%]">3,781</div>
//                                     <div className="items-start content-center  flex gap-1 my-auto rounded-lg">
//                                         <div className="self-stretch text-zinc-900 text-xs leading-[150%]">+11.01%</div>
//                                         <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/921aec0b-07d4-4bda-ba07-5e056d7a5791?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/921aec0b-07d4-4bda-ba07-5e056d7a5791?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/921aec0b-07d4-4bda-ba07-5e056d7a5791?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/921aec0b-07d4-4bda-ba07-5e056d7a5791?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/921aec0b-07d4-4bda-ba07-5e056d7a5791?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/921aec0b-07d4-4bda-ba07-5e056d7a5791?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/921aec0b-07d4-4bda-ba07-5e056d7a5791?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/921aec0b-07d4-4bda-ba07-5e056d7a5791?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&" className="aspect-square object-cover object-center w-4 overflow-hidden shrink-0 mt-px" />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="self-stretch   max-md:max-w-full w-6/12">
//                             <div className=" bg-[#282828] items-start  flex  max-w-full grow flex-col mx-auto  py-6 rounded-2xl max-md:mt-7 px-6">
//                                 <h2 className=" text-white text-sm font-semibold leading-[142.86%]  max-w-full">Orders</h2>
//                                 <div className="justify-between items-start content-center gap-y-2  flex max-w-full gap-5 mt-2 rounded-lg">
//                                     <div className="self-stretch text-white text-2xl font-semibold leading-[150%]">1,219</div>
//                                     <div className="items-start content-center flex-wrap  flex gap-1 my-auto rounded-lg">
//                                         <div className="self-stretch text-white text-xs leading-[150%]">-0.03%</div>
//                                         <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7272ce51-33a1-41a7-8cd4-420fdf65e513?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7272ce51 -33a1-41a7-8cd4-420fdf65e513?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7272ce51-33a1-41a7-8cd4-420fdf65e513?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7272ce51-33a1-41a7-8cd4-420fdf65e513?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7272ce51-33a1-41a7-8cd4-420fdf65e513?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7272ce51-33a1-41a7-8cd4-420fdf65e513?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7272ce51-33a1-41a7-8cd4-420fdf65e513?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7272ce51-33a1-41a7-8cd4-420fdf65e513?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&" className="aspect-square object-cover object-center w-4 overflow-hidden shrink-0 mt-px" />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section></div>

//         </main>
//     );
// }