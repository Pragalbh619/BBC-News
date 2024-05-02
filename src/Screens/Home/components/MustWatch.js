import React from 'react'
import { BbcImage } from '../../../ImagesCall/Img'

const MustWatch = () => {
    return (
        <>
            <div className='bg-gray-800'>

                <div className='pt-5'>
                    <div className='h-[2px] w-[77%]  mx-auto bg-white'>

                    </div>

                    <h6 className='mx-auto w-[77%] pt-2 font-bold text-white bbc'>Must Watch</h6>
                </div>
                <div className='flex w-[80%] mx-auto p-5 lg:flex lg:flex-col-reverse' >
                    <div className='bg-black flex flex-col justify-center  px-2 '>
                        <h3 className='text-white font-bold text-2xl py-4 bbc'>How a village in the Himalayas was entirely relocated</h3>
                        <p className='text-white text-sm bbc'>The hamlet of Samdzong was washed away by the river. The inhabitants built a new village from scratch.</p>
                        <div><button className='text-white border-2 border-white my-4 px-2'>See more</button></div>
                    </div>
                    <div className='w-full relative'>
                        <img className='w-full' src={BbcImage.mw} alt="" />
                        <img className='h-12 w-12 absolute bottom-0 left-0 ' src={BbcImage.PlayButton} alt="" />
                    </div>

                </div>

            </div>
            <div className='h-[2px] w-[77%] mx-auto mt-10 bg-black'>

            </div>
        </>
    )
}

export default MustWatch