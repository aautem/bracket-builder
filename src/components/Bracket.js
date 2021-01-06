import React from 'react'

import Matchup from './Matchup'

const team = {
  id: '1',
  colors: ['red', 'yellow', 'white'],
  name: 'Kansas City Chiefs',
}

const game = {
  awayId: '2',
  awayScore: 28,
  homeId: '1',
  homeScore: 42,
  id: '1',
  isFinal: false,
}

const bracket = {
  id: '1',
  bottomGameId: '2',
  topGameId: '1',
}

const tournament = {
  id: '',
  brackets: []
}

const Bracket = () => {
  // Find games by `id`
  const topGame = { ...game }
  const bottomGame = { ...game }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ flex: '1 1 auto' }}>
        <Matchup />
        <div style={{ height: '3rem' }} />
        <Matchup />
      </div>
      <div style={{ flex: '1 1 auto' }}>
        <Matchup spacing={3} />
      </div>
    </div>
  )
}

export default Bracket
