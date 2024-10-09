import {DetailedHTMLProps, FC, InputHTMLAttributes} from "react";
import {CircleHelp, LucideIcon} from "lucide-react";
import {cs} from "../utils/utils";

type Props = { label: string, icon?: LucideIcon, description?: string, fill?: boolean } & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const FormInput: FC<Props> = ({ label, icon: Icon, description, fill, className,  ...rest }) => {
    return (
        <>
            <fieldset className={cs('flex flex-col space-y-1', fill && 'w-full')}>
                <label className='tracking-wide uppercase font-semibold text-xs text-gray-900'>
                    { Icon && <Icon className='mr-1 mb-0.5 size-3  inline' /> }
                    {label}
                    { description && <CircleHelp className='ml-1 mb-0.5 inline size-3'/> }
                </label>
                <input {...rest}
                       className={cs('px-2 w-full h-10 rounded outline-none focus:ring-2 focus:ring-primary border border-gray-200 focus:bg-primary/5 text-gray-700 tracking-wide uppercase text-xs', className)}/>
            </fieldset>
        </>
    )
}

export default FormInput
