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
