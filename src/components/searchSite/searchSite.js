import React, { useRef } from 'react';
import { navigate } from 'gatsby';
import { Row, Col, Container } from 'react-bootstrap';
import searchIconLarge from '../../images/icon-search-large.png';
import * as Styled from './searchSiteStyle';
const SearchSite = () => {
  const inputEl = useRef(null);
  const [query, setQuery] = React.useState('');
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    // `inputEl.current` points to the mounted search input element
    const q = inputEl.current.value;
    navigate(`/search/?q=${q}`);
  };
  const handleKeyUp = (event) => {
    if (event.keyCode === 13 || event.key === 'Enter') {
      handleSubmit();
    }
  };
  return (
    <>
      <Styled.SearchSiteContainer>
        <Row>
          <Col md lg={{ span: 3 }}>
            <Styled.SearchSiteTitle>Search Site</Styled.SearchSiteTitle>
          </Col>
          <Col md={7} lg={8}>
            <Styled.InputStyle
              ref={inputEl}
              type="text"
              name="query"
              id="search"
              placeholder="What are you looking for?"
              value={query}
              onChange={handleChange}
              onKeyUp={handleKeyUp}
            />
          </Col>
          <Col md={1}>
            <Styled.ImageStyle
              alt=""
              src={searchIconLarge}
              onClick={handleSubmit}
            />
          </Col>
        </Row>
      </Styled.SearchSiteContainer>
    </>
  );
};

export default SearchSite;
