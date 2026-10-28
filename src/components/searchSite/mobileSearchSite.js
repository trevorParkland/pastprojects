import React, { useState, useRef } from 'react';
import { navigate } from 'gatsby';
import { Row, Col } from 'react-bootstrap';
import * as Styled from './searchSiteStyle';
import { BsSearch } from '@react-icons/all-files/bs/BsSearch';
import { FaSearch } from '@react-icons/all-files/fa/FaSearch';

const MobileSearchSite = () => {
  const inputEl = useRef(null);
  const [query, setQuery] = useState('');
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    const q = inputEl.current.value;
    navigate(`/search/?q=${q}`);
  };
  const handleKeyUp = (event) => {
    if (event.keyCode === 13 || event.key === 'Enter') {
      handleSubmit();
    }
  };
  return (
    <Row className="g-0">
      <Col xs={10}>
        <Styled.SearchSiteInput
          type="text"
          placeholder="Search Site"
          ref={inputEl}
          name="query"
          id="search"
          value={query}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          autoComplete="off"
        />
      </Col>
      <Col xs={2} className="d-flex justify-content-center m-auto">
        <FaSearch color="#fff" size="20px" onClick={handleSubmit} />
      </Col>
    </Row>
  );
};

export default MobileSearchSite;
