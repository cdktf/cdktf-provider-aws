// https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "alias_attributes": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "arn": {
        "type": "string",
        "computed": true
      },
      "auto_verified_attributes": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "creation_date": {
        "type": "string",
        "computed": true
      },
      "email_verification_message": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "email_verification_subject": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "endpoint": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "last_modified_date": {
        "type": "string",
        "computed": true
      },
      "mfa_configuration": {
        "type": "string",
        "optional": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "sms_authentication_message": {
        "type": "string",
        "optional": true
      },
      "sms_verification_message": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "username_attributes": {
        "type": [
          "list",
          "string"
        ],
        "optional": true
      }
    },
    "block_types": {
      "admin_create_user_config": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "allow_admin_create_user_only": {
              "type": "bool",
              "optional": true
            },
            "unused_account_validity_days": {
              "type": "number",
              "optional": true,
              "computed": true
            }
          },
          "block_types": {
            "invite_message_template": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "email_message": {
                    "type": "string",
                    "optional": true
                  },
                  "email_subject": {
                    "type": "string",
                    "optional": true
                  },
                  "sms_message": {
                    "type": "string",
                    "optional": true
                  }
                }
              },
              "max_items": 1
            }
          }
        },
        "max_items": 1
      },
      "device_configuration": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "challenge_required_on_new_device": {
              "type": "bool",
              "optional": true
            },
            "device_only_remembered_on_user_prompt": {
              "type": "bool",
              "optional": true
            }
          }
        },
        "max_items": 1
      },
      "email_configuration": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "email_sending_account": {
              "type": "string",
              "optional": true
            },
            "from_email_address": {
              "type": "string",
              "optional": true
            },
            "reply_to_email_address": {
              "type": "string",
              "optional": true
            },
            "source_arn": {
              "type": "string",
              "optional": true
            }
          }
        },
        "max_items": 1
      },
      "lambda_config": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "create_auth_challenge": {
              "type": "string",
              "optional": true
            },
            "custom_message": {
              "type": "string",
              "optional": true
            },
            "define_auth_challenge": {
              "type": "string",
              "optional": true
            },
            "post_authentication": {
              "type": "string",
              "optional": true
            },
            "post_confirmation": {
              "type": "string",
              "optional": true
            },
            "pre_authentication": {
              "type": "string",
              "optional": true
            },
            "pre_sign_up": {
              "type": "string",
              "optional": true
            },
            "pre_token_generation": {
              "type": "string",
              "optional": true
            },
            "user_migration": {
              "type": "string",
              "optional": true
            },
            "verify_auth_challenge_response": {
              "type": "string",
              "optional": true
            }
          }
        },
        "max_items": 1
      },
      "password_policy": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "minimum_length": {
              "type": "number",
              "optional": true
            },
            "require_lowercase": {
              "type": "bool",
              "optional": true
            },
            "require_numbers": {
              "type": "bool",
              "optional": true
            },
            "require_symbols": {
              "type": "bool",
              "optional": true
            },
            "require_uppercase": {
              "type": "bool",
              "optional": true
            },
            "temporary_password_validity_days": {
              "type": "number",
              "optional": true
            }
          }
        },
        "max_items": 1
      },
      "schema": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "attribute_data_type": {
              "type": "string",
              "required": true
            },
            "developer_only_attribute": {
              "type": "bool",
              "optional": true
            },
            "mutable": {
              "type": "bool",
              "optional": true
            },
            "name": {
              "type": "string",
              "required": true
            },
            "required": {
              "type": "bool",
              "optional": true
            }
          },
          "block_types": {
            "number_attribute_constraints": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "max_value": {
                    "type": "string",
                    "optional": true
                  },
                  "min_value": {
                    "type": "string",
                    "optional": true
                  }
                }
              },
              "max_items": 1
            },
            "string_attribute_constraints": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "max_length": {
                    "type": "string",
                    "optional": true
                  },
                  "min_length": {
                    "type": "string",
                    "optional": true
                  }
                }
              },
              "max_items": 1
            }
          }
        },
        "max_items": 50
      },
      "sms_configuration": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "external_id": {
              "type": "string",
              "required": true
            },
            "sns_caller_arn": {
              "type": "string",
              "required": true
            }
          }
        },
        "max_items": 1
      },
      "software_token_mfa_configuration": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "enabled": {
              "type": "bool",
              "required": true
            }
          }
        },
        "max_items": 1
      },
      "user_pool_add_ons": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "advanced_security_mode": {
              "type": "string",
              "required": true
            }
          }
        },
        "max_items": 1
      },
      "username_configuration": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "case_sensitive": {
              "type": "bool",
              "required": true
            }
          }
        },
        "max_items": 1
      },
      "verification_message_template": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "default_email_option": {
              "type": "string",
              "optional": true
            },
            "email_message": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "email_message_by_link": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "email_subject": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "email_subject_by_link": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "sms_message": {
              "type": "string",
              "optional": true,
              "computed": true
            }
          }
        },
        "max_items": 1
      }
    }
  }
}
*/
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
    return this._aliasAttributes;
  }
  public set aliasAttributes(value: string[] | undefined) {
    this._aliasAttributes = value;
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_verified_attributes - computed: false, optional: true, required: false
  private _autoVerifiedAttributes?: string[];
  public get autoVerifiedAttributes() {
    return this._autoVerifiedAttributes;
  }
  public set autoVerifiedAttributes(value: string[] | undefined) {
    this._autoVerifiedAttributes = value;
  }

  // creation_date - computed: true, optional: false, required: true
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // email_verification_message - computed: true, optional: true, required: false
  private _emailVerificationMessage?: string;
  public get emailVerificationMessage() {
    return this._emailVerificationMessage ?? this.getStringAttribute('email_verification_message');
  }
  public set emailVerificationMessage(value: string | undefined) {
    this._emailVerificationMessage = value;
  }

  // email_verification_subject - computed: true, optional: true, required: false
  private _emailVerificationSubject?: string;
  public get emailVerificationSubject() {
    return this._emailVerificationSubject ?? this.getStringAttribute('email_verification_subject');
  }
  public set emailVerificationSubject(value: string | undefined) {
    this._emailVerificationSubject = value;
  }

  // endpoint - computed: true, optional: false, required: true
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // last_modified_date - computed: true, optional: false, required: true
  public get lastModifiedDate() {
    return this.getStringAttribute('last_modified_date');
  }

  // mfa_configuration - computed: false, optional: true, required: false
  private _mfaConfiguration?: string;
  public get mfaConfiguration() {
    return this._mfaConfiguration;
  }
  public set mfaConfiguration(value: string | undefined) {
    this._mfaConfiguration = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // sms_authentication_message - computed: false, optional: true, required: false
  private _smsAuthenticationMessage?: string;
  public get smsAuthenticationMessage() {
    return this._smsAuthenticationMessage;
  }
  public set smsAuthenticationMessage(value: string | undefined) {
    this._smsAuthenticationMessage = value;
  }

  // sms_verification_message - computed: true, optional: true, required: false
  private _smsVerificationMessage?: string;
  public get smsVerificationMessage() {
    return this._smsVerificationMessage ?? this.getStringAttribute('sms_verification_message');
  }
  public set smsVerificationMessage(value: string | undefined) {
    this._smsVerificationMessage = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // username_attributes - computed: false, optional: true, required: false
  private _usernameAttributes?: string[];
  public get usernameAttributes() {
    return this._usernameAttributes;
  }
  public set usernameAttributes(value: string[] | undefined) {
    this._usernameAttributes = value;
  }

  // admin_create_user_config - computed: false, optional: true, required: false
  private _adminCreateUserConfig?: CognitoUserPoolAdminCreateUserConfig[];
  public get adminCreateUserConfig() {
    return this._adminCreateUserConfig;
  }
  public set adminCreateUserConfig(value: CognitoUserPoolAdminCreateUserConfig[] | undefined) {
    this._adminCreateUserConfig = value;
  }

  // device_configuration - computed: false, optional: true, required: false
  private _deviceConfiguration?: CognitoUserPoolDeviceConfiguration[];
  public get deviceConfiguration() {
    return this._deviceConfiguration;
  }
  public set deviceConfiguration(value: CognitoUserPoolDeviceConfiguration[] | undefined) {
    this._deviceConfiguration = value;
  }

  // email_configuration - computed: false, optional: true, required: false
  private _emailConfiguration?: CognitoUserPoolEmailConfiguration[];
  public get emailConfiguration() {
    return this._emailConfiguration;
  }
  public set emailConfiguration(value: CognitoUserPoolEmailConfiguration[] | undefined) {
    this._emailConfiguration = value;
  }

  // lambda_config - computed: false, optional: true, required: false
  private _lambdaConfig?: CognitoUserPoolLambdaConfig[];
  public get lambdaConfig() {
    return this._lambdaConfig;
  }
  public set lambdaConfig(value: CognitoUserPoolLambdaConfig[] | undefined) {
    this._lambdaConfig = value;
  }

  // password_policy - computed: false, optional: true, required: false
  private _passwordPolicy?: CognitoUserPoolPasswordPolicy[];
  public get passwordPolicy() {
    return this._passwordPolicy;
  }
  public set passwordPolicy(value: CognitoUserPoolPasswordPolicy[] | undefined) {
    this._passwordPolicy = value;
  }

  // schema - computed: false, optional: true, required: false
  private _schema?: CognitoUserPoolSchema[];
  public get schema() {
    return this._schema;
  }
  public set schema(value: CognitoUserPoolSchema[] | undefined) {
    this._schema = value;
  }

  // sms_configuration - computed: false, optional: true, required: false
  private _smsConfiguration?: CognitoUserPoolSmsConfiguration[];
  public get smsConfiguration() {
    return this._smsConfiguration;
  }
  public set smsConfiguration(value: CognitoUserPoolSmsConfiguration[] | undefined) {
    this._smsConfiguration = value;
  }

  // software_token_mfa_configuration - computed: false, optional: true, required: false
  private _softwareTokenMfaConfiguration?: CognitoUserPoolSoftwareTokenMfaConfiguration[];
  public get softwareTokenMfaConfiguration() {
    return this._softwareTokenMfaConfiguration;
  }
  public set softwareTokenMfaConfiguration(value: CognitoUserPoolSoftwareTokenMfaConfiguration[] | undefined) {
    this._softwareTokenMfaConfiguration = value;
  }

  // user_pool_add_ons - computed: false, optional: true, required: false
  private _userPoolAddOns?: CognitoUserPoolUserPoolAddOns[];
  public get userPoolAddOns() {
    return this._userPoolAddOns;
  }
  public set userPoolAddOns(value: CognitoUserPoolUserPoolAddOns[] | undefined) {
    this._userPoolAddOns = value;
  }

  // username_configuration - computed: false, optional: true, required: false
  private _usernameConfiguration?: CognitoUserPoolUsernameConfiguration[];
  public get usernameConfiguration() {
    return this._usernameConfiguration;
  }
  public set usernameConfiguration(value: CognitoUserPoolUsernameConfiguration[] | undefined) {
    this._usernameConfiguration = value;
  }

  // verification_message_template - computed: false, optional: true, required: false
  private _verificationMessageTemplate?: CognitoUserPoolVerificationMessageTemplate[];
  public get verificationMessageTemplate() {
    return this._verificationMessageTemplate;
  }
  public set verificationMessageTemplate(value: CognitoUserPoolVerificationMessageTemplate[] | undefined) {
    this._verificationMessageTemplate = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
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
