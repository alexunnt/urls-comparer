import React from 'react';
import Form from '../form/form';
import Modal from '../modal/modal';
import Details from '../details/details';
import _ from 'lodash';
import { store } from '../../services/store';

import appStyles from './app.module.css';

function App() {
  const [loaded, setLoaded] = React.useState(null);
  const closeModal = () => setLoaded(null);

  function compareFiles(firstFile, secondFile) {
    const keys = _.uniq([...Object.keys(firstFile), ...Object.keys(secondFile)]);
    const sortedKeys = _.sortBy(keys);

    sortedKeys.forEach((key) => {
      if (!_.has(firstFile, key) && _.has(secondFile, key)) {
        store.dispatch({
          type: 'ADD_ADDED',
          text: key
        })
      } else if (_.has(firstFile, key) && !_.has(secondFile, key)) {
        store.dispatch({
          type: 'ADD_DELETED',
          text: key
        })
      } else if (firstFile[key] !== secondFile[key]) {
        store.dispatch({
          type: 'ADD_CHANGED',
          text: key
        })
      }
    });
    setLoaded(true);
  }

  function showResult(firstFile, secondFile) {
    compareFiles(firstFile, secondFile);
  }

  return (
    <>
      <div className={appStyles.app}>
        <h2 className={`${appStyles.description} text text_type_main-medium mb-20`}>
          В двух файлах записаны хеш-таблицы. Ключами являются URL-ы.
          Значениями - html код страниц, находящихся по этим URL-ам.
          Обе таблицы отражают состояние всех страниц некоторого заданного
          множества веб-сайтов.
          Первая таблица - состояние этих сайтов на вчера.
          Вторая - на сегодня.
          Приложение сравнивает эти два состояние и выводит информационное сообщение.
          Пример файлов находится в папке fixtures.
        </h2>
        <Form onSubmit={showResult} />
      </div>

      {loaded && (
        <Modal closeModal={closeModal}>
          <Details />
        </Modal>
      )}
    </>
  );
}

export default App;
