import React from 'react'

const GreatReads = ({ data }) => {
  return (
    <>
    <h6 className='w-[77.5%] mx-auto  pt-2 font-bold bbc'>Great Reads</h6>
      <div className='flex w-[80%] mx-auto gap-2 p-5 sm:flex sm:flex-col'>
        {data.map((gr) => {
          return (
            <>
            
              <div className=' w-[100%] bbc'>
                <div><img className='' src={gr?.img} alt="" /></div>
                <div className='font-medium py-2'>{gr?.title}</div>
                <div className='text-sm text-gray-800'>{gr?.description}</div>
                <div className='flex items-center gap-2 py-5'>
                  <div className='text-xs text-gray-800'>{gr?.time}</div>
                  <div className='font-medium'>|</div>
                  <div className='font-medium'><h5>News</h5></div>
                  <div className='text-xs text-gray-800'>{gr?.area}</div>
                </div>
                <div className='h-[2px]   mx-auto bg-gray-300'>

                </div>
              </div>

            </>
          )
        })}
      </div>
      
    </>
  )
}

export default GreatReads