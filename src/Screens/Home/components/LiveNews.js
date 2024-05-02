import React from 'react'
import { BbcImage } from '../../../ImagesCall/Img'

const LiveNews = ({ data, item }) => {
    return (
        <>
            <div className='flex w-[80%] mx-auto gap-2 pt-5 '>
                <div className='w-[100%] flex lg:flex lg:flex-col gap-2'>
                    <div className='flex sm:flex sm:flex-col-reverse'>
                        <div className=' w-[55%] sm:w-full'>
                            {data.map((DataSet) => {
                                return (
                                    <>
                                        <div className=' w-[100%] p-4 sm:flex gap-2 '>
                                            <div> <img className='h-[150px] w-[300px] ' src={DataSet?.img} alt="" /></div>
                                            <div>
                                                <div className='font-bold py-2 bbc'>{DataSet?.title}</div>
                                                <div className='text-sm text-gray-800 py-2 sm:hidden  bbc'>{DataSet?.description}</div>
                                                <div className='flex items-center gap-2 py-2 bbc'>
                                                    <div className='text-xs text-gray-800 '>{DataSet?.time}</div>
                                                    <div className='font-medium'>|</div>
                                                    <div className='font-medium'>News</div>
                                                    <div className='text-xs text-gray-800'>{DataSet?.area}</div>
                                                </div>
                                            </div>
                                            <hr />
                                        </div>
                                    </>
                                )
                            })}
                        </div>

                        <div className=' w-[100%] pt-4'>
                            <img className='h-[350px]  ' src={BbcImage.Police} alt="" />
                            <div className='font-medium text-3xl py-2 bbc'><span className='text-red-500 '>Live</span> New York police arrest dozens as protesters cleared from Columbia campus</div>
                            <p className='text-sm bbc'>Police say they have cleared protesters from the campus, including a two-week old encampment on the lawns</p>
                            <div className='font-medium py-4 bbc' >
                                <h5>News</h5>
                                <ul className='pl-[25px] py-4'>
                                    <li className='list-disc '>What do student protesters at US universities want?</li>
                                    <li className='list-disc '>Which US universities have had major Gaza protests?</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className=' lg:w-full w-[55%]'>
                        <div className='lg:grid lg:grid-cols-2 w-full sm:flex sm:flex-col'>
                            {item.map((DataSet1) => {
                                return (
                                    <>
                                        <div className='w-[90%] p-2 bbc'>
                                            <div className='font-bold '>{DataSet1?.title}</div>
                                            <div className='text-sm text-gray-800 py-2'>{DataSet1?.description}</div>
                                            <div className='flex items-center gap-2 py-2'>
                                                <div className='text-xs text-gray-800'>{DataSet1?.time}</div>
                                                <div className='font-medium'>|</div>
                                                <div className='font-medium'>News</div>
                                                <div className='text-xs text-gray-800'>{DataSet1?.area}</div>
                                            </div>
                                            <div>
                                                <hr />
                                            </div>
                                        </div>
                                    </>
                                )
                            })}

                        </div>
                    </div>
                </div>

            </div>
            <div className='h-[2px] w-[77%] mt-[80px] mx-auto bg-black'>

            </div>
        </>
    )
}

export default LiveNews