"use client";

import React from 'react';
import Link from 'next/link';
import AuthLayout from '@/components/ui/AuthLayout';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
);

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

const LockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
);

export default function SignupPage() {
    const [pin, setPin] = React.useState('');
    const [pinEntries, setPinEntries] = React.useState<string[]>([]);
    const MAX_ENTRIES = 10;

    const handlePinSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (pin.length < 4) return;

        if (pinEntries.length < MAX_ENTRIES) {
            setPinEntries([...pinEntries, pin]);
            setPin('');
        }
    };

    return (
        <AuthLayout
            title="Get Started"
            imageSrc="/illustrations/illustration-signup-final.jpg"
            subtext=""
        >
            <form onSubmit={(e) => e.preventDefault()}>
                <Input
                    type="email"
                    placeholder="Email"
                    icon={<MailIcon />}
                />
                <Input
                    type="text"
                    placeholder="Full Name"
                    icon={<UserIcon />}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    icon={<LockIcon />}
                />

                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
                    I have read and agree to the <a href="#" style={{ color: 'var(--primary-color)' }}>Terms & Conditions</a>, <a href="#" style={{ color: 'var(--primary-color)' }}>Privacy Policy</a>
                </p>

                {/* Separator Line */}
                <div style={{
                    height: '2px',
                    backgroundColor: 'var(--text-main)',
                    margin: '32px 0 24px 0',
                    width: '100%'
                }} />

                {/* Biometric/Pin Section */}
                <div style={{ marginBottom: '24px' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '16px' }}>Biometric Authentication</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
                        Enter Pin (10 times) - {pinEntries.length}/{MAX_ENTRIES}
                    </p>

                    {pinEntries.length < MAX_ENTRIES ? (
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                            <div style={{ flex: 1 }}>
                                <Input
                                    type="password"
                                    placeholder={`Enter Pin (Attempt ${pinEntries.length + 1})`}
                                    value={pin}
                                    onChange={(e) => setPin(e.target.value)}
                                    style={{ marginBottom: 0 }}
                                />
                            </div>
                            <Button
                                type="button"
                                onClick={(e) => handlePinSubmit(e)}
                                disabled={!pin || pin.length < 4}
                                style={{ height: '52px', marginTop: '22px' }}
                            >
                                Next
                            </Button>
                        </div>
                    ) : (
                        <div style={{
                            padding: '12px',
                            backgroundColor: 'rgba(124, 93, 250, 0.1)',
                            color: 'var(--primary-color)',
                            borderRadius: 'var(--radius)',
                            fontWeight: 600,
                            textAlign: 'center',
                            border: 'var(--border-thick)'
                        }}>
                            ✓ Pin collection complete
                        </div>
                    )}
                </div>

                <Button fullWidth type="submit" disabled={pinEntries.length < MAX_ENTRIES}>Sign Up</Button>

                <div style={{ textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '24px' }}>
                    An existing user? <Link href="/login" style={{ color: 'var(--primary-color)', fontWeight: 600 }}>Sign in</Link>
                </div>
            </form>
        </AuthLayout>
    );
}
