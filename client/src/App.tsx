import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Flex } from "@rebass/grid";

import { CustomerCreditCardList, EligibilityForm } from "./view";

const App = () => {
  return (
    <Router>
      <Flex width="100%" flexDirection="column" height="100%">
        <Switch>
          <Route path={["/"]} exact component={EligibilityForm} />
          <Route
            path={["/check-eligibility"]}
            component={CustomerCreditCardList}
          />
          <Route render={() => <>Not Found</>} />
        </Switch>
      </Flex>
    </Router>
  );
};

export default App;
