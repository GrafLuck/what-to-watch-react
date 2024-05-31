import { Link, useNavigate } from 'react-router-dom';
import { makeUser } from '../mocks/mocks';
import { AppRoute } from '../const';

type TUserBlockProps = {
  isAuthorization: boolean;
};

export default function UserBlock({ isAuthorization }: TUserBlockProps) {
  const navigate = useNavigate();
  const user = makeUser();

  const handleUserAvatarClick = () => {
    navigate(AppRoute.MYLIST);
  };

  const handleSignOutButtonClick = () => {
    isAuthorization = false; //
  };

  return (
    <ul className="user-block">
      {isAuthorization ? (
        <>
          <li className="user-block__item">
            <div className="user-block__avatar" onClick={handleUserAvatarClick}>
              <img
                src={user.avatarUrl}
                alt={`${user.name} avatar`}
                width={63}
                height={63}
              />
            </div>
          </li>
          <li className="user-block__item">
            <Link
              to={AppRoute.MAIN}
              className="user-block__link"
              onClick={handleSignOutButtonClick}
            >
              Sign out
            </Link>
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
