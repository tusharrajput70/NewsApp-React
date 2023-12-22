import React from "react";

  
const NewsItem =(props)=> {
  
  let { title, description , imageUrl ,newsUrl , author ,date ,source} = props;
  return (
    <div className="my-3">
      <div className="card" >
        <div style={{display: 'flex', position:'absolute',right:'0'}}>
      <span className="badge rounded-pill bg-danger" >{source}</span>

        </div>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>

          {/* a="any string contains date in it"
              d= new date(a)
              then we can perform any date function on it
              d.getDate()
          */}
          <p className="card-text"><small className="text-muted">By {author?author:"unknown"} on {new Date(date).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})}</small></p>
          <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
