import { graphql } from 'gatsby';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import HomePage from '../templates/homePageTemplate/homePageTemplate';
import { addTrailingSlash } from '../utils';
import LogoOG from '../images/logo-og.jpg';

const RootIndex = ({ location }) => {
  React.useEffect(() => {
    if (location?.href !== location?.href?.toLowerCase()) {
      window.location.href = location?.href?.toLowerCase();
    }
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Heating Oil &amp; Propane Supplier for Home &amp; Commercial |
          Bluewave Energy
        </title>
        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content="Bluewave Energy"></meta>
        <meta
          property="og:description"
          content="Bluewave Energy is a petroleum distribution leader that specializes in delivering high-quality fuel, lubricants and equipment to a growing number of businesses, industries and homeowners."
        ></meta>
        <meta property="og:image" content={LogoOG}></meta>
        <meta
          property="og:url"
          content={addTrailingSlash(process.env.GATSBY_DOMAIN_URL)}
        ></meta>

        <meta name="twitter:title" content="Bluewave Energy"></meta>
        <meta
          name="twitter:description"
          content="Bluewave Energy is a petroleum distribution leader that specializes in delivering high-quality fuel, lubricants and equipment to a growing number of businesses, industries and homeowners."
        ></meta>
        <meta name="twitter:image" content={LogoOG}></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Helmet>
      <HomePage />
    </>
  );
};

export default RootIndex;

export const pageQuery = graphql`
  fragment PageContent on ContentfulContent {
    id
    title
    type
    header
    subText
    elementId
    contentDetails {
      raw
    }
  }
  fragment ContentList on ContentfulContentList {
    id
    title
    type
    header
    subtext
    elementId
    list {
      title
      type
      header
      subText
      elementId
      contentDetails {
        raw
      }
    }
    listDetails {
      raw
    }
  }
  fragment ContentFaqs on ContentfulFaqs {
    id
    title
    type
    description
    qna {
      title
      text {
        raw
      }
    }
  }
  fragment ContentfulListImages on ContentfulListOfImageWithPath {
    id
    type
    title
    header
    listOfImagesWithPath {
      title
      type
      path
      richText {
        raw
      }
      image {
        description
        file {
          url
        }
      }
    }
  }
  fragment TextWithImage on ContentfulTextWithImage {
    id
    title
    type
    image {
      title
      file {
        url
      }
    }
    text {
      text
    }
  }
  fragment FAQContent on ContentfulFaqs {
    id
    title
    type
    header
    description
    elementId
    qna {
      title
      type
      text {
        raw
      }
      buttons {
        raw
      }
    }
  }
  fragment MultimediaText on ContentfulMultimediaText {
    title
    type
    multimediaText: text {
      raw
    }
  }
  fragment ImagesWithPathList on ContentfulListOfImageWithPath {
    id
    title
    type
    listOfImagesWithPath {
      title
      type
      path
      richText {
        raw
      }
      image {
        file {
          fileName
          url
        }
      }
    }
  }
  fragment ImageWithPath on ContentfulImageWithPath {
    id
    title
    type
    path
    richText {
      raw
    }
    image {
      file {
        url
      }
    }
  }
  fragment ImageContainer on ContentfulImageContainer {
    id
    title
    type
    image {
      file {
        url
      }
    }
    assets {
      title
      description
      file {
        fileName
        url
      }
    }
    textWithPaths {
      ... on ContentfulTextWithPath {
        id
        path
        text
      }
    }
    headerWithText {
      headerText
      text {
        text
      }
    }
  }
`;
