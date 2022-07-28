import clsx from 'clsx';

type Props = {
  text: string;
  classes?: string[];
  onClick?: () => void;
};
export const Button: React.FC<Props> = ({
  text,
  classes = [],
  onClick = () => {},
}) => {
  return (
    <button type="button" className={clsx('btn', classes)} onClick={onClick}>
      {text}
    </button>
  );
};
