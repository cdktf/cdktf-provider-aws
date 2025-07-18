/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_apns_sandbox_channel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PinpointApnsSandboxChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_apns_sandbox_channel#application_id PinpointApnsSandboxChannel#application_id}
  */
  readonly applicationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_apns_sandbox_channel#bundle_id PinpointApnsSandboxChannel#bundle_id}
  */
  readonly bundleId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_apns_sandbox_channel#certificate PinpointApnsSandboxChannel#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_apns_sandbox_channel#default_authentication_method PinpointApnsSandboxChannel#default_authentication_method}
  */
  readonly defaultAuthenticationMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_apns_sandbox_channel#enabled PinpointApnsSandboxChannel#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_apns_sandbox_channel#id PinpointApnsSandboxChannel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_apns_sandbox_channel#private_key PinpointApnsSandboxChannel#private_key}
  */
  readonly privateKey?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_apns_sandbox_channel#region PinpointApnsSandboxChannel#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_apns_sandbox_channel#team_id PinpointApnsSandboxChannel#team_id}
  */
  readonly teamId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_apns_sandbox_channel#token_key PinpointApnsSandboxChannel#token_key}
  */
  readonly tokenKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_apns_sandbox_channel#token_key_id PinpointApnsSandboxChannel#token_key_id}
  */
  readonly tokenKeyId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_apns_sandbox_channel aws_pinpoint_apns_sandbox_channel}
*/
export class PinpointApnsSandboxChannel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_pinpoint_apns_sandbox_channel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PinpointApnsSandboxChannel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PinpointApnsSandboxChannel to import
  * @param importFromId The id of the existing PinpointApnsSandboxChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_apns_sandbox_channel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PinpointApnsSandboxChannel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_pinpoint_apns_sandbox_channel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_apns_sandbox_channel aws_pinpoint_apns_sandbox_channel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PinpointApnsSandboxChannelConfig
  */
  public constructor(scope: Construct, id: string, config: PinpointApnsSandboxChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_pinpoint_apns_sandbox_channel',
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
    this._applicationId = config.applicationId;
    this._bundleId = config.bundleId;
    this._certificate = config.certificate;
    this._defaultAuthenticationMethod = config.defaultAuthenticationMethod;
    this._enabled = config.enabled;
    this._id = config.id;
    this._privateKey = config.privateKey;
    this._region = config.region;
    this._teamId = config.teamId;
    this._tokenKey = config.tokenKey;
    this._tokenKeyId = config.tokenKeyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // bundle_id - computed: false, optional: true, required: false
  private _bundleId?: string; 
  public get bundleId() {
    return this.getStringAttribute('bundle_id');
  }
  public set bundleId(value: string) {
    this._bundleId = value;
  }
  public resetBundleId() {
    this._bundleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleIdInput() {
    return this._bundleId;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // default_authentication_method - computed: false, optional: true, required: false
  private _defaultAuthenticationMethod?: string; 
  public get defaultAuthenticationMethod() {
    return this.getStringAttribute('default_authentication_method');
  }
  public set defaultAuthenticationMethod(value: string) {
    this._defaultAuthenticationMethod = value;
  }
  public resetDefaultAuthenticationMethod() {
    this._defaultAuthenticationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAuthenticationMethodInput() {
    return this._defaultAuthenticationMethod;
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

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
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

  // team_id - computed: false, optional: true, required: false
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  public resetTeamId() {
    this._teamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // token_key - computed: false, optional: true, required: false
  private _tokenKey?: string; 
  public get tokenKey() {
    return this.getStringAttribute('token_key');
  }
  public set tokenKey(value: string) {
    this._tokenKey = value;
  }
  public resetTokenKey() {
    this._tokenKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenKeyInput() {
    return this._tokenKey;
  }

  // token_key_id - computed: false, optional: true, required: false
  private _tokenKeyId?: string; 
  public get tokenKeyId() {
    return this.getStringAttribute('token_key_id');
  }
  public set tokenKeyId(value: string) {
    this._tokenKeyId = value;
  }
  public resetTokenKeyId() {
    this._tokenKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenKeyIdInput() {
    return this._tokenKeyId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      bundle_id: cdktf.stringToTerraform(this._bundleId),
      certificate: cdktf.stringToTerraform(this._certificate),
      default_authentication_method: cdktf.stringToTerraform(this._defaultAuthenticationMethod),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      private_key: cdktf.stringToTerraform(this._privateKey),
      region: cdktf.stringToTerraform(this._region),
      team_id: cdktf.stringToTerraform(this._teamId),
      token_key: cdktf.stringToTerraform(this._tokenKey),
      token_key_id: cdktf.stringToTerraform(this._tokenKeyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bundle_id: {
        value: cdktf.stringToHclTerraform(this._bundleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate: {
        value: cdktf.stringToHclTerraform(this._certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_authentication_method: {
        value: cdktf.stringToHclTerraform(this._defaultAuthenticationMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
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
      team_id: {
        value: cdktf.stringToHclTerraform(this._teamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_key: {
        value: cdktf.stringToHclTerraform(this._tokenKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_key_id: {
        value: cdktf.stringToHclTerraform(this._tokenKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
