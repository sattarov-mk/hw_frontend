import './Card.css';

const Card = ({ children, className = '' }) => {
  return (
    //
    // Компонент-обёртка для переиспользуемого оформления.
    // Он объединяет переданный className с базовым классом card.
    //
    <div className={`${className} card`.trim()}>{children}</div>
  );
};

export default Card;
