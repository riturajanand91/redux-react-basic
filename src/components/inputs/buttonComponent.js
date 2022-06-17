import React from 'react'
import { UserContext } from '../../contexts/LanguageContext';

const ButtonComponent = () => {
    const value = React.useContext(UserContext);
    console.log(value);
    const text = value === 'english' ? 'Submit' : 'प्रविस्ट';
    return (
        <button className="ui button" type="submit">{text}</button>
    )
}

export default ButtonComponent