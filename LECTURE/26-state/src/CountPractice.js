import React, { useState } from 'react'

const CountPractice = (props) => {
    const [number, setnumber] = usestate(0);
    const onClickIncrease = () => {
        setnumber(number+2);
    }
  return (
    <div>CountPractice</div>
  )
}

export default CountPractice