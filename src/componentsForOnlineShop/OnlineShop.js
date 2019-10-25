import React from "react"
import Data from "../data.js"
import ShopingDataComponent from "./ShopingDataComponent.js"
import { Row, Container, FormGroup, Form, Input,Button,ButtonGroup } from 'reactstrap';
import ShopingCartComponent from "./ShopingCartComponent.js"
class OnlineShop extends React.Component {
    constructor() {
        super()
        this.state = {
            productsData: Data,
            allProductsData: [],
            search: ""
        }
        this.clickHandler = this.clickHandler.bind(this)
        this.removeItemonClick = this.removeItemonClick.bind(this);
    }

    sortByProperty(a, b, prop){
        if(a[prop] < b[prop]){
            return -1
        }
        if(a[prop] > b[prop]){
            return 1
        }
        return 0
    }

    sortByName(){
        let products = this.state.productsData.sort((a,b) => this.sortByProperty(a, b, "name"))
        this.setState({
            productsData: products
        })
    }

    sortByPrice(){
        let products = this.state.productsData.sort((a,b) => this.sortByProperty(a, b, "price"))
        this.setState({
            productsData: products
        })
    }
    clickHandler(id) {
        let items = this.state.productsData
        let item = items.find((itm) => {
            return itm.id === id
        })
        let allProductsData = this.state.allProductsData
        allProductsData.push(item)

        this.setState({
            allProductsData: allProductsData
        })
    }
    updateSearch(event) {
        this.setState({ search: event.target.value.substr(0, 20) })
    }
    calTotalPrice = (products) => {
        let totalPrice = 0
        products.forEach((product) => {
            totalPrice += product.price
        })
        return totalPrice
    }
    removeItemonClick(name) {
        let removedItem = this.state.allProductsData
        this.setState( {
            allProductsData: removedItem.filter(el => el !== name)
        })
    }

    render() {
        debugger
        let filteredData = this.state.productsData.filter((data) => {
            return data.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        })
        const allProductItems = filteredData.map(productItem =>
            <ShopingDataComponent key={productItem.id} productItem={productItem} clickHandler={this.clickHandler} />
        )
        return (
            <div className="body">
                <Container>
                    <Form>
                        <FormGroup>
                            <br />
                            <Input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} placeholder="Search items here" />

                        </FormGroup>

                    </Form>
                    <div className="text-center">
                <ButtonGroup ><Button onClick={this.sortByName.bind(this)}>Sort by Name</Button><Button style={{marginLeft:55}} onClick={this.sortByPrice.bind(this)}>Sort by Price</Button></ButtonGroup>
                </div>
                </Container>
                <div>
                    <ShopingCartComponent cartData={this.state.allProductsData} price={this.calTotalPrice(this.state.allProductsData)} removeItem={this.removeItemonClick} />
                </div>
                <Row>
                    {allProductItems}
                </Row>
            </div>
        )
    }
}

export default OnlineShop