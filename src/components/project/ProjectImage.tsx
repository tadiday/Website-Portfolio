import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface Project {
    title: string;
    date: string;
    tech: string[];
    gitHub: string;
    description: string;
    image: string;
    tags: string[];
    type: string;
    backg: string;
    website: string;
}


const ProjectItem = ({ project }: { project: Project }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"],
    });

    const blurValue = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

    const [filter, setFilter] = useState("blur(50px)");
    const [hasCleared, setHasCleared] = useState(false);

    useEffect(() => {
        const unsubscribe = blurValue.on("change", (val) => {
            if (!hasCleared) {
                if (val <= 1) {
                    setFilter("blur(0px)");
                    setHasCleared(true); // Lock it
                } else {
                    setFilter(`blur(${val}px)`);
                }
            }
        });
        return unsubscribe;
    }, [blurValue, hasCleared]);

    const isSimplisplit = project.title === "Simplisplit";

    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left + 50,
            y: e.clientY - rect.top + 25,
        });
    };



    return (
        <div
            ref={ref}
            className="flex h-screen w-full items-center justify-center overflow-clip py-5"
        >
            <div
                className={`relative w-full h-full overflow-clip rounded-md`}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >



                <motion.a
                    style={{filter}}
                    href={project.gitHub}
                    className="relative flex items-center justify-center w-full h-full "
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >



                    <div className="absolute inset-0 z-0 rounded-md overflow-hidden">
                        <Image
                            className="object-cover w-full h-full brightness-100 contrast-90 "
                            src={project.backg}
                            alt="background"
                            fill
                            priority
                            style={{ objectFit: "cover" }}
                        />
                        <div className="absolute inset-0 bg-striped-lines opacity-5"></div>
                    </div>

                    <div
                        className={`z-10 m-2 p-3 space-y-4 w-full rounded-xl overflow-clip bg-white/50 backdrop-blur-sm ${isSimplisplit
                            ? "w-[60%] max-w-[375px] rounded-xl object-fit"
                            : ""
                            }`}
                    >
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="object-contain w-full h-auto max-w-full max-h-full rounded-md shadow-xl "
                        >
                            <source src={project.image} type="video/mp4" />
                        </video>
                    </div>

                    {isHovered &&(
                        <div
                            className="absolute z-10 transition-transform duration-150"
                            style={{
                                top: mousePos.y,
                                left: mousePos.x,
                                transform: "translate(-50%, -50%)",
                                pointerEvents: "none",
                            }}
                        >
                            <button className="flex items-center space-x-2 bg-[#868674]/70 backdrop-blur-sm px-4 py-2 rounded-md text-black shadow-md">
                                <div className="flex items-center justify-center w-8 h-8 rounded-md bg-[#bcbcb8]/50">
                                    ↳
                                </div>
                                <span className="text-sm font-medium">{project.gitHub !== "Private" ? <span>GitHub</span> :  <span>Private</span>}</span>
                            </button>
                        </div>
                    )}
                </motion.a>
            </div>
        </div>
    );
};

export default ProjectItem;
