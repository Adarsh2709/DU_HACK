import React from 'react';
import Image from 'next/image';

interface AuthLayoutProps {
    children: React.ReactNode;
    title: string;
    imageSrc: string; // URL for the illustration
    subtext?: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, imageSrc, subtext }) => {
    const containerStyle: React.CSSProperties = {
        display: 'flex',
        minHeight: '100vh',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
    };

    const cardStyle: React.CSSProperties = {
        display: 'flex',
        backgroundColor: 'var(--white)',
        borderRadius: 'var(--radius)',
        // Shadow and Border handled by CSS class .auth-card
        overflow: 'hidden',
        width: '100%',
        maxWidth: '1000px',
        minHeight: '600px',
        flexDirection: 'row', // Side-by-side on desktop
        flexWrap: 'wrap', // Wrap on mobile
    };

    const illustrationSectionStyle: React.CSSProperties = {
        flex: '1 1 400px',
        backgroundColor: 'var(--white)', // Changed to white to blend with the new images
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px',
        minHeight: '300px',
    };

    const formSectionStyle: React.CSSProperties = {
        flex: '1 1 400px',
        padding: '60px 40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'var(--white)',
    };

    const titleStyle: React.CSSProperties = {
        fontSize: '2rem',
        fontWeight: 700,
        marginBottom: '8px',
        color: 'var(--text-main)',
    };

    const subtextStyle: React.CSSProperties = {
        color: 'var(--text-muted)',
        marginBottom: '32px',
    };

    return (
        <div style={containerStyle} className="animate-fade-in">
            <div style={cardStyle} className="auth-card">
                {/* Illustration Side */}
                <div style={illustrationSectionStyle} className="auth-illustration">
                    <div style={{
                        width: '100%',
                        maxWidth: '350px',
                        height: '350px',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Image
                            src={imageSrc}
                            alt={title}
                            fill
                            style={{ objectFit: 'contain' }}
                            priority
                        />
                    </div>
                </div>

                {/* Form Side */}
                <div style={formSectionStyle}>
                    <div style={{ maxWidth: '400px', width: '100%', margin: '0 auto' }}>
                        <h1 style={titleStyle}>{title}</h1>
                        {subtext && <p style={subtextStyle}>{subtext}</p>}
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
