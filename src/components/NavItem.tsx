import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "classnames";
import { useMemo } from "react";

type Props = {
  name: string;
  link: string;
};

const rootPathReg = /^\/(.*)\/.*/;

const NavItem = ({ name, link }: Props) => {
  const router = useRouter();

  const match = useMemo(() => {
    if (router.route === link) return true;

    const pathGroup = router.route.match(rootPathReg);
    const linkGroup = link.match(rootPathReg);

    console.log({ pathGroup, linkGroup });

    if (pathGroup && linkGroup && pathGroup[1] === linkGroup[1]) return true;

    return false;
  }, [router, link]);

  return (
    <li
      className={clsx("h-full p-4 hover:bg-slate-100", {
        "bg-green-200": match,
      })}
    >
      <Link href={link}>
        <a>{name}</a>
      </Link>
    </li>
  );
};

export default NavItem;
