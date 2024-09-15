import dynamic from "next/dynamic"
const AnalysisChart = dynamic(()=>import('./analysisChart'),{ssr:false})
export default async function AnalysisComponent()  {
  return (
    <div className='w-full bg-manual_gray mt-4 p-4 rounded-lg'>
        <div className='w-full flex justify-between'>
            <div className='text-black text-xl font-medium'>Total Analysis</div>
            <div className='text-black text-lg font-normal px-2 flex items-center justify-start'>
                <div className='mx-2 flex'>
                    <span className='w-1 h-1 rounded-full bg-blue-800 p-2 flex m-2'></span>
                    Your
                </div>
                <div className='mx-2 flex'>
                    <span className='w-1 h-1 rounded-full bg-green-500 p-2 flex m-2'></span>
                    normal
                </div>
                
            </div>
        </div>
        <div className="w-full">
            <AnalysisChart/>
        </div>
    </div>
  )
}
