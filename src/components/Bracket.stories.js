import React from 'react'
import Bracket from './Bracket'

export const Primary = () => (
  <Bracket
    topGameId="1"
    bottomGameId="2"
  />
)

const storyDefinition = {
  component: Bracket,
  title: 'Bracket',
};

export default storyDefinition
