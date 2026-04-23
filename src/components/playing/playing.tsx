import styles from './playing.module.scss';
import {useState, useEffect} from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useApi } from '../api/api';

function Playing(){
    const toTop= () => {
        window.scrollTo(0,0);
    };
    const navigate = useNavigate();
    const {feelGood, horror, filter, setFilter, level} = useApi();
    const [visibleText, setVisibleText] = useState("");
    const [, setIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const words = filter[0]?.story?.join(" ").split(" ") || [];

    //console.log(feelGood);
    const {id} = useParams();

    const grabId = id?.slice(0, 2);
    
    useEffect(() => {
        switch(grabId){
        case "HR":
        setFilter(horror?.filter(x => x.id === id));
        break;

        case "FG":
            setFilter(feelGood?.filter(x => x.id === id));
            break;
    }
    }, [id, horror, feelGood])

    useEffect(() => {
    if (!isPlaying || !words.length) return;

    const interval = setInterval(() => {
        setIndex(prev => {
            if (prev >= words.length) {
                clearInterval(interval);
                return prev;
            }

            const nextIndex = (prev + 5);

            setVisibleText(words.slice(prev, nextIndex).join(" "));
            return nextIndex;
        });
    }, level);

    return () => clearInterval(interval);
}, [isPlaying, words]);
    return(
        <>
            <section className={styles.playing}>
                <section>
                    <h3>{filter[0]?.name}</h3>
                </section>
                <div className={styles.displayContainer}>
                    {visibleText}
                </div>
                <div className={styles.buttons}>
                    <button onClick={() => {toTop(); setIsPlaying(false); setIndex(0); setVisibleText("");navigate("/")}}>END</button>
                    <button onClick={() => setIsPlaying(false)}>PAUSE</button>
                    <button onClick={() => setIsPlaying(true)}>PLAY</button>
                </div>
            </section>
        </>
    )
};

export default Playing;