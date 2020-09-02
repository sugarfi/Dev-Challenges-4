import React from 'react';
import ReactDOM from 'react';
import styles from './buttons.module.scss';

export default function Button(props) {
    const variants = {
        'outline': styles['btn-outline'],
        'text': styles['btn-text'],
        'fill': styles['btn-fill']
    }

    const colors = {
        'default': styles['btn-default'],
        'primary': styles['btn-primary'],
        'secondary': styles['btn-secondary'],
        'danger': styles['btn-danger']
    }

    const sizes = {
        'sm': styles['btn-sm'],
        'md': styles['btn-md'],
        'lg': styles['btn-lg'],
    }

    return (
        <button
            className={
                `${variants[props.variant]}` +
                ` ${colors[props.color]}` +
                ` ${sizes[props.size]}` +
                ` ${props.disabled ? styles['btn-disabled'] : ''}` +
                ` ${props.disableShadow ? styles['btn-disable-shadow'] : ''}`
            }
        >
            <i class={`material-icons ${styles.material}`}>{props.startIcon}</i>
            {props.children}
            <i class={`material-icons ${styles.material}`}>{props.endIcon}</i>
        </button>
    );
}
Button.defaultProps = {
    'variant': 'fill',
    'disabled': false,
    'disableShadow': false,
    'color': 'default',
    'size': 'sm',
    'startIcon:': '',
    'endIcon': ''
}