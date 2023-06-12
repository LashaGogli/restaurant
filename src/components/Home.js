import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from "../data.json"
import "../components/Home.css"
import { useNavigate } from "react-router-dom";

export default function Home(props) {
    const { onAdd } = props;
    const navigate = useNavigate();

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
        <h1></h1>

        <div className='popularDiv'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={data[1].image} style={{ height: "200px", position: "relative" }} />
                <span className='addTocart' onClick={() => onAdd(data[1])}>Add to Cart</span>
                <Card.Body>
                    <Card.Title style={{ height: "60px", fontSize: "18px" }}>{data[1].name}</Card.Title>
                    <Button
                        onClick={() => {
                            navigate(`/details/${data[1].name}`);
                        }}
                        variant="primary"
                    >
                        Details
                    </Button><span className='priceSpan'>{data[1].price}$</span>

                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={data[14].image} style={{ height: "200px", position: "relative" }} />
                <span className='addTocart' onClick={() => onAdd(data[14])}>Add to Cart</span>
                <Card.Body>
                    <Card.Title style={{ height: "60px", fontSize: "18px" }}>{data[14].name}</Card.Title>
                    <Button
                        onClick={() => {
                            navigate(`/details/${data[14].name}`);
                        }}
                        variant="primary"
                    >
                        Details
                    </Button><span className='priceSpan'>{data[14].price}$</span>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={data[15].image} style={{ height: "200px", position: "relative" }} />
                <span className='addTocart' onClick={() => onAdd(data[15])}>Add to Cart</span>
                <Card.Body>
                    <Card.Title style={{ height: "60px", fontSize: "18px" }}>{data[15].name}</Card.Title>
                    <Button
                        onClick={() => {
                            navigate(`/details/${data[15].name}`);
                        }}
                        variant="primary"
                    >
                        Details
                    </Button><span className='priceSpan'>{data[15].price}$</span>
                </Card.Body>
            </Card>
        </div>


    </>

    );
}