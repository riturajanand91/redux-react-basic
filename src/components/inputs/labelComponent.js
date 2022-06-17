import React from 'react'
import { UserContext } from '../../contexts/LanguageContext';

const LabelComponent = () => {
    const value = React.useContext(UserContext);
    const text = value === 'english' ? 'First Name' : 'पहला नाम';
    return (
        <label>{text}</label>
    )
}

export default LabelComponent