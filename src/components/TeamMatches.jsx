import React from "react";
import TeamMatchResults from "./TeamMatchResults";

export default function TeamMatches({ name }) {

    function convertDate(dateString) {
        const parts = dateString.split('-');
        return `${parts[2]}-${parts[1]}-${parts[0]}`;
    }


    const matches = {
        "1° Giornata": [
            {
                id: 1,
                homeTeam: 'Wild Wolves',
                awayTeam: 'Potatoes FC',
                date: '05-04-2024',
                homeScore: 2,
                awayScore: 1,
            },
            {
                id: 2,
                homeTeam: 'Inps Calcio',
                awayTeam: 'Sportitalia FC',
                date: '05-04-2024',
                homeScore: 0,
                awayScore: 0,
            },
            {
                id: 3,
                homeTeam: 'Trmo1',
                awayTeam: 'Trmo2',
                date: '05-04-2024',
                homeScore: 1,
                awayScore: 1,
            },
            {
                id: 4,
                homeTeam: 'Trmo3',
                awayTeam: 'Trmo4',
                date: '05-04-2024',
                homeScore: 0,
                awayScore: 2,
            },
            {
                id: 5,
                homeTeam: 'Trmo5',
                awayTeam: 'Trmo6',
                date: '05-04-2024',
                homeScore: 3,
                awayScore: 0,
            }
        ],
        "2° Giornata": [
            {
                id: 6,
                homeTeam: 'Wild Wolves',
                awayTeam: 'Inps Calcio',
                date: '10-04-2024',
                homeScore: 1,
                awayScore: 0,
            },
            {
                id: 7,
                homeTeam: 'Potatoes FC',
                awayTeam: 'Sportitalia FC',
                date: '10-04-2024',
                homeScore: 2,
                awayScore: 2,
            },
            {
                id: 8,
                homeTeam: 'Trmo1',
                awayTeam: 'Trmo3',
                date: '10-04-2024',
                homeScore: 0,
                awayScore: 1,
            },
            {
                id: 9,
                homeTeam: 'Trmo2',
                awayTeam: 'Trmo4',
                date: '10-04-2024',
                homeScore: 2,
                awayScore: 2,
            },
            {
                id: 10,
                homeTeam: 'Trmo5',
                awayTeam: 'Trmo6',
                date: '10-04-2024',
                homeScore: 1,
                awayScore: 0,
            }
        ],
    };

    return (
        <>
            <TeamMatchResults matches={matches} name={name} />
            </>
    )
}