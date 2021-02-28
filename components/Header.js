import React from 'react';
import headerStyles from '../styles/Header.module.css';

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>WebDev</span>
                News
            </h1>
            <p className={headerStyles.description}>Keep up to date with the latest webdev news</p>
        </div>
    )
}

export default Header;


//<style jsx>
//{`
//    .title {
//        color: red;
//    }
//`}
//</style>
// We can also add the styles like this in react and next but
// it gets messy so we dont use it.