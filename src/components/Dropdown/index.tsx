import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { FC, forwardRef, RefAttributes } from 'react';
import styles from './styles.module.scss';

const CheckIcon = () => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 16 16'
        width='16'
        height='16'
    >
        <path d='M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z'></path>
    </svg>
);

const DividerHorizontalIcon = () => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 16 16'
        width='16'
        height='16'
    >
        <path d='M2 7.75A.75.75 0 0 1 2.75 7h10a.75.75 0 0 1 0 1.5h-10A.75.75 0 0 1 2 7.75Z'></path>
    </svg>
);

export const Portal = DropdownMenuPrimitive.Portal;

export const Root = DropdownMenuPrimitive.Root;
export const Trigger = DropdownMenuPrimitive.Trigger;
// export const Trigger = forwardRef<
//     HTMLButtonElement,
//     DropdownMenuPrimitive.DropdownMenuTriggerProps &
//         RefAttributes<HTMLButtonElement>
// >((props, ref) => {
//     return <DropdownMenuPrimitive.Trigger ref={ref} {...props} />;
// });

// export const Content = forwardRef<
//     HTMLDivElement,
//     DropdownMenuPrimitive.DropdownMenuContentProps &
//         RefAttributes<HTMLDivElement>
// >(({ children, ...props }, forwardedRef) => {
//     return (
//         <DropdownMenuPrimitive.Portal>
//             <DropdownMenuPrimitive.Content
//                 {...props}
//                 className={styles.content}
//                 ref={forwardedRef}
//             >
//                 {children}
//                 {/* <DropdownMenuPrimitive.Arrow /> */}
//             </DropdownMenuPrimitive.Content>
//         </DropdownMenuPrimitive.Portal>
//     );
// });

export const Content: FC<
    DropdownMenuPrimitive.MenuContentProps & RefAttributes<HTMLDivElement>
> = ({ children, ...props }) => {
    return (
        <DropdownMenuPrimitive.Portal>
            <DropdownMenuPrimitive.Content
                {...props}
                className={styles.content}
            >
                {children}
            </DropdownMenuPrimitive.Content>
        </DropdownMenuPrimitive.Portal>
    );
};

// export const Label = DropdownMenuPrimitive.Label;
export const Label: FC<DropdownMenuPrimitive.MenuLabelProps> = props => {
    return <DropdownMenuPrimitive.Label {...props} className={styles.label} />;
};
// export const Item = DropdownMenuPrimitive.Item;
export const Item: FC<DropdownMenuPrimitive.MenuItemProps> = props => {
    return <DropdownMenuPrimitive.Item {...props} className={styles.item} />;
};
export const Group = DropdownMenuPrimitive.Group;

// export const CheckboxItem = forwardRef<
//     HTMLDivElement,
//     DropdownMenuPrimitive.DropdownMenuCheckboxItemProps &
//         RefAttributes<HTMLDivElement>
// >(({ children, ...props }, forwardedRef) => {
//     return (
//         <DropdownMenuPrimitive.CheckboxItem
//             {...props}
//             className={styles.item}
//             ref={forwardedRef}
//         >
//             {children}
//             <DropdownMenuPrimitive.ItemIndicator>
//                 {props.checked === 'indeterminate' && <DividerHorizontalIcon />}
//                 {props.checked === true && <CheckIcon />}
//             </DropdownMenuPrimitive.ItemIndicator>
//         </DropdownMenuPrimitive.CheckboxItem>
//     );
// });

export const RadioGroup = DropdownMenuPrimitive.RadioGroup;

export const RadioItem = forwardRef<
    HTMLDivElement,
    DropdownMenuPrimitive.DropdownMenuRadioItemProps &
        RefAttributes<HTMLDivElement>
>(({ children, ...props }, forwardedRef) => {
    return (
        <DropdownMenuPrimitive.RadioItem
            {...props}
            className={styles.item}
            ref={forwardedRef}
        >
            {children}
            <DropdownMenuPrimitive.ItemIndicator>
                <CheckIcon />
            </DropdownMenuPrimitive.ItemIndicator>
        </DropdownMenuPrimitive.RadioItem>
    );
});
RadioItem.displayName = 'RadioItem';

export const Separator = DropdownMenuPrimitive.Separator;
