import React from 'react';
import { FaHeart } from "react-icons/fa";

const Likes = () => {
  return (
    <div className='p-2 md:p-6 w-full max-w-6xl mx-auto'>
      {/* Desktop version */}
      <div className='hidden md:block relative overflow-hidden rounded-xl shadow-lg bg-white/10 backdrop-blur-lg border border-white/20'>
        <table className='w-full text-sm text-left rtl:text-right'>
          <thead className='text-xs uppercase bg-black/20'>
            <tr>
              <th scope='col' className='p-4'>
                <div className='flex items-center font-medium'>No</div>
              </th>
              <th scope='col' className='px-6 py-4 font-medium'>
                Username
              </th>
              <th scope='col' className='px-6 py-4 font-medium'>
                Date
              </th>
              <th scope='col' className='px-6 py-4 font-medium'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-white/10 hover:bg-white/5 transition-colors'>
              <td className='w-4 p-4'>
                <div className='flex items-center'>
                  <span className='font-medium'>1</span>
                </div>
              </td>
              <th scope='row' className='flex items-center px-6 py-4 whitespace-nowrap'>
                
                  <img
                    className='w-12 h-12 rounded-full object-cover border-2 border-white/20'
                    src={"https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"}
                    alt='User avatar'
                  />
                  
               
                <div className='ps-4'>
                  <div className='text-base font-semibold hover:text-blue-400 cursor-pointer transition-colors'>
                    dasdas
                  </div>
                </div>
              </th>
              <td className='px-6 py-4 text-gray-300'>das</td>
              <td className='px-6 py-4'>
                <div className='flex items-center group cursor-pointer'>
                  <div className='p-2 rounded-full bg-red-500/10 group-hover:bg-red-500/20 transition-colors'>
                    <FaHeart size={20} className='text-red-500 group-hover:scale-110 transition-transform' />
                  </div>
                  <span className='ml-3 group-hover:text-red-400 transition-colors'>Liked your profile</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile version */}
      <div className='md:hidden space-y-4'>
        <div className='bg-white/10 backdrop-blur-lg rounded-xl p-5 shadow-lg border border-white/20 hover:bg-white/5 transition-all duration-300'>
          <div className='flex items-center justify-between mb-4'>
            <div className='flex items-center space-x-2'>
              <span className='text-sm font-medium bg-white/10 px-2 py-1 rounded-md'>#1</span>
              <span className='text-sm text-gray-300'></span>
            </div>
          </div>
          <div className='flex items-center space-x-4'>
           
              <img
                className='w-14 h-14 rounded-full object-cover border-2 border-white/20'
                src={"https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"}
                alt='User avatar'
              />
              
            
            <div className='flex-1 min-w-0'>
              <div className='font-semibold text-lg mb-1 hover:text-blue-400 cursor-pointer transition-colors truncate'>
                dasdas
              </div>
              <div className='flex items-center text-sm bg-white/5 rounded-lg p-2 hover:bg-white/10 transition-colors cursor-pointer'>
                <div className='p-1.5 rounded-full bg-red-500/10'>
                  <FaHeart size={16} className='text-red-500' />
                </div>
                <span className='ml-2'>Liked your profile</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Likes;