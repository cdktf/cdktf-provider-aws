// https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_channel.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface PinpointApnsChannelConfig extends TerraformMetaArguments {
  readonly applicationId: string;
  readonly bundleId?: string;
  readonly certificate?: string;
  readonly defaultAuthenticationMethod?: string;
  readonly enabled?: boolean;
  readonly privateKey?: string;
  readonly teamId?: string;
  readonly tokenKey?: string;
  readonly tokenKeyId?: string;
}

// Resource

export class PinpointApnsChannel extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: PinpointApnsChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_pinpoint_apns_channel',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._applicationId = config.applicationId;
    this._bundleId = config.bundleId;
    this._certificate = config.certificate;
    this._defaultAuthenticationMethod = config.defaultAuthenticationMethod;
    this._enabled = config.enabled;
    this._privateKey = config.privateKey;
    this._teamId = config.teamId;
    this._tokenKey = config.tokenKey;
    this._tokenKeyId = config.tokenKeyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: false, required: true
  private _applicationId: string;
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId
  }

  // bundle_id - computed: false, optional: true, required: false
  private _bundleId?: string;
  public get bundleId() {
    return this.getStringAttribute('bundle_id');
  }
  public set bundleId(value: string ) {
    this._bundleId = value;
  }
  public resetBundleId() {
    this._bundleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleIdInput() {
    return this._bundleId
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string;
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string ) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate
  }

  // default_authentication_method - computed: false, optional: true, required: false
  private _defaultAuthenticationMethod?: string;
  public get defaultAuthenticationMethod() {
    return this.getStringAttribute('default_authentication_method');
  }
  public set defaultAuthenticationMethod(value: string ) {
    this._defaultAuthenticationMethod = value;
  }
  public resetDefaultAuthenticationMethod() {
    this._defaultAuthenticationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAuthenticationMethodInput() {
    return this._defaultAuthenticationMethod
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean ) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string;
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string ) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey
  }

  // team_id - computed: false, optional: true, required: false
  private _teamId?: string;
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string ) {
    this._teamId = value;
  }
  public resetTeamId() {
    this._teamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId
  }

  // token_key - computed: false, optional: true, required: false
  private _tokenKey?: string;
  public get tokenKey() {
    return this.getStringAttribute('token_key');
  }
  public set tokenKey(value: string ) {
    this._tokenKey = value;
  }
  public resetTokenKey() {
    this._tokenKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenKeyInput() {
    return this._tokenKey
  }

  // token_key_id - computed: false, optional: true, required: false
  private _tokenKeyId?: string;
  public get tokenKeyId() {
    return this.getStringAttribute('token_key_id');
  }
  public set tokenKeyId(value: string ) {
    this._tokenKeyId = value;
  }
  public resetTokenKeyId() {
    this._tokenKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenKeyIdInput() {
    return this._tokenKeyId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: this._applicationId,
      bundle_id: this._bundleId,
      certificate: this._certificate,
      default_authentication_method: this._defaultAuthenticationMethod,
      enabled: this._enabled,
      private_key: this._privateKey,
      team_id: this._teamId,
      token_key: this._tokenKey,
      token_key_id: this._tokenKeyId,
    };
  }
}
