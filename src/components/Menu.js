import data from "../data.json"
import '../components/Menu.css'
import Card from 'react-bootstrap/Card';

export default function Menu() {

    const mainDishes = data.filter((item) => item.category === "Main Dish");
    const sideDish = data.filter((item) => item.category === "Side Dish");
    const dessert = data.filter((item) => item.category === "Dessert");
    const drinks = data.filter((item) => item.category === "Drinks");
    return (<>

        <div className="outDiv">
            <h2>Main Dishes</h2>
            <section className="mainDish">

                {mainDishes.map((item) => (
                    <div className="cards" key={item.id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.image} style={{ height: "200px", position: "relative" }} />
                            <span className='addTocart'>add to cart</span>
                            <Card.Body>
                                <Card.Title style={{ height: "60px" }}>{item.name}</Card.Title>
                                <span className='priceSpan'>{item.price}$</span>

                            </Card.Body>
                        </Card>
                    </div>
                ))}

            </section>
        </div>


        <div className="outDiv">
            <h2>Side Dishes</h2>
            <section className="mainDish">

                {sideDish.map((item) => (
                    <div className="cards" key={item.id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.image} style={{ height: "200px", position: "relative" }} />
                            <span className='addTocart'>add to cart</span>
                            <Card.Body>
                                <Card.Title style={{ height: "60px" }}>{item.name}</Card.Title>
                                <span className='priceSpan'>{item.price}$</span>

                            </Card.Body>
                        </Card>
                    </div>
                ))}

            </section>
        </div>



        <div className="outDiv">
            <h2>Dessert</h2>
            <section className="mainDish">

                {dessert.map((item) => (
                    <div className="cards" key={item.id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.image} style={{ height: "200px", position: "relative" }} />
                            <span className='addTocart'>add to cart</span>
                            <Card.Body>
                                <Card.Title style={{ height: "60px" }}>{item.name}</Card.Title>
                                <span className='priceSpan'>{item.price}$</span>

                            </Card.Body>
                        </Card>
                    </div>
                ))}

            </section>
        </div>


        <div className="outDiv">
            <h2>Drinks</h2>
            <section className="mainDish">

                {drinks.map((item) => (
                    <div className="cards" key={item.id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.image} style={{ height: "200px", position: "relative" }} />
                            <span className='addTocart'>add to cart</span>
                            <Card.Body>
                                <Card.Title style={{ height: "60px" }}>{item.name}</Card.Title>
                                <span className='priceSpan'>{item.price}$</span>

                            </Card.Body>
                        </Card>
                    </div>
                ))}

            </section>
        </div>
    </>);
}