import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';

import {
  BriefcaseIcon,
  FlowerIcon,
  HeartIcon,
  LightbulbIcon,
  MountainSnow,
  SettingsIcon,
} from "lucide-react";

export default function HeroFormCenterAlignedSearchWithTags() {

  const { login } = useKindeAuth();

  const handleLogin = () => login();

  return (
    <MaxWidthWrapper className="h-screen">
      {/* Hero */}
      <div className="relative overflow-hidden border-[1px] w-full bg-white">
        <div className="container py-24 lg:py-32">
          <div className="text-center">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Insights
            </h1>
            <p className="mt-3 text-xl text-muted-foreground">
              Stay in the know with insights from industry experts.
            </p>
            <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
              {/* Form */}
              <form>
                <div className="relative z-10 flex space-x-3 p-3 border bg-background rounded-lg shadow-lg">
                  <Button 
                    variant={"outline"} 
                    className="rounded-[8px] w-full hover:bg-[#ebebeb]"
                    onClick={handleLogin}
                  >
                    <svg
                      className="w-4 h-auto mr-2"
                      width={46}
                      height={47}
                      viewBox="0 0 46 47"
                      fill="none"
                    >
                      <path
                        d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                        fill="#34A853"
                      />
                      <path
                        d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                        fill="#EB4335"
                      />
                    </svg>
                    Sign up with Google
                  </Button>
                </div>
              </form>
              {/* End Form */}
              {/* SVG Element */}
              <div className="hidden md:block absolute top-0 end-0 -translate-y-12 translate-x-20">
                <svg
                  className="w-16 h-auto text-orange-500"
                  width={121}
                  height={135}
                  viewBox="0 0 121 135"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                    stroke="currentColor"
                    strokeWidth={10}
                    strokeLinecap="round"
                  />
                  <path
                    d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                    stroke="currentColor"
                    strokeWidth={10}
                    strokeLinecap="round"
                  />
                  <path
                    d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                    stroke="currentColor"
                    strokeWidth={10}
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              {/* End SVG Element */}
              {/* SVG Element */}
              <div className="hidden md:block absolute bottom-0 start-0 translate-y-10 -translate-x-32">
                <svg
                  className="w-40 h-auto text-cyan-500"
                  width={347}
                  height={188}
                  viewBox="0 0 347 188"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                    stroke="currentColor"
                    strokeWidth={7}
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              {/* End SVG Element */}
            </div>
            <div className="mt-10 sm:mt-20 flex flex-wrap gap-2 justify-center">
              <Button variant={"outline"} className="rounded-[5px]">
                <BriefcaseIcon className="flex-shrink-0 w-3 h-auto mr-2" />
                Business
              </Button>
              <Button variant={"outline"}>
                <SettingsIcon className="flex-shrink-0 w-3 h-auto mr-2" />
                Strategy
              </Button>
              <Button variant={"outline"}>
                <HeartIcon className="flex-shrink-0 w-3 h-auto mr-2" />
                Health
              </Button>
              <Button variant={"outline"}>
                <LightbulbIcon className="flex-shrink-0 w-3 h-auto mr-2" />
                Creative
              </Button>
              <Button variant={"outline"}>
                <FlowerIcon className="flex-shrink-0 w-3 h-auto mr-2" />
                Environment
              </Button>
              <Button variant={"outline"}>
                <MountainSnow className="flex-shrink-0 w-3 h-auto mr-2" />
                Adventure
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* End Hero */}
    </MaxWidthWrapper>
  );
}
