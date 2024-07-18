import React from 'react';
import icons from '../../assets/images/icons.svg';

type IconPropsType = {
    id: string,
    width?: string,
    height?: string
}

const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || '24'} height={props.height || '24'}
             viewBox={props.width && props.height ? `0 0 ${props.width} ${props.height}` : '0 0 24 24'} fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${icons}#${props.id}`}></use>
        </svg>
    );
};

export default Icon;