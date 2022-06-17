import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserById, putUser } from '../../redux/actions/index';
import { useNavigate, useParams } from "react-router-dom";
const UserDetailComponent = () => {
    const user = useSelector(state => state.users.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        dispatch(getUserById(id));
    }, [id])
    const [formData, setFormData] = useState({
        first: '',
        last: '',
        email: '',
        phone: '',
    });

    useEffect(() => {
        if (user) {
            setFormData({
                first: user?.name?.first,
                last: user?.name?.last,
                email: user.email,
                phone: user.phone,
            })
        }
    }, [user])

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { name: { first: formData.first, last: formData.last }, email: formData.email, phone: formData.phone };
        dispatch(putUser(user, id));
        navigate("/");
    };
    return (
        <form className="ui form" onSubmit={handleSubmit}>
            <div className="field">
                <label>First Name</label>
                <input type="text" name="first" id="first" value={formData.first} onChange={(e) => setFormData({ ...formData, first: e.target.value })} placeholder="First Name" />
            </div>
            <div className="field">
                <label>Last Name</label>
                <input type="text" name="last" id="last" value={formData.last} onChange={(e) => setFormData({ ...formData, last: e.target.value })} placeholder="Last Name" />
            </div>
            <div className="field">
                <label>Email</label>
                <input type="text" name="email" id="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Email" />
            </div>
            <div className="field">
                <label>Phone</label>
                <input type="text" name="phone" id="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="Phone" />
            </div>

            <button className="ui button" type="submit">Submit</button>
        </form>
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
    //         <div>UserDetailComponent</div>
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

export default UserDetailComponent;