import { BbcImage } from '../../../ImagesCall/Img';
import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slides = ({ data }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(currentSlide);
        }
    }, [currentSlide]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        afterChange: (index) => setCurrentSlide(index),
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
         
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                   
                }
            },
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                    
                }
            },
            {
                breakpoint: 480, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  
                }
            }
          
        ]

    };

    return (
        <div className='bg-gray-800 p-5'>
            <div className='pt-5'>
                <div className='h-[2px] w-[77%] mx-auto bg-white'></div>
            </div>
      
            <div className='w-[80%] mx-auto'>
                <Slider ref={sliderRef} {...settings}>
                    {data.map((DataSet, index) => (
                        <div key={index} className='w-[100%] p-4 bbc'>
                            <img className='h-[150px] w-[300px]' src={DataSet?.img} alt="" />
                            <div className='font-bold py-2 text-white'>{DataSet?.title}</div>
                            <div className='text-sm text-white py-2'>{DataSet?.description}</div>
                            <div className='flex items-center gap-2 py-2'>
                                <div className='text-xs text-white'>{DataSet?.time}</div>
                                <div className='font-medium text-white'>|</div>
                                <div className='text-xs text-white'>{DataSet?.area}</div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className='h-[2px] w-[77.5%] mx-auto mt-10 bg-black'></div>
        </div>
    );
};

export default Slides;
