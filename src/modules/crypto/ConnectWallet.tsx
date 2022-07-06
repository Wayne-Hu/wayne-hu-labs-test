import { useEffect, useState } from "react";
import { useMetamask } from "use-metamask";
import Web3 from "web3";
import Notification from "../../components/Notification";
import Button from "../../components/Button";

const ConnectWallet = () => {
  const { connect, metaState } = useMetamask();

  useEffect(() => {
    if (metaState.isAvailable && !metaState.isConnected) {
      (async () => {
        try {
          await connect(Web3);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [metaState.isConnected]);

  const handleConnection = async () => {
    if (metaState.isAvailable && !metaState.isConnected) {
      await connect(Web3);
    }
  };

  return (
    <div className="flex flex-col justify-center">
      {!metaState.isConnected && (
        <Notification message="Please click the button below to connect to your wallet" />
      )}

      <Button
        label={metaState.isConnected ? "Disconnect" : "Connect"}
        onClick={handleConnection}
      />

      <p className="pt-2 font-bold text-lg">{metaState?.account}</p>
    </div>
  );
};

export default ConnectWallet;
