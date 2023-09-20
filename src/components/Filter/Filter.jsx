export const Filter = ({ handleChange, value }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" name="filter" value={value} onChange={handleChange} />
    </>
  );
};
