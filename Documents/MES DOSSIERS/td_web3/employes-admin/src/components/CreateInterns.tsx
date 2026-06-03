import {
  useCreate,
  useRefresh,
  useGetList,
  Toolbar,
  SaveButton,
  Button,
} from "react-admin";
import { useState } from "react";
import {
  SimpleForm,
  TextInput,
  BooleanInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  FormDataConsumer,
  required,
  email,
  minValue,
  useNotify,
} from "react-admin";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { Employee } from "../interface";
import { DepartmentField } from "../interns/InternCreate";

export const AddInternButton = () => {
  const [open, setOpen] = useState(false);
  const { data: employees } = useGetList<Employee>("employees");
  const [create, { isPending }] = useCreate();
  const refresh = useRefresh();
  const notify = useNotify();

  const handleClose = () => setOpen(false);

  const handleSubmit = (formData: Record<string, unknown>) => {
    const payload = {
      ...formData,
      ...(!formData.remunerate ? { salary: undefined } : {}),
    };

    create(
      "interns",
      { data: payload },
      {
        onSuccess: () => {
          refresh();
          notify("Intern add successfully !", { type: "success" });
          handleClose();
        },
        onError: (err: unknown) => {
          const message = err instanceof Error ? err.message : " Error ";
          notify(message, { type: "error" });
        },
      },
    );
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Add Intern
      </Button>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Add Intern</DialogTitle>

        <DialogContent>
          <SimpleForm
            onSubmit={handleSubmit}
            toolbar={
              <Toolbar>
                <SaveButton
                  label={isPending ? "Creation..." : "Create"}
                  disabled={isPending}
                />
                <Button onClick={handleClose} disabled={isPending}>
                  Cancel
                </Button>
              </Toolbar>
            }
          >
            <TextInput
              source="firstname"
              label="FIRSTNAME"
              validate={required()}
              fullWidth
            />
            <TextInput
              source="lastname"
              label="LASTNAME"
              validate={required()}
              fullWidth
            />
            <TextInput
              source="email"
              label="EMAIL"
              validate={[required(), email()]}
              fullWidth
            />
            <ReferenceInput source="employee_id" reference="employees">
              <SelectInput
                optionText={(record) =>
                  `${record.firstname} ${record.lastname}`
                }
                label="MANAGER"
                validate={required()}
                fullWidth
              />
            </ReferenceInput>

            <DepartmentField employees={employees} />

            <BooleanInput source="remunerate" label="REMUNERATE" />

            <FormDataConsumer<{ remunerate: boolean }>>
              {({ formData }) =>
                formData.remunerate && (
                  <NumberInput
                    source="salary"
                    label="Salary (€)"
                    validate={[required(), minValue(1500)]}
                    min={1500}
                    fullWidth
                  />
                )
              }
            </FormDataConsumer>

            <BooleanInput source="active" label="ACTIF" defaultValue={true} />
          </SimpleForm>
        </DialogContent>
      </Dialog>
    </>
  );
};
