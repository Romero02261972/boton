//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Count from '../Count/Count';

function ItemListContainer() {
  return (
    <Card>
      <Card.Header>
        <Nav variant="pills" defaultActiveKey="#first">
          <Nav.Item>
            <Nav.Link href="Nous">Nosotros</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#Products">Productos</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#Reg">Registro</Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        <Card.Title>Arreglo de Rosas</Card.Title>
        <Card.Text>
          Aquí deben ir las imágenes
        </Card.Text>
        <Count stock={10} />
      </Card.Body>
    </Card>
  );
}

export default ItemListContainer;