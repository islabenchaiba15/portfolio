'use client'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';

function Typing({wordsq}) {
    const [text, count] = useTypewriter({
        words: wordsq,
        loop: true,
        delaySpeed: 2000,
      });
  return (
    <h2 className="text-xl md:text-2xl mb-4 w-full flex items-start ">
      I'm a{' '}
      <span className="font-extrabold  text-blue-600 dark:text-blue-400 overflow-hidden ml-2">
        {text}
        <Cursor cursorColor="#DE3163" />
      </span>
    </h2>
  )
}

export default Typing