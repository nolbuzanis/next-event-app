import classes from './LogisticsItem.module.css';
import React from 'react';

interface LogisticsItemProps {
  icon: () => JSX.Element;
  children: React.ReactNode;
}

const LogisticsItem = (props: LogisticsItemProps) => {
  const { icon: Icon } = props;

  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes.content}>{props.children}</span>
    </li>
  );
};

export default LogisticsItem;
