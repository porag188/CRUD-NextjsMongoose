import Link from 'next/link';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { Button, Form, Loader } from 'semantic-ui-react';
import { useRouter } from 'next/router';

const EditStudent = ({ student }) => {
    const [form, setForm] = useState({ fullName: student.fullName, subject1: student.subject1, subject2: student.subject2, subject3: student.subject3 });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const router = useRouter();

    useEffect(() => {
        if (isSubmitting) {
            if (Object.keys(errors).length === 0) {
                updateStudent();
            }
            else {
                setIsSubmitting(false);
            }
        }
    }, [errors])

    const updateStudent = async () => {
        try {
            const res = await fetch(`http://localhost:3000/api/students/${router.query.id}`, {
                method: 'PUT',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })
            router.push("/");
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let errs = validate();
        setErrors(errs);
        setIsSubmitting(true);
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const validate = () => {
        let err = {};

        if (!form.fullName) {
            err.fullName = 'Name is required';
        }
        if (!form.subject1) {
            err.subject1 = 'Please enter your first favourite Subject';
        }

        return err;
    }

    return (
        <div className="form-container">
            <h1>Update Student Info</h1>
            <div>
                {
                    isSubmitting
                        ? <Loader active inline='centered' />
                        : <Form onSubmit={handleSubmit}>
                            <Form.Input
                                fluid
                                error={errors.fullName ? { content: 'Please enter your Name', pointing: 'below' } : null}
                                label='Full Name'
                                placeholder='Full Name'
                                name='fullName'
                                value={form.fullName}
                                onChange={handleChange}
                            />
                            <Form.Input
                                fluid
                                label='First Favourite Subject'
                                placeholder='Write your favorite subject name'
                                name='subject1'
                                error={errors.subject1 ? { content: 'Please enter a description', pointing: 'below' } : null}
                                value={form.subject1}
                                onChange={handleChange}
                            />
                              <Form.Input
                                fluid
                                label='Second Favourite Subject'
                                placeholder='Write your favorite subject name'
                                name='subject2'
                                value={form.subject2}
                                onChange={handleChange}
                            />
                              <Form.Input
                                fluid
                                label='Third Favourite Subject'
                                placeholder='Write your favorite subject name'
                                name='subject3'
                                value={form.subject3}
                                onChange={handleChange}
                                
                            />
                            <Button type='submit'>Update</Button>
                        </Form>
                }
            </div>
        </div>
    )
}

EditStudent.getInitialProps = async ({ query: { id } }) => {
    const res = await fetch(`http://localhost:3000/api/students/${id}`);
    const { data } = await res.json();

    return { student: data }
}

export default EditStudent;