import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {blogPosts} from './../content';
import { withRouter } from "react-router";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';



const styles = {
	BlogPost: {
		width: '100%',
		padding: 20,
		backgroundColor:'',
	},
	media: {
	    height: 140,
	},
	card: {
		width: 'calc(100% - 40px)',
		marginBottom: 20,
	},
}

class BlogPost extends React.Component {


	constructor(props){
		super(props);
		this.state = {
			postId : this.props.match.params.postId
		}
	}	

	componentDidMount(){
		if(!this.state.postId){
			this.props.history.goBack();
		}
	}

	render(){ 
	  const bPost = blogPosts[this.state.postId - 1];
	  const {classes} = this.props;
	  return (
	    <div className={classes.BlogPost}>
	      <Card className={classes.card} key={bPost.id+''}>
		        <CardMedia
		          className={classes.media}
		          image={bPost.imageUrl}
		          title={bPost.title}
		        />
		        <CardContent>
		          <Typography gutterBottom variant="h5" component="h2">
		            {bPost.title}
		          </Typography>
		          <Typography variant="body2" color="textSecondary" component="p"
		          dangerouslySetInnerHTML = {{__html: bPost.content}}>
		          </Typography>
		        </CardContent>
		    </Card>
	    </div>
	  );
	}
}

export default withRouter((withStyles(styles))(BlogPost));
