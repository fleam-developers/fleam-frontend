import React from 'react';
import JumboItems from '../component/JumboItem/JumboItems';
import LandingHeader from '../component/Headers/LandingHeader';
import { Counter } from '../component/Counter';
import Dashboard from '../Dashboard/Dashboard';


export default function LandingPage() {

    const dummyData = [
        {
          "id": 1,
          "title": "Enjoy on your TV.",
          "subTitle": "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
          "image": "https://react-netflix-clone-beta.vercel.app/images/misc/home-tv.jpg",
          "alt": "Tiger King on Netflix",
        },
        {
          "id": 2,
          "title": "Download your programmes to watch on the go.",
          "subTitle": "Save your data and watch all your favourites offline.",
          "image": "https://react-netflix-clone-beta.vercel.app/images/misc/home-mobile.jpg",
          "alt": "Tiger King on Netflix",
        },
        {
          "id": 3,
          "title": "Watch everywhere.",
          "subTitle": "Stream unlimited films and TV programmes on your phone, tablet, laptop and TV without paying more.",
          "image": "https://react-netflix-clone-beta.vercel.app/images/misc/home-imac.jpg",
          "alt": "Money Heist on Netflix",
        }
      ]
        
    return (
        <div>
            <LandingHeader/>
            {/* <Counter></Counter> */}
            {/* <Dashboard></Dashboard> */}
            <JumboItems items={dummyData} />
        </div>
    )
}
