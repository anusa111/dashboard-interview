import { useContext } from "react"
import { SubscribeContext } from "../../context/SubscriberContext"

const SearchUser = () => {
  const { set_search_by_user } = useContext(SubscribeContext)
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <input
        onChange={(e) => {
          set_search_by_user(e?.target?.value)
        }}
        type="text"
        placeholder="Enter username of the subscriber to search"
        className="search-field"
      />
    </div>
  )
}

export default SearchUser
