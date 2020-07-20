import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import classnames from 'classnames'

import { insertMentionLinks } from 'utils/stringUtils'
import { getPhone, Phone } from '../../api/phonesApi'

import styles from './PhoneDetailsPage.module.css'
import './PhoneDetailsPage.css'

interface IDProps {
  id: number
  showPhonesList: () => void
}

export const PhoneDetailsPage = ({
  id,
  showPhonesList
}: IDProps) => {
  const [phone, setPhone] = useState<Phone | null>(null)

  useEffect(() => {
    async function fetchPhone() {
        const phone = await getPhone(id)
        setPhone(phone)
  }

    fetchPhone()
  }, [id])

  let content

  const backToPhoneListButton = (
    <button className="pure-button" onClick={showPhonesList}>
      Back to Phones List
    </button>
  )

  if (phone === null) {
    content = (
      <div className="phone-detail--loading">
        {backToPhoneListButton}
        <p>Loading phone #{id}...</p>
      </div>
    )
  } else {

    content = (
      <div className={classnames('phoneDetailsPage', styles.phoneDetailsPage)}>
        {backToPhoneListButton}
        <h1 className="phone-detail__name">{phone.name}</h1>
        <hr className={styles.divider} />
        <img src={phone.imageUrl} alt={phone.name} />
        <div className={styles.summary}>
          <ReactMarkdown
            className={'testing'}
            source={insertMentionLinks(phone.description)}
          />
          <p>Price €{phone.price}</p>
        </div>
        <hr className={styles.divider} />
      </div>
    )
  }

  return <div>{content}</div>
}
