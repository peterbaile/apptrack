const graphql = require('graphql');
const {GraphQLObjectType, GraphQLString, GraphQLList, GraphQLID} = graphql;

const PredictedScoreType = new GraphQLObjectType({
    name: 'PredictedScore',
    fields: () => ({
        expectedResultDT: {type: GraphQLString},
        examType: {type: GraphQLString},
        scores: {type: new GraphQLList(new GraphQLObjectType({
            name: "Score",
            fields: () => ({
                id: {type: GraphQLID},
                subject: {type: GraphQLString},
                level: {type: GraphQLString},
                score: {type: GraphQLString}
            })
        }))},
        totalScores: {type: GraphQLString}
    })
});

module.exports = PredictedScoreType;