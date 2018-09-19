import React from "react";
import { readdirSync } from "fs";
import axios from "axios";

class Main extends React.Component {
    state ={
        url: "",
        html: ""
    }

    handleInputChange = (event) =>{
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    // save = () =>{
        
    // }

    //Fetch saved website, search by url
    show = () =>{
        axios.post("/html/show", {url: this.state.url})
        .then(html =>{
            console.log(html)
            this.setState({html: html.data[0].content});
        })
    }

    //Save new website to db
    save = () =>{
        axios.post("/html/save", {url: this.state.url})
        .then(result =>{
            if(result.data === "Success"){
                console.log("Saved!")
            }
            else{
                console.log("Error saving;")
            }
        })
    }

    render(){
        return(
            <div>
                <h1>Find and Edit a website</h1>
                
                <label htmlFor="url">Enter Web Address</label>
                <input type="text" 
                id="url"
                onChange={this.handleInputChange}
                placeholder="Website"
                />
                <br/>

                <button onClick={this.save}>Save HTML</button>
                <br/>
                <button onClick={this.show}>Render Website</button>

                <div id="renderedSite"
                dangerouslySetInnerHTML={{__html: this.state.html}}>
                </div>

            </div>
        )
    }
}

export default Main;