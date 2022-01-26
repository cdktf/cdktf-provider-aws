// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Pinpoint
*/
export interface PinpointEmailChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel#application_id PinpointEmailChannel#application_id}
  */
  readonly applicationId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel#configuration_set PinpointEmailChannel#configuration_set}
  */
  readonly configurationSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel#enabled PinpointEmailChannel#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel#from_address PinpointEmailChannel#from_address}
  */
  readonly fromAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel#identity PinpointEmailChannel#identity}
  */
  readonly identity: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel#role_arn PinpointEmailChannel#role_arn}
  */
  readonly roleArn?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel aws_pinpoint_email_channel}
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
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel aws_pinpoint_email_channel} Resource
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
    return this._applicationId;
  }

  // configuration_set - computed: false, optional: true, required: false
  private _configurationSet?: string; 
  public get configurationSet() {
    return this.getStringAttribute('configuration_set');
  }
  public set configurationSet(value: string) {
    this._configurationSet = value;
  }
  public resetConfigurationSet() {
    this._configurationSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationSetInput() {
    return this._configurationSet;
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
    return this._fromAddress;
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
    return this._identity;
  }

  // messages_per_second - computed: true, optional: false, required: false
  public get messagesPerSecond() {
    return this.getNumberAttribute('messages_per_second');
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
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
