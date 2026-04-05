import { SearchIcon } from "../icon/Icon";

const SideBar: React.FC = () => {
    return (
      <div>
        <SearchIcon color="none" />{" "}
        <input type="fill" placeholder="Seacrh Components..." />
        <h4>COMPONENTS</h4>
        <ul>
          <li>Navbar</li>
          <li>Hero</li>
          <li>Features</li>
          <li>CTA</li>
          <li>Footer</li>
        </ul>
        <p>Click a component to edit its properties</p>
      </div>
    );
};
export default SideBar;