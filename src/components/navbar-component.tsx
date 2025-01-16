"use client";

import React, { useState } from "react";
import { navRoute } from "@/constants/navbar-constants";
import Link from "next/link";
import Image from "next/image";
import LinkedIn from "../../public/icons/linkedin-icon.svg";
import { useTheme } from "next-themes";
import {
  MoonIcon,
  SunIcon,
  ListBulletIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
import { SwitchComponent } from "./ui/switch";
import { MenubarComponent } from "./ui/menubar";

function NavbarComponent() {
  const [currentRoute, setCurrentRoute] = useState("");
  const { setTheme, theme } = useTheme();

  const darkModeToggleButton = () => {
    return (
      <button className="flex items-center">
        <SwitchComponent
          isChecked={theme === "dark"}
          handleChange={(e) => {
            const appliedTheme = e ? "dark" : "light";
            setTheme(appliedTheme);
          }}
        />
        {theme === "dark" ? (
          <MoonIcon className="ml-2 text-gray-500 dark:text-gray-200" />
        ) : (
          <SunIcon className="ml-2 text-yellow-500" />
        )}
      </button>
    );
  };

  return (
    <div className="w-full px-5 md:px-20 fixed top-0 left-0 z-10">
      <nav className="h-16 bg-white dark:bg-gray-900 flex justify-between items-center border-b border-gray-300 dark:border-gray-700 shadow-md rounded-lg px-5">
        <Link
          href={`/`}
          onClick={() => setCurrentRoute("")}
          className="font-bold text-lg"
        >
          <div className="flex items-center">
            <p className="text-gray-800 dark:text-white">krsn</p>
            <span className="h-2.5 w-2.5 bg-blue-400 rounded-full ml-1"></span>
          </div>
        </Link>

        <div className="hidden md:flex space-x-5 ">
          {navRoute.map((route) => {
            const isPortfolio = route.route === "/portfolio";
            return (
              <div
                key={route.route}
                className="relative group flex justify-center"
              >
                <Link
                  href={isPortfolio ? "#" : route.route}
                  onClick={() => setCurrentRoute(route.route)}
                  className={`${
                    currentRoute === route.route && !isPortfolio
                      ? "text-blue-600 dark:text-blue-400"
                      : isPortfolio
                      ? "text-gray-500 dark:text-gray-400"
                      : "text-gray-700 dark:text-gray-300"
                  } p-2 font-semibold text-sm`}
                  aria-disabled={isPortfolio}
                >
                  {route.name}
                </Link>

                {isPortfolio && (
                  <div className="absolute invisible group-hover:visible top-0 left-full mt-1 px-2 py-1 bg-gray-700 text-white rounded-md shadow-sm text-xs">
                    This page is under development
                  </div>
                )}
              </div>
            );
          })}

          {darkModeToggleButton()}

          <Link href="https://www.linkedin.com/in/krisnadwisetyaadi">
            <Image
              src={LinkedIn}
              alt="linkedin-icon"
              className="ml-3"
              width={30}
              height={30}
            />
          </Link>
          <Link
            href="https://github.com/krisnasetyadi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubLogoIcon width={30} height={30} />
          </Link>
        </div>

        <MenubarComponent
          className="md:hidden"
          icon={<ListBulletIcon />}
          contents={[
            {
              item: "About",
              shortcut: "⌘T",
              redirectUrl: "/about",
            },
            {
              item: "Portofolio",
              shortcut: "⌘T",
              redirectUrl: "/portofolio",
            },
            {
              item: darkModeToggleButton(),
            },
          ]}
        />
      </nav>
    </div>
  );
}

export default NavbarComponent;
