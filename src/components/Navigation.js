import React, { Fragment, useEffect, useRef, useState } from 'react';
import Sticky from './Sticky';

export default (props) => {
    const [isSticky, setSticky] = useState(false);
    const ref = useRef(null);
    const handleScroll = () => {
        if (ref.current) {
            setSticky(ref.current.getBoundingClientRect().top <= 0);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', () => handleScroll);
        };
    }, []);

    return (
        <Fragment>
            <div className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
                <Sticky {...props} />
            </div>
        </Fragment>
    );
};