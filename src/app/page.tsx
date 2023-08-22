
export default function Home() {
  return (
    <main className="min-h-screen px-24">
        <div className="w-full flex justify-center ">
        {/* Image src={photo} */}
          <div className="h-60 w-60 rounded-full bg-red-300 my-5"/>
        </div>
        <div className='text-center font-semibold w-full'>
          <h3 className='text-2xl'>Hi, I&apos;m Krisna!</h3>
          <h1 className='text-5xl font-bold'>A Software Developer</h1>
          <button className='px-5 py-2 bg-blue-500 rounded-lg mt-10 hover:bg-blue-300 text-white'>Contact Me</button>
        </div>
    </main>
  )
}
