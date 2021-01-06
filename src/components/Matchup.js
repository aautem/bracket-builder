import PropTypes from 'prop-types'
import React from 'react'

import MatchupLine from './MatchupLine'
import mockTeams from '../data/mockTeams'

const defaultHeight = 2

const Matchup = ({ game, spacing = 1 }) => {
  const height = spacing * defaultHeight
  const homeTeam = mockTeams.find(({ id }) => id === game.homeId)
  const awayTeam = mockTeams.find(({ id }) => id === game.awayId)

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      <MatchupLine
        seed={game.homeSeed}
        teamName={homeTeam.name}
      />

      <div style={{
        borderRight: '1px solid #aaa',
        height: `${height}rem`,
      }} />

      <MatchupLine
        bottom
        seed={game.awaySeed}
        teamName={awayTeam.name}
      />
    </div>
  )
}

Matchup.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.string.isRequired,
    awayId: PropTypes.string.isRequired,
    awayScore: PropTypes.number,
    awaySeed: PropTypes.number,
    homeId: PropTypes.string.isRequired,
    homeScore: PropTypes.number,
    homeSeed: PropTypes.number,
    isFinal: PropTypes.bool.isRequired,
  }).isRequired,
  spacing: PropTypes.number,
}

export default Matchup
