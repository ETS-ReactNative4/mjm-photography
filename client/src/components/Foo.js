import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Foo extends Component {
  render() {
    return (
      <div>CONTENT</div>
    )
  }
}

Foo.propTypes = {
  prop: PropTypes.array,
}

export default Foo;