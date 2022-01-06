import React from "react";
import { GithubLogo, LinkedinLogo } from "phosphor-react";

const Footer = () => {
  return (
    <footer>
      <div className="bg-slate-900 w-full flex flex-row items-center justify-start gap-20 h-20 pl-56 pr-56">
        <div className="flex flex-row items-center justify-between gap-5 text-slate-100/80">
          <p className="text-sm">© 2022 Alina Sheikh</p>
          <a href="https://github.com/alshei" target="_blank">
            <div>
              <GithubLogo size="1.5rem" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/alina-sheikh-a59a4518a/"
            target="_blank"
          >
            <div>
              <LinkedinLogo size="1.5rem" />
            </div>
          </a>
        </div>

        <div className="flex flex-row items-center justify-between gap-5 text-apricot">
          <a href="#">
            <p className="text-sm">About</p>
          </a>
          <a href="https://github.com/alshei/notepad-v2" target="_blank">
            <p className="text-sm">Repository</p>
          </a>
          <a href="https://phosphoricons.com/" target="_blank">
            <p className="text-sm">Icons</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
