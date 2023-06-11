import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Profile from './Photos/Profile.png';

function GitHubCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Profile} alt="@Kal0yanX" />
      <Card.Body>
        <Card.Title><h1>GitHub Profile</h1></Card.Title>
        <Card.Text>
          Click below for a link to my GitHub Profile.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Snapshot Testing Page for Activity RR-8</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="https://github.com/Kal0yanX">GitHub Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default GitHubCard;