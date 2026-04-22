import styles from './feelGood.module.scss';
import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import { useApi } from '../api/api';
function FeelGood(){
    const {feelGood} = useApi();
    //console.log(feelGood);
    return(
        <>
            <section className={styles.feelGood}>
                <h2>Feel Good Stories</h2>
                <div className={styles.feelGoodLinks}>
                    {feelGood.map(x => (
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

export default FeelGood;