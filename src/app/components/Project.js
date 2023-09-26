'use client'

import {React, useRef, useEffect } from 'react'
import Image from 'next/image'
import styles from '../Project.module.scss'

const Project = ({ project }) => {
  const imageRef = useRef(null);

    function handleMouseOver(e) {
    const { target } = e;
    const $popUp = target.querySelector('.Project__Image');
    $popUp.style.top = `${e.clientY}px`;
    $popUp.style.left = `${e.clientX}px`;
  }

  return (
    <div 
      className='Project__Wrapper'
      onMouseMove={(e) => handleMouseOver(e)}
    >
      <h2 className={styles.Project__Title}>{project.fields.name}</h2>
      <div className={styles.Project__ImageContainer}>
        <Image 
          ref={imageRef}
          className='Project__Image'
          src={'https:' + project.fields.imageSrc.fields.file.url} 
          width={project.fields.imageSrc.fields.file.details.image.width} 
          height={project.fields.imageSrc.fields.file.details.image.height} 
          data-width={project.fields.imageSrc.fields.file.details.image.width}
          data-height={project.fields.imageSrc.fields.file.details.image.height}
          />
      </div>
    </div>
  )
}

export default Project