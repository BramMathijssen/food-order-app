import './Checkout.scss'


const Checkout = (props) => {
    const confirmHandler = (event) => {
        event.preventDefault();
    };

    return (
        <form className='checkout' onSubmit={confirmHandler}>
            <div className='checkout__control'>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' />
            </div>
            <div className='checkout__control'>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' />
            </div>
            <div className='checkout__control'>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal' />
            </div>
            <div className='checkout__control'>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' />
            </div>
            <div className='checkout__control--buttons'>
                <button className="btn btn--order" onClick={props.order}>Order</button>
                <button className="btn btn--close" onClick={props.closeModal}>Cancel</button>

            </div>
        </form>
    );
};

export default Checkout;