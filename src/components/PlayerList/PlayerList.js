import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const PlayerList = (props) => {
    const { img, name, salary, email } = props.playerData;
    return (
        <div className="player-list-container" style={{ textAlign: 'center', margin: '100px 100px 50px 100px' }} >
            <div class="rounded-3" >
                <div class="col">
                    <div class="card h-100" style={{ borderRadius: '15px', boxShadow: '5px 5px 30px goldenrod' }}>
                        <img src={img} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Player Details</h5>
                            <hr />
                            <h3 class="card-text">{name}</h3>
                            <h6>Email: {email}</h6>
                            <h6 class="card-text">Salary: $ {salary}</h6>
                        </div>
                        <div class="card-footer">
                            <button onClick={() => props.clickHandle(props.playerData)} class="btn btn-primary w-100"><FontAwesomeIcon icon={faCheckCircle} /><strong> Add to Club</strong></button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PlayerList;