import FilmCard from '../components/film-card';
import FilmCardList from '../components/film-card-list';
import Footer from '../components/footer';
import GenresList from '../components/genres-list';
import Header from '../components/header';
import ShowMoreButton from '../components/show-more-button';

export default function MainPage() {
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src="img/bg-the-grand-budapest-hotel.jpg"
            alt="The Grand Budapest Hotel"
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <Header />
        <FilmCard />
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList />
          <FilmCardList />
          <ShowMoreButton />
        </section>
        <Footer />
      </div>
    </>
  );
}
