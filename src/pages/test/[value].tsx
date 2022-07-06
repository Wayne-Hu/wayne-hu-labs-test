import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import ConvertedValue from "../../modules/test/ConvertedValue";
import Input from "../../modules/test/Input";

const Test = ({
  query,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { value } = query;
  const [words, setWords] = useState<string | null>();

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/convert?value=${value}`);
      if (response) {
        setWords(await response.text());
      }
    })();
  }, [value]);

  return (
    <Layout>
      <div>
        <Input />
        {words && <ConvertedValue value={words} />}
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return {
    props: {
      query,
    },
  };
};

export default Test;
