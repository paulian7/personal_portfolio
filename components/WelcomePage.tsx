import React from "react";
import Image from "next/image";

import MainPaulPic from "public/main-paulian-pic.png";

function WelcomePage() {
  return (
    <div className="flex flex-row items-center justify-between mx-80 h-screen space-x-24">
      {/* LEFT - Text part of landing page */}
      <div className="flex flex-col">
        <p className="text-7xl font-bold">
          Hi, I&rsquo;m <span className="text-lightBlue">Paulian</span>
        </p>

        <p className="font-light text-lg mt-10">
          --&gt; I am a 4th year majoring in Computer Science at the University
          of California Riverside.
        </p>

        <p className="font-light text-lg mt-8">
          --&gt; I&rsquo;m interested in opportunities to learn and grow as a
          software developer and product manager.
        </p>

        <p className="font-light text-lg mt-8 underline underline-offset-8">
          Scroll to learn more about me 🔭
        </p>
      </div>

      {/* RIGHT - Picture part of landing page */}
      <div className="flex flex-col">
        <Image
          src={MainPaulPic}
          alt="Main pic of Paulian :)"
          width={616}
          height={593}
          className="rounded-xl"
        />
      </div>
    </div>
  );
}

export default WelcomePage;
