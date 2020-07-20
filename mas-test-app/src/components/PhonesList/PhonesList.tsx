import React from 'react'

import { Phone } from '../../api/phonesApi'
import { PhoneListItem } from '../PhonesListItem/PhonesListItem'

import styles from './PhonesList.module.css'

interface Props {
  phones: Phone[]
  showPhoneDetails: (id: number) => void
}

export const PhonesList = ({ phones, showPhoneDetails }: Props) => {
  const renderedPhones = phones.map(phone => (
    <li key={phone.id}>
      <PhoneListItem {...phone} showPhoneDetails={showPhoneDetails} />
    </li>
  ))

  return <ul className={styles.phonesList}>{renderedPhones}</ul>
}
