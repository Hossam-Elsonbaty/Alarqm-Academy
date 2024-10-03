import React from 'react';
import { FaLeanpub } from "react-icons/fa";
import { FaBookQuran } from "react-icons/fa6";
import { GiBookshelf } from "react-icons/gi";
import image from '../Images/Blue_Grey.png'
import { GiTeacher } from "react-icons/gi";
import { BsTranslate } from "react-icons/bs";
import { SiKnowledgebase } from "react-icons/si";
import FormatCurrency from '../Context/FormatCurrency';

export const Programs = () => {
  return (
    <>
      <div class="bg-white py-24 sm:py-32 objectives items-center flex flex-col gap-10">
        <header className='header'>
          <h1 className='mt-2 text-3xl font-bold tracking-tight sm:text-4xl font-LibreBaskerville '>Our Programs</h1>
        </header>
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            <div className='Program flex flex-col gap-4 items-center'data-aos="fade-up"data-aos-delay="30" data-aos-duration="300">
              <img src={image} alt="image" className='w-24' />
              <h1 className='font-LibreBaskerville'>My First Step in the Quran Journey</h1>
              <p className='description'> 
                This level is for gifted students who want to complete the memorization of
                the Qur’an, through intense commitment on an intensive course for not a
                short period, with teachers with experience in this field.
                Graduates of this program will be able to participate efficiently in local and
                international Holy Quran competitions.
              </p>
              <div className='pricing'>
                <span className='price'>{FormatCurrency(99)}</span>
                <span className='type'>/month</span>
              </div>
              <button className='start'>GET STARTED</button>
            </div>
            <div className='Program flex flex-col gap-4 items-center'data-aos="fade-up"data-aos-delay="30" data-aos-duration="300">
              <img src={image} alt="image" className='w-24' />
              <h1 className='font-LibreBaskerville'>Hoffaz Dar Al-Arqam “Memorization”</h1>
              <p className='description'> 
                This level is for gifted students who want to complete the memorization of
                the Qur’an, through intense commitment on an intensive course for not a
                short period, with teachers with experience in this field.
                Graduates of this program will be able to participate efficiently in local and
                international Holy Quran competitions.
              </p>
              <div className='pricing'>
                <span className='price'>{FormatCurrency(150)}</span>
                <span className='type'>/month</span>
              </div>
              <button className='start'>GET STARTED</button>
            </div>
            <div className='Program flex flex-col gap-4 items-center'data-aos="fade-up"data-aos-delay="30" data-aos-duration="300">
              <img src={image} alt="image" className='w-24' />
              <h1 className='font-LibreBaskerville'>Inheritors of the Prophets’ program</h1>
              <p className='description'> 
                This level is for gifted students who want to complete the memorization of
                the Qur’an, through intense commitment on an intensive course for not a
                short period, with teachers with experience in this field.
                Graduates of this program will be able to participate efficiently in local and
                international Holy Quran competitions.
              </p>
              <div className='pricing'>
                <span className='price'>{FormatCurrency(250)}</span>
                <span className='type'>/month</span>
              </div>
              <button className='start'>GET STARTED</button>
            </div>
          </dl>
        </div>
      </div>
    </>
  )
}
