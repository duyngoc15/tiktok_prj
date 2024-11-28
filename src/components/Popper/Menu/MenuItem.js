import Button from '~/components/Button';
import classNames from 'classnames/bind';
import style from './Menu.module.scss';
import PropTypes from 'prop-types';
const cx = classNames.bind(style);
function MenuItem({ data, onClick, onChange }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}
MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
};
export default MenuItem;
