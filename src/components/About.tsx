import { useState, useEffect, forwardRef } from "react";

// Define props interface
interface AboutProps {
  refProp: React.RefObject<HTMLDivElement>;
}

// Convert to TypeScript and use forwardRef
const About = forwardRef<HTMLDivElement, {}>((_, ref) => {
  const [, setScrollPosition] = useState<number>(0);
  const [opacity, setOpacity] = useState<number>(1);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      setOpacity(Math.max(0, 1 - position / 500)); // Adjust divisor for opacity change speed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={ref}
      className="h-screen sticky top-0 text-home px-[10%] pb-20 bg-home bg-cover bg-center bg-no-repeat"
    >
      <div className="h-[20%]"></div>
      <div className="font-header text-[20px] bg-red"></div>
      <div className="flex flex-col w-full">
        <div>
          <h1
            className="flex justify-center w-full h-[70%] sm:text-[100px] md:text-[150px] lg:text-[200px]"
            style={{ opacity }}
          >
            PETER CAO
          </h1>
          <div id="about" className="absolute grid grid-flow-row-dense grid-cols-25">
            <div className="font-title text-[20px] col-start-3 col-span-8" style={{ opacity }}>
              <p>38.7439° N, 77.2405° W</p>
              <p>
                Fairfax, <span className="font-rale font-[300]">V</span>irginia
              </p>
            </div>
            <div className="flex justify-end col-start-3 col-span-4 rounded-[20px]" style={{ opacity }}>
              <div>{/* <img className="object-contain rounded-[10px]" src={myImage} alt="Peter Cao" /> */}</div>
            </div>
            <div className="col-[13_/_span_8] px-10 py-4 rounded-[10px]" style={{ opacity }}>
              {/* Additional content */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;
