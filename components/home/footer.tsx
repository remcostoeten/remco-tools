import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Manrope } from "next/font/google";
import GithubIcon from "../core/icons/Github";
import Linkedin from "../core/icons/Linkedin";
import MailIcon from "../core/icons/Mail";
import { Icons } from "../icons";

const rope = Manrope({ subsets: ['latin'] });

const Footer: React.FC = () => {
  return (
    <div className=" showAlternativeCursorflex w-full h-[440px]  gap-8 rounded-block">
      <div className="w-7/12 padding-block h-full footer-grid__block rounded-block">
        <h3 className="text-3xl font-bold">
          <span className={rope.className}>
            Before you go,<br />check out these links
          </span>
        </h3>
      </div>

      <div className="w-5/12 footer  flex flex-col gap-8">
        <div className="h-3/5 footer-grid__block  rounded-block">
        </div>

        <div className="flex justify-between gap-8">
          <div className="grid social showAlternativeCursor w-full place-items-center footer-grid__block     rounded-block">
                <GitHubLogoIcon className="scale-[3]"/>
          </div>
          <div className="grid social showAlternativeCursor w-full place-items-center footer-grid__block   rounded-block">
          <Linkedin/>
          </div>
          <div className="grid social showAlternativeCursor  w-full place-items-center footer-grid__block   rounded-block">
          <a href="mailto:remcostoeten@hotmail.com"><MailIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
