import React from 'react';
import { Route} from 'react-router-dom'
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from 'zmp-ui'; 
import { RecoilRoot } from 'recoil';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from '../pages/index';
import FormUser from '../pages/Users/formUser';
import FormCreateGroup from '../pages/Groups/formCreateGroup';
import FormCreateUser from '../pages/Users/formCreateUser'
import FormGroup from '../pages/Groups/formGroup'
import UpdateGroup from '../pages/Groups/formUpdateGroup';
import UpdateUser from '../pages/Users/formUpdateUser';



const MyApp = () => {
  return (
    <RecoilRoot>
      <App >
      <SnackbarProvider>
        <ZMPRouter>
          <AnimationRoutes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/formUser" element={<FormUser></FormUser>}></Route>
            <Route path="/formCreateGroup" element={<FormCreateGroup></FormCreateGroup>}></Route>
            <Route path="/formCreateUser" element={<FormCreateUser></FormCreateUser>}></Route>
            <Route path="/formGroup" element={<FormGroup></FormGroup>}></Route>
            <Route path="groups/update/:id" element={<UpdateGroup></UpdateGroup>}></Route>
            <Route path="users/update/:id" element={<UpdateUser></UpdateUser>}></Route>
            
          </AnimationRoutes>
        </ZMPRouter>
      </SnackbarProvider>
      </App>
    </RecoilRoot>
  );
}
export default MyApp;