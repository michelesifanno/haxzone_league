import React from "react";
import MatchCalendar from "./MatchCalendar";

export default function Calendar() {

    function convertDate(dateString) {
        const parts = dateString.split('-');
        return `${parts[2]}-${parts[1]}-${parts[0]}`;
    }

    const matchCalendar = {
        "1° Giornata": [
            { id: 1, homeTeam: 'Wild Wolves', awayTeam: 'Potatoes FC', date: '05-04-2024' },
            { id: 2, homeTeam: 'Inps Calcio', awayTeam: 'Sportitalia FC', date: '05-04-2024' },
            { id: 3, homeTeam: 'Trmo1', awayTeam: 'Trmo2', date: '05-04-2024' },
            { id: 4, homeTeam: 'Trmo3', awayTeam: 'Trmo4', date: '05-04-2024' },
            { id: 5, homeTeam: 'Trmo5', awayTeam: 'Trmo6', date: '05-04-2024' }
        ],
        "2° Giornata": [
            { id: 6, homeTeam: 'Wild Wolves', awayTeam: 'Inps Calcio', date: '10-04-2024' },
            { id: 7, homeTeam: 'Potatoes FC', awayTeam: 'Sportitalia FC', date: '10-04-2024' },
            { id: 8, homeTeam: 'Trmo1', awayTeam: 'Trmo3', date: '10-04-2024' },
            { id: 9, homeTeam: 'Trmo2', awayTeam: 'Trmo4', date: '10-04-2024' },
            { id: 10, homeTeam: 'Trmo5', awayTeam: 'Trmo6', date: '10-04-2024' }
        ],
        "3° Giornata": [
            { id: 11, homeTeam: 'Wild Wolves', awayTeam: 'Trmo1', date: '01-05-2024' },
            { id: 12, homeTeam: 'Potatoes FC', awayTeam: 'Trmo2', date: '01-05-2024' },
            { id: 13, homeTeam: 'Inps Calcio', awayTeam: 'Trmo3', date: '01-05-2024' },
            { id: 14, homeTeam: 'Sportitalia FC', awayTeam: 'Trmo4', date: '01-05-2024' },
            { id: 15, homeTeam: 'Trmo5', awayTeam: 'Trmo6', date: '01-05-2024' }
        ],
        "4° Giornata": [
            { id: 16, homeTeam: 'Wild Wolves', awayTeam: 'Trmo2', date: '06-05-2024' },
            { id: 17, homeTeam: 'Potatoes FC', awayTeam: 'Trmo3', date: '06-05-2024' },
            { id: 18, homeTeam: 'Inps Calcio', awayTeam: 'Trmo4', date: '06-05-2024' },
            { id: 19, homeTeam: 'Sportitalia FC', awayTeam: 'Trmo5', date: '06-05-2024' },
            { id: 20, homeTeam: 'Trmo6', awayTeam: 'Trmo1', date: '06-05-2024' }
        ],
        "5° Giornata": [
            { id: 21, homeTeam: 'Wild Wolves', awayTeam: 'Trmo3', date: '11-05-2024' },
            { id: 22, homeTeam: 'Potatoes FC', awayTeam: 'Trmo4', date: '11-05-2024' },
            { id: 23, homeTeam: 'Inps Calcio', awayTeam: 'Trmo5', date: '11-05-2024' },
            { id: 24, homeTeam: 'Sportitalia FC', awayTeam: 'Trmo6', date: '11-05-2024' },
            { id: 25, homeTeam: 'Trmo1', awayTeam: 'Wild Wolves', date: '11-05-2024' }
        ]
    };

    const matchCalendarFormatted = Object.fromEntries(
        Object.entries(matchCalendar).map(([key, value]) => [
            key,
            value.map(match => ({ ...match, date: convertDate(match.date) }))
        ])
    );

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
            <MatchCalendar matchCalendar={matchCalendarFormatted} matches={matches} />
            </>
    )
}