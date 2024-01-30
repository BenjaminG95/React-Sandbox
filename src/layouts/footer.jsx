import React from 'react';

function Footer() {
    return (
        <footer className="text-white bg-gray-800 p-4 mt-10">
            <div className="flex flex-col items-center justify-center min-h-full">
                <span>© 2024 React Sandbox - Sous licence MIT</span>
                <div className="social-links mt-2">
                    <a href="https://github.com/BenjaminG95/React-Sandbox"
                       target="_blank"
                       rel="noreferrer"
                       className="hover:text-gray-400">GitHub</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
