import classNames from 'classnames/bind';

import styles from './DefaultLayout.module.scss';
import Header from './Header';
import Footer from './Footer';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const refModel = useRef();

    const openModal = () => {
        refModel.current.classList.add('open');
    };

    const closeModal = (e) => {
        console.log(e.target.classList[0]);
        if (e.target.classList[0] === 'my_modal' || e.target.classList[0] === 'close')
            refModel.current.classList.remove('open');
    };

    return (
        <div className={cx('wrapper')}>
            <Header onClick={openModal} />
            <div className={cx('container-fluid', 'content')}>{children}</div>
            <Footer />

            <div ref={refModel} onClick={(e) => closeModal(e)} className={cx('my_modal')}>
                <div className={cx('book')}></div>
            </div>
        </div>
    );
}

export default DefaultLayout;
