import React from 'react';
import './App.css';

function App() {
  return (
    <div className='app-wrapper'>
       <header className='header'>
           <img src={'https://avatars.mds.yandex.net/i?id=08f38c1be7061b5c61cbb97e4a8c3e17298bff6a-5364864-images-thumbs&n=13'} alt={'pict'}/>
       </header>
        <nav className='nav'>
            <div><a>Profile</a></div>
            <div><a>Messages</a></div>
            <div><a>News</a></div>
            <div><a>Music</a></div>
            <div><a>Settings</a></div>
        </nav>
        <div className='content'>
            <img src={'https://fikiwiki.com/uploads/posts/2022-02/1644965580_6-fikiwiki-com-p-kartinki-priroda-na-zastavku-telefona-6.jpg'} alt={'main pict'}/>
        </div>
    </div>
  );
}


export default App;
