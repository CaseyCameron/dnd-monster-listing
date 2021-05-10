import { Component } from 'react';
import { getMonster } from '../utils/monsters-api';
import './MonsterDetailPage.css';

export default class MonsterDetailPage extends Component {
  state = {
    monster: null
  }

  async componentDidMount() {
    const { match } = this.props;
    const monster = await getMonster(match.params.id);
    if (monster) {
      this.setState({ monster: monster });
    }
    else {
      console.log('No monster received. Check id and network tab.');
    }
  }

  render() {
    const { monster } = this.state;

    if (!monster) return null;

    return (
      <div className="MonsterDetail">
        <h2>Monster Detail Page</h2>
        
        <p>Monster name: {monster.name}</p>
        <p>Monster type: {monster.type}</p>
        <p>Monster Hit Points: {monster.hp}</p>
        <p>Monster AC: {monster.ac}</p>
        <p>Monster Challenge Rating: {monster.cr}</p>
        <p>Monster Legendary Status: {monster.is_legendary}</p>
        <p>Owner: {monster.userName}</p>
      </div>
    );
  }

}