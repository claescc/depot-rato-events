import { CustomLink } from "../Navigation/NavBar"
// import { useState } from "react"

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white fixed bottom-0 left-0 right-0">
      <div className="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase">Group</h2>
          <ul className="text-sm font-light">
            <CustomLink to="/home" className="hover:text-mint-200 block pb-2">
              About
            </CustomLink>
            <CustomLink to="/home" className="hover:text-mint-200 block pb-2">
              Join Us
            </CustomLink>
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase">Events</h2>
          <ul className="text-sm font-light">
            <CustomLink to="/calendar" className="hover:text-mint-200 block pb-2">
              Calendar
            </CustomLink>
            <CustomLink to="/gallery" className="hover:text-mint-200 block pb-2">
              Gallery
            </CustomLink>
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase">Social Media</h2>
          <ul className="text-sm font-light">

        {/* This linky schnizzle no worki - routi fixi */}

            <CustomLink
              to={{ pathname: "https://www.facebook.com/groups/depotratodurabrikcommunity" }}
              target="_blank"
              className="hover:text-mint-200 block pb-2"
            >
              Facebook
            </CustomLink>
            <CustomLink to="/contact" className="hover:text-mint-200 block pb-2">
              Contact
            </CustomLink>
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase">Legal</h2>
          <ul className="text-sm font-light">
            <CustomLink to="/" className="hover:text-mint-200 block pb-2">
              Privacy Policy
            </CustomLink>

            <CustomLink to="/" className="hover:text-mint-200 block pb-2">
              Terms &amp; Conditions
            </CustomLink>
          </ul>
        </div>
      </div>
      <div className="bg-green-800 py-4 px-4 flex justify-center ">
        <span className="text-xs text-center">CLAESCC PRODUCTIONS. All Rights Reserved.</span>
      </div>
    </footer>
  )
}
