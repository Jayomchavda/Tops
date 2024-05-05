import React from 'react'
import { Carousel } from "flowbite-react";

export default function Heroimgslider() {
    return (


        <div className="h-72 sm:h-80 xl:h-128 2xl:h-120 h-30rem">



            <Carousel >
                <img src="https://in.ajmal.com/media/mageplaza/bannerslider/banner/image/m/o/mothers-day-2024.jpg?auto=webp&format=pjpg&width=1280&height=1600&fit=cover" alt="..." />
                <img src="https://in.ajmal.com/media/mageplaza/bannerslider/banner/image/p/r/premium-collection.jpg?auto=webp&format=pjpg&width=1280&height=1600&fit=cover" alt="..." />
                <img src="https://in.ajmal.com/media/mageplaza/bannerslider/banner/image/a/r/artisan-edp-100ml_1_.jpg?auto=webp&format=pjpg&width=1280&height=1600&fit=cover" alt="..." />
                <img src="https://in.ajmal.com/media/mageplaza/bannerslider/banner/image/g/o/gold-series-2.jpg?auto=webp&format=pjpg&width=1280&height=1600&fit=cover" alt="..." />
            </Carousel>
        </div >
    )
}
