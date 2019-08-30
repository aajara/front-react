import React from 'react';
import { Link } from 'react-router-dom';


class Item extends React.Component {



    render() {
        return (
            <div className="col-sm-4 mt-4" >
                <div className="">
                    <img src={this.props.img} className="card-img-top" alt="imagen producto" />
                    <div>
                        <p>{this.props.name}</p>
                        <table>
                            <tr>
                                <td><strike>{this.props.listPrice}</strike></td>
                            </tr>
                            <tr>
                                <td>{this.props.offerPrice}</td>
                            </tr>
                            <tr>
                                <td>{this.props.cardPrice}</td>
                            </tr>
                        </table>
                        <Link to={`product/${this.props.sku}`}>Ver detalle</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Item;