// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Pinpoint
*/
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

export function pinpointAppCampaignHookToTerraform(struct?: PinpointAppCampaignHookOutputReference | PinpointAppCampaignHook): any {
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

  public get internalValue(): PinpointAppCampaignHook | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._lambdaFunctionName) {
      hasAnyValues = true;
      internalValueResult.lambdaFunctionName = this._lambdaFunctionName;
    }
    if (this._mode) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._webUrl) {
      hasAnyValues = true;
      internalValueResult.webUrl = this._webUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PinpointAppCampaignHook | undefined) {
    if (value === undefined) {
      this._lambdaFunctionName = undefined;
      this._mode = undefined;
      this._webUrl = undefined;
    }
    else {
      this._lambdaFunctionName = value.lambdaFunctionName;
      this._mode = value.mode;
      this._webUrl = value.webUrl;
    }
  }

  // lambda_function_name - computed: false, optional: true, required: false
  private _lambdaFunctionName?: string; 
  public get lambdaFunctionName() {
    return this.getStringAttribute('lambda_function_name');
  }
  public set lambdaFunctionName(value: string) {
    this._lambdaFunctionName = value;
  }
  public resetLambdaFunctionName() {
    this._lambdaFunctionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFunctionNameInput() {
    return this._lambdaFunctionName;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // web_url - computed: false, optional: true, required: false
  private _webUrl?: string; 
  public get webUrl() {
    return this.getStringAttribute('web_url');
  }
  public set webUrl(value: string) {
    this._webUrl = value;
  }
  public resetWebUrl() {
    this._webUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webUrlInput() {
    return this._webUrl;
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

export function pinpointAppLimitsToTerraform(struct?: PinpointAppLimitsOutputReference | PinpointAppLimits): any {
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

  public get internalValue(): PinpointAppLimits | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._daily) {
      hasAnyValues = true;
      internalValueResult.daily = this._daily;
    }
    if (this._maximumDuration) {
      hasAnyValues = true;
      internalValueResult.maximumDuration = this._maximumDuration;
    }
    if (this._messagesPerSecond) {
      hasAnyValues = true;
      internalValueResult.messagesPerSecond = this._messagesPerSecond;
    }
    if (this._total) {
      hasAnyValues = true;
      internalValueResult.total = this._total;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PinpointAppLimits | undefined) {
    if (value === undefined) {
      this._daily = undefined;
      this._maximumDuration = undefined;
      this._messagesPerSecond = undefined;
      this._total = undefined;
    }
    else {
      this._daily = value.daily;
      this._maximumDuration = value.maximumDuration;
      this._messagesPerSecond = value.messagesPerSecond;
      this._total = value.total;
    }
  }

  // daily - computed: false, optional: true, required: false
  private _daily?: number; 
  public get daily() {
    return this.getNumberAttribute('daily');
  }
  public set daily(value: number) {
    this._daily = value;
  }
  public resetDaily() {
    this._daily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyInput() {
    return this._daily;
  }

  // maximum_duration - computed: false, optional: true, required: false
  private _maximumDuration?: number; 
  public get maximumDuration() {
    return this.getNumberAttribute('maximum_duration');
  }
  public set maximumDuration(value: number) {
    this._maximumDuration = value;
  }
  public resetMaximumDuration() {
    this._maximumDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumDurationInput() {
    return this._maximumDuration;
  }

  // messages_per_second - computed: false, optional: true, required: false
  private _messagesPerSecond?: number; 
  public get messagesPerSecond() {
    return this.getNumberAttribute('messages_per_second');
  }
  public set messagesPerSecond(value: number) {
    this._messagesPerSecond = value;
  }
  public resetMessagesPerSecond() {
    this._messagesPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagesPerSecondInput() {
    return this._messagesPerSecond;
  }

  // total - computed: false, optional: true, required: false
  private _total?: number; 
  public get total() {
    return this.getNumberAttribute('total');
  }
  public set total(value: number) {
    this._total = value;
  }
  public resetTotal() {
    this._total = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalInput() {
    return this._total;
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

export function pinpointAppQuietTimeToTerraform(struct?: PinpointAppQuietTimeOutputReference | PinpointAppQuietTime): any {
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

  public get internalValue(): PinpointAppQuietTime | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._end) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PinpointAppQuietTime | undefined) {
    if (value === undefined) {
      this._end = undefined;
      this._start = undefined;
    }
    else {
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
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
    this._campaignHook.internalValue = config.campaignHook;
    this._limits.internalValue = config.limits;
    this._quietTime.internalValue = config.quietTime;
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
    return this._name;
  }

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
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
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable; 
  public get tagsAll() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_all') as any;
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // campaign_hook - computed: false, optional: true, required: false
  private _campaignHook = new PinpointAppCampaignHookOutputReference(this as any, "campaign_hook", true);
  public get campaignHook() {
    return this._campaignHook;
  }
  public putCampaignHook(value: PinpointAppCampaignHook) {
    this._campaignHook.internalValue = value;
  }
  public resetCampaignHook() {
    this._campaignHook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get campaignHookInput() {
    return this._campaignHook.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits = new PinpointAppLimitsOutputReference(this as any, "limits", true);
  public get limits() {
    return this._limits;
  }
  public putLimits(value: PinpointAppLimits) {
    this._limits.internalValue = value;
  }
  public resetLimits() {
    this._limits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits.internalValue;
  }

  // quiet_time - computed: false, optional: true, required: false
  private _quietTime = new PinpointAppQuietTimeOutputReference(this as any, "quiet_time", true);
  public get quietTime() {
    return this._quietTime;
  }
  public putQuietTime(value: PinpointAppQuietTime) {
    this._quietTime.internalValue = value;
  }
  public resetQuietTime() {
    this._quietTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quietTimeInput() {
    return this._quietTime.internalValue;
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
      campaign_hook: pinpointAppCampaignHookToTerraform(this._campaignHook.internalValue),
      limits: pinpointAppLimitsToTerraform(this._limits.internalValue),
      quiet_time: pinpointAppQuietTimeToTerraform(this._quietTime.internalValue),
    };
  }
}
