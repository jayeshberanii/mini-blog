import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import { createPost } from '../../services/postServices';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const tagNames = [
    'tag 1',
    'tag 2',
    'tag 3',
    'tag 4'
];

function getStyles(name, personName, theme) {
    return {
        fontWeight: personName.includes(name)
            ? theme.typography.fontWeightMedium
            : theme.typography.fontWeightRegular,
    };
}

export default function AddPostModal({ open, setOpen, handleSubmit }) {

        const theme = useTheme();
    const [tags, setTags] = React.useState([]);

    const handleClose = () => {
        setOpen(false);
    };

    const onSubmitHandler = async(event) => {
        try {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries(formData.entries());
        await createPost({...formJson, tags});
        console.log(formJson);
        } catch (error) {
            console.log("Error while creating post");
        } finally {   
            handleSubmit()     
        handleClose();
        setTags([]);
        }
    };

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setTags(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <React.Fragment>
            <Dialog fullWidth open={open} onClose={handleClose}>
                <DialogTitle>Add Post</DialogTitle>
                <DialogContent sx={{ paddingBottom: 0 }}>
                    <form onSubmit={onSubmitHandler}>
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="name"
                            name="title"
                            label="Email Address"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="username"
                            name="username"
                            label="Username"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            multiline
                            autoFocus
                            required
                            margin="dense"
                            id="content"
                            name="content"
                            label="Content"
                            fullWidth
                            variant="standard"
                        />
                        <FormControl sx={{ mt: 2, width: 300 }}>
                            <InputLabel id="demo-multiple-name-label">Tags</InputLabel>
                            <Select
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"
                                multiple
                                value={tags}
                                onChange={handleChange}
                                input={<OutlinedInput label="Tags" />}
                                MenuProps={MenuProps}
                            >
                                {tagNames.map((name) => (
                                    <MenuItem
                                        key={name}
                                        value={name}
                                        style={getStyles(name, tags, theme)}
                                    >
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit">Add Post</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}
