'use client'
export default function AnalysisComponent()  {
  return (
    <div className='w-full h-64 bg-manual_gray p-4 rounded-lg'>
        <div className='w-full flex justify-between'>
            <div className='text-black text-xl font-medium'>Total Analysis</div>
            <div className='text-black text-lg font-normal px-2 flex items-center justify-start'>
                <div className='mx-2 flex'>
                    <span className='w-1 h-1 rounded-full bg-black p-2 flex m-2'></span>
                    Your
                </div>
                <div className='mx-2 flex'>
                    <span className='w-1 h-1 rounded-full bg-gray-400 p-2 flex m-2'></span>
                    normal
                </div>
                
            </div>
        </div>
        <div>
       
        </div>
    </div>
  )
}
