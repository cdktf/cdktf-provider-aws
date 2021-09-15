// https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CognitoUserPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#alias_attributes CognitoUserPool#alias_attributes}
  */
  readonly aliasAttributes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#auto_verified_attributes CognitoUserPool#auto_verified_attributes}
  */
  readonly autoVerifiedAttributes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#email_verification_message CognitoUserPool#email_verification_message}
  */
  readonly emailVerificationMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#email_verification_subject CognitoUserPool#email_verification_subject}
  */
  readonly emailVerificationSubject?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#mfa_configuration CognitoUserPool#mfa_configuration}
  */
  readonly mfaConfiguration?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#name CognitoUserPool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#sms_authentication_message CognitoUserPool#sms_authentication_message}
  */
  readonly smsAuthenticationMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#sms_verification_message CognitoUserPool#sms_verification_message}
  */
  readonly smsVerificationMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#tags CognitoUserPool#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#tags_all CognitoUserPool#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#username_attributes CognitoUserPool#username_attributes}
  */
  readonly usernameAttributes?: string[];
  /**
  * account_recovery_setting block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#account_recovery_setting CognitoUserPool#account_recovery_setting}
  */
  readonly accountRecoverySetting?: CognitoUserPoolAccountRecoverySetting[];
  /**
  * admin_create_user_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#admin_create_user_config CognitoUserPool#admin_create_user_config}
  */
  readonly adminCreateUserConfig?: CognitoUserPoolAdminCreateUserConfig[];
  /**
  * device_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#device_configuration CognitoUserPool#device_configuration}
  */
  readonly deviceConfiguration?: CognitoUserPoolDeviceConfiguration[];
  /**
  * email_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#email_configuration CognitoUserPool#email_configuration}
  */
  readonly emailConfiguration?: CognitoUserPoolEmailConfiguration[];
  /**
  * lambda_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#lambda_config CognitoUserPool#lambda_config}
  */
  readonly lambdaConfig?: CognitoUserPoolLambdaConfig[];
  /**
  * password_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#password_policy CognitoUserPool#password_policy}
  */
  readonly passwordPolicy?: CognitoUserPoolPasswordPolicy[];
  /**
  * schema block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#schema CognitoUserPool#schema}
  */
  readonly schema?: CognitoUserPoolSchema[];
  /**
  * sms_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#sms_configuration CognitoUserPool#sms_configuration}
  */
  readonly smsConfiguration?: CognitoUserPoolSmsConfiguration[];
  /**
  * software_token_mfa_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#software_token_mfa_configuration CognitoUserPool#software_token_mfa_configuration}
  */
  readonly softwareTokenMfaConfiguration?: CognitoUserPoolSoftwareTokenMfaConfiguration[];
  /**
  * user_pool_add_ons block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#user_pool_add_ons CognitoUserPool#user_pool_add_ons}
  */
  readonly userPoolAddOns?: CognitoUserPoolUserPoolAddOns[];
  /**
  * username_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#username_configuration CognitoUserPool#username_configuration}
  */
  readonly usernameConfiguration?: CognitoUserPoolUsernameConfiguration[];
  /**
  * verification_message_template block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#verification_message_template CognitoUserPool#verification_message_template}
  */
  readonly verificationMessageTemplate?: CognitoUserPoolVerificationMessageTemplate[];
}
export interface CognitoUserPoolAccountRecoverySettingRecoveryMechanism {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#name CognitoUserPool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#priority CognitoUserPool#priority}
  */
  readonly priority: number;
}

function cognitoUserPoolAccountRecoverySettingRecoveryMechanismToTerraform(struct?: CognitoUserPoolAccountRecoverySettingRecoveryMechanism): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}

export interface CognitoUserPoolAccountRecoverySetting {
  /**
  * recovery_mechanism block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#recovery_mechanism CognitoUserPool#recovery_mechanism}
  */
  readonly recoveryMechanism: CognitoUserPoolAccountRecoverySettingRecoveryMechanism[];
}

function cognitoUserPoolAccountRecoverySettingToTerraform(struct?: CognitoUserPoolAccountRecoverySetting): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    recovery_mechanism: cdktf.listMapper(cognitoUserPoolAccountRecoverySettingRecoveryMechanismToTerraform)(struct!.recoveryMechanism),
  }
}

export interface CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#email_message CognitoUserPool#email_message}
  */
  readonly emailMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#email_subject CognitoUserPool#email_subject}
  */
  readonly emailSubject?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#sms_message CognitoUserPool#sms_message}
  */
  readonly smsMessage?: string;
}

function cognitoUserPoolAdminCreateUserConfigInviteMessageTemplateToTerraform(struct?: CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    email_message: cdktf.stringToTerraform(struct!.emailMessage),
    email_subject: cdktf.stringToTerraform(struct!.emailSubject),
    sms_message: cdktf.stringToTerraform(struct!.smsMessage),
  }
}

export interface CognitoUserPoolAdminCreateUserConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#allow_admin_create_user_only CognitoUserPool#allow_admin_create_user_only}
  */
  readonly allowAdminCreateUserOnly?: boolean | cdktf.IResolvable;
  /**
  * invite_message_template block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#invite_message_template CognitoUserPool#invite_message_template}
  */
  readonly inviteMessageTemplate?: CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate[];
}

function cognitoUserPoolAdminCreateUserConfigToTerraform(struct?: CognitoUserPoolAdminCreateUserConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allow_admin_create_user_only: cdktf.booleanToTerraform(struct!.allowAdminCreateUserOnly),
    invite_message_template: cdktf.listMapper(cognitoUserPoolAdminCreateUserConfigInviteMessageTemplateToTerraform)(struct!.inviteMessageTemplate),
  }
}

export interface CognitoUserPoolDeviceConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#challenge_required_on_new_device CognitoUserPool#challenge_required_on_new_device}
  */
  readonly challengeRequiredOnNewDevice?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#device_only_remembered_on_user_prompt CognitoUserPool#device_only_remembered_on_user_prompt}
  */
  readonly deviceOnlyRememberedOnUserPrompt?: boolean | cdktf.IResolvable;
}

function cognitoUserPoolDeviceConfigurationToTerraform(struct?: CognitoUserPoolDeviceConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    challenge_required_on_new_device: cdktf.booleanToTerraform(struct!.challengeRequiredOnNewDevice),
    device_only_remembered_on_user_prompt: cdktf.booleanToTerraform(struct!.deviceOnlyRememberedOnUserPrompt),
  }
}

export interface CognitoUserPoolEmailConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#configuration_set CognitoUserPool#configuration_set}
  */
  readonly configurationSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#email_sending_account CognitoUserPool#email_sending_account}
  */
  readonly emailSendingAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#from_email_address CognitoUserPool#from_email_address}
  */
  readonly fromEmailAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#reply_to_email_address CognitoUserPool#reply_to_email_address}
  */
  readonly replyToEmailAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#source_arn CognitoUserPool#source_arn}
  */
  readonly sourceArn?: string;
}

function cognitoUserPoolEmailConfigurationToTerraform(struct?: CognitoUserPoolEmailConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    configuration_set: cdktf.stringToTerraform(struct!.configurationSet),
    email_sending_account: cdktf.stringToTerraform(struct!.emailSendingAccount),
    from_email_address: cdktf.stringToTerraform(struct!.fromEmailAddress),
    reply_to_email_address: cdktf.stringToTerraform(struct!.replyToEmailAddress),
    source_arn: cdktf.stringToTerraform(struct!.sourceArn),
  }
}

export interface CognitoUserPoolLambdaConfigCustomEmailSender {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#lambda_arn CognitoUserPool#lambda_arn}
  */
  readonly lambdaArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#lambda_version CognitoUserPool#lambda_version}
  */
  readonly lambdaVersion: string;
}

function cognitoUserPoolLambdaConfigCustomEmailSenderToTerraform(struct?: CognitoUserPoolLambdaConfigCustomEmailSender): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    lambda_arn: cdktf.stringToTerraform(struct!.lambdaArn),
    lambda_version: cdktf.stringToTerraform(struct!.lambdaVersion),
  }
}

export interface CognitoUserPoolLambdaConfigCustomSmsSender {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#lambda_arn CognitoUserPool#lambda_arn}
  */
  readonly lambdaArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#lambda_version CognitoUserPool#lambda_version}
  */
  readonly lambdaVersion: string;
}

function cognitoUserPoolLambdaConfigCustomSmsSenderToTerraform(struct?: CognitoUserPoolLambdaConfigCustomSmsSender): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    lambda_arn: cdktf.stringToTerraform(struct!.lambdaArn),
    lambda_version: cdktf.stringToTerraform(struct!.lambdaVersion),
  }
}

export interface CognitoUserPoolLambdaConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#create_auth_challenge CognitoUserPool#create_auth_challenge}
  */
  readonly createAuthChallenge?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#custom_message CognitoUserPool#custom_message}
  */
  readonly customMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#define_auth_challenge CognitoUserPool#define_auth_challenge}
  */
  readonly defineAuthChallenge?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#kms_key_id CognitoUserPool#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#post_authentication CognitoUserPool#post_authentication}
  */
  readonly postAuthentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#post_confirmation CognitoUserPool#post_confirmation}
  */
  readonly postConfirmation?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#pre_authentication CognitoUserPool#pre_authentication}
  */
  readonly preAuthentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#pre_sign_up CognitoUserPool#pre_sign_up}
  */
  readonly preSignUp?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#pre_token_generation CognitoUserPool#pre_token_generation}
  */
  readonly preTokenGeneration?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#user_migration CognitoUserPool#user_migration}
  */
  readonly userMigration?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#verify_auth_challenge_response CognitoUserPool#verify_auth_challenge_response}
  */
  readonly verifyAuthChallengeResponse?: string;
  /**
  * custom_email_sender block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#custom_email_sender CognitoUserPool#custom_email_sender}
  */
  readonly customEmailSender?: CognitoUserPoolLambdaConfigCustomEmailSender[];
  /**
  * custom_sms_sender block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#custom_sms_sender CognitoUserPool#custom_sms_sender}
  */
  readonly customSmsSender?: CognitoUserPoolLambdaConfigCustomSmsSender[];
}

function cognitoUserPoolLambdaConfigToTerraform(struct?: CognitoUserPoolLambdaConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
    custom_email_sender: cdktf.listMapper(cognitoUserPoolLambdaConfigCustomEmailSenderToTerraform)(struct!.customEmailSender),
    custom_sms_sender: cdktf.listMapper(cognitoUserPoolLambdaConfigCustomSmsSenderToTerraform)(struct!.customSmsSender),
  }
}

export interface CognitoUserPoolPasswordPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#minimum_length CognitoUserPool#minimum_length}
  */
  readonly minimumLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#require_lowercase CognitoUserPool#require_lowercase}
  */
  readonly requireLowercase?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#require_numbers CognitoUserPool#require_numbers}
  */
  readonly requireNumbers?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#require_symbols CognitoUserPool#require_symbols}
  */
  readonly requireSymbols?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#require_uppercase CognitoUserPool#require_uppercase}
  */
  readonly requireUppercase?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#temporary_password_validity_days CognitoUserPool#temporary_password_validity_days}
  */
  readonly temporaryPasswordValidityDays?: number;
}

function cognitoUserPoolPasswordPolicyToTerraform(struct?: CognitoUserPoolPasswordPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    minimum_length: cdktf.numberToTerraform(struct!.minimumLength),
    require_lowercase: cdktf.booleanToTerraform(struct!.requireLowercase),
    require_numbers: cdktf.booleanToTerraform(struct!.requireNumbers),
    require_symbols: cdktf.booleanToTerraform(struct!.requireSymbols),
    require_uppercase: cdktf.booleanToTerraform(struct!.requireUppercase),
    temporary_password_validity_days: cdktf.numberToTerraform(struct!.temporaryPasswordValidityDays),
  }
}

export interface CognitoUserPoolSchemaNumberAttributeConstraints {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#max_value CognitoUserPool#max_value}
  */
  readonly maxValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#min_value CognitoUserPool#min_value}
  */
  readonly minValue?: string;
}

function cognitoUserPoolSchemaNumberAttributeConstraintsToTerraform(struct?: CognitoUserPoolSchemaNumberAttributeConstraints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_value: cdktf.stringToTerraform(struct!.maxValue),
    min_value: cdktf.stringToTerraform(struct!.minValue),
  }
}

export interface CognitoUserPoolSchemaStringAttributeConstraints {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#max_length CognitoUserPool#max_length}
  */
  readonly maxLength?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#min_length CognitoUserPool#min_length}
  */
  readonly minLength?: string;
}

function cognitoUserPoolSchemaStringAttributeConstraintsToTerraform(struct?: CognitoUserPoolSchemaStringAttributeConstraints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_length: cdktf.stringToTerraform(struct!.maxLength),
    min_length: cdktf.stringToTerraform(struct!.minLength),
  }
}

export interface CognitoUserPoolSchema {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#attribute_data_type CognitoUserPool#attribute_data_type}
  */
  readonly attributeDataType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#developer_only_attribute CognitoUserPool#developer_only_attribute}
  */
  readonly developerOnlyAttribute?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#mutable CognitoUserPool#mutable}
  */
  readonly mutable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#name CognitoUserPool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#required CognitoUserPool#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * number_attribute_constraints block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#number_attribute_constraints CognitoUserPool#number_attribute_constraints}
  */
  readonly numberAttributeConstraints?: CognitoUserPoolSchemaNumberAttributeConstraints[];
  /**
  * string_attribute_constraints block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#string_attribute_constraints CognitoUserPool#string_attribute_constraints}
  */
  readonly stringAttributeConstraints?: CognitoUserPoolSchemaStringAttributeConstraints[];
}

function cognitoUserPoolSchemaToTerraform(struct?: CognitoUserPoolSchema): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    attribute_data_type: cdktf.stringToTerraform(struct!.attributeDataType),
    developer_only_attribute: cdktf.booleanToTerraform(struct!.developerOnlyAttribute),
    mutable: cdktf.booleanToTerraform(struct!.mutable),
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
    number_attribute_constraints: cdktf.listMapper(cognitoUserPoolSchemaNumberAttributeConstraintsToTerraform)(struct!.numberAttributeConstraints),
    string_attribute_constraints: cdktf.listMapper(cognitoUserPoolSchemaStringAttributeConstraintsToTerraform)(struct!.stringAttributeConstraints),
  }
}

export interface CognitoUserPoolSmsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#external_id CognitoUserPool#external_id}
  */
  readonly externalId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#sns_caller_arn CognitoUserPool#sns_caller_arn}
  */
  readonly snsCallerArn: string;
}

function cognitoUserPoolSmsConfigurationToTerraform(struct?: CognitoUserPoolSmsConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    external_id: cdktf.stringToTerraform(struct!.externalId),
    sns_caller_arn: cdktf.stringToTerraform(struct!.snsCallerArn),
  }
}

export interface CognitoUserPoolSoftwareTokenMfaConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#enabled CognitoUserPool#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

function cognitoUserPoolSoftwareTokenMfaConfigurationToTerraform(struct?: CognitoUserPoolSoftwareTokenMfaConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface CognitoUserPoolUserPoolAddOns {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#advanced_security_mode CognitoUserPool#advanced_security_mode}
  */
  readonly advancedSecurityMode: string;
}

function cognitoUserPoolUserPoolAddOnsToTerraform(struct?: CognitoUserPoolUserPoolAddOns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    advanced_security_mode: cdktf.stringToTerraform(struct!.advancedSecurityMode),
  }
}

export interface CognitoUserPoolUsernameConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#case_sensitive CognitoUserPool#case_sensitive}
  */
  readonly caseSensitive: boolean | cdktf.IResolvable;
}

function cognitoUserPoolUsernameConfigurationToTerraform(struct?: CognitoUserPoolUsernameConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
  }
}

export interface CognitoUserPoolVerificationMessageTemplate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#default_email_option CognitoUserPool#default_email_option}
  */
  readonly defaultEmailOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#email_message CognitoUserPool#email_message}
  */
  readonly emailMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#email_message_by_link CognitoUserPool#email_message_by_link}
  */
  readonly emailMessageByLink?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#email_subject CognitoUserPool#email_subject}
  */
  readonly emailSubject?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#email_subject_by_link CognitoUserPool#email_subject_by_link}
  */
  readonly emailSubjectByLink?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#sms_message CognitoUserPool#sms_message}
  */
  readonly smsMessage?: string;
}

function cognitoUserPoolVerificationMessageTemplateToTerraform(struct?: CognitoUserPoolVerificationMessageTemplate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_email_option: cdktf.stringToTerraform(struct!.defaultEmailOption),
    email_message: cdktf.stringToTerraform(struct!.emailMessage),
    email_message_by_link: cdktf.stringToTerraform(struct!.emailMessageByLink),
    email_subject: cdktf.stringToTerraform(struct!.emailSubject),
    email_subject_by_link: cdktf.stringToTerraform(struct!.emailSubjectByLink),
    sms_message: cdktf.stringToTerraform(struct!.smsMessage),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html aws_cognito_user_pool}
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
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html aws_cognito_user_pool} Resource
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
    this._accountRecoverySetting = config.accountRecoverySetting;
    this._adminCreateUserConfig = config.adminCreateUserConfig;
    this._deviceConfiguration = config.deviceConfiguration;
    this._emailConfiguration = config.emailConfiguration;
    this._lambdaConfig = config.lambdaConfig;
    this._passwordPolicy = config.passwordPolicy;
    this._schema = config.schema;
    this._smsConfiguration = config.smsConfiguration;
    this._softwareTokenMfaConfiguration = config.softwareTokenMfaConfiguration;
    this._userPoolAddOns = config.userPoolAddOns;
    this._usernameConfiguration = config.usernameConfiguration;
    this._verificationMessageTemplate = config.verificationMessageTemplate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias_attributes - computed: false, optional: true, required: false
  private _aliasAttributes?: string[];
  public get aliasAttributes() {
    return this.getListAttribute('alias_attributes');
  }
  public set aliasAttributes(value: string[] ) {
    this._aliasAttributes = value;
  }
  public resetAliasAttributes() {
    this._aliasAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasAttributesInput() {
    return this._aliasAttributes
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_verified_attributes - computed: false, optional: true, required: false
  private _autoVerifiedAttributes?: string[];
  public get autoVerifiedAttributes() {
    return this.getListAttribute('auto_verified_attributes');
  }
  public set autoVerifiedAttributes(value: string[] ) {
    this._autoVerifiedAttributes = value;
  }
  public resetAutoVerifiedAttributes() {
    this._autoVerifiedAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoVerifiedAttributesInput() {
    return this._autoVerifiedAttributes
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
    return this._emailVerificationMessage
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
    return this._emailVerificationSubject
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
  public set mfaConfiguration(value: string ) {
    this._mfaConfiguration = value;
  }
  public resetMfaConfiguration() {
    this._mfaConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaConfigurationInput() {
    return this._mfaConfiguration
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // sms_authentication_message - computed: false, optional: true, required: false
  private _smsAuthenticationMessage?: string;
  public get smsAuthenticationMessage() {
    return this.getStringAttribute('sms_authentication_message');
  }
  public set smsAuthenticationMessage(value: string ) {
    this._smsAuthenticationMessage = value;
  }
  public resetSmsAuthenticationMessage() {
    this._smsAuthenticationMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsAuthenticationMessageInput() {
    return this._smsAuthenticationMessage
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
    return this._smsVerificationMessage
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // username_attributes - computed: false, optional: true, required: false
  private _usernameAttributes?: string[];
  public get usernameAttributes() {
    return this.getListAttribute('username_attributes');
  }
  public set usernameAttributes(value: string[] ) {
    this._usernameAttributes = value;
  }
  public resetUsernameAttributes() {
    this._usernameAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameAttributesInput() {
    return this._usernameAttributes
  }

  // account_recovery_setting - computed: false, optional: true, required: false
  private _accountRecoverySetting?: CognitoUserPoolAccountRecoverySetting[];
  public get accountRecoverySetting() {
    return this.interpolationForAttribute('account_recovery_setting') as any;
  }
  public set accountRecoverySetting(value: CognitoUserPoolAccountRecoverySetting[] ) {
    this._accountRecoverySetting = value;
  }
  public resetAccountRecoverySetting() {
    this._accountRecoverySetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountRecoverySettingInput() {
    return this._accountRecoverySetting
  }

  // admin_create_user_config - computed: false, optional: true, required: false
  private _adminCreateUserConfig?: CognitoUserPoolAdminCreateUserConfig[];
  public get adminCreateUserConfig() {
    return this.interpolationForAttribute('admin_create_user_config') as any;
  }
  public set adminCreateUserConfig(value: CognitoUserPoolAdminCreateUserConfig[] ) {
    this._adminCreateUserConfig = value;
  }
  public resetAdminCreateUserConfig() {
    this._adminCreateUserConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminCreateUserConfigInput() {
    return this._adminCreateUserConfig
  }

  // device_configuration - computed: false, optional: true, required: false
  private _deviceConfiguration?: CognitoUserPoolDeviceConfiguration[];
  public get deviceConfiguration() {
    return this.interpolationForAttribute('device_configuration') as any;
  }
  public set deviceConfiguration(value: CognitoUserPoolDeviceConfiguration[] ) {
    this._deviceConfiguration = value;
  }
  public resetDeviceConfiguration() {
    this._deviceConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceConfigurationInput() {
    return this._deviceConfiguration
  }

  // email_configuration - computed: false, optional: true, required: false
  private _emailConfiguration?: CognitoUserPoolEmailConfiguration[];
  public get emailConfiguration() {
    return this.interpolationForAttribute('email_configuration') as any;
  }
  public set emailConfiguration(value: CognitoUserPoolEmailConfiguration[] ) {
    this._emailConfiguration = value;
  }
  public resetEmailConfiguration() {
    this._emailConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailConfigurationInput() {
    return this._emailConfiguration
  }

  // lambda_config - computed: false, optional: true, required: false
  private _lambdaConfig?: CognitoUserPoolLambdaConfig[];
  public get lambdaConfig() {
    return this.interpolationForAttribute('lambda_config') as any;
  }
  public set lambdaConfig(value: CognitoUserPoolLambdaConfig[] ) {
    this._lambdaConfig = value;
  }
  public resetLambdaConfig() {
    this._lambdaConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaConfigInput() {
    return this._lambdaConfig
  }

  // password_policy - computed: false, optional: true, required: false
  private _passwordPolicy?: CognitoUserPoolPasswordPolicy[];
  public get passwordPolicy() {
    return this.interpolationForAttribute('password_policy') as any;
  }
  public set passwordPolicy(value: CognitoUserPoolPasswordPolicy[] ) {
    this._passwordPolicy = value;
  }
  public resetPasswordPolicy() {
    this._passwordPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordPolicyInput() {
    return this._passwordPolicy
  }

  // schema - computed: false, optional: true, required: false
  private _schema?: CognitoUserPoolSchema[];
  public get schema() {
    return this.interpolationForAttribute('schema') as any;
  }
  public set schema(value: CognitoUserPoolSchema[] ) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema
  }

  // sms_configuration - computed: false, optional: true, required: false
  private _smsConfiguration?: CognitoUserPoolSmsConfiguration[];
  public get smsConfiguration() {
    return this.interpolationForAttribute('sms_configuration') as any;
  }
  public set smsConfiguration(value: CognitoUserPoolSmsConfiguration[] ) {
    this._smsConfiguration = value;
  }
  public resetSmsConfiguration() {
    this._smsConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsConfigurationInput() {
    return this._smsConfiguration
  }

  // software_token_mfa_configuration - computed: false, optional: true, required: false
  private _softwareTokenMfaConfiguration?: CognitoUserPoolSoftwareTokenMfaConfiguration[];
  public get softwareTokenMfaConfiguration() {
    return this.interpolationForAttribute('software_token_mfa_configuration') as any;
  }
  public set softwareTokenMfaConfiguration(value: CognitoUserPoolSoftwareTokenMfaConfiguration[] ) {
    this._softwareTokenMfaConfiguration = value;
  }
  public resetSoftwareTokenMfaConfiguration() {
    this._softwareTokenMfaConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareTokenMfaConfigurationInput() {
    return this._softwareTokenMfaConfiguration
  }

  // user_pool_add_ons - computed: false, optional: true, required: false
  private _userPoolAddOns?: CognitoUserPoolUserPoolAddOns[];
  public get userPoolAddOns() {
    return this.interpolationForAttribute('user_pool_add_ons') as any;
  }
  public set userPoolAddOns(value: CognitoUserPoolUserPoolAddOns[] ) {
    this._userPoolAddOns = value;
  }
  public resetUserPoolAddOns() {
    this._userPoolAddOns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolAddOnsInput() {
    return this._userPoolAddOns
  }

  // username_configuration - computed: false, optional: true, required: false
  private _usernameConfiguration?: CognitoUserPoolUsernameConfiguration[];
  public get usernameConfiguration() {
    return this.interpolationForAttribute('username_configuration') as any;
  }
  public set usernameConfiguration(value: CognitoUserPoolUsernameConfiguration[] ) {
    this._usernameConfiguration = value;
  }
  public resetUsernameConfiguration() {
    this._usernameConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameConfigurationInput() {
    return this._usernameConfiguration
  }

  // verification_message_template - computed: false, optional: true, required: false
  private _verificationMessageTemplate?: CognitoUserPoolVerificationMessageTemplate[];
  public get verificationMessageTemplate() {
    return this.interpolationForAttribute('verification_message_template') as any;
  }
  public set verificationMessageTemplate(value: CognitoUserPoolVerificationMessageTemplate[] ) {
    this._verificationMessageTemplate = value;
  }
  public resetVerificationMessageTemplate() {
    this._verificationMessageTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationMessageTemplateInput() {
    return this._verificationMessageTemplate
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
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      username_attributes: cdktf.listMapper(cdktf.stringToTerraform)(this._usernameAttributes),
      account_recovery_setting: cdktf.listMapper(cognitoUserPoolAccountRecoverySettingToTerraform)(this._accountRecoverySetting),
      admin_create_user_config: cdktf.listMapper(cognitoUserPoolAdminCreateUserConfigToTerraform)(this._adminCreateUserConfig),
      device_configuration: cdktf.listMapper(cognitoUserPoolDeviceConfigurationToTerraform)(this._deviceConfiguration),
      email_configuration: cdktf.listMapper(cognitoUserPoolEmailConfigurationToTerraform)(this._emailConfiguration),
      lambda_config: cdktf.listMapper(cognitoUserPoolLambdaConfigToTerraform)(this._lambdaConfig),
      password_policy: cdktf.listMapper(cognitoUserPoolPasswordPolicyToTerraform)(this._passwordPolicy),
      schema: cdktf.listMapper(cognitoUserPoolSchemaToTerraform)(this._schema),
      sms_configuration: cdktf.listMapper(cognitoUserPoolSmsConfigurationToTerraform)(this._smsConfiguration),
      software_token_mfa_configuration: cdktf.listMapper(cognitoUserPoolSoftwareTokenMfaConfigurationToTerraform)(this._softwareTokenMfaConfiguration),
      user_pool_add_ons: cdktf.listMapper(cognitoUserPoolUserPoolAddOnsToTerraform)(this._userPoolAddOns),
      username_configuration: cdktf.listMapper(cognitoUserPoolUsernameConfigurationToTerraform)(this._usernameConfiguration),
      verification_message_template: cdktf.listMapper(cognitoUserPoolVerificationMessageTemplateToTerraform)(this._verificationMessageTemplate),
    };
  }
}
