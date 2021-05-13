import { Button, List, ListItem } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";

export default function Raw_json_data(props) {
  const history = useHistory();
  const original = props.location.data;

  return (
    <div>
      <List>
        <ListItem> {JSON.stringify(original)}</ListItem>
      </List>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => history.goBack()}
      >
        GO BACK
      </Button>
    </div>
  );
}
