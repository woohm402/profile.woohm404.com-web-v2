import React from 'react';

import classNames from 'classnames';

import styles from './Container.module.scss';

interface Props {
  className?: string;
}

const Container: React.FC<Props> = ({ children, className }) => {
  return <div className={classNames(styles.wrapper, className)}>{children}</div>;
};

export default Container;
