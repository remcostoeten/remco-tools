import React from "react";
import { DisplayCategories } from "./DisplayCategory";
import { NewCategory } from "./NewCategory";
import { NewItemInCategory } from "./NewItemInCategory";
import SectionSpacer from "@/components/ui/SectionSpacer";

export default function page() {
    return (<>    <SectionSpacer
        variant="small" />
        <div className='home-container'><h1>Add New Category</h1>
            <NewCategory />

            <h1>Add New Item in Category</h1>
            <NewItemInCategory />

            <h1>Display Categories and Items</h1>
            <DisplayCategories /></div></>
    )
}

