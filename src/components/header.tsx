import Breadcrumbs from './breadcrumbs';
import Logo from './logo';
import UserBlock from './user-block';

type TBreadcrumbsProps = {
  isDisplayedBreadcrumbs: boolean;
};

export default function Header({ isDisplayedBreadcrumbs }: TBreadcrumbsProps) {
  return (
    <header className="page-header film-card__head">
      <Logo />
      {isDisplayedBreadcrumbs ? <Breadcrumbs /> : ''}
      <UserBlock />
    </header>
  );
}
