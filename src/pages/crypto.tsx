import dynamic from "next/dynamic";
import { MetamaskStateProvider } from "use-metamask";
import Layout from "../components/Layout";

const ConnectWallet = dynamic(() => import("../modules/crypto/ConnectWallet"), {
  ssr: false,
});

const Crypto = () => {
  return (
    <MetamaskStateProvider>
      <Layout>
        <ConnectWallet />
      </Layout>
    </MetamaskStateProvider>
  );
};

export default Crypto;
