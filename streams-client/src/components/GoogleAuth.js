import React from 'react';

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '374070928982-7glbpt83f61vnc2hbcmk4om6reff6sdg.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }

    render() {
        return (
            <div>
                Google Auth
            </div>
        );
    }
}

export default GoogleAuth;