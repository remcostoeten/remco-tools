import React from 'react';

export default function Banner({ rotation, title, iconSrc }) {
    const cardRotation = `rotate(${rotation}deg)`;
    const imageRotation = `rotate(${rotation * -1}deg)`;

    return (
        <div className={`relative h-[178px] transform ${cardRotation}`}>
            <div className="absolute w-[350px] h-[89px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative h-[89px]">
                    <div className="absolute w-[341px] h-[82px] top-[7px] left-[9px] bg-black blur-[10px] opacity-80"></div>
                    <div className="absolute w-[341px] h-[82px] top-0 left-0 bg-[#181818]"></div>
                    <div className="flex w-[250px] h-[32px] items-center gap-[4] absolute top-[25px] left-[40px]">
                        <img className={`relative w-[33.88px] h-[33.88px] transform ${imageRotation} object-cover`} alt="Icon" src={iconSrc} />
                        <div className="relative text-white text-[23.8px]">{title}</div>
                    </div>
                    <div className="absolute w-[85px] h-[82px] top-0 left-[257px] bg-gradient-to-b from-[rgba(24,24,24,0.53)] to-[rgba(24,24,24,0.6)]"></div>
                    <div className="absolute w-[16px] h-[16px] top-[33px] left-[304px]">
                        <div className="relative h-[16px]">
                            <div className="absolute w-[3px] h-[20px] top-[-2px] left-[7px] bg-white rotate-[-45deg]"></div>
                            <div className="absolute w-[3px] h-[20px] top-[-2px] left-[7px] bg-white rotate-[-135deg]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
