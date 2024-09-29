import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProjectData } from '../../data/projectsData';
import { FaSearch } from 'react-icons/fa';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');  // Estado para a barra de pesquisa
  const [selectedCategory, setSelectedCategory] = useState('Todos os Projetos');  // Estado para o dropdown

  // Função para filtrar projetos com base no título e na categoria
  const filteredProjects = ProjectData.ProjectHeader.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'Todos os Projetos' || project.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="min-h-screen container mx-auto px-6 lg:px-28 py-12 mt-10 md:mt-28">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 font-krona text-fiap">Meus Projetos</h1>
      <h2 className="text-lg md:text-2xl font-medium text-center mb-10 font-montserrat text-white">
        Aqui estão alguns dos meus projetos mais recentes! 😁
      </h2>

      {/* Barra de pesquisa e ícone de lupa */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
        <div className="relative w-full md:max-w-md">
          <input
            type="text"
            placeholder="Pesquisar projetos por título..."
            maxLength={20}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 w-full text-white rounded-lg border-2 border-white focus:outline-none focus:ring-2 focus:ring-fiap"
          />
          <FaSearch className="absolute right-3 top-3 text-white" />
        </div>

        {/* Dropdown de categorias */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 w-full md:w-auto text-white rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-fiap "
        >
          <option value="Todos os Projetos">Todos os Projetos</option>
          <option value="Front-end">Front-end</option>
          <option value="Back-end">Back-end</option>
          <option value="Internet of Things (IoT)">Internet of Things (IoT)</option>
        </select>
      </div>

      {/* Grid de projetos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <Link
              to={`/projetos/${project.id}`}
              key={project.id}
              className="border rounded-lg overflow-hidden hover:scale-105 transition ease-in-out delay-100 hover:shadow-lg hover:shadow-fiap/35	"
            >
              <div className="relative">
                <img
                  src={ProjectData.ProjectImages.find(img => img.id === project.id)?.img}
                  alt={project.title}
                  className="w-full h-48 object-cover duration-300"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-montserrat text-fiap font-bold">{project.title}</h2>
                <p className="text-sm font-montserrat font-medium text-white">{project.publishDate}</p>
                <p className="text-sm font-montserrat font-medium text-white mt-2">{project.category}</p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-start font-medium mb-32 font-montserrat text-white">Nenhum projeto encontrado.</p>
        )}
      </div>
    </section>
  );
};

export default Projects;
