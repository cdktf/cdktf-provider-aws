// https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CognitoUserPoolConfig extends TerraformMetaArguments {
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
export interface CognitoUserPoolAdminCreateUserConfig {
  readonly allowAdminCreateUserOnly?: boolean;
  readonly unusedAccountValidityDays?: number;
  /** invite_message_template block */
  readonly inviteMessageTemplate?: CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate[];
}
export interface CognitoUserPoolDeviceConfiguration {
  readonly challengeRequiredOnNewDevice?: boolean;
  readonly deviceOnlyRememberedOnUserPrompt?: boolean;
}
export interface CognitoUserPoolEmailConfiguration {
  readonly emailSendingAccount?: string;
  readonly fromEmailAddress?: string;
  readonly replyToEmailAddress?: string;
  readonly sourceArn?: string;
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
export interface CognitoUserPoolPasswordPolicy {
  readonly minimumLength?: number;
  readonly requireLowercase?: boolean;
  readonly requireNumbers?: boolean;
  readonly requireSymbols?: boolean;
  readonly requireUppercase?: boolean;
  readonly temporaryPasswordValidityDays?: number;
}
export interface CognitoUserPoolSchemaNumberAttributeConstraints {
  readonly maxValue?: string;
  readonly minValue?: string;
}
export interface CognitoUserPoolSchemaStringAttributeConstraints {
  readonly maxLength?: string;
  readonly minLength?: string;
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
export interface CognitoUserPoolSmsConfiguration {
  readonly externalId: string;
  readonly snsCallerArn: string;
}
export interface CognitoUserPoolSoftwareTokenMfaConfiguration {
  readonly enabled: boolean;
}
export interface CognitoUserPoolUserPoolAddOns {
  readonly advancedSecurityMode: string;
}
export interface CognitoUserPoolUsernameConfiguration {
  readonly caseSensitive: boolean;
}
export interface CognitoUserPoolVerificationMessageTemplate {
  readonly defaultEmailOption?: string;
  readonly emailMessage?: string;
  readonly emailMessageByLink?: string;
  readonly emailSubject?: string;
  readonly emailSubjectByLink?: string;
  readonly smsMessage?: string;
}

// Resource

export class CognitoUserPool extends TerraformResource {

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
      alias_attributes: this._aliasAttributes,
      auto_verified_attributes: this._autoVerifiedAttributes,
      email_verification_message: this._emailVerificationMessage,
      email_verification_subject: this._emailVerificationSubject,
      mfa_configuration: this._mfaConfiguration,
      name: this._name,
      sms_authentication_message: this._smsAuthenticationMessage,
      sms_verification_message: this._smsVerificationMessage,
      tags: this._tags,
      username_attributes: this._usernameAttributes,
      admin_create_user_config: this._adminCreateUserConfig,
      device_configuration: this._deviceConfiguration,
      email_configuration: this._emailConfiguration,
      lambda_config: this._lambdaConfig,
      password_policy: this._passwordPolicy,
      schema: this._schema,
      sms_configuration: this._smsConfiguration,
      software_token_mfa_configuration: this._softwareTokenMfaConfiguration,
      user_pool_add_ons: this._userPoolAddOns,
      username_configuration: this._usernameConfiguration,
      verification_message_template: this._verificationMessageTemplate,
    };
  }
}
