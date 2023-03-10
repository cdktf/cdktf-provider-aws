// https://www.terraform.io/docs/providers/aws/r/cognito_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CognitoUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#attributes CognitoUser#attributes}
  */
  readonly attributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#client_metadata CognitoUser#client_metadata}
  */
  readonly clientMetadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#desired_delivery_mediums CognitoUser#desired_delivery_mediums}
  */
  readonly desiredDeliveryMediums?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#enabled CognitoUser#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#force_alias_creation CognitoUser#force_alias_creation}
  */
  readonly forceAliasCreation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#id CognitoUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#message_action CognitoUser#message_action}
  */
  readonly messageAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#password CognitoUser#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#temporary_password CognitoUser#temporary_password}
  */
  readonly temporaryPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#user_pool_id CognitoUser#user_pool_id}
  */
  readonly userPoolId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#username CognitoUser#username}
  */
  readonly username: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#validation_data CognitoUser#validation_data}
  */
  readonly validationData?: { [key: string]: string };
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_user aws_cognito_user}
*/
export class CognitoUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cognito_user";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cognito_user aws_cognito_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CognitoUserConfig
  */
  public constructor(scope: Construct, id: string, config: CognitoUserConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cognito_user',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.58.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attributes = config.attributes;
    this._clientMetadata = config.clientMetadata;
    this._desiredDeliveryMediums = config.desiredDeliveryMediums;
    this._enabled = config.enabled;
    this._forceAliasCreation = config.forceAliasCreation;
    this._id = config.id;
    this._messageAction = config.messageAction;
    this._password = config.password;
    this._temporaryPassword = config.temporaryPassword;
    this._userPoolId = config.userPoolId;
    this._username = config.username;
    this._validationData = config.validationData;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attributes - computed: false, optional: true, required: false
  private _attributes?: { [key: string]: string }; 
  public get attributes() {
    return this.getStringMapAttribute('attributes');
  }
  public set attributes(value: { [key: string]: string }) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // client_metadata - computed: false, optional: true, required: false
  private _clientMetadata?: { [key: string]: string }; 
  public get clientMetadata() {
    return this.getStringMapAttribute('client_metadata');
  }
  public set clientMetadata(value: { [key: string]: string }) {
    this._clientMetadata = value;
  }
  public resetClientMetadata() {
    this._clientMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientMetadataInput() {
    return this._clientMetadata;
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // desired_delivery_mediums - computed: false, optional: true, required: false
  private _desiredDeliveryMediums?: string[]; 
  public get desiredDeliveryMediums() {
    return cdktf.Fn.tolist(this.getListAttribute('desired_delivery_mediums'));
  }
  public set desiredDeliveryMediums(value: string[]) {
    this._desiredDeliveryMediums = value;
  }
  public resetDesiredDeliveryMediums() {
    this._desiredDeliveryMediums = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredDeliveryMediumsInput() {
    return this._desiredDeliveryMediums;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // force_alias_creation - computed: false, optional: true, required: false
  private _forceAliasCreation?: boolean | cdktf.IResolvable; 
  public get forceAliasCreation() {
    return this.getBooleanAttribute('force_alias_creation');
  }
  public set forceAliasCreation(value: boolean | cdktf.IResolvable) {
    this._forceAliasCreation = value;
  }
  public resetForceAliasCreation() {
    this._forceAliasCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceAliasCreationInput() {
    return this._forceAliasCreation;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // last_modified_date - computed: true, optional: false, required: false
  public get lastModifiedDate() {
    return this.getStringAttribute('last_modified_date');
  }

  // message_action - computed: false, optional: true, required: false
  private _messageAction?: string; 
  public get messageAction() {
    return this.getStringAttribute('message_action');
  }
  public set messageAction(value: string) {
    this._messageAction = value;
  }
  public resetMessageAction() {
    this._messageAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageActionInput() {
    return this._messageAction;
  }

  // mfa_setting_list - computed: true, optional: false, required: false
  public get mfaSettingList() {
    return cdktf.Fn.tolist(this.getListAttribute('mfa_setting_list'));
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // preferred_mfa_setting - computed: true, optional: false, required: false
  public get preferredMfaSetting() {
    return this.getStringAttribute('preferred_mfa_setting');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // sub - computed: true, optional: false, required: false
  public get sub() {
    return this.getStringAttribute('sub');
  }

  // temporary_password - computed: false, optional: true, required: false
  private _temporaryPassword?: string; 
  public get temporaryPassword() {
    return this.getStringAttribute('temporary_password');
  }
  public set temporaryPassword(value: string) {
    this._temporaryPassword = value;
  }
  public resetTemporaryPassword() {
    this._temporaryPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temporaryPasswordInput() {
    return this._temporaryPassword;
  }

  // user_pool_id - computed: false, optional: false, required: true
  private _userPoolId?: string; 
  public get userPoolId() {
    return this.getStringAttribute('user_pool_id');
  }
  public set userPoolId(value: string) {
    this._userPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolIdInput() {
    return this._userPoolId;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // validation_data - computed: false, optional: true, required: false
  private _validationData?: { [key: string]: string }; 
  public get validationData() {
    return this.getStringMapAttribute('validation_data');
  }
  public set validationData(value: { [key: string]: string }) {
    this._validationData = value;
  }
  public resetValidationData() {
    this._validationData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationDataInput() {
    return this._validationData;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._attributes),
      client_metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._clientMetadata),
      desired_delivery_mediums: cdktf.listMapper(cdktf.stringToTerraform, false)(this._desiredDeliveryMediums),
      enabled: cdktf.booleanToTerraform(this._enabled),
      force_alias_creation: cdktf.booleanToTerraform(this._forceAliasCreation),
      id: cdktf.stringToTerraform(this._id),
      message_action: cdktf.stringToTerraform(this._messageAction),
      password: cdktf.stringToTerraform(this._password),
      temporary_password: cdktf.stringToTerraform(this._temporaryPassword),
      user_pool_id: cdktf.stringToTerraform(this._userPoolId),
      username: cdktf.stringToTerraform(this._username),
      validation_data: cdktf.hashMapper(cdktf.stringToTerraform)(this._validationData),
    };
  }
}
