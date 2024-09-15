import {  FilterAltOutlined } from '@mui/icons-material'
import React from 'react'
import PerformanceItem from './performanceItem'

export default function Performance() {
  return (
    <div className='w-full bg-manual_gray rounded-xl px-4 py-8'>
                <div className='w-full flex items-center justify-between'>
                    <div className='w-1/2 text-black text-xl font-medium'>Performance</div>
                    <div className='w-1/2 text-blue-600 text-lg font-light flex items-center justify-end p-1 '>Filter <FilterAltOutlined className='mx-1'/></div>
                </div>
                <div className='mt-8'>
                    <PerformanceItem/>
                    <PerformanceItem/>
                    <PerformanceItem/>
                </div>
    </div>
  )
}
