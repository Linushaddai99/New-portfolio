import React from 'react'

const Projects = ({title, img, technology, repo, about, demo}) => {
  return (
    <div className='project'>
      <div className='project-img-div'>
        <img src={img} alt="" />
      </div>
      <div className='project-details'>
        <h2>{title}</h2>
        <p>{about}</p>
        {technology.map((tech) => <h3 className='project-techs'>{tech}</h3>)}
        <div>
          <a href={repo} target='_blanck'>
            <span>
              Code
              <span class="material-symbols-outlined">code_blocks</span>
            </span>
          </a>
          <a href={demo} target='_blanck'>
            <span>
              Live demo
              <span class="material-symbols-outlined">visibility</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects