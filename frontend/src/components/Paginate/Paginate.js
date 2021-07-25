import { Pagination } from "@material-ui/lab";
import React, { useState } from "react";
import { useHistory, useParams, useRouteMatch } from "react-router";
import useStyles from "./styles";

const Paginate = ({ totalPages, page }) => {
  const styles = useStyles();
  const history = useHistory();
  const match = useRouteMatch();
  const [actualPage, setActualPage] = useState(page);
  const { keyword } = match.params;
  const pageChangeHandler = (e, value) => {
    setActualPage(value);
    if (keyword) {
      history.push(`/search/${keyword}/${value}`);
    } else {
      history.push(`/page/${value}`);
    }
  };
  return (
    <div className={styles.pagination}>
      <Pagination
        className={styles.pag}
        color="primary"
        count={totalPages}
        page={actualPage}
        onChange={pageChangeHandler}
        variant="outlined"
        shape="rounded"
      />
    </div>
  );
};

export default Paginate;
