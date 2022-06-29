import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { Formik, Form } from 'formik';
import './Header.scss';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies } from '../../features/movies/movieSlice';

interface ISearch {
  searchText: string;
}

const Header = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const dispatch = useDispatch<any>();
  const initialValues: ISearch = {
    searchText: '',
  };

  const handleSubmit = () => {
    dispatch(fetchAsyncMovies(searchTerm));
    setSearchTerm('');
  };

  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <input
            value={searchTerm}
            placeholder="Search your film..."
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.currentTarget.value)}
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
      <div className="user-image">
        <FaUserCircle />
      </div>
    </div>
  );
};

export default Header;
