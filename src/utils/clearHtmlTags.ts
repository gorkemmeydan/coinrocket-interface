const clearHtmlTags = (strInput: string): string => {
  return strInput.replace(/<\/?[^>]+(>|$)/g, '');
};

export default clearHtmlTags;
