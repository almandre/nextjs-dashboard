import { InvoiceFormState } from "@/app/lib/actions";

export default function ErrorMessage({ id, name, state, defaultMessage }: { id: string, name?: string, state?: InvoiceFormState, defaultMessage?: string }) {
  const errors = state?.errors ? state?.errors[name ?? ''] : [defaultMessage ?? ''];

  return (
    <div id={id} aria-live="polite" aria-atomic="true">
      {errors?.map((error: string) => (
        <p className="mt-2 text-sm text-red-500" key={error}>
          {error}
        </p>
      ))}
    </div>
  );
}
