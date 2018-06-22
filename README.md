# What problem does GraphQL want to solve?

### Problems with REST:

- When things start to get super nested
  - If a user has a company_name and a position_name
  - Schema database would need to JOIN on those tables
    - /users/23/companies... too many http requests if you wanna get all your friends companies
    - /users/23/friends/companies... ? too customized
    - /users/23/friends_with_companies... not RESTful
  - Also we only care about on that request is company name
- **Difficult to decide on a URL schema**
- **Can be making too many HTTP Requests**
- **Easy to overserve data**

# What is GraphQL?

- A query language that allows data to be queried using a graph data structure

# Lokka vs. Apollo vs. Relay

- Lokka: Super simple. Basic queries, mutations, some simple caching.
- Apollo: Produced by same guys as Meteor JS. Good balance between features and complexity
- Relay: Amazing performance for modal. By far the most complex.

# How do we use GraphQL?

Link to course: https://github.com/StephenGrider/GraphQLCasts
