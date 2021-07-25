import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router";

const SearchBox = ({ params }) => {
  const history = useHistory();
  const [keyword, setKeyword] = useState("");
  const keywordSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };
  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={10}>
        <form onSubmit={keywordSubmitHandler}>
          <TextField
            label="Найти продукт"
            onChange={(e) => setKeyword(e.target.value)}
            fullWidth
            value={keyword}
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton onClick={keywordSubmitHandler}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </form>
      </Grid>
    </Grid>
  );
};

export default SearchBox;
