import { useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import ProjectSingle from './OneProject';
import { ProjectsContext } from './ProjectContext';
import ProjectsFilter from './ProjectsFilter';

const ProjectsGrid = () => {
	const {
		projects,
		searchProject,
		setSearchProject,
		searchProjectsByTitle,
		selectProject,
		setSelectProject,
		selectProjectsByCategory,
	} = useContext(ProjectsContext);

	return (
		<section className="py-5 sm:py-10 mt-28 px-4 lg:px-8 xl:px-16">
			<div className="text-center">
				<p className="font-general-medium font-krona text-fiap text-2xl sm:text-5xl mb-1 text-ternary-dark dark:text-ternary-light">
					Meus Projetos
				</p>
			</div>

			<div className="mt-4">
				<h3
					className="font-semibold font-montserrat text-white 
                        text-center text-secondary-dark
                        dark:text-ternary-light
                        text-md
                        sm:text-3xl
                        mb-8
                        "
				>
					Procure o projeto pelo título ou categoria
				</h3>
				<div
					className="
                        flex flex-col sm:flex-row
                        justify-between items-center
                        border-b border-primary-light
                        dark:border-secondary-dark
                        pb-3
                        gap-3
                        "
				>
					<div className="flex justify-between gap-2">
						<span
							className="
                                hidden
                                sm:block
                                bg-primary-light
                                dark:bg-ternary-dark
                                p-2.5
                                shadow-sm
                                rounded-xl
                                cursor-pointer
                                "
						>
							<FiSearch className="text-white dark:text-ternary-light w-5 h-5"></FiSearch>
						</span>
						<input
							onChange={(e) => {
								setSearchProject(e.target.value);
							}}
							className="font-montserrat
                                pl-3
                                pr-1
                                sm:px-4
                                py-2
                                border 
                              border-white
                                rounded-lg
                                text-sm
                                sm:text-md
                                text-white
                                bg-black
                                dark:bg-ternary-dark
                                dark:text-ternary-light
                                "
							id="name"
							name="name"
							type="search"
							required=""
							placeholder="Procure..."
							aria-label="Name"
						/>
					</div>

					<div className="mt-3 sm:mt-0">
						<ProjectsFilter setSelectProject={setSelectProject} />
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 gap-6 sm:gap-8 lg:gap-12">
	        {selectProject
		    ? selectProjectsByCategory.map((project) => (
				<ProjectSingle
					title={project.title}
					category={project.category}
					image={project.img}
					key={project.id}
				/>
		    ))
		    : searchProject
		    ? searchProjectsByTitle.map((project) => (
				<ProjectSingle
					title={project.title}
					category={project.category}
					image={project.img}
					key={project.id}
				/>
            ))
            : projects.map((project) => (
				<ProjectSingle
					title={project.title}
					category={project.category}
					image={project.img}
					key={project.id}
			    />
		    ))}
            </div>
		</section>
	);
};

export default ProjectsGrid;
