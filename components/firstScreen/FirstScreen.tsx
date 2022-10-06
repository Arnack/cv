import React, { FC } from "react";
import styles from './FirstScreen.module.scss';

interface IProps {
    children?: React.ReactNode;
    scrollY: number;
}

export const FirstScreen: FC<IProps> = ({ scrollY }) => {
    return (
        <div className={styles.firstFixed}>
            <h1>GREG</h1>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" role="img">
                <defs>
                    <clipPath id="clip_5c8988d59dd2306756a83017_viewer-c8de47ff-d847-41cd-a60c-8e81d18d53f8">
                        {/* <ellipse cx="512" cy="512" rx="512" ry="512" /> */}
                    </clipPath>
                </defs>
                <ellipse
                    // mask="url(#mask_5c8988d59dd2306756a83017_viewer-c8de47ff-d847-41cd-a60c-8e81d18d53f8)"
                    cx="50%" cy="50%" rx={scrollY * 4 || 0} ry={scrollY * 4 || 0}
                    style={{fill:'rgb(96,21,155)', stroke:'none', strokeWidth:0, pointerEvents: 'visiblePainted'}}
                    />
            </svg>

        </div>
    );
};