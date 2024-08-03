import { mainColor } from '@/app/constants/Colors'
import React from 'react'
import DataObjectIcon from '@mui/icons-material/DataObject';
type Props = {}

const Logo = (props: Props) => {
  return (
    <div className='flex gap-2 items-center'>
        <div className={`bg-red-900 p-[6px] rounded-md`}>
            <DataObjectIcon sx={{fontSize:27, color:"white"}} />
            

        </div>
        <div className='flex gap-1 text-[19px]'>
            <span className={`font-bold text-[${mainColor}]`}>Snippet</span>
            <span className='text-slate-600'>Aora</span>



        </div>
    </div>
  )
}

export default Logo