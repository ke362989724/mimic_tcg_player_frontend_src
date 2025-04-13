import React from "react";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";
import { CiChat2 } from "react-icons/ci";
import Link from "next/link";
import { Button } from "../ui/button";
import AppSidebar from "../app-sidebar/app-sidebar";
import { useTranslations } from "next-intl";
import Icon from "../../../public/carousell_icon.svg";

type Props = {};

const iconList = [
  {
    icon: <FaRegHeart fontSize={20} />,
    link: "/likes",
  },
  {
    icon: <CiBellOn fontSize={20} />,
    link: "/updates",
  },
  {
    icon: <CiChat2 fontSize={20} />,
    link: "/inbox",
  },
];

const Header = (props: Props) => {
  const t = useTranslations("homepage");

  return (
    <div className="mx-4 flex items-center justify-between">
      <Link href="/">
        <Image src={Icon} width={166} height={32} alt="Logo icon" />
      </Link>
      <div className="flex items-center">
        <AppSidebar />
        {iconList.map((icon) => {
          return (
            <Link
              key={icon.link}
              href={icon.link}
              className="p-3 hover:bg-gray-100"
            >
              {icon.icon}
            </Link>
          );
        })}
        <Link href="/sell">
          <Button className="cursor-pointer bg-red-500 hover:bg-red-800 ml-2">
            Sell
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
