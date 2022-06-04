import React from 'react';
import PropTypes from 'prop-types';

import formStyles from './form.module.css';

function Form(props) {
    const [firstFile, setFirstFile] = React.useState('');
    const [secondFile, setSecondFile] = React.useState('');

    function handleSubmit(e) {
        e.preventDefault();

        props.onSubmit(firstFile, secondFile);
    }

    function handleFileChange(e) {
        e.preventDefault();

        const firstReader = new FileReader();
        const secondReader = new FileReader();

        firstReader.readAsText(e.target.files[0]);
        firstReader.onloadend = () => {
            setFirstFile(JSON.parse(firstReader.result));
        }

        secondReader.readAsText(e.target.files[1]);
        secondReader.onloadend = () => {
            setSecondFile(JSON.parse(secondReader.result));
        }
    }

    return (
        <form className={formStyles.form} onSubmit={handleSubmit}>
            <fieldset className={formStyles.fieldset}>
                <label className='text text_type_main-medium mb-6' htmlFor="file_uploads">Выберите файлы (JSON)</label>
                <input
                    type="file"
                    id="file_uploads"
                    name="file_uploads"
                    accept=".json"
                    multiple
                    required
                    onChange={handleFileChange}
                    className={`${formStyles.input} text text_type_main-medium mb-6 ml-15`}
                >
                </input>
                <button className={`${formStyles.button} text text_type_main-medium`} type="submit">Подтвердить</button>
            </fieldset>
        </form>
    );
}

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default Form;