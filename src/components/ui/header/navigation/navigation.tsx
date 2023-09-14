"use client";

import { NextPage } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

import s from "@/components/ui/header/navigation/navigation.module.scss";

type Link = {
  path: string;
  label: string;
};

interface Props {
  links: Link[];
}

const Navigation: NextPage<Props> = ({ links }) => {
  const pathname = usePathname();

  return (
    <nav className={s.nav}>
      {links.map((el) => {
        const isActive = pathname === el.path;

        //console.log(isActive);
        

        return (
          <Link className={!isActive ? s.nav_active : s.nav_inactive} href={el.path}>
            {el.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
