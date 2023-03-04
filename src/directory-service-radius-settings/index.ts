// https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DirectoryServiceRadiusSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#authentication_protocol DirectoryServiceRadiusSettings#authentication_protocol}
  */
  readonly authenticationProtocol: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#directory_id DirectoryServiceRadiusSettings#directory_id}
  */
  readonly directoryId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#display_label DirectoryServiceRadiusSettings#display_label}
  */
  readonly displayLabel: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#id DirectoryServiceRadiusSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#radius_port DirectoryServiceRadiusSettings#radius_port}
  */
  readonly radiusPort: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#radius_retries DirectoryServiceRadiusSettings#radius_retries}
  */
  readonly radiusRetries: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#radius_servers DirectoryServiceRadiusSettings#radius_servers}
  */
  readonly radiusServers: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#radius_timeout DirectoryServiceRadiusSettings#radius_timeout}
  */
  readonly radiusTimeout: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#shared_secret DirectoryServiceRadiusSettings#shared_secret}
  */
  readonly sharedSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#use_same_username DirectoryServiceRadiusSettings#use_same_username}
  */
  readonly useSameUsername?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#timeouts DirectoryServiceRadiusSettings#timeouts}
  */
  readonly timeouts?: DirectoryServiceRadiusSettingsTimeouts;
}
export interface DirectoryServiceRadiusSettingsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#create DirectoryServiceRadiusSettings#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#update DirectoryServiceRadiusSettings#update}
  */
  readonly update?: string;
}

export function directoryServiceRadiusSettingsTimeoutsToTerraform(struct?: DirectoryServiceRadiusSettingsTimeoutsOutputReference | DirectoryServiceRadiusSettingsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class DirectoryServiceRadiusSettingsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DirectoryServiceRadiusSettingsTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DirectoryServiceRadiusSettingsTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings aws_directory_service_radius_settings}
*/
export class DirectoryServiceRadiusSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_directory_service_radius_settings";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings aws_directory_service_radius_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DirectoryServiceRadiusSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: DirectoryServiceRadiusSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_directory_service_radius_settings',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
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
    this._authenticationProtocol = config.authenticationProtocol;
    this._directoryId = config.directoryId;
    this._displayLabel = config.displayLabel;
    this._id = config.id;
    this._radiusPort = config.radiusPort;
    this._radiusRetries = config.radiusRetries;
    this._radiusServers = config.radiusServers;
    this._radiusTimeout = config.radiusTimeout;
    this._sharedSecret = config.sharedSecret;
    this._useSameUsername = config.useSameUsername;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_protocol - computed: false, optional: false, required: true
  private _authenticationProtocol?: string; 
  public get authenticationProtocol() {
    return this.getStringAttribute('authentication_protocol');
  }
  public set authenticationProtocol(value: string) {
    this._authenticationProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationProtocolInput() {
    return this._authenticationProtocol;
  }

  // directory_id - computed: false, optional: false, required: true
  private _directoryId?: string; 
  public get directoryId() {
    return this.getStringAttribute('directory_id');
  }
  public set directoryId(value: string) {
    this._directoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryIdInput() {
    return this._directoryId;
  }

  // display_label - computed: false, optional: false, required: true
  private _displayLabel?: string; 
  public get displayLabel() {
    return this.getStringAttribute('display_label');
  }
  public set displayLabel(value: string) {
    this._displayLabel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayLabelInput() {
    return this._displayLabel;
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

  // radius_port - computed: false, optional: false, required: true
  private _radiusPort?: number; 
  public get radiusPort() {
    return this.getNumberAttribute('radius_port');
  }
  public set radiusPort(value: number) {
    this._radiusPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusPortInput() {
    return this._radiusPort;
  }

  // radius_retries - computed: false, optional: false, required: true
  private _radiusRetries?: number; 
  public get radiusRetries() {
    return this.getNumberAttribute('radius_retries');
  }
  public set radiusRetries(value: number) {
    this._radiusRetries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusRetriesInput() {
    return this._radiusRetries;
  }

  // radius_servers - computed: false, optional: false, required: true
  private _radiusServers?: string[]; 
  public get radiusServers() {
    return cdktf.Fn.tolist(this.getListAttribute('radius_servers'));
  }
  public set radiusServers(value: string[]) {
    this._radiusServers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusServersInput() {
    return this._radiusServers;
  }

  // radius_timeout - computed: false, optional: false, required: true
  private _radiusTimeout?: number; 
  public get radiusTimeout() {
    return this.getNumberAttribute('radius_timeout');
  }
  public set radiusTimeout(value: number) {
    this._radiusTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusTimeoutInput() {
    return this._radiusTimeout;
  }

  // shared_secret - computed: false, optional: false, required: true
  private _sharedSecret?: string; 
  public get sharedSecret() {
    return this.getStringAttribute('shared_secret');
  }
  public set sharedSecret(value: string) {
    this._sharedSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedSecretInput() {
    return this._sharedSecret;
  }

  // use_same_username - computed: false, optional: true, required: false
  private _useSameUsername?: boolean | cdktf.IResolvable; 
  public get useSameUsername() {
    return this.getBooleanAttribute('use_same_username');
  }
  public set useSameUsername(value: boolean | cdktf.IResolvable) {
    this._useSameUsername = value;
  }
  public resetUseSameUsername() {
    this._useSameUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSameUsernameInput() {
    return this._useSameUsername;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DirectoryServiceRadiusSettingsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DirectoryServiceRadiusSettingsTimeouts) {
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
      authentication_protocol: cdktf.stringToTerraform(this._authenticationProtocol),
      directory_id: cdktf.stringToTerraform(this._directoryId),
      display_label: cdktf.stringToTerraform(this._displayLabel),
      id: cdktf.stringToTerraform(this._id),
      radius_port: cdktf.numberToTerraform(this._radiusPort),
      radius_retries: cdktf.numberToTerraform(this._radiusRetries),
      radius_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._radiusServers),
      radius_timeout: cdktf.numberToTerraform(this._radiusTimeout),
      shared_secret: cdktf.stringToTerraform(this._sharedSecret),
      use_same_username: cdktf.booleanToTerraform(this._useSameUsername),
      timeouts: directoryServiceRadiusSettingsTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
