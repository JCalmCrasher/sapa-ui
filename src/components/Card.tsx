interface Card {
 title: string;
 description: string;
}
const Card = ({ title, description }: Card) => {
 return (
  <div>
   <h3>{title}</h3>
   <p>{description}</p>
  </div>
 );
};

export { Card };
