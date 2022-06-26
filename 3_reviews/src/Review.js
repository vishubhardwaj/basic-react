import React, { useState } from 'react';
import Reviews from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  const [index, setIndex] = useState(0);
  const { name, job, image, text } = Reviews[index];

  const checkNumber = (number) => {
    if (number > Reviews.length - 1){
      return 0
    }
    if (number < 0){
      return Reviews.length - 1
    }
    return number
  };


  const nextPerson = ()=>{
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex)
    });
  };


  const prevPerson = ()=>{
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex)
    });
  };


  const randomPerson = () => {
    let randomIndex = Math.floor(Math.random() * Reviews.length);
    if (randomIndex === index){
      randomIndex = index + 1;
    }
    setIndex(checkNumber(randomIndex));
  };


  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className='person-img' />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="random-btn" onClick={randomPerson}>
          surprise-mua
        </button>
    </article>
  );
};

export default Review;
