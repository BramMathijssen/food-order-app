import Navigation from "./Navigation";
import hotdog from "./../../assets/images/hot-dog.png";

import "./Header.scss";
import Button from "../UI/Button";
import { useRef } from "react";

const Header = () => {
    const endOfHeaderRef = useRef(null);

    const onClickHandler = () => {
        endOfHeaderRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <header className="header">
                <Navigation />
                <div className="container">
                    <div className="text">
                        <h1 className="text__big">
                            Delicious <span>Food</span>, <br></br> Delivered To You
                        </h1>
                        <p className="text__small">Chose your favorite meal from our broad selection and enjoy a delicious lunch or dinner at home</p>
                        <Button className="btn btn--large" content="Get Started" onClick={onClickHandler}></Button>
                    </div>
                    <img className="container__image" src={hotdog} alt="hotdog"></img>
                </div>
            </header>
            <div ref={endOfHeaderRef} />
        </>
    );
};

export default Header;
