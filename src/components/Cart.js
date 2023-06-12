import "../components/Cart.css"

export default function Cart(props) {
    const { cartitems, onAdd, onRemove } = props;

    return (<>
        <div className="cartDivv">
            <div className="insideDiv">
                {cartitems.length === 0 && <p className="emptySpan">Cart is empty</p>}
                <div>
                    {cartitems.map((item) => (
                        <div key={item.id} className="shidaDiv">
                            <h3>{item.name}</h3>
                            <div className="angarishiDiv">
                                <button onClick={() => onAdd(item)} className="pliusi">+</button>
                                <button onClick={() => onRemove(item)} className="minusi">-</button>
                            
                            </div>
                            <p className="sumSpan">Price = {item.qty} * {item.price} = {item.qty * item.price}$</p>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <button onClick={() => alert("Implement Checkout")} className="checkout"> Checkout</button>
            </div>
        </div>

    </>);

}
