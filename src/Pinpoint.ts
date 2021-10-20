// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Pinpoint
*/
export namespace Pinpoint {
  export interface PinpointAdmChannelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_adm_channel.html#application_id PinpointAdmChannel#application_id}
    */
    readonly applicationId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_adm_channel.html#client_id PinpointAdmChannel#client_id}
    */
    readonly clientId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_adm_channel.html#client_secret PinpointAdmChannel#client_secret}
    */
    readonly clientSecret: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_adm_channel.html#enabled PinpointAdmChannel#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_adm_channel.html aws_pinpoint_adm_channel}
  */
  export class PinpointAdmChannel extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_pinpoint_adm_channel";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_adm_channel.html aws_pinpoint_adm_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PinpointAdmChannelConfig
    */
    public constructor(scope: Construct, id: string, config: PinpointAdmChannelConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_pinpoint_adm_channel',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._applicationId = config.applicationId;
      this._clientId = config.clientId;
      this._clientSecret = config.clientSecret;
      this._enabled = config.enabled;
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
      return this._applicationId
    }

    // client_id - computed: false, optional: false, required: true
    private _clientId?: string; 
    public get clientId() {
      return this.getStringAttribute('client_id');
    }
    public set clientId(value: string) {
      this._clientId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clientIdInput() {
      return this._clientId
    }

    // client_secret - computed: false, optional: false, required: true
    private _clientSecret?: string; 
    public get clientSecret() {
      return this.getStringAttribute('client_secret');
    }
    public set clientSecret(value: string) {
      this._clientSecret = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clientSecretInput() {
      return this._clientSecret
    }

    // enabled - computed: false, optional: true, required: false
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        application_id: cdktf.stringToTerraform(this._applicationId),
        client_id: cdktf.stringToTerraform(this._clientId),
        client_secret: cdktf.stringToTerraform(this._clientSecret),
        enabled: cdktf.booleanToTerraform(this._enabled),
      };
    }
  }
  export interface PinpointApnsChannelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_channel.html#application_id PinpointApnsChannel#application_id}
    */
    readonly applicationId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_channel.html#bundle_id PinpointApnsChannel#bundle_id}
    */
    readonly bundleId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_channel.html#certificate PinpointApnsChannel#certificate}
    */
    readonly certificate?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_channel.html#default_authentication_method PinpointApnsChannel#default_authentication_method}
    */
    readonly defaultAuthenticationMethod?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_channel.html#enabled PinpointApnsChannel#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_channel.html#private_key PinpointApnsChannel#private_key}
    */
    readonly privateKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_channel.html#team_id PinpointApnsChannel#team_id}
    */
    readonly teamId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_channel.html#token_key PinpointApnsChannel#token_key}
    */
    readonly tokenKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_channel.html#token_key_id PinpointApnsChannel#token_key_id}
    */
    readonly tokenKeyId?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_channel.html aws_pinpoint_apns_channel}
  */
  export class PinpointApnsChannel extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_pinpoint_apns_channel";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_channel.html aws_pinpoint_apns_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PinpointApnsChannelConfig
    */
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
    private _applicationId?: string; 
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
    private _bundleId?: string | undefined; 
    public get bundleId() {
      return this.getStringAttribute('bundle_id');
    }
    public set bundleId(value: string | undefined) {
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
    private _certificate?: string | undefined; 
    public get certificate() {
      return this.getStringAttribute('certificate');
    }
    public set certificate(value: string | undefined) {
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
    private _defaultAuthenticationMethod?: string | undefined; 
    public get defaultAuthenticationMethod() {
      return this.getStringAttribute('default_authentication_method');
    }
    public set defaultAuthenticationMethod(value: string | undefined) {
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
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
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
    private _privateKey?: string | undefined; 
    public get privateKey() {
      return this.getStringAttribute('private_key');
    }
    public set privateKey(value: string | undefined) {
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
    private _teamId?: string | undefined; 
    public get teamId() {
      return this.getStringAttribute('team_id');
    }
    public set teamId(value: string | undefined) {
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
    private _tokenKey?: string | undefined; 
    public get tokenKey() {
      return this.getStringAttribute('token_key');
    }
    public set tokenKey(value: string | undefined) {
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
    private _tokenKeyId?: string | undefined; 
    public get tokenKeyId() {
      return this.getStringAttribute('token_key_id');
    }
    public set tokenKeyId(value: string | undefined) {
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
        application_id: cdktf.stringToTerraform(this._applicationId),
        bundle_id: cdktf.stringToTerraform(this._bundleId),
        certificate: cdktf.stringToTerraform(this._certificate),
        default_authentication_method: cdktf.stringToTerraform(this._defaultAuthenticationMethod),
        enabled: cdktf.booleanToTerraform(this._enabled),
        private_key: cdktf.stringToTerraform(this._privateKey),
        team_id: cdktf.stringToTerraform(this._teamId),
        token_key: cdktf.stringToTerraform(this._tokenKey),
        token_key_id: cdktf.stringToTerraform(this._tokenKeyId),
      };
    }
  }
  export interface PinpointApnsSandboxChannelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel.html#application_id PinpointApnsSandboxChannel#application_id}
    */
    readonly applicationId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel.html#bundle_id PinpointApnsSandboxChannel#bundle_id}
    */
    readonly bundleId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel.html#certificate PinpointApnsSandboxChannel#certificate}
    */
    readonly certificate?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel.html#default_authentication_method PinpointApnsSandboxChannel#default_authentication_method}
    */
    readonly defaultAuthenticationMethod?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel.html#enabled PinpointApnsSandboxChannel#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel.html#private_key PinpointApnsSandboxChannel#private_key}
    */
    readonly privateKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel.html#team_id PinpointApnsSandboxChannel#team_id}
    */
    readonly teamId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel.html#token_key PinpointApnsSandboxChannel#token_key}
    */
    readonly tokenKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel.html#token_key_id PinpointApnsSandboxChannel#token_key_id}
    */
    readonly tokenKeyId?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel.html aws_pinpoint_apns_sandbox_channel}
  */
  export class PinpointApnsSandboxChannel extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_pinpoint_apns_sandbox_channel";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel.html aws_pinpoint_apns_sandbox_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PinpointApnsSandboxChannelConfig
    */
    public constructor(scope: Construct, id: string, config: PinpointApnsSandboxChannelConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_pinpoint_apns_sandbox_channel',
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
    private _applicationId?: string; 
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
    private _bundleId?: string | undefined; 
    public get bundleId() {
      return this.getStringAttribute('bundle_id');
    }
    public set bundleId(value: string | undefined) {
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
    private _certificate?: string | undefined; 
    public get certificate() {
      return this.getStringAttribute('certificate');
    }
    public set certificate(value: string | undefined) {
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
    private _defaultAuthenticationMethod?: string | undefined; 
    public get defaultAuthenticationMethod() {
      return this.getStringAttribute('default_authentication_method');
    }
    public set defaultAuthenticationMethod(value: string | undefined) {
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
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
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
    private _privateKey?: string | undefined; 
    public get privateKey() {
      return this.getStringAttribute('private_key');
    }
    public set privateKey(value: string | undefined) {
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
    private _teamId?: string | undefined; 
    public get teamId() {
      return this.getStringAttribute('team_id');
    }
    public set teamId(value: string | undefined) {
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
    private _tokenKey?: string | undefined; 
    public get tokenKey() {
      return this.getStringAttribute('token_key');
    }
    public set tokenKey(value: string | undefined) {
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
    private _tokenKeyId?: string | undefined; 
    public get tokenKeyId() {
      return this.getStringAttribute('token_key_id');
    }
    public set tokenKeyId(value: string | undefined) {
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
        application_id: cdktf.stringToTerraform(this._applicationId),
        bundle_id: cdktf.stringToTerraform(this._bundleId),
        certificate: cdktf.stringToTerraform(this._certificate),
        default_authentication_method: cdktf.stringToTerraform(this._defaultAuthenticationMethod),
        enabled: cdktf.booleanToTerraform(this._enabled),
        private_key: cdktf.stringToTerraform(this._privateKey),
        team_id: cdktf.stringToTerraform(this._teamId),
        token_key: cdktf.stringToTerraform(this._tokenKey),
        token_key_id: cdktf.stringToTerraform(this._tokenKeyId),
      };
    }
  }
  export interface PinpointApnsVoipChannelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel.html#application_id PinpointApnsVoipChannel#application_id}
    */
    readonly applicationId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel.html#bundle_id PinpointApnsVoipChannel#bundle_id}
    */
    readonly bundleId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel.html#certificate PinpointApnsVoipChannel#certificate}
    */
    readonly certificate?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel.html#default_authentication_method PinpointApnsVoipChannel#default_authentication_method}
    */
    readonly defaultAuthenticationMethod?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel.html#enabled PinpointApnsVoipChannel#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel.html#private_key PinpointApnsVoipChannel#private_key}
    */
    readonly privateKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel.html#team_id PinpointApnsVoipChannel#team_id}
    */
    readonly teamId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel.html#token_key PinpointApnsVoipChannel#token_key}
    */
    readonly tokenKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel.html#token_key_id PinpointApnsVoipChannel#token_key_id}
    */
    readonly tokenKeyId?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel.html aws_pinpoint_apns_voip_channel}
  */
  export class PinpointApnsVoipChannel extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_pinpoint_apns_voip_channel";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel.html aws_pinpoint_apns_voip_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PinpointApnsVoipChannelConfig
    */
    public constructor(scope: Construct, id: string, config: PinpointApnsVoipChannelConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_pinpoint_apns_voip_channel',
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
    private _applicationId?: string; 
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
    private _bundleId?: string | undefined; 
    public get bundleId() {
      return this.getStringAttribute('bundle_id');
    }
    public set bundleId(value: string | undefined) {
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
    private _certificate?: string | undefined; 
    public get certificate() {
      return this.getStringAttribute('certificate');
    }
    public set certificate(value: string | undefined) {
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
    private _defaultAuthenticationMethod?: string | undefined; 
    public get defaultAuthenticationMethod() {
      return this.getStringAttribute('default_authentication_method');
    }
    public set defaultAuthenticationMethod(value: string | undefined) {
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
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
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
    private _privateKey?: string | undefined; 
    public get privateKey() {
      return this.getStringAttribute('private_key');
    }
    public set privateKey(value: string | undefined) {
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
    private _teamId?: string | undefined; 
    public get teamId() {
      return this.getStringAttribute('team_id');
    }
    public set teamId(value: string | undefined) {
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
    private _tokenKey?: string | undefined; 
    public get tokenKey() {
      return this.getStringAttribute('token_key');
    }
    public set tokenKey(value: string | undefined) {
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
    private _tokenKeyId?: string | undefined; 
    public get tokenKeyId() {
      return this.getStringAttribute('token_key_id');
    }
    public set tokenKeyId(value: string | undefined) {
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
        application_id: cdktf.stringToTerraform(this._applicationId),
        bundle_id: cdktf.stringToTerraform(this._bundleId),
        certificate: cdktf.stringToTerraform(this._certificate),
        default_authentication_method: cdktf.stringToTerraform(this._defaultAuthenticationMethod),
        enabled: cdktf.booleanToTerraform(this._enabled),
        private_key: cdktf.stringToTerraform(this._privateKey),
        team_id: cdktf.stringToTerraform(this._teamId),
        token_key: cdktf.stringToTerraform(this._tokenKey),
        token_key_id: cdktf.stringToTerraform(this._tokenKeyId),
      };
    }
  }
  export interface PinpointApnsVoipSandboxChannelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel.html#application_id PinpointApnsVoipSandboxChannel#application_id}
    */
    readonly applicationId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel.html#bundle_id PinpointApnsVoipSandboxChannel#bundle_id}
    */
    readonly bundleId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel.html#certificate PinpointApnsVoipSandboxChannel#certificate}
    */
    readonly certificate?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel.html#default_authentication_method PinpointApnsVoipSandboxChannel#default_authentication_method}
    */
    readonly defaultAuthenticationMethod?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel.html#enabled PinpointApnsVoipSandboxChannel#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel.html#private_key PinpointApnsVoipSandboxChannel#private_key}
    */
    readonly privateKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel.html#team_id PinpointApnsVoipSandboxChannel#team_id}
    */
    readonly teamId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel.html#token_key PinpointApnsVoipSandboxChannel#token_key}
    */
    readonly tokenKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel.html#token_key_id PinpointApnsVoipSandboxChannel#token_key_id}
    */
    readonly tokenKeyId?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel.html aws_pinpoint_apns_voip_sandbox_channel}
  */
  export class PinpointApnsVoipSandboxChannel extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_pinpoint_apns_voip_sandbox_channel";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel.html aws_pinpoint_apns_voip_sandbox_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PinpointApnsVoipSandboxChannelConfig
    */
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
    private _applicationId?: string; 
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
    private _bundleId?: string | undefined; 
    public get bundleId() {
      return this.getStringAttribute('bundle_id');
    }
    public set bundleId(value: string | undefined) {
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
    private _certificate?: string | undefined; 
    public get certificate() {
      return this.getStringAttribute('certificate');
    }
    public set certificate(value: string | undefined) {
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
    private _defaultAuthenticationMethod?: string | undefined; 
    public get defaultAuthenticationMethod() {
      return this.getStringAttribute('default_authentication_method');
    }
    public set defaultAuthenticationMethod(value: string | undefined) {
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
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
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
    private _privateKey?: string | undefined; 
    public get privateKey() {
      return this.getStringAttribute('private_key');
    }
    public set privateKey(value: string | undefined) {
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
    private _teamId?: string | undefined; 
    public get teamId() {
      return this.getStringAttribute('team_id');
    }
    public set teamId(value: string | undefined) {
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
    private _tokenKey?: string | undefined; 
    public get tokenKey() {
      return this.getStringAttribute('token_key');
    }
    public set tokenKey(value: string | undefined) {
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
    private _tokenKeyId?: string | undefined; 
    public get tokenKeyId() {
      return this.getStringAttribute('token_key_id');
    }
    public set tokenKeyId(value: string | undefined) {
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
        application_id: cdktf.stringToTerraform(this._applicationId),
        bundle_id: cdktf.stringToTerraform(this._bundleId),
        certificate: cdktf.stringToTerraform(this._certificate),
        default_authentication_method: cdktf.stringToTerraform(this._defaultAuthenticationMethod),
        enabled: cdktf.booleanToTerraform(this._enabled),
        private_key: cdktf.stringToTerraform(this._privateKey),
        team_id: cdktf.stringToTerraform(this._teamId),
        token_key: cdktf.stringToTerraform(this._tokenKey),
        token_key_id: cdktf.stringToTerraform(this._tokenKeyId),
      };
    }
  }
  export interface PinpointAppConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html#name PinpointApp#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html#name_prefix PinpointApp#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html#tags PinpointApp#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html#tags_all PinpointApp#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * campaign_hook block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html#campaign_hook PinpointApp#campaign_hook}
    */
    readonly campaignHook?: PinpointAppCampaignHook;
    /**
    * limits block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html#limits PinpointApp#limits}
    */
    readonly limits?: PinpointAppLimits;
    /**
    * quiet_time block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html#quiet_time PinpointApp#quiet_time}
    */
    readonly quietTime?: PinpointAppQuietTime;
  }
  export interface PinpointAppCampaignHook {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html#lambda_function_name PinpointApp#lambda_function_name}
    */
    readonly lambdaFunctionName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html#mode PinpointApp#mode}
    */
    readonly mode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html#web_url PinpointApp#web_url}
    */
    readonly webUrl?: string;
  }

  function pinpointAppCampaignHookToTerraform(struct?: PinpointAppCampaignHookOutputReference | PinpointAppCampaignHook): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      lambda_function_name: cdktf.stringToTerraform(struct!.lambdaFunctionName),
      mode: cdktf.stringToTerraform(struct!.mode),
      web_url: cdktf.stringToTerraform(struct!.webUrl),
    }
  }

  export class PinpointAppCampaignHookOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // lambda_function_name - computed: false, optional: true, required: false
    private _lambdaFunctionName?: string | undefined; 
    public get lambdaFunctionName() {
      return this.getStringAttribute('lambda_function_name');
    }
    public set lambdaFunctionName(value: string | undefined) {
      this._lambdaFunctionName = value;
    }
    public resetLambdaFunctionName() {
      this._lambdaFunctionName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaFunctionNameInput() {
      return this._lambdaFunctionName
    }

    // mode - computed: false, optional: true, required: false
    private _mode?: string | undefined; 
    public get mode() {
      return this.getStringAttribute('mode');
    }
    public set mode(value: string | undefined) {
      this._mode = value;
    }
    public resetMode() {
      this._mode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modeInput() {
      return this._mode
    }

    // web_url - computed: false, optional: true, required: false
    private _webUrl?: string | undefined; 
    public get webUrl() {
      return this.getStringAttribute('web_url');
    }
    public set webUrl(value: string | undefined) {
      this._webUrl = value;
    }
    public resetWebUrl() {
      this._webUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get webUrlInput() {
      return this._webUrl
    }
  }
  export interface PinpointAppLimits {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html#daily PinpointApp#daily}
    */
    readonly daily?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html#maximum_duration PinpointApp#maximum_duration}
    */
    readonly maximumDuration?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html#messages_per_second PinpointApp#messages_per_second}
    */
    readonly messagesPerSecond?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html#total PinpointApp#total}
    */
    readonly total?: number;
  }

  function pinpointAppLimitsToTerraform(struct?: PinpointAppLimitsOutputReference | PinpointAppLimits): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      daily: cdktf.numberToTerraform(struct!.daily),
      maximum_duration: cdktf.numberToTerraform(struct!.maximumDuration),
      messages_per_second: cdktf.numberToTerraform(struct!.messagesPerSecond),
      total: cdktf.numberToTerraform(struct!.total),
    }
  }

  export class PinpointAppLimitsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // daily - computed: false, optional: true, required: false
    private _daily?: number | undefined; 
    public get daily() {
      return this.getNumberAttribute('daily');
    }
    public set daily(value: number | undefined) {
      this._daily = value;
    }
    public resetDaily() {
      this._daily = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dailyInput() {
      return this._daily
    }

    // maximum_duration - computed: false, optional: true, required: false
    private _maximumDuration?: number | undefined; 
    public get maximumDuration() {
      return this.getNumberAttribute('maximum_duration');
    }
    public set maximumDuration(value: number | undefined) {
      this._maximumDuration = value;
    }
    public resetMaximumDuration() {
      this._maximumDuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumDurationInput() {
      return this._maximumDuration
    }

    // messages_per_second - computed: false, optional: true, required: false
    private _messagesPerSecond?: number | undefined; 
    public get messagesPerSecond() {
      return this.getNumberAttribute('messages_per_second');
    }
    public set messagesPerSecond(value: number | undefined) {
      this._messagesPerSecond = value;
    }
    public resetMessagesPerSecond() {
      this._messagesPerSecond = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get messagesPerSecondInput() {
      return this._messagesPerSecond
    }

    // total - computed: false, optional: true, required: false
    private _total?: number | undefined; 
    public get total() {
      return this.getNumberAttribute('total');
    }
    public set total(value: number | undefined) {
      this._total = value;
    }
    public resetTotal() {
      this._total = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get totalInput() {
      return this._total
    }
  }
  export interface PinpointAppQuietTime {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html#end PinpointApp#end}
    */
    readonly end?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html#start PinpointApp#start}
    */
    readonly start?: string;
  }

  function pinpointAppQuietTimeToTerraform(struct?: PinpointAppQuietTimeOutputReference | PinpointAppQuietTime): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      end: cdktf.stringToTerraform(struct!.end),
      start: cdktf.stringToTerraform(struct!.start),
    }
  }

  export class PinpointAppQuietTimeOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // end - computed: false, optional: true, required: false
    private _end?: string | undefined; 
    public get end() {
      return this.getStringAttribute('end');
    }
    public set end(value: string | undefined) {
      this._end = value;
    }
    public resetEnd() {
      this._end = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endInput() {
      return this._end
    }

    // start - computed: false, optional: true, required: false
    private _start?: string | undefined; 
    public get start() {
      return this.getStringAttribute('start');
    }
    public set start(value: string | undefined) {
      this._start = value;
    }
    public resetStart() {
      this._start = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startInput() {
      return this._start
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html aws_pinpoint_app}
  */
  export class PinpointApp extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_pinpoint_app";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html aws_pinpoint_app} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PinpointAppConfig = {}
    */
    public constructor(scope: Construct, id: string, config: PinpointAppConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_pinpoint_app',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._namePrefix = config.namePrefix;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._campaignHook = config.campaignHook;
      this._limits = config.limits;
      this._quietTime = config.quietTime;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // application_id - computed: true, optional: false, required: false
    public get applicationId() {
      return this.getStringAttribute('application_id');
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: true, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // name_prefix - computed: false, optional: true, required: false
    private _namePrefix?: string | undefined; 
    public get namePrefix() {
      return this.getStringAttribute('name_prefix');
    }
    public set namePrefix(value: string | undefined) {
      this._namePrefix = value;
    }
    public resetNamePrefix() {
      this._namePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namePrefixInput() {
      return this._namePrefix
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // campaign_hook - computed: false, optional: true, required: false
    private _campaignHook?: PinpointAppCampaignHook | undefined; 
    private __campaignHookOutput = new PinpointAppCampaignHookOutputReference(this as any, "campaign_hook", true);
    public get campaignHook() {
      return this.__campaignHookOutput;
    }
    public putCampaignHook(value: PinpointAppCampaignHook | undefined) {
      this._campaignHook = value;
    }
    public resetCampaignHook() {
      this._campaignHook = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get campaignHookInput() {
      return this._campaignHook
    }

    // limits - computed: false, optional: true, required: false
    private _limits?: PinpointAppLimits | undefined; 
    private __limitsOutput = new PinpointAppLimitsOutputReference(this as any, "limits", true);
    public get limits() {
      return this.__limitsOutput;
    }
    public putLimits(value: PinpointAppLimits | undefined) {
      this._limits = value;
    }
    public resetLimits() {
      this._limits = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get limitsInput() {
      return this._limits
    }

    // quiet_time - computed: false, optional: true, required: false
    private _quietTime?: PinpointAppQuietTime | undefined; 
    private __quietTimeOutput = new PinpointAppQuietTimeOutputReference(this as any, "quiet_time", true);
    public get quietTime() {
      return this.__quietTimeOutput;
    }
    public putQuietTime(value: PinpointAppQuietTime | undefined) {
      this._quietTime = value;
    }
    public resetQuietTime() {
      this._quietTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get quietTimeInput() {
      return this._quietTime
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        name_prefix: cdktf.stringToTerraform(this._namePrefix),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        campaign_hook: pinpointAppCampaignHookToTerraform(this._campaignHook),
        limits: pinpointAppLimitsToTerraform(this._limits),
        quiet_time: pinpointAppQuietTimeToTerraform(this._quietTime),
      };
    }
  }
  export interface PinpointBaiduChannelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_baidu_channel.html#api_key PinpointBaiduChannel#api_key}
    */
    readonly apiKey: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_baidu_channel.html#application_id PinpointBaiduChannel#application_id}
    */
    readonly applicationId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_baidu_channel.html#enabled PinpointBaiduChannel#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_baidu_channel.html#secret_key PinpointBaiduChannel#secret_key}
    */
    readonly secretKey: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_baidu_channel.html aws_pinpoint_baidu_channel}
  */
  export class PinpointBaiduChannel extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_pinpoint_baidu_channel";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_baidu_channel.html aws_pinpoint_baidu_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PinpointBaiduChannelConfig
    */
    public constructor(scope: Construct, id: string, config: PinpointBaiduChannelConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_pinpoint_baidu_channel',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._apiKey = config.apiKey;
      this._applicationId = config.applicationId;
      this._enabled = config.enabled;
      this._secretKey = config.secretKey;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // api_key - computed: false, optional: false, required: true
    private _apiKey?: string; 
    public get apiKey() {
      return this.getStringAttribute('api_key');
    }
    public set apiKey(value: string) {
      this._apiKey = value;
    }
    // Temporarily expose input value. Use with caution.
    public get apiKeyInput() {
      return this._apiKey
    }

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
      return this._applicationId
    }

    // enabled - computed: false, optional: true, required: false
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
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

    // secret_key - computed: false, optional: false, required: true
    private _secretKey?: string; 
    public get secretKey() {
      return this.getStringAttribute('secret_key');
    }
    public set secretKey(value: string) {
      this._secretKey = value;
    }
    // Temporarily expose input value. Use with caution.
    public get secretKeyInput() {
      return this._secretKey
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        api_key: cdktf.stringToTerraform(this._apiKey),
        application_id: cdktf.stringToTerraform(this._applicationId),
        enabled: cdktf.booleanToTerraform(this._enabled),
        secret_key: cdktf.stringToTerraform(this._secretKey),
      };
    }
  }
  export interface PinpointEmailChannelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel.html#application_id PinpointEmailChannel#application_id}
    */
    readonly applicationId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel.html#configuration_set PinpointEmailChannel#configuration_set}
    */
    readonly configurationSet?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel.html#enabled PinpointEmailChannel#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel.html#from_address PinpointEmailChannel#from_address}
    */
    readonly fromAddress: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel.html#identity PinpointEmailChannel#identity}
    */
    readonly identity: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel.html#role_arn PinpointEmailChannel#role_arn}
    */
    readonly roleArn?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel.html aws_pinpoint_email_channel}
  */
  export class PinpointEmailChannel extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_pinpoint_email_channel";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel.html aws_pinpoint_email_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PinpointEmailChannelConfig
    */
    public constructor(scope: Construct, id: string, config: PinpointEmailChannelConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_pinpoint_email_channel',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._applicationId = config.applicationId;
      this._configurationSet = config.configurationSet;
      this._enabled = config.enabled;
      this._fromAddress = config.fromAddress;
      this._identity = config.identity;
      this._roleArn = config.roleArn;
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
      return this._applicationId
    }

    // configuration_set - computed: false, optional: true, required: false
    private _configurationSet?: string | undefined; 
    public get configurationSet() {
      return this.getStringAttribute('configuration_set');
    }
    public set configurationSet(value: string | undefined) {
      this._configurationSet = value;
    }
    public resetConfigurationSet() {
      this._configurationSet = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationSetInput() {
      return this._configurationSet
    }

    // enabled - computed: false, optional: true, required: false
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
      this._enabled = value;
    }
    public resetEnabled() {
      this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }

    // from_address - computed: false, optional: false, required: true
    private _fromAddress?: string; 
    public get fromAddress() {
      return this.getStringAttribute('from_address');
    }
    public set fromAddress(value: string) {
      this._fromAddress = value;
    }
    // Temporarily expose input value. Use with caution.
    public get fromAddressInput() {
      return this._fromAddress
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // identity - computed: false, optional: false, required: true
    private _identity?: string; 
    public get identity() {
      return this.getStringAttribute('identity');
    }
    public set identity(value: string) {
      this._identity = value;
    }
    // Temporarily expose input value. Use with caution.
    public get identityInput() {
      return this._identity
    }

    // messages_per_second - computed: true, optional: false, required: false
    public get messagesPerSecond() {
      return this.getNumberAttribute('messages_per_second');
    }

    // role_arn - computed: false, optional: true, required: false
    private _roleArn?: string | undefined; 
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string | undefined) {
      this._roleArn = value;
    }
    public resetRoleArn() {
      this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
      return this._roleArn
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        application_id: cdktf.stringToTerraform(this._applicationId),
        configuration_set: cdktf.stringToTerraform(this._configurationSet),
        enabled: cdktf.booleanToTerraform(this._enabled),
        from_address: cdktf.stringToTerraform(this._fromAddress),
        identity: cdktf.stringToTerraform(this._identity),
        role_arn: cdktf.stringToTerraform(this._roleArn),
      };
    }
  }
  export interface PinpointEventStreamConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_event_stream.html#application_id PinpointEventStream#application_id}
    */
    readonly applicationId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_event_stream.html#destination_stream_arn PinpointEventStream#destination_stream_arn}
    */
    readonly destinationStreamArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_event_stream.html#role_arn PinpointEventStream#role_arn}
    */
    readonly roleArn: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_event_stream.html aws_pinpoint_event_stream}
  */
  export class PinpointEventStream extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_pinpoint_event_stream";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_event_stream.html aws_pinpoint_event_stream} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PinpointEventStreamConfig
    */
    public constructor(scope: Construct, id: string, config: PinpointEventStreamConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_pinpoint_event_stream',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._applicationId = config.applicationId;
      this._destinationStreamArn = config.destinationStreamArn;
      this._roleArn = config.roleArn;
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
      return this._applicationId
    }

    // destination_stream_arn - computed: false, optional: false, required: true
    private _destinationStreamArn?: string; 
    public get destinationStreamArn() {
      return this.getStringAttribute('destination_stream_arn');
    }
    public set destinationStreamArn(value: string) {
      this._destinationStreamArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationStreamArnInput() {
      return this._destinationStreamArn
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
      this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
      return this._roleArn
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        application_id: cdktf.stringToTerraform(this._applicationId),
        destination_stream_arn: cdktf.stringToTerraform(this._destinationStreamArn),
        role_arn: cdktf.stringToTerraform(this._roleArn),
      };
    }
  }
  export interface PinpointGcmChannelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_gcm_channel.html#api_key PinpointGcmChannel#api_key}
    */
    readonly apiKey: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_gcm_channel.html#application_id PinpointGcmChannel#application_id}
    */
    readonly applicationId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_gcm_channel.html#enabled PinpointGcmChannel#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_gcm_channel.html aws_pinpoint_gcm_channel}
  */
  export class PinpointGcmChannel extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_pinpoint_gcm_channel";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_gcm_channel.html aws_pinpoint_gcm_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PinpointGcmChannelConfig
    */
    public constructor(scope: Construct, id: string, config: PinpointGcmChannelConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_pinpoint_gcm_channel',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._apiKey = config.apiKey;
      this._applicationId = config.applicationId;
      this._enabled = config.enabled;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // api_key - computed: false, optional: false, required: true
    private _apiKey?: string; 
    public get apiKey() {
      return this.getStringAttribute('api_key');
    }
    public set apiKey(value: string) {
      this._apiKey = value;
    }
    // Temporarily expose input value. Use with caution.
    public get apiKeyInput() {
      return this._apiKey
    }

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
      return this._applicationId
    }

    // enabled - computed: false, optional: true, required: false
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        api_key: cdktf.stringToTerraform(this._apiKey),
        application_id: cdktf.stringToTerraform(this._applicationId),
        enabled: cdktf.booleanToTerraform(this._enabled),
      };
    }
  }
  export interface PinpointSmsChannelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_sms_channel.html#application_id PinpointSmsChannel#application_id}
    */
    readonly applicationId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_sms_channel.html#enabled PinpointSmsChannel#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_sms_channel.html#sender_id PinpointSmsChannel#sender_id}
    */
    readonly senderId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_sms_channel.html#short_code PinpointSmsChannel#short_code}
    */
    readonly shortCode?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_sms_channel.html aws_pinpoint_sms_channel}
  */
  export class PinpointSmsChannel extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_pinpoint_sms_channel";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_sms_channel.html aws_pinpoint_sms_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PinpointSmsChannelConfig
    */
    public constructor(scope: Construct, id: string, config: PinpointSmsChannelConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_pinpoint_sms_channel',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._applicationId = config.applicationId;
      this._enabled = config.enabled;
      this._senderId = config.senderId;
      this._shortCode = config.shortCode;
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
      return this._applicationId
    }

    // enabled - computed: false, optional: true, required: false
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
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

    // promotional_messages_per_second - computed: true, optional: false, required: false
    public get promotionalMessagesPerSecond() {
      return this.getNumberAttribute('promotional_messages_per_second');
    }

    // sender_id - computed: false, optional: true, required: false
    private _senderId?: string | undefined; 
    public get senderId() {
      return this.getStringAttribute('sender_id');
    }
    public set senderId(value: string | undefined) {
      this._senderId = value;
    }
    public resetSenderId() {
      this._senderId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get senderIdInput() {
      return this._senderId
    }

    // short_code - computed: false, optional: true, required: false
    private _shortCode?: string | undefined; 
    public get shortCode() {
      return this.getStringAttribute('short_code');
    }
    public set shortCode(value: string | undefined) {
      this._shortCode = value;
    }
    public resetShortCode() {
      this._shortCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shortCodeInput() {
      return this._shortCode
    }

    // transactional_messages_per_second - computed: true, optional: false, required: false
    public get transactionalMessagesPerSecond() {
      return this.getNumberAttribute('transactional_messages_per_second');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        application_id: cdktf.stringToTerraform(this._applicationId),
        enabled: cdktf.booleanToTerraform(this._enabled),
        sender_id: cdktf.stringToTerraform(this._senderId),
        short_code: cdktf.stringToTerraform(this._shortCode),
      };
    }
  }
}
