import PropTypes from 'prop-types'
import React from 'react'

import Matchup from './Matchup'
import mockGames from '../data/mockGames'

// const bracket = {
//   id: '1',
//   bottomGameId: '2',
//   topGameId: '1',
// }

// const tournament = {
//   id: '',
//   brackets: []
// }

const Bracket = ({ topGameId, bottomGameId }) => {
  const topGame = mockGames.find(({ id }) => id === topGameId)
  const bottomGame = mockGames.find(({ id }) => id === bottomGameId)

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ flex: '1 1 auto' }}>
        <Matchup game={topGame} />
        <div style={{ height: '3rem' }} />
        <Matchup game={bottomGame} />
      </div>
      <div style={{ flex: '1 1 auto' }}>
        <Matchup game={mockGames[3]} spacing={3} />
      </div>
    </div>
  )
}

Bracket.propTypes = {
  topGameId: PropTypes.string.isRequired,
  bottomGameId: PropTypes.string.isRequired,
}

export default Bracket
