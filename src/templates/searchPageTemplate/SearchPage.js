import React from 'react';
import { Index } from 'lunr';
import * as Styled from './searchPageTemplateStyle';
import Pagination from 'react-js-pagination';
import Highlighter from 'react-highlight-words';
import { addTrailingSlash } from '../../utils';
import { getSearchData } from '../../api/searchApi';

const SearchPage = ({ location }) => {
  const params = new URLSearchParams(location?.search);
  const q = params.get('q') || '';

  let itemsPerpage = 5;
  const [activePage, setActivePage] = React.useState(0);
  const [results, setResults] = React.useState([]);
  const [isError, setError] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);
  const [currentElement, setcurrentElement] = React.useState([]);

  const search = () => {
    getSearchData(q)
      .then(({ data }) => {
        const visitedSlugs = new Set();

        const filteredHit = data?.hits?.hit?.filter((obj) => {
          if (visitedSlugs?.has(obj?.fields?.slug)) {
            return false;
          } else {
            visitedSlugs.add(obj?.fields?.slug);
            return true;
          }
        });
        setResults(filteredHit);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(true);
      });
  };

  React.useEffect(() => {
    if (q) {
      setLoading(true);
      setActivePage(0);
      search();
    }
  }, [location]);

  React.useEffect(() => {
    setcurrentElement(results?.slice(activePage, itemsPerpage));
  }, [results]);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    setcurrentElement(paginate(results, itemsPerpage, pageNumber));
  };

  const paginate = (array, page_size, page_number) => {
    if (!array) {
      return [];
    }
    return array?.slice((page_number - 1) * page_size, page_number * page_size);
  };

  const getDataWithEllipsis = (content, content_length) => {
    const indexOfSearchInContent = content
      ?.toLowerCase()
      ?.indexOf(q?.toLowerCase());

    if (indexOfSearchInContent === -1) {
      return content
        ?.substr(0, content_length)
        .concat(content?.length > content_length ? '...' : '');
    }
    if (content.length - (indexOfSearchInContent + q.length) < content_length) {
      return content;
    }
    if (content.length - (indexOfSearchInContent + q.length) > content_length) {
      return indexOfSearchInContent > 3
        ? '...' +
            content?.substr(indexOfSearchInContent, content_length) +
            '...'
        : content?.substr(indexOfSearchInContent, content_length) + '...';
    }
    const data = content?.substr(
      Math.abs(indexOfSearchInContent),
      content_length + indexOfSearchInContent
    );

    return data;
  };
  return (
    <>
      {isError ? (
        <Styled.noResults>
          Something went wrong Please try again
        </Styled.noResults>
      ) : q ? (
        !isLoading ? (
          currentElement?.length > 0 ? (
            currentElement?.map(({ fields }, index) => (
              <Styled.searchResult key={index}>
                <Styled.Mainanchor
                  href={
                    process.env.GATSBY_DOMAIN_URL +
                    addTrailingSlash(fields?.slug)
                  }
                >
                  <Styled.Subheader>
                    <Styled.HighlighterHeader
                      highlightClassName="HighlighterHeader"
                      searchWords={[q]}
                      autoEscape={true}
                      textToHighlight={fields?.title}
                    />
                  </Styled.Subheader>
                </Styled.Mainanchor>
                <Styled.resultDesc>
                  {fields?.content_header && (
                    <Highlighter
                      highlightClassName="highlightText"
                      searchWords={[q]}
                      autoEscape={true}
                      textToHighlight={getDataWithEllipsis(
                        fields?.content_header,
                        100
                      )}
                    />
                  )}
                  {fields?.content_subtext && (
                    <Highlighter
                      highlightClassName="highlightText"
                      searchWords={[q]}
                      autoEscape={true}
                      textToHighlight={getDataWithEllipsis(
                        fields?.content_subtext,
                        100
                      )}
                    />
                  )}

                  {fields?.metadata && (
                    <Highlighter
                      highlightClassName="highlightText"
                      searchWords={[q]}
                      autoEscape={true}
                      textToHighlight={getDataWithEllipsis(
                        fields?.metadata,
                        100
                      )}
                    />
                  )}
                  {fields?.content_raw && (
                    <Highlighter
                      highlightClassName="highlightText"
                      searchWords={[q]}
                      autoEscape={true}
                      textToHighlight={getDataWithEllipsis(
                        fields?.content_raw,
                        200
                      )}
                    />
                  )}
                </Styled.resultDesc>
                <Styled.SearchAnchor
                  href={
                    process.env.GATSBY_DOMAIN_URL +
                    addTrailingSlash(fields?.slug)
                  }
                >
                  <Highlighter
                    highlightClassName="highlightText"
                    searchWords={[q]}
                    autoEscape={true}
                    textToHighlight={
                      process.env.GATSBY_DOMAIN_URL +
                      addTrailingSlash(fields?.slug)
                    }
                  />
                </Styled.SearchAnchor>
                <br />
              </Styled.searchResult>
            ))
          ) : (
            <Styled.noResults>
              There were no results found. Please try another keyword or phrase.
            </Styled.noResults>
          )
        ) : (
          <Styled.noResults>Loading...</Styled.noResults>
        )
      ) : (
        <Styled.noResults>Please Enter a keyword to search</Styled.noResults>
      )}

      {results?.length && q ? (
        <Styled.paginationDiv>
          <Pagination
            firstPageText=""
            lastPageText=""
            prevPageText="« Previous"
            nextPageText="Next »"
            activePage={activePage ? activePage : 1}
            itemsCountPerPage={5}
            totalItemsCount={results?.length}
            pageRangeDisplayed={5}
            onChange={(e) => handlePageChange(e)}
            itemClass="itemClass"
            itemClassPrev="first"
            itemClassNext="last"
            disabledClass="disabled"
            linkClass="linkClass"
            activeLinkClass="activeLinkClass"
            linkClassFirst="linkClassFirst"
            linkClassLast="linkClassLast"
          />
        </Styled.paginationDiv>
      ) : null}
    </>
  );
};
export default SearchPage;
