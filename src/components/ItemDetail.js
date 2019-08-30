import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ItemDetail extends Component {

    constructor(props) {
        super(props);
        console.log(this.props)

    }
    
    render() {
        return (
            <div className="row">
            <div className="col-6">
                <div>
                    <img src={this.props.img} className="card-img-top" alt="" />
                    <div>
                        <Link to="/">Volver</Link>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <h3>{this.props.name}</h3>
                <h5>sku: {this.props.sku}</h5>
                <table>
                    <tr>
                        <td>En Tienda : {this.props.formattedListPrice}</td>
                    </tr>
                    <tr>
                        <td>Internet : {this.props.formattedOfferPrice}</td>
                    </tr>
                    <tr>
                        <td>Tarjeta Ripley : {this.props.formattedCardPrice}</td>
                    </tr>
                    <tr>
                        <td>Descuento : - {this.props.discountPercentage} %</td>
                    </tr>
                </table>
            </div>
        </div>
        )
    }
}

export default ItemDetail;