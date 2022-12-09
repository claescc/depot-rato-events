// import React from "react"
import homeHero from "../../assets/images/DreCommunityBanner.jpeg"

export default function Hero() {
  // get img out of db and do dynamic
  // const [heroHome] = databate{}
  return (
    <div className="w-full flex">
      <img alt="Dre community banner" src={homeHero} className="w-full h-auto " />
      {/* <img alt={heroHome.imageAltText} src={hero.HomeImgRef} className="w-full h-auto max-w-sm " /> */}
    </div>
  )
}
