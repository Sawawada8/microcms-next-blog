import clsx from 'clsx';

export const Card = ({
  children,
  classes = '',
}: {
  children: JSX.Element;
  classes?: string;
}) => {
  return (
    <div
      className={clsx(
        'bg-ghost rounded-xl border-2 border-primary p-3 shadow-xl',
        classes
      )}
    >
      {children}
    </div>
  );
};
