import './card.css'

const Card = ({cardData}) => {
  return (
    <div className='card'>
      <img className='image' src={cardData?.image_url} alt="" />
      <span style={{fontSize:"20px"}}>{cardData?.name}</span>
    </div>
  )
}

export default Card