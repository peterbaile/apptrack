const graphql = require('graphql');
const {getGraphQLUpdateArgs, getMongoDbUpdateResolver,
getMongoDbQueryResolver} = require('graphql-to-mongodb');
const User = require('../models/user');
const Students = require('../models/students');
const detailType = require('./detailType');
const predicetdScoreType = require('./predictedScoreType');
const transcriptsType = require('./transcriptsType');
const applicationsType = require('./applicationsType');
const applicationsResultsType = require('./applicationResultsType');
const examinationsType = require('./examinationsType');
const scholarshipType = require('./scholarshipType');
const abilityRatesType = require('./abilityRatesType');
const recommendationType = require('./recommendationType');
const {GraphQLObjectType, GraphQLString, GraphQLSchema, 
GraphQLID, GraphQLInt, GraphQLList} = graphql;

function extractFormat(paraName, fieldName) {
    var resultJSON = {};
    for (key in paraName) {
        if (key.includes(fieldName + ".")) {
                var newkey = key.substring(key.indexOf(fieldName + ".") + 8);
                resultJSON[newkey] = paraName[key];
        }
    }
    return resultJSON;
};

const StudentsType = new GraphQLObjectType({
    name: 'Students',
    fields: () => ({
        id: {type: GraphQLID},
        user: {type: UserType},
        detail: {type: detailType},
        school: {type: GraphQLID}, 
        year: {type: GraphQLString},
        schoolGroups: {type: new GraphQLList(GraphQLString)},
        advisers: {type: GraphQLID},
        predictedScores: {type: predicetdScoreType},
        transcripts: {type: new GraphQLList(transcriptsType)}, 
        strengths: {type: GraphQLString},
        weaknesses: {type: GraphQLString},
        acquiantanceTime: {type: GraphQLString},
        abilityRates: {type: new GraphQLList(abilityRatesType)},
        recommendations: {type: new GraphQLList(recommendationType)},
        application: {type: new GraphQLList(applicationsType)},
        applicationResults: {type: new GraphQLList(applicationsResultsType)},
        applicationStatus: {type: GraphQLID},
        examinations: {type: new GraphQLList(examinationsType)},
        scholarships: {type: new GraphQLList(scholarshipType)},
        createdDT: {type: GraphQLString},
        createdBy: {type: GraphQLString},
        modifiedDT: {type: GraphQLString},
        modifiedBy: {type: GraphQLString}
    })
});

const UserCommonInput = {
    id: { type: GraphQLID },
    email: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    latestLoginDT: { type: GraphQLString },
    status: { type: GraphQLString },
    acceptedTos: { type: GraphQLString },
    accpetedTosDT: { type: GraphQLString },
    createdBy: { type: GraphQLString },
    createdDT: { type: GraphQLString },
    modifedBy: { type: GraphQLString },
    modifiedDT: { type: GraphQLString }
}

const UserInputType = {
    ...UserCommonInput,
    student: {type: StudentsType},
}

const UserReturnType = {
    ...UserCommonInput,
    student: {
        type: StudentsType,
        resolve: async (parent, args) => {
            const student = await Students.findOne({user: parent._id});
            console.log(student);
            return student;
        }
    }
}

// define output types
const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => UserInputType
});

const UserReturnTypeObj = new GraphQLObjectType({
    name: 'UserReturnType',
    fields: () => UserReturnType
});

// define the input type
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args){
                // return all users
                return User.find({});
            }
        },

        students:{
            type: new GraphQLList(StudentsType),
            resolve(parent, args){
                //return all students
                return Students.find({});
            }
        },

        user:{
            type: UserType,
            args: {
                username: {type: GraphQLString}, 
                password: {type: GraphQLString}
            },
            resolve(parent, args){
                // return a single user
                return User.findOne({username: args.username, password: args.password});
            }
        },

        student: {
            type: StudentsType,
            args: {
                username: { type: GraphQLString },
                password: { type: GraphQLString }
            },
            resolve(parent, args){
                // return a single student
                return Students.findOne({
                    username: args.username,
                    password: args.password
                });
            }
        }
    }
});


const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser: {
      type: UserReturnTypeObj,
      args: getGraphQLUpdateArgs(UserType),
      resolve: getMongoDbUpdateResolver(UserType,
        async (filter, update, options, projection, source, args, req) => {
            console.log(update);
            const user = await User.create(update["$set"]);
            console.log(update["$set"]);
            const studentPara = extractFormat(update["$set"], "student");
            Object.assign(studentPara, {user: user.id});
            console.log(studentPara);
            console.log(extractFormat(update["$set"], "student"));
            const student = await Students.create(studentPara);
            return user;
        }
      )
    }

    // addStudent: {
    //     type: UserType,
    //     args:{
    //         user:{type: new GraphQLObjectType({
    //             name: 'User2',
    //             fields: () => ({
    //                 _id: {type: GraphQLID}
    //             })
    //         })},
    //         // user: {type: UserType},
    //         detail: {type: detailType},
    //         school: {type: GraphQLID},
    //         year: {type: GraphQLString},
    //         schoolGroups: {type: new GraphQLList(GraphQLString)},
    //         advisers: {type: GraphQLID},
    //         predictedScores: {type: predicetdScoreType},
    //         transcripts: {type: new GraphQLList(transcriptsType)},
    //         strengths: {type: GraphQLString},
    //         weaknesses: {type: GraphQLString},
    //         acquiantanceTime: {type: GraphQLString},
    //         abilityRates: {type: new GraphQLList(abilityRatesType)},
    //         recommendations: {type: new GraphQLList(recommendationType)},
    //         application: {type: new GraphQLList(applicationsType)},
    //         applicationResults: {type: new GraphQLList(applicationsResultsType)},
    //         applicationStatus: {type: GraphQLID},
    //         examinations: {type: new GraphQLList(examinationsType)},
    //         scholarships: {type: new GraphQLList(scholarshipType)},
    //         createdDT: {type: GraphQLString},
    //         createdBy: {type: GraphQLString},
    //         modifiedDT: {type: GraphQLString},
    //         modifiedBy: {type: GraphQLString}
    //     },

    //     resolve(parent, args){
    //         let student = new Students({
    //             user: args.user,
    //             detail: args.detail,
    //             school: args.school,
    //             year: args.year,
    //             schoolGroups: args.schoolGroups,
    //             advisers: args.advisers,
    //             predictedScores: args.predictedScores,
    //             transcripts: args.transcripts,
    //             strengths: args.strengths,
    //             weaknesses: args.weaknesses,
    //             acquiantanceTime: args.acquiantanceTime,
    //             abilityRates: args.abilityRates,
    //             recommendations: args.recommendations,
    //             application: args.application,
    //             applicationResults: args.applicationResults,
    //             applicationStatus: args.applicationStatus,
    //             examinations: args.examinations,
    //             scholarships: args.scholarships,
    //             createdDT: args.createdDT,
    //             createdBy: args.createdBy,
    //             modifiedDT: args.modifiedDT,
    //             modifedBy: args.modifedBy
    //         });

    //         return student.save();
    //     }
    // }
  }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});