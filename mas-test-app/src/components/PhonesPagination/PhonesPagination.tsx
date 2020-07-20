import React from 'react'
import classnames from 'classnames'
import Paginate, { ReactPaginateProps } from 'react-paginate'

import styles from './PhonesPagination.module.css'
import './PhonesPagination.css'

export type OnPageChangeCallback = ReactPaginateProps['onPageChange']

interface Props {
  currentPage: number
  pageCount: number
  onPageChange?: OnPageChangeCallback
}

export const PhonePagination = ({
  currentPage,
  pageCount,
  onPageChange
}: Props) => {
  return (
    <div className={classnames('phonesPagination', styles.pagination)}>
      <Paginate
        forcePage={currentPage}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        onPageChange={onPageChange}
        nextLabel="&rarr;"
        previousLabel="&larr;"
      />
    </div>
  )
}
