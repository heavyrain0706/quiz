import classes from './Start.module.scss'
import geoImage from '../../assets/images/geo.jpg'
import footballImage from '../../assets/images/football.jpg'
import { useContext, useState } from 'react'
import { dataContext } from '../../context'
import Quiz from '../Quiz/Quiz'

const Start = () => {

    const {geography, football, start, setStart} = useContext(dataContext)
    const [choice, setChoiсe] = useState('')

    const chooseHandler = (choice) => {
        switch (choice){
            case 'geo':
                setChoiсe(geography)
                setStart(true)
                break
            case 'football':
                setChoiсe(football)
                setStart(true)
                break
        default: 
            break;
        }
    }

    return (
        <>
        {
                start ?
                    <Quiz questions={choice}/>
                :
                <div className={classes.start}>
                    <h2 className={classes.start__title}>Выберите категорию</h2>
                    <div className={classes.start__buttons}>
                        <button onClick={() => chooseHandler('geo')} className={classes.start__button}>
                            <img src={geoImage} alt="geo" />
                        </button>
                        <button onClick={() => chooseHandler('football')} className={classes.start__button}>
                            <img src={footballImage} alt="football" />
                        </button>
                    </div>
                </div>
            }
        </> 
    )
}
export default Start;