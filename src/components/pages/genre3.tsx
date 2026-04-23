import styles from './genre3.module.scss';
import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import { useApi } from '../api/api';

function Love(){
    const {love} = useApi();
    return(
        <>
            <section className={styles.love}>
                <h2>Love Stories</h2>
                <div>
                    {love.map(x => (
                        <Link key={x.id} to={`/genre1/${x.id}`}>
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

export default Love;