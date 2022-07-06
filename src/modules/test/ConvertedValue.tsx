type Props = { value: string };

const ConvertedValue = ({ value }: Props) => {
  return <p className="mt-2 text-center text-2xl font-bold">{value}</p>;
};

export default ConvertedValue;
