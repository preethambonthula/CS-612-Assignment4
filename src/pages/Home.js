import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import {blogPosts} from './../content';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withRouter } from "react-router";


const styles = {
	Home: {
		width: '100%',
		padding: 20
	},
	media: {
	    height: 250,
	},
	card: {
		width: 'calc(100% - 40px)',
		marginBottom: 20
	}
}

class Home extends React.Component{

	onLearnMoreclicked = (id) => {
		this.props.history.push('/blogPost/'+id);
	}

	render(){
		const {classes} = this.props;

		const blogs = [];
		for(let i=0; i<blogPosts.length; i++){
			const bPost = blogPosts[i];
			blogs.push(
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
			          <Typography variant="body2" color="textSecondary" component="p">
			            {bPost.summaryText}
			          </Typography>
			        </CardContent>
			      <CardActions>
			        <Button size="small" color="black" onClick={() => this.onLearnMoreclicked(bPost.id)}>
			        	Know More
			        </Button>
			      </CardActions>
			    </Card>
			)
		}

		return (
		    <div className={classes.Home}>
		    	{blogs}
		    </div>
		  );
	}
}

export default withRouter((withStyles(styles))(Home));
