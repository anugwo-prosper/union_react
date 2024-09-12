
"use client";

import { Carousel } from "flowbite-react";

export function Banner() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slide={false}>
    {}

        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
        
      </Carousel>
    </div>
  );
}
