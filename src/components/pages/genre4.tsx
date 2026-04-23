import styles from './genre4.module.scss';
import {HashLink} from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { useApi } from '../api/api';

function Genre4(){
    const {adventure} = useApi();
    return(
        <>
            <section className={styles.adventure}>
                <h2>Genre 4</h2>
                <div>
                    {adventure.map(x => (
                        <Link key={x.id} to={`/genre4/${x.id}`}>
                            <article className={styles.story}>
                                <img src={x.cover}/>        
                            </article>
                        </Link>
                    ))}
                </div>
                <HashLink smooth to="/" className={styles.home}>home</HashLink>
            </section>
        </>
    )
};

export default Genre4;