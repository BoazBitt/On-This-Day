export interface Page {
  type: string;
  title: string;
  displaytitle: string;
  description: string;
  pageid: number;
  thumbnail: {
    source: string;
    width: number;
    height: number;
  };
  content_urls: {
    desktop: {
      page: string;
    };
    mobile: {
      page: string;
    };
  };
}

export interface EventData {
  text: string;
  year: number;
  pages: Page[];
}
