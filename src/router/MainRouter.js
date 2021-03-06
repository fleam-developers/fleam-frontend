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
        <Route exact path="/" element={<MainLayout><LandingPage /></MainLayout>} />                             {/*Portfolio*/}
        <Route path="/browse" element={<MainLayout><HomePage /></MainLayout>} />                                {/*XXXXXXXXXXXXXXXXX*/}
        <Route path="/admin" element={<MainLayout><AdminPage /></MainLayout>} />                                {/*XXXXXXXXXXXXXXXXX*/}
        <Route path="/login" element={<MainLayout><LoginPage /></MainLayout>} />                                {/*XXXXXXXXXXXXXXXXX*/}
        <Route path="/register" element={<MainLayout><RegisterPage /></MainLayout>} />                          {/*XXXXXXXXXXXXXXXXX*/}
        <Route path="/reset" element={<MainLayout><PasswordResetPage /></MainLayout>} />                        {/*--------*/}
        <Route path="/search/:searchedKey" element={<MainLayout><SearchPage /></MainLayout>} />                 {/*XXXXXXXXXXXXXXXXX*/}
        <Route path="/category/:categoryName" element={<MainLayout><CategoryPage /></MainLayout>} />            {/*XXXXXXXXXXXXXXXXX*/}
        <Route path="/content/:contentName" element={<MainLayout><ContentPage /></MainLayout>} />               {/*XXXXXXXXXXXXXXXXX*/}
        <Route path="/profile" element={<MainLayout><ProfileSettingsPage /></MainLayout>} />                    {/*-?-*/}
        <Route path="/be-creator" element={<MainLayout><BeCreatorPage /></MainLayout>} />                       {/*XXXXXXXXXXXXXXXXX*/}
        <Route path="/creator/:creatorName" element={<MainLayout><CreatorPage /></MainLayout>} />               {/*istatistik eklenecek mi? Genel film datas?? fetchleniyor, burada creator'e ait filmler fetchlenecek.*/}
        <Route path="/add-content" element={<MainLayout><AddContentPage /></MainLayout>} />                     {/*foto ekleme link ??eklinde olacak, link i??in field koy ve upload field??n?? kald??r, movie upload meeselesi nas??l olacak, k??????k dizayn problemi*/}
        <Route path="/voting" element={<MainLayout><VotingPage /></MainLayout>} />                              {/*--------*/}
        <Route path="/proposal" element={<MainLayout><ProposalPage /></MainLayout>} />                          {/*--------*/}
        <Route path="*" element={<MainLayout><NotFoundPage /></MainLayout>} />                                  {/*--------*/}

        <Route path="/video/:contentName" element={<VideoPlayerPage />} />                                      {/*XXXXXXXXXXXXXXXXX*/}
      </Routes>
    </Router>
  );
}
