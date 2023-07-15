export const UrlBase = "http://localhost:3003";

export const UrlSignin = `${UrlBase}/user/login`;

export const UrlSignup = `${UrlBase}/user/signup`;

export const UrlPosts = `${UrlBase}/posts`;

export const UrlLike = (id) => `${UrlBase}/posts/${id}/like`;
