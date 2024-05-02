import React from 'react'
import { BbcImage } from '../../../ImagesCall/Img'

const Culture = ({data}) => {
    return (
        <>
            <div className='w-[80%] mx-auto p-5'>
                <div className='flex flex-row-reverse lg:flex lg:flex-col'>
                    <div>
                        <img className='h-[400px] w-[900px]' src={BbcImage.c1} alt="" />
                    </div>
                    <div className='flex flex-col justify-center  px-2'>
                        <h1 className=' font-bold text-2xl py-4 bbc'>Gosling and Blunt on sarcasm, stunts and singing at the Oscars</h1>
                        <p className='text-sm bbc'>The two Hollywood stars have teamed up for a new film, The Fall Guy, based on the 1980s hit TV show.</p>
                        <div>
                            <button className=' border-2 border-black my-4 px-3 p-1 bbc' >See More</button>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-5 gap-2 lg:grid lg:grid-cols-3 sm:grid sm:grid-cols-2 xs:flex xs:flex-col'>
                    {data.map((Cul) => {
                        return (
                            <>
                                <div >
                                    <div className='font-bold pt-10 xs:line-clamp-1 bbc' >{Cul?.title}</div>
                                    <div className='flex items-center gap-2 py-2 bbc'>
                                        <div className='text-xs text-gray-800'>{Cul?.time}</div>
                                        <div className='font-medium'>|</div>
                                        <p className='font-medium'>News</p>
                                        <div className='text-xs text-gray-800'>{Cul?.area}</div>
                                    </div>
                                </div>

                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Culture