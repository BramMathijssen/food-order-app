import { useEffect, useState } from 'react';
import Meal from './Meal';
import './Selection.scss';
import 'react-loading-skeleton/dist/skeleton.css'
import CardSkeleton from '../UI/CardSkeleton';


const Selection = (props) => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch('https://react-meals-a793d-default-rtdb.europe-west1.firebasedatabase.app/meals.json');
            const responseData = await response.json();
            const loadedMeals = [];

            for (const key in responseData) {
                try {
                    loadedMeals.push({
                        id: key,
                        name: responseData[key].name,
                        description: responseData[key].description,
                        price: responseData[key].price,
                        src: responseData[key].src
                    })
                } catch (e) {
                    console.log(e);
                }
            }

            // Timer just for demonstrating Skeleton Loading
            const timer = setTimeout(() => {
                setMeals(loadedMeals);
                setIsLoading(false);
            }, 2000);
            return () => clearTimeout(timer);
        }

        fetchMeals()

    }, [])

    return (
        <section className='selection'>
            <h2 className='selection__title'>Our Selection</h2>
            <div className='grid-container'>
                {isLoading && <CardSkeleton cards={6} />}
                {meals.map((item => <Meal key={item.id} id={item.id} source={item.src} alt={item.name} title={item.name} description={item.description} price={item.price} />))}
            </div>
        </section>
    )
}

export default Selection;