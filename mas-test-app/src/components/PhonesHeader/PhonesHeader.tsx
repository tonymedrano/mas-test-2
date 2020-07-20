import React from 'react'

type HeaderProps = {
  openPhonesCount: number
}

export function PhonesHeader({
  openPhonesCount = 1,
}: HeaderProps) {
  if (openPhonesCount === 1) {
    return (
      <h1>
        Phones List
      </h1>
    )
  } else {
    const pluralizedPhone = openPhonesCount === 1 ? 'phone' : 'phones'
    return (
      <h1>
        <span className="header__openPhones">{openPhonesCount}</span> available{' '}
        {pluralizedPhone}
      </h1>
    )
  }
}
