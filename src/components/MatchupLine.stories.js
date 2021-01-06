import React from 'react'
import MatchupLine from './MatchupLine'

export const Top = () => (
  <MatchupLine
    seed={8}
    teamName="Storybook Tests"
  />
)

export const Bottom = () => (
  <MatchupLine
    bottom
    seed={8}
    teamName="Storybook Tests"
  />
)

const storyDefinition = {
  title: 'MatchupLine',
  component: MatchupLine,
};

export default storyDefinition
