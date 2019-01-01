const graphql = require('graphql');
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

// define output types
const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        _id: {type: GraphQLID},
        email: {type: GraphQLString},
        username: {type: GraphQLString},
        password: {type: GraphQLString},
        latestLoginDT: {type: GraphQLString},
        status: {type: GraphQLString},
        student: {
            type: StudentsType,
            resolve(parent, args){
                return Students.findOne({user: parent.id});
            }
        },
        acceptedTos: {type: GraphQLString},
        accpetedTosDT: {type: GraphQLString},
        createdBy: {type: GraphQLString},
        createdDT: {type: GraphQLString},
        modifedBy: {type: GraphQLString},
        modifiedDT: {type: GraphQLString}
    })
});

const StudentsType = new GraphQLObjectType({
    name: 'Students',
    fields: (parent, args, req) => ({
        user: {
            type: UserType,
            resolve(parent, args){
                return User.findOne({student: parent.id});
            }
        },
        detail: {type: detailType},
        school: {type: GraphQLID}, 
        year: {type: GraphQLString},
        schoolGroups: {type: GraphQLList},
        advisers: {type: GraphQLList},
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
            args: {username: {type: GraphQLString}, password: {type: GraphQLString}},
            resolve(parent, args){
                // return a single user
                return User.findOne({username: args.username, password: args.password});
            }
        },

        student: {
            type: StudentsType,
            args: {username: {type: GraphQLString}, password: {type: GraphQLString}},
            resolve(parent, args){
                // return a single student
                return Students.findOne({username: args.username, password: args.password});
            }
        }
    }
});


const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: UserType,
            args: {
                email: {type: GraphQLString},
                username: {type: GraphQLString},
                password: {type: GraphQLString},
                latestLoginDT: {type: GraphQLString},
                status: {type: GraphQLString},
                student: {type: StudentsType},
                acceptedTos: {type: GraphQLString},
                accpetedTosDT: {type: GraphQLString},
                createdBy: {type: GraphQLString},
                createdDT: {type: GraphQLString},
                modifedBy: {type: GraphQLString},
                modifiedDT: {type: GraphQLString}
            },

            resolve(parent, args){
                let user = new User({
                    email: args.email,
                    username: args.username,
                    password: args.password,
                    latestLoginDT: args.latestLoginDT,
                    status: args.status,
                    student: args.student,
                    accpetedTos: args.acceptedTos,
                    accpetedTosDT: args.accpetedTosDT,
                    createdBy: args.createdBy,
                    createdDT: args.createdDT,
                    createdBy: args.createdBy,
                    modifiedDT: args.modifiedDT
                });

                return user.save();
            }
        },

        addStudent: {
            type: UserType,
            args:{
                user: {type: UserType},
                detail: {type: detailType},
                school: {type: GraphQLID}, 
                year: {type: GraphQLString},
                schoolGroups: {type: GraphQLList},
                advisers: {type: GraphQLList},
                predictedScores: {type: predicetdScoreType},
                transcripts: {type: new GraphQLList(transcriptsType)}, 
                strengths: {type: GraphQLString},
                weaknesses: {type: GraphQLString},
                acquiantanceTime: {type: GraphQLString},
                abilityRates: {type: new GraphQLList(abilityRatesType)},
                recommendations: {type: GraphQLList}, // add recommendationType.js
                application: {type: new GraphQLList(applicationsType)},
                applicationResults: {type: new GraphQLList(applicationsResultsType)},
                applicationStatus: {type: GraphQLID},
                examinations: {type: new GraphQLList(examinationsType)},
                scholarships: {type: new GraphQLList(scholarshipType)},
                createdDT: {type: GraphQLString},
                createdBy: {type: GraphQLString},
                modifiedDT: {type: GraphQLString},
                modifiedBy: {type: GraphQLString}
            },

            resolve(parent, args){
                let student = new Students({
                })
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});