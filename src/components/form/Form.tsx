import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { postData } from '@homework-task/service/formService';
import { toast } from 'react-toastify';

interface FormProps {
    onBack: () => void;
}

const schema = z.object({
    title: z.string().min(1, 'Title is required').max(20),
    body: z.string().max(100),
});

type FormFields = z.infer<typeof schema>;

export const Form: React.FC<FormProps> = ({ onBack }) => {
    const {
        register,
        handleSubmit,
        reset,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<FormFields>({
        resolver: zodResolver(schema),
    });

    const mutation = useMutation<FormFields, unknown, FormFields>({
        mutationFn: postData,
        onSuccess: () => {
            toast.success('Data posted successfully');
            reset();
        },
        onError: (error) => {
            const message =
                error instanceof Error ? error.message : 'Error posting data';
            toast.error(message);
        },
    });

    const onSubmit: SubmitHandler<FormFields> = (data) => {
        mutation.mutate(data);
    };
    return (
        <form className="w-8/12" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-3xl font-bold">Form</h1>
            <button className="text-base text-primary pt-4" onClick={onBack}>
                Back
            </button>
            <input
                {...register('title')}
                type="text"
                placeholder="Title"
                className="border border-gray-400 w-full p-2 my-2"
            />
            {errors.title && (
                <p className="text-red-500 text-sm">{errors.title.message}</p>
            )}
            <textarea
                {...register('body')}
                placeholder="Body"
                className="border border-gray-400 w-full p-2 my-2"
            />
            {errors.body && (
                <p className="text-red-500 text-sm">{errors.body.message}</p>
            )}
            <button
                disabled={isSubmitting || mutation.isPending}
                className="bg-primary text-white w-full p-2 mt-2"
            >
                {isSubmitting || mutation.isPending
                    ? 'Submitting...'
                    : 'Submit'}
            </button>
        </form>
    );
};