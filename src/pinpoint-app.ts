// https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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
  readonly campaignHook?: PinpointAppCampaignHook[];
  /**
  * limits block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html#limits PinpointApp#limits}
  */
  readonly limits?: PinpointAppLimits[];
  /**
  * quiet_time block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html#quiet_time PinpointApp#quiet_time}
  */
  readonly quietTime?: PinpointAppQuietTime[];
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

function pinpointAppCampaignHookToTerraform(struct?: PinpointAppCampaignHook): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    lambda_function_name: cdktf.stringToTerraform(struct!.lambdaFunctionName),
    mode: cdktf.stringToTerraform(struct!.mode),
    web_url: cdktf.stringToTerraform(struct!.webUrl),
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

function pinpointAppLimitsToTerraform(struct?: PinpointAppLimits): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    daily: cdktf.numberToTerraform(struct!.daily),
    maximum_duration: cdktf.numberToTerraform(struct!.maximumDuration),
    messages_per_second: cdktf.numberToTerraform(struct!.messagesPerSecond),
    total: cdktf.numberToTerraform(struct!.total),
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

function pinpointAppQuietTimeToTerraform(struct?: PinpointAppQuietTime): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
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
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
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
  private _namePrefix?: string;
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string ) {
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
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
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
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
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
  private _campaignHook?: PinpointAppCampaignHook[];
  public get campaignHook() {
    return this.interpolationForAttribute('campaign_hook') as any;
  }
  public set campaignHook(value: PinpointAppCampaignHook[] ) {
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
  private _limits?: PinpointAppLimits[];
  public get limits() {
    return this.interpolationForAttribute('limits') as any;
  }
  public set limits(value: PinpointAppLimits[] ) {
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
  private _quietTime?: PinpointAppQuietTime[];
  public get quietTime() {
    return this.interpolationForAttribute('quiet_time') as any;
  }
  public set quietTime(value: PinpointAppQuietTime[] ) {
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
      campaign_hook: cdktf.listMapper(pinpointAppCampaignHookToTerraform)(this._campaignHook),
      limits: cdktf.listMapper(pinpointAppLimitsToTerraform)(this._limits),
      quiet_time: cdktf.listMapper(pinpointAppQuietTimeToTerraform)(this._quietTime),
    };
  }
}
