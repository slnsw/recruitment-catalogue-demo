import Header from '../../components/Header';

import records from '../../data/records.json';

const searchRecords = (query) => {
    if (query.length === 0) {
        return [];
    }
    return records.filter((record) =>
        JSON.stringify(record).toLowerCase().indexOf(query) > -1
    );
};

export default async function Search({ searchParams }) {

  const resolvedSearchParams = await searchParams;
  const { q = '' } = resolvedSearchParams;
  const records = searchRecords(q);

  const renderedRecords = [];
  for (var i = 0; i < records.length; i++) {
                const renderedRecord = (
                    <tr>
                        <td>
                            <h1>{records[i].title}</h1>
                        </td>
                        <td>
                        <a href={"/record/" + records[i].id}>
                            Read more
                        </a>
                        </td>
                        </tr>
                );
        renderedRecords.push(renderedRecord);
            }

    return <>
    <Header />
    <h1>{"Search results for {q}".replace('{q}', q)}</h1>
    <table>
        {
            renderedRecords
        }
        </table>
</>
}