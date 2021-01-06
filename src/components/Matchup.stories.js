import React from 'react'
import Matchup from './Matchup'

export const Primary = () => (
  <Matchup
    game={{
      id: '1',
      awayId: '2',
      awayScore: 28,
      awaySeed: 8,
      homeId: '1',
      homeScore: 42,
      homeSeed: 1,
      isFinal: false,
    }}
  />
)

const storyDefinition = {
  component: Matchup,
  title: 'Matchup',
};

export default storyDefinition
