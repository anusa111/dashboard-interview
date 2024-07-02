import { useContext } from "react"
import { Link } from "react-router-dom"
import dayjs from "dayjs"

//utils
import { getUserDetail } from "../../utils/userDetail"

//context
import { SubscribeContext } from "../../context/SubscriberContext"

//interface
import { ISubscriberList } from "../../interface/interface"

const SubscriberTable = () => {
  const { currentItems } = useContext(SubscribeContext)

  return (
    <div>
      <div className="flex-center-layout" style={{ height: "70vh" }}>
        <table className="" border={1}>
          <thead>
            <div>
              <tr>
                <th>Subscription Id</th>
                <th>User name</th>
                <th>Package Name</th>
                <th>Expiration Date</th>
              </tr>
            </div>
          </thead>

          <tbody>
            {currentItems?.map((subscriber: ISubscriberList) => {
              const {
                id,
                user_id,
                package: package_name,
                expires_on,
              } = subscriber
              let user_name = getUserDetail(parseInt(user_id))

              return (
                <div key={id}>
                  <Link to={`/user/${user_id}`} className="">
                    <tr>
                      <td>{id}</td>
                      <td>{user_name ?? "---"}</td>
                      <td>{package_name}</td>
                      <td>{dayjs(expires_on).format("MMM DD, YYYY")}</td>
                    </tr>
                  </Link>
                </div>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SubscriberTable
