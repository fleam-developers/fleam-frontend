import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import VideoLayout from "../layout/VideoLayout";

import HomePage from "../page/HomePage";
import LandingPage from "../page/LandingPage";
import NotFoundPage from "../page/NotFoundPage";
import AdminPage from "../page/AdminPage";
import LoginPage from "../page/LoginPage";
import RegisterPage from "../page/RegisterPage";
import PasswordResetPage from "../page/PasswordResetPage";
import SearchPage from "../page/SearchPage";
import CategoryPage from "../page/CategoryPage";
import ContentPage from "../page/ContentPage";
import VideoPlayerPage from "../page/VideoPlayerPage";
import ProfileSettingsPage from "../page/ProfileSettingsPage";
import BeCreatorPage from "../page/BeCreatorPage";
import CreatorPage from "../page/CreatorPage";
import AddContentPage from "../page/AddContentPage";
import VotingPage from "../page/VotingPage";
import ProposalPage from "../page/ProposalPage";


export default function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainLayout><LandingPage /></MainLayout>} />                             {/*-?-*/}
        <Route path="/browse" element={<MainLayout><HomePage /></MainLayout>} />                                {/*navbar tamamlandı, bitti gibi*/}
        <Route path="/admin" element={<MainLayout><AdminPage /></MainLayout>} />                                {/*-?-*/}
        <Route path="/login" element={<MainLayout><LoginPage /></MainLayout>} />                                {/*backendden token alıcaz, bu tokeni config yapıp kullanıcaz, reducerlara eklicez, authorization*/}
        <Route path="/register" element={<MainLayout><RegisterPage /></MainLayout>} />                          {/*bitti gibi*/}
        <Route path="/reset" element={<MainLayout><PasswordResetPage /></MainLayout>} />                        {/*--------*/}
        <Route path="/search/:searchedKey" element={<MainLayout><SearchPage /></MainLayout>} />                 {/*bitti gibi, backend tarafı ile konuşulup teyit edildi*/}
        <Route path="/category/:categoryName" element={<MainLayout><CategoryPage /></MainLayout>} />            {/*category yönlendirmeleri yapıldı, doğru şekilde aktarıldı, bitti gibi*/}
        <Route path="/content/:contentName" element={<MainLayout><ContentPage /></MainLayout>} />               {/*comment ekleme konusunda herşey hazır, backendden gelene göre bağlanacak, update yok şuan*/}
        <Route path="/profile" element={<MainLayout><ProfileSettingsPage /></MainLayout>} />                    {/*-?-*/}
        <Route path="/be-creator" element={<MainLayout><BeCreatorPage /></MainLayout>} />                       {/*-?-*/}
        <Route path="/creator/:creatorName" element={<MainLayout><CreatorPage /></MainLayout>} />               {/*-?-*/}
        <Route path="/add-content" element={<MainLayout><AddContentPage /></MainLayout>} />                     {/*küçük dizayn problemi, başka bir problem varsa backend tarafından*/}
        <Route path="/voting" element={<MainLayout><VotingPage /></MainLayout>} />                              {/*--------*/}
        <Route path="/proposal" element={<MainLayout><ProposalPage /></MainLayout>} />                          {/*--------*/}
        <Route path="*" element={<MainLayout><NotFoundPage /></MainLayout>} />                                  {/*--------*/}

        <Route path="/video/:contentName" element={<VideoPlayerPage />} />                                      {/*-?-*/}
      </Routes>
    </Router>
  );
}
