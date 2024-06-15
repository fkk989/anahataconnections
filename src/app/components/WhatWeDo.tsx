import React from "react";
import Image from "next/image";

interface WhatWeDoProps {
  collaboration: {
    content: {
      children: { text: string }[];
    }[];
  };
  advertisement: {
    content: {
      children: { text: string }[];
    }[];
  };
  yoga: {
    content: {
      children: { text: string }[];
    }[];
  };
}

const WhatWeDo: React.FC<WhatWeDoProps> = ({
  collaboration,
  advertisement,
  yoga,
}) => {
  return (
    <div className=" custom2:px-28  pt-16 flex flex-col space-y-3">
      <h1 className="font-Pattaya text-emerald-900 text-center text-5xl mb-8">
        What we do?
      </h1>

      {/* First Item */}
      <div className="text-black flex flex-row md:flex-row items-center md:items-start gap-2">
        <div className="md:w-1/2">
          <Image
            src="assets/collab.svg"
            alt="Collaboration Image"
            width={500}
            height={300}
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h1 className="font-bold font-sarabun text-[30px] mb-4">
            {collaboration.content[0].children[0].text}
          </h1>
          <p className=" font-sarabun text-[1.6rem] text-justify ">
            {collaboration.content[1].children[0].text}
          </p>
        </div>
      </div>

      {/* Second Item */}
      <div className="text-black flex flex-row md:flex-row-reverse items-center md:items-center gap-2">
        <div className="md:w-1/2 custom2:pl-6">
          <Image
            src="assets/collab.svg"
            alt="Advertisement Image"
            width={500}
            height={300}
          />
        </div>
        <div className="md:w-1/2 md:pr-8">
          <h1 className="font-bold font-sarabun text-[30px] mb-4">
            {advertisement.content[0].children[0].text}
          </h1>
          <p className=" font-sarabun text-[1.6rem] text-justify ">
            {advertisement.content[1].children[0].text}
          </p>
        </div>
      </div>

      {/* Third Item */}
      <div className="text-black flex flex-row md:flex-row items-center md:items-start gap-2">
        <div className="md:w-1/2">
          <Image
            src="assets/collab.svg"
            alt="Yoga Image"
            width={500}
            height={300}
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h1 className="font-bold font-sarabun text-[30px] mb-4">
            {yoga.content[0].children[0].text}
          </h1>
          <p className=" font-sarabun text-[1.6rem] text-justify ">
            {yoga.content[1].children[0].text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
