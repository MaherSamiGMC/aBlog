import ArticleLayouts from "./ArticleLayout"
import "./MyArticles.css"
const MyArticles=(props)=>{
    const ArticlesList=props.Articlelist.map((el,i)=> <ArticleLayouts key={i} title={el.title} description={el.description} /> )
    return(
        <div className="List">
        {ArticlesList}
        </div>
    )
}

export default MyArticles