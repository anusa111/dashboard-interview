import { Link, useParams } from "react-router-dom"

//hooks
import useFetchData from "../../hooks/useFetchData"

//interface
import { IUser } from "../../interface/interface"

//css
import "./userDetail.css"

//components
import ComponentHeader from "../../components/ComponnentHeader/ComponentHeader"
import { FaArrowLeftLong } from "react-icons/fa6"
import { useEffect, useRef } from "react"
import Lottie from "lottie-web"
import not_available from "../../../public/json/animation-json/not_available.json"
import PrimaryButton from "../../components/Button/PrimaryButton"

const UserDetail = () => {
  const { user_id }: any = useParams()

  const {
    fetchedData: userList,
    loading,
  }: { fetchedData: any; loading: boolean } = useFetchData("/json/users.json")

  const user = useRef(null)

  const user_detail = userList?.filter((user: IUser) => {
    return user?.id === parseInt(user_id)
  })

  useEffect(() => {
    if (user.current) {
      const animation = Lottie.loadAnimation({
        container: user.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: not_available,
      })

      return () => {
        animation.destroy()
      }
    }
  }, [userList])

  if (loading) {
    return <div>Loading</div>
  } else if (userList) {
    return (
      <div className="flex-col-layout">
        <ComponentHeader
          data={{
            title: "User Detail",
          }}
        />
        <Link
          to="/subscriber-list"
          className="flex-row-layout link-default-removal back-to-subscriber"
        >
          <div
            style={{
              marginTop: "3px",
            }}
          >
            <FaArrowLeftLong />
          </div>
          <div>Back To Subscriber List</div>
        </Link>

        <div className="margin-bottom">
          {user_detail?.length > 0 ? (
            <div>
              {user_detail?.map((user: IUser) => {
                const {
                  id,
                  active,
                  address,
                  country,
                  email,
                  first_name,
                  join_date,
                  last_name,
                  middle_name,
                  password,
                  username,
                } = user
                return (
                  <div key={id.toLocaleString()}>
                    <div id="container">
                      <div className="">
                        <img
                          src="/images/user.jpeg"
                          alt=""
                          style={{
                            height: "60vh",
                            width: "100%",
                            objectFit: "cover",
                            borderRadius: "8px",
                          }}
                        />
                      </div>
                      <div className=" flex-col-layout">
                        <div className="flex-row-layout">
                          <div>Name :</div>
                          <div>
                            {first_name}
                            {middle_name}
                            {last_name}
                          </div>
                        </div>

                        <div className="flex-row-layout">
                          <div>Username :</div>
                          <div>{username}</div>
                        </div>

                        <div className="flex-row-layout">
                          <div>Active:</div>
                          <div>{active}</div>
                        </div>

                        <div className="flex-row-layout">
                          <div>Address :</div>
                          <div>
                            <div>{address}</div>
                          </div>
                        </div>

                        <div className="flex-row-layout">
                          <div>Country :</div>
                          <div>{country}</div>
                        </div>

                        <div className="flex-row-layout">
                          <div>Email :</div>
                          <div>{email}</div>
                        </div>

                        <div className="flex-row-layout">
                          <div>Join Date :</div>
                          <div>{join_date}</div>
                        </div>

                        <div className="flex-row-layout">
                          <div>Password :</div>
                          <div>{password}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="flex-center-layout">
              <div className="flex-col-layout">
                <div ref={user}></div>
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <PrimaryButton
                    data={{
                      name: "Go To Subscriber List",
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  } else {
    return <div>Sorry!! Something went wrong</div>
  }
}

export default UserDetail
