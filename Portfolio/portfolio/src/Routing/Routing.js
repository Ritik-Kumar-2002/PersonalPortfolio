import Home from '../components/Home/Home';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutUs from '../components/AboutsUs/Aboutus';
import Project from '../components/Projects/Projects';
import Resume from '../components/Resume/Resume';
import Achievements from '../components/Achievements/Achievements';
import ContactUs from '../components/Contacts/Contact';
import CodingProfile from '../components/CodingProfile/codingprofile';

const Routing = () =>{
    return(
        <>
            <Routes >
                <Route path= "/" element={<Home />} />
                <Route path= "/aboutus" element={<AboutUs />} />
                <Route path= "/project" element={<Project />} />
                <Route path= "/resume" element={<Resume />} />
                <Route path= "/contactus" element={<ContactUs />} />
                <Route path= "/achievements" element={<Achievements />} />
                <Route path= "/codingprofile" element={<CodingProfile />} />
            </Routes>
        </>
    )
}
export default Routing;