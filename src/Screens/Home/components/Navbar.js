import React from 'react'
import { BbcImage } from '../../../ImagesCall/Img'

const Navbar = () => {
    return (
        <>
            <div className='w-full mx-auto'>
                <div className='flex justify-between items-center sm:mr-[40%]'>
                    <div className='flex ml-5 gap-5'>
                        <img src={BbcImage.Hamburger} alt="" />
                        <img src={BbcImage.SearchIcon} alt="" />

                    </div>
                    <div className=''>
                        <img className=' h-[50px] w-[100px]' src={BbcImage.Logo} alt="" />
                    </div>
                    <div className='mr-5 w-[150px] flex justify-between sm:hidden bbc'>
                        <button className=' bg-black text-white px-3 py-1 '>Register</button>
                        <button>Sign In</button>
                    </div>
                </div>
                <hr />
                <div>
                    <ul className='flex justify-center gap-4 py-2 lg:hidden bbc' >
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
                    </ul>
                    <hr />
                </div>
               
            </div>
        </>
    )
}

export default Navbar