import React from 'react'
import { BbcImage } from '../../../ImagesCall/Img'

const Business = ({data}) => {
    return (
        <>
            <div className='w-[80%] mx-auto p-5 ' >
                <div className='flex lg:flex lg:flex-col'>
                    <div>
                        <img className='h-[400px] w-[900px]' src={BbcImage.b1} alt="" />
                    </div>
                    <div className='flex flex-col justify-center p-5'>
                        <h1 className=' font-bold text-2xl py-4 bbc'>China tightens grip on social media companies</h1>
                        <p className='text-sm bbc'>Changes to China's state secrets law requires internet firms to monitor information shared by users.</p>
                        <div>
                            <button className=' border-2 border-black my-4 px-3 p-1 bbc'>See More</button>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-5 gap-2 lg:grid lg:grid-cols-3 sm:grid sm:grid-cols-2 xs:flex xs:flex-col' >
                    {data.map((Bus)=>{
                        return(
                            <>
                            <div >
                                <div className='font-bold pt-10 xs:line-clamp-1 bbc' >{Bus?.title}</div>
                                <div className='flex items-center gap-2 py-2 bbc'>
                                    <div className='text-xs text-gray-800'>{Bus?.time}</div>
                                    <div className='font-medium'>|</div>
                                    <p className='font-medium'>News</p>
                                    <div className='text-xs text-gray-800'>{Bus?.area}</div>
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

export default Business