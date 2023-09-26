// src/components/PunkTransferQuery.js
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import React from 'react';

function timestampToFormattedString(timestamp) {
  const date = new Date(timestamp * 1000); // Convert timestamp to milliseconds
  const formattedString = date.toISOString().slice(0, 19).replace("T", " ");
  return formattedString;
}

const PunkTransferQuery = ({ punkIndex, from, to }) => {

  const GET_PUNK_TRANSFERS = gql`
    query GetPunkTransfers($punkIndex: BigInt, $from: Bytes, $to: Bytes) {
        punkTransfers(where: {${punkIndex !== "" ? "punkIndex: $punkIndex,": ""} ${from !== ""? "from: $from,": ""} ${to !== ""? "to: $to": ""} }, orderBy: blockNumber, first: 25) {
            from
            to
            punkIndex
            blockNumber
            blockTimestamp
            transactionHash
        }
    }
`;

  const { loading, error, data } = useQuery(GET_PUNK_TRANSFERS, {
        variables: {from, to, punkIndex},
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>Block Number</th>
          <th>Punk Index</th>
          <th>From</th>
          <th>To</th>
          <th>Block Timestamp</th>
          <th>Transaction Hash</th>
        </tr>
      </thead>
      <tbody>
        {data.punkTransfers.map((transfer) => (
          <tr key={transfer.id}>
            <td>{transfer.blockNumber}</td>
            <td>{transfer.punkIndex}</td>
            <td>{transfer.from}</td>
            <td>{transfer.to}</td>
            <td>{timestampToFormattedString(transfer.blockTimestamp)}</td>
            <td>{transfer.transactionHash}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PunkTransferQuery;
