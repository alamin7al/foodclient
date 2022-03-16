import React from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import pepole from './revewData.js'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';


const Revew = () => {
  const [index, setindex] = useState(0)
  const { name, job, image, text } = pepole[index]

  const cheeckNumber = (number) => {
    if (number > pepole.length - 1) {
      return 0
    }
    if (number < 0) {
      return pepole.length - 1
    }
    return number
  }



  const nextPerson = () => {
    setindex((index) => {
      let newIndex = index + 1
      return cheeckNumber(newIndex)
    })
  }
  const prevPerson = () => {
    setindex((index) => {
      let newIndex = index - 1
      return cheeckNumber(newIndex)
    })
  }

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * pepole.length)
    if (randomNumber === index) {
      randomNumber = index + 1
    }
    setindex(randomNumber)
  }

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Revew;