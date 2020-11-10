// https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface PinpointAppConfig extends TerraformMetaArguments {
  readonly name?: string;
  readonly namePrefix?: string;
  readonly tags?: { [key: string]: string };
  /** campaign_hook block */
  readonly campaignHook?: PinpointAppCampaignHook[];
  /** limits block */
  readonly limits?: PinpointAppLimits[];
  /** quiet_time block */
  readonly quietTime?: PinpointAppQuietTime[];
}
export interface PinpointAppCampaignHook {
  readonly lambdaFunctionName?: string;
  readonly mode?: string;
  readonly webUrl?: string;
}
export interface PinpointAppLimits {
  readonly daily?: number;
  readonly maximumDuration?: number;
  readonly messagesPerSecond?: number;
  readonly total?: number;
}
export interface PinpointAppQuietTime {
  readonly end?: string;
  readonly start?: string;
}

// Resource

export class PinpointApp extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
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
      name: this._name,
      name_prefix: this._namePrefix,
      tags: this._tags,
      campaign_hook: this._campaignHook,
      limits: this._limits,
      quiet_time: this._quietTime,
    };
  }
}
