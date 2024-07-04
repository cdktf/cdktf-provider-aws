/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/apigatewayv2_authorizer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Apigatewayv2AuthorizerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/apigatewayv2_authorizer#api_id Apigatewayv2Authorizer#api_id}
  */
  readonly apiId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/apigatewayv2_authorizer#authorizer_credentials_arn Apigatewayv2Authorizer#authorizer_credentials_arn}
  */
  readonly authorizerCredentialsArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/apigatewayv2_authorizer#authorizer_payload_format_version Apigatewayv2Authorizer#authorizer_payload_format_version}
  */
  readonly authorizerPayloadFormatVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/apigatewayv2_authorizer#authorizer_result_ttl_in_seconds Apigatewayv2Authorizer#authorizer_result_ttl_in_seconds}
  */
  readonly authorizerResultTtlInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/apigatewayv2_authorizer#authorizer_type Apigatewayv2Authorizer#authorizer_type}
  */
  readonly authorizerType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/apigatewayv2_authorizer#authorizer_uri Apigatewayv2Authorizer#authorizer_uri}
  */
  readonly authorizerUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/apigatewayv2_authorizer#enable_simple_responses Apigatewayv2Authorizer#enable_simple_responses}
  */
  readonly enableSimpleResponses?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/apigatewayv2_authorizer#id Apigatewayv2Authorizer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/apigatewayv2_authorizer#identity_sources Apigatewayv2Authorizer#identity_sources}
  */
  readonly identitySources?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/apigatewayv2_authorizer#name Apigatewayv2Authorizer#name}
  */
  readonly name: string;
  /**
  * jwt_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/apigatewayv2_authorizer#jwt_configuration Apigatewayv2Authorizer#jwt_configuration}
  */
  readonly jwtConfiguration?: Apigatewayv2AuthorizerJwtConfiguration;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/apigatewayv2_authorizer#timeouts Apigatewayv2Authorizer#timeouts}
  */
  readonly timeouts?: Apigatewayv2AuthorizerTimeouts;
}
export interface Apigatewayv2AuthorizerJwtConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/apigatewayv2_authorizer#audience Apigatewayv2Authorizer#audience}
  */
  readonly audience?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/apigatewayv2_authorizer#issuer Apigatewayv2Authorizer#issuer}
  */
  readonly issuer?: string;
}

export function apigatewayv2AuthorizerJwtConfigurationToTerraform(struct?: Apigatewayv2AuthorizerJwtConfigurationOutputReference | Apigatewayv2AuthorizerJwtConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.audience),
    issuer: cdktf.stringToTerraform(struct!.issuer),
  }
}


export function apigatewayv2AuthorizerJwtConfigurationToHclTerraform(struct?: Apigatewayv2AuthorizerJwtConfigurationOutputReference | Apigatewayv2AuthorizerJwtConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.audience),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Apigatewayv2AuthorizerJwtConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Apigatewayv2AuthorizerJwtConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Apigatewayv2AuthorizerJwtConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audience = undefined;
      this._issuer = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audience = value.audience;
      this._issuer = value.issuer;
    }
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string[]; 
  public get audience() {
    return cdktf.Fn.tolist(this.getListAttribute('audience'));
  }
  public set audience(value: string[]) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }
}
export interface Apigatewayv2AuthorizerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/apigatewayv2_authorizer#delete Apigatewayv2Authorizer#delete}
  */
  readonly delete?: string;
}

export function apigatewayv2AuthorizerTimeoutsToTerraform(struct?: Apigatewayv2AuthorizerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function apigatewayv2AuthorizerTimeoutsToHclTerraform(struct?: Apigatewayv2AuthorizerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Apigatewayv2AuthorizerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Apigatewayv2AuthorizerTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Apigatewayv2AuthorizerTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delete = value.delete;
    }
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/apigatewayv2_authorizer aws_apigatewayv2_authorizer}
*/
export class Apigatewayv2Authorizer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_apigatewayv2_authorizer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Apigatewayv2Authorizer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Apigatewayv2Authorizer to import
  * @param importFromId The id of the existing Apigatewayv2Authorizer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/apigatewayv2_authorizer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Apigatewayv2Authorizer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_apigatewayv2_authorizer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/apigatewayv2_authorizer aws_apigatewayv2_authorizer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Apigatewayv2AuthorizerConfig
  */
  public constructor(scope: Construct, id: string, config: Apigatewayv2AuthorizerConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_apigatewayv2_authorizer',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.57.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiId = config.apiId;
    this._authorizerCredentialsArn = config.authorizerCredentialsArn;
    this._authorizerPayloadFormatVersion = config.authorizerPayloadFormatVersion;
    this._authorizerResultTtlInSeconds = config.authorizerResultTtlInSeconds;
    this._authorizerType = config.authorizerType;
    this._authorizerUri = config.authorizerUri;
    this._enableSimpleResponses = config.enableSimpleResponses;
    this._id = config.id;
    this._identitySources = config.identitySources;
    this._name = config.name;
    this._jwtConfiguration.internalValue = config.jwtConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_id - computed: false, optional: false, required: true
  private _apiId?: string; 
  public get apiId() {
    return this.getStringAttribute('api_id');
  }
  public set apiId(value: string) {
    this._apiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiIdInput() {
    return this._apiId;
  }

  // authorizer_credentials_arn - computed: false, optional: true, required: false
  private _authorizerCredentialsArn?: string; 
  public get authorizerCredentialsArn() {
    return this.getStringAttribute('authorizer_credentials_arn');
  }
  public set authorizerCredentialsArn(value: string) {
    this._authorizerCredentialsArn = value;
  }
  public resetAuthorizerCredentialsArn() {
    this._authorizerCredentialsArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerCredentialsArnInput() {
    return this._authorizerCredentialsArn;
  }

  // authorizer_payload_format_version - computed: false, optional: true, required: false
  private _authorizerPayloadFormatVersion?: string; 
  public get authorizerPayloadFormatVersion() {
    return this.getStringAttribute('authorizer_payload_format_version');
  }
  public set authorizerPayloadFormatVersion(value: string) {
    this._authorizerPayloadFormatVersion = value;
  }
  public resetAuthorizerPayloadFormatVersion() {
    this._authorizerPayloadFormatVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerPayloadFormatVersionInput() {
    return this._authorizerPayloadFormatVersion;
  }

  // authorizer_result_ttl_in_seconds - computed: true, optional: true, required: false
  private _authorizerResultTtlInSeconds?: number; 
  public get authorizerResultTtlInSeconds() {
    return this.getNumberAttribute('authorizer_result_ttl_in_seconds');
  }
  public set authorizerResultTtlInSeconds(value: number) {
    this._authorizerResultTtlInSeconds = value;
  }
  public resetAuthorizerResultTtlInSeconds() {
    this._authorizerResultTtlInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerResultTtlInSecondsInput() {
    return this._authorizerResultTtlInSeconds;
  }

  // authorizer_type - computed: false, optional: false, required: true
  private _authorizerType?: string; 
  public get authorizerType() {
    return this.getStringAttribute('authorizer_type');
  }
  public set authorizerType(value: string) {
    this._authorizerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerTypeInput() {
    return this._authorizerType;
  }

  // authorizer_uri - computed: false, optional: true, required: false
  private _authorizerUri?: string; 
  public get authorizerUri() {
    return this.getStringAttribute('authorizer_uri');
  }
  public set authorizerUri(value: string) {
    this._authorizerUri = value;
  }
  public resetAuthorizerUri() {
    this._authorizerUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerUriInput() {
    return this._authorizerUri;
  }

  // enable_simple_responses - computed: false, optional: true, required: false
  private _enableSimpleResponses?: boolean | cdktf.IResolvable; 
  public get enableSimpleResponses() {
    return this.getBooleanAttribute('enable_simple_responses');
  }
  public set enableSimpleResponses(value: boolean | cdktf.IResolvable) {
    this._enableSimpleResponses = value;
  }
  public resetEnableSimpleResponses() {
    this._enableSimpleResponses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSimpleResponsesInput() {
    return this._enableSimpleResponses;
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

  // identity_sources - computed: false, optional: true, required: false
  private _identitySources?: string[]; 
  public get identitySources() {
    return cdktf.Fn.tolist(this.getListAttribute('identity_sources'));
  }
  public set identitySources(value: string[]) {
    this._identitySources = value;
  }
  public resetIdentitySources() {
    this._identitySources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identitySourcesInput() {
    return this._identitySources;
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

  // jwt_configuration - computed: false, optional: true, required: false
  private _jwtConfiguration = new Apigatewayv2AuthorizerJwtConfigurationOutputReference(this, "jwt_configuration");
  public get jwtConfiguration() {
    return this._jwtConfiguration;
  }
  public putJwtConfiguration(value: Apigatewayv2AuthorizerJwtConfiguration) {
    this._jwtConfiguration.internalValue = value;
  }
  public resetJwtConfiguration() {
    this._jwtConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtConfigurationInput() {
    return this._jwtConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new Apigatewayv2AuthorizerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: Apigatewayv2AuthorizerTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_id: cdktf.stringToTerraform(this._apiId),
      authorizer_credentials_arn: cdktf.stringToTerraform(this._authorizerCredentialsArn),
      authorizer_payload_format_version: cdktf.stringToTerraform(this._authorizerPayloadFormatVersion),
      authorizer_result_ttl_in_seconds: cdktf.numberToTerraform(this._authorizerResultTtlInSeconds),
      authorizer_type: cdktf.stringToTerraform(this._authorizerType),
      authorizer_uri: cdktf.stringToTerraform(this._authorizerUri),
      enable_simple_responses: cdktf.booleanToTerraform(this._enableSimpleResponses),
      id: cdktf.stringToTerraform(this._id),
      identity_sources: cdktf.listMapper(cdktf.stringToTerraform, false)(this._identitySources),
      name: cdktf.stringToTerraform(this._name),
      jwt_configuration: apigatewayv2AuthorizerJwtConfigurationToTerraform(this._jwtConfiguration.internalValue),
      timeouts: apigatewayv2AuthorizerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_id: {
        value: cdktf.stringToHclTerraform(this._apiId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorizer_credentials_arn: {
        value: cdktf.stringToHclTerraform(this._authorizerCredentialsArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorizer_payload_format_version: {
        value: cdktf.stringToHclTerraform(this._authorizerPayloadFormatVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorizer_result_ttl_in_seconds: {
        value: cdktf.numberToHclTerraform(this._authorizerResultTtlInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      authorizer_type: {
        value: cdktf.stringToHclTerraform(this._authorizerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorizer_uri: {
        value: cdktf.stringToHclTerraform(this._authorizerUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_simple_responses: {
        value: cdktf.booleanToHclTerraform(this._enableSimpleResponses),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_sources: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._identitySources),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jwt_configuration: {
        value: apigatewayv2AuthorizerJwtConfigurationToHclTerraform(this._jwtConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Apigatewayv2AuthorizerJwtConfigurationList",
      },
      timeouts: {
        value: apigatewayv2AuthorizerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Apigatewayv2AuthorizerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
