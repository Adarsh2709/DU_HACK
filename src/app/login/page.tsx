"use client";

import React from 'react';
import Link from 'next/link';
import AuthLayout from '@/components/ui/AuthLayout';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
// Icons (using lucide-react or similar if available, else emojis/svgs for now to keep it dependency-free? 
// The user said "minimal things". I'll use simple SVGs or just placeholders in the Input component.
// Input component accepts ReactNode. I'll pass simple SVGs.)

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
);

const LockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
);

const GoogleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M16 12l-4-4-4 4"></path></svg> // Placeholder for Google
);

export default function LoginPage() {
    const [formData, setFormData] = React.useState({ username: '', password: '' });
    const [error, setError] = React.useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.username || !formData.password) {
            setError('Please fill in both username and password to sign in.');
            return;
        }
        setError('');
        // Handle login logic here, for now just log
        console.log('Logging in with:', formData);
    };

    return (
        <AuthLayout
            title="Welcome Back"
            imageSrc="/illustrations/illustration-login-custom.png"
            subtext="Please enter your details."
        >
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Username or Email"
                    icon={<UserIcon />}
                    value={formData.username}
                    onChange={(e) => {
                        setFormData({ ...formData, username: e.target.value });
                        if (error) setError('');
                    }}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    icon={<LockIcon />}
                    value={formData.password}
                    onChange={(e) => {
                        setFormData({ ...formData, password: e.target.value });
                        if (error) setError('');
                    }}
                />

                {error && (
                    <div style={{
                        color: 'var(--error-color)',
                        backgroundColor: 'rgba(239, 68, 68, 0.1)',
                        padding: '10px',
                        borderRadius: '8px',
                        marginBottom: '16px',
                        fontSize: '0.9rem',
                        textAlign: 'center'
                    }}>
                        {error}
                    </div>
                )}

                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '24px' }}>
                    <Link href="/forgot-password" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                        Forgot Password?
                    </Link>
                </div>

                <Button fullWidth type="submit">Sign In</Button>

                <div style={{ margin: '24px 0', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    OR
                </div>

                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '24px' }}>
                    {/* Social Logins - Placeholders */}
                    <Button type="button" variant="outline" style={{ padding: '12px' }}><GoogleIcon /></Button>
                    <Button type="button" variant="outline" style={{ padding: '12px' }}><LockIcon /></Button>
                    <Button type="button" variant="outline" style={{ padding: '12px' }}><UserIcon /></Button>
                </div>

                <div style={{ textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    New to GoodTeam? <Link href="/signup" style={{ color: 'var(--primary-color)', fontWeight: 600 }}>Register</Link>
                </div>
            </form>
        </AuthLayout>
    );
}
