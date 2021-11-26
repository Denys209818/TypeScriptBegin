import React from 'react';
import { Product } from './interfaces/ReduxInterfaces';
import { useSelectorRedux } from './interfaces/selectorRedux';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Table from './Table';
import { useDispatch } from 'react-redux';
import { InitAction } from './actions/InitAction';

const App: React.FC= () => {

  var dispatch = useDispatch();
  dispatch(InitAction());
  const products : Array<Product> = useSelectorRedux(x => x.products.products);
  return (
    <>
      <Navbar/>
    <div className="container">
      <div className="row">
        <div className="offset-2 col-md-8">
            <Table>
              {products.map(product => {
                return <tr>
                  <td scope="row">{product.id}</td>
                  <td>{product.title}</td>
                  <td>{product.text}</td>
                  <td>{product.price}</td>
                </tr>
              })}
            </Table>
          </div>
        </div>
    </div>
    </>
  );
}

export default App;
