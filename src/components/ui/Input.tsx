import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode;
    label?: string;
    error?: string;
}

const Input: React.FC<InputProps> = ({ icon, label, error, style, ...props }) => {
    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        width: '100%',
        marginBottom: '16px',
    };

    const wrapperStyle: React.CSSProperties = {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
    };

    const inputStyle: React.CSSProperties = {
        width: '100%',
        padding: '14px 16px',
        paddingLeft: icon ? '44px' : '16px',
        borderRadius: 'var(--radius)',
        border: 'var(--border-thick)', /* Thick border */
        backgroundColor: 'var(--input-bg)',
        fontSize: '0.95rem',
        color: 'var(--text-main)',
        outline: 'none',
        transition: 'all 0.2s',
        boxShadow: 'none',
    };

    const iconStyle: React.CSSProperties = {
        position: 'absolute',
        left: '16px',
        color: 'var(--text-muted)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
    };

    return (
        <div style={containerStyle}>
            {label && <label style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-main)' }}>{label}</label>}
            <div style={wrapperStyle}>
                {icon && <span style={iconStyle}>{icon}</span>}
                <input
                    style={{ ...inputStyle, ...style }}
                    onFocus={(e) => {
                        e.currentTarget.style.boxShadow = '4px 4px 0px 0px #000000';
                        e.currentTarget.style.transform = 'translate(-2px, -2px)';
                    }}
                    onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border-color)'; /* Reset to default if needed, but border is black mainly */
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.transform = 'none';
                    }}
                    {...props}
                />
            </div>
            {error && <span style={{ color: 'var(--error-color)', fontSize: '0.8rem' }}>{error}</span>}
        </div>
    );
};

export default Input;
