import axios from 'axios'
import parseLink, { Links } from 'parse-link-header'

export interface Phone {
  price: string
  id: number
  name: string
  number: number
  description: string
  imageUrl: string
}

export interface PhoneDetails {
  id: number
  name: string
  description: string
  open_phones_count: number
}

export interface PhonesResult {
  pageLinks: Links | null
  pageCount: number
  phones: Phone[]
}

const isLastPage = (pageLinks: Links) => {
  return (
    Object.keys(pageLinks).length === 2 && pageLinks.first && pageLinks.prev
  )
}

const getPageCount = (pageLinks: Links) => {
  if (!pageLinks) {
    return 0
  }
  if (isLastPage(pageLinks)) {
    return parseInt(pageLinks.prev._page, 10) + 1
  } else if (pageLinks.last) {
    return parseInt(pageLinks.last._page, 10)
  } else {
    return 0
  }
}

export async function getPhones(
  page = 1
): Promise<PhonesResult> {
  const url = `http://localhost:3000/phones?_page=${page}&_limit=4`
console.log(page);

  try {
    const phonesResponse = await axios.get<Phone[]>(url)
    let pageCount = 1
    const pageLinks = parseLink(phonesResponse.headers.link)

    console.log(pageLinks);
    

    if (pageLinks !== null) {
      pageCount = getPageCount(pageLinks)
    } 

    return {
      pageLinks,
      pageCount,
      phones: phonesResponse.data
    }
  } catch (err) {
    throw err
  }
}

export async function getPhonesDetails() {
  const url = `http://localhost:3000/phones`

  const { data } = await axios.get<PhoneDetails>(url)
  return data
}

export async function getPhone(id: number) {
  const url = `http://localhost:3000/phones/${id}`

  const { data } = await axios.get<Phone>(url)
  return data
}