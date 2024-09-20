import Image from "next/image";

export default function ResearchItem() {
  return (
    <div className="w-full h-48 bg-red-200 rounded-lg overflow-hidden">
            <div className="absolute z-50 px-3 py-2">
                    <div className="text-base text-zinc-500 font-medium">Research </div>
                    <div className="text-base text-neutral-800 font-bold">Eyes</div>
                    <div className="mt-24 text-base font-medium text-neutral-600">4/12</div>
            </div>
            <div className="w-full h-full mt-10 ml-10">
                <Image src="/statics/images/heart.png" className="scale-125" alt="" width={600} height={800}/>
            </div>
    </div>
  )
}
