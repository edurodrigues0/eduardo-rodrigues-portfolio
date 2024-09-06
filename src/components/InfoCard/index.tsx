import { FiMail, FiDownload } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineWorkOutline } from "react-icons/md";

import { Button } from "../Button";
import { InfoItem } from "./InfoItem";
import { FaWhatsapp } from "react-icons/fa";

export function InfoCard() {
  return (
    <div className="w-80 h-[30rem] p-6 bg-background flex flex-col items-center justify-center border-2 border-white rounded-tl-[7rem] rounded-br-[7rem] relative">
      <div className="w-72 h-[30rem] bg-cyan-500 rounded-tl-[7rem] rounded-br-[7rem] z-[-1] absolute bottom-1 right-1" />
      <img
        src="http://github.com/edurodrigues0.png"
        alt="avatar"
        className="w-24 h-24 rounded-full border-2 border-cyan-500 mb-4"
      />
      <h2>Eduardo Rodrigues</h2>
      <span>Desenvolvedor Full Stack</span>

      <div className="grid grid-rows-4 gap-2 mt-8">
        <InfoItem icon={<FiMail />} title="edurodriguesdev1@gmail.com" />
        <InfoItem icon={<IoLocationOutline />} title="Sacramento/MG - Brasil" />
        <InfoItem
          icon={<MdOutlineWorkOutline />}
          title="Full-time / Freelancer"
        />
        <InfoItem icon={<FaWhatsapp />} title="+55 (34) 9 9824-9953" />
      </div>

      <Button className="mt-8" variant="white">
        Download CV
        <FiDownload />
      </Button>
    </div>
  );
}
