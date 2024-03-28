import { useEffect, useState } from 'react';
import { CollectionInfo } from './CollectionInfo/CollectionInfo';
import { CollectionList } from './CollectionList/CollectionList';
import { useParams } from 'react-router-dom';
import { getDetails } from 'common/services/api';
import { normalizeCollection } from 'common/services/normalize/normalizeCollection';
import { normalizeParts } from 'common/services/normalize/normalizeParts';
import { Container } from 'ui/shared/layouts/Container/Container';

const CollectionDetails = () => {
    const { collectionId } = useParams();

    const [first, setFirst] = useState(true);
    const [collection, setCollection] = useState(null);
    const [parts, setParts] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        if (!first) return;
        setFirst(false);
        const id = collectionId.split('-')[1];
        getDetails('collection', id, '')
            .then(data => {
                setCollection(normalizeCollection(data));
                setParts(normalizeParts(data.parts));
            })
            .catch(err => {
                setError(err.message);
            })
            .finally(() => {});
    }, [first, collectionId]);

    return (
        <>
            {collection && (
                <section>
                    <Container>
                        <CollectionInfo collection={collection} />
                    </Container>
                </section>
            )}
            <section>
                <Container>
                    <CollectionList parts={parts} />
                </Container>
            </section>
            {error && console.log(error)}
        </>
    );
};

export default CollectionDetails;
