import styles from './genre2.module.scss';
import {HashLink} from 'react-router-hash-link';
function Genre2(){
    return(
        <>
            <section className={styles.genre2}>
                <h2>Genre 2</h2>
                <HashLink smooth to="/" className={styles.home}>home</HashLink>
            </section>
        </>
    )
};

export default Genre2;