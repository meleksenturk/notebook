import React from 'react'
import Navbar from '../components/Navbar'
// import { Carousel } from 'antd';
// import AuthCarousel from '../components/Carousel';
// import { CheckOutlined } from '@ant-design/icons'
const HomePage = () => {

    return (
        <>
            <Navbar />

            <div className='w-full h-full flex justify-between items-center'>
                <div className='flex justify-center w-full'>
                    <p className=' mt-52 font-bold text-green-400 text-4xl '>Kişisel Not Defterinize Hoşgeldiniz</p>
                </div>
                {/* <div className='md:w-[700px] w-[400px] h-2/6'>
                    <Carousel className='!h-full px-6' autoplay>
                        <AuthCarousel img="images/1.jpg" />
                        <AuthCarousel img="images/2.jpg" />
                        <AuthCarousel img="images/3.jpg" />

                    </Carousel>
                </div> */}


            </div>


        </>
    );
};
export default HomePage;