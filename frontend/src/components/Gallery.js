import React, { useState, useEffect } from 'react';
import { Button, Box } from '@mui/material';
import Masonry from '@mui/lab/Masonry';
import NavScrollExample from './Navbar';

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [title, setTitle] = useState('');
    console.log(images);

    useEffect(() => {
        // axios.get('/api/v1/gallery')
        //   .then(response => {
        //     setImages(response.data.images);
        //   })
        //   .catch(error => {
        //     console.error(error);
        //   });
        fetch("http://localhost:5000/api/v1/gallery", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "token": localStorage.getItem('token')
            },

        }).then((res) => res.json().then((data) => {
            console.log(data);
            if (data.success) {
                setImages(data.images);
            } else {
                console.log("nothing found")
            }
        }
        ))
    }, []);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    }

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    function srcset(image, size, rows = 1, cols = 1) {
        return {
            src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
            srcSet: `${image}?w=${size * cols}&h=${size * rows
                }&fit=crop&auto=format&dpr=2 2x`,
        };
    }

    const handleUpload = () => {
        const formData = new FormData();
        formData.append('file', selectedFile);
        // axios.post('/api/v1/gallery', formData)
        //   .then(response => {
        //     setImages([...images, response.data.image]);
        //     setSelectedFile(null);
        //     setTitle('');
        //   })
        //   .catch(error => {
        //     console.error(error);
        //   });
        fetch("http://localhost:5000/api/v1/gallery", {
            method: "POST",
            body: formData
        }).then((res) => res.json().then((data) => {

            if (data.success) {
                fetch("http://localhost:5000/api/v1/gallery", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "token": localStorage.getItem('token')
                    },

                }).then((res) => res.json().then((data) => {
                    console.log(data);
                    if (data.success) {
                        alert("Image uploaded successfully");

                        setImages(data.images);
                    } else {
                        console.log("nothing found")
                    }
                }
                ))
                setSelectedFile(null);
            } else {
                console.log("post noy found");
            }
        }
        ))

    }

    const handleDelete = (id) => {
        // axios.delete(`/api/v1/gallery/${id}`)
        //   .then(response => {
        //     setImages(images.filter(image => image._id !== id));
        //   })
        //   .catch(error => {
        //     console.error(error);
        //   });

        fetch(`http://localhost:5000/api/v1/gallery/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "token": localStorage.getItem('token')
            },

        }).then((res) => res.json().then((data) => {
            console.log(data);
            if (data.success) {
                fetch("http://localhost:5000/api/v1/gallery", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "token": localStorage.getItem('token')
                    },

                }).then((res) => res.json().then((data) => {
                    console.log(data);
                    if (data.success) {
                        alert("Image deleted successfully");
                        setImages(data.images);
                    } else {
                        console.log("nothing found")
                    }
                }
                ))
                setImages(images.filter(image => image._id !== id));
            } else {
                console.log("nothing found");
            }
        }
        ))
    }

    const role = localStorage.getItem('role');


    return (
        <div>
            <NavScrollExample />
            
            {role === "admin" && <div>
                <input type="file" onChange={handleFileChange} />
                <Button onClick={handleUpload}>Upload</Button>
                
            </div>}
            <div>



                <Box sx={{ width: 500, minHeight: 829 }}>
                    <Masonry columns={3} spacing={2}>
                        {images?.map((item, index) => (
                            <div key={index}>
                                <img
                                    src={`http://localhost:5000/public${item.url}`}
                                    srcSet={`http://localhost:5000/public${item.url}`}
                                    alt={item.url}
                                    loading="lazy"
                                    style={{
                                        borderBottomLeftRadius: 4,
                                        borderBottomRightRadius: 4,
                                        display: 'block',
                                        width: '100%',
                                    }}
                                />
                            </div>
                        ))}
                    </Masonry>
                </Box>


            </div>
        </div>
    );
}
export default Gallery;