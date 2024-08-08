import React from 'react'
import Slider from "react-slick";
import list from '../../public/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Freebook = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    const filterData=list.filter((data)=>data.category==='free');
    console.log(filterData)
  return (
    <>
        <div className='max-w-screen-2xl items-center container mx-auto md:px-20 px-4 flex flex-col  my-10'>
            <h1 className='font-semibold text-xl pb-2'>Free Book&apos;s</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aliquam magnam quas ullam!</p>
        </div>
        <div>
        <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
        </Slider>
        </div>
    </>
    
  )
}

export default Freebook