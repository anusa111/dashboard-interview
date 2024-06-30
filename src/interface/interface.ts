export interface ISubscriberList {
  id: string
  user_id: string
  package: string
  expires_on: string
}

export interface ISubscriberCard {
  subscriber: ISubscriberList
}

export interface IUser {
  id: Number
  first_name: string
  middle_name: string
  last_name: string
  username: string
  email: string
  password: string
  active: string
  address: string
  country: string
  join_date: string
}

export interface IUserCard {
  user: IUser
}

export interface IComponentHeader {
  data: {
    title: string
  }
}

export interface IButton {
  data: {
    name: string
  }
}
