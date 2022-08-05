import Navigation from "./Navigation";
import hotdog from './../../assets/images/hot-dog.png';

import './Header.scss';
import Button from "../UI/Button";

const Header = () => {
    return (
        <header className="header">
            <Navigation />
            <div className="container">
                <div className="text">
                    <h1 className="text__big">Delicious <span>Food</span>, <br></br> Delivered To You</h1>
                    <p className="text__small">Chose your favorite meal from our broad selection and
                        enjoy a delicious lunch or dinner at home</p>
                    <Button className="btn btn--large" content="Get Started"></Button>
                </div>
                <img className='container__image' src={hotdog} alt="hotdog"></img>

            </div>
        </header>
    )

}

export default Header;