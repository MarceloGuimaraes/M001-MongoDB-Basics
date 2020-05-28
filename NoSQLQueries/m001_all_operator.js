db.movieDetails.find({genres: {$all: ["Comedy", "Crime", "Drama"]}}, 
                     {_id: 0, title: 1, genres: 1}).pretty()
					 
					 
					 db.movies.find({cast : {$all: ["Jack Nicholson", "John Huston"]}}), 
                     {_id: 0, title: 1, genres: 1}).pretty()

					 
				

					 
					 db.movies.find({"$and": [{"cast": {"$in": ["Jack Nicholson", "John Huston"]}}, {"viewerRating": {"$gt": 7}}, {"mpaaRating": "R"}]})