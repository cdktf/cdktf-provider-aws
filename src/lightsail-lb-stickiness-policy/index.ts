// https://www.terraform.io/docs/providers/aws/r/lightsail_lb_stickiness_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LightsailLbStickinessPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_lb_stickiness_policy#cookie_duration LightsailLbStickinessPolicy#cookie_duration}
  */
  readonly cookieDuration: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_lb_stickiness_policy#enabled LightsailLbStickinessPolicy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_lb_stickiness_policy#id LightsailLbStickinessPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_lb_stickiness_policy#lb_name LightsailLbStickinessPolicy#lb_name}
  */
  readonly lbName: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lightsail_lb_stickiness_policy aws_lightsail_lb_stickiness_policy}
*/
export class LightsailLbStickinessPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lightsail_lb_stickiness_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lightsail_lb_stickiness_policy aws_lightsail_lb_stickiness_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LightsailLbStickinessPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: LightsailLbStickinessPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lightsail_lb_stickiness_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.58.0',
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
    this._cookieDuration = config.cookieDuration;
    this._enabled = config.enabled;
    this._id = config.id;
    this._lbName = config.lbName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cookie_duration - computed: false, optional: false, required: true
  private _cookieDuration?: number; 
  public get cookieDuration() {
    return this.getNumberAttribute('cookie_duration');
  }
  public set cookieDuration(value: number) {
    this._cookieDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieDurationInput() {
    return this._cookieDuration;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
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

  // lb_name - computed: false, optional: false, required: true
  private _lbName?: string; 
  public get lbName() {
    return this.getStringAttribute('lb_name');
  }
  public set lbName(value: string) {
    this._lbName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lbNameInput() {
    return this._lbName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cookie_duration: cdktf.numberToTerraform(this._cookieDuration),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      lb_name: cdktf.stringToTerraform(this._lbName),
    };
  }
}
