import { useParams } from 'react-router-dom';
import { ProjectData } from '../../data/projectsData';
import React from 'react';

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = ProjectData.ProjectHeader.find(p => p.id === parseInt(projectId));
  const projectImages = ProjectData.ProjectRelatedImages.find(p => p.id === parseInt(projectId));
  const projectDetails = ProjectData.ProjectInfo.ProjectDetails.find(p => p.id === parseInt(projectId));
  const projectTechs = ProjectData.ProjectInfo.Technologies.find(p => p.id === parseInt(projectId));
  const projectSocials = ProjectData.ProjectInfo.SocialSharing.find(p => p.id === parseInt(projectId));

  if (!project) {
    return <div className='font-krona md:text-4xl text-center p-10 text-2xl mb-[65rem] mt-60 md:mt-20 items-center md:p-56 md:mb-[50rem] lg:p-96 lg:mb-[40rem] text-white'>Projeto <span className='text-fiap uppercase'>não</span> encontrado ☹️</div>;
  }

  return (
    <section className="container mx-auto mt-36 px-10 md:px-12 lg:px-20">
      <h1 className="text-4xl font-bold font-krona text-fiap text-center mb-6">{project.title}</h1>

      <div className="mb-6">
        <h2 className="text-3xl text-fiap font-krona font-semibold mb-2">Projeto</h2>
        <p className="text-xl text-white font-medium font-montserrat">
          {ProjectData.ProjectInfo.ObjectivesHeading.find(p => p.id === parseInt(projectId))?.objective}
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-krona text-fiap font-semibold mb-2">Tecnologias Utilizadas</h2>
        <div className="flex text-xl flex-wrap font-medium text-white font-montserrat gap-4">
          {projectTechs.techs.map((tech, index) => (
            <div key={index} className="flex items-center gap-2">
              {React.createElement(projectTechs.icons[index], { size: 28 })}
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold font-krona text-fiap mb-2">Descrição</h2>
        <p className="text-white font-medium text-sm text:text-xl font-montserrat text-justify">{projectDetails.details}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-krona text-fiap font-semibold mb-4">Galeria de Imagens</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <img src={projectImages.img1} alt={`${project.title} - img1`} className="w-full object-cover" />
          <img src={projectImages.img2} alt={`${project.title} - img2`} className="w-full object-cover" />
          <img src={projectImages.img3} alt={`${project.title} - img3`} className="w-full object-cover" />
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-fiap font-krona mb-2">Referências</h2>
        <div className="flex gap-4 flex-wrap">
          {projectSocials.names.map((name, index) => (
            <a
              key={index}
              href={projectSocials.url[index]}
              className="relative group flex items-center gap-2 text-white"
            >
              {React.createElement(projectSocials.icon[index], { size: 28 })}
              <span className="font-montserrat font-medium text-white text-xl">{name}</span>
              <span className="absolute bottom-[-10px] left-0 w-0 h-[2px] bg-[#E4336C] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
