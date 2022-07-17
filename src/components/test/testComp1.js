import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { increment, decrement } from '../../actions'
import { bindActionCreators } from 'redux'
import { INCREMENT } from '../../constants'

import Button from '@mui/material/Button'

const TestComponent = ({
  value,
  from,
  action,
  actions: {
    increment,
    decrement
  }
}) => {
  return (
    <div>
      <h4>Data from component</h4>

      <p>Data: {value}</p>

      <Button variant="contained" onClick={() => increment()}>Increment</Button>
      <Button variant="contained" onClick={() => decrement()}>Decrement</Button>
    </div>
  )
}

// export default TestComponent

export default connect(
  state => state,
  dispatch => ({ actions: bindActionCreators({ increment, decrement }, dispatch) })
)(TestComponent)
