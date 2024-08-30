import { useEffect, useState } from 'react';
import { CollectionInfo } from './CollectionInfo/CollectionInfo';
import { CollectionList } from './CollectionList/CollectionList';
import { useParams } from 'react-router-dom';
import { getDetails } from 'common/services/api';
import { normalizeCollection } from 'common/services/normalize/normalizeCollection';
import { normalizeParts } from 'common/services/normalize/normalizeParts';
import { Container } from 'ui/shared/layouts/Container/Container';
import { useSelector } from 'react-redux';
import { selectLang } from 'common/store/selector';

const CollectionDetails = () => {
    const language = useSelector(selectLang);
    const { collectionId } = useParams();

    const [collection, setCollection] = useState(null);
    const [parts, setParts] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        const id = collectionId.split('-')[1];
        getDetails('collection', id, language, '')
            .then(data => {
                setCollection(normalizeCollection(data, language));
                setParts(normalizeParts(data.parts, language));
            })
            .catch(err => {
                setError(err.message);
            })
            .finally(() => {});
    }, [collectionId, language]);

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
            {error && <p>{error}</p>}
        </>
    );
};

export default CollectionDetails;
