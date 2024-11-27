import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { SearchIcon } from '~/components/Icon';
import { useEffect, useRef, useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { useDebounce } from '~/hooks';
//request api from axios instance
// import * as request from '~/utils/request';
import * as searchService from '~/apiService/searchService';
const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [showLoading, setShowLoading] = useState(false);
    const debounced = useDebounce(searchValue, 500);
    const inputRef = useRef();
    useEffect(() => {
        if (!debounced) {
            setSearchResult([]);
            return;
        }
        const fetchApi = async () => {
            setShowLoading(true);
            const res = await searchService.search(debounced);
            setSearchResult(res);
            setShowLoading(false);
        };
        fetchApi();
    }, [debounced]);
    const handleClickOutside = () => {
        setShowResult(false);
    };
    const handleChange = (e) => {
        const _searchValue = e.target.value;
        if (!_searchValue.startsWith(' ')) {
            setSearchValue(_searchValue);
        }
    };
    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Account</h4>
                        {searchResult.map((data) => {
                            return <AccountItem key={data.id} data={data} />;
                        })}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleClickOutside}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search account and videos"
                    spellCheck={false}
                    onChange={handleChange}
                    onFocus={() => {
                        setShowResult(true);
                    }}
                />
                {!!searchValue && !showLoading && (
                    <button
                        className={cx('clear')}
                        onClick={() => {
                            setSearchValue('');
                            inputRef.current.focus();
                            setSearchResult([]);
                        }}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {showLoading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
