export default function FilterCategories() {
  return (
    <div className="filter-container">
      <select onChange={() => null}>
        <option value="all">All</option>
        <option value="react">React</option>
        <option value="css">CSS</option>
        <option value="design">Design</option>
        <option value="js">JS</option>
        <option value="frontend">Frontend</option>
      </select>
    </div>
  );
}
