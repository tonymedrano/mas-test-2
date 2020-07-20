import React, { MouseEvent } from 'react'

import { Phone } from '../../api/phonesApi'
import { shorten } from 'utils/stringUtils'

import styles from './PhonesListItem.module.css'

type Props = Phone & {
  showPhoneDetails: (id: number) => void
}

export const PhoneListItem = ({
  id,
  name,
  description = '',
  showPhoneDetails
}: Props) => {
  const onPhoneClicked = (e: MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    showPhoneDetails(id)
  }

  return (
    <div className={styles.phone}>
      <div className="phone__description">
        <a href="#comments" onClick={onPhoneClicked}>
          <span className={styles.number}>#{id}</span>
          <span className={styles.name}>{name}</span>
        </a>
        <p className="phone__summary">{shorten(description)}</p>
      </div>
    </div>
  )
}
