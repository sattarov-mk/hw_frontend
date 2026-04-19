const Button = ({ children, onClick, type = 'button' }) => {
  return (
    //
    // type по умолчанию = button.
    // Это важно, потому что обычная кнопка внутри form
    // без type может вести себя как submit.
    //
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
