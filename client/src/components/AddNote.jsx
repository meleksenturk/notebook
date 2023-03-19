import React, { useState } from 'react'
import { Modal } from 'antd'
const AddNote = () => {
    const [baslik, setBaslik] = useState('')
    const [explanation, setAciklama] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const not = { baslik, explanation }

        const response = await fetch("http://localhost:4000/api/notes", {

            // method:'POST',
            // body:JSON.stringify(not),
            // headers:{
            //         'Content-Type' :'application/json; charset-UTF-8'
            // }
            method: "POST",
            body: JSON.stringify(not),
            headers: { "Content-type": "application/json; charset=UTF-8" }

        })


        const json = await response.json()
        console.log(json)


        if (response.ok) {
            setBaslik('')
            setAciklama('')

        }
        if (!response.ok) {
            console.log("sjdhfjsd")
        }
        console.log(not)
    }

    return (


        <>
            <div className='flex justify-center items-center  border mt-10'>
                <form onSubmit={handleSubmit}>
                    <h3 className='font-bold flex justify-center items-center mb-5 mt-5 ml-6 text-green-400'>Yeni Bir Not Ekle</h3>
                    <div>
                        <div className='mb-5'>
                            <label className=' text-green-400'>Başlık :</label>
                            <input className='border ml-24 w-60' onChange={(e) => setBaslik(e.target.value)} value={baslik}></input>

                        </div>
                        <div>
                            <label className=' text-green-400 '>Açıklama</label>
                            <input className='border ml-20 w-60 ' onChange={(e) => setAciklama(e.target.value)} value={explanation}></input>
                        </div>
                        <div className='mt-5'>
                            <button type="submit" onClick={showModal} className='bg-green-400 mb-5 px-8 py-1 rounded-lg text-white text-md'>EKLE</button>
                        </div>

                    </div>
                    <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk } onCancel={handleCancel}>
                        <p>Notunuz başarılı bir şekilde eklenmiştir.</p>

                    </Modal>

                </form>

            </div>
        </>

    )
}

export default AddNote