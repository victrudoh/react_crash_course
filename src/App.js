import React, { Component } from "react";
import Radium, { StyleRoot } from "radium";
import "./App.css";
import Person from "./Person/Person";
import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";



class App extends Component {
  state = {
    currentSpecie: 0,

    name: "Eddy",
    username: "Edikan",
    inputText: "",

    toggleDisappear: "false",

    people: [
      { id: "safa", name: "Eddy" },
      { id: "lkgd", name: "Ruth" },
      { id: "sfsr", name: "Nanklin" },
      { id: "dfdg", name: "Nanklin" },
      { id: "fshh", name: "Devereaux" },
      { id: "poer", name: "Olayinka" },
    ],

    genus: [
      { specie: "a Human" },
      { specie: "a Martian" },
      { specie: "a Kryptonian" },
      { specie: "an Eternal" },
      { specie: "a Goat" },
      { specie: "a Hermit" },
    ],
  };

  changeStateHandler = () => {
    const randomSpecie = Math.floor(Math.random() * this.state.genus.length);
    this.setState({ currentSpecie: randomSpecie });
  };

  changeDisplayNameHandler = (event, id) => {
    const personIndex = this.state.people.findIndex((p) => {
      return p.id === id;
    });
    const person = { ...this.state.people[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.people];
    persons[personIndex] = person;
    this.setState({ people: persons });
  };

  changeUsernameHandler = (event) => {
    this.setState({ username: event.target.value });
  };

  toggleDisappearHandler = () => {
    this.setState({ toggleDisappear: !this.state.toggleDisappear });
  };

  deletePersonHandler = (specieIndex) => {
    const people = [...this.state.people];
    people.splice(specieIndex, 1);
    this.setState({ people: people });
  };

  textInputHandler = (event) => {
    this.setState({ inputText: event.target.value });
  };

  deleteCharComponentHandler = (index) => {
    const deleteThis = this.state.inputText.split("");
    deleteThis.splice(index, 1);
    const updatedInputText = deleteThis.join("");
    this.setState({ inputText: updatedInputText  });
  }

  
  render() {
    const buttonStyle = {
      backgroundColor: "green",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      font: "inherit",
      border: "1px solid wheat",
      padding: "8px",
      borderRadius: "10px",
      color: "white",
      cursor: "pointer",
      ':hover': {
        backgroundColor: 'yellow',
        color: 'blue'
      }
    };

    const inputStyle = {
      borderRadius: "10px",
      color: "red",
    };

    let peek = null;

    if (this.state.toggleDisappear) {
      peek = (
        <div>
          {this.state.people.map((people, index) => {
            return (
              <Person
                delete={() => this.deletePersonHandler(index)}
                name={people.name}
                key={people.id}
                style={buttonStyle}
                nameChange={(event) =>
                  this.changeDisplayNameHandler(event, people.id)
                }
              />
            );
          })}
        </div>
      );

      buttonStyle.backgroundColor = "maroon";
      buttonStyle[":hover"] = {
        backgroundColor: "yellow",
        color: "blue",
      };
    }

    const length = this.state.inputText.length;
    const newInputText = this.state.inputText.split("").map((i, index) => {
      //use split when working with strings, the '' in the bracket will split the string into an array of strings after every character
      return (
        <CharComponent
          char={i}
          key={index}
          delete={() => this.deleteCharComponentHandler(index)}
        />
      );
    });

    const classes = [];
    if (this.state.inputText.length < 5) {
      classes.push('red');
    } else {
      classes.push('green');
    }
    const newClasses = classes.join(' ');
    console.log(newClasses);


    return (
      <StyleRoot>
        <div className="App">
          <h1>Hey, call me {this.state.name}</h1>
          <Person
            specie={this.state.genus[this.state.currentSpecie].specie}
            click={this.changeStateHandler}
            nameChange={this.changeDisplayNameHandler}
            name={this.state.name}
          >
            Ribbit
          </Person>
          <button style={buttonStyle} onClick={this.changeStateHandler}>
            Change Specie
          </button>
          
          <p>Enter new username:</p>
          <UserInput
            UsernameChange={this.changeUsernameHandler}
            DisplayUsername={this.state.username}
          />
          <UserOutput style={inputStyle} DisplayUsername={this.state.username} />

          <button onClick={this.toggleDisappearHandler}>
            {this.state.toggleDisappear ? "Disappear" : "Appear"}
          </button>
          {this.state.toggleDisappear ? (
            <div>
              <p>Peek-a-boo</p>
            </div>
          ) : null}
          
          {peek}

          <input
            type="text"
            onChange={this.textInputHandler}
            value={this.state.inputText}
          />
          <p>text: {this.state.inputText}</p>
          <p>length: {length}</p>
          <ValidationComponent length={length} classColor={newClasses} />
          {newInputText}
        </div>
      </StyleRoot> 
    );
  }
}

export default Radium(App);
