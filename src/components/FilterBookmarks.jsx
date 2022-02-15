export default function FilterBookmarks({ changeHandler }) {
  return (
    <select onChange={changeHandler} className="btn">
      <option value="all">Entries</option>
      <option value="react">React</option>
      <option value="css">CSS</option>
      <option value="design">Design</option>
      <option value="js">JS</option>
      <option value="frontend">Frontend</option>
    </select>
  );
}
