import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const [, setScrollPosition] = useState<number>(0);
  const [opacity, setOpacity] = useState<number>(1);
  const [scale, setScale] = useState<number>(1);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      setOpacity(Math.max(0, 1 - position / 700));
      setScale(Math.max(0.8, 1 - position / 4000));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [localTime, setLocalTime] = useState<string | null>(null);
  useEffect(() => {
    const updateTime = () => setLocalTime(new Date().toLocaleTimeString());
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Starry background effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const stars: { x: number; y: number; radius: number; speed: number }[] = [];
    const numStars = 100;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 2,
        speed: Math.random() * 0.5,
      });
    }

    const drawStars = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(drawStars);
    };

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    drawStars();
  }, []);

  return (
    <section className="h-screen max-w-screen sticky top-0  px-[5%] pt-[20%] md:px-[10%] md:pt-[10%] pb-20 text-home bg-black bg-cover bg-center bg-no-repeat">
      {/* Starry Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-20"
        style={{ opacity, transform: `scale(${scale})`, transition: "all 0.3s ease-out" }}
      />

      {/* Animated background overlay */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-[#524D47]"
        initial={{ y: "100%", borderRadius: "100%" }}
        animate={{ y: "0%", borderRadius: "0%" }}
        transition={{ duration: 1.5, ease: [0.25, 0.8, 0.25, 1] }}
      />

      <div className="flex flex-col w-full">
        <div className="w-full">
          {/* Name Section */}
          <motion.h1
            initial="initial"
            animate="visible"
            className="relative block overflow-hidden whitespace-nowrap w-full text-[60px] sm:text-[100px] md:text-[190px] lg:text-[250px] font-bold justify-center text-white"
            style={{
              lineHeight: 1.5,
              opacity,
              transform: `scale(${scale})`,
              transition: "all 0.3s ease-out",
            }}
          >
            <div>
              <motion.span className="inline-block"></motion.span>
            </div>
            <div className="absolute inset-0 text-center">
              {("PETER CAO").split("").map((l, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  variants={{ initial: { y: "100%" }, visible: { y: 0 } }}
                  transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 + 0.025 * i }}
                >
                  {l === " " ? "\u00A0" : l}
                </motion.span>
              ))}
            </div>
          </motion.h1>

          {/* Subtitle Section */}
          <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-25 text-white md:min-h-[60vh]">
            <motion.div
              className="font-title text-[15px] sm:text-[30px] md:text-[30px] lg:text-[30px] col-start-1 col-span-25 font-mono font-light w-full justify-between flex"
              initial={{ opacity: 0, y: 10, z: 10 }}
              animate={{ opacity: 1, y: 0, z: 10 }}
              transition={{ delay: 1.25, duration: 1, ease: "easeOut" }}
            >
              <div
                className="w-full "
                style={{ opacity, transform: `scale(${scale})`, transition: "all 0.3s ease-out" }}
              >
                <p>An Upcoming Software Engineer</p>
                <p className="mt-2 font-light text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] ">
                  Passionate about building scalable software, solving complex problems, and
                  creating innovative solutions.
                </p>
              </div>
              <div
                className="font-title font-mono font-bold w-full text-right"
                style={{ opacity, transform: `scale(${scale})`, transition: "all 0.3s ease-out" }}
              >
                <p className="font-light">AVAILABLE FOR HIRE</p>
                <div className="text-[34px] sm:text-[70px] md:text-[70px] lg:text-[70px] ]">MAY 2025</div>
              </div>
            </motion.div>

            {/* Location and Local Time */}
            <motion.div
              className="font-title text-[15px] sm:text-[22px] md:text-[22px] lg:text-[22px] col-start-1 col-span-25 font-mono font-light w-full flex justify-between select-text"
              initial={{ opacity: 0, y: 10, z: 10 }}
              animate={{ opacity: 1, y: 0, z: 10 }}
              transition={{ delay: 1.25, duration: 1, ease: "easeOut" }}
              style={{ opacity, transform: `scale(${scale})`, transition: "all 0.3s ease-out" }}
            >
              <div>38.7439° N, 77.2405° W</div>
              <div>{localTime}</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
