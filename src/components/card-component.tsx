import Image from 'next/image';
import React, { FC } from 'react'

interface CardComponentProps {
    id?: number;
    image: string;
    project_name: string;
    project_role: string;
}

const CardComponent: FC<CardComponentProps> = (props) => {
    const { id, image, project_name, project_role } = props
    
    return (
        <div className="mb-2 hover:opacity-50">
          <div >
            <Image src={image} alt='image' width={280} height={80}/>
          </div>
          <div className="flex justify-between px-2 py-1">
            <div>
              {project_name}
            </div>
            <div>
              {project_role}
            </div>
          </div>
        </div>
    )
}

export default CardComponent