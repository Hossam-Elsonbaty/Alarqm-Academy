import React from 'react';
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";

export const Footer = () => {
  return (
    <footer id='footerSection' class="bg-black text-white py-20 ">
      <div class="container mx-auto text-center">
        <div class="flex justify-center mb-8">
          <a href="#" class="mx-3 text-3xl">
            <CiFacebook/>
          </a>
          <a href="#" class="mx-3 text-3xl">
            <CiInstagram/>
          </a>
          <a href="#" class="mx-3 text-3xl">
            <CiTwitter/>
          </a>
        </div>
        <div class="flex justify-center space-x-4 text-xxs uppercase mb-8">
          <a href="#" class="hover:underline">Home</a>
          <a href="#" class="hover:underline">About</a>
          <a href="#" class="hover:underline">Programs</a>
          <a href="#" class="hover:underline">Contact Us</a>
          <a href="#" class="hover:underline">Our Team</a>
        </div>
        <div class="text-sm mt-4">
          <p>Copyright ©2022, QuadraCode</p>
        </div>
      </div>
    </footer>
  )
}
