const paths = {
  homePagePath() {
    return "/";
  },
  topicShowPagePath(topicSlug: string) {
    return `/topics/${topicSlug}`;
  },
  postCreatePagePath(topicSlug: string) {
    return `/topics/${topicSlug}/posts/new`;
  },
  postShowPagePath(topicSlug: string, postId: string) {
    return `/topics/${topicSlug}/posts/${postId}`;
  },
};

export default paths
