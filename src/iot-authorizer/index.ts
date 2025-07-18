/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotAuthorizerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#authorizer_function_arn IotAuthorizer#authorizer_function_arn}
  */
  readonly authorizerFunctionArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#enable_caching_for_http IotAuthorizer#enable_caching_for_http}
  */
  readonly enableCachingForHttp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#id IotAuthorizer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#name IotAuthorizer#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#region IotAuthorizer#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#signing_disabled IotAuthorizer#signing_disabled}
  */
  readonly signingDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#status IotAuthorizer#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#tags IotAuthorizer#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#tags_all IotAuthorizer#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#token_key_name IotAuthorizer#token_key_name}
  */
  readonly tokenKeyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#token_signing_public_keys IotAuthorizer#token_signing_public_keys}
  */
  readonly tokenSigningPublicKeys?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer aws_iot_authorizer}
*/
export class IotAuthorizer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_iot_authorizer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IotAuthorizer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IotAuthorizer to import
  * @param importFromId The id of the existing IotAuthorizer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IotAuthorizer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_iot_authorizer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer aws_iot_authorizer} Resource
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
        providerVersion: '6.4.0',
        providerVersionConstraint: '~> 6.0'
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
    this._region = config.region;
    this._signingDisabled = config.signingDisabled;
    this._status = config.status;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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
      region: cdktf.stringToTerraform(this._region),
      signing_disabled: cdktf.booleanToTerraform(this._signingDisabled),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      token_key_name: cdktf.stringToTerraform(this._tokenKeyName),
      token_signing_public_keys: cdktf.hashMapper(cdktf.stringToTerraform)(this._tokenSigningPublicKeys),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authorizer_function_arn: {
        value: cdktf.stringToHclTerraform(this._authorizerFunctionArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_caching_for_http: {
        value: cdktf.booleanToHclTerraform(this._enableCachingForHttp),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signing_disabled: {
        value: cdktf.booleanToHclTerraform(this._signingDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      token_key_name: {
        value: cdktf.stringToHclTerraform(this._tokenKeyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_signing_public_keys: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tokenSigningPublicKeys),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
