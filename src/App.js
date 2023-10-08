
import { useEffect, useState } from 'react';
import './App.css';
import { Auth } from './component/Auth';
import { db,auth,storage } from './config/firebase';
import { getDocs,collection,addDoc,deleteDoc,doc,updateDoc } from 'firebase/firestore';

function App() {
  const [movieList, setMovieList] =useState([])
  const moviesCollection = collection(db, "movies")
  // new movie state
  const [newtitle, setTitle] =useState('')
  const [newRelease, setRealseDate] =useState(0)
  // update state
  const [newState, setNewState] = useState('')
  // file upload
  const [fileUpload, setFileUpload] =useState(null)
  

  useEffect(()=>{
    const getList= async()=>{
    //  read the data
    try{
      const data = await getDocs(moviesCollection)
      const fiterData= data.docs.map((doc)=>({
        ...doc.data(),
        id:doc.id
      }))
     setMovieList(fiterData)
    }
    catch(err){

    }
    }
    getList()
  })
  const onSubmitMovie = async()=>[
        await addDoc(moviesCollection, 
          {title:newtitle, realeaseDate:newRelease, userid:auth?.currentUser.uid} )
  ]
  const deleteMovie= async(id)=>{
    const movieDoc = doc(db, 'movies', id) 
    await deleteDoc(movieDoc)
  }
  const updateMovie= async(id)=>{
    const movieDoc = doc(db, 'movies', id) 
    await updateDoc(movieDoc,{title:newState} )
  }
  const upLoadFile=()=>{
    if(!fileUpload) return;
  }
  return (
    <>
    <div className='app'>
    <Auth/>
     <div>
      <input placeholder='movie title' onChange={e => setTitle(e.target.value)}/>
      <input placeholder='release date' type='number' onChange={e =>setRealseDate( Number(e.target.value))}/>
      <button onClick={onSubmitMovie}>submit</button>
     </div>
     <div>
      {movieList.map((movie) =>{
        return(
          <div>
        <h1>
          {movie.title}
        </h1>
        <p>
         Date: {movie.realeaseDate}
        </p>
        <button onClick={() => deleteMovie(movie.id)}>
          Delete Movie
        </button>
        <input placeholder='new title..' onChange={(e) => setNewState(e.target.value)}></input>
        <button onClick={() => updateMovie(movie.id)} >
          update title
        </button>
      </div>
        )
      })}
     </div>
    <input type='file' onChange={e =>setFileUpload(e.target.files[0])}>
      <button onClick={
        upLoadFile
      }>upload file</button>
    </input>
    </div>
    
    </>
  )
}

export default App;
