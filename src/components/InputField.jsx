const InputField = (props) => {
  return (
    <div>
      <input
        className="search-bar"
        onChange={props.handleChange}
        type={props.type}
        placeholder={props.placeholder}
        id={props.id}
      />
    </div>
  );
};

export default InputField;
