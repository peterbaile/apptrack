const graphql = require('graphql');
const {GraphQLObjectType, GraphQLString, GraphQLList, GraphQLID} = graphql;

const AbilityRatesType = new GraphQLObjectType({
    name: 'Rates',
    fields:() => ({
        type: {type: GraphQLString},
        rate: {type: GraphQLString}
    })
});

module.exports = AbilityRatesType;