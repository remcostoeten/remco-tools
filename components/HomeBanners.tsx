'use client';
import React, { useEffect, useState } from "react"

import AnimatedDiv from "@/utils/AnimatedDiv"
import ToolCard from "@/components/core/Carousel/CardComponent"
import { banners } from "@/components/core/Carousel/Carousel"

export const HomeBanners = () => {
  const [scrollPosition, setScrollPosition] = useState(100)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  console.log(scrollPosition)

  return (
    <div className="pt-8 big-container mQ3_iconsb-22">
      <div className="grid items-center content-center grid-cols-3 col-span-3 gap-6 mx-auto selection:grid justify-items-center">
        {banners.map((banner, index) => (
          <AnimatedDiv
            key={index}
            delay={`1.9${index * 0.05}`}
            className="w-full icon-hover"
          >
            <ToolCard
              title={banner.title}
              description={banner.description}
              icon={banner.icon}
            />
          </AnimatedDiv>
        ))}
      </div>
    </div>
  )
}
