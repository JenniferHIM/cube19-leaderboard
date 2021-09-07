import {ReactNode} from 'react';
import styles from './Container.module.scss';

interface IContainer {
  children: ReactNode;
}
const Container = ({children}: IContainer) => <div className={styles.container}>{children}</div>;

export default Container;
