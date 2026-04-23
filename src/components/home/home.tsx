import styles from './home.module.scss';
import { Link } from 'react-router-dom';
import { useApi } from '../api/api';

function Home(){
    const {feelGood, horror, love} = useApi();
    const toTop= () => {
        window.scrollTo(0,0);
    };
    //console.log(feelGood);
    return(
        <>
            <section className={styles.home}>

                <section id="genre1" className={styles.genreSection}>
                    <h2>Feel Good Stories</h2>
                    <div>
                        {feelGood.map(x => (
                            <Link className={styles.articleLink} onClick={toTop} key={x.id} to={`/genre1/${x.id}`}>
                                <article className={styles.story}>
                                    <img src={x.cover}/>
                                </article>
                            </Link>
                        ))}
                    </div>
                    <Link onClick={toTop} className={styles.viewall} to="/genre1">view all</Link>
                </section>

                <section id="genre2" className={styles.genreSection}>
                    <h2>Horror</h2>
                    <div>
                        {horror.map(x => (
                            <Link onClick={toTop} key={x.id} to={`/genre2/${x.id}`}>
                                <article className={styles.story}>
                                    <img src={x.cover}/>
                                </article>
                            </Link>
                        ))}
                    </div>
                    <Link onClick={toTop} className={styles.viewall} to="/genre2">view all</Link>
                </section>
                <section id="genre3" className={styles.genreSection}>
                    <h2>Love</h2><div>
                        {love.map(x => (
                            <Link onClick={toTop} key={x.id} to={`/genre3/${x.id}`}>
                                <article className={styles.story}>
                                    <img src={x.cover}/>
                                </article>
                            </Link>
                        ))}
                    </div>
                    <Link onClick={toTop} className={styles.viewall} to="/genre3">view all</Link>
                </section>
                <section id="genre4" className={styles.genreSection}>
                    <h2>genre 4</h2>
                    <div>container</div>
                    <Link onClick={toTop} className={styles.viewall} to="/genre4">view all</Link>
                </section>
            </section>
        </>
    )
};

export default Home;