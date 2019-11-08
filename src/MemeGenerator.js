import React from 'react';
import './App.css';
import { Container, Form, CardImg, Jumbotron} from "reactstrap"
import MemeGeneratorHeader from "./MemeGeneratorHeader.js"
class MemeGenerator extends React.Component {
    constructor() {
        super()
        this.state = {
            randomImg: "",
            topText: "",
            botText: "",
            allImgs: []
        }
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const { memes } = response.data
                this.setState({ allImgs: memes })
            })
    }
    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    submitChange = (event) => {
        event.preventDefault()
        const randomNum = Math.floor(Math.random() * this.state.allImgs.length)
        const randImg = this.state.allImgs[randomNum].url
        this.setState({
            randomImg: randImg
        })
    }
    render() {
        return (
            <Jumbotron>
                <MemeGeneratorHeader />
                
                <Form className="meme-form" onSubmit={this.submitChange}>
                    <input type="text"
                        name="topText"
                        value={this.state.topText}
                        placeholder="Type top text"
                        onChange={this.handleChange}
                    />
                    <input type="text"
                        name="botText"
                        value={this.state.botText}
                        placeholder="Type bot text"
                        onChange={this.handleChange}
                    />
                    <button>generate</button>
                </Form>
        
                <Container >
                    <div className="meme">
                        <CardImg className="text-center" src={this.state.randomImg} alt="random-img" />
                        <h2 className="top">{this.state.topText}</h2>
                        <h2 className="bottom">{this.state.botText}</h2>
                    </div>
                </Container>
            </Jumbotron>
        );
    }
}

export default MemeGenerator;
