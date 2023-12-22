import React,{useState,useEffect} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {
  const [articles,setArticles]=useState([]);
  const [loading,setLoading]=useState(true);
  const [page,setPage]=useState(1);
  const [totalResults,setTotalResults]=useState(0);
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async()=> { 
    try {
      props.setProgress(0);
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
      setLoading(true);
      
      // Add rate limiting logic here, for example, wait for a specific duration before making the next request.
      await new Promise(resolve => setTimeout(resolve, 1000)); // 1000 milliseconds delay
  
      let data = await fetch(url);
      props.setProgress(30);
  
      let parsedData = await data.json();
      props.setProgress(50);
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
      props.setProgress(100);
    }catch (error) {
      console.error("Error fetching news:", error);
      setLoading(false); // Set loading to false to handle errors gracefully
    }
  };
  
  //second parameter in useEffect function tell us,based on which parameter we want to run our effect
  useEffect(() => {
    document.title = `${capitalize(props.category)} - FlashHive`;
    updateNews();
},);

  
  
  // for checking whether we have more results or not we are stting pagesize command to set the results shown by api per page by which we will track on which page we r
  // we will divide pageSize with totalResults
  // async componentDidMount() {
  //   this.updateNews();
  // }
  // const handleNextClick = async () => {
  //   setPage(page+1);
  //   updateNews();
  // };
  // const handlePrevClick = async () => {
  //   setPage(page-1);
  //   updateNews();
  // };

  const fetchMoreData = async () => {
    const newPage = page + 1;
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${newPage}&pageSize=${props.pageSize}`;
  
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
  
      setArticles(articles.concat(parsedData.articles));
      setTotalResults(parsedData.totalResults);
      setPage(newPage); // Update the page state
    } catch (error) {
      console.error("Error fetching more news:", error);
    }
  };
  
    return (
      <>
        <h1 className="text-center" style={{margin:'35px 0px',marginTop:'90px'}}>
          Flash News - Top {capitalize(props.category)} Headlines
        </h1>

        {/* This means if loading is true then show spinner */}
        {loading && <Spinner/>}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          // style={{ display: "flex", flexDirection: "column-reverse" }} //To put endMessage and loader to the top.
          // inverse={true} //
          hasMore={articles.length!== totalResults}
          loader={<Spinner></Spinner>}
          scrollableTarget="scrollableDiv"
        >
          <div className="container">

            {/* row class is used to array element row wise */}
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
                    }
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
          </div>
        </InfiniteScroll>
          {/* <button
            disabled={page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            {" "}
            &larr; Previous{" "}
          </button>
          <h5 className="text-center my-2">
            {page}/
            {Math.ceil(totalResults / props.pageSize)}
          </h5>
          <button
            disabled={
              page + 1 >
              Math.ceil(totalResults / props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
            id="next"
          >
            {" "}
            Next &rarr;
          </button> */}
      </>
    );
  }
// for setting default values of props as we did in our last project
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

// for bounding or setting datatypes of our props
News.propTypes= {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
