// react hooks
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import ReactTable from "react-table-v6";
import { getData } from "../redux/Action";
//css
import {} from "react-table-v6/react-table.css";
import { Button } from "@material-ui/core";

export default function Home() {
  const [loading] = useState("loading . . . . . . . ");
  const [count, setcount] = useState(0);
  const state = useSelector((state) => state);
  const data = useSelector((state) => state.paginationData);
  const dispatch = useDispatch();
  const history = useHistory();

  const actionHandler = (original) => {
    history.push({ pathname: "/rawjsondata", data: original });
  };

  useEffect(() => {
    const fetch = () => {
      const url = `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${count}`;
      dispatch(getData(url));
    };
    setTimeout(() => {
      fetch();
      setcount(count + 1);
    }, 10 * 1000);
  }, [dispatch, count]);

  const columns = [
    {
      // header for heading
      Header: () => <h3 className=" row-design">TITLE</h3>,
      //accessor for accessing data
      accessor: "title",
    },
    {
      Header: () => <h3 className=" row-design">CREATED_AT</h3>,
      accessor: "created_at",
    },
    {
      Header: () => <h3 className=" row-design">URL</h3>,
      accessor: "url",
      //cell is use for accessing data of each columns
      Cell: (props) => {
        return (
          // button is use for url button
          <Button
            variant="outlined"
            color="primary"
            href={props.value || "#"}
            target="_blank"
          >
            URL
          </Button>
        );
      },
    },
    {
      Header: () => <h3 className=" row-design">AUTHOR</h3>,
      accessor: "author",
    },
    {
      Header: () => <h3 className=" row-design">ACTION</h3>,
      Cell: (props) => {
        return (
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              actionHandler(props.original);
            }}
          >
            Raw Json
          </Button>
        );
      },
    },
  ];
  return (
    <div>
      {state.error === null ? (
        <ReactTable
          data={data}
          columns={columns}
          defaultPageSize={10}
          noDataText={loading}
          className="-striped -highlight"
        ></ReactTable>
      ) : (
        <h1>error something is wrong </h1>
      )}
    </div>
  );
}
