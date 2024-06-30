import { Link } from "react-router-dom"
import { IButton } from "../../interface/interface"
import "./button.css"

const PrimaryButton = ({ data }: IButton) => {
  return (
    <div className="btn-container">
      <Link to="/subscriber-list" className="link-default-removal">
        <div className="primary-btn">{data?.name}</div>
      </Link>
    </div>
  )
}

export default PrimaryButton
