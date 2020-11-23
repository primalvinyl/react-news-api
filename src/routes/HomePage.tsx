import React from 'react';
import MasterTemplate from '../components/_MasterTemplate';
import Header from '../components/Header';
import SearchResults from '../components/SearchResults';
import styles from './HomePage.module.scss';

const HomePage = (): React.ReactElement => {
    return (
        <MasterTemplate>
            <div className={styles.root}>
                <Header />
                <SearchResults />
            </div>
        </MasterTemplate>
    );
};

export default HomePage;
