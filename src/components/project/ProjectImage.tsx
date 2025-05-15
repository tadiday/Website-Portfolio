import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const ProjectItem = ({ project }: { project: any }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"],
    });

    const blurValue = useTransform(scrollYProgress, [0, 0.5], [50, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1.7, 1]);

    const [filter, setFilter] = useState("blur(50px)");
    const [hasCleared, setHasCleared] = useState(false);
    const [hasReachedTop, setHasReachedTop] = useState(false);


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

    return (
        <div
            ref={ref}
            className="flex h-screen w-full items-center justify-center overflow-clip py-5"
        >
            <div className={`relative w-full h-full overflow-clip rounded-md `}>


                <motion.div
                    // style={{ scale, filter }}
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
                        className={`z-10 m-2 p-3 space-y-4 w-full rounded-xl overflow-clip bg-white/60 backdrop-blur-sm ${isSimplisplit
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
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectItem;
