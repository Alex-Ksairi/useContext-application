import React from 'react'

export default function HomePage() {
    // useEffect
    React.useEffect(() => {
        let token = localStorage.getItem('token');

        if (!token) {
            window.location.replace('/sign');
        }
    }, []);

    // logout function
    let Logout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    };

    return (
        <div className='home'>
            <h2>Welcome to home page</h2>
            <button onClick={ Logout }>Logout</button>
        </div>
    )
}
