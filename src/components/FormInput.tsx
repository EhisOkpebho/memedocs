import {DetailedHTMLProps, FC, InputHTMLAttributes} from "react";
import {CircleHelp} from "lucide-react";

type Props = { label: string, description?: string } & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const FormInput: FC<Props> = ({ label, description,  ...rest }) => {
    return (
        <>
            <fieldset className='flex flex-col space-y-1'>
                <label className='tracking-wide uppercase font-semibold text-xs text-gray-900'>
                    {label}
                    { description && <CircleHelp className='ml-1 mb-0.5 inline size-3'/> }
                </label>
                <input {...rest} placeholder='Aucune donnée'
                       className='px-2 h-10 rounded outline-none focus:ring-2 focus:ring-primary border border-gray-200 focus:bg-primary/5 text-gray-700 tracking-wide uppercase text-xs'/>
            </fieldset>
        </>
    )
}

export default FormInput
