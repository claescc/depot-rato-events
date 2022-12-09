import { CustomLink } from "../Navigation/NavBar"
// import { useState } from "react"

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white fixed bottom-0 left-0 right-0">
      <div className="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase">Group</h2>
          <ul className="text-sm font-light">
            <CustomLink to="/home" className="block pb-2">
              About
            </CustomLink>
            <CustomLink to="/" className="block pb-2">
              Join Us
            </CustomLink>
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase">Events</h2>
          <ul className="text-sm font-light">
            <CustomLink to="/calendar" className="block pb-2">
              Calendar
            </CustomLink>
            <CustomLink to="/gallery" className="block pb-2">
              Gallery
            </CustomLink>
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase">Social Media</h2>
          <ul className="text-sm font-light">
            <li className="text-white hover:text-mint-200 block pb-2">
              <a
                href="https://www.facebook.com/groups/depotratodurabrikcommunity"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>

            <CustomLink to="/contact" className=" block pb-2">
              Contact
            </CustomLink>
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase">Legal</h2>
          <ul className="text-sm font-light">
            <CustomLink to="/" className="block pb-2">
              Privacy Policy
            </CustomLink>

            <CustomLink to="/" className="block pb-2">
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
