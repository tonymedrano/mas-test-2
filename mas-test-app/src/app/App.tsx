import React, { useState } from 'react'
import './App.css'

import { PhonesListPage } from '../features/PhonesListPage'
import { PhoneDetailsPage } from '../features/PhoneDetailsPage/PhoneDetailsPage'

type CurrentDisplay =
  | {
      type: 'phones'
    }
  | {
      type: 'detail'
      id: number
    }

const App: React.FC = () => {
  const [page, setPage] = useState(1)
  const [currentDisplay, setCurrentDisplay] = useState<CurrentDisplay>({
    type: 'phones'
  })


  const setJumpToPage = (page: number) => {
    setPage(page)
  }

  const showPhonesList = () => {
    setCurrentDisplay({ type: 'phones' })
  }

  const showPhoneDetails = (id: number) => {
    setCurrentDisplay({ type: 'detail', id })
  }

  let content

  if (currentDisplay.type === 'phones') {
    content = (
      <React.Fragment>
        <PhonesListPage
          page={page}
          setJumpToPage={setJumpToPage}
          showPhoneDetails={showPhoneDetails}
        />
      </React.Fragment>
    )
  } else {
    const { id } = currentDisplay
    const key = `${id}`
    content = (
      <PhoneDetailsPage
        key={key}
        id={id}
        showPhonesList={showPhonesList}
      />
    )
  }

  return <div className="App">{content}</div>
}

export default App
