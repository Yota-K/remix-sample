import { Link, useLoaderData } from "remix";
import { getPosts } from "~/post";
import type { Post } from "~/post";

// export type Post = {
//   slug: string;
//   title: string;
// };

// MEMO: 表示されているコンポーネントのバックエンドAPI
// バックエンドの処理を書ける？
// https://remix.run/docs/en/v1/tutorials/blog
// export const loader = () => {
//   const posts: Post[] = [
//     {
//       slug: "my-first-post",
//       title: "My First Post"
//     },
//     {
//       slug: "90s-mixtape",
//       title: "A Mixtape I Made Just For You"
//     }
//   ];
//   return posts;
// };
//
export const loader = () => {
  return getPosts();
}

export default function Posts() {
  const posts = useLoaderData();
  console.log(posts);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post: Post) => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
