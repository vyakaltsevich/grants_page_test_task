import {gql, useMutation, useQuery} from "@apollo/client";
import {EdgeGrant} from "./types";

const getGrantMatchesGql = gql`
query {
  getAllGrants(input: {}) {
    edges {
      cursor
      node {
        id
        foundationName
        grantName
        averageAmount
        deadline
        location
        area
        isActive
      }
    }
    pageInfo {
      endCursor
      startCursor
      hasNextPage
      hasPreviousPage
    }
    totalCount
  }
}
`;

export const useGrantsMatchesQuery = () =>
    useQuery<{
        getAllGrants: {
            edges: EdgeGrant[]
        }
    }>(getGrantMatchesGql);

const getSavedGrantsGql = gql`
query{
  getUserGrants(input: {userId: 1}){
    edges {
      cursor
      node {
        id
        foundationName
        grantName
        averageAmount
        deadline
        status
      }
    }
    pageInfo {
      endCursor
      startCursor
      hasNextPage
      hasPreviousPage
    }
    totalCount
  }
}
`;

export const useSavedGrantsQuery = () =>
    useQuery<{
        getUserGrants: {
            edges: EdgeGrant[]
        }
    }>(getSavedGrantsGql);

const saveGrantGql = gql`
mutation CreateUserGrant($grantId: Int!, $feedback: String!, $isApproved: Boolean!){
  createUserGrant(input: {feedback: $feedback, grantId: $grantId, userId: 1, isApproved: $isApproved}){
    status,
    averageAmount,
    deadline,
    grantName,
    foundationName,
    matchDate
  }
}
`;

export const useSaveGrantMutation = () => useMutation(saveGrantGql);
