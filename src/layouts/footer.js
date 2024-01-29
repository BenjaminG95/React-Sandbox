import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <span className={'footer-text'}>© 2024 React Sandbox - Sous licence MIT</span>
                <div className={'social-links'}>
                    <a href="https://github.com/BenjaminG95/React-Sandbox"
                       target="_blank"
                       rel="noreferrer"
                    className={''}>GitHub</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
