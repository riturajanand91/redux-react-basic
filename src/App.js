import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserListComponent from './components/UserList/userListComponent';
import HeaderComponent from './components/layouts/headerComponent/header';
import UserDetailComponent from './components/UserDetail/userDetailComponent';
import UserAddComponent from './components/UserAdd/userAddComponent';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <HeaderComponent></HeaderComponent>
        <Routes>
          <Route path="/*" element={<UserListComponent />} exact />
          <Route path="/user/add" element={<UserAddComponent />} />
          <Route path="/user/detail/:id" element={<UserDetailComponent />} />
          {/*<Route path="/streams/edit" element={<StreamEditComponent />} />
          <Route path="/streams/delete" element={<StreamDeleteComponent />} />
          <Route path="/streams/show" element={<StreamShowComponent />} /> */}
        </Routes>
      </BrowserRouter>
    </div >
  )
}

export default App;
