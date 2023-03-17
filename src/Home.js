import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Card from './components/Card'
import Data from './Data.js'

export default function Home() {
    const [text,setText]=React.useState("")
    const [myData,setMyData]=React.useState(Data);
    
    function handleBucketClick(){
      if(text.length>0){
        setMyData(()=>[...myData,{
        title:text,
        id:myData.length+1
      }])
      setText("")
    }
    else{
      window.alert("Enter Valid Name");
    }
    }
    const myValues=myData.map(items=>{
      return <Card
          key={items.id}
          title={items.title}
          id={items.id}
      />
    })
      return (
      <div>
        <div className="bucketContent">
          <div className="heading">
          <h1 className="bucketchoose">Choose Your Bucket</h1>
          </div>
          <section className="cardscontent">
            {myValues}
          </section>
          <div className="customs">
              {/* <input type="text" className="form-control adder" placeholder="Custom Bucket" id="floatingTextarea" name="title" value={myData.title} onChange={handleChange}/> */}
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add Custom Bucket"
                className="form-control adder"
            />
              <img className="plusImage" src="../image/plus.png" alt="img" onClick={handleBucketClick}/>
            </div>
        </div>
      </div>
    );
  }