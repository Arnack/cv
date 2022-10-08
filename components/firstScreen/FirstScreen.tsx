import React, { FC } from "react";
import styles from './FirstScreen.module.scss';

interface IProps {
    children?: React.ReactNode;
    scrollY: number;
}

export const FirstScreen: FC<IProps> = ({ scrollY }) => {
    const sunPosition = scrollY * 0.5;
    return (
        <section className={styles.firstFixed}>
            
            {/* top cv description */}
            <div className={styles.topCvDescription}>
                <div className={styles.topCvDescription__left}>
                    <p>
                        Creative Software Engineer & Team Lead <br /> React, TypeScript, WebRTC
                    </p>
                </div>
                <div className={styles.topCvDescription__right}>
                    <p>
                        {/* Specialised on sublime UX <br />  */}
                        Specialised on building scalable and maintainable web applications
                    </p>
                </div>
            </div>

            <h1>Digital Transformation</h1>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" role="img">
                <defs>
                    <clipPath id="clip_5c8988d59dd2306756a83017_viewer-c8de47ff-d847-41cd-a60c-8e81d18d53f8">
                        {/* <ellipse cx="512" cy="512" rx="512" ry="512" /> */}
                    </clipPath>
                </defs>
                <ellipse
                    // mask="url(#mask_5c8988d59dd2306756a83017_viewer-c8de47ff-d847-41cd-a60c-8e81d18d53f8)"
                    cx="50%"
                    cy={`${scrollY > 100 ? '50%' :  (100 - scrollY / 2) + '%'}`}
                    rx={scrollY * 4}
                    ry={scrollY * 4}
                    style={{
                        fill:`rgb(253, ${scrollY < 100 ? 145 * (scrollY / 100) : 145}, ${scrollY < 100 ? 91 * (scrollY / 100) : 91})`, 
                        stroke:'none', strokeWidth:0, pointerEvents: 'visiblePainted'}}
                    // style={{fill:`rgb(253, 60, 45)`, stroke:'none', strokeWidth:0, pointerEvents: 'visiblePainted'}}
                    />
            </svg>

            <section id="bottomBg"
                className="bottomBg"
                style={{
                    // transform: `translateY(${scrollY <  100 ? 100 : scrollY}px)`,
                    // transform: `translateY(${scrollY}px)`,
                    // transform: `translateY(${scrollY > 100 ? 100 : scrollY}px)`,
                    opacity: scrollY < 210 ? 1 : 0.82,
                }}
            />
        </section>
    );
};
