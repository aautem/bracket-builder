import React from 'react'

import MatchupLine from './MatchupLine'

const matchupStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}

const borderStyle = {
  borderRight: '1px solid #aaa',
  height: '6rem',
  marginBottom: '-2.2rem',
  marginTop: '-0.6rem',
}

const Matchup = () => {
  return (
    <div style={matchupStyle}>
      <MatchupLine seed={1} team="Kansas City Chiefs" />
      <div style={borderStyle} />
      <MatchupLine seed={6} team="Cleveland Browns" />
    </div>
  )
}

export default Matchup
