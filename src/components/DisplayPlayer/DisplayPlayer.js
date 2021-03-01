import React, { useEffect, useState } from 'react';
import players from '../../fakeDatas/players';
import PlayerList from '../PlayerList/PlayerList';
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';

const DisplayPlayer = () => {
    const [playersList, setPlayerlist] = useState([]);
    const [selectPlayer, setSelecPlayer] = useState([]);
    useEffect(() => {
        setPlayerlist(players);
    }, []);
    
    const playerhandle = (addedPlayer) => {
        let checkIndex = selectPlayer.indexOf(addedPlayer);
        if (checkIndex == -1) {
            const newSelectPlayer = [...selectPlayer, addedPlayer];
            setSelecPlayer(newSelectPlayer);
        }
        else{
            alert("Please try another one, it is already selected");
        }
    }
    return (
        <div style={{ display: 'flex' }}>
            <div class="col-md-8">{playersList.map(playerList => <PlayerList clickHandle={playerhandle} playerData={playerList}></PlayerList>)}</div>
            <div className="selected-player-summary" class="col-md-4">
                <SelectedPlayer playerSelect={selectPlayer} ></SelectedPlayer>
            </div>
        </div>
    );
};

export default DisplayPlayer;