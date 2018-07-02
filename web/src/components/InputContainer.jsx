import React, { Component } from 'react';
import StatInput from './StatInput';

class InputContainer extends Component {
	
	
  render() {
	const stats = [  'xp', 'maxedMon', '_100s', 'unique100s',
					 '_3000', 'kanto', 'johto', 'hoenn', 'jogger', 'collector', 'scientist', 'breeder', 
					 'backpacker', 'battleGirl', 'battleLegend', 'champion', 'youngster', 'berryMaster', 
					 'gymLeader', 'fisherman', 'aceTrainer', 'pikachuFan', 'unown', 'pokemonRanger', 'shiny', 
					 'normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 
					 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy', 
					 'goldGym', 'silverGym', 'bronzeGym', 'noBadge', 'totalGyms' ]
    return (
      <div className="inputs">
		<p>enter your stats here and click submit to update them</p>
		<form action="#">
			<label htmlFor="id"><input type="text" id="id" name="id" value="1234" hidden /></label>
			<label class="single" htmlFor="name">Name <input type="text" id="name" name="name" size="45" /></label>
			<label class="single" htmlFor="trainerImage">Trainer Image <input type="text" id="trainerImage" name="trainerImage" size="45" /></label>
			<label htmlFor="team">Team <input type="text" id="team" name="team" size="9" style={{height: '20px', padding: '0px'}} /></label>
			<label htmlFor="startDate">Start Date <input type="date" id="startDate" name="startDate" size="9" /></label>
			{
			stats.map(function(v, i) {
				return <StatInput key={i} stat={v} />
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