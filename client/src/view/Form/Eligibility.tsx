import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Flex } from "@rebass/grid";

import { createCustomer, patchCustomer } from "../../api";
import {
  Button,
  Card,
  Fieldset,
  Form,
  Input,
  Option,
  Select,
  Wrapper,
} from "../../component";
import { useStoreContext } from "../../context";
import { provideRequiredError } from "../../util";

export const EligibilityForm = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const { state, setState } = useStoreContext();
  const { handleSubmit, register, errors } = useForm({
    defaultValues: {
      title: state?.customer?.title,
      firstName: state?.customer?.firstName,
      lastName: state?.customer?.lastName,
      dateOfBirth: state?.customer?.dateOfBirth,
      employmentStatus: state?.customer?.employmentStatus,
      annualIncome: state?.customer?.annualIncome,
      address: {
        houseNumber: state?.customer?.address?.houseNumber,
        postCode: state?.customer?.address?.postCode,
      },
    },
  });

  const onSubmit = async (customer: Customer) => {
    try {
      setLoading(true);
      let newCustomer: Customer | undefined = undefined;

      if (state?.customer?.id) {
        newCustomer = await patchCustomer({
          id: state?.customer?.id,
          options: {
            body: JSON.stringify({ customer }),
          },
        });
      } else {
        newCustomer = await createCustomer({
          options: {
            body: JSON.stringify({ customer }),
          },
        });
      }
      if (newCustomer) {
        setState &&
          setState((prevState) => ({
            ...prevState,
            customer: newCustomer,
          }));
      }
      setLoading(false);
      history.push("/check-eligibility");
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

  const requiredError = provideRequiredError(errors);

  return (
    <Wrapper>
      <Card>
        <Flex justifyContent="center">
          <h1 style={{ whiteSpace: "nowrap" }}>Your details</h1>
        </Flex>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Fieldset>
            <label htmlFor="title">Title</label>
            <Select ref={register} name="title" defaultValue="">
              <Option disabled value="" />
              <Option value="Mr">Mr</Option>
              <Option value="Mrs">Mrs</Option>
              <Option value="Ms">Ms</Option>
              <Option value="Miss">Miss</Option>
              <Option value="Dr">Dr</Option>
            </Select>

            <label htmlFor="firstName">First name</label>
            <Input name="firstName" ref={register} />
            <label htmlFor="lastName">Last name</label>
            <Input name="lastName" ref={register} />
            <label htmlFor="dateOfBirth">Date of birth</label>
            <Input name="dateOfBirth" ref={register} />

            <label htmlFor="employmentStatus">
              Employment status<span>*</span>
            </label>
            <Select
              ref={register({
                required: true,
              })}
              name="employmentStatus"
              defaultValue=""
            >
              <Option disabled>{requiredError("employmentStatus")}</Option>
              <Option value="fullTime">Full time</Option>
              <Option value="partTime">Part time</Option>
              <Option value="student">Student</Option>
            </Select>

            <label htmlFor="annualIncome">
              Annual income<span>*</span>
            </label>
            <Input
              type="number"
              name="annualIncome"
              ref={register({
                required: true,
              })}
              placeholder={requiredError("annualIncome")}
            />

            <label htmlFor="address.houseNumber">House number</label>
            <Input name="address.houseNumber" ref={register} />
            <label htmlFor="address.postCode">Postcode</label>
            <Input name="address.postCode" ref={register} />
            <Button disabled={loading} type="submit">
              {loading ? "Loading" : "Submit"}
            </Button>
          </Fieldset>
        </Form>
      </Card>
    </Wrapper>
  );
};
