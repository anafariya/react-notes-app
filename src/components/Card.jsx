import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion } from 'framer-motion';


function Card({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} className="flex shrink-0 relative w-60 h-72 rounded-[50px] bg-zinc-500 text-white px-8 py-10 overflow-hidden">
    <FaFileAlt/>
    <p className='text-sm leaning-tight font-semibold mt-5'>{data.desc}</p>
    <div className='footer absolute bottom-0 w-full h-20 left-0'>
        <div className='flex items-center justify-between px-8  mb-5 text-sky-400'>
            <h5>
                {data.filesize}
            </h5>
            {data.close ? <IoIosCloseCircleOutline/> : <FaDownload/>  }
            

        </div>

        {data.tag.isOpen && (
            <div className={`tag w-full py-1 px-7 h-20  bg-pink-500 flex`}>
            <h3 className='text-m'>{data.tag.tagTitle} </h3>
        </div>
        )}
    </div>
    </motion.div>
    
  )
}

export default Card