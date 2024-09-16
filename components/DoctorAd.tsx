import Image from "next/image"
export default function DoctorAd() {
  return (
    <div className="w-full h-1/2 bg-gradient-to-b from-manual_gray to-gray-400 
                    shadow-lg rounded-lg px-4 py-4 ">
            <div className="w-full mt-10 z-50 relative">
                <div className="text-lg text-gray-400 font-medium py-2">Psychologist</div>
                <div className="text-3xl text-gray-700 font-semibold my-1">Edward</div>
                <div className="text-3xl text-gray-700 font-semibold my-1">Gibson</div>
            </div>
            <div className="w-full relative bottom-16 flex flex-col justify-end">
                <div className="w-full flex-justify-end px-4">
                    <Image src="/statics/images/doctor.png" className="scale-125 w-full h-full" alt="doctor image" width={400} height={800}/>
                </div>
                <div className="w-full py-2 relative z-40">
                            <div className="w-full h-14 rounded-full flex justify-center items-center 
                            text-xl text-white bg-zinc-800 font-semibold
                            hover:ring hover:ring-white transition-all hover:bg-zinc-600
                            ">Add a visit</div>
                </div>
            </div>
                
            
    </div>
  )
}