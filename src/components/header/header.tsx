import styles from './header.module.scss';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Header(){
    return (
        <>
            <header id="header" className={styles.header}>
                <section></section>
                <nav className={styles.headerNavigation}>
                    <HashLink className={styles.hashlink} smooth to="/#genre1">
                        Feel Good
                    </HashLink>
                    <HashLink className={styles.hashlink} smooth to="/#genre2">
                        Horror
                    </HashLink>
                    <HashLink className={styles.hashlink} smooth to="/#genre3">
                        Love
                    </HashLink>
                    <HashLink className={styles.hashlink} smooth to="/#genre4">
                        Adventure
                    </HashLink>
                </nav>
            </header>
        </>
    )
};

export default Header