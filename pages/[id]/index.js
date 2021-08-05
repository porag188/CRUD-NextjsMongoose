import fetch from 'isomorphic-unfetch';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Confirm, Button, Loader } from 'semantic-ui-react';

const Student = ({ student }) => {
    const [confirm, setConfirm] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (isDeleting) {
            deleteStudent();
        }
    }, [isDeleting])

    const open = () => setConfirm(true);

    const close = () => setConfirm(false);

    const deleteStudent = async () => {
        const studentId = router.query.id;
        try {
            const deleted = await fetch(`http://localhost:3000/api/students/${studentId}`, {
                method: "Delete"
            });

            router.push("/");
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async () => {
        setIsDeleting(true);
        close();
    }

    return (
        <div className="student-container">
            {isDeleting
                ? <Loader active />
                :
                <>
                    <h1>{student.fullName}</h1>
                    <p>{student.subject1}</p>
                    <p>{student.subject2}</p>
                    <p>{student.subject3}</p>
                    <Button color='red' onClick={open}>Delete</Button>
                </>
            }
            <Confirm
                open={confirm}
                onCancel={close}
                onConfirm={handleDelete}
            />
        </div>
    )
}

Student.getInitialProps = async ({ query: { id } }) => {
    const res = await fetch(`http://localhost:3000/api/students/${id}`);
    const { data } = await res.json();

    return { student: data }
}

export default Student;