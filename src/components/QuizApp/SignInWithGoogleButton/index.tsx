import React from "react";

interface ISignInWithGoogle {
    buttonLabel?: string | "Sign in with Google";
}

const SignInWithGoogleButton = (props: ISignInWithGoogle) => {
    const { buttonLabel } = props;
    return (
        <button className="google-sign-in-btn" onClick={()=>{}}>
            {buttonLabel}
        </button>
    );
};

export default SignInWithGoogleButton;
