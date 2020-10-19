import React from 'react';
import logo from "../static/images/logo.svg";
import '../styles/Title.css';

export default function Title() {
    return (
        <div className="title-box">
            <img className="logo" src={logo} alt="shareify logo" />
            <p className="app-title heading"> This is </p>
            <p className="app-title app-name">Shareify</p>
            <div className="underline"></div>
            <p className="app-title sub-heading">Share Your files Easily</p>
        </div>
    )
}
