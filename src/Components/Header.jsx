import SearchInput from "./SearchInput";
import UserInfo from "./UserInfo";

function Header() {
  return (
    <header className="px-0.5 pt-4 pb-24 text-center sm:px-4 bg-hero-sm-pattern sm:bg-hero-pattern">
      <h1 className="mb-3 font-semibold text-white capitalize font-2xl">
        IP address tracker
      </h1>
      <SearchInput />
      <UserInfo />
    </header>
  );
}

export default Header;
