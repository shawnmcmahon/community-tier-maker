    import React from 'react'
    
    export default function tiers() {
        return (
            <div className="outter-container border-black w-11/12 h-80 bg-black text-white"  >
                <div className="tier-row flex-row text-white bg-gray-900 w-100 h-16">
                    <div className="row-label bg-red-800 w-20 h-16">S</div>
                </div>
                <div className="tier-row flex-row text-white bg-gray-900 w-100 h-16">
                    <div className="row-label bg-orange-500 w-20 h-16">A</div>
                </div>
                <div className="tier-row flex-row text-white bg-gray-900 w-100 h-16">
                    <div className="row-label bg-yellow-400 w-20 h-16">B</div>
                </div>
                <div className="tier-row flex-row text-white bg-gray-900 w-100 h-16">
                    <div className="row-label bg-yellow-300 w-20 h-16">C</div>
                </div>
                <div className="tier-row flex-row text-white bg-gray-900 w-100 h-16">
                    <div className="row-label bg-green-600 w-20 h-16">D</div>
                </div>
                
            </div>
        )
    }
    