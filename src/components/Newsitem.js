import React, { Component } from 'react'

export class Newsitem extends Component {

  render() {
    let {title, description,imageUrl,newsUrl,author,date,source} = this.props;
    return (
       
      
        <div className=" container my-3">
        <div className="card" style={{width:"18rem"}}>
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"90%",zIndex:"1"}}>
                {source}</span>
         <img src={!imageUrl ? "https://s.yimg.com/os/creatr-uploaded-images/2022-12/ebc87340-887f-11ed-8eb6-08e6f305b07a":imageUrl } className="card-img-top" alt="--"/>
          <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className='card-text'><small className='text-muted'>By {!author? "Unkown":author} on {new Date(date).toGMTString()}</small></p>
              <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Go somewhere</a>
          </div>
      
       </div>
     </div>
     
    )
  }
}

export default Newsitem