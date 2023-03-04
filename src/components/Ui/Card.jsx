import React from 'react';
import Img from "./../../assets/img/drin.jpg"
import "./index.scss"
const Card = ({prop}) => {
  return (
    <div className='snap-always card-category bg-white border flex flex-col items-center rounded-xl justify-center gap-3 hover:bg-amber-300 text-sm text-slate-400 font-medium  hover:text-black'>
      <img src={prop.images} alt="category images" className='rounded-xl border' width={70} height={70} />
      <h3 className='category-card-title'>
        {prop.name}
      </h3>
    </div>
  );
};

export default Card;