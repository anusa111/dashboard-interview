import { useContext } from "react"

//components
import ComponentHeader from "../../components/ComponnentHeader/ComponentHeader"
import SubscriberPagination from "./SubscriberPagination"
import SubscriberTable from "./SubscriberTable"

//css
import "./subscriber.css"

//context
import { SubscribeContext } from "../../context/SubscriberContext"

//utils
import SearchUser from "./SearchUser"

const Subscriber = () => {
  const { subscriberData, loading } = useContext(SubscribeContext)

  if (loading) {
    return <div className="flex-center-layout">Loading</div>
  } else if (subscriberData) {
    return (
      <div className="flex-col-layout">
        <ComponentHeader
          data={{
            title: "Subscriber List",
          }}
        />
        <SearchUser />
        <SubscriberTable />
        <SubscriberPagination />
      </div>
    )
  } else {
    return <div>Sorry !! Something went wrong</div>
  }
}

export default Subscriber
