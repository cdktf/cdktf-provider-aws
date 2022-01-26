// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Cognito
*/
export interface CognitoUserPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#alias_attributes CognitoUserPool#alias_attributes}
  */
  readonly aliasAttributes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#auto_verified_attributes CognitoUserPool#auto_verified_attributes}
  */
  readonly autoVerifiedAttributes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_verification_message CognitoUserPool#email_verification_message}
  */
  readonly emailVerificationMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_verification_subject CognitoUserPool#email_verification_subject}
  */
  readonly emailVerificationSubject?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#mfa_configuration CognitoUserPool#mfa_configuration}
  */
  readonly mfaConfiguration?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#name CognitoUserPool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_authentication_message CognitoUserPool#sms_authentication_message}
  */
  readonly smsAuthenticationMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_verification_message CognitoUserPool#sms_verification_message}
  */
  readonly smsVerificationMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#tags CognitoUserPool#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#tags_all CognitoUserPool#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#username_attributes CognitoUserPool#username_attributes}
  */
  readonly usernameAttributes?: string[];
  /**
  * account_recovery_setting block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#account_recovery_setting CognitoUserPool#account_recovery_setting}
  */
  readonly accountRecoverySetting?: CognitoUserPoolAccountRecoverySetting;
  /**
  * admin_create_user_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#admin_create_user_config CognitoUserPool#admin_create_user_config}
  */
  readonly adminCreateUserConfig?: CognitoUserPoolAdminCreateUserConfig;
  /**
  * device_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#device_configuration CognitoUserPool#device_configuration}
  */
  readonly deviceConfiguration?: CognitoUserPoolDeviceConfiguration;
  /**
  * email_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_configuration CognitoUserPool#email_configuration}
  */
  readonly emailConfiguration?: CognitoUserPoolEmailConfiguration;
  /**
  * lambda_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_config CognitoUserPool#lambda_config}
  */
  readonly lambdaConfig?: CognitoUserPoolLambdaConfig;
  /**
  * password_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#password_policy CognitoUserPool#password_policy}
  */
  readonly passwordPolicy?: CognitoUserPoolPasswordPolicy;
  /**
  * schema block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#schema CognitoUserPool#schema}
  */
  readonly schema?: CognitoUserPoolSchema[] | cdktf.IResolvable;
  /**
  * sms_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_configuration CognitoUserPool#sms_configuration}
  */
  readonly smsConfiguration?: CognitoUserPoolSmsConfiguration;
  /**
  * software_token_mfa_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#software_token_mfa_configuration CognitoUserPool#software_token_mfa_configuration}
  */
  readonly softwareTokenMfaConfiguration?: CognitoUserPoolSoftwareTokenMfaConfiguration;
  /**
  * user_pool_add_ons block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#user_pool_add_ons CognitoUserPool#user_pool_add_ons}
  */
  readonly userPoolAddOns?: CognitoUserPoolUserPoolAddOns;
  /**
  * username_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#username_configuration CognitoUserPool#username_configuration}
  */
  readonly usernameConfiguration?: CognitoUserPoolUsernameConfiguration;
  /**
  * verification_message_template block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#verification_message_template CognitoUserPool#verification_message_template}
  */
  readonly verificationMessageTemplate?: CognitoUserPoolVerificationMessageTemplate;
}
export interface CognitoUserPoolAccountRecoverySettingRecoveryMechanism {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#name CognitoUserPool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#priority CognitoUserPool#priority}
  */
  readonly priority: number;
}

export function cognitoUserPoolAccountRecoverySettingRecoveryMechanismToTerraform(struct?: CognitoUserPoolAccountRecoverySettingRecoveryMechanism | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}

export interface CognitoUserPoolAccountRecoverySetting {
  /**
  * recovery_mechanism block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#recovery_mechanism CognitoUserPool#recovery_mechanism}
  */
  readonly recoveryMechanism: CognitoUserPoolAccountRecoverySettingRecoveryMechanism[] | cdktf.IResolvable;
}

export function cognitoUserPoolAccountRecoverySettingToTerraform(struct?: CognitoUserPoolAccountRecoverySettingOutputReference | CognitoUserPoolAccountRecoverySetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recovery_mechanism: cdktf.listMapper(cognitoUserPoolAccountRecoverySettingRecoveryMechanismToTerraform)(struct!.recoveryMechanism),
  }
}

export class CognitoUserPoolAccountRecoverySettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CognitoUserPoolAccountRecoverySetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recoveryMechanism !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryMechanism = this._recoveryMechanism;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoUserPoolAccountRecoverySetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recoveryMechanism = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recoveryMechanism = value.recoveryMechanism;
    }
  }

  // recovery_mechanism - computed: false, optional: false, required: true
  private _recoveryMechanism?: CognitoUserPoolAccountRecoverySettingRecoveryMechanism[] | cdktf.IResolvable; 
  public get recoveryMechanism() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('recovery_mechanism')));
  }
  public set recoveryMechanism(value: CognitoUserPoolAccountRecoverySettingRecoveryMechanism[] | cdktf.IResolvable) {
    this._recoveryMechanism = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryMechanismInput() {
    return this._recoveryMechanism;
  }
}
export interface CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_message CognitoUserPool#email_message}
  */
  readonly emailMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_subject CognitoUserPool#email_subject}
  */
  readonly emailSubject?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_message CognitoUserPool#sms_message}
  */
  readonly smsMessage?: string;
}

export function cognitoUserPoolAdminCreateUserConfigInviteMessageTemplateToTerraform(struct?: CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference | CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email_message: cdktf.stringToTerraform(struct!.emailMessage),
    email_subject: cdktf.stringToTerraform(struct!.emailSubject),
    sms_message: cdktf.stringToTerraform(struct!.smsMessage),
  }
}

export class CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emailMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailMessage = this._emailMessage;
    }
    if (this._emailSubject !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailSubject = this._emailSubject;
    }
    if (this._smsMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsMessage = this._smsMessage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._emailMessage = undefined;
      this._emailSubject = undefined;
      this._smsMessage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._emailMessage = value.emailMessage;
      this._emailSubject = value.emailSubject;
      this._smsMessage = value.smsMessage;
    }
  }

  // email_message - computed: false, optional: true, required: false
  private _emailMessage?: string; 
  public get emailMessage() {
    return this.getStringAttribute('email_message');
  }
  public set emailMessage(value: string) {
    this._emailMessage = value;
  }
  public resetEmailMessage() {
    this._emailMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailMessageInput() {
    return this._emailMessage;
  }

  // email_subject - computed: false, optional: true, required: false
  private _emailSubject?: string; 
  public get emailSubject() {
    return this.getStringAttribute('email_subject');
  }
  public set emailSubject(value: string) {
    this._emailSubject = value;
  }
  public resetEmailSubject() {
    this._emailSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailSubjectInput() {
    return this._emailSubject;
  }

  // sms_message - computed: false, optional: true, required: false
  private _smsMessage?: string; 
  public get smsMessage() {
    return this.getStringAttribute('sms_message');
  }
  public set smsMessage(value: string) {
    this._smsMessage = value;
  }
  public resetSmsMessage() {
    this._smsMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsMessageInput() {
    return this._smsMessage;
  }
}
export interface CognitoUserPoolAdminCreateUserConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#allow_admin_create_user_only CognitoUserPool#allow_admin_create_user_only}
  */
  readonly allowAdminCreateUserOnly?: boolean | cdktf.IResolvable;
  /**
  * invite_message_template block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#invite_message_template CognitoUserPool#invite_message_template}
  */
  readonly inviteMessageTemplate?: CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate;
}

export function cognitoUserPoolAdminCreateUserConfigToTerraform(struct?: CognitoUserPoolAdminCreateUserConfigOutputReference | CognitoUserPoolAdminCreateUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_admin_create_user_only: cdktf.booleanToTerraform(struct!.allowAdminCreateUserOnly),
    invite_message_template: cognitoUserPoolAdminCreateUserConfigInviteMessageTemplateToTerraform(struct!.inviteMessageTemplate),
  }
}

export class CognitoUserPoolAdminCreateUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CognitoUserPoolAdminCreateUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowAdminCreateUserOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAdminCreateUserOnly = this._allowAdminCreateUserOnly;
    }
    if (this._inviteMessageTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inviteMessageTemplate = this._inviteMessageTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoUserPoolAdminCreateUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowAdminCreateUserOnly = undefined;
      this._inviteMessageTemplate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowAdminCreateUserOnly = value.allowAdminCreateUserOnly;
      this._inviteMessageTemplate.internalValue = value.inviteMessageTemplate;
    }
  }

  // allow_admin_create_user_only - computed: false, optional: true, required: false
  private _allowAdminCreateUserOnly?: boolean | cdktf.IResolvable; 
  public get allowAdminCreateUserOnly() {
    return this.getBooleanAttribute('allow_admin_create_user_only');
  }
  public set allowAdminCreateUserOnly(value: boolean | cdktf.IResolvable) {
    this._allowAdminCreateUserOnly = value;
  }
  public resetAllowAdminCreateUserOnly() {
    this._allowAdminCreateUserOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAdminCreateUserOnlyInput() {
    return this._allowAdminCreateUserOnly;
  }

  // invite_message_template - computed: false, optional: true, required: false
  private _inviteMessageTemplate = new CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference(this, "invite_message_template", true);
  public get inviteMessageTemplate() {
    return this._inviteMessageTemplate;
  }
  public putInviteMessageTemplate(value: CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate) {
    this._inviteMessageTemplate.internalValue = value;
  }
  public resetInviteMessageTemplate() {
    this._inviteMessageTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inviteMessageTemplateInput() {
    return this._inviteMessageTemplate.internalValue;
  }
}
export interface CognitoUserPoolDeviceConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#challenge_required_on_new_device CognitoUserPool#challenge_required_on_new_device}
  */
  readonly challengeRequiredOnNewDevice?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#device_only_remembered_on_user_prompt CognitoUserPool#device_only_remembered_on_user_prompt}
  */
  readonly deviceOnlyRememberedOnUserPrompt?: boolean | cdktf.IResolvable;
}

export function cognitoUserPoolDeviceConfigurationToTerraform(struct?: CognitoUserPoolDeviceConfigurationOutputReference | CognitoUserPoolDeviceConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    challenge_required_on_new_device: cdktf.booleanToTerraform(struct!.challengeRequiredOnNewDevice),
    device_only_remembered_on_user_prompt: cdktf.booleanToTerraform(struct!.deviceOnlyRememberedOnUserPrompt),
  }
}

export class CognitoUserPoolDeviceConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CognitoUserPoolDeviceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._challengeRequiredOnNewDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengeRequiredOnNewDevice = this._challengeRequiredOnNewDevice;
    }
    if (this._deviceOnlyRememberedOnUserPrompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceOnlyRememberedOnUserPrompt = this._deviceOnlyRememberedOnUserPrompt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoUserPoolDeviceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._challengeRequiredOnNewDevice = undefined;
      this._deviceOnlyRememberedOnUserPrompt = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._challengeRequiredOnNewDevice = value.challengeRequiredOnNewDevice;
      this._deviceOnlyRememberedOnUserPrompt = value.deviceOnlyRememberedOnUserPrompt;
    }
  }

  // challenge_required_on_new_device - computed: false, optional: true, required: false
  private _challengeRequiredOnNewDevice?: boolean | cdktf.IResolvable; 
  public get challengeRequiredOnNewDevice() {
    return this.getBooleanAttribute('challenge_required_on_new_device');
  }
  public set challengeRequiredOnNewDevice(value: boolean | cdktf.IResolvable) {
    this._challengeRequiredOnNewDevice = value;
  }
  public resetChallengeRequiredOnNewDevice() {
    this._challengeRequiredOnNewDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeRequiredOnNewDeviceInput() {
    return this._challengeRequiredOnNewDevice;
  }

  // device_only_remembered_on_user_prompt - computed: false, optional: true, required: false
  private _deviceOnlyRememberedOnUserPrompt?: boolean | cdktf.IResolvable; 
  public get deviceOnlyRememberedOnUserPrompt() {
    return this.getBooleanAttribute('device_only_remembered_on_user_prompt');
  }
  public set deviceOnlyRememberedOnUserPrompt(value: boolean | cdktf.IResolvable) {
    this._deviceOnlyRememberedOnUserPrompt = value;
  }
  public resetDeviceOnlyRememberedOnUserPrompt() {
    this._deviceOnlyRememberedOnUserPrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceOnlyRememberedOnUserPromptInput() {
    return this._deviceOnlyRememberedOnUserPrompt;
  }
}
export interface CognitoUserPoolEmailConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#configuration_set CognitoUserPool#configuration_set}
  */
  readonly configurationSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_sending_account CognitoUserPool#email_sending_account}
  */
  readonly emailSendingAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#from_email_address CognitoUserPool#from_email_address}
  */
  readonly fromEmailAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#reply_to_email_address CognitoUserPool#reply_to_email_address}
  */
  readonly replyToEmailAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#source_arn CognitoUserPool#source_arn}
  */
  readonly sourceArn?: string;
}

export function cognitoUserPoolEmailConfigurationToTerraform(struct?: CognitoUserPoolEmailConfigurationOutputReference | CognitoUserPoolEmailConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration_set: cdktf.stringToTerraform(struct!.configurationSet),
    email_sending_account: cdktf.stringToTerraform(struct!.emailSendingAccount),
    from_email_address: cdktf.stringToTerraform(struct!.fromEmailAddress),
    reply_to_email_address: cdktf.stringToTerraform(struct!.replyToEmailAddress),
    source_arn: cdktf.stringToTerraform(struct!.sourceArn),
  }
}

export class CognitoUserPoolEmailConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CognitoUserPoolEmailConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configurationSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationSet = this._configurationSet;
    }
    if (this._emailSendingAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailSendingAccount = this._emailSendingAccount;
    }
    if (this._fromEmailAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromEmailAddress = this._fromEmailAddress;
    }
    if (this._replyToEmailAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.replyToEmailAddress = this._replyToEmailAddress;
    }
    if (this._sourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceArn = this._sourceArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoUserPoolEmailConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configurationSet = undefined;
      this._emailSendingAccount = undefined;
      this._fromEmailAddress = undefined;
      this._replyToEmailAddress = undefined;
      this._sourceArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configurationSet = value.configurationSet;
      this._emailSendingAccount = value.emailSendingAccount;
      this._fromEmailAddress = value.fromEmailAddress;
      this._replyToEmailAddress = value.replyToEmailAddress;
      this._sourceArn = value.sourceArn;
    }
  }

  // configuration_set - computed: false, optional: true, required: false
  private _configurationSet?: string; 
  public get configurationSet() {
    return this.getStringAttribute('configuration_set');
  }
  public set configurationSet(value: string) {
    this._configurationSet = value;
  }
  public resetConfigurationSet() {
    this._configurationSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationSetInput() {
    return this._configurationSet;
  }

  // email_sending_account - computed: false, optional: true, required: false
  private _emailSendingAccount?: string; 
  public get emailSendingAccount() {
    return this.getStringAttribute('email_sending_account');
  }
  public set emailSendingAccount(value: string) {
    this._emailSendingAccount = value;
  }
  public resetEmailSendingAccount() {
    this._emailSendingAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailSendingAccountInput() {
    return this._emailSendingAccount;
  }

  // from_email_address - computed: false, optional: true, required: false
  private _fromEmailAddress?: string; 
  public get fromEmailAddress() {
    return this.getStringAttribute('from_email_address');
  }
  public set fromEmailAddress(value: string) {
    this._fromEmailAddress = value;
  }
  public resetFromEmailAddress() {
    this._fromEmailAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromEmailAddressInput() {
    return this._fromEmailAddress;
  }

  // reply_to_email_address - computed: false, optional: true, required: false
  private _replyToEmailAddress?: string; 
  public get replyToEmailAddress() {
    return this.getStringAttribute('reply_to_email_address');
  }
  public set replyToEmailAddress(value: string) {
    this._replyToEmailAddress = value;
  }
  public resetReplyToEmailAddress() {
    this._replyToEmailAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replyToEmailAddressInput() {
    return this._replyToEmailAddress;
  }

  // source_arn - computed: false, optional: true, required: false
  private _sourceArn?: string; 
  public get sourceArn() {
    return this.getStringAttribute('source_arn');
  }
  public set sourceArn(value: string) {
    this._sourceArn = value;
  }
  public resetSourceArn() {
    this._sourceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceArnInput() {
    return this._sourceArn;
  }
}
export interface CognitoUserPoolLambdaConfigCustomEmailSender {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_arn CognitoUserPool#lambda_arn}
  */
  readonly lambdaArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_version CognitoUserPool#lambda_version}
  */
  readonly lambdaVersion: string;
}

export function cognitoUserPoolLambdaConfigCustomEmailSenderToTerraform(struct?: CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference | CognitoUserPoolLambdaConfigCustomEmailSender): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lambda_arn: cdktf.stringToTerraform(struct!.lambdaArn),
    lambda_version: cdktf.stringToTerraform(struct!.lambdaVersion),
  }
}

export class CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CognitoUserPoolLambdaConfigCustomEmailSender | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lambdaArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaArn = this._lambdaArn;
    }
    if (this._lambdaVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaVersion = this._lambdaVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoUserPoolLambdaConfigCustomEmailSender | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lambdaArn = undefined;
      this._lambdaVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lambdaArn = value.lambdaArn;
      this._lambdaVersion = value.lambdaVersion;
    }
  }

  // lambda_arn - computed: false, optional: false, required: true
  private _lambdaArn?: string; 
  public get lambdaArn() {
    return this.getStringAttribute('lambda_arn');
  }
  public set lambdaArn(value: string) {
    this._lambdaArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaArnInput() {
    return this._lambdaArn;
  }

  // lambda_version - computed: false, optional: false, required: true
  private _lambdaVersion?: string; 
  public get lambdaVersion() {
    return this.getStringAttribute('lambda_version');
  }
  public set lambdaVersion(value: string) {
    this._lambdaVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaVersionInput() {
    return this._lambdaVersion;
  }
}
export interface CognitoUserPoolLambdaConfigCustomSmsSender {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_arn CognitoUserPool#lambda_arn}
  */
  readonly lambdaArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_version CognitoUserPool#lambda_version}
  */
  readonly lambdaVersion: string;
}

export function cognitoUserPoolLambdaConfigCustomSmsSenderToTerraform(struct?: CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference | CognitoUserPoolLambdaConfigCustomSmsSender): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lambda_arn: cdktf.stringToTerraform(struct!.lambdaArn),
    lambda_version: cdktf.stringToTerraform(struct!.lambdaVersion),
  }
}

export class CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CognitoUserPoolLambdaConfigCustomSmsSender | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lambdaArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaArn = this._lambdaArn;
    }
    if (this._lambdaVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaVersion = this._lambdaVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoUserPoolLambdaConfigCustomSmsSender | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lambdaArn = undefined;
      this._lambdaVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lambdaArn = value.lambdaArn;
      this._lambdaVersion = value.lambdaVersion;
    }
  }

  // lambda_arn - computed: false, optional: false, required: true
  private _lambdaArn?: string; 
  public get lambdaArn() {
    return this.getStringAttribute('lambda_arn');
  }
  public set lambdaArn(value: string) {
    this._lambdaArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaArnInput() {
    return this._lambdaArn;
  }

  // lambda_version - computed: false, optional: false, required: true
  private _lambdaVersion?: string; 
  public get lambdaVersion() {
    return this.getStringAttribute('lambda_version');
  }
  public set lambdaVersion(value: string) {
    this._lambdaVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaVersionInput() {
    return this._lambdaVersion;
  }
}
export interface CognitoUserPoolLambdaConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#create_auth_challenge CognitoUserPool#create_auth_challenge}
  */
  readonly createAuthChallenge?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#custom_message CognitoUserPool#custom_message}
  */
  readonly customMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#define_auth_challenge CognitoUserPool#define_auth_challenge}
  */
  readonly defineAuthChallenge?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#kms_key_id CognitoUserPool#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#post_authentication CognitoUserPool#post_authentication}
  */
  readonly postAuthentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#post_confirmation CognitoUserPool#post_confirmation}
  */
  readonly postConfirmation?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#pre_authentication CognitoUserPool#pre_authentication}
  */
  readonly preAuthentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#pre_sign_up CognitoUserPool#pre_sign_up}
  */
  readonly preSignUp?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#pre_token_generation CognitoUserPool#pre_token_generation}
  */
  readonly preTokenGeneration?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#user_migration CognitoUserPool#user_migration}
  */
  readonly userMigration?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#verify_auth_challenge_response CognitoUserPool#verify_auth_challenge_response}
  */
  readonly verifyAuthChallengeResponse?: string;
  /**
  * custom_email_sender block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#custom_email_sender CognitoUserPool#custom_email_sender}
  */
  readonly customEmailSender?: CognitoUserPoolLambdaConfigCustomEmailSender;
  /**
  * custom_sms_sender block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#custom_sms_sender CognitoUserPool#custom_sms_sender}
  */
  readonly customSmsSender?: CognitoUserPoolLambdaConfigCustomSmsSender;
}

export function cognitoUserPoolLambdaConfigToTerraform(struct?: CognitoUserPoolLambdaConfigOutputReference | CognitoUserPoolLambdaConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_auth_challenge: cdktf.stringToTerraform(struct!.createAuthChallenge),
    custom_message: cdktf.stringToTerraform(struct!.customMessage),
    define_auth_challenge: cdktf.stringToTerraform(struct!.defineAuthChallenge),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    post_authentication: cdktf.stringToTerraform(struct!.postAuthentication),
    post_confirmation: cdktf.stringToTerraform(struct!.postConfirmation),
    pre_authentication: cdktf.stringToTerraform(struct!.preAuthentication),
    pre_sign_up: cdktf.stringToTerraform(struct!.preSignUp),
    pre_token_generation: cdktf.stringToTerraform(struct!.preTokenGeneration),
    user_migration: cdktf.stringToTerraform(struct!.userMigration),
    verify_auth_challenge_response: cdktf.stringToTerraform(struct!.verifyAuthChallengeResponse),
    custom_email_sender: cognitoUserPoolLambdaConfigCustomEmailSenderToTerraform(struct!.customEmailSender),
    custom_sms_sender: cognitoUserPoolLambdaConfigCustomSmsSenderToTerraform(struct!.customSmsSender),
  }
}

export class CognitoUserPoolLambdaConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CognitoUserPoolLambdaConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createAuthChallenge !== undefined) {
      hasAnyValues = true;
      internalValueResult.createAuthChallenge = this._createAuthChallenge;
    }
    if (this._customMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.customMessage = this._customMessage;
    }
    if (this._defineAuthChallenge !== undefined) {
      hasAnyValues = true;
      internalValueResult.defineAuthChallenge = this._defineAuthChallenge;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._postAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.postAuthentication = this._postAuthentication;
    }
    if (this._postConfirmation !== undefined) {
      hasAnyValues = true;
      internalValueResult.postConfirmation = this._postConfirmation;
    }
    if (this._preAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.preAuthentication = this._preAuthentication;
    }
    if (this._preSignUp !== undefined) {
      hasAnyValues = true;
      internalValueResult.preSignUp = this._preSignUp;
    }
    if (this._preTokenGeneration !== undefined) {
      hasAnyValues = true;
      internalValueResult.preTokenGeneration = this._preTokenGeneration;
    }
    if (this._userMigration !== undefined) {
      hasAnyValues = true;
      internalValueResult.userMigration = this._userMigration;
    }
    if (this._verifyAuthChallengeResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyAuthChallengeResponse = this._verifyAuthChallengeResponse;
    }
    if (this._customEmailSender?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customEmailSender = this._customEmailSender?.internalValue;
    }
    if (this._customSmsSender?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSmsSender = this._customSmsSender?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoUserPoolLambdaConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._createAuthChallenge = undefined;
      this._customMessage = undefined;
      this._defineAuthChallenge = undefined;
      this._kmsKeyId = undefined;
      this._postAuthentication = undefined;
      this._postConfirmation = undefined;
      this._preAuthentication = undefined;
      this._preSignUp = undefined;
      this._preTokenGeneration = undefined;
      this._userMigration = undefined;
      this._verifyAuthChallengeResponse = undefined;
      this._customEmailSender.internalValue = undefined;
      this._customSmsSender.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._createAuthChallenge = value.createAuthChallenge;
      this._customMessage = value.customMessage;
      this._defineAuthChallenge = value.defineAuthChallenge;
      this._kmsKeyId = value.kmsKeyId;
      this._postAuthentication = value.postAuthentication;
      this._postConfirmation = value.postConfirmation;
      this._preAuthentication = value.preAuthentication;
      this._preSignUp = value.preSignUp;
      this._preTokenGeneration = value.preTokenGeneration;
      this._userMigration = value.userMigration;
      this._verifyAuthChallengeResponse = value.verifyAuthChallengeResponse;
      this._customEmailSender.internalValue = value.customEmailSender;
      this._customSmsSender.internalValue = value.customSmsSender;
    }
  }

  // create_auth_challenge - computed: false, optional: true, required: false
  private _createAuthChallenge?: string; 
  public get createAuthChallenge() {
    return this.getStringAttribute('create_auth_challenge');
  }
  public set createAuthChallenge(value: string) {
    this._createAuthChallenge = value;
  }
  public resetCreateAuthChallenge() {
    this._createAuthChallenge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createAuthChallengeInput() {
    return this._createAuthChallenge;
  }

  // custom_message - computed: false, optional: true, required: false
  private _customMessage?: string; 
  public get customMessage() {
    return this.getStringAttribute('custom_message');
  }
  public set customMessage(value: string) {
    this._customMessage = value;
  }
  public resetCustomMessage() {
    this._customMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMessageInput() {
    return this._customMessage;
  }

  // define_auth_challenge - computed: false, optional: true, required: false
  private _defineAuthChallenge?: string; 
  public get defineAuthChallenge() {
    return this.getStringAttribute('define_auth_challenge');
  }
  public set defineAuthChallenge(value: string) {
    this._defineAuthChallenge = value;
  }
  public resetDefineAuthChallenge() {
    this._defineAuthChallenge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defineAuthChallengeInput() {
    return this._defineAuthChallenge;
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // post_authentication - computed: false, optional: true, required: false
  private _postAuthentication?: string; 
  public get postAuthentication() {
    return this.getStringAttribute('post_authentication');
  }
  public set postAuthentication(value: string) {
    this._postAuthentication = value;
  }
  public resetPostAuthentication() {
    this._postAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postAuthenticationInput() {
    return this._postAuthentication;
  }

  // post_confirmation - computed: false, optional: true, required: false
  private _postConfirmation?: string; 
  public get postConfirmation() {
    return this.getStringAttribute('post_confirmation');
  }
  public set postConfirmation(value: string) {
    this._postConfirmation = value;
  }
  public resetPostConfirmation() {
    this._postConfirmation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postConfirmationInput() {
    return this._postConfirmation;
  }

  // pre_authentication - computed: false, optional: true, required: false
  private _preAuthentication?: string; 
  public get preAuthentication() {
    return this.getStringAttribute('pre_authentication');
  }
  public set preAuthentication(value: string) {
    this._preAuthentication = value;
  }
  public resetPreAuthentication() {
    this._preAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preAuthenticationInput() {
    return this._preAuthentication;
  }

  // pre_sign_up - computed: false, optional: true, required: false
  private _preSignUp?: string; 
  public get preSignUp() {
    return this.getStringAttribute('pre_sign_up');
  }
  public set preSignUp(value: string) {
    this._preSignUp = value;
  }
  public resetPreSignUp() {
    this._preSignUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preSignUpInput() {
    return this._preSignUp;
  }

  // pre_token_generation - computed: false, optional: true, required: false
  private _preTokenGeneration?: string; 
  public get preTokenGeneration() {
    return this.getStringAttribute('pre_token_generation');
  }
  public set preTokenGeneration(value: string) {
    this._preTokenGeneration = value;
  }
  public resetPreTokenGeneration() {
    this._preTokenGeneration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preTokenGenerationInput() {
    return this._preTokenGeneration;
  }

  // user_migration - computed: false, optional: true, required: false
  private _userMigration?: string; 
  public get userMigration() {
    return this.getStringAttribute('user_migration');
  }
  public set userMigration(value: string) {
    this._userMigration = value;
  }
  public resetUserMigration() {
    this._userMigration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userMigrationInput() {
    return this._userMigration;
  }

  // verify_auth_challenge_response - computed: false, optional: true, required: false
  private _verifyAuthChallengeResponse?: string; 
  public get verifyAuthChallengeResponse() {
    return this.getStringAttribute('verify_auth_challenge_response');
  }
  public set verifyAuthChallengeResponse(value: string) {
    this._verifyAuthChallengeResponse = value;
  }
  public resetVerifyAuthChallengeResponse() {
    this._verifyAuthChallengeResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyAuthChallengeResponseInput() {
    return this._verifyAuthChallengeResponse;
  }

  // custom_email_sender - computed: false, optional: true, required: false
  private _customEmailSender = new CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference(this, "custom_email_sender", true);
  public get customEmailSender() {
    return this._customEmailSender;
  }
  public putCustomEmailSender(value: CognitoUserPoolLambdaConfigCustomEmailSender) {
    this._customEmailSender.internalValue = value;
  }
  public resetCustomEmailSender() {
    this._customEmailSender.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEmailSenderInput() {
    return this._customEmailSender.internalValue;
  }

  // custom_sms_sender - computed: false, optional: true, required: false
  private _customSmsSender = new CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference(this, "custom_sms_sender", true);
  public get customSmsSender() {
    return this._customSmsSender;
  }
  public putCustomSmsSender(value: CognitoUserPoolLambdaConfigCustomSmsSender) {
    this._customSmsSender.internalValue = value;
  }
  public resetCustomSmsSender() {
    this._customSmsSender.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSmsSenderInput() {
    return this._customSmsSender.internalValue;
  }
}
export interface CognitoUserPoolPasswordPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#minimum_length CognitoUserPool#minimum_length}
  */
  readonly minimumLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#require_lowercase CognitoUserPool#require_lowercase}
  */
  readonly requireLowercase?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#require_numbers CognitoUserPool#require_numbers}
  */
  readonly requireNumbers?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#require_symbols CognitoUserPool#require_symbols}
  */
  readonly requireSymbols?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#require_uppercase CognitoUserPool#require_uppercase}
  */
  readonly requireUppercase?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#temporary_password_validity_days CognitoUserPool#temporary_password_validity_days}
  */
  readonly temporaryPasswordValidityDays?: number;
}

export function cognitoUserPoolPasswordPolicyToTerraform(struct?: CognitoUserPoolPasswordPolicyOutputReference | CognitoUserPoolPasswordPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minimum_length: cdktf.numberToTerraform(struct!.minimumLength),
    require_lowercase: cdktf.booleanToTerraform(struct!.requireLowercase),
    require_numbers: cdktf.booleanToTerraform(struct!.requireNumbers),
    require_symbols: cdktf.booleanToTerraform(struct!.requireSymbols),
    require_uppercase: cdktf.booleanToTerraform(struct!.requireUppercase),
    temporary_password_validity_days: cdktf.numberToTerraform(struct!.temporaryPasswordValidityDays),
  }
}

export class CognitoUserPoolPasswordPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CognitoUserPoolPasswordPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minimumLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumLength = this._minimumLength;
    }
    if (this._requireLowercase !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireLowercase = this._requireLowercase;
    }
    if (this._requireNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireNumbers = this._requireNumbers;
    }
    if (this._requireSymbols !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireSymbols = this._requireSymbols;
    }
    if (this._requireUppercase !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireUppercase = this._requireUppercase;
    }
    if (this._temporaryPasswordValidityDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.temporaryPasswordValidityDays = this._temporaryPasswordValidityDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoUserPoolPasswordPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minimumLength = undefined;
      this._requireLowercase = undefined;
      this._requireNumbers = undefined;
      this._requireSymbols = undefined;
      this._requireUppercase = undefined;
      this._temporaryPasswordValidityDays = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minimumLength = value.minimumLength;
      this._requireLowercase = value.requireLowercase;
      this._requireNumbers = value.requireNumbers;
      this._requireSymbols = value.requireSymbols;
      this._requireUppercase = value.requireUppercase;
      this._temporaryPasswordValidityDays = value.temporaryPasswordValidityDays;
    }
  }

  // minimum_length - computed: false, optional: true, required: false
  private _minimumLength?: number; 
  public get minimumLength() {
    return this.getNumberAttribute('minimum_length');
  }
  public set minimumLength(value: number) {
    this._minimumLength = value;
  }
  public resetMinimumLength() {
    this._minimumLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumLengthInput() {
    return this._minimumLength;
  }

  // require_lowercase - computed: false, optional: true, required: false
  private _requireLowercase?: boolean | cdktf.IResolvable; 
  public get requireLowercase() {
    return this.getBooleanAttribute('require_lowercase');
  }
  public set requireLowercase(value: boolean | cdktf.IResolvable) {
    this._requireLowercase = value;
  }
  public resetRequireLowercase() {
    this._requireLowercase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireLowercaseInput() {
    return this._requireLowercase;
  }

  // require_numbers - computed: false, optional: true, required: false
  private _requireNumbers?: boolean | cdktf.IResolvable; 
  public get requireNumbers() {
    return this.getBooleanAttribute('require_numbers');
  }
  public set requireNumbers(value: boolean | cdktf.IResolvable) {
    this._requireNumbers = value;
  }
  public resetRequireNumbers() {
    this._requireNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireNumbersInput() {
    return this._requireNumbers;
  }

  // require_symbols - computed: false, optional: true, required: false
  private _requireSymbols?: boolean | cdktf.IResolvable; 
  public get requireSymbols() {
    return this.getBooleanAttribute('require_symbols');
  }
  public set requireSymbols(value: boolean | cdktf.IResolvable) {
    this._requireSymbols = value;
  }
  public resetRequireSymbols() {
    this._requireSymbols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireSymbolsInput() {
    return this._requireSymbols;
  }

  // require_uppercase - computed: false, optional: true, required: false
  private _requireUppercase?: boolean | cdktf.IResolvable; 
  public get requireUppercase() {
    return this.getBooleanAttribute('require_uppercase');
  }
  public set requireUppercase(value: boolean | cdktf.IResolvable) {
    this._requireUppercase = value;
  }
  public resetRequireUppercase() {
    this._requireUppercase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireUppercaseInput() {
    return this._requireUppercase;
  }

  // temporary_password_validity_days - computed: false, optional: true, required: false
  private _temporaryPasswordValidityDays?: number; 
  public get temporaryPasswordValidityDays() {
    return this.getNumberAttribute('temporary_password_validity_days');
  }
  public set temporaryPasswordValidityDays(value: number) {
    this._temporaryPasswordValidityDays = value;
  }
  public resetTemporaryPasswordValidityDays() {
    this._temporaryPasswordValidityDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temporaryPasswordValidityDaysInput() {
    return this._temporaryPasswordValidityDays;
  }
}
export interface CognitoUserPoolSchemaNumberAttributeConstraints {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#max_value CognitoUserPool#max_value}
  */
  readonly maxValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#min_value CognitoUserPool#min_value}
  */
  readonly minValue?: string;
}

export function cognitoUserPoolSchemaNumberAttributeConstraintsToTerraform(struct?: CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference | CognitoUserPoolSchemaNumberAttributeConstraints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_value: cdktf.stringToTerraform(struct!.maxValue),
    min_value: cdktf.stringToTerraform(struct!.minValue),
  }
}

export class CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CognitoUserPoolSchemaNumberAttributeConstraints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoUserPoolSchemaNumberAttributeConstraints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxValue = undefined;
      this._minValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
    }
  }

  // max_value - computed: false, optional: true, required: false
  private _maxValue?: string; 
  public get maxValue() {
    return this.getStringAttribute('max_value');
  }
  public set maxValue(value: string) {
    this._maxValue = value;
  }
  public resetMaxValue() {
    this._maxValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: false, optional: true, required: false
  private _minValue?: string; 
  public get minValue() {
    return this.getStringAttribute('min_value');
  }
  public set minValue(value: string) {
    this._minValue = value;
  }
  public resetMinValue() {
    this._minValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
  }
}
export interface CognitoUserPoolSchemaStringAttributeConstraints {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#max_length CognitoUserPool#max_length}
  */
  readonly maxLength?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#min_length CognitoUserPool#min_length}
  */
  readonly minLength?: string;
}

export function cognitoUserPoolSchemaStringAttributeConstraintsToTerraform(struct?: CognitoUserPoolSchemaStringAttributeConstraintsOutputReference | CognitoUserPoolSchemaStringAttributeConstraints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_length: cdktf.stringToTerraform(struct!.maxLength),
    min_length: cdktf.stringToTerraform(struct!.minLength),
  }
}

export class CognitoUserPoolSchemaStringAttributeConstraintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CognitoUserPoolSchemaStringAttributeConstraints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLength = this._maxLength;
    }
    if (this._minLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLength = this._minLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoUserPoolSchemaStringAttributeConstraints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxLength = undefined;
      this._minLength = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxLength = value.maxLength;
      this._minLength = value.minLength;
    }
  }

  // max_length - computed: false, optional: true, required: false
  private _maxLength?: string; 
  public get maxLength() {
    return this.getStringAttribute('max_length');
  }
  public set maxLength(value: string) {
    this._maxLength = value;
  }
  public resetMaxLength() {
    this._maxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
  }

  // min_length - computed: false, optional: true, required: false
  private _minLength?: string; 
  public get minLength() {
    return this.getStringAttribute('min_length');
  }
  public set minLength(value: string) {
    this._minLength = value;
  }
  public resetMinLength() {
    this._minLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLengthInput() {
    return this._minLength;
  }
}
export interface CognitoUserPoolSchema {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#attribute_data_type CognitoUserPool#attribute_data_type}
  */
  readonly attributeDataType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#developer_only_attribute CognitoUserPool#developer_only_attribute}
  */
  readonly developerOnlyAttribute?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#mutable CognitoUserPool#mutable}
  */
  readonly mutable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#name CognitoUserPool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#required CognitoUserPool#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * number_attribute_constraints block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#number_attribute_constraints CognitoUserPool#number_attribute_constraints}
  */
  readonly numberAttributeConstraints?: CognitoUserPoolSchemaNumberAttributeConstraints;
  /**
  * string_attribute_constraints block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#string_attribute_constraints CognitoUserPool#string_attribute_constraints}
  */
  readonly stringAttributeConstraints?: CognitoUserPoolSchemaStringAttributeConstraints;
}

export function cognitoUserPoolSchemaToTerraform(struct?: CognitoUserPoolSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_data_type: cdktf.stringToTerraform(struct!.attributeDataType),
    developer_only_attribute: cdktf.booleanToTerraform(struct!.developerOnlyAttribute),
    mutable: cdktf.booleanToTerraform(struct!.mutable),
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
    number_attribute_constraints: cognitoUserPoolSchemaNumberAttributeConstraintsToTerraform(struct!.numberAttributeConstraints),
    string_attribute_constraints: cognitoUserPoolSchemaStringAttributeConstraintsToTerraform(struct!.stringAttributeConstraints),
  }
}

export interface CognitoUserPoolSmsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#external_id CognitoUserPool#external_id}
  */
  readonly externalId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sns_caller_arn CognitoUserPool#sns_caller_arn}
  */
  readonly snsCallerArn: string;
}

export function cognitoUserPoolSmsConfigurationToTerraform(struct?: CognitoUserPoolSmsConfigurationOutputReference | CognitoUserPoolSmsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_id: cdktf.stringToTerraform(struct!.externalId),
    sns_caller_arn: cdktf.stringToTerraform(struct!.snsCallerArn),
  }
}

export class CognitoUserPoolSmsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CognitoUserPoolSmsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._snsCallerArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.snsCallerArn = this._snsCallerArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoUserPoolSmsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._externalId = undefined;
      this._snsCallerArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._externalId = value.externalId;
      this._snsCallerArn = value.snsCallerArn;
    }
  }

  // external_id - computed: false, optional: false, required: true
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // sns_caller_arn - computed: false, optional: false, required: true
  private _snsCallerArn?: string; 
  public get snsCallerArn() {
    return this.getStringAttribute('sns_caller_arn');
  }
  public set snsCallerArn(value: string) {
    this._snsCallerArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snsCallerArnInput() {
    return this._snsCallerArn;
  }
}
export interface CognitoUserPoolSoftwareTokenMfaConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#enabled CognitoUserPool#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function cognitoUserPoolSoftwareTokenMfaConfigurationToTerraform(struct?: CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference | CognitoUserPoolSoftwareTokenMfaConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CognitoUserPoolSoftwareTokenMfaConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoUserPoolSoftwareTokenMfaConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface CognitoUserPoolUserPoolAddOns {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#advanced_security_mode CognitoUserPool#advanced_security_mode}
  */
  readonly advancedSecurityMode: string;
}

export function cognitoUserPoolUserPoolAddOnsToTerraform(struct?: CognitoUserPoolUserPoolAddOnsOutputReference | CognitoUserPoolUserPoolAddOns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advanced_security_mode: cdktf.stringToTerraform(struct!.advancedSecurityMode),
  }
}

export class CognitoUserPoolUserPoolAddOnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CognitoUserPoolUserPoolAddOns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advancedSecurityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedSecurityMode = this._advancedSecurityMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoUserPoolUserPoolAddOns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._advancedSecurityMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._advancedSecurityMode = value.advancedSecurityMode;
    }
  }

  // advanced_security_mode - computed: false, optional: false, required: true
  private _advancedSecurityMode?: string; 
  public get advancedSecurityMode() {
    return this.getStringAttribute('advanced_security_mode');
  }
  public set advancedSecurityMode(value: string) {
    this._advancedSecurityMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedSecurityModeInput() {
    return this._advancedSecurityMode;
  }
}
export interface CognitoUserPoolUsernameConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#case_sensitive CognitoUserPool#case_sensitive}
  */
  readonly caseSensitive: boolean | cdktf.IResolvable;
}

export function cognitoUserPoolUsernameConfigurationToTerraform(struct?: CognitoUserPoolUsernameConfigurationOutputReference | CognitoUserPoolUsernameConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
  }
}

export class CognitoUserPoolUsernameConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CognitoUserPoolUsernameConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoUserPoolUsernameConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caseSensitive = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caseSensitive = value.caseSensitive;
    }
  }

  // case_sensitive - computed: false, optional: false, required: true
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }
}
export interface CognitoUserPoolVerificationMessageTemplate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#default_email_option CognitoUserPool#default_email_option}
  */
  readonly defaultEmailOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_message CognitoUserPool#email_message}
  */
  readonly emailMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_message_by_link CognitoUserPool#email_message_by_link}
  */
  readonly emailMessageByLink?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_subject CognitoUserPool#email_subject}
  */
  readonly emailSubject?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_subject_by_link CognitoUserPool#email_subject_by_link}
  */
  readonly emailSubjectByLink?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_message CognitoUserPool#sms_message}
  */
  readonly smsMessage?: string;
}

export function cognitoUserPoolVerificationMessageTemplateToTerraform(struct?: CognitoUserPoolVerificationMessageTemplateOutputReference | CognitoUserPoolVerificationMessageTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_email_option: cdktf.stringToTerraform(struct!.defaultEmailOption),
    email_message: cdktf.stringToTerraform(struct!.emailMessage),
    email_message_by_link: cdktf.stringToTerraform(struct!.emailMessageByLink),
    email_subject: cdktf.stringToTerraform(struct!.emailSubject),
    email_subject_by_link: cdktf.stringToTerraform(struct!.emailSubjectByLink),
    sms_message: cdktf.stringToTerraform(struct!.smsMessage),
  }
}

export class CognitoUserPoolVerificationMessageTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CognitoUserPoolVerificationMessageTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultEmailOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultEmailOption = this._defaultEmailOption;
    }
    if (this._emailMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailMessage = this._emailMessage;
    }
    if (this._emailMessageByLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailMessageByLink = this._emailMessageByLink;
    }
    if (this._emailSubject !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailSubject = this._emailSubject;
    }
    if (this._emailSubjectByLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailSubjectByLink = this._emailSubjectByLink;
    }
    if (this._smsMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsMessage = this._smsMessage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoUserPoolVerificationMessageTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultEmailOption = undefined;
      this._emailMessage = undefined;
      this._emailMessageByLink = undefined;
      this._emailSubject = undefined;
      this._emailSubjectByLink = undefined;
      this._smsMessage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultEmailOption = value.defaultEmailOption;
      this._emailMessage = value.emailMessage;
      this._emailMessageByLink = value.emailMessageByLink;
      this._emailSubject = value.emailSubject;
      this._emailSubjectByLink = value.emailSubjectByLink;
      this._smsMessage = value.smsMessage;
    }
  }

  // default_email_option - computed: false, optional: true, required: false
  private _defaultEmailOption?: string; 
  public get defaultEmailOption() {
    return this.getStringAttribute('default_email_option');
  }
  public set defaultEmailOption(value: string) {
    this._defaultEmailOption = value;
  }
  public resetDefaultEmailOption() {
    this._defaultEmailOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultEmailOptionInput() {
    return this._defaultEmailOption;
  }

  // email_message - computed: true, optional: true, required: false
  private _emailMessage?: string; 
  public get emailMessage() {
    return this.getStringAttribute('email_message');
  }
  public set emailMessage(value: string) {
    this._emailMessage = value;
  }
  public resetEmailMessage() {
    this._emailMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailMessageInput() {
    return this._emailMessage;
  }

  // email_message_by_link - computed: true, optional: true, required: false
  private _emailMessageByLink?: string; 
  public get emailMessageByLink() {
    return this.getStringAttribute('email_message_by_link');
  }
  public set emailMessageByLink(value: string) {
    this._emailMessageByLink = value;
  }
  public resetEmailMessageByLink() {
    this._emailMessageByLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailMessageByLinkInput() {
    return this._emailMessageByLink;
  }

  // email_subject - computed: true, optional: true, required: false
  private _emailSubject?: string; 
  public get emailSubject() {
    return this.getStringAttribute('email_subject');
  }
  public set emailSubject(value: string) {
    this._emailSubject = value;
  }
  public resetEmailSubject() {
    this._emailSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailSubjectInput() {
    return this._emailSubject;
  }

  // email_subject_by_link - computed: true, optional: true, required: false
  private _emailSubjectByLink?: string; 
  public get emailSubjectByLink() {
    return this.getStringAttribute('email_subject_by_link');
  }
  public set emailSubjectByLink(value: string) {
    this._emailSubjectByLink = value;
  }
  public resetEmailSubjectByLink() {
    this._emailSubjectByLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailSubjectByLinkInput() {
    return this._emailSubjectByLink;
  }

  // sms_message - computed: true, optional: true, required: false
  private _smsMessage?: string; 
  public get smsMessage() {
    return this.getStringAttribute('sms_message');
  }
  public set smsMessage(value: string) {
    this._smsMessage = value;
  }
  public resetSmsMessage() {
    this._smsMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsMessageInput() {
    return this._smsMessage;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool aws_cognito_user_pool}
*/
export class CognitoUserPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_cognito_user_pool";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool aws_cognito_user_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CognitoUserPoolConfig
  */
  public constructor(scope: Construct, id: string, config: CognitoUserPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cognito_user_pool',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._aliasAttributes = config.aliasAttributes;
    this._autoVerifiedAttributes = config.autoVerifiedAttributes;
    this._emailVerificationMessage = config.emailVerificationMessage;
    this._emailVerificationSubject = config.emailVerificationSubject;
    this._mfaConfiguration = config.mfaConfiguration;
    this._name = config.name;
    this._smsAuthenticationMessage = config.smsAuthenticationMessage;
    this._smsVerificationMessage = config.smsVerificationMessage;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._usernameAttributes = config.usernameAttributes;
    this._accountRecoverySetting.internalValue = config.accountRecoverySetting;
    this._adminCreateUserConfig.internalValue = config.adminCreateUserConfig;
    this._deviceConfiguration.internalValue = config.deviceConfiguration;
    this._emailConfiguration.internalValue = config.emailConfiguration;
    this._lambdaConfig.internalValue = config.lambdaConfig;
    this._passwordPolicy.internalValue = config.passwordPolicy;
    this._schema = config.schema;
    this._smsConfiguration.internalValue = config.smsConfiguration;
    this._softwareTokenMfaConfiguration.internalValue = config.softwareTokenMfaConfiguration;
    this._userPoolAddOns.internalValue = config.userPoolAddOns;
    this._usernameConfiguration.internalValue = config.usernameConfiguration;
    this._verificationMessageTemplate.internalValue = config.verificationMessageTemplate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias_attributes - computed: false, optional: true, required: false
  private _aliasAttributes?: string[]; 
  public get aliasAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('alias_attributes'));
  }
  public set aliasAttributes(value: string[]) {
    this._aliasAttributes = value;
  }
  public resetAliasAttributes() {
    this._aliasAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasAttributesInput() {
    return this._aliasAttributes;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_verified_attributes - computed: false, optional: true, required: false
  private _autoVerifiedAttributes?: string[]; 
  public get autoVerifiedAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('auto_verified_attributes'));
  }
  public set autoVerifiedAttributes(value: string[]) {
    this._autoVerifiedAttributes = value;
  }
  public resetAutoVerifiedAttributes() {
    this._autoVerifiedAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoVerifiedAttributesInput() {
    return this._autoVerifiedAttributes;
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // custom_domain - computed: true, optional: false, required: false
  public get customDomain() {
    return this.getStringAttribute('custom_domain');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // email_verification_message - computed: true, optional: true, required: false
  private _emailVerificationMessage?: string; 
  public get emailVerificationMessage() {
    return this.getStringAttribute('email_verification_message');
  }
  public set emailVerificationMessage(value: string) {
    this._emailVerificationMessage = value;
  }
  public resetEmailVerificationMessage() {
    this._emailVerificationMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailVerificationMessageInput() {
    return this._emailVerificationMessage;
  }

  // email_verification_subject - computed: true, optional: true, required: false
  private _emailVerificationSubject?: string; 
  public get emailVerificationSubject() {
    return this.getStringAttribute('email_verification_subject');
  }
  public set emailVerificationSubject(value: string) {
    this._emailVerificationSubject = value;
  }
  public resetEmailVerificationSubject() {
    this._emailVerificationSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailVerificationSubjectInput() {
    return this._emailVerificationSubject;
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // estimated_number_of_users - computed: true, optional: false, required: false
  public get estimatedNumberOfUsers() {
    return this.getNumberAttribute('estimated_number_of_users');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_modified_date - computed: true, optional: false, required: false
  public get lastModifiedDate() {
    return this.getStringAttribute('last_modified_date');
  }

  // mfa_configuration - computed: false, optional: true, required: false
  private _mfaConfiguration?: string; 
  public get mfaConfiguration() {
    return this.getStringAttribute('mfa_configuration');
  }
  public set mfaConfiguration(value: string) {
    this._mfaConfiguration = value;
  }
  public resetMfaConfiguration() {
    this._mfaConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaConfigurationInput() {
    return this._mfaConfiguration;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // sms_authentication_message - computed: false, optional: true, required: false
  private _smsAuthenticationMessage?: string; 
  public get smsAuthenticationMessage() {
    return this.getStringAttribute('sms_authentication_message');
  }
  public set smsAuthenticationMessage(value: string) {
    this._smsAuthenticationMessage = value;
  }
  public resetSmsAuthenticationMessage() {
    this._smsAuthenticationMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsAuthenticationMessageInput() {
    return this._smsAuthenticationMessage;
  }

  // sms_verification_message - computed: true, optional: true, required: false
  private _smsVerificationMessage?: string; 
  public get smsVerificationMessage() {
    return this.getStringAttribute('sms_verification_message');
  }
  public set smsVerificationMessage(value: string) {
    this._smsVerificationMessage = value;
  }
  public resetSmsVerificationMessage() {
    this._smsVerificationMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsVerificationMessageInput() {
    return this._smsVerificationMessage;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // username_attributes - computed: false, optional: true, required: false
  private _usernameAttributes?: string[]; 
  public get usernameAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('username_attributes'));
  }
  public set usernameAttributes(value: string[]) {
    this._usernameAttributes = value;
  }
  public resetUsernameAttributes() {
    this._usernameAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameAttributesInput() {
    return this._usernameAttributes;
  }

  // account_recovery_setting - computed: false, optional: true, required: false
  private _accountRecoverySetting = new CognitoUserPoolAccountRecoverySettingOutputReference(this, "account_recovery_setting", true);
  public get accountRecoverySetting() {
    return this._accountRecoverySetting;
  }
  public putAccountRecoverySetting(value: CognitoUserPoolAccountRecoverySetting) {
    this._accountRecoverySetting.internalValue = value;
  }
  public resetAccountRecoverySetting() {
    this._accountRecoverySetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountRecoverySettingInput() {
    return this._accountRecoverySetting.internalValue;
  }

  // admin_create_user_config - computed: false, optional: true, required: false
  private _adminCreateUserConfig = new CognitoUserPoolAdminCreateUserConfigOutputReference(this, "admin_create_user_config", true);
  public get adminCreateUserConfig() {
    return this._adminCreateUserConfig;
  }
  public putAdminCreateUserConfig(value: CognitoUserPoolAdminCreateUserConfig) {
    this._adminCreateUserConfig.internalValue = value;
  }
  public resetAdminCreateUserConfig() {
    this._adminCreateUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminCreateUserConfigInput() {
    return this._adminCreateUserConfig.internalValue;
  }

  // device_configuration - computed: false, optional: true, required: false
  private _deviceConfiguration = new CognitoUserPoolDeviceConfigurationOutputReference(this, "device_configuration", true);
  public get deviceConfiguration() {
    return this._deviceConfiguration;
  }
  public putDeviceConfiguration(value: CognitoUserPoolDeviceConfiguration) {
    this._deviceConfiguration.internalValue = value;
  }
  public resetDeviceConfiguration() {
    this._deviceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceConfigurationInput() {
    return this._deviceConfiguration.internalValue;
  }

  // email_configuration - computed: false, optional: true, required: false
  private _emailConfiguration = new CognitoUserPoolEmailConfigurationOutputReference(this, "email_configuration", true);
  public get emailConfiguration() {
    return this._emailConfiguration;
  }
  public putEmailConfiguration(value: CognitoUserPoolEmailConfiguration) {
    this._emailConfiguration.internalValue = value;
  }
  public resetEmailConfiguration() {
    this._emailConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailConfigurationInput() {
    return this._emailConfiguration.internalValue;
  }

  // lambda_config - computed: false, optional: true, required: false
  private _lambdaConfig = new CognitoUserPoolLambdaConfigOutputReference(this, "lambda_config", true);
  public get lambdaConfig() {
    return this._lambdaConfig;
  }
  public putLambdaConfig(value: CognitoUserPoolLambdaConfig) {
    this._lambdaConfig.internalValue = value;
  }
  public resetLambdaConfig() {
    this._lambdaConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaConfigInput() {
    return this._lambdaConfig.internalValue;
  }

  // password_policy - computed: false, optional: true, required: false
  private _passwordPolicy = new CognitoUserPoolPasswordPolicyOutputReference(this, "password_policy", true);
  public get passwordPolicy() {
    return this._passwordPolicy;
  }
  public putPasswordPolicy(value: CognitoUserPoolPasswordPolicy) {
    this._passwordPolicy.internalValue = value;
  }
  public resetPasswordPolicy() {
    this._passwordPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordPolicyInput() {
    return this._passwordPolicy.internalValue;
  }

  // schema - computed: false, optional: true, required: false
  private _schema?: CognitoUserPoolSchema[] | cdktf.IResolvable; 
  public get schema() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('schema')));
  }
  public set schema(value: CognitoUserPoolSchema[] | cdktf.IResolvable) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // sms_configuration - computed: false, optional: true, required: false
  private _smsConfiguration = new CognitoUserPoolSmsConfigurationOutputReference(this, "sms_configuration", true);
  public get smsConfiguration() {
    return this._smsConfiguration;
  }
  public putSmsConfiguration(value: CognitoUserPoolSmsConfiguration) {
    this._smsConfiguration.internalValue = value;
  }
  public resetSmsConfiguration() {
    this._smsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsConfigurationInput() {
    return this._smsConfiguration.internalValue;
  }

  // software_token_mfa_configuration - computed: false, optional: true, required: false
  private _softwareTokenMfaConfiguration = new CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference(this, "software_token_mfa_configuration", true);
  public get softwareTokenMfaConfiguration() {
    return this._softwareTokenMfaConfiguration;
  }
  public putSoftwareTokenMfaConfiguration(value: CognitoUserPoolSoftwareTokenMfaConfiguration) {
    this._softwareTokenMfaConfiguration.internalValue = value;
  }
  public resetSoftwareTokenMfaConfiguration() {
    this._softwareTokenMfaConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareTokenMfaConfigurationInput() {
    return this._softwareTokenMfaConfiguration.internalValue;
  }

  // user_pool_add_ons - computed: false, optional: true, required: false
  private _userPoolAddOns = new CognitoUserPoolUserPoolAddOnsOutputReference(this, "user_pool_add_ons", true);
  public get userPoolAddOns() {
    return this._userPoolAddOns;
  }
  public putUserPoolAddOns(value: CognitoUserPoolUserPoolAddOns) {
    this._userPoolAddOns.internalValue = value;
  }
  public resetUserPoolAddOns() {
    this._userPoolAddOns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolAddOnsInput() {
    return this._userPoolAddOns.internalValue;
  }

  // username_configuration - computed: false, optional: true, required: false
  private _usernameConfiguration = new CognitoUserPoolUsernameConfigurationOutputReference(this, "username_configuration", true);
  public get usernameConfiguration() {
    return this._usernameConfiguration;
  }
  public putUsernameConfiguration(value: CognitoUserPoolUsernameConfiguration) {
    this._usernameConfiguration.internalValue = value;
  }
  public resetUsernameConfiguration() {
    this._usernameConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameConfigurationInput() {
    return this._usernameConfiguration.internalValue;
  }

  // verification_message_template - computed: false, optional: true, required: false
  private _verificationMessageTemplate = new CognitoUserPoolVerificationMessageTemplateOutputReference(this, "verification_message_template", true);
  public get verificationMessageTemplate() {
    return this._verificationMessageTemplate;
  }
  public putVerificationMessageTemplate(value: CognitoUserPoolVerificationMessageTemplate) {
    this._verificationMessageTemplate.internalValue = value;
  }
  public resetVerificationMessageTemplate() {
    this._verificationMessageTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationMessageTemplateInput() {
    return this._verificationMessageTemplate.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias_attributes: cdktf.listMapper(cdktf.stringToTerraform)(this._aliasAttributes),
      auto_verified_attributes: cdktf.listMapper(cdktf.stringToTerraform)(this._autoVerifiedAttributes),
      email_verification_message: cdktf.stringToTerraform(this._emailVerificationMessage),
      email_verification_subject: cdktf.stringToTerraform(this._emailVerificationSubject),
      mfa_configuration: cdktf.stringToTerraform(this._mfaConfiguration),
      name: cdktf.stringToTerraform(this._name),
      sms_authentication_message: cdktf.stringToTerraform(this._smsAuthenticationMessage),
      sms_verification_message: cdktf.stringToTerraform(this._smsVerificationMessage),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      username_attributes: cdktf.listMapper(cdktf.stringToTerraform)(this._usernameAttributes),
      account_recovery_setting: cognitoUserPoolAccountRecoverySettingToTerraform(this._accountRecoverySetting.internalValue),
      admin_create_user_config: cognitoUserPoolAdminCreateUserConfigToTerraform(this._adminCreateUserConfig.internalValue),
      device_configuration: cognitoUserPoolDeviceConfigurationToTerraform(this._deviceConfiguration.internalValue),
      email_configuration: cognitoUserPoolEmailConfigurationToTerraform(this._emailConfiguration.internalValue),
      lambda_config: cognitoUserPoolLambdaConfigToTerraform(this._lambdaConfig.internalValue),
      password_policy: cognitoUserPoolPasswordPolicyToTerraform(this._passwordPolicy.internalValue),
      schema: cdktf.listMapper(cognitoUserPoolSchemaToTerraform)(this._schema),
      sms_configuration: cognitoUserPoolSmsConfigurationToTerraform(this._smsConfiguration.internalValue),
      software_token_mfa_configuration: cognitoUserPoolSoftwareTokenMfaConfigurationToTerraform(this._softwareTokenMfaConfiguration.internalValue),
      user_pool_add_ons: cognitoUserPoolUserPoolAddOnsToTerraform(this._userPoolAddOns.internalValue),
      username_configuration: cognitoUserPoolUsernameConfigurationToTerraform(this._usernameConfiguration.internalValue),
      verification_message_template: cognitoUserPoolVerificationMessageTemplateToTerraform(this._verificationMessageTemplate.internalValue),
    };
  }
}
