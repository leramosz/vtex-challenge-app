## Development Process and Decisions – APP in ReactJS

My initial idea for this Code Challenge was more ambitious than what I ended up implementing. This idea was to build an application that implemented the following:

- A back office site to administrate movies and movie categories (CRUD)
- A customer site to allow them to enter via login, to check movies and movie categories, to add/remove movies to/from favorites, to add/delete reviews to/from movies.

However, I realized that I had too many time constraints so I decided to focus in implementing something simpler but complex enough to show important skills you need when you use React. Then, the final implementation was an application that allows:

- To check movies and movie categories

One of the needed skills for ReactJS is to know how to consume APIs and how to handle the state of each component after receiving the data. The other important skill is to know how to propagate data between components using props so you can re-use these components in different parts of the application. Thus, my implementation and my learning process was oriented to achieve these skills.

There are a few components that I re-used in the application: CategoryList, Title, Rating and MainContent; calling the API when corresponded and in the right place (componentDidMount).

Another important decision that I made was using CSS Frameworks like React Boostrap and Bulma. I decided to use the former because I had some experience using the standard version so it was easy form to pick up the idea of how to use it in ReactJS. I used the latter because I needed some pre-built HTML components so I could easily add them to the application. 

In terms of testing, I decided to use Enzyme because I learned from my investigation that is one the best libraries to test ReactJS components. Also, because its syntax is pretty similar to RSpec that I used in the past to test Ruby on Rails applications. 

Finally, to show more personal skills I decided to use Docker so the application can be run easily in any environment.