import React from 'react'

function Mainpage() {
    let url = "https://picsum.photos/200/300"
  return (
    <div>
    <div className="card" style={{float: 'left'}}>
        <img className="card-img-top" src={url} alt="amazing" height="300" width="300"/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="https://github.com/aneallaryea100?tab=repositories" className="btn btn-primary">Go somewhere</a>
        </div>
</div>
    </div>
  )
}

export default Mainpage
