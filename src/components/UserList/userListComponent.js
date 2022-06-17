import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, deleteUser } from '../../redux/actions/index';
import { Link } from 'react-router-dom';

const UserListComponent = () => {
    const users = useSelector(state => state.users.data.Users);
    const loading = useSelector(state => state.users.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    const handleDelete = (id) => {
        dispatch(deleteUser(id));
    };
    if (loading == true) {
        return <p>Data is loading...</p>;
    }
    const viewRenderer = users.map(user => {
        return (
            <div className="card" key={user._id}>
                <div className="content">
                    <img className="right floated mini ui image" src="https://picsum.photos/200/300" />
                    <div className="header">
                        {user.name.first} {user.name.last}
                    </div>
                    <div className="meta">
                        {user.email} {user.phone}
                    </div>
                    <div className="description">
                        {user.createdAt}
                    </div>
                </div>
                <div className="extra content">
                    <div className="ui two buttons">
                        <Link to={`/user/detail/${user._id}`} className="ui basic button green">View Details</Link>
                        <div className="ui basic red button" onClick={() => handleDelete(user._id)}>Delete</div>
                    </div>
                </div>
            </div>
        );
    });
    return (
        // this.props === { songs: state.songs }
        <div className="ui relaxed divided list">
            <div className="ui cards">
                {viewRenderer}
            </div>
        </div>
    )
}

export default UserListComponent;