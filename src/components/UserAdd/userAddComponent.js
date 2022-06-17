import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postUser } from '../../redux/actions/index';
import { useNavigate } from "react-router-dom";
import ButtonComponent from '../inputs/buttonComponent';
import { UserContext } from '../../contexts/LanguageContext';
import LabelComponent from '../inputs/labelComponent';

const UserAddComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ first: 'John', last: 'Sturgis', email: 'm@m.com', phone: '+911234567895' });

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { name: { first: formData.first, last: formData.last }, email: formData.email, phone: formData.phone };
        dispatch(postUser(user));
        navigate("/");
    };
    const [language, setLanguage] = useState('');
    console.log(language);
    return (
        <div>
            <button className="ui button" onClick={() => { setLanguage('english') }}>
                English
            </button>
            <button className="ui button" tabIndex="0" onClick={() => { setLanguage('hindi') }}>
                Hindi
            </button>

            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <UserContext.Provider value={language}>
                        <LabelComponent></LabelComponent>
                    </UserContext.Provider >
                    {/* <label>First Name</label> */}
                    <input type="text" name="first" id="first" value={formData.first} onChange={(e) => setFormData({ ...formData, first: e.target.value })} placeholder="First Name" />
                </div>
                <div className="field">
                    <label>Last Name</label>
                    <input type="text" name="last" id="last" value={formData.last} onChange={(e) => setFormData({ ...formData, last: e.target.value })} placeholder="Last Name" />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="text" name="phone" id="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Email" />
                </div>
                <div className="field">
                    <label>Phone</label>
                    <input type="text" name="phone" id="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="Phone" />
                </div>
                <UserContext.Provider value={language}>
                    <ButtonComponent></ButtonComponent>
                </UserContext.Provider >
                {/* <button className="ui button" type="submit">Submit</button> */}
            </form>
        </div>

    )
    // const users = useSelector(state => state.users);
    // const loading = useSelector(state => state.users.loading);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(fetchUsers())
    // }, [])
    // console.log(users);

    // if (loading == true) {
    //     return <p>Data is loading...</p>;
    // }
    // const viewRenderer = users.data.map(user => {
    //     return (
    //         <div>UserAddComponent</div>
    //     );
    // });
    // return (
    //     // this.props === { songs: state.songs }
    //     <div classNameName="ui relaxed divided list">
    //         <div classNameName="ui cards">
    //             {viewRenderer}
    //         </div>
    //     </div>
    // )
}

export default UserAddComponent;