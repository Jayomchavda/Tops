import React from 'react'
import Cardcom from '../Cardcom'
import shopdata from "../shopdata.json"
import Footer from './Footer'



export default function Shop() {
    return (
        <>
            <div className="container mx-auto px-4 py-3">
                <div className="relative pb-4">
                    <img src="../../public/shop.png" alt="Shop Image" className="w-full" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <i className="text-white text-5xl font-bold title"> SHOP </i>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    {shopdata.map((item) => (
                        <Cardcom key={item.id} item={item} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}
