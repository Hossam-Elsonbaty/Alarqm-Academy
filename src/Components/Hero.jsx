import React, {useEffect, useState} from 'react'
export default function Example() {
  const [displayedText, setDisplayedText] = useState('');
  const text = "AL-Arqam Academy aims to make Shariah studies accessible for the participants in its programs. The main objective of the program is to equip young Muslims with the necessary, proper knowledge grounded on the Book of Allah and Sunnah of the Prophet (PBUH) to understand their religion and to promote and reinforce sound Shariah studies with an understanding of the righteous predecessors through a modern, easily fathomable approach that is in touch with the reality of time and place.";
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 30); // Adjust typing speed by changing this value
    return () => clearInterval(typingInterval); // Cleanup interval on component unmount
  }, []);
  return (
    <div id='heroSection' className="bg-cyan-700 h-lvh">
      <div className="relative isolate px-6 pt-14 lg:px-8 ">
        <div className=" max-w-4xl py-0 flex items-center justify-start  sm:py-48 lg:py-56">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              ALARQAM METHODS
            </h1>
            <p className="mt-6 text-lg text-left leading-8 text-white">
              {displayedText}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
