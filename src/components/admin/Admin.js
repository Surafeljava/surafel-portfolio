import React, {useState, useEffect} from 'react';
import firebase from '../../firebase';
import { Grid, Button, TextField, MenuItem, IconButton} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import uploadPlaceholder from '../../assets/upload.png';
import AddIcon from '@mui/icons-material/Add';

function Admin() {
    const navigate = useNavigate ();

    const [category, setCategory] = useState({});
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [photo, setPhoto] = useState([]);

    const [catCount, setCatCount] = useState(0);
    const [categories, setCategories] = useState([]);

    const [loading, setLoading] = useState(false);

    const ref = firebase.firestore().collection("designs");
    const storageRef = firebase.storage();

    const getCategories = async function() {
        setLoading(true);
        
        let items = [];
        try{
            const data = await ref.get();
            data.docs.forEach(async (doc)=>{
                let d = {
                    value: doc.id,
                    label: doc.data().title,
                };
                items.push(d);
                setCatCount(items.length);
            });
        }catch(e) {
            
        }finally{
            setCategories(items);
            setLoading(false);
            console.log(catCount);
        }        
    }

    const uploadData = async function() {
        setLoading(true);

        let imageUploadRef = storageRef.ref('/' + category.label.toLowerCase() + "/"+ photo[0].name);

        await imageUploadRef.put(photo[0]).then(
            ()=>{
                console.log("Upload Finished!");
            }
        );

        let url = await imageUploadRef.getDownloadURL();

        let dataUploadRef = ref.doc(category.value).collection("files");

        var myTimestamp = firebase.firestore.FieldValue.serverTimestamp();

        let response = await dataUploadRef.add({
            title: title,
            description: description,
            date: myTimestamp,
            url: url
        });

        console.log("Data Upload Response: " + JSON.stringify(response));

        setLoading(false);

    }

    useEffect(()=>{
        getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <Grid container direction="column" alignContent="center" alignItems="center" padding={5}>
        <h1> Design Upload </h1>
        <h3> Selected Category: {JSON.stringify(category)} </h3>

        {loading && (
            <h2> Loading </h2>
        )}

        {!loading && (
            <TextField id="outlined-select-currency" placeholder='Country' select value={category.label}
                style={{width: 250, backgroundColor: "#FFFFFF", borderRadius: 5}}
                onChange={(e) => {
                    setCategory(e.target.value);
                }}>
                {categories.map((option) => (
                    <MenuItem key={option.value} value={option} >
                    {option.label}
                    </MenuItem>
                ))}
            </TextField>
        )}

        <br />

        <Grid container direction="column" alignContent="center">
            <h3> Photo: {photo.length} </h3>
            <input accept="image/*" style={{ display: 'none' }} id="profile-button-file" multiple type="file" 
            onChange={(e) => { setPhoto(e.target.files); }} />
            <label htmlFor="profile-button-file">
                <div style={{background: `url(${uploadPlaceholder})`, width: "100px", height:"100px", backgroundSize: "contain", position: "relative", borderRadius: "50px"}}>
                    <IconButton color="primary" aria-label="upload picture" component="span" 
                    style={{ backgroundColor: "#FFFFFF", position: "absolute", bottom: "0px", right: "0px" }}>
                        <AddIcon />
                    </IconButton>
                </div>
            </label>
        </Grid>

        <br />
        

        <TextField label="Title" value={title} placeholder='Title' onChange={(e)=>{
            setTitle(e.target.value);
        }}/>

        <br />

        <TextField label="Description" value={description} placeholder='Description' onChange={(e)=>{
            setDescription(e.target.value);
        }}/>

        <br />

        <Button variant='outlined' onClick={()=>{
            uploadData();
        }}>

            Upload File

        </Button>
        

        <br />

        <Button variant='text' onClick={()=>{
            navigate('/');
        }}>
            Home
        </Button>
        
    </Grid>;
}

export default Admin;
