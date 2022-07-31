import "../../styles/header-search.css";
export default function HeadrtSearch({ setSearch }) {
  return (
    <div className="search">
      <input
        className="search-bar"
        placeholder="Search mail"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
    </div>
  );
}
