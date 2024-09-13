import Image from 'next/image'
import MoreHoriz from '@mui/icons-material/MoreHoriz'
import { Divider } from '@mui/material'

export default function ListItem() {
  return (
    <>
    <li className="w-full mt-1">
                  <div className="w-full flex justify-around">
                      <div className="flex">
                        <Image src='/statics/images/photo.jpg' width={64} height={64} alt="Doctor Picture"
                             className="w-12 h-12 rounded-full mx-1 shadow-lg"
                        />
                        <div className="px-4">
                          <div className="text-lg text-black font-normal">lizzie Alexandra</div>
                          <div className="text-base text-gray-600 font-normal">oncology</div>
                        </div>
                      </div>
                      <div className="w-6 h-6 flex items-start">
                        <MoreHoriz sx={{color:"black"}}/>
                      </div>
                  </div>
                  <Divider orientation="horizontal" variant="middle" sx={{marginTop:"4px"}}/>      
          </li>   
    </>
  )
}
