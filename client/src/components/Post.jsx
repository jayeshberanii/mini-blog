import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'

const Post = ({ data }) => {
    return (
        <Box>
            <Typography variant="h6" component="h2">
                {data.title ?? "No title"}
            </Typography>
            <Typography variant='body2' sx={{ color: 'text.secondary', mb: 1.5 }}>
                Auther: {data.username ?? "No auther"}
            </Typography>
            <Typography sx={{ mt: 2 }}>
                {data.content ?? "No content"}
            </Typography>
            <Typography sx={{ mt: 2 }} variant="body2">
                Tags: {data?.tags?.length > 0 ? data?.tags?.join(", ") : "No tags"}
            </Typography>
        </Box>
    )
}

export default Post