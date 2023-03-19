import React from 'react'

const AuthCarousel = ({img}) => {
    return (
        <div className='!flex flex-col items-center justify-center h-full mb-10 '>
            <img src={img} alt="" className='w-[600px] h-[400px] mt-10' />
            <h3 className='text-bold text-white text-4xl text-center'></h3>
            <p className='mt-5 text-2xl text-white text-center'></p>
        </div>
    )
}

export default AuthCarousel