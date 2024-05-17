import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const searchValue = useSelector(state => state.filters.name);
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.wrapper}>
      <p>Find contacts by name</p>
      <input
        className={css.inputField}
        type="text"
        value={searchValue}
        onChange={handleChange}
      />
    </div>
  );
}
