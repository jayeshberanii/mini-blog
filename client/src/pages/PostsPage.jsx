import React, { useEffect, useState } from 'react'
import { getPosts } from '../services/postServices';
import OutlinedCard from '../components/common/PostCard';
import Button from '@mui/material/Button';
import AddPostModal from '../components/common/AddPostModal';
import Box from '@mui/material/Box';
import Pagination from '../components/common/Pagination';
import TextField from '@mui/material/TextField';


const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  console.log(posts);
  useEffect(() => {
    getPosts(search, page).then(data => setPosts(data ?? []));
  }, [search, page])
  const handleSubmit = () => {
    getPosts(search, page).then(data => setPosts(data ?? []));
  }
  const debounceSearch = (value) => {
    const timeout = setTimeout(() => {
      setSearch(value);
    }, 1000);
    return () => clearTimeout(timeout);
  }
  return (
    <Box sx={{ p: 4 }}>
      <h1>Posts</h1>
      <Box>
        <Button sx={{ ml: "auto" }} onClick={() => setOpenModal(true)} variant="contained">Add Post</Button>
      </Box>
      <Box sx={{ py: 2 }}>
        <TextField id="outlined-basic" label="Search" variant="outlined" onChange={(e) => debounceSearch(e.target.value)} />
      </Box>
      <Box sx={{ py: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
        {
          posts?.length === 0 ? <h2>No posts found</h2> :
            posts?.map(post => <OutlinedCard key={post.id} data={post} onDelete={handleSubmit} />)
        }
        <Pagination page={page} setPage={setPage} />
      </Box>

      <AddPostModal open={openModal} setOpen={setOpenModal} handleSubmit={handleSubmit} />
    </Box>
  )
}

export default Posts