import styles from './genre2.module.scss';
import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import { useApi } from '../api/api';

function Horror(){
    const {horror} = useApi();
    //console.log(horror);
    return(
        <>
            <section className={styles.horror}>
                <h2>Horror Stories</h2>
                <div>
                    {horror.map(x => (
                        <Link key={x.id} to={`/genre2/${x.id}`}>
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

export default Horror;