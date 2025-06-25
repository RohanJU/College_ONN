import React from 'react'
import { MdOutlineWhatsapp } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { IoLogoYoutube } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import { CiTwitter } from "react-icons/ci";



export default function Footer() {
  return (
    <div className='bg-[#252641] text-[#83839A] text-center py-4 leading-relaxed'>
      {/* <h1>COLLEGE ONN</h1> */}

      <p className='mt-10 mb-2'>Subscribe to get our Newsletter</p>
      <div className='flex flex-wrap gap-6 justify-center'>
        <input type="email" placeholder="Your Email" className='border rounded-3xl px-4 py-2' />
        <button className="bg-[#49BBBD] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#3da2a4] transition w-fit cursor-pointer">
          Subscribe
        </button>
      </div>
      <FooterIcon/>
      <p className='mt-10'>Careers | Privacy Policy | Terms & Conditions</p>
      <p>@2025 DRUZE ANALYTICS</p>
    </div>
  )
}



function FooterIcon() {
  return (
    <div className="flex gap-4 justify-center mt-10"> 
      <Icon IconComponent={MdOutlineWhatsapp} />
      <Icon IconComponent={CiFacebook} />  
      <Icon IconComponent={IoLogoYoutube} />  
      <Icon IconComponent={BsInstagram} />   
      <Icon IconComponent={CiTwitter} />
    </div>
  )
} 


function Icon({ IconComponent }){
  return (
    <div className="p-3 bg-[#49BBBD] hover:bg-[#3da2a4] rounded-full text-white text-2xl cursor-pointer">
        <IconComponent />
    </div>
  )
}