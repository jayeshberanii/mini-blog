import React, { useEffect, useState } from 'react'
import Post from '../components/Post'
import { getPost } from '../services/postServices'
import { Link, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';

const PostPage = () => {
    const [data, setData] = useState({});
    let { id } = useParams();
    console.log(id, "params:::");
    
    useEffect(() => {
        getPost(id).then(data => setData(data));
    }, [id])
    console.log(data);
  return (
    <Box sx={{p: 4}}>
      <Link to="/posts">Back</Link>
        <Post data={data} />
    </Box>
  )
}

export default PostPage