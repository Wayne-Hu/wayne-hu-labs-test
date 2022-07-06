type Props = {
  message?: string;
};
const Notification = ({ message }: Props) => {
  if (!message) return null;

  return <p>{message}</p>;
};

export default Notification;
