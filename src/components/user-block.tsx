import { Link } from 'react-router-dom';
import { makeUser } from '../mocks/mocks';
import { AppRoute } from '../const';

type TUserBlockProps = {
  isAuthorization: boolean;
};

export default function UserBlock({ isAuthorization }: TUserBlockProps) {
  const user = makeUser();

  return (
    <ul className="user-block">
      {isAuthorization ? (
        <>
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img
                src={user.avatarUrl}
                alt={`${user.name} avatar`}
                width={63}
                height={63}
              />
            </div>
          </li>
          <li className="user-block__item">
            <a className="user-block__link">Sign out</a>
          </li>
        </>
      ) : (
        <div className="user-block">
          <Link to={AppRoute.SIGNIN} className="user-block__link">
            Sign in
          </Link>
        </div>
      )}
    </ul>
  );
}
