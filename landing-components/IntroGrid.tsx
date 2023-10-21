import React from "react";

export default function IntroGrid() {
    return (
        <div>
            <div className="grid grid-cols-6 grid-rows-4 gap-4">
                <div className="col-span-2 row-span-3">1</div>
                <div className="col-span-2 col-start-1 row-start-4">9</div>
                <div className="col-span-3 row-span-2 col-start-3 row-start-3">15</div>
                <div className="row-span-2 col-start-3 row-start-1">16</div>
                <div className="col-span-2 row-span-2 col-start-4 row-start-1">17</div>
            </div>
        </div>
    )
}
