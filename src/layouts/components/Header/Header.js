import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icon';
import Image from '~/components/Image';
import Search from '../Search';
import configs from '~/configs';
const cx = classNames.bind(styles);
function Header() {
    const MENU_ITEMS = [
        {
            icon: <FontAwesomeIcon icon={faEarthAsia} />,
            title: 'English',
            children: {
                title: 'Language',
                data: [
                    {
                        type: 'language',
                        code: 'en',
                        title: 'English',
                        children: {
                            title: 'Language',
                            data: [
                                {
                                    code: 'en',
                                    title: 'Arabic',
                                },
                                {
                                    code: 'vn',
                                    title: 'Thai',
                                },
                            ],
                        },
                    },
                    {
                        type: 'language',
                        code: 'vn',
                        title: 'Tiếng Việt',
                    },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'Feedback and Help',
            to: '/feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: 'Keyboard shortcuts',
        },
    ];
    const USER_MENU = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@duies15',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];
    const currentUser = true;
    const handleOnChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language': {
                console.log(menuItem);
                break;
            }
            default: {
                console.log('ngoai le type');
                // defaul handle
            }
        }
    };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={configs.Routes.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="tiktok" />
                    </Link>
                </div>
                <Search />
                <div className={cx('action')}>
                    {currentUser ? (
                        // khi user login vao
                        <>
                            <Tippy content="Upload video" placement="bottom" interactive>
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Message" placement="bottom" interactive>
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" placement="bottom" interactive>
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        // khi user chua login
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Login</Button>
                            {/* <Button primary rightIcon={<FontAwesomeIcon icon={faSignIn} />}>
                            Log in
                        </Button> */}
                            {/* <Button rounded className={cx('custom-login')}>
                            Log in
                        </Button> */}
                        </>
                    )}
                    <Menu items={currentUser ? USER_MENU : MENU_ITEMS} onChange={handleOnChange}>
                        {currentUser ? (
                            <Image
                                src="https://i.pinimg.com/236x/cd/cb/0c/cdcb0csb30bc700c53f12eff840156b29.jpg"
                                className={cx('user-avatar')}
                                alt="Le Ngoc Duy"
                                fallback="https://www.gravatar.com/avatar/7897b7498dca4c9a6794d48caf32b1f0.jpg?s=80&d=mp&r=g"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
