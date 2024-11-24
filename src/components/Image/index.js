import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import classNames from 'classnames';
import style from './Image.module.scss';
function Image({ src, className, fallback = images.noImage, ...props }, ref) {
    const [_fallBack, setFallBack] = useState('');
    return (
        <img
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

export default forwardRef(Image);
