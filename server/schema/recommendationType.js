const graphql = require('graphql');
const {GraphQLObjectType, GraphQLString, GraphQLList, GraphQLID} = graphql;
const applicationType = require('./applicationsType');

const RecommendationType = new GraphQLObjectType({
    name: 'Recommendation',
    fields: () => ({
        _id: {type: GraphQLID},
        adviserName: {type: GraphQLString},
        application: {type: new GraphQLList(applicationType)},
        type: {type: GraphQLString},
        filename: {type: GraphQLString},
        path: {type: GraphQLString},
        text: {type: GraphQLString},
        status: {type: GraphQLString},
        uploadedBy: {type: GraphQLID},
        uploadedDT: {type: GraphQLString}
    })
});

module.exports = RecommendationType;