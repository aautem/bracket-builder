import PropTypes from 'prop-types'
import React from 'react'

const MatchupLine = ({ bottom, seed, teamName }) => {
  return (
    <div style={{
      borderBottom: '0.1rem solid #aaa',
      borderRight: bottom ? '0.1rem solid #aaa' : 'none',
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
    }}>
      {seed && (
        <span style={{
          fontSize: '1rem',
          fontWeight: 'bold',
        }}>
          {seed}
        </span>
      )}

      <span style={{
        display: 'flex',
        fontSize: '1.5rem',
        justifyContent: 'center',
      }}>
        {teamName}
      </span>
    </div>
  )
}

MatchupLine.propTypes = {
  bottom: PropTypes.bool,
  seed: PropTypes.number,
  teamName: PropTypes.string.isRequired,
}

export default MatchupLine
