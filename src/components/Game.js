import Player from "./Player"
export default function Game({spacing}){

    return (
        <g transform={`translate(0, ${spacing.gameTop})`}>
            <Player spacing={{...spacing, playerSpace:0}}/>
            <Player spacing={spacing}/>
        </g>
    )
}