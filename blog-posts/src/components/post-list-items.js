import React from 'react'

export default function PostListItem({post}) {
  return (
    <li className="post-list-item">
      <h3><a href={post.url} >{post.title}</a></h3>
      <p>{post.content_text.toString().substr(0,140)}... </p>
      <span className="read-more"><a href={post.url} >Read More</a></span>
    </li>
  )
}
