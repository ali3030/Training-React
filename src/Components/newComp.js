import React, { Component } from "react";
import bellA from "./bellA.png"
import bellB from "./bellB.png"

class NewComp extends Component {
    constructor(props){
        super(props);

        this.state = {
            message: "Subscribe to invozone",
            sub: "Subscribe",
            imageURL: bellA
        };
    }
    styles = {
        fontStyle: "italic",
        color: "purple"
    };
    Buttonchange = () => {
        this.setState({
            message: "Press the bell icon to never miss an update",
            sub: "Subscribed"
        });
    };
    BellChange = () => {
        this.setState({
            imageURL: bellB,
            message: "Thanks for Subscribing!"
        })
    }
    
    render(){
        return(
            <div className="App">
                <h3 style = {this.styles}>{this.state.message}</h3>
                <button onClick={this.Buttonchange}>{this.state.sub}</button>
                <p />
                <img 
                    style={{width: "30px" , height: "30px"}}
                    src= {this.state.imageURL} 
                    onClick={this.BellChange} 
                    alt=""></img>
            </div>
        )
    }
}

export default NewComp;
