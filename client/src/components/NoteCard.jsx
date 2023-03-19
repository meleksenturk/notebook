import React from 'react'
import { Card,Button } from "antd"


const NoteCard = ({ not }) => {
   
  return (
    <div className='cart-items py-6 px-6  rounded-lg flex justify-between items-center  '>
      <Card
      className='hover:bg-slate-100'
        title={not.baslik}
        bordered={false}
        style={{
          width: 500,
          
        }}
      >

       <div>
       <p >{not.explanation}</p>
       </div>
       <div className='flex justify-end'>
        <Button type="default" size="small" className='hover:bg-blue-500'><span className='text-black'>Notu Sil</span></Button>
       </div>
        


      </Card>
    </div>
  )
}

export default NoteCard