const graphql = require('graphql');
const {GraphQLObjectType, GraphQLString, GraphQLList, GraphQLID, GraphQLBoolean} = graphql;

const ScholarshipType = new GraphQLObjectType({
    name: 'Schoalrship',
    fields:() => ({
        id: {type: GraphQLID},
        scholarshipItem: {type: GraphQLID},
        isOther: {type: GraphQLBoolean},
        otherScholarshipTitle: {type: GraphQLString},
        status: {type: GraphQLString},
        createdDT: {type: GraphQLString},
        createdBy: {type: GraphQLString},
        modifiedDT: {type: GraphQLString},
        modifiedBy: {type: GraphQLString},
    })
});

module.exports = ScholarshipType;