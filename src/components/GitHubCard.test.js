import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

test('renders a snapshot', () => {
  const tree = renderer.create(<App/>).toJSON()
  expect(tree).toMatchSnapshot()
});