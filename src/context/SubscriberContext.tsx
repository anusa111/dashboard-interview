import { createContext, useEffect, useState } from "react"
import { ISubscriberContext, ISubscriberList } from "../interface/interface"
import useFetchData from "../hooks/useFetchData"
import { getUserDetail } from "../utils/userDetail"

const defaultValue: ISubscriberContext = {
  search_by_user: "",
  set_search_by_user: () => {},
  itemsPerPage: 10,
  pageCount: null,
  setPageCount: () => {},
  itemOffset: 0,
  setItemOffset: () => {},
  currentItems: null,
  setCurrentItems: () => {},
  loading: false,
  subscriberData: null,
  handlePageClick: () => {},
}

export const SubscribeContext = createContext<ISubscriberContext>(defaultValue)

export const SubscribeContextProvider = ({ children }: any) => {
  const {
    fetchedData: subscriberData,
    loading,
  }: { fetchedData: any; loading: boolean } = useFetchData(
    "/json/subscriptions.json",
  )
  const [search_by_user, set_search_by_user] = useState<any>("vtacp0654e")
  const itemsPerPage: any = 10
  const [pageCount, setPageCount] = useState<any>(null)
  const [itemOffset, setItemOffset] = useState(0)
  const [currentItems, setCurrentItems] = useState<any>(null)

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    const slicedData = subscriberData?.slice(itemOffset, endOffset)
    setCurrentItems(slicedData)
    setPageCount(Math.ceil(subscriberData?.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, subscriberData])

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % subscriberData?.length
    setItemOffset(newOffset)
  }

  useEffect(() => {
    if (search_by_user.length > 0) {
      search_user()
    }
  }, [search_by_user])

  const search_user = async () => {
    const user_search_result = await subscriberData?.filter(
      (subscriber: ISubscriberList) => {
        return getUserDetail(parseInt(subscriber?.user_id)) === search_by_user
      },
    )
    setCurrentItems(user_search_result)
  }

  return (
    <SubscribeContext.Provider
      value={{
        search_by_user,
        set_search_by_user,
        itemsPerPage,
        pageCount,
        setPageCount,
        itemOffset,
        setItemOffset,
        currentItems,
        setCurrentItems,
        loading,
        subscriberData,
        handlePageClick,
      }}
    >
      {children}
    </SubscribeContext.Provider>
  )
}
