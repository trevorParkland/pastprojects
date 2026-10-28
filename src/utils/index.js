export const addTrailingSlash = (slug) => {
  if (slug.includes('?') && slug[slug.indexOf('?') - 1] !== '/') {
    return (
      slug.substring(0, slug.indexOf('?')) +
      '/' +
      slug.substring(slug.indexOf('?'), slug.length)
    );
  }
  if (slug.includes('#') && slug[slug.indexOf('#') - 1] !== '/') {
    return (
      slug.substring(0, slug.indexOf('#')) +
      '/' +
      slug.substring(slug.indexOf('#'), slug.length)
    );
  }
  if(slug.includes('#') && slug[slug.indexOf('#') - 1] === '/'){
        return slug;
  }

  return slug[slug.length - 1] === '/' ? slug : slug.concat('/');
};

export const isYoutubeLink = (link) => {
  const regExp =
    /^https?\:\/\/(?:www\.youtube(?:\-nocookie)?\.com\/|m\.youtube\.com\/|youtube\.com\/)?(?:ytscreeningroom\?vi?=|youtu\.be\/|vi?\/|user\/.+\/u\/\w{1,2}\/|embed\/|watch\?(?:.*\&)?vi?=|\&vi?=|\?(?:.*\&)?vi?=)([^#\&\?\n\/<>"']*)/i;
  return link.match(regExp);
};

const isExternalUrl = (str) => {
  const isExternalReg = /^(http|https|mailto)/;
  if (!str) {
    return true;
  }
  if (str.includes('slp')) {
    return true;
  }
  return isExternalReg.test(String(str).toLowerCase()) ? true : false;
};

export const isExternalUrlhref = (str) => {
  const isExternalReg = /^(http|https|mailto|#|tel)/;
  if (!str) {
    return true;
  }

  return isExternalReg.test(String(str).toLowerCase()) ? true : false;
};

export default isExternalUrl;

export const isSmallDevice = () =>
  typeof window !== 'undefined' && window.innerWidth < 992;