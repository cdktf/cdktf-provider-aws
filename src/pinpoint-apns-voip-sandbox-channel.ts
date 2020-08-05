// https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "application_id": {
        "type": "string",
        "required": true
      },
      "bundle_id": {
        "type": "string",
        "optional": true,
        "sensitive": true
      },
      "certificate": {
        "type": "string",
        "optional": true,
        "sensitive": true
      },
      "default_authentication_method": {
        "type": "string",
        "optional": true
      },
      "enabled": {
        "type": "bool",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "private_key": {
        "type": "string",
        "optional": true,
        "sensitive": true
      },
      "team_id": {
        "type": "string",
        "optional": true,
        "sensitive": true
      },
      "token_key": {
        "type": "string",
        "optional": true,
        "sensitive": true
      },
      "token_key_id": {
        "type": "string",
        "optional": true,
        "sensitive": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface PinpointApnsVoipSandboxChannelConfig extends TerraformMetaArguments {
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

export class PinpointApnsVoipSandboxChannel extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: PinpointApnsVoipSandboxChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_pinpoint_apns_voip_sandbox_channel',
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
    return this._applicationId;
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }

  // bundle_id - computed: false, optional: true, required: false
  private _bundleId?: string;
  public get bundleId() {
    return this._bundleId;
  }
  public set bundleId(value: string | undefined) {
    this._bundleId = value;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string;
  public get certificate() {
    return this._certificate;
  }
  public set certificate(value: string | undefined) {
    this._certificate = value;
  }

  // default_authentication_method - computed: false, optional: true, required: false
  private _defaultAuthenticationMethod?: string;
  public get defaultAuthenticationMethod() {
    return this._defaultAuthenticationMethod;
  }
  public set defaultAuthenticationMethod(value: string | undefined) {
    this._defaultAuthenticationMethod = value;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean;
  public get enabled() {
    return this._enabled;
  }
  public set enabled(value: boolean | undefined) {
    this._enabled = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string;
  public get privateKey() {
    return this._privateKey;
  }
  public set privateKey(value: string | undefined) {
    this._privateKey = value;
  }

  // team_id - computed: false, optional: true, required: false
  private _teamId?: string;
  public get teamId() {
    return this._teamId;
  }
  public set teamId(value: string | undefined) {
    this._teamId = value;
  }

  // token_key - computed: false, optional: true, required: false
  private _tokenKey?: string;
  public get tokenKey() {
    return this._tokenKey;
  }
  public set tokenKey(value: string | undefined) {
    this._tokenKey = value;
  }

  // token_key_id - computed: false, optional: true, required: false
  private _tokenKeyId?: string;
  public get tokenKeyId() {
    return this._tokenKeyId;
  }
  public set tokenKeyId(value: string | undefined) {
    this._tokenKeyId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
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
