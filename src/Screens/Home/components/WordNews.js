import React from 'react'
import { BbcImage } from '../../../ImagesCall/Img'

const WordNews = ({data}) => {
  return (
    <>
        <h6 className='w-[77.5%] mx-auto  pt-2 font-bold bbc'>Word News</h6>
            <div className='p-5 w-[80%] mx-auto'>
                <div className='flex gap-2 lg:grid lg:grid-cols-3 sm:grid sm:grid-cols-2 xs:flex xs:flex-col'>
                    {data.map((nv) => {
                        return (
                            <>
                                <div className='pb-5'>
                                    <div className=''>
                                        {/* <img className='h-[20px] w-[20px] float-left ' src={BbcImage.PlayButton} alt="" /> */}
                                        <div className='font-bold gap-2 xs:line-clamp-1 bbc'>Watch {nv?.title}</div>
                                    </div>

                                    <div className='flex items-center gap-2 py-2 bbc' >
                                        <div className='text-xs text-gray-800'>{nv?.time}</div>
                                        <div className='font-medium'>|</div>
                                        <div><h5 className='font-medium'>News</h5></div>
                                        <div className='text-xs text-gray-800'>{nv?.area}</div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                   

                </div>
            </div>
            <div className='h-[2px] w-[77.5%]  mx-auto bg-black'>

</div>
    </>
  )
}

export default WordNews