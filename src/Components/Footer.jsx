import React from "react";

export default function Footer() {
    return (
        <footer>
            <a href="mailto:hello@jane.dev">hello@jane.dev</a>
            <ul className="social-list">
                <li className="social-list__item"><a href="https://codepen.io" className="social-list__link">a</a></li>
                <li className="social-list__item"><a href="http://dribbble.com" className="social-list__link">b</a></li>
                <li className="social-list__item"><a href="https://twitter.com" className="social-list__link">c</a></li>
                <li className="social-list__item"><a href="https://github.com" className="social-list__link">d</a></li>
            </ul>
        </footer>
    )
}