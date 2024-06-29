import React from 'react'

const CategoryCardSmall = () => {
  
  return (
    <>
    <div className="overflow-x-scroll px-5">
        <div className="h-48 md:h-56 flex gap-3 w-full">
            <div className="h-full min-w-28 inline-block select-none">
                <div className="h-[86%] relative">
                    <div className="h-[40%] w-full rounded "></div>
                    <div className="h-[60%] w-full rounded bg-slate-300 relative"></div>
                    <img className='absolute -bottom-3 select-none' src="/img/jj.png" alt="" />
                    
                </div>
                <h5 className='text-sm text-center capitalize font-1'>shirt</h5>
            </div>
        </div>
    </div>
    </>
  )
}

export default CategoryCardSmall