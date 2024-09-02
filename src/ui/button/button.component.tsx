import styles from './button.module.scss';

type ButtonType = 'button' | 'submit' | 'reset';
interface ButtonProps {
  onClick: () => void;
  text: string;
  type?: ButtonType;
}

export const Button = ({ text, type = 'button', onClick }: ButtonProps) => (
  <button
    // eslint-disable-next-line react/button-has-type
    type={type}
    onClick={onClick}
    className={styles.first}
  >
    <h6>{text}</h6>
  </button>
);
