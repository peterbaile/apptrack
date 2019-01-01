const graphql = require('graphql');
const {GraphQLObjectType, GraphQLString, GraphQLList, GraphQLID} = graphql;

const TranscriptsType = new GraphQLObjectType({
    name: 'Transcripts',
    fields: () => ({
        id: {type: GraphQLID},
        student: {type: GraphQLString},
        filename: {type: GraphQLString},
        path: {type: GraphQLString},
        status: {type: GraphQLString},
        uploadedBy: {type: GraphQLID},
        uploadedDT: {type: GraphQLString}
    })
});

module.exports = TranscriptsType;