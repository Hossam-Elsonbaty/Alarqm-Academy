'use client'
import React from 'react'
import { useState } from 'react'
import Patterns from '../Images/White.png';
export default function Example() {
  return (
    <div className="bg-cyan-700 h-lvh">
      <div className="relative isolate px-6 pt-14 lg:px-8 ">
        {/* <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div> */}
        <div className=" max-w-4xl py-0 flex items-center justify-start  sm:py-48 lg:py-56">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              ALARQAM METHODS
            </h1>
            <p className="mt-6 text-lg text-left leading-8 text-white">
              Al-Arqam Academy aims to make Shariah studies accessible for the participants in
              its programs. The main objective of the program is to equip young Muslims with
              the necessary, proper knowledge grounded on the Book of Allah and Sunnah of the
              Prophet (PBUH) to understand their religion and to promote and reinforce sound
              Shariah studies with an understanding of the righteous predecessors through a
              modern, easily fathomable approach that is in touch with the reality of time and
              place.
            </p>
          </div>
        </div>
        {/* <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div> */}
      </div>
    </div>
  )
}
