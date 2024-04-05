import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub } from "react-icons/fa";
import { MdPhotoCamera } from "react-icons/md";
import { ModeToggle } from './mode-toggle';

export default function Photo() {
  return(
    <>
      <div className='relative h-screen w-full'>
        <img src='/fon2.jpg' className='absolute h-full w-full object-cover object-center scale-x-[-1]' />
        <div className='absolute top-0 left-0 h-full w-full flex items-center justify-center '>
          <div className='max-w-[700px] m-auto text-center'>
            <h1 className='sm:text-5xl text-4xl font-bold text-white'>CactusWorld</h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-white'>
              <TypeAnimation
                sequence={[
                  'Neupon',
                  2000,
                  'Mashinka34',
                  2000,
                  'MaybeYour',
                  2000
                 
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1em', paddingLeft:'5px'}}
                repeat={Infinity}
              />
            </h2>
            <div className='flex justify-between  pt-6  max-w-[150px] w-full pl-3'>
            <FaGithub className='cursor-pointer text-white' size={30}/>
            <MdPhotoCamera className='cursor-pointer text-white' size={30}/>
            <FaGithub className='cursor-pointer text-white' size={30}/>
            

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
