import { DeployButton } from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { Hero } from "@/components/hero";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { ConnectSupabaseSteps } from "@/components/tutorial/connect-supabase-steps";
import { SignUpUserSteps } from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";
import { StickyNote } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

import Image from "next/image";
import logo from "./logo8.png";
import cv from "./tmcv.png";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { Highlight } from "@/components/ui/hero-highlight";
import { Spotlight } from "@/components/ui/spotlight-new";
import { WobbleCard } from "@/components/ui/wobble-card";
const user = {
  age: 16,

};

export default function Home() {
  return (

    
<div>


    <div className="mt-[80px] mr-auto ml-auto text-[100px] max-w-[1000px] text-center">
      <p className="font-medium flex items-center justify-center text-[15px] mr-auto ml-auto bg-[#131313] text-[#a7a7a7] h-[40px] w-[250px] rounded-full font-light border">20% off all credits    <ChevronRight height={15  } width={15} className="ml-[10px] rounded" />
</p> 
      <h5 className="font-semibold">Make <Highlight> resumes </Highlight>that land jobs for free</h5>
      <p className="font-medium text-[25px] mr-auto ml-auto max-w-[800px] font-light">Slaite fucntions on a credit based system. Each CV cost x amount of credits depending on charahcteristics amount etc. But generally speaking fior the average user they will never find the need to spend.</p>
      
    </div>
    <div className="text-center space-x-[20px] mt-[40px] font-bold">
      <button className="w-[200px] h-[70px] bg-white text-black font-semibold rounded-[20px] ">Create cv</button>
      <button className="w-[200px] h-[70px]  text-white font-medium rounded-[20px] font-semibold border">Edit cv</button>
    </div>
    <div className=" justify-center items-center text-center mt-[30px] h-[1000px] w-[1000px] bg-[#131313] mx-auto border ">
      </div>
    <div className="text-center text-[60px] font-medium mt-[80px]" >
      <h6>Backed be reputable companies</h6>
      <p className="font-normal text-[25px] text-[#a7a7a7] mt-[20px]">Slaite is used by over 65,000 profecionals at differenty companys.</p>
    </div>
  <div className="flex justify-center items-center mt-[70px] space-x-4">
  <a className="flex justify-center items-center h-[200px] w-[200px] bg-[#131313]"></a>
  <a className="flex justify-center items-center h-[200px] w-[200px] bg-[#131313]"></a>
  <a className="flex justify-center items-center h-[200px] w-[200px] bg-[#131313]"></a>
    <a className="flex justify-center items-center h-[200px] w-[200px] bg-[#131313]"></a>
  <a className="flex justify-center items-center h-[200px] w-[200px] bg-[#131313]"></a>
  <a className="flex justify-center items-center h-[200px] w-[200px] bg-[#131313]"></a>
</div>

<div className="wobble grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-7xl mx-auto w-full mt-[100px]">
  {/* First WobbleCard (Left, stacked on top) */}
  <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-black">
    <div className="max-w-sm">
      <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        Signup for blazing-fast cutting-edge state of the art Gippity AI wrapper
        today!
      </h2>
      <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
        With over 100,000 monthly active bot users, Gippity AI is the most popular
        AI platform for developers.
      </p>
    </div>
  </WobbleCard>

  <WobbleCard containerClassName="col-span-1 min-h-[300px]  bg-black">
    <div className="max-w-sm">
      <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        Signup for blazing-fast cutting-edge state of the art Gippity AI wrapper
        today!
      </h2>
      <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
        With over 100,000 monthly active bot users, Gippity AI is the most popular
        AI platform for developers.
      </p>
    </div>
  </WobbleCard>

  <WobbleCard containerClassName="col-span-1 lg:col-start-2 min-h-[300px]  bg-black ">
    <div className="max-w-sm">
      <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        Signup for blazing-fast cutting-edge state of the art Gippity AI wrapper
        today!
      </h2>
      <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
        With over 100,000 monthly active bot users, Gippity AI is the most popular
        AI platform for developers.
      </p>
    </div>
  </WobbleCard>
</div>

<div className="footer w-full h-[100px] border-t-2 mt-[100px] flex items-center justify-between px-4 bg-[#030303]">
  <div className="flex items-center">
    <Image
      className=" m-[10px]"
      src={logo}
      alt="Slaite Logo"
      width={60}
      height={60}
    />
    <h1 className="font-bold text-[35px] text-white">Slaite</h1>
  </div>
  <a
    href="https://vercel.com?utm_source=YOUR_PROJECT_NAME&utm_campaign=oss"
    target="_blank"
    rel="noreferrer noopener"
    aria-label="Powered by Vercel"
  >
    <img className="border"
      src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg"
      alt="Powered by Vercel"
      width={240}
      height={64}
    />
  </a>
</div>
</div>
  );
}
