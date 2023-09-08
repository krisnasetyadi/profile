import Link from "next/link"

function AboutScreen() {
    return (
        <div className="pt-8">
          <p className="font-bold text-[8vh] md:text-[20vh] mb-5 md:mb-10">Who Am I</p>
          <div className="flex flex-col md:flex-row">    
            <div className="w-full md:w-[70%] mb-5 md:mb-0 md:mr-8">
              <p>Let me introduce myself,</p>
              <p className="mb-5"> My name{' '}
                <span className="bg-blue-200 px-2 py-1 font-semibold rounded-md">
                  Krisna Dwi Setyaadi
                </span> a Software Developer at{' '}
                <Link href="https://moonlay.com/" target="blank" className="text-blue-500">
                     Moonlay Technologies
                </Link> and
                  a final year student at{' '}
                <Link href={'https://www.ithb.ac.id/'} target="blank" className="text-blue-500">
                  Harapan Bangsa Institute of Technology
                </Link> (Major: Data Science Information Systems).
              </p>
            </div>
            <div className="w-full md:w-[30%]">
                <div className="border-solid border-2 border-gray-500 px-8 md:px-14 py-4 md:py-8 rounded-3xl">
                    <div className="text-center">
                        <p className="font-semibold">Experience</p>
                        <p className="text-gray-600">1+ Years</p>
                        <p className="text-gray-600">Front End Developer</p>
                    </div>
                </div>
            </div>
           </div>
           <p className="mt-5">Contact me for business <Link href={'/'} className="text-blue-500">here</Link></p>
        </div>
    )
}

export default AboutScreen
