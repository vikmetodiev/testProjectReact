import React, { Component } from 'react'
import axios from 'axios'
import { Button, Container, Alert } from "reactstrap"
import { observable, computed, action, decorate } from "mobx"
import Moment from 'react-moment';
import "./test.scss"
class Timer extends Component {
    start = Date.now()
    current = Date.now()

    get elapsedTime() {
        return this.current - this.start + "milliseconds"
    }

    tick = () => {
        this.current = Date.now()
    }

    render() {
        const unixTimestamp = this.current;
        return (
            <div>
                
                <Moment local style={{color:"azure"}} className="text-center">{unixTimestamp}</Moment>
            </div>
        )
    }
}


decorate(Timer, {
    start: observable,
    current: observable,
    elapsedTime: computed,
    tick: action
})

class RandomQuote extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quote: '',
            author: '',
        }
    }

    componentDidMount() {
        this.getQuote()
    }


    getQuote() {
        let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

        axios.get(url)
            .then(res => {
                let data = res.data.quotes
                let quoteNum = Math.floor(Math.random() * data.length) //quote number
                let randomQuote = data[quoteNum] //actual quote

                this.setState({
                    quote: randomQuote['quote'],
                    author: randomQuote['author']
                })
            })
    }

    getNewQuote = () => {
        this.getQuote()
    }

    render() {
        const { quote, author } = this.state
        return (
            <Container>
                <Alert color="dark"><div className="text-center" style={{ color: "azure",}}><h4>{quote}</h4></div>
                <div className="text-center" ><h5>{author}</h5></div></Alert>
                <div className="text-center"><img style={{ width: 300, marginTop: -35 }} src="./Images/image.jpg" alt="world" /></div>
                <div className="text-center"><Button onClick={this.getNewQuote} style={{ backgroundColor: "azure", width: 300, height: 50, color: "gainsboro", fontSize: 20 }}>Get New Quote</Button></div>
                <div>&quot;Llanfair&shy;pwllgwyngyll&shy;gogery&shy;chwyrn&shy;drobwll&shy;llan&shy;tysilio&shy;gogo&shy;goch&quot;?</div>
            </Container>
        )
    }
}

export default RandomQuote