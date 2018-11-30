export type transitionPageInfoType = {
  preb: string;
  next: string;
};

export type pageContentsType = {
  [key: string]: pageContentType;
};

export type pageContentType = {
  mainText: string;
  mainTitle?: string;
  prebLink: string;
  nextLink: string;
};
