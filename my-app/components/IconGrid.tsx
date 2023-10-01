import GithubLogo from "./core/icons/GithubLogo";
import MagneticGsap from '@c/effects/gsap';
import MagneticFramer from '@c/effects/framer';

function AlternatingGrid() {
    const rows = 3;
    const cols = 4;

    return (
        <div>
            {Array.from({ length: rows }).map((_, rowIndex) => (
                <div key={rowIndex} className="flex gap-15">
                    {Array.from({ length: cols }).map((_, colIndex) => {
                        // Determine if the cell should have the alternate color or not
                        const isAlternateColor = (rowIndex + colIndex) % 2 === 1;

                        return (
                            <div
                                key={colIndex}
                                className={`w-24 gird place-items-center alternatinggrid h-24 ${isAlternateColor ? "bg-gray-300" : "bg-gray-500"}`}
                            >
                                <MagneticFramer>

                                    <GithubLogo />
                                </MagneticFramer></div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
}

export default AlternatingGrid;
