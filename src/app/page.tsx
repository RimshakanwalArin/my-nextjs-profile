import React from "react";
import Image from "next/image";

function Home() {
  return (
    <div className="bg-gradient-to-r from-white to-blue-300 text-center text-blue-800 p-10">
      <div className="m-24">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR92hbvxRLgs0YbCq4r54ae885Bt_WhqV0QLw&s"
          alt="computer"
          width={350}   // Correct way to set width
          height={350}  // Correct way to set height
          className="rounded-full mx-auto animate-bounce"
        />
        <h1 className="text-4xl mt-4 cursor-pointer">Hy</h1>

        <h1 className="text-2xl mt-2 cursor-pointer">
          I&apos;m <span className="font-semibold">Rimsha Kanwal Arian</span>, Full Stack Developer
        </h1>

        <div className="text-lg mt-4 max-w-xl mx-auto cursor-pointer">
          <p>I&apos;m a Full Stack Developer specializing in creating the visual and interactive aspects of websites and web applications. I use technologies like HTML, CSS, TypeScript, and Next.js to build user interfaces that are both functional and aesthetically pleasing. I ensure a seamless user experience by optimizing performance and ensuring cross-browser compatibility.</p>
        </div>

        <div className="mt-10">
          <div className="inline-block cursor-pointer">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZswHDGepSQiDMp9gDfFsoSOv0_cEv4pGuIg&s"
              alt="Artificial Intelligence"
              width={150}
              height={150}
              className="rounded-full mx-auto animate-pulse"
            />
            <h3 className="text-xl mt-4">
              Frontend <span className="font-semibold">Developer</span>
            </h3>
            <p className="text-lg mt-2 max-w-sm mx-auto">
              I&apos;m Rimsha Kanwal Arian, a 23-year-old Full Stack developer. I have acquired skills in frontend development and studied on-site at Governor House. I am grateful to Governor Kamran Tessori for initiating my IT education.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
