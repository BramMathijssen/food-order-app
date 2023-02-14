import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import './CardSkeleton.scss'

const CardSkeleton = ({ cards }) => {

    return (
        Array(cards).fill(0).map((item, key) =>
            <div className="card-skeleton" key={key}>
                <Skeleton className='card-skeleton__content'/>
            </div>)
    )
}

export default CardSkeleton

