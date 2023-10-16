'use client';
import React from 'react';

export default function Cards() {
    return (
        <div className="card">
            <div className="card-content">
                <div className="card-image">
                    <i className="fa-duotone fa-blender-phone"></i>
                </div>
                <div className="card-info-wrapper">
                    <div className="card-info">
                        <i className="fa-duotone fa-blender-phone"></i>
                        <div className="card-info-title">
                            <h3>Blender Phones</h3>
                            <h4>These absolutely deserve to exist.</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const CardBadge = ({
  children
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return <div className="font-mono font-bold text-xs text-black/50 dark:text-white/50  px-[6px] py-[3.25px] tracking-[-0.01em] rounded-[6px] uppercase flex justify-center items-center bg-black/5 dark:bg-white/[0.15] border border-black/[0.1] dark:border-white/[0.1]">
      {children}
    </div>;
};
  