// @flow
import React from 'react'
import styles from './Media.css'

export default (props: Object) => (
  <li className={styles.li}>
    { (/\.mov$/i).test(props.path)
      ? <video controls className={styles.vid} src={props.path} />
      : <img className={styles.img} src={props.path} alt="" />
    }
  </li>
)
