const graphql = require('graphql');
const {GraphQLObjectType, GraphQLString, GraphQLList, GraphQLID} = graphql;

const DetailType = new GraphQLObjectType({
    name: 'Detail',
    fields: () => ({
        lastName: {type: GraphQLString},
        middleName: {type: GraphQLString},
        firstName: {type: GraphQLString},
        address: {type: GraphQLString},
        dob: {type: GraphQLString},
        phone: {type: new GraphQLList(new GraphQLObjectType({
            name: "Phone",
            fields: () => ({
                type: {type: GraphQLString},
                value: {type: GraphQLString}
            })
        }))},
        additionalEmail: {type: new GraphQLList(GraphQLString)}
    })
});

module.exports = DetailType;