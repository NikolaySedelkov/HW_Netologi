import './ShopItemFunc.css';
import PropTypes from 'prop-types';
import React from 'react';


class ShopItemClass extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {item} = this.props;
        return (
        <div className="conteiner__card-item">
            <div className="block__card-item">
                <h2>{item.brand}</h2>
                <h1 className="upperText">{item.title}</h1>
                <h4 className="upperText">{item.description}</h4>
                <div className="fdescription__card-item">{item.descriptionFull}</div>
                <hr/>
                <div className="buy-conteiner__card-item">
                    <span className="price__card-item">{item.currency + item.price}</span>
                    <button className="button__card-item">ДОБАВИТЬ В КОРЗИНУ</button>
                </div>
            </div>
        </div>
        )
    }

    static propTypes = {
        props: PropTypes.shape({
            brand: PropTypes.string,
            title: PropTypes.string,
            description: PropTypes.string,
            descriptionFull: PropTypes.string,
            currency: PropTypes.string,
            price: PropTypes.number
        })
    }
}


export default ShopItemClass;