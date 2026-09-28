'use client';

const SearchForm = () => {
    return (
        <form id="search-form" action="/search" method="GET" onSubmit={(e) => {
            console.log(e);
        }}>
            <input type="search" name="q" />
            <a href="#" onClick={(e) => {
                e.preventDefault();
                document.getElementById('search-form').submit();
            }}>submit</a>
            </form>
    );
};
export default SearchForm;
