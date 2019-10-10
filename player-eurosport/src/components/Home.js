import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
    state = {
        players: [ ]
    }
    componentDidMount() {
        axios.get('https://eurosportdigital.github.io/eurosport-web-developer-recruitment/headtohead.json')
        .then(res => {
          this.setState({
              players: res.data.players
          })
        })
        .catch(error => {
          console.log(error);
        });
      }
    render() {
        const { players } = this.state;
        
        const playerList = players.length ? (
            players.map(player=>{
                var win = player.data.last.filter((value)=>{
                    return value === 1;
                }).length;
                var lose = player.data.last.filter((value)=>{
                    return value === 0;
                }).length;
                console.log(win, lose);
                return(
                        <div className="col s12 m6" key={player.shortname}>
                            <div className="card horizontal">
                                <div className="card-image">
                                    <img src={player.picture} alt={player.lastname}/>
                                </div>
                                <div className="card-stacked">
                                    <div className="card-content left-align">
                                        <div className="row center-align"><h4 className="blue-text text-darken-4">{player.shortname}</h4><span>{player.data.points} pts</span></div>
                                        <div className="row">
                                            <div className="col s6">
                                                {player.firstname}  {player.lastname}
                                            </div>
                                            <div className="col s6 grey-text">
                                                Rank : {player.data.rank}
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col s6">
                                               Age : {player.data.age}
                                            </div>
                                            <div className="col s6">
                                            <img src={player.country.picture} alt={player.country.code} width='25%'/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col s6">
                                                Weight : {player.data.weight/1000}kg
                                            </div>
                                            <div className="col s6">
                                                Height : {player.data.height}cm
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col s6 green-text">
                                                WINS
                                            </div>
                                            <div className="col s6 red-text">
                                                LOSSES
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col s6 green-text">
                                                {win}
                                            </div>
                                            <div className="col s6 red-text">
                                                {lose}
                                            </div>
                                        </div>                                          
                                            {/* {player.data.last.map((stats) => {
                                                var win = player.data.last.filter((value)=>{
                                                    return value === 1;
                                                }).length;
                                                var lose = player.data.last.filter((value)=>{
                                                    return value === 0;
                                                }).length;
                                                
                                                return (
                                                    <div className="row">
                                                        
                                                    </div>
                                                );
                                            })}
                                         */}
                                    </div>
                                </div>
                            </div>
                        </div>
                )
            })
        ) : (
            <div className="center">No players yet</div>
        )
        return(
            <div className="container home row center">
                {playerList}
            </div>
        )
    }
}

export default Home;

  