import Link from "next/link";

interface DetailDescriptionProps {
    id: number | undefined;
    image: string  | undefined;
    project_name: string | undefined;
    project_role: string | undefined;
    stacks: string[] | undefined;
    others: string[] | undefined;
    status: string | undefined;
    publish_link: string | undefined;
    description: string | undefined;
}

const textValue = 'font-medium text-xs md:text-sm px-2 py-1 text-wrap'
const title = 'text-xs md:text-sm text-gray-600 px-1 py-1'
const columns = 'px-1'

function DetailDescription({ data }: {data: DetailDescriptionProps}) {
    return (
        <div className="mt-10 md:mt-2">
          <p className="text-xs md:text-sm text-gray-600 pb-2 tracking-wide">PROJECT DETAIL INFO</p>
          <div className="flex">
            <div  className={columns}>
              <div className={title}>Name</div>
              <div className={title}>Role</div>
              <div className={title}>Staks</div>
              <div className={title}>Others</div>
              <div className={title}>Link</div>
            </div>
            <div className={columns}>
              <div className={textValue}>{data.project_name}</div>
              <div className={textValue}>{data.project_role}</div>
              <div className={textValue}> 
                {data.stacks?.join(', ')}
              </div>
              <div className={textValue}> 
                {data.others?.join(', ')}
              </div>
              <div className={textValue}>
                {data.publish_link ? (
                 <Link href={data.publish_link} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-500 text-sm">
                    {data.publish_link}
                  </Link>
                ) : (
                  <span className="text-white px-2.5 py-1.5 rounded-lg bg-[#c7233e] font-medium text-sm">
                  {data.status}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
    )
}

export default DetailDescription