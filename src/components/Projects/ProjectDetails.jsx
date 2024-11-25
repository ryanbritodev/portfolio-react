import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { ProjectData } from '../../data/projectsData';
import React from 'react';

const ProjectDetails = () => {
  const { projectId } = useParams();
  const projectIdInt = parseInt(projectId);

  // Buscando os dados do projeto
  const project = ProjectData.ProjectHeader.find(p => p.id === projectIdInt);
  const projectImages = ProjectData.ProjectRelatedImages.find(p => p.id === projectIdInt);
  const projectDetails = ProjectData.ProjectInfo.ProjectDetails.find(p => p.id === projectIdInt);
  const projectTechs = ProjectData.ProjectInfo.Technologies.find(p => p.id === projectIdInt);
  const projectSocials = ProjectData.ProjectInfo.SocialSharing.find(p => p.id === projectIdInt);

  // Caso o projeto não seja encontrado, mostrar uma mensagem de erro
  if (!project) {
    return (
      <div className='font-krona md:text-4xl text-center p-10 text-2xl mb-[65rem] mt-60 md:mt-20 items-center md:p-56 md:mb-[50rem] lg:p-96 lg:mb-[40rem] text-white'>Projeto <span className='text-fiap uppercase'>não</span> encontrado ☹️</div>
    )
  }

  return (
    <section className="container mx-auto mt-36 px-10 md:px-12 lg:px-20 relative">
      <h1 className="flex flex-col md:flex-row  justify-center items-center text-3xl font-bold font-krona text-fiap mb-6">
        {/* Container para a seta à esquerda */}
        <div className="left">
          <Link to="/projetos">
            <FaArrowLeft color="#E4336C" size={30} />
          </Link>
        </div>

        {/* Título centralizado */}
        <span className="text-center mt-6 md:mt-0 flex-1">{project.title}</span>
      </h1>
      <div className="mb-6">
        <h2 className="text-3xl text-fiap font-krona font-semibold mb-2">Projeto</h2>
        <p className="text-xl text-white font-medium font-montserrat">
          {ProjectData.ProjectInfo.ObjectivesHeading.find(p => p.id === projectIdInt)?.objective}
        </p>
      </div>
      {/* Tecnologias utilizadas */}
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
      {/* Descrição do projeto */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold font-krona text-fiap mb-2">Descrição</h2>
        <p className="text-white font-medium text-sm md:text-xl font-montserrat text-justify leading-tight">
          {projectDetails.details}
        </p>
      </div>
      {/* Galeria de Imagens */}
      <div className="mb-6">
        <h2 className="text-2xl font-krona text-fiap font-semibold mb-4">Galeria de Imagens</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projectImages && [projectImages.img1, projectImages.img2, projectImages.img3].map((img, index) => (
            <img key={index} src={img} alt={`${project.title} - img${index + 1}`} className="w-full object-cover" />
          ))}
        </div>
      </div>
      {/* Referências */}
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
