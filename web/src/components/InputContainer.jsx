import React, { Component } from 'react';
import InputGrouping from './InputGrouping';

class InputContainer extends Component {
	
	
  render() {
	const stats = {
		"Trainer": [ 'xp', 'goldGym', 'silverGym', 'bronzeGym', 'noBadge', 'totalGyms' ],
		"Achievement Medals": ['kanto', 'johto', 'hoenn', 'jogger', 'collector', 'scientist', 'breeder', 
			 'backpacker', 'battleGirl', 'battleLegend', 'champion', 'youngster', 'berryMaster', 
			 'gymLeader', 'fisherman', 'aceTrainer', 'pikachuFan', 'unown', 'pokemonRanger'],
		"Type Medals": [ 'normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 
			 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy'],
		"Inventory": ['shiny', 'maxedMon', '_100s', 'unique100s', '_3000', ]
	}
    return (
      <div className="inputs">
		<p>enter your stats here and click submit to update them</p>
		<form action="#">
			<label htmlFor="id"><input type="text" id="id" name="id" value="1234" hidden /></label>
			<label className="single" htmlFor="name">Name <input type="text" id="name" name="name" size="45" /></label>
			<label className="single" htmlFor="trainerImage">Trainer Image <input type="text" id="trainerImage" name="trainerImage" size="45" /></label>
			<label htmlFor="team">Team <input type="text" id="team" name="team" size="9" style={{height: '20px', padding: '0px'}} /></label>
			<label htmlFor="startDate">Start Date <input type="date" id="startDate" name="startDate" size="9" /></label>
			{
			Object.keys(stats).map(function(v, i) {
				return <InputGrouping title={v} stats={stats} />
			})
			}
			<br style={{clear:'both'}}/>
			<button>Submit</button>
		</form>
      </div>
    );
  }
}

export default InputContainer;