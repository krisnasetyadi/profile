import Link from "next/link";

interface DetailDescriptionProps {
    id: number | undefined;
    image: string  | undefined;
    project_name: string | undefined;
    project_role: string | undefined;
    images: string[] | undefined;
    stacks: string[] | undefined;
    others: string[] | undefined;
    status: string | undefined;
    publish_link: string | undefined;
    description: string | undefined;
}
const container = 'grid grid-cols-2'
const textValue = 'font-semibold text-sm'
function DetailDescription({ data }: {data: DetailDescriptionProps}) {
  
    return (
        <div className="w-[80%]">
          <div className={container}>
            <p>Project Name</p>
            <p className={textValue}>{data.project_name}</p>
          </div>
          <div className={container}>
            <p>Project Role</p>
            <p className={textValue}>{data.project_role}</p>
          </div>
          <div className={container}>
            <p>Technologies Used</p>
            <div className="grid grid-cols-2">
              {data.stacks?.map((i, idx) => (
                 <p key={idx} className={textValue}>{i}</p>
              ))}
            </div>
          </div>
          <div  className={container}>
            <p>Other Technologies</p>
            <div className="grid grid-cols-2">
              {data.others?.map((i, idx) => (
                 <p key={idx} className={textValue}>{i}</p>
              ))}
            </div>
          </div>
          <div  className={container}>
            <p>Publish Link</p>
            {data.publish_link ? (
              <Link href={data.publish_link} target="blank" className="font-semibold text-blue-500">{data.publish_link}</Link>
            ) : (
             <div>
               <span className="text-white px-2.5 py-1.5 rounded-lg bg-[#c7233e] font-medium">
                 {data.status}
               </span>
             </div>
            )}
          </div>
        </div>
    )
}

export default DetailDescription