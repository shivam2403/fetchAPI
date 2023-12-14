import Card from '../Card/Card';
import './cards.css';

const Cards = ({ data }) => {
  return (
    <div className='cards'>
      {data && data.map((item) => (
        <Card key={item.id} cardData={item} />
      ))}
    </div>
  );
};

export default Cards;
