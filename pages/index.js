import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { Button, Card, Container } from 'semantic-ui-react';

const Index = ({ students }) => {
  return (
    <div className="students-container">
      <h1>Student Info</h1>
      <div className="grid wrapper">
        {students.map(student => {
          return (
            <div key={student._id}>
              <Card>
                <Card.Content>
                  <Card.Header>
                    <Link href={`/${student._id}`}>
                      <a className="Student-name">{student.fullName}</a>
                    </Link>
                    <p><i class="fas fa-stars"></i>{student.subject1}</p>
                  </Card.Header>
                </Card.Content>
                <Card.Content extra>
                  <Link href={`/${student._id}`}>
                    <Button primary>View</Button>
                  </Link>
                  <Link href={`/${student._id}/edit`}>
                    <Button primary>Edit</Button>
                  </Link>
                </Card.Content>
              </Card>
            </div>
          )
        })}
      </div>
    </div>
  )
}
Index.getInitialProps=async () =>{
  const res=await fetch('http://localhost:3000/api/students');
  const { data }=await res.json();
  return {students:data}
}



export default Index;