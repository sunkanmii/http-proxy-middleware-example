import React from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import { CommentList} from './comments';

const dataProvider = restProvider('http://localhost:5000');

function App() {
  return (
    <Admin
      dataProvider={dataProvider}
    >
    <Resource name="comments" list={CommentList} />
  </Admin>
  );
}

export default App;
