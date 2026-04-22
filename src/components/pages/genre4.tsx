import styles from './genre4.module.scss';
import {HashLink} from 'react-router-hash-link';
function Genre4(){
    return(
        <>
            <section className={styles.genre4}>
                <h2>Genre 4</h2>
                <HashLink smooth to="/" className={styles.home}>home</HashLink>
            </section>
        </>
    )
};

export default Genre4;