import ProjectGallery from './ProjectGallery';
import ProjectHeader from './ProjectHeader';
import ProjectInfo from './ProjectInfo';
import ProjectRelatedProjects from './RelatedProjects';
import { SingleProjectProvider } from './OneProjectContext';
import { motion } from 'framer-motion';

const ProjectSingle = ({ title, category, image }) => {
	return (
		<div className="bg-secondary-light dark:bg-ternary-dark p-4 rounded-lg shadow-lg flex flex-col justify-between h-full">
			<div className="overflow-hidden rounded-lg h-48">
				<img
					src={image}
					alt={title}
					className="w-full h-full object-cover" 
				/>
			</div>
			<div className="mt-4 flex-grow">
				<h3 className="text-lg font-semibold text-primary-dark dark:text-ternary-light">
					{title}
				</h3>
				<p className="text-sm text-primary-dark dark:text-ternary-light">
					{category}
				</p>
			</div>
		</div>
	);
};

export default ProjectSingle;
