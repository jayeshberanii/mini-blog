import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import ConfirmationModal from './ConfirmationModal';
import { deletePost } from '../../services/postServices';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function OutlinedCard({data, onDelete}) {
    const [open, setOpen] = React.useState(false);

    const onSubmitDelete = async() => {
        try {
         await deletePost(data._id); 
        } catch (error) {
            console.log("Error while deleting post");
        } finally {
            setOpen(false);
            onDelete();
        }
    }
    return (
        <>
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
                <CardContent>
                    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Typography variant="h5" component="div" >
                        {data.title ?? "No title"}
                    </Typography>
                    <Button onClick={() => setOpen(true)}>Delete</Button>
                    </Box>
                    <Typography variant='body2' sx={{ color: 'text.secondary', mb: 1.5 }}>
                        Auther: {data.username ?? "No auther"}
                    </Typography>
                    <Typography variant="body2">
                        {data?.tags?.length > 0 ? data?.tags?.join(", ") : "No tags"}
                        {data?.content?.length > 30 ? `${data?.content?.slice(0, 30)}...` : "No content"}
                    </Typography>
                    <Typography sx={{ mt: 2}} variant="body2">
                        Tags: {data?.tags?.length > 0 ? data?.tags?.join(", ") : "No tags"}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={`/posts/${data._id}`}><Button size="small">View more</Button></Link>
                </CardActions>
            </Card>
        </Box>
        <ConfirmationModal open={open} setOpen={setOpen} onSubmit={onSubmitDelete} />
        </>
    );
}
