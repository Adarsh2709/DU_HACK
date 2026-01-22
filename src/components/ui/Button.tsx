import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'outline';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  fullWidth = false,
  className,
  style,
  ...props
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const baseStyle: React.CSSProperties = {
    padding: '14px 24px',
    borderRadius: 'var(--radius)',
    fontSize: '1rem',
    fontWeight: 600,
    transition: 'all 0.1s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    width: fullWidth ? '100%' : 'auto',
    cursor: props.disabled ? 'not-allowed' : 'pointer',
    opacity: props.disabled ? 0.7 : 1,
    transform: isHovered && !props.disabled ? 'translate(-2px, -2px)' : 'none',
    border: 'var(--border-thick)', /* Always border */
    ...style,
  };

  const variants = {
    primary: {
      backgroundColor: 'var(--primary-color)',
      color: 'var(--white)',
      boxShadow: isHovered && !props.disabled
        ? '6px 6px 0px 0px #000000'
        : '4px 4px 0px 0px #000000',
    },
    ghost: {
      backgroundColor: isHovered && !props.disabled ? 'var(--bg-color)' : 'transparent',
      color: 'var(--text-main)',
      boxShadow: 'none',
      border: '3px solid transparent',
    },
    outline: {
      backgroundColor: isHovered && !props.disabled ? 'var(--primary-color)' : 'var(--white)',
      color: isHovered && !props.disabled ? 'var(--white)' : 'var(--text-main)',
      boxShadow: isHovered && !props.disabled
        ? '6px 6px 0px 0px #000000'
        : '4px 4px 0px 0px #000000',
    }
  };

  const combinedStyles = { ...baseStyle, ...variants[variant] };

  // Helper to merge variant border if ghost needs different handling
  if (variant === 'ghost') {
    combinedStyles.border = '3px solid transparent';
    if (isHovered && !props.disabled) {
      combinedStyles.border = '3px solid var(--text-main)'; // Add border on hover for ghost? Or just bg? 
      // Let's keep ghost minimal but consistent.
      combinedStyles.backgroundColor = 'rgba(124, 93, 250, 0.1)';
      combinedStyles.border = '3px solid transparent';
    }
  }

  return (
    <button
      style={combinedStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
