import "../../styles/header-search.css";
type Props = {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};
export default function HeadrtSearch({ setSearch }: Props) {
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
