/* eslint-disable jsx-a11y/anchor-has-content */
import {Component} from 'react';
import './Links.css'

export default function Links() {
    return (
        <div className="links-container">
            <link rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <div className="wrapper menu-links">
                <a
                    href="https://github.com/banjackal"
                    target="_blank"
                    className="fa fa-github" rel="noreferrer"
                ></a>
                <a
                    href="https://twitter.com/nraeon"
                    target="_blank"
                    className="fa fa-twitter" rel="noreferrer"
                ></a>
                <a
                    href="https://www.reddit.com/user/banjackal"
                    target="_blank"
                    className="fa fa-reddit" rel="noreferrer"
                ></a>
                <a
                    href="https://steamcommunity.com/profiles/76561197984656045/"
                    target="_blank"
                    className="fa fa-steam" rel="noreferrer"
                ></a>
            </div>
        </div>
    )
}