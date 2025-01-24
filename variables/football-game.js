/*
El evento es parte de las Eliminatorias Sudamericanas para la Copa del Mundo.
En un partido celebrado el 22/11/23 a las 20:30, el equipo local Argentina se enfrentó al equipo visitante Brasil. El resultado final fue 1-0,
indicando a Argentina como el equipo ganador.*/

const eventName = 'South American World Cup Qualifiers'

const homeTeam = 'Argentina'
const awayTeam = 'Brazil'

const date = '11/22/23'
const time = '20:30'

const homeTeamScore = 1 
const awayTeamScore = 0

const score = `${homeTeamScore}-${awayTeamScore}`
const winningTeam = homeTeam + awayTeam

console.log(`
    Torneo: ${eventName} (${time})\n
    Equipos: ${homeTeam} VS ${awayTeam}\n 
    Resultado: ${score}
    `)