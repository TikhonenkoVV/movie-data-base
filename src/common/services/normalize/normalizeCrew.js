export const normalizeCrew = crew => {
    const director = [];
    const normalList = crew.map(
        ({
            id,
            credit_id,
            department,
            job,
            jobs,
            name,
            original_name,
            profile_path,
        }) => {
            const personId = jobs ? jobs[0].credit_id : credit_id;
            const personName = name ? name : original_name;
            const person_job = jobs ? jobs[0].job : job;
            if (
                department.toLowerCase() === 'directing' &&
                person_job.toLowerCase() === 'director'
            )
                director.push({
                    id,
                    credit_id: personId,
                    personName,
                    profile_path,
                    job: person_job,
                });
            return {
                id,
                credit_id: personId,
                department,
                job: person_job,
                personName,
                profile_path,
            };
        }
    );
    const controlList = [];
    normalList.map(el => {
        if (!controlList.includes(el.department.toLowerCase())) {
            return controlList.push(el.department.toLowerCase());
        } else return null;
    });

    const list = [];
    controlList.map(department => {
        const arr = [];
        normalList.map(el => {
            if (el.department.toLowerCase() === department) {
                const person = arr.find(element => element.id === el.id);
                if (person) {
                    return (person.job = `${person.job}, ${el.job}`);
                } else return arr.push(el);
            } else return null;
        });
        return list.push({ [department]: [...arr] });
    });

    return { crew: list, director: director };
};
