import React from 'react';
import './Icon.css';

type SizeOption = 'small' | 'medium' | 'large';

const sizeMap: Record<SizeOption, number> = {
    small: 64,
    medium: 128,
    large: 256,
};

export interface IconProps {
    src: string;
    label?: string;
    showLabel?: boolean;
    options: {
        sizeOption?: SizeOption;
        width?: number;
        height?: number;
        position?: 'top' | 'bottom' | 'left' | 'right';
    }
}

export const Icon: React.FC<IconProps> = ({ src, label, showLabel = false, options: { sizeOption = undefined, width = 64, height = 64, position = 'bottom' } }) => {
    const renderLabel = () => {
        if (!showLabel || !label) return null;
        return <span className='icon-label'>{label}</span>;
    };

    if (sizeOption) {
        width = sizeMap[sizeOption];
        height = sizeMap[sizeOption];
    }

    return (
        <div style={{ display: 'flex', flexDirection: position === 'top' || position === 'bottom' ? 'column' : 'row', alignItems: 'center' }}>
            {(position === 'top' || position === 'left') && renderLabel()}
            <img src={src} width={width} height={height} alt={label} />
            {(position === 'bottom' || position === 'right') && renderLabel()}
        </div>
    );
};
