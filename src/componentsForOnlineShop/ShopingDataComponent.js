import React from "react"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Container, Col } from 'reactstrap';
import Swal from 'sweetalert2'
function ShopingDataComponent(props) {
    return (

        <Col  sm="6">
            <Card className="column1" >

                <Container className="text-center">
                    <CardImg onClick={() => Swal.fire({
                        title: props.productItem.info,
                        width: 600,
                        padding: '3em',
                        imageUrl: props.productItem.url,
                        imageWidth: 300,
                        imageHeight: 200,
                    })} top width="70%" src={props.productItem.url} alt="Card image cap" style={{ cursor: "pointer" }} />
                    <CardBody>
                        <CardTitle>{props.productItem.name}</CardTitle>
                        <CardSubtitle>description: {props.productItem.description}</CardSubtitle>
                        <CardText>price: {props.productItem.price} $</CardText>
                        <Button onClick={() => props.clickHandler(props.productItem.id)}>Add to cart</Button>
                    </CardBody>
                </Container>

            </Card>
        </Col>
    )
}
export default ShopingDataComponent