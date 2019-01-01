const graphql = require('graphql');
const {GraphQLObjectType, GraphQLString, GraphQLList, GraphQLID} = graphql;

const RecommendationType = new GraphQLObjectType({
    name: 'Recommendation',
    fields: () => ({
        _id: {type: GraphQLID},
        adviserName: {type: GraphQLString},
        application: {type: GraphQLList},
        type: {type: GraphQLString},
        filename: {type: GraphQLString},
        path: {type: GraphQLString},
        text: {type: GraphQLString},
        status: {type: GraphQLString},
        uploadedBy: {types: GraphQLID},
        uploadedDT: {type: GraphQLString}
    })
});

module.exports = RecommendationType;