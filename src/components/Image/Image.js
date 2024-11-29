import { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import images from '~/assets/images';
import classNames from 'classnames';
import style from './Image.module.scss';
function Image({ src, className, fallback = images.noImage, alt, ...props }, ref) {
    const [_fallBack, setFallBack] = useState('');
    return (
        <img
            alt={alt}
            className={classNames(style.wrapperImage, className)}
            ref={ref}
            src={_fallBack || src}
            {...props}
            onError={() => {
                setFallBack(fallback);
            }}
        />
    );
}
Image.propTypes = {
    src: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
    alt: PropTypes.string,
};
export default forwardRef(Image);
