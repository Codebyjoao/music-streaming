import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
app.use(cors());

const key = 'AIzaSyB2Nq30dnFZo8tLhf-iXX32DpF1M0fao8k';
const search = 'Domlike'
const amount = 20;
const url =`https://youtube.googleapis.com/youtube/v3/search?type=video&part=snippet&key=${key}&maxResults=${amount}&q=${search}`

app.get('/', async(request, response) => {
  try {
    const {data} = await axios(url)

    const {items} = data

    //console.log(items)

    for(let i of items){
      console.log(i.id.videoId, i.snippet.title, i.snippet.thumbnails.medium.url,  i.snippet.channelTitle)
    }
    
    return response.json(data)

  } catch(error){
    console.error(error)
  }
});

app.listen(3333, () => {
  console.log('Back-end Started! ⚡');
});


