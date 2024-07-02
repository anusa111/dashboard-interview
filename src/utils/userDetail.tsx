import users from "../../public/json/users.json"
export const getUserDetail = (id: number) => {
  const SingleUserInfo = users?.filter((user: any) => {
    return user?.id === id
  })
  return SingleUserInfo?.[0]?.username
}
