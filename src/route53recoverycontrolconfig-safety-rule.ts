// https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Route53RecoverycontrolconfigSafetyRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule.html#asserted_controls Route53RecoverycontrolconfigSafetyRule#asserted_controls}
  */
  readonly assertedControls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule.html#control_panel_arn Route53RecoverycontrolconfigSafetyRule#control_panel_arn}
  */
  readonly controlPanelArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule.html#gating_controls Route53RecoverycontrolconfigSafetyRule#gating_controls}
  */
  readonly gatingControls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule.html#name Route53RecoverycontrolconfigSafetyRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule.html#target_controls Route53RecoverycontrolconfigSafetyRule#target_controls}
  */
  readonly targetControls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule.html#wait_period_ms Route53RecoverycontrolconfigSafetyRule#wait_period_ms}
  */
  readonly waitPeriodMs: number;
  /**
  * rule_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule.html#rule_config Route53RecoverycontrolconfigSafetyRule#rule_config}
  */
  readonly ruleConfig: Route53RecoverycontrolconfigSafetyRuleRuleConfig[];
}
export interface Route53RecoverycontrolconfigSafetyRuleRuleConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule.html#inverted Route53RecoverycontrolconfigSafetyRule#inverted}
  */
  readonly inverted: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule.html#threshold Route53RecoverycontrolconfigSafetyRule#threshold}
  */
  readonly threshold: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule.html#type Route53RecoverycontrolconfigSafetyRule#type}
  */
  readonly type: string;
}

function route53RecoverycontrolconfigSafetyRuleRuleConfigToTerraform(struct?: Route53RecoverycontrolconfigSafetyRuleRuleConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    inverted: cdktf.booleanToTerraform(struct!.inverted),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule.html aws_route53recoverycontrolconfig_safety_rule}
*/
export class Route53RecoverycontrolconfigSafetyRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_route53recoverycontrolconfig_safety_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule.html aws_route53recoverycontrolconfig_safety_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Route53RecoverycontrolconfigSafetyRuleConfig
  */
  public constructor(scope: Construct, id: string, config: Route53RecoverycontrolconfigSafetyRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_route53recoverycontrolconfig_safety_rule',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._assertedControls = config.assertedControls;
    this._controlPanelArn = config.controlPanelArn;
    this._gatingControls = config.gatingControls;
    this._name = config.name;
    this._targetControls = config.targetControls;
    this._waitPeriodMs = config.waitPeriodMs;
    this._ruleConfig = config.ruleConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // asserted_controls - computed: false, optional: true, required: false
  private _assertedControls?: string[];
  public get assertedControls() {
    return this.getListAttribute('asserted_controls');
  }
  public set assertedControls(value: string[] ) {
    this._assertedControls = value;
  }
  public resetAssertedControls() {
    this._assertedControls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertedControlsInput() {
    return this._assertedControls
  }

  // control_panel_arn - computed: false, optional: false, required: true
  private _controlPanelArn: string;
  public get controlPanelArn() {
    return this.getStringAttribute('control_panel_arn');
  }
  public set controlPanelArn(value: string) {
    this._controlPanelArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPanelArnInput() {
    return this._controlPanelArn
  }

  // gating_controls - computed: false, optional: true, required: false
  private _gatingControls?: string[];
  public get gatingControls() {
    return this.getListAttribute('gating_controls');
  }
  public set gatingControls(value: string[] ) {
    this._gatingControls = value;
  }
  public resetGatingControls() {
    this._gatingControls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatingControlsInput() {
    return this._gatingControls
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // target_controls - computed: false, optional: true, required: false
  private _targetControls?: string[];
  public get targetControls() {
    return this.getListAttribute('target_controls');
  }
  public set targetControls(value: string[] ) {
    this._targetControls = value;
  }
  public resetTargetControls() {
    this._targetControls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetControlsInput() {
    return this._targetControls
  }

  // wait_period_ms - computed: false, optional: false, required: true
  private _waitPeriodMs: number;
  public get waitPeriodMs() {
    return this.getNumberAttribute('wait_period_ms');
  }
  public set waitPeriodMs(value: number) {
    this._waitPeriodMs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get waitPeriodMsInput() {
    return this._waitPeriodMs
  }

  // rule_config - computed: false, optional: false, required: true
  private _ruleConfig: Route53RecoverycontrolconfigSafetyRuleRuleConfig[];
  public get ruleConfig() {
    return this.interpolationForAttribute('rule_config') as any;
  }
  public set ruleConfig(value: Route53RecoverycontrolconfigSafetyRuleRuleConfig[]) {
    this._ruleConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleConfigInput() {
    return this._ruleConfig
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      asserted_controls: cdktf.listMapper(cdktf.stringToTerraform)(this._assertedControls),
      control_panel_arn: cdktf.stringToTerraform(this._controlPanelArn),
      gating_controls: cdktf.listMapper(cdktf.stringToTerraform)(this._gatingControls),
      name: cdktf.stringToTerraform(this._name),
      target_controls: cdktf.listMapper(cdktf.stringToTerraform)(this._targetControls),
      wait_period_ms: cdktf.numberToTerraform(this._waitPeriodMs),
      rule_config: cdktf.listMapper(route53RecoverycontrolconfigSafetyRuleRuleConfigToTerraform)(this._ruleConfig),
    };
  }
}
