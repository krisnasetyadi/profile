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
        <div className="h-60 w-60 mb-5">
         <div className="h-full">
          <div className="h-[85%]">
              <Image src={image} alt='image' width={1200} height={800}  layout='responsive'/>
          </div>
          <div className="h-[15%] flex justify-between px-2 py-1">
            <div>
                {project_name}
            </div>
            <div>
                {project_role}
            </div>
          </div>
         </div>
        </div>
    )
}

export default CardComponent