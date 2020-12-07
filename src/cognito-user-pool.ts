// https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CognitoUserPoolConfig extends cdktf.TerraformMetaArguments {
  readonly aliasAttributes?: string[];
  readonly autoVerifiedAttributes?: string[];
  readonly emailVerificationMessage?: string;
  readonly emailVerificationSubject?: string;
  readonly mfaConfiguration?: string;
  readonly name: string;
  readonly smsAuthenticationMessage?: string;
  readonly smsVerificationMessage?: string;
  readonly tags?: { [key: string]: string };
  readonly usernameAttributes?: string[];
  /** admin_create_user_config block */
  readonly adminCreateUserConfig?: CognitoUserPoolAdminCreateUserConfig[];
  /** device_configuration block */
  readonly deviceConfiguration?: CognitoUserPoolDeviceConfiguration[];
  /** email_configuration block */
  readonly emailConfiguration?: CognitoUserPoolEmailConfiguration[];
  /** lambda_config block */
  readonly lambdaConfig?: CognitoUserPoolLambdaConfig[];
  /** password_policy block */
  readonly passwordPolicy?: CognitoUserPoolPasswordPolicy[];
  /** schema block */
  readonly schema?: CognitoUserPoolSchema[];
  /** sms_configuration block */
  readonly smsConfiguration?: CognitoUserPoolSmsConfiguration[];
  /** software_token_mfa_configuration block */
  readonly softwareTokenMfaConfiguration?: CognitoUserPoolSoftwareTokenMfaConfiguration[];
  /** user_pool_add_ons block */
  readonly userPoolAddOns?: CognitoUserPoolUserPoolAddOns[];
  /** username_configuration block */
  readonly usernameConfiguration?: CognitoUserPoolUsernameConfiguration[];
  /** verification_message_template block */
  readonly verificationMessageTemplate?: CognitoUserPoolVerificationMessageTemplate[];
}
export interface CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate {
  readonly emailMessage?: string;
  readonly emailSubject?: string;
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
  readonly allowAdminCreateUserOnly?: boolean;
  readonly unusedAccountValidityDays?: number;
  /** invite_message_template block */
  readonly inviteMessageTemplate?: CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate[];
}

function cognitoUserPoolAdminCreateUserConfigToTerraform(struct?: CognitoUserPoolAdminCreateUserConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allow_admin_create_user_only: cdktf.booleanToTerraform(struct!.allowAdminCreateUserOnly),
    unused_account_validity_days: cdktf.numberToTerraform(struct!.unusedAccountValidityDays),
    invite_message_template: cdktf.listMapper(cognitoUserPoolAdminCreateUserConfigInviteMessageTemplateToTerraform)(struct!.inviteMessageTemplate),
  }
}

export interface CognitoUserPoolDeviceConfiguration {
  readonly challengeRequiredOnNewDevice?: boolean;
  readonly deviceOnlyRememberedOnUserPrompt?: boolean;
}

function cognitoUserPoolDeviceConfigurationToTerraform(struct?: CognitoUserPoolDeviceConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    challenge_required_on_new_device: cdktf.booleanToTerraform(struct!.challengeRequiredOnNewDevice),
    device_only_remembered_on_user_prompt: cdktf.booleanToTerraform(struct!.deviceOnlyRememberedOnUserPrompt),
  }
}

export interface CognitoUserPoolEmailConfiguration {
  readonly emailSendingAccount?: string;
  readonly fromEmailAddress?: string;
  readonly replyToEmailAddress?: string;
  readonly sourceArn?: string;
}

function cognitoUserPoolEmailConfigurationToTerraform(struct?: CognitoUserPoolEmailConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    email_sending_account: cdktf.stringToTerraform(struct!.emailSendingAccount),
    from_email_address: cdktf.stringToTerraform(struct!.fromEmailAddress),
    reply_to_email_address: cdktf.stringToTerraform(struct!.replyToEmailAddress),
    source_arn: cdktf.stringToTerraform(struct!.sourceArn),
  }
}

export interface CognitoUserPoolLambdaConfig {
  readonly createAuthChallenge?: string;
  readonly customMessage?: string;
  readonly defineAuthChallenge?: string;
  readonly postAuthentication?: string;
  readonly postConfirmation?: string;
  readonly preAuthentication?: string;
  readonly preSignUp?: string;
  readonly preTokenGeneration?: string;
  readonly userMigration?: string;
  readonly verifyAuthChallengeResponse?: string;
}

function cognitoUserPoolLambdaConfigToTerraform(struct?: CognitoUserPoolLambdaConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create_auth_challenge: cdktf.stringToTerraform(struct!.createAuthChallenge),
    custom_message: cdktf.stringToTerraform(struct!.customMessage),
    define_auth_challenge: cdktf.stringToTerraform(struct!.defineAuthChallenge),
    post_authentication: cdktf.stringToTerraform(struct!.postAuthentication),
    post_confirmation: cdktf.stringToTerraform(struct!.postConfirmation),
    pre_authentication: cdktf.stringToTerraform(struct!.preAuthentication),
    pre_sign_up: cdktf.stringToTerraform(struct!.preSignUp),
    pre_token_generation: cdktf.stringToTerraform(struct!.preTokenGeneration),
    user_migration: cdktf.stringToTerraform(struct!.userMigration),
    verify_auth_challenge_response: cdktf.stringToTerraform(struct!.verifyAuthChallengeResponse),
  }
}

export interface CognitoUserPoolPasswordPolicy {
  readonly minimumLength?: number;
  readonly requireLowercase?: boolean;
  readonly requireNumbers?: boolean;
  readonly requireSymbols?: boolean;
  readonly requireUppercase?: boolean;
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
  readonly maxValue?: string;
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
  readonly maxLength?: string;
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
  readonly attributeDataType: string;
  readonly developerOnlyAttribute?: boolean;
  readonly mutable?: boolean;
  readonly name: string;
  readonly required?: boolean;
  /** number_attribute_constraints block */
  readonly numberAttributeConstraints?: CognitoUserPoolSchemaNumberAttributeConstraints[];
  /** string_attribute_constraints block */
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
  readonly externalId: string;
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
  readonly enabled: boolean;
}

function cognitoUserPoolSoftwareTokenMfaConfigurationToTerraform(struct?: CognitoUserPoolSoftwareTokenMfaConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface CognitoUserPoolUserPoolAddOns {
  readonly advancedSecurityMode: string;
}

function cognitoUserPoolUserPoolAddOnsToTerraform(struct?: CognitoUserPoolUserPoolAddOns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    advanced_security_mode: cdktf.stringToTerraform(struct!.advancedSecurityMode),
  }
}

export interface CognitoUserPoolUsernameConfiguration {
  readonly caseSensitive: boolean;
}

function cognitoUserPoolUsernameConfigurationToTerraform(struct?: CognitoUserPoolUsernameConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
  }
}

export interface CognitoUserPoolVerificationMessageTemplate {
  readonly defaultEmailOption?: string;
  readonly emailMessage?: string;
  readonly emailMessageByLink?: string;
  readonly emailSubject?: string;
  readonly emailSubjectByLink?: string;
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


// Resource

export class CognitoUserPool extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._usernameAttributes = config.usernameAttributes;
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
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
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
      username_attributes: cdktf.listMapper(cdktf.stringToTerraform)(this._usernameAttributes),
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
