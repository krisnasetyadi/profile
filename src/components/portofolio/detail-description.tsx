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

const textValue = 'font-medium text-xs md:text-sm px-2'
const title = 'text-xs md:text-sm text-gray-600 px-1'

function DetailDescription({ data }: {data: DetailDescriptionProps}) {
   if(data) {
    
   }
    return (
        <div className="w-full">
          <p className="text-xs md:text-sm text-gray-600 pb-2 tracking-wide">DETAIL INFO</p>
          <table>
            <tr>
              <td className={title}>Project Name</td>
              <td className={textValue}>{data.project_name}</td>
            </tr>
            <tr>
              <td className={title}>Project Role</td>
              <td className={textValue}>{data.project_role}</td>
            </tr>
            <tr>
              <td className={title}>Project Name</td>
              <td className={textValue}> 
                {data.stacks?.join(', ')}
              </td>
            </tr>
            <tr>
              <td className={title}>Other</td>
              <td className={textValue}> 
                {data.others?.join(', ')}
              </td>
            </tr>
            <tr>
            <td className={title}>Publish Link</td>
            <td className={title}>
              {data.publish_link ? (
                <Link href={data.publish_link} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-500 text-sm">
                  {data.publish_link}
                </Link>
              ) : (
                <span className="text-white px-2.5 py-1.5 rounded-lg bg-[#c7233e] font-medium text-sm">
                  {data.status}
                </span>
              )}
            </td>
            </tr>
          </table>
        </div>
    )
}

export default DetailDescription