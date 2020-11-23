import React from 'react';
import SearchForm from '../components/SearchForm';
import styles from './Header.module.scss';

const Header = (): React.ReactElement => {
    return (
        <header className={styles.root}>
            <div className={styles.wrapper}>
                <SearchForm />
            </div>
        </header>
    );
};

export default Header;
