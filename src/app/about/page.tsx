import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div><figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <Image className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/img.jpeg" alt="" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “My name is M ali raza and I am a Hafiz ul Quran. I have completed my matriculation and which has been an important step in my education. Memorizing the Quran was a challenging but rewarding experience teaching me discipline and patience. It is an honor to be able to recite the Quran from memory and this achievement has strengthened my commitment to my faith and personal growth.







.”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          Muhammad Ali raza
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          student of AI Generative
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page