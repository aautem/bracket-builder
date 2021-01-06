import PropTypes from 'prop-types'
import React from 'react'

const seedStyle = {
  fontSize: '1rem',
  fontWeight: 'bold',
}

const teamStyle = {
  alignItems: 'flex-start',
  columnGap: '1rem',
  display: 'flex',
  fontSize: '1.5rem',
  justifyContent: 'center',
}

const BracketLine = ({ color, seed, team }) => {
  return (
    <div>
      <div style={teamStyle}>
        {seed && (
          <span style={seedStyle}>
            {seed}
          </span>
        )}

        {team}
      </div>
      <hr />
    </div>
  )
}

BracketLine.propTypes = {
  color: PropTypes.string,
  seed: PropTypes.number,
  team: PropTypes.string.isRequired,
}

export default BracketLine
