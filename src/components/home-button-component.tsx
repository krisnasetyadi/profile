'use client'
import {useState} from 'react'

function HomeButtonComponent() {
    const [state, setState] = useState('')

    return (
        <div className=''>
          <button className='px-5 py-1.5 border-2 border-solid border-blue-600 rounded-full mt-10 hover:bg-blue-100  text-blue-600'
          onClick={()=>setState('download')}>Download CV</button>
          <button className='px-5 py-2 bg-blue-600 rounded-full mt-10 hover:bg-blue-500 text-white ml-2'>Contact Info</button>
        </div>
    )
}

export default HomeButtonComponent