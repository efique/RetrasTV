export default interface Ivods {
  kind: "youtube#video";
  etag: any;
  id: string;
  snippet: {
    publishedAt: Date;
    channelId: string;
    title: string;
    description: string;
    thumbnails: (
      key
    ) => {
      url: string;
      width: number;
      height: number;
    };
    statistics: {
      viewCount: number;
      likeCount: number;
      dislikeCount: number;
      favoriteCount: number;
      commentCount: number;
    };
  };
}
