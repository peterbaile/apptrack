const graphql = require('graphql');
const {GraphQLObjectType, GraphQLString, GraphQLList, GraphQLID, GraphQLBoolean, GraphQLInt} = graphql;

const ApplicationsType = new GraphQLObjectType({
    name: 'Applications',
    fields: () => ({
        id: {type: GraphQLID},
        status: {type: GraphQLString},
        applicationNo: {type: GraphQLString},
        applicationEmail: {type: GraphQLString},
        isOther: {type: GraphQLBoolean},
        university: {type: GraphQLID},
        universityName: {type: GraphQLString},
        admissionContact: {type: GraphQLString},
        programs: {type: new GraphQLList(new GraphQLObjectType({
            name: 'Program',
            fields: () => ({
                seq: {type: GraphQLInt},
                program: {type: GraphQLID}
            })
        }))},
        round: {type: GraphQLID},
        completedStatus: {type: GraphQLString},
        submittedReminderDT: {type: GraphQLString},
        submittedDT: {type: GraphQLString},
        submittedBy: {type: GraphQLID},
        acknowledgedDT: {type: GraphQLString},
        acknowledgedBy: {type: GraphQLID},
        universityEmailReceivedDT: {type: GraphQLString},
        createdBy: {type: GraphQLString},
        createdDT: {type: GraphQLString},
        modifedBy: {type: GraphQLString},
        modifiedDT: {type: GraphQLString},
    })
});

module.exports = ApplicationsType;