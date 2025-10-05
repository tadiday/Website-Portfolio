import { motion } from "framer-motion";

interface Project {
    title: string;
    date: string;
    tech: string[]; // Ensure tech is an array of strings
    gitHub: string;
    description: string;
    image: string;
    tags: string[];
    type: string;
    backg: string;
    website: string;
}


const ProjectInfo = ({ project }: { project: Project }) => {


    return (

        <div className="flex flex-col lg:h-screen pt-10">

            <h3
                className="font-normal text-[18px] w-full font-mono text-[#8b8b8b] "
            >
                [{project.type}]
            </h3>
            <h3
                className="font-semibold font-mono text-[50px] w-full -mt-1"
            >
                {project.title}
            </h3>

            <p className="font-normal font-mono text-[18px] py-4">
                {project.description}
            </p>

            <motion.div
                key={project.tech.join(",")} // Ensure key changes properly
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }} // Keep exit y-movement smaller
                transition={{ duration: 1, ease: "easeInOut" }} // Make it faster for a smoother effect
                className="pt-4 color-line relative min-h-[50px]" // Stabilize height
            >
                <div className="flex flex-wrap gap-x-3 gap-y-3">
                    {project.tech.map((item, index) => (
                        <span
                            className="flex px-3 py-1 rounded-full bg-border font-mono text-[#8b8b8b] font-medium"
                            key={index}
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </motion.div>




        </div>
    );
};

export default ProjectInfo;


