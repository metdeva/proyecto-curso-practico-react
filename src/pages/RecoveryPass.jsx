import React from 'react';
import '@styles/RecoveryPass.scss';

import emailLogo from '@icons/email.svg';
import logoYard from '@logos/logo_yard_sale.svg';


const RecoveryPass = () => {
    return (
        <div className="email">
            <div className="email-container">
                <img src={logoYard} alt="logo" className="logo" />
                <h1 className="title">Email has been sent!</h1>
                <p className="subtitle">
                    Please check your inbox for instructions on how to reset the
                    password
                </p>
                <div className="circle">
                    <img src={emailLogo} alt="logo-email" className="logo-email" />
                </div>
                <input
                    type="submit"
                    value="Login"
                    className="primary-button login-button"
                />
                <p className="resend">
                    <span>Didn´t receive the email?</span>
                    <a href="/">Resend</a>
                </p>
            </div>
        </div>
    );
}

export default RecoveryPass;