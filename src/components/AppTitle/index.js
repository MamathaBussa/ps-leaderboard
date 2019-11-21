import React from 'react'
import './styles.sass'

const AppTitle = ({componentData}) => (
  <div className="AppTitle">
    <img
      src={componentData.logoImg}
      alt="Battle Ground"
    />
  </div>
)

export default AppTitle
