import Image from 'next/image'
import MoreHoriz from '@mui/icons-material/MoreHoriz'
import { Divider } from '@mui/material'

export default function ListItem() {
  return (
    <>
    <li className="w-auto mt-1">
                  <div className="w-full flex justify-between mb-1">
                      <div className="flex">
                        <Image src='/statics/images/photo.jpg' width={48} height={48} alt="Doctor Picture"
                             className="w-11 h-11 rounded-full mx-1 shadow-lg"
                        />
                        <div className="px-2">
                          <div className="text-base text-black font-normal">lizzie Alexandra</div>
                          <div className="text-sm text-gray-600 font-normal">oncology</div>
                        </div>
                      </div>
                      <div className="w-6 h-6 flex items-start">
                        <MoreHoriz sx={{color:"black"}}/>
                      </div>
                  </div>
                  <div className='w-full mt-2'>
                    <Divider orientation="horizontal" variant="fullWidth" />      
                  </div>
          </li>   
    </>
  )
}
