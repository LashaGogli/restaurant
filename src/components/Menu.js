import React from "react";
import data from "../data.json";
import '../components/Menu.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

export default function Menu({ mainDish, sideDish, dessert, drink }) {
    const mainDishes = data.filter((item) => item.category === "Main Dish");
    const sideDishes = data.filter((item) => item.category === "Side Dish");
    const desserts = data.filter((item) => item.category === "Dessert");
    const drinks = data.filter((item) => item.category === "Drinks");

    const navigate = useNavigate();



    return (
        <>
            <div className="outDiv" id="mainDishes" ref={mainDish}>
                <h2>Main Dishes</h2>
                <section className="mainDish">
                    {mainDishes.map((item) => (
                        <div className="cards" key={item.id}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.image} style={{ height: "200px", position: "relative" }} />
                                <span className='addTocart'>add to cart</span>
                                <Card.Body>
                                    <Card.Title style={{ height: "60px", fontSize: "18px" }}>{item.name}</Card.Title>
                                    <Button
                                        onClick={() => {
                                            navigate(`/details/${item.name}`);
                                        }}
                                        variant="primary"
                                    >
                                        Details
                                    </Button>
                                    <span className='priceSpan'>{item.price}$</span>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </section>
            </div>

            <div className="outDiv" id="sideDishes" ref={sideDish}>
                <h2>Side Dishes</h2>
                <section className="mainDish">
                    {sideDishes.map((item) => (
                        <div className="cards" key={item.id}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.image} style={{ height: "200px", position: "relative" }} />
                                <span className='addTocart'>add to cart</span>
                                <Card.Body>
                                    <Card.Title style={{ height: "60px", fontSize: "18px" }}>{item.name}</Card.Title>
                                    <Button
                                        onClick={() => {
                                            navigate(`/details/${item.name}`);
                                        }}
                                        variant="primary"
                                    >
                                        Details
                                    </Button>                                    <span className='priceSpan'>{item.price}$</span>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </section>
            </div>

            <div className="outDiv" id="desserts" ref={dessert}>
                <h2>Desserts</h2>
                <section className="mainDish">
                    {desserts.map((item) => (
                        <div className="cards" key={item.id}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.image} style={{ height: "200px", position: "relative" }} />
                                <span className='addTocart'>add to cart</span>
                                <Card.Body>
                                    <Card.Title style={{ height: "60px", fontSize: "18px" }}>{item.name}</Card.Title>
                                    <Button
                                        onClick={() => {
                                            navigate(`/details/${item.name}`);
                                        }}
                                        variant="primary"
                                    >
                                        Details
                                    </Button>                                    <span className='priceSpan'>{item.price}$</span>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </section>
            </div>

            <div className="outDiv" id="drinks" ref={drink}>
                <h2>Drinks</h2>
                <section className="mainDish">
                    {drinks.map((item) => (
                        <div className="cards" key={item.id}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.image} style={{ height: "200px", position: "relative" }} />
                                <span className='addTocart'>add to cart</span>
                                <Card.Body>
                                    <Card.Title style={{ height: "60px", fontSize: "18px" }}>{item.name}</Card.Title>
                                    <Button
                                        onClick={() => {
                                            navigate(`/details/${item.name}`);
                                        }}
                                        variant="primary"
                                    >
                                        Details
                                    </Button>                                    <span className='priceSpan'>{item.price}$</span>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </section>
            </div>
        </>
    );
}
