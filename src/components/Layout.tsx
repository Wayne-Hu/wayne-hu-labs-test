import { FC } from "react";
import Navigation from "./Navigation";

type Props = {
  children?: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Navigation></Navigation>
      <main className="flex flex-col min-h-screen p-4 items-center justify-center">
        {children}
      </main>
    </>
  );
};

export default Layout;
