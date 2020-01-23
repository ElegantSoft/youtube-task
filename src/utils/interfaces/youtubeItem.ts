export interface SearchItem {
  kind: string;
  etag: string;
  id: ID;
  snippet: Snippet;
}

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface ID {
  kind: string;
  videoId: string;
}

export interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
}

export interface Thumbnails {
  default: Default;
  medium: Default;
  high: Default;
}

export interface Default {
  url: string;
  width: number;
  height: number;
}
