import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from "../data.json"
import Footer from './Footer';
import "../components/Home.css"
export default function Home() {

    return (<>
        <Carousel>
            <Carousel.Item>
                <div style={{ height: "900px", overflow: "hidden" }}>
                    <img
                        className="d-block w-100"
                        src={data[4].image}
                        alt="First slide"
                        style={{ opacity: "70%", position: "relative" }}

                    />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div style={{ height: "900px", overflow: "hidden" }}>
                    <img
                        className="d-block w-100"
                        src={data[28].image}
                        alt="Second slide"
                        style={{ opacity: "70%" }}
                    />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div style={{ height: "900px", overflow: "hidden" }}>
                    <img
                        className="d-block w-100"
                        src={data[10].image}
                        alt="Third slide"
                        style={{ opacity: "70%" }}
                    />
                </div>

            </Carousel.Item>
            <Carousel.Item>
                <div style={{ height: "900px", overflow: "hidden" }}>
                    <img
                        className="d-block w-100"
                        src={data[26].image}
                        alt="Third slide"
                        style={{ opacity: "70%" }}
                    />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div style={{ height: "900px", overflow: "hidden" }}>
                    <img
                        className="d-block w-100"
                        src={data[32].image}
                        alt="Third slide"
                        style={{ opacity: "70%" }}
                    />
                </div>

            </Carousel.Item>
            <Carousel.Item>
                <div style={{ height: "900px", overflow: "hidden" }}>
                    <img
                        className="d-block w-100"
                        src={data[35].image}
                        alt="Third slide"
                        style={{ opacity: "70%" }}
                    />
                </div>

            </Carousel.Item>
            <Carousel.Item>
                <div style={{ height: "900px", overflow: "hidden" }}>
                    <img
                        className="d-block w-100"
                        src={data[1].image}
                        alt="Third slide"
                        style={{ opacity: "70%" }}
                    />
                </div>
            </Carousel.Item>

        </Carousel>
        <h1>THE MOST POPULAR DISHES</h1>

        <div className='popularDiv'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={data[1].image} style={{ height: "200px" }} />
                <Card.Body>
                    <Card.Title>{data[1].name}</Card.Title>

                    <Button variant="primary">Details</Button>
                    <span className='priceSpan'>{data[1].price}$</span>

                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={data[14].image} style={{ height: "200px" }} />
                <Card.Body>
                    <Card.Title>{data[14].name}</Card.Title>

                    <Button variant="primary">Details</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Details</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Details</Button>
                </Card.Body>
            </Card>
        </div>
        <Footer />

    </>

    );
}