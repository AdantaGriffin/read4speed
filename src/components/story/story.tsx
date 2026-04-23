import styles from './story.module.scss';
import {useEffect} from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useApi } from '../api/api';

function Story(){
    const toTop= () => {
        window.scrollTo(0,0);
    };
    const {feelGood, horror, love, filter, setFilter} = useApi();
    //console.log(feelGood)
    const {id} = useParams();
    //console.log(id)
    const grabId = id?.slice(0, 2);

    useEffect(() => {
        switch(grabId){
        case "HR":
        setFilter(horror.filter(x => x.id === id));
        break;

        case "FG":
            setFilter(feelGood.filter(x => x.id === id));
            break;
        
        case "LV":
            setFilter(love.filter(x => x.id === id));
            break;
    }
    }, [grabId])
    //console.log(filter)

    return(
        <>
            STORY {id}
            <section className={styles.story}>
                <section className={styles.hero}>
                    <h2>{filter[0]?.name} </h2>
                </section>

                <section className={styles.bio}>
                    <div className={styles.bioDetails}>
                        <img src={filter[0]?.cover}/>
                        {/*word count: {filter[0]?.wordct}*/}
                    </div>
                    <div className={styles.bioDescription}>
                        <p>{filter[0]?.brief}</p>
                    </div>
                </section>

                <section className={styles.start}>
                    <Link onClick={toTop} to={`/genre1/${id}/${filter[0]?.name}`}>START STORY</Link>
                </section>
            </section>
        </>
    )
};

export default Story;