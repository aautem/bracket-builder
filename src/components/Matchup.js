import React from 'react'

import BracketLine from './BracketLine'

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
      <BracketLine seed={1} team="Kansas City Chiefs" />
      <div style={borderStyle} />
      <BracketLine seed={6} team="Cleveland Browns" />
    </div>
  )
}

export default Matchup
