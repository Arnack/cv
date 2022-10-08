import React, { FC } from "react";
import styles from './SecondSection.module.scss';

interface IProps {
    scrollY: number;
}

export const SecondSection: FC<IProps> = ({ scrollY }) => {
    return (
        <section className={styles.secondScreen}>
            
            
        </section>
    );
};
