     import Header from '../../../components/Header';

import records from '../../../data/records.json';

export default async function Record({ params }) {
    const resolvedParams = await params;
    const id = resolvedParams.id;
    var record = null;
    for (var i = 0; i < records.length; i++) {
        if (records[i].id == id) {
            record = records[i];
            break;
        }
    }
    if (record === null) {
        return <p>not found</p>;
    }
    return <>
    <Header />
        <h1>{record.title}</h1>
    </>
}