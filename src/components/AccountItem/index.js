import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/81b005fdf59433f014ca92d3863ec5f5.jpeg?lk3s=a5d48078&nonce=2699&refresh_token=879baa8429d434394dc703740ad4bf96&x-expires=1732021200&x-signature=lv0PK0GKPu6NzS1ywlpmmeC5HPk%3D&shp=a5d48078&shcp=81f88b70"
                alt="avt"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    Duy Ngoc
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>duies15</span>
            </div>
        </div>
    );
}

export default AccountItem;
