import Logo from './logo';
import UserBlock from './user-block';

export default function Header() {
  return (
    <header className="page-header film-card__head">
      <Logo />
      <UserBlock />
    </header>
  );
}
