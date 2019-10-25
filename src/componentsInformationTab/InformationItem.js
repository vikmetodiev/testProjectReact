import React, { useState } from "react"
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardImg, Collapse

} from 'reactstrap';



function TesterItem(props) {
    const [collapse, setCollapse] = useState(false);

    const toggle = () => setCollapse(!collapse);

    return (
        <div>
            <Card className="column">
                <CardHeader>{props.item.name}</CardHeader>
                <CardBody>
                <CardImg className="imgData" src={props.item.url}/>
                    <CardTitle>{props.item.description}</CardTitle>
                    <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem',backgroundColor:"black" }}>Information</Button>
                    <Collapse isOpen={collapse}>
                        <Card>
                            <CardBody style={{backgroundColor:"black"}}>
                                {props.item.info}
                            </CardBody>
                        </Card>
                    </Collapse>
                </CardBody>
                <CardFooter>Bottom part</CardFooter>
            </Card>
        </div>
    )
}
export default TesterItem