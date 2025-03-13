import React from 'react'

const Card = (props) => {

    const styles = {
        card: {
          flexGrow: 1,
          border: '1px solid black',
          padding: 5
        }
    }
  return (
    <div style={styles.card}>
        <img src={props.img} alt="" />
        <p>{props.mark}</p>
        <p>{props.model}</p>
    </div>
  )
}

export default Card