'use client'
import {useState} from 'react'
import Modal from './modal-component'
import { RootStore, store } from '@/store'
import { useSelector } from 'react-redux'
import { setOpenModal } from '@/store/root-store'

function HomeButtonComponent() {
  const { openModal } = useSelector((state: RootStore) => state.rootStore)

    const handleDownloadCV = () => {
      // console.log('window', window.URL.createObjectURL(new Blob([pdf])))
    }

    const handleContactInfo = () => {
      store.dispatch(setOpenModal(!openModal))
    }

    return (
        <div>
          {openModal && <Modal/>}
          <button className='px-5 py-1.5 border-2 border-solid border-blue-600 rounded-full mt-10 hover:bg-blue-100  text-blue-600'
          onClick={handleDownloadCV}>Download CV</button>
          <button 
            onClick={handleContactInfo}
            className='px-5 py-2 bg-blue-600 rounded-full mt-10 hover:bg-blue-500 text-white ml-2'>
            Contact Info
          </button>
        </div>
    )
}

export default HomeButtonComponent