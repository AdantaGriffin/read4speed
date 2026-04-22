import styles from './feelGood.module.scss';
import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import { useApi } from '../api/api';
import { Outlet } from "react-router-dom";
function FeelGood(){
    const {feelGood} = useApi();
    //console.log(feelGood);
    return(
        <>
            <section className={styles.feelGood}>
                <h2>Feel Good Stories</h2>
                <div>
                    {feelGood.map(x => (
                        <Link key={x.id} to={`/genre1/${x.id}`}>
                            <article id={styles.mara} className={styles.story}>
                                    
                            </article>
                        </Link>
                    ))}
                </div>
                <HashLink smooth to="/" className={styles.home}>home</HashLink>
            </section>
            <Outlet/>
        </>
    )
};

export default FeelGood;