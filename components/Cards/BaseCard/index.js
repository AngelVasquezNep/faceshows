import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import S from './index.module.css'

const BaseCard = ({ children, className, border, rounded }) => (
  <div className={classnames(S['BaseCard'], className, S[border], S[rounded])}>
    {children}
  </div>
)

BaseCard.defaultProps = {
  border: 'bordered',
  rounded: 'rounded'
}

BaseCard.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  border: PropTypes.oneOf(['bordered']),
  rounded: PropTypes.oneOf(['rounded'])
}

export default BaseCard
