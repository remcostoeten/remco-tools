
import AbstractNavigation from "@/components/abstract-landing/AbstractNavigation";
import Video from "@/components/abstract-landing/Video";
import React from "react";

export default function page() {
    return <>
        <main className="flex justify-between gap-4">
            <section className="flex flex-col gap-4">
                Some intro text
            </section>

            <section className="flex flex-col">

                <AbstractNavigation />
      
                    <Video/>
            </section>


        </main>
    </>;
}
