
/**
 *  version 1
 */
// 'use client'

// import { serverSideFunction } from "@/utils/server-utils";

// export default function ClientRoutePage() {

//   const result = serverSideFunction()
//   return <div>ClientRoutePage { result }</div>;
// }


/**
 *  version 2
 */

"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from "@/components/theme-provider";
import { clientSideFunction } from "@/utils/client-utils";

export default function ClientRoutePage() {

  const settings = {
    dots: true
  }

  const theme = useTheme()

  const clienteResult = clientSideFunction()
 
  return (
    <>
      <h1 style={{ color: theme.colors.primary }}>Client component { clienteResult }</h1>

      <div className="image-slider-container">
        <Slider {...settings}>
          <div>
            <img src="https://picsum.photos/400/200" />
          </div>
          <div>
            <img src="https://picsum.photos/400/200" />
          </div>
          <div>
            <img src="https://picsum.photos/400/200" />
          </div>
          <div>
            <img src="https://picsum.photos/400/200" />
          </div>
        </Slider>
      </div>
    </>
  );
}