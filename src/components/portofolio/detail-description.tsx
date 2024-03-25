import Link from "next/link";

interface ColumnProps {
  title: string;
  key: string;
}

const textValue = 'font-medium text-xs md:text-sm px-2 py-1 text-wrap'
const title = 'text-xs md:text-sm text-gray-600 px-1 py-1'
const columns = 'px-1'

function DetailDescription({ data, columns}: {data: any, columns: ColumnProps[]}) {
    return (
        <div className="mt-10 md:mt-2">
          <p className="text-xs md:text-sm text-gray-600 pb-2 tracking-wide">PROJECT DETAIL INFO</p>
          <div className="flex">
            <table className="table-auto">
              <tbody>
                {columns.map((column: ColumnProps) => (
                  <tr key={column.title}>
                      <td className={title}>{column.title}</td>
                      <td className={textValue}> {
                        column.key !== 'links' 
                        ? 
                          (Array.isArray(data[column.key]) 
                            ? data[column.key].join(', ') 
                            : data[column.key]
                          ) 
                        : 
                          column.key.length > 0 
                          && data.is_confidential === 'N'
                          ? data[column.key].map((link: string, idx: number) => {
                            return (
                              <div key={idx}>
                                <Link href={link} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-500 text-sm">
                                  {link}
                                </Link>
                              </div>
                          )
                      }) :  (
                          <span className="text-white px-2.5 py-1.5 rounded-lg bg-[#c7233e] font-medium text-sm">
                            Confidential
                          </span>
                          )}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
    )
}

export default DetailDescription