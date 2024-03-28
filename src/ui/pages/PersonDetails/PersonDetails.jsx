import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { normalizePersonData } from 'common/services/normalize/normalizePersonData';
import { PersonInfo } from './PersonInfo/PersonInfo';
import { getDetails, getPersonById } from 'common/services/api';
import { Loader } from 'ui/shared/components/Loader';
import { Container } from 'ui/shared/layouts/Container/Container';

const PersonDetails = () => {
    const { personId } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [personInfo, setPersonInfo] = useState({});
    const [personCredits, setPersonCredits] = useState([]);
    const [crew, setCrew] = useState([]);
    const [totalCredits, setTotalCredits] = useState(0);

    useEffect(() => {
        setIsLoading(true);
        getPersonById(personId)
            .then(data => {
                setPersonInfo(normalizePersonData(data));
            })
            .catch(err => {
                setError(err.message);
                toast(err.message);
            })
            .finally(() => {
                getDetails('person', personId, '/combined_credits')
                    .then(data => {
                        setPersonCredits(data.cast);
                        setCrew(data.crew);
                        const length = data?.cast?.length + data?.crew?.length;
                        setTotalCredits(length);
                    })
                    .catch(err => {
                        setError(err.message);
                        toast(err.message);
                    });
                setIsLoading(false);
            });
    }, [personId]);

    return (
        <section className="padding-top">
            {isLoading && <Loader />}
            <Container>
                {error && <ToastContainer />}
                {!isLoading && (
                    <PersonInfo
                        person={personInfo}
                        acting={personCredits}
                        crew={crew}
                        total={totalCredits}
                    />
                )}
            </Container>
        </section>
    );
};

export default PersonDetails;
