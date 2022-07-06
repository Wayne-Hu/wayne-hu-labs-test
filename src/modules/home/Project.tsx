type Props = {
  name: string;
  description: string;
  from: string;
  to: string;
};

const Project = ({ name, description, from, to }: Props) => {
  return (
    <div className="w-100 flex flex-col border-gray-500 border-solid border-2 rounded-lg m-2 p-4">
      <p className="w-100 flex flex-row justify-between">
        <span className="text-lg font-bold">{name}</span>
        <span className="text-sm text-slate-500">
          {from}-{to}
        </span>
      </p>
      <p>{description}</p>
    </div>
  );
};

export default Project;
