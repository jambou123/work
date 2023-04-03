import React from 'react';

const Card = ({country}) => {
    return (
        <div>
            <li className="card">
                <img src={country.flags.svg} alt={"drapeau"+country.translations.fra.common}/>
                <div className="infos">
                    <h2> {country.translations.fra.common}</h2>
                    <h5> {country.capital}</h5>
                    <p>Pop. {country.population.toLocaleString()}</p>
                </div>
            </li>
        </div>
    );
};

export default Card;