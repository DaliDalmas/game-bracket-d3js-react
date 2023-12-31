import './Player.css'
export default function Player({spacing}){
    const colors = {
        primary: '#c4c4c4',
        secondary: '#ef06a1',
       
    }
    const params = {
        playerFontSize:15,
        scoreFontSize:15
    }
    return (
        <g transform={`translate(${0},${spacing.playerSpace})`}>
            <g>
                <rect
                    x={0}
                    y={0}
                    height={spacing.playerHeight}
                    width={spacing.playerWidth}
                    fill={colors.primary}>
                </rect>
                <text
                    x={spacing.playerHeight+8}
                    y="19"
                    fontFamily="Verdana"
                    fontSize={params.playerFontSize}
                    fill="black"
                    >
                        Kimanje Patrick
                </text>
                <image
                    href="https://picsum.photos/200"
                    height={spacing.playerHeight-4}
                    width={spacing.playerHeight-4}
                    clipPath="inset(0% round 15px)"
                    transform='translate(4,2)'
                    />
            </g>
            <g>
                <rect
                    x={spacing.playerWidth+spacing.scoreSpace}
                    y={0}
                    height={spacing.playerHeight}
                    width={spacing.playerHeight}
                    fill={colors.secondary}
                    stroke={colors.primary}>
                </rect>
                <text
                    x={spacing.playerWidth+spacing.scoreSpace+2}
                    y="19"
                    fontFamily="Verdana"
                    fontSize={params.scoreFontSize}
                    fill="white">
                        10
                </text>
            </g>

        </g>
    )
}