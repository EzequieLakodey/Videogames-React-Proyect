// Auth0
import { useAuth0 } from '@auth0/auth0-react';

const User = () => {
    const { user, isAuthenticated } = useAuth0();
    console.log('🚀 ~ file: User.jsx:5 ~ User ~ user:', JSON.stringify(user));
    return isAuthenticated ? (
        <div>
            <img
                src={user.picture}
                alt='profile picture'
            />

            <h5> {user.given_name}</h5>
        </div>
    ) : null;
};

export default User;
