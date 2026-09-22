import Header from '../components/Header';
import SearchForm from '../components/SearchForm';

export default function Home() {
  return (
    <>
    <Header />
    <p>This is the home page</p>
    <h1>Search catalogue</h1>
    <SearchForm />
    <p><small>eg. "lorem", "ipsum"</small></p>
    </>
  );
}
