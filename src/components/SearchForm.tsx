'use client';

const SearchForm = () => {
    return (
        <form action="/search" method="GET" onSubmit={(e) => {
            console.log(e);
        }}>
            <input type="search" name="q" />
            <input type="submit" />
            </form>
    );
};
export default SearchForm;