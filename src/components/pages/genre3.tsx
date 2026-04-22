import styles from './genre3.module.scss';
import {HashLink} from 'react-router-hash-link';
function Genre3(){
    return(
        <>
            <section className={styles.genre3}>
                <h2>Genre 3</h2>
                <HashLink smooth to="/" className={styles.home}>home</HashLink>
            </section>
        </>
    )
};

export default Genre3;