import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import "../components/Details.css"

export default function Details() {
    const { name } = useParams();
    const selectedItem = data.find((item) => item.name === name);



    return (
        <div className="bigDiv2">

            <div className='someDiv'>
                <img src={selectedItem.image} alt="x" className="someimg"></img>
            </div>
            <div className='someDiv'>
                <span className="detailsP">Category: </span> <span className="rightSpan">{selectedItem.category}</span>
                <span className="detailsP">Name: </span> <span className="rightSpan">{selectedItem.name}</span>
                <span className="detailsP">Description: </span> <span className="rightSpan">{selectedItem.description}</span>
                <span className="detailsP">Price: </span> <span className="rightSpan">{selectedItem.price}$</span>
            </div>

        </div>
    );
}

