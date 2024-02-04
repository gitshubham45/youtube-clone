import React from 'react'

function LeftNavMenuItem({text, icon ,className , action}) {
  return (
    <div 
      className={"text-white text-sm cursor-pointer h-10 flex items-center px-x mb-[1px] rounded-lg hover:bg-white/[0.15] " + className}
      onClick={action}
      >
      <span className='text-xl mr-4 ml-2 '>{icon}</span>
      {text}
    </div>
  )
}

export default LeftNavMenuItem
