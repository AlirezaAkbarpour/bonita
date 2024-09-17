import { ArrowUpward } from '@mui/icons-material'
import { CircularProgress } from '@mui/material'
import React from 'react'
import { dataType } from './Performance'

export default function PerformanceItem({id,name,value,date,increase}:dataType) {
  const getSeason = (d :Date) => Math.floor((d.getMonth() / 12 * 4)) % 4
  const Seasons : string[] = ["Winter","Spring","Summer","Autumn"]
  const currentSeason :string = Seasons[getSeason(date)]
  return (
    <li key={id} className='w-full h-16  bg-white rounded-lg flex justify-between items-center my-4 px-3 text-black'>
            <div className='w-1/2 flex justify-start items-center'>
              <div className='text-lg font-medium w-1/2'>{name}</div>
              <div className='flex items-center text-base font-medium text-center'><CircularProgress size={48} color='info'  
              sx={{margin:.5,padding:0.5}} variant='determinate' className='ml-5'  value={value}/> {value}% </div>
            </div>
            
            <div className='w-1/2 flex justify-end'>
              <div className='text-black text-base font-normal px-1 flex justify-between w-1/2 mr-24'>
                {currentSeason} <div className='text-gray-400 mx-2'>{date.toISOString().slice(0,10).toString()}</div> </div>
              <div className='bg-yellow-200 px-2 py-1 rounded-full
              text-black font-medium flex 
              justify-center items-center'><ArrowUpward className=''/>{increase}% </div>
             </div>
            
    </li>
  )
}
