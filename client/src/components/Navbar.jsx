import React from 'react'
import { Input } from 'antd';
import { Link } from "react-router-dom"
import {
  SearchOutlined,
  LogoutOutlined,
  FormOutlined,
  AudioOutlined,
  DeleteOutlined,
  HomeOutlined
} from '@ant-design/icons'


const Navbar = () => {
  return (
    <div className='navbar border-b mb-6 mt-8 '>
      <header className='flex justify-between items-center gap-2'>
        <div className='logo  ml-5 mb-3 md:w-[250px] w-[200px] '>
          <a href="/">
            <img src="images/mosn2.PNG" alt='' />

          </a>

        </div>
        <div className="header-search flex-1 flex justify-center">
          <Input size="large" placeholder="Ara" prefix={<SearchOutlined />} className="rounded-full max-w-[600px] " />
        </div>
        <div className='menu-items flex justify-between items-center gap-4 mr-10'>
          <div>
            <Link to="/" className='menu-link flex flex-col hover:text-[#40a9ff] transition-all'>
              <HomeOutlined />
              <span className='md:text-[14px] text-[12px]'>
                Anasayfa
              </span>

            </Link>
          </div>
          <div>
            <Link to="/notes" className='menu-link flex flex-col hover:text-[#40a9ff] transition-all'>
              <FormOutlined />
              <span className='md:text-[14px] text-[12px]'>
                Tüm Notlar
              </span>

            </Link>
          </div>
          <div>
            <Link to="/add-note" className='menu-link flex flex-col hover:text-[#40a9ff] transition-all'>
              <FormOutlined />
              <span className='md:text-[14px] text-[12px]'>
                Not Ekle
              </span>

            </Link>
          </div>
          <div>
            <Link to="/add-note" className='menu-link flex flex-col hover:text-[#40a9ff] transition-all'>
              <AudioOutlined />
              <span className='md:text-[14px] text-[12px]'>
                Sesli Not
              </span>

            </Link>
          </div>
          <div>
            <Link to="/add-note" className='menu-link flex flex-col hover:text-[#40a9ff] transition-all'>
              <DeleteOutlined />
              <span className='md:text-[14px] text-[12px]'>
                Çöp Kutusu
              </span>

            </Link>
          </div>
          <div>
            <Link to="/login" className='menu-link flex flex-col hover:text-[#40a9ff] transition-all'>
              <LogoutOutlined />
              <span className='md:text-[14px] text-[12px]'>
                Çıkış
              </span>

            </Link>

          </div>


        </div>
      </header>

    </div>
  )
}

export default Navbar