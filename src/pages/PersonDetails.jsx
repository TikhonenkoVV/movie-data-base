import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetails, getPersonById } from 'services/api';
import { ToastContainer, toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';
import { PersonInfo } from 'components/PersonInfo/PersonInfo';
import { normalizePersonData } from 'services/normalize';
import { Container } from 'components/Container/Container';

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
                setPersonInfo(data);
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
        <section>
            {isLoading && <Loader />}
            <Container>
                {error && <ToastContainer />}
                {!isLoading && (
                    <PersonInfo
                        person={normalizePersonData(personInfo)}
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
