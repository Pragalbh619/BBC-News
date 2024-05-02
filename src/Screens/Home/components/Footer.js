import React from 'react'
import { BbcImage } from '../../../ImagesCall/Img'

const Footer = () => {
    return (
        <>
            <div className='w-[80%] mx-auto p-5'>
                <div><img className='h-[100px] w-[100px]' src={BbcImage.Logo} alt="" /></div>

                <div className='list-none flex gap-2 flex-wrap bbc'>
                    <li><a href="Home">Home</a></li>
                    <li><a href="News">News</a></li>
                    <li><a href="Sport">Sport</a></li>
                    <li><a href="Business">Business</a></li>
                    <li><a href="Innovation">Innovation</a></li>
                    <li><a href="Culture">Culture</a></li>
                    <li><a href="Travel">Travel</a></li>
                    <li><a href="Earth">Earth</a></li>
                    <li><a href="Video">Video</a></li>
                    <li><a href="Live">Live</a></li>
                    <li><a href="Audio">Audio</a></li>
                    <li><a href="Weather">Weather</a></li>
                    <li><a href="BBC Shop">BBC Shop</a></li>
                </div>

                <div>
                    <button className='bg-gray-300 p-2 px-4 mt-5 bbc'>BBC in other languages</button>
                </div>

            </div>
        </>
    )
}

export default Footer


