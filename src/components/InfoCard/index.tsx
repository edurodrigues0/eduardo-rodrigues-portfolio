import { FiMail, FiDownload } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineWorkOutline } from "react-icons/md";

import { Button } from "../Button";
import { motion } from "framer-motion";
import { InfoItem } from "./InfoItem";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import { Tag } from "./Tag";

const MotionButton = motion(Button);

const TagsList = [
  "React.js",
  "React Native",
  "Node.js",
  "Next.js",
  "Nest.js",
  "Tailwidcss",
  "GO",
];

export function InfoCard() {
  return (
    <div className="relative w-80 h-[35rem] p-6 bg-gray-800 text-white flex flex-col items-center justify-center border-2 border-cyan-500 rounded-tl-[7rem] rounded-br-[7rem]">
      <div className="absolute max:w-80 w-full max-2xl:w-72 max-xl:w-full h-[35rem] bg-cyan-500 rounded-tl-[7rem] rounded-br-[7rem] z-[-1] bottom-2 right-2" />

      {/* Avatar */}
      <Image
        src="http://github.com/edurodrigues0.png"
        alt="avatar"
        width={96}
        height={96}
        className="w-24 h-24 rounded-full border-2 border-cyan-500 mb-4"
      />

      {/* Name and Title */}
      <h2 className="text-2xl font-bold">Eduardo Rodrigues</h2>
      <span className="text-sm text-gray-400">Full-Stack Developer</span>

      {/* Info Items */}
      <div className="grid grid-rows-4 gap-3 mt-6 text-sm">
        <InfoItem icon={<FiMail />} title="edurodriguesdev1@gmail.com" />
        <InfoItem icon={<IoLocationOutline />} title="Sacramento/MG - Brasil" />
        <InfoItem
          icon={<MdOutlineWorkOutline />}
          title="Full-time / Freelancer"
        />
        <InfoItem icon={<FaWhatsapp />} title="+55 (34) 9 9824-9953" />
        <div className="flex items-center gap-2">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/eduardo-rodrigues-93b66518a/"
          >
            <span className="text-cyan-500 text-xs">
              linkedin.com/in/eduardo-rodrigues
            </span>
          </a>
        </div>
      </div>

      {/* Skills */}
      <div className="flex gap-2 mt-4 flex-wrap">
        {TagsList.map((tag) => (
          <Tag key={tag} title={tag} />
        ))}
      </div>

      {/* Download CV Button */}
      <MotionButton
        whileHover={{ scale: 1.0 }}
        whileTap={{ scale: 0.8 }}
        className="2xl:mt-6 max-2xl:mt-3 max-xl:mt-4 max-md:mt-6"
        variant="white"
      >
        Download CV
        <FiDownload />
      </MotionButton>
    </div>
  );
}
