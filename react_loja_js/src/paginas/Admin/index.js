import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './../../componentes/Modal';
import FormularioInput from './../../componentes/Formularios/FormularioInput';
import FormSelect from './../../componentes/Formularios/FormSelect';
import Botao from './../../componentes/Formularios/Botao';
import './styles.scss';



const Admin = props => {
  
  const [hideModal, setHideModal] = useState(true);
  const [productCategory, setProductCategory] = useState('mens');
  const [productName, setProductName] = useState('');
  const [productThumbnail, setProductThumbnail] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productDesc, setProductDesc] = useState('');

  

  const toggleModal = () => setHideModal(!hideModal);

  const configModal = {
    hideModal,
    toggleModal
  };

  
  const handleSubmit = e => {
    e.preventDefault();
  };
  

 return (
  <div className="admin">

    <div className="callToActions">
      <ul>
        <li>
          <Botao onClick={() => toggleModal()}>
          Adicionar Um Novo Produto
          </Botao>
        </li>
      </ul>
    </div>

    <Modal {...configModal}>
      <div className="addNewProductForm">
        <form onSubmit={handleSubmit}>

          <h2>
            Adicionar Um Novo Produto
          </h2>

          <FormSelect
            label="Categoria :"
            options={[{
              value: "Masculino",
              name: "Masculino"
            }, {
              value: "Feminino",
              name: "Feminino"
            }]}
            handleChange={e => setProductCategory(e.target.value)}
          />

          <FormularioInput
            label="Nome :"
            type="text"
            value={productName}
            handleChange={e => setProductName(e.target.value)}
          />

          <FormularioInput
            label="URL Da Img :"
            type="url"
            value={productThumbnail}
            handleChange={e => setProductThumbnail(e.target.value)}
          />

          <FormularioInput
            label="Preco :"
            type="number"
            min="0.00"
            max="10000.00"
            step="0.01"
            value={productPrice}
            handleChange={e => setProductPrice(e.target.value)}
          />

         
          <br />

          <Botao type="submit">
            Salvar Produto
          </Botao>

        </form>
      </div>
    </Modal>

    <div className="manageProducts">

      <table border="0" cellPadding="0" cellSpacing="0">
        <tbody>
          <tr>
            <th>
              <h1>
                Cadastramento dos produtos
              </h1>
            </th>
          </tr>
          <tr>
            <td>
              <table className="results" border="0" cellPadding="10" cellSpacing="0">
                <tbody>
                  
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td>

            </td>
          </tr>
          <tr>
            <td>
              <table border="0" cellPadding="10" cellSpacing="0">
                <tbody>
                  <tr>
                    <td>
                      
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>

    </div>

  </div>
 );
}

export default Admin;