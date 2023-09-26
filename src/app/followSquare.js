'use client'

import React, { useEffect } from 'react'

const followSquare = () => {
  document.addEventListener('mousemove', (e) => {
    const $block = document.querySelector('.block');
    $block.animate({
      left: e.clientX + 'px',
      top: e.clientY + 'px'
    }, {duration: 500})
  })
  return (
    <div>
      <div className='block'></div>
    </div>
  )
}

export default followSquare