import React from 'react'
import Card from '../Card/Card'
import { data } from '../../data/data'


const styles = {
    constainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 3
    }
}

const Section = () => {
  return (
    <div style={styles.constainer}>
      {data.map(item => <Card key={item.id} img={item.img} mark={item.mark} model={item.model}/>)}
    </div>
  )
}

export default Section