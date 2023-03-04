// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, onClickStar} = props
  const {id, title, isStarred, date} = appointmentDetails
  const starImg = isStarred
    ? ' https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  const starClicked = () => {
    onClickStar(id)
  }
  return (
    <li className="appointment-item">
      <div className="header-container">
        <p className="title">{title}</p>
        <button
          className="star-button"
          type="button"
          data-testid="star"
          onClick={starClicked}
        >
          <img src={starImg} className="star" alt="star" />
        </button>
      </div>
      <p className="date">Date: {date}</p>
    </li>
  )
}
export default AppointmentItem
