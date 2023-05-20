export default function IconCard(props) {
    const {iconName, iconColor} = props;
   
    return (
        <ion-icon name={iconName} style={{color: iconColor}}></ion-icon>
    );
   }