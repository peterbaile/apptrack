const graphql = require('graphql');
const {GraphQLObjectType, GraphQLString, GraphQLList, GraphQLID} = graphql;

const ExaminationsType = new GraphQLObjectType({
    name: 'Examinations',
    fields: () => ({
        id: {type: GraphQLID},
        student: {type: GraphQLID},
        examinationItems: {type: GraphQLID},
        scores: {type: new GraphQLList(new GraphQLObjectType({
            name: 'Scores',
            fields: () => ({
                examItemSubject: {type: GraphQLID},
                score: {type: GraphQLString}
            })
        }))},
        totalScore: {type: GraphQLString},
        status: {type: GraphQLString},
        createdDT: {type: GraphQLString},
        createdBy: {type: GraphQLString},
        modifiedDT: {type: GraphQLString},
        modifiedBy: {type: GraphQLString}
    })
});

module.exports = ExaminationsType;