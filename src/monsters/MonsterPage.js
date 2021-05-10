  
import { Component } from 'react';
import MonsterList from './MonsterList';
import { getAllMonsters, getMonsters } from '../utils/monsters-api';
import './MonstersPage.css';

export default class MonstersPage extends Component {
  state = {
    monsters: []
  }

  async componentDidMount() {
    const monsters = await getAllMonsters();
    if (monsters) {
      this.setState({ monsters: monsters });
    }
    else {
      console.log('No monsters received. Check network tab.');
    }
  }

  render() {
    const { monsters } = this.state;

    return (
      <div className="MonstersPage">
        <h2>Monsters List</h2>

        <MonsterList monsters={monsters}/>
        
      </div>
    );
  }

}
