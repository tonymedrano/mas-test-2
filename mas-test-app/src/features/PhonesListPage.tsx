import React, { useState, useEffect } from 'react'

import { getPhones, getPhonesDetails, PhonesResult } from '../api/phonesApi'

import { PhonesHeader } from '../components/PhonesHeader/PhonesHeader'
import { PhonesList } from '../components/PhonesList/PhonesList'
import { PhonePagination, OnPageChangeCallback } from '../components/PhonesPagination/PhonesPagination'

interface PLProps {
  page: number
  setJumpToPage: (page: number) => void
  showPhoneDetails: (id: number) => void
}

export const PhonesListPage = ({
  page = 1,
  setJumpToPage,
  showPhoneDetails
}: PLProps) => {
  const [phonesResult, setPhones] = useState<PhonesResult>({
    pageLinks: null,
    pageCount: 1,
    phones: []
  })
  const [numPhones, setNumPhones] = useState<number>(-1)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [phonesError, setPhonesError] = useState<Error | null>(null)

  const { phones, pageCount } = phonesResult

  useEffect(() => {
    async function fetchEverything() {
      async function fetchPhones() {
        const phonesResult = await getPhones(page)
        setPhones(phonesResult)
      }

      async function fetchPhoneCount() {
        const phoneDetails = await getPhonesDetails()
        setNumPhones(phoneDetails.open_phones_count)
      }

      try {
        await Promise.all([fetchPhones(), fetchPhoneCount()])
        setPhonesError(null)
      } catch (err) {
        console.error(err)
        setPhonesError(err)
      } finally {
        setIsLoading(false)
      }
    }

    setIsLoading(true)

    fetchEverything()
  }, [page])

  if (phonesError) {
    return (
      <div>
        <h1>Something went wrong...</h1>
        <div>{phonesError.toString()}</div>
      </div>
    )
  }

  const currentPage = Math.min(pageCount, Math.max(page, 1)) - 1

  let renderedList = isLoading ? (
    <h3>Loading phones...</h3>
  ) : (
    <PhonesList phones={phones} showPhoneDetails={showPhoneDetails} />
  )

  const onPageChanged: OnPageChangeCallback = selectedItem => {
    const newPage = selectedItem.selected + 1
    setJumpToPage(newPage)
  }

  return (
    <div id="phone-list-page">
      <PhonesHeader openPhonesCount={numPhones} />
      {renderedList}
      <PhonePagination
        currentPage={currentPage}
        pageCount={pageCount}
        onPageChange={onPageChanged}
      />
    </div>
  )
}
