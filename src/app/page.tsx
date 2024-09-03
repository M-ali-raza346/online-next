import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div><figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 ">
    <Image className="w-full h-auto md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/download.jpeg" alt="" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “Our home provides us with a sense of protection and shelter from the outside world. We can be ourselves and let our guard down in the comfort of our homes. The feeling of safety and security that home provides is essential to our mental and emotional well-being.”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          home
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          dream
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page