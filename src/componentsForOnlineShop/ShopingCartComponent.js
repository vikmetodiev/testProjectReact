import React from "react"
import { Card, Button, CardTitle, CardText, Row, Col, ListGroupItem, CardBody, ListGroup } from 'reactstrap';

class ShopingCartComponent extends React.Component {
    reduceItemInCart = (products) => {
        let groups = {};
        products.forEach((prod) => {
            if (!groups.hasOwnProperty(prod.id)) groups[prod.id] = [];
            groups[prod.id].push(prod)
        })
        let result = [];
        Object.keys(groups).forEach((prodKey) => {
            let product = groups[prodKey][0]
            let identicalProducts = groups[prodKey].length;
            product.quantity = identicalProducts
            result.push(product)
        })
        return result
    }
    render() {
        let cartItems = this.reduceItemInCart(this.props.cartData)

        cartItems = cartItems.map((item) => {
            return <ListGroupItem>{item.quantity}x {item.name} ${item.price} <Button onClick={() => { this.props.removeItem(item) }}>-</Button></ListGroupItem>
        })
        console.log(cartItems)
        return (
            <Row style={{ float: "right", marginTop: 15,marginRight:-125 }}>
                <Col sm="9">
                    <Card body className="text-center">
                        <CardTitle>Shoping Cart</CardTitle>
                        <CardText>Yuo can find every item purchased</CardText>
                        <CardBody><ListGroup> {cartItems}</ListGroup></CardBody>
                        <CardText>Total Price: {this.props.price}</CardText>

                        <Button>Buy</Button>
                    </Card>
                </Col>
            </Row>)
    }
}
export default ShopingCartComponent