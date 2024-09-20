import Link from "next/link"
import ResearchItem from "./researchItem"
export default function ComplexOfResearch() {
  return (
    <div className="w-80 bg-manual_gray rounded-lg mt-8 p-4">
            <div className="w-full flex justify-between">
                        <div className="w-56 text-black text-lg font-semibold">Complex of Research</div>
                        <div className="text-blue-600 py-1 px-2  text-sm rounded-full hover:cursor-pointer font-semibold hover:ring hover:bg-blue-200 transition-all">
                        <Link href=''>See all</Link>
                        </div>
            </div>
            <div className="grid grid-cols-2 gap-3 my-4 ">
              <ResearchItem/>
              <ResearchItem/>
              <ResearchItem/>
            </div>
    </div>
  )
}
