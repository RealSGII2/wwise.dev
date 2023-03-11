'use client';

import {
    DropdownMenuTrigger,
    DropdownMenuTriggerProps,
} from '@radix-ui/react-dropdown-menu';
import { FC, RefAttributes, useEffect, useState } from 'react';
import { ButtonProps, generateClassName } from '../Button';
import * as Dropdown from '../Dropdown';
import FadeIn from '../FadeIn';

export const DropdownTrigger: FC<
    DropdownMenuTriggerProps & RefAttributes<HTMLButtonElement> & ButtonProps
> = props => {
    return (
        <DropdownMenuTrigger {...props} className={generateClassName(props)} />
    );
};

const ThemePicker = () => {
    const [themeValue, setThemeValue] = useState<string>();

    const updateTheme = (value: string) => {
        document.cookie = 'theme=' + value;
        setThemeValue(value);
    };

    useEffect(() => {
        setThemeValue(document.cookie.replace('theme=', ''))
    }, [])

    useEffect(() => {
        switch (themeValue) {
            case 'system':
                break;
            case 'light':
                document.body.classList.remove('theme:dark');
                document.body.classList.add('theme:light');
                break;
            case 'dark':
                document.body.classList.remove('theme:light');
                document.body.classList.add('theme:dark');
                break;
        }
    }, [themeValue]);

    return (
        <FadeIn>
            <Dropdown.Root>
                <DropdownTrigger size='mediumIcon' variant='tertiary'>
                    <svg
                        width='24'
                        height='24'
                        viewBox='0 0 16 16'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M9.96501 1.38919C9.82597 1.42019 9.69865 1.49019 9.59799 1.59099C9.4971 1.69181 9.42705 1.8193 9.39606 1.95852C9.36506 2.09773 9.3744 2.2429 9.42299 2.37699C9.77971 3.36027 9.84866 4.42487 9.62174 5.44594C9.39481 6.46701 8.88143 7.4022 8.14181 8.14182C7.40219 8.88144 6.467 9.39482 5.44593 9.62174C4.42487 9.84866 3.36026 9.77972 2.37699 9.42299C2.24298 9.3744 2.0979 9.36501 1.95875 9.39591C1.8196 9.42681 1.69213 9.49673 1.59128 9.59747C1.49044 9.69821 1.42039 9.82561 1.38934 9.96473C1.3583 10.1038 1.36754 10.2489 1.41599 10.383C1.81725 11.4906 2.49153 12.4791 3.37637 13.2568C4.26121 14.0345 5.328 14.5764 6.47795 14.8323C7.62789 15.0881 8.8238 15.0496 9.95492 14.7204C11.086 14.3912 12.1158 13.7818 12.9488 12.9488C13.7818 12.1158 14.3912 11.086 14.7204 9.95493C15.0496 8.82381 15.0881 7.62789 14.8323 6.47795C14.5764 5.32801 14.0345 4.26121 13.2568 3.37637C12.4791 2.49153 11.4906 1.81726 10.383 1.41599C10.249 1.36749 10.104 1.3582 9.96501 1.38919Z'
                            fill='currentColor'
                        />
                    </svg>
                </DropdownTrigger>

                <Dropdown.Portal>
                    <Dropdown.Content collisionPadding={16}>
                        <Dropdown.Label>Theme</Dropdown.Label>

                        <Dropdown.RadioGroup
                            value={themeValue}
                            onValueChange={value => updateTheme(value)}
                        >
                            <Dropdown.RadioItem value='system'>
                                System
                            </Dropdown.RadioItem>
                            <Dropdown.RadioItem value='light'>
                                Light
                            </Dropdown.RadioItem>
                            <Dropdown.RadioItem value='dark'>
                                Dark
                            </Dropdown.RadioItem>
                        </Dropdown.RadioGroup>
                    </Dropdown.Content>
                </Dropdown.Portal>
            </Dropdown.Root>
        </FadeIn>
    );
};

export default ThemePicker;
