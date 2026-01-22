"use client";

import React from 'react';
import Link from 'next/link';
import AuthLayout from '@/components/ui/AuthLayout';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

export default function ForgotPasswordPage() {
    return (
        <AuthLayout
            title="Forgot Password?"
            imageSrc="/illustrations/illustration-forgot-final-v2.jpg"
            subtext="Don't worry! It happens. Please enter the address associated with your account."
        >
            <form onSubmit={(e) => e.preventDefault()}>
                <Input
                    type="email"
                    placeholder="Email"
                    icon={<MailIcon />}
                />

                <Button fullWidth type="submit">Submit</Button>

                <div style={{ textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '24px' }}>
                    <Link href="/login" style={{ color: 'var(--primary-color)', fontWeight: 600 }}>Back to Login</Link>
                </div>
            </form>
        </AuthLayout>
    );
}
