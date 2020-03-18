import React, { Component } from "react";
import Secondfunction from "./Secondfunction";
import './index.css';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';



class Firstfunction extends Component {
  constructor() {
    super();
    this.state = { civs: [], civilization: {} };    
  }

  async onCivClick(id) {
    const url =
      "https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/" +
      id;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ civilization: data });
  }

  async componentDidMount() {
    const url =
      "https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations";
    const response = await fetch(url);
    const data = await response.json();
    let civs = [];
    this.setState({ civs: data.civilizations });
  }

  render() {
    return (
      <div className="main">
        
        <div className="civs">
        <h1>Civ List</h1>
        <List component="nav" aria-label="main mailbox folders">
            {this.state.civs.map(civ => {
              return (
                <ListItem button onClick={() => {this.onCivClick(civ.id)}} key={`civ-${civ.id}`}>
                  {civ.name}
                </ListItem>
              );
            })}
          </List>
        </div>
       <Secondfunction civilization={this.state.civilization} />
      </div>
    );
  }
}

/*
class MemeGenerator extends Component {
    constructor(){
        super()
        this.state = {
            topText:"",
            bottomText:"",
            randomImg:"http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
            this.setState({allMemeImgs: memes})

        })
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({ [name]: value})

    }

    handleSubmit(event) {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({ randomImg: randMemeImg})
    }

    render(){
        return(
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>     
                <input
                    type="text"
                    name="topText"   
                    placeholder="Top text"
                    value={this.state.topText}
                    onChange={this.handleChange}
                    />            
                <input
                    type="text"
                    name="bottomText"   
                    placeholder="Bottom text"
                    value={this.state.bottomText}
                    onChange={this.handleChange}
                    />        

                    <button>Gen</button>
                </form>

                <div className="meme">
                    <img src={this.state.randomImg} alt="" />
                     <h2 className="top">{this.state.topText}</h2>
                     <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }

}
*/

export default Firstfunction;
