import React from 'react'
import styles from './PeopleList.module.css'
import { PropTypes } from 'prop-types';

export default function PeopleList({people}) {
  return (
    <ul className={styles.list_container}>
          {people.map(({ name, img, id }) => {
            return (
              <li className={styles.list_item} key={id}>
                <a href='#'>
                    <img className={styles.person_photo} src={img} alt="" />
                    <p>{name}</p>
                </a>
              </li>
            );
          })}
        </ul>
  )
}

PeopleList.propTypes = {
  people: PropTypes.array
}