import React from 'react';
import ErrorBoundary from './utility/ErrorBoundary';
import styles from './_MasterTemplate.module.scss';

const MasterTemplate = ({ children }: MasterTemplateProps): React.ReactElement => {
    return (
        <div className={styles.root}>
            <ErrorBoundary>
                {children}
            </ErrorBoundary>
        </div>
    );
}

type MasterTemplateProps = {
    children: React.ReactElement;
};

export default MasterTemplate;
