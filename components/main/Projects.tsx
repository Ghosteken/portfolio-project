import React from 'react'
import ProjectCard from '../sub/ProjectCard'

function Projects() {
  return (
    <div className='flex flex-col items-center justify-center py-20' >
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20' >
            My Projects

        </h1>
        <div className='h-full w-full flex flex col md:flex-row gap-10 px-10' ></div>
        
        {/* <ProjectCard
        src='/CardImage.png'
        title='Interactive Websites Card'
        description='website card with efficient effects'
        /> */}
        <ProjectCard
        src='/SpaceWebsite.png'
        title=' My Space theme portfolio website'
        description=''
        />

    </div>
  )
}

export default Projects