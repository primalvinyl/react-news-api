import React from 'react';
import Button from './Button';
import styles from './ArticleBox.module.scss';

const ArticleBox = (props: ArticleBoxType): React.ReactElement => {

    const {
        title,
        description,
        image,
        url
    } = props;

    return (
        <article className={styles.root}>
            <div className={styles.imageWrapper}>
                <img src={image} alt="" />
            </div>
            <div className={styles.wrapper}>
                <h1>{title}</h1>
                <p>{description}</p>
                <Button
                    id="link"
                    value="Read More"
                    url={url}
                />
            </div>
        </article>
    );
};

type ArticleBoxType = {
    readonly title: string;
    readonly description: string;
    readonly image: string;
    readonly url: string;
};

export default ArticleBox;
