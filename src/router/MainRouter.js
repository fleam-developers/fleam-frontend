import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import MainLayout from "../layout/MainLayout";

import HomePage from "../page/HomePage";
import LandingPage from "../page/LandingPage";
import NotFoundPage from '../page/NotFoundPage';
import AdminPage from '../page/AdminPage';
import LoginPage from '../page/LoginPage';
import RegisterPage from '../page/RegisterPage';
import PasswordResetPage from '../page/PasswordResetPage';
import SearchPage from '../page/SearchPage';
import CategoryPage from '../page/CategoryPage';
import ContentPage from '../page/ContentPage';
import VideoPlayerPage from '../page/VideoPlayerPage';
import ProfileSettingsPage from '../page/ProfileSettingsPage';
import BeCreatorPage from '../page/BeCreatorPage';
import CreatorPage from '../page/CreatorPage';
import AddContentPage from '../page/AddContentPage';
import VotingPage from '../page/VotingPage';
import ProposalPage from '../page/ProposalPage';


export default function MainRouter() {
    return (
    <Router>
        <MainLayout>
            <Routes>
                 <Route exact path='/' element={<LandingPage/>} />          {/*-?-*/}
                <Route path='/browse' element={<HomePage/>} />              {/*-?-*/}
                <Route path='/admin' element={<AdminPage/>} /> 
                <Route path='/login' element={<LoginPage/>} />              {/*-?-*/}
                <Route path='/register' element={<RegisterPage/>} />        {/*-?-*/}
                <Route path='/reset' element={<PasswordResetPage/>} />
                <Route path='/search' element={<SearchPage/>} />
                <Route path='/category' element={<CategoryPage/>} />
                <Route path='/content' element={<ContentPage/>} />          {/*-?-*/}
                <Route path='/video' element={<VideoPlayerPage/>} />        {/**/}
                <Route path='/profile' element={<ProfileSettingsPage/>} />
                <Route path='/be-creator' element={<BeCreatorPage/>} />
                <Route path='/creator' element={<CreatorPage/>} />
                <Route path='/add-content' element={<AddContentPage/>} />
                <Route path='/voting' element={<VotingPage/>} />
                <Route path='/proposal' element={<ProposalPage/>} />

                <Route path='*' element={<NotFoundPage/>} />
            </Routes>
        </MainLayout>
    </Router>
);
}
