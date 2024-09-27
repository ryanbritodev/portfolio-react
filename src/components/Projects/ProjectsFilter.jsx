const selectOptions = [
	'Front-end',
	'Back-end',
	'IoT',
];

const ProjectsFilter = ({ setSelectProject }) => {
	return (
		<select
			onChange={(e) => {
				setSelectProject(e.target.value);
			}}
			className="font-general-medium 
                px-5
                sm:px-6
                py-2
                mb-5
                mobile:mb-0
                border
                dark:border-secondary-dark
                rounded-lg
                text-sm
                sm:text-md
                font-montserrat
                bg-black
                dark:bg-ternary-dark
                text-white
                dark:text-ternary-light
            "
		>
			<option value={setSelectProject} className="text-sm sm:text-md">
				Todos os Projetos
			</option>

			{selectOptions.map((option) => (
				<option className="text-normal sm:text-md" key={option}>
					{option}
				</option>
			))}
		</select>
	);
};

export default ProjectsFilter;
