import React from 'react'
import BracketLine from './BracketLine'

export const Primary = () => (
  <BracketLine
    seed={8}
    team="Storybook Tests"
  />
)

const storyDefinition = {
  title: 'BracketLine',
  component: BracketLine,
};

export default storyDefinition
