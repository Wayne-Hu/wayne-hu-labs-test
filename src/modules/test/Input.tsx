import { useRouter } from "next/router";
import { useState } from "react";
import clsx from "classnames";
import Button from "../../components/Button";

const Input = () => {
  const router = useRouter();
  const [number, setNumber] = useState<number | null>();

  const handleConvert = () => {
    if (number) {
      router.replace(`/test/${number}`);
    }
  };

  return (
    <div>
      <input
        type="number"
        className="border-2 border-blue-400 border-solid rounded-md px-3 py-2 mr-2"
        step={1}
        min={0}
        required
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <Button label="Convert" disabled={!number} onClick={handleConvert} />
    </div>
  );
};

export default Input;
