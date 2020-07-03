import './sign-in-and-sign-up.styles.scss';
import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';

const SignInAndSignUpPage = () => {
    return (
        <div className='sign-in-and-sign-up'>
            SIGN IN
            <div>
                <SignIn />
            </div>
        </div>
    );
};

export default SignInAndSignUpPage;
