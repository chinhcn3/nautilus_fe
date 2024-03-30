import OutlinedInput, {OutlinedInputProps} from '@mui/material/OutlinedInput';
import {ComponentProps, ElementRef, forwardRef, ReactNode, useId} from 'react';
import InputLabel, {InputLabelProps} from '@mui/material/InputLabel';
import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';
import Typography from '@mui/material/Typography';
import Stack from '@mui/system/Stack';

export interface BootstrapInputProps
  extends Omit<ComponentProps<'div'>, 'defaultValue' | 'onChange'> {
  labelProps?: InputLabelProps;
  inputProps?: OutlinedInputProps;
  label?: ReactNode;
  placeholder?: string;
  onChange?: OutlinedInputProps['onChange'];
  value?: OutlinedInputProps['value'];
  name?: OutlinedInputProps['name'];
  defaultValue?: OutlinedInputProps['defaultValue'];
  errorMessage?: ReactNode;
  rightErrorMessage?: ReactNode;
}

const BootstrapInputComponent = forwardRef<ElementRef<typeof OutlinedInput>, BootstrapInputProps>(
  function BootstrapInputComponent(
    {
      labelProps,
      label,
      inputProps,
      placeholder,
      onChange,
      value,
      name,
      defaultValue,
      errorMessage,
      rightErrorMessage,
      ...props
    },
    ref
  ) {
    const id = useId();
    return (
      <div {...props}>
        <Label htmlFor={id} {...labelProps}>
          {label || labelProps?.children}
        </Label>
        <Input
          ref={ref}
          id={id}
          size={'small'}
          {...inputProps}
          placeholder={placeholder ?? inputProps?.placeholder}
          onChange={onChange ?? inputProps?.onChange}
          value={value ?? inputProps?.value}
          name={name ?? inputProps?.name}
          defaultValue={defaultValue ?? inputProps?.defaultValue}
        />
        {(errorMessage || rightErrorMessage) && (
          <Stack
            direction={'row'}
            spacing={2}
            justifyContent={'space-between'}
            alignItems={'center'}>
            <Typography color={'error'} fontSize={14} mt={'4px'}>
              {errorMessage}
            </Typography>
            {rightErrorMessage}
          </Stack>
        )}
      </div>
    );
  }
);

const Input = styled(OutlinedInput)`
  width: 100%;
  border-color: ${themeColor('border')};
  background: #ffffff;
`;
const Label = styled(InputLabel)`
  font-family: Inter, sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: ${themeColor('black')};
  margin-bottom: 8px;
`;

export const BootstrapInput = Object.assign(BootstrapInputComponent, {
  Label,
  Input
});
