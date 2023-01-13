import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Device = Node & {
  __typename?: 'Device';
  _id: Scalars['Int'];
  color: Scalars['String'];
  deviceHealth: Scalars['String'];
  id: Scalars['ID'];
  lastUsed: Scalars['String'];
  location: Scalars['String'];
  price: Scalars['Float'];
  type: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a Device. */
  createDevice?: Maybe<CreateDevicePayload>;
  /** Deletes a Device. */
  deleteDevice?: Maybe<DeleteDevicePayload>;
  /** Updates a Device. */
  updateDevice?: Maybe<UpdateDevicePayload>;
};


export type MutationCreateDeviceArgs = {
  input: CreateDeviceInput;
};


export type MutationDeleteDeviceArgs = {
  input: DeleteDeviceInput;
};


export type MutationUpdateDeviceArgs = {
  input: UpdateDeviceInput;
};

/** A node, according to the Relay specification. */
export type Node = {
  /** The id of this node. */
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  device?: Maybe<Device>;
  devices?: Maybe<Array<Maybe<Device>>>;
  node?: Maybe<Node>;
};


export type QueryDeviceArgs = {
  id: Scalars['ID'];
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};

/** Creates a Device. */
export type CreateDeviceInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  color: Scalars['String'];
  deviceHealth: Scalars['String'];
  lastUsed: Scalars['String'];
  location: Scalars['String'];
  price: Scalars['Float'];
  type: Scalars['String'];
};

/** Creates a Device. */
export type CreateDevicePayload = {
  __typename?: 'createDevicePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  device?: Maybe<Device>;
};

/** Deletes a Device. */
export type DeleteDeviceInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};

/** Deletes a Device. */
export type DeleteDevicePayload = {
  __typename?: 'deleteDevicePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  device?: Maybe<Device>;
};

/** Updates a Device. */
export type UpdateDeviceInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  color?: InputMaybe<Scalars['String']>;
  deviceHealth?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  lastUsed?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  type?: InputMaybe<Scalars['String']>;
};

/** Updates a Device. */
export type UpdateDevicePayload = {
  __typename?: 'updateDevicePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  device?: Maybe<Device>;
};

export type DevicesQueryVariables = Exact<{ [key: string]: never; }>;


export type DevicesQuery = { __typename?: 'Query', devices?: Array<{ __typename?: 'Device', _id: number, location: string, type: string, deviceHealth: string, lastUsed: string, price: number, color: string } | null> | null };


export const DevicesDocument = gql`
    query Devices {
  devices {
    _id
    location
    type
    deviceHealth
    lastUsed
    price
    color
  }
}
    `;

/**
 * __useDevicesQuery__
 *
 * To run a query within a React component, call `useDevicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useDevicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDevicesQuery({
 *   variables: {
 *   },
 * });
 */
export function useDevicesQuery(baseOptions?: Apollo.QueryHookOptions<DevicesQuery, DevicesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DevicesQuery, DevicesQueryVariables>(DevicesDocument, options);
      }
export function useDevicesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DevicesQuery, DevicesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DevicesQuery, DevicesQueryVariables>(DevicesDocument, options);
        }
export type DevicesQueryHookResult = ReturnType<typeof useDevicesQuery>;
export type DevicesLazyQueryHookResult = ReturnType<typeof useDevicesLazyQuery>;
export type DevicesQueryResult = Apollo.QueryResult<DevicesQuery, DevicesQueryVariables>;