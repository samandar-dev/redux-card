import { useSelector } from 'react-redux';
import classes from './CartButton.module.css';

const CartButton = (props) => {

  const count = useSelector(state => state.cart.totalQuantity)

  return (
    <button className={classes.button} onClick={() => props.setModal(true)}>
      <span>My Cart</span>
      <span className={classes.badge}>{count}</span>
    </button>
  );
};

export default CartButton;
