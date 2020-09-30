import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Box, Flex } from "@rebass/grid";

import { getCreditCards } from "../../api";
import { Button, Card, Wrapper } from "../../component";
import { useStoreContext } from "../../context";
import { CreditCardList } from "../CreditCardList";

const CustomerCreditCardList = () => {
  const history = useHistory();
  const { setState } = useStoreContext();

  const handleCheckEligibility = () => {
    history.push("/");
  };

  useEffect(() => {
    let ignore = false;
    getCreditCards().then((creditCards?: CreditCard[]) => {
      if (!ignore) {
        setState && setState((prevState) => ({ ...prevState, creditCards }));
      }
    });
    return () => {
      ignore = true;
    };
  }, [setState]);

  return (
    <Wrapper>
      <Card>
        <Flex flexDirection="column" alignItems="center">
          <h1>Totally Money</h1>
          <Box mt={30} width="100%">
            <Button
              data-testid="e2e-checkEligibility"
              onClick={handleCheckEligibility}
            >
              Check eligibility
            </Button>
          </Box>
        </Flex>
      </Card>

      <CreditCardList />
    </Wrapper>
  );
};

export default CustomerCreditCardList;
