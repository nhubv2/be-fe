import { AuthForgotPasswordFormComponent } from './auth-forgot-password-form/auth-forgot-password-form.component';
import { AuthLoginFormComponent } from './auth-login-form/auth-login-form.component';
import { AuthRegisterFormComponent } from './auth-register-form/auth-register-form.component';

export const components: any[] = [
  AuthLoginFormComponent,
  AuthRegisterFormComponent,
  AuthForgotPasswordFormComponent
];

export * from './auth-forgot-password-form/auth-forgot-password-form.component';
export * from './auth-login-form/auth-login-form.component';
export * from './auth-register-form/auth-register-form.component';
