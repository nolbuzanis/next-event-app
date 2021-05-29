import Link from 'next/link';

import classes from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  link?: string;
  onClick?: () => void;
}

const Button = ({ children, link, onClick }: ButtonProps): JSX.Element => {
  if (link) {
    return (
      <Link href={link}>
        <a className={classes.btn}>{children}</a>
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes.btn}>
      {children}
    </button>
  );
};

export default Button;
