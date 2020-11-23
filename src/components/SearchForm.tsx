import React from 'react';
import { Formik, Form, useFormikContext, FormikValues } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { getArticles, clearArticles } from '../store/actions';
import Input from './presentation/Input';
import Select from './presentation/Select';
import Button from './presentation/Button';
import styles from './SearchForm.module.scss';

const AutoSubmit = () => {
    const context = useFormikContext<SearchFormValuesType>();
    React.useEffect(() => {
        if (context.dirty) context.submitForm();
    }, [context.values.searchSort]);
    return null;
};

const SearchForm = (): React.ReactElement => {
    const dispatch = useDispatch();

    const initialValues: SearchFormValuesType = {
        searchField: '',
        searchSort: 'date'
    };

    const searchOptions = [
        { value: 'date', display: 'Sort by Date' },
        { value: 'relevance', display: 'Sort by Relevance' },
        { value: 'popularity', display: 'Sort by Popularity' }
    ];

    const submitHandler = (values: FormikValues, actions: FormikValues) => {
        dispatch(clearArticles());
        dispatch(getArticles({
            query: values.searchField,
            sort: values.searchSort
        }));
        actions.setSubmitting(false);
    };

    return (
        <section className={styles.root}>
            <Formik
                initialValues={initialValues}
                onSubmit={submitHandler}
                validationSchema={yup.object().shape({
                    searchField: yup.string().required('This field is required.'),
                    searchSort: yup.string()
                })}
            >
                {({
                    values,
                    errors,
                    touched,
                    isSubmitting,
                    handleChange,
                    handleBlur
                }: FormikValues) => (
                    <Form>
                        <Input
                            type="search"
                            id="searchField"
                            value={values.searchField}
                            errors={errors}
                            touched={touched}
                            disabled={isSubmitting}
                            handleChange={handleChange}
                            handleBlur={handleBlur} />
                        <Select
                            id="searchSort"
                            value={values.searchSort}
                            options={searchOptions}
                            errors={errors}
                            touched={touched}
                            disabled={isSubmitting}
                            handleChange={handleChange}
                            handleBlur={handleBlur} />
                        <Button
                            id="searchButton"
                            disabled={isSubmitting}
                            value="Search"
                            color={styles.errorColor} />
                        <AutoSubmit />
                    </Form>
                )}
            </Formik>
        </section>
    );
};

interface SearchFormValuesType {
    searchField: string;
    searchSort: string;
}

export default SearchForm;
