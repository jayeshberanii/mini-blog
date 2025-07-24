import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import React from 'react'

const Pagination = ({page, setPage}) => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</Button>
        <Button onClick={() => setPage(page + 1)}>Next</Button>
    </Box>
  )
}

export default Pagination