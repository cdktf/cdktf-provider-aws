// https://www.terraform.io/docs/providers/aws/r/iot_authorizer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotAuthorizerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_authorizer#authorizer_function_arn IotAuthorizer#authorizer_function_arn}
  */
  readonly authorizerFunctionArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_authorizer#enable_caching_for_http IotAuthorizer#enable_caching_for_http}
  */
  readonly enableCachingForHttp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_authorizer#id IotAuthorizer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_authorizer#name IotAuthorizer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_authorizer#signing_disabled IotAuthorizer#signing_disabled}
  */
  readonly signingDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_authorizer#status IotAuthorizer#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_authorizer#token_key_name IotAuthorizer#token_key_name}
  */
  readonly tokenKeyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_authorizer#token_signing_public_keys IotAuthorizer#token_signing_public_keys}
  */
  readonly tokenSigningPublicKeys?: { [key: string]: string };
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iot_authorizer aws_iot_authorizer}
*/
export class IotAuthorizer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_iot_authorizer";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iot_authorizer aws_iot_authorizer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotAuthorizerConfig
  */
  public constructor(scope: Construct, id: string, config: IotAuthorizerConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iot_authorizer',
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
    this._authorizerFunctionArn = config.authorizerFunctionArn;
    this._enableCachingForHttp = config.enableCachingForHttp;
    this._id = config.id;
    this._name = config.name;
    this._signingDisabled = config.signingDisabled;
    this._status = config.status;
    this._tokenKeyName = config.tokenKeyName;
    this._tokenSigningPublicKeys = config.tokenSigningPublicKeys;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // authorizer_function_arn - computed: false, optional: false, required: true
  private _authorizerFunctionArn?: string; 
  public get authorizerFunctionArn() {
    return this.getStringAttribute('authorizer_function_arn');
  }
  public set authorizerFunctionArn(value: string) {
    this._authorizerFunctionArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerFunctionArnInput() {
    return this._authorizerFunctionArn;
  }

  // enable_caching_for_http - computed: false, optional: true, required: false
  private _enableCachingForHttp?: boolean | cdktf.IResolvable; 
  public get enableCachingForHttp() {
    return this.getBooleanAttribute('enable_caching_for_http');
  }
  public set enableCachingForHttp(value: boolean | cdktf.IResolvable) {
    this._enableCachingForHttp = value;
  }
  public resetEnableCachingForHttp() {
    this._enableCachingForHttp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCachingForHttpInput() {
    return this._enableCachingForHttp;
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

  // signing_disabled - computed: false, optional: true, required: false
  private _signingDisabled?: boolean | cdktf.IResolvable; 
  public get signingDisabled() {
    return this.getBooleanAttribute('signing_disabled');
  }
  public set signingDisabled(value: boolean | cdktf.IResolvable) {
    this._signingDisabled = value;
  }
  public resetSigningDisabled() {
    this._signingDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingDisabledInput() {
    return this._signingDisabled;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // token_key_name - computed: false, optional: true, required: false
  private _tokenKeyName?: string; 
  public get tokenKeyName() {
    return this.getStringAttribute('token_key_name');
  }
  public set tokenKeyName(value: string) {
    this._tokenKeyName = value;
  }
  public resetTokenKeyName() {
    this._tokenKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenKeyNameInput() {
    return this._tokenKeyName;
  }

  // token_signing_public_keys - computed: false, optional: true, required: false
  private _tokenSigningPublicKeys?: { [key: string]: string }; 
  public get tokenSigningPublicKeys() {
    return this.getStringMapAttribute('token_signing_public_keys');
  }
  public set tokenSigningPublicKeys(value: { [key: string]: string }) {
    this._tokenSigningPublicKeys = value;
  }
  public resetTokenSigningPublicKeys() {
    this._tokenSigningPublicKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenSigningPublicKeysInput() {
    return this._tokenSigningPublicKeys;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authorizer_function_arn: cdktf.stringToTerraform(this._authorizerFunctionArn),
      enable_caching_for_http: cdktf.booleanToTerraform(this._enableCachingForHttp),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      signing_disabled: cdktf.booleanToTerraform(this._signingDisabled),
      status: cdktf.stringToTerraform(this._status),
      token_key_name: cdktf.stringToTerraform(this._tokenKeyName),
      token_signing_public_keys: cdktf.hashMapper(cdktf.stringToTerraform)(this._tokenSigningPublicKeys),
    };
  }
}
