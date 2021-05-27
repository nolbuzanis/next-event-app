import Link from 'next/link';

import classes from './Button.module.css';

const Button = ({ children, link }): JSX.Element => {
  return (
    <Link href={link}>
      <a className={classes.btn}>{children}</a>
    </Link>
  );
};

export default Button;
