import React, { useEffect, useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

import {
  Container, Search, Section, Card,
} from './styles';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Button from '../../components/Button';

import ObrasService from '../../services/ObrasService';

export default function ListaObras() {
  const [obras, setObras] = useState([]);
  const [nomeObra, setNomeObra] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');

  function handleStoreObra() {
    setObras((prevState) => [...prevState,
      {
        obraNome: nomeObra,
        cidade,
        estado,
      },
    ]);
  }

  function getLocalDataListaObras() {
    let dataLocalStorage;
    try {
      dataLocalStorage = JSON.parse(localStorage.getItem('listaObras'));
    } catch (err) {
      console.log(err);
    }
    return dataLocalStorage;
  }

  function handleAskDeleteObra(e) {
    e.preventDefault();

    const deleteObra = e.currentTarget.nextSibling;

    deleteObra.classList.toggle('delete-button');
    e.currentTarget.remove();
  }

  function handleDeleteObra(e, obraNomeID) {
    e.persist();

    setObras((prevState) => prevState.filter(
      (obra) => (obra.obraNome !== obraNomeID),
    ));
  }

  useEffect(() => {
    async function getData() {
      const data = await ObrasService.listObras();

      setObras(data);
    }

    const dataLocalStorage = getLocalDataListaObras();

    if (!dataLocalStorage) {
      getData();
    } else {
      setObras(dataLocalStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('listaObras', JSON.stringify(obras));
  }, [obras]);

  return (
    <>
      <PageHeader
        title="Lista de Obras"
      />
      <Container>
        <Search>
          <div className="input-nome-obra">
            <Input
              value={nomeObra}
              type="text"
              placeholder="Nome da Obra"
              onChange={(e) => setNomeObra(e.target.value)}
            />
          </div>
          <div className="input-cidade">
            <Input
              value={cidade}
              type="text"
              placeholder="Cidade"
              onChange={(e) => setCidade(e.target.value)}
            />
          </div>
          <div className="input-estado">
            <Input
              value={estado}
              type="text"
              placeholder="Estado"
              onChange={(e) => setEstado(e.target.value)}
            />
          </div>

          <Button
            type="button"
            onClick={handleStoreObra}
          >
            Adicionar
          </Button>
        </Search>

        <Section>
          {obras.map((obra) => (
            <Card key={obra.obraNome}>
              <div className="card-inicio">
                <h3>{obra.obraNome}</h3>
              </div>
              <div className="card-fim">
                <span>{obra.cidade}</span>
                <span>{obra.estado}</span>
                <button
                  type="button"
                  className="obra-ask-delete"
                  onClick={handleAskDeleteObra}
                >
                  <FaRegTrashAlt />
                </button>
                <button
                  type="button"
                  className="obra-delete"
                  onClick={(e) => handleDeleteObra(e, obra.obraNome)}
                >
                  <FaRegTrashAlt />
                </button>
              </div>
            </Card>
          ))}
        </Section>
      </Container>
    </>
  );
}
