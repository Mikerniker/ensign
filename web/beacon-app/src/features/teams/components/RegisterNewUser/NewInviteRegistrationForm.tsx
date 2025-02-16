import { Trans } from '@lingui/macro';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import { Button } from '@rotational/beacon-core';
import { Form, FormikHelpers, FormikProvider, useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useMedia from 'react-use/lib/useMedia';

import { EXTERNAL_LINKS } from '@/application/routes/paths';
import { PasswordStrength } from '@/components/PasswordStrength';
import PasswordField from '@/components/ui/PasswordField/PasswordField';
import TextField from '@/components/ui/TextField';
import { NewUserAccount } from '@/features/auth';
import useFocus from '@/hooks/useFocus';

import validationSchema from './schemas/newInviteRegistrationFormValidation';

type RegistrationFormProps = {
  onSubmit: (values: NewUserAccount, helpers: FormikHelpers<NewUserAccount>) => void;
  initialValues: any;
};

function NewInviteRegistrationForm({ onSubmit, initialValues }: RegistrationFormProps) {
  const formik = useFormik<NewUserAccount>({
    initialValues,
    onSubmit,
    validationSchema: validationSchema,
    enableReinitialize: true,
  });
  const { touched, errors, values, getFieldProps, isSubmitting } = formik;

  const [isFocused, { onBlur, onFocus }] = useFocus();
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [isPasswordMatchOpen, setIsPasswordMatchOpen] = useState<boolean | undefined>(
    !!values.password
  );
  const isMobile = useMedia('(max-width: 860px)');

  const handlePasswordMatch = (_result: boolean) => {
    // console.log('result', result)
  };

  useEffect(() => {
    setIsPasswordMatchOpen(!!values.password);
    setTimeout(() => {
      setIsPasswordMatchOpen(undefined);
    }, 10000);
  }, [values.password]);

  return (
    <FormikProvider value={formik}>
      <Form>
        <div className="mb-1 space-y-2">
          <TextField
            label={`Email address (required)`}
            placeholder="holly@golight.ly"
            fullWidth
            data-testid="email"
            errorMessage={touched.email && errors.email}
            {...getFieldProps('email')}
          />
          <div className="relative">
            <RadixTooltip.Provider>
              <RadixTooltip.Root open={isFocused}>
                <RadixTooltip.Trigger asChild>
                  <div>
                    <PasswordField
                      placeholder={`Password`}
                      data-testid="password"
                      errorMessage={touched.password && errors.password}
                      fullWidth
                      {...getFieldProps('password')}
                      onFocus={onFocus}
                      onBlur={onBlur}
                    />
                  </div>
                </RadixTooltip.Trigger>
                <RadixTooltip.Portal>
                  <RadixTooltip.Content
                    className="select-none rounded-[4px] bg-white px-[15px] py-[10px] text-xs text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade"
                    sideOffset={2}
                    side={isMobile ? 'bottom' : 'right'}
                  >
                    <PasswordStrength string={values.password} onMatch={handlePasswordMatch} />
                    <RadixTooltip.Arrow className="fill-white" />
                  </RadixTooltip.Content>
                </RadixTooltip.Portal>
              </RadixTooltip.Root>
            </RadixTooltip.Provider>
          </div>
          <PasswordField
            label={`Confirm Password`}
            placeholder={`Password`}
            type="password"
            fullWidth
            data-testid="pwcheck"
            errorMessage={touched.pwcheck && errors.pwcheck}
            {...getFieldProps('pwcheck')}
          />
        </div>
        <Button
          type="submit"
          variant="secondary"
          className="mt-4"
          isLoading={isSubmitting}
          disabled={isSubmitting}
          aria-label="Join Now"
        >
          <Trans>Join Now</Trans>
        </Button>
        <p className="mt-3">
          <Trans>By continuing, you're agreeing to the Rotational Labs Inc.</Trans>{' '}
          <Link
            to={EXTERNAL_LINKS.TERMS}
            className="font-bold text-[#1F4CED] underline"
            target="_blank"
          >
            <Trans>Terms of Service</Trans>
          </Link>{' '}
          <Trans>and</Trans>{' '}
          <Link
            to={EXTERNAL_LINKS.PRIVACY}
            className="font-bold text-[#1F4CED] underline"
            target="_blank"
          >
            <Trans>Privacy Policy</Trans>
          </Link>
          .
        </p>
      </Form>
    </FormikProvider>
  );
}

// TODO: Fix in the design system
/* const CheckboxFieldset = styled.fieldset */ `
  margin-top: 1rem;
  label svg {
    min-width: 23px;
  }
`;

export default NewInviteRegistrationForm;
