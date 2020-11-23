import React from 'react';
import ArticleBox from './presentation/ArticleBox';
import { RootState } from '../store/reducers';
import { useSelector } from 'react-redux';
import styles from './SearchResults.module.scss';

const SearchResults = (): React.ReactElement => {
    const articles = useSelector((state: RootState) => state.articles);

    return (
        <main className={styles.root}>
            <div className={styles.wrapper}>
                {
                    articles.results && 
                    articles.results.map(article => <ArticleBox key={article.url} {...article} />)
                }
            </div>
        </main>
    );
};

export default SearchResults;
