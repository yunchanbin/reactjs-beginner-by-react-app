function SearchInput({ value, onChange }) {
  return (
    <input
      value={value}
      onChange={onChange}
      type="text"
      placeholder="Searc here..."
    ></input>
  );
}

export default SearchInput;
