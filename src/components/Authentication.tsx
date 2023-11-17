"use client"

import useAuthStore from '@/store/authStore';
import Link from 'next/link';

const Authentication = () => {
    const authStore = useAuthStore();

    const handleLogout = () => {
        authStore.logout();
    };

    return (
        <div>
            {authStore.isAuthenticated ? (
                <p>
                    Welcome, {authStore.user.username}!
                    <button onClick={handleLogout}>Logout</button>
                </p>
            ) : (
                <Link href="../login">Login</Link>
            )}
        </div>
    )
}

export default Authentication