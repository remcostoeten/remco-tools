import React from 'react';
import styles from '@sm/BackgroundVariantOne.module.scss';
export default function BackgroundVariantOne() {
    return (
        <>
            <div className={styles.gradientwrapper}>
                <div className={styles.gradient}></div>
            </div>
        </>
    );
}
