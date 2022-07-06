type Props = {
  name: string;
};

const User = ({ name }: Props) => {
  return <h1 className="w-full text-3xl text-center">{name}</h1>;
};

export default User;
