import React, { useEffect, useState } from 'react'
import AddNote from '../components/AddNote'
import Navbar from '../components/Navbar'
import NoteCard from '../components/NoteCard'

function HomePage() {
  const [notlar, setNotlar] = useState(null)

  useEffect(() => {
    const fetchNotlar = async () => {
      const response = await fetch('http://localhost:4000/api/notes')
      const json = await response.json()

      if (response.ok) {
        setNotlar(json)

      }


    }
    fetchNotlar()


  }, [])

  return (

    <>

      <Navbar />
     
      <div className='flex justify-center text-green-400 font-bold text-3xl '>
        <p>Tüm Notlar</p>
      </div>
      <div className='grid md:grid-cols-3 grid-cols-2'>
    
        
        {notlar && notlar.map((not) => (
          
          <NoteCard key={not._id} not={not} />
          
        ))}
        
      </div>


    </>
  )
}

export default HomePage