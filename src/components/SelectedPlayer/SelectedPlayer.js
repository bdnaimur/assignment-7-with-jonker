import React from 'react';

const SelectedPlayer = (props) => {
    const players = props.playerSelect;
    let totalBudjet = 0;
    let names = "";
    let salary = 0;
    for (let i = 0; i < players.length; i++) {
        const player = players[i];
        names += `${i + 1}. ${player.name}  (${player.salary}) `;
        totalBudjet += player.salary;
    }
    return (
        <div style={{ padding: '20px 10px', backgroundColor: 'lightgrey', borderRadius: '10px', boxShadow: '5px 5px 30px goldenrod', margin: '100px 0px 0px 0px' }}>
            <h4>Total Players: {players.length} </h4>
            <h6>Selceted Players: {names}</h6>
            <h3>Total Budjets: ${totalBudjet}</h3>
        </div>
    );
};

export default SelectedPlayer;