import Image from 'next/image';
import React, { FC } from 'react'

interface CardComponentProps {
    id?: number;
    image: string;
    name: string;
    project_role: string;
}

const CardComponent: FC<CardComponentProps> = (props) => {
    const { id, image, name, project_role } = props
    
    return (
        <div className="mb-2 hover:opacity-50">
          <div >
            <Image src={image} alt='image' width={280} height={80}/>
          </div>
          <div className="flex justify-between gap-1 px-2 py-1">
            <div className='text-sm font-semibold'>
              {name}
            </div>
            <div className='text-sm '>
              {project_role}
            </div>
          </div>
        </div>
    )
}

export default CardComponent