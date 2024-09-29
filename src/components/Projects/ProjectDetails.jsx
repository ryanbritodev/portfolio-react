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
    return <div>Projeto não encontrado</div>;
  }

  return (
    <section className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">{project.title}</h1>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Projeto</h2>
        <p className="text-gray-700">{ProjectData.ProjectInfo.ObjectivesHeading.find(p => p.id === parseInt(projectId))?.objective}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Tecnologias Utilizadas</h2>
        <div className="flex flex-wrap gap-4">
          {projectTechs.techs.map((tech, index) => (
            <div key={index} className="flex items-center gap-2">
              {React.createElement(projectTechs.icons[index], { size: 24 })}
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Descrição</h2>
        <p className="text-gray-700">{projectDetails.details}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Imagens Relacionadas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <img src={projectImages.img1} alt={`${project.title} - img1`} className="w-full h-48 object-cover" />
          <img src={projectImages.img2} alt={`${project.title} - img2`} className="w-full h-48 object-cover" />
          <img src={projectImages.img3} alt={`${project.title} - img3`} className="w-full h-48 object-cover" />
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Referências</h2>
        <div className="flex gap-4">
          {projectSocials.names.map((name, index) => (
            <a key={index} href={projectSocials.url[index]} className="flex items-center gap-2 hover:underline text-blue-500">
              {React.createElement(projectSocials.icon[index], { size: 24 })}
              <span>{name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
