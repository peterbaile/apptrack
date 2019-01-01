const graphql = require('graphql');
const {GraphQLObjectType, GraphQLString, GraphQLList, GraphQLID, GraphQLBoolean} = graphql;

const ApplicationResultsType = new GraphQLObjectType({
    name: "ApplicationResults",
    fields: () => ({
        id: {type: GraphQLID},
        application: {type: GraphQLID},
        university: {type: GraphQLString},
        applicationNo: {type: GraphQLString},
        offerStatus: {type: GraphQLString},
        offerCondition: {type: GraphQLString},
        programmeOffered: {type: GraphQLString},
        matriculation: {type: GraphQLBoolean},
        status: {type: GraphQLString},
        createdDT: {type: GraphQLString},
        modifiedBy: {type: GraphQLString},
        modifiedDT: {type: GraphQLString}
    })
});

module.exports = ApplicationResultsType;