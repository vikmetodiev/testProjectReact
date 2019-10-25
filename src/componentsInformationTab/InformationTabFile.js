import React from "react"
import data from "../data.js"
import TesterItem from "./InformationItem.js"
class TesterFile extends React.Component {
    constructor() {
        super()
        this.state = {
            allInfo: data
        }
    }

    render() {
        const allData = this.state.allInfo.map(item => <TesterItem key={item.id} item={item} />)
        console.log(this.state.allData)
        return (
            <div>
                {allData}
            </div>
        )
    }
}
export default TesterFile

