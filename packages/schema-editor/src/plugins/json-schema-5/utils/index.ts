import LZString from 'lz-string';

export * from './basename';
export * from './jsonld-resolver';
export * from './shorten-rdf';
export * from './curie';

export const getExtensions = (defObj) => defObj.filter((v, k) => /^x-/.test(k));

export const compressAndBase64UrlSafe = (txt: string) => LZString.compressToEncodedURIComponent(txt);
export const decompressAndBase64UrlSafe = (txt: string) => LZString.decompressFromEncodedURIComponent(txt);

export const isUri = (uri: string) => {
  try {
    new URL(uri);
    return true;
  } catch (e) {
    return false;
  }
};

export function getKey(obj, path: Array<any>) {
  if (!obj || !Array.isArray(path)) {
    return null;
  }
  return path.reduce((acc, key) => (acc && acc.get && acc.get(key) !== undefined ? acc.get(key) : null), obj);
}

export const getParentType = (specSelectors, specPathArray) => {
  try {
    return specSelectors.specResolvedSubtree(specPathArray.slice(0, -1)).get('type');
  } catch (e) {
    return null;
  }
};

export const copyToClipboard = (content: string) => {
  const el = document.createElement('textarea');
  el.value = content;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};
