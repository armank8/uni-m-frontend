import { ReactElement, ReactNode } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
type FormConfig = {
    defaultValues?: Record<string, any>
};

type FormProps = {
    children?: ReactElement | ReactNode;
    SubmitHandler: SubmitHandler<any>;
} & FormConfig;

export default function Form({ children, submitHandler, defaultValues }: FormProps) {
    const formConfig: FormConfig = {};
    if (!!defaultValues) formConfig["defaultValues"] = defaultValues;

    const methods = useForm<FormProps>(formConfig);
    const { handleSubmit, reset } = methods;

    const onSubmit = (data: any) => {
        submitHandler(data);
        reset();
    }

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                {children}
            </form>
        </FormProvider>
    )
}

