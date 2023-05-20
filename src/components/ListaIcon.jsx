import IconCard from './IconCard';

export default function ListaIcon(props) {
    const {selected} = props;
   
    return (
    <>
    {selected.map((item, index) => (
    <IconCard key={index} iconName={item.iconName} iconColor={item.iconColor} />
    ))}
    </>
    );
   }