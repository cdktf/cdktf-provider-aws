// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Route 53
*/
export interface Route53RecoverycontrolconfigSafetyRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#asserted_controls Route53RecoverycontrolconfigSafetyRule#asserted_controls}
  */
  readonly assertedControls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#control_panel_arn Route53RecoverycontrolconfigSafetyRule#control_panel_arn}
  */
  readonly controlPanelArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#gating_controls Route53RecoverycontrolconfigSafetyRule#gating_controls}
  */
  readonly gatingControls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#name Route53RecoverycontrolconfigSafetyRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#target_controls Route53RecoverycontrolconfigSafetyRule#target_controls}
  */
  readonly targetControls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#wait_period_ms Route53RecoverycontrolconfigSafetyRule#wait_period_ms}
  */
  readonly waitPeriodMs: number;
  /**
  * rule_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#rule_config Route53RecoverycontrolconfigSafetyRule#rule_config}
  */
  readonly ruleConfig: Route53RecoverycontrolconfigSafetyRuleRuleConfig;
}
export interface Route53RecoverycontrolconfigSafetyRuleRuleConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#inverted Route53RecoverycontrolconfigSafetyRule#inverted}
  */
  readonly inverted: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#threshold Route53RecoverycontrolconfigSafetyRule#threshold}
  */
  readonly threshold: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#type Route53RecoverycontrolconfigSafetyRule#type}
  */
  readonly type: string;
}

export function route53RecoverycontrolconfigSafetyRuleRuleConfigToTerraform(struct?: Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference | Route53RecoverycontrolconfigSafetyRuleRuleConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inverted: cdktf.booleanToTerraform(struct!.inverted),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): Route53RecoverycontrolconfigSafetyRuleRuleConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inverted !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverted = this._inverted;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Route53RecoverycontrolconfigSafetyRuleRuleConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inverted = undefined;
      this._threshold = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inverted = value.inverted;
      this._threshold = value.threshold;
      this._type = value.type;
    }
  }

  // inverted - computed: false, optional: false, required: true
  private _inverted?: boolean | cdktf.IResolvable; 
  public get inverted() {
    return this.getBooleanAttribute('inverted');
  }
  public set inverted(value: boolean | cdktf.IResolvable) {
    this._inverted = value;
  }
  // Temporarily expose input value. Use with caution.
  public get invertedInput() {
    return this._inverted;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule aws_route53recoverycontrolconfig_safety_rule}
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
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule aws_route53recoverycontrolconfig_safety_rule} Resource
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
    this._ruleConfig.internalValue = config.ruleConfig;
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
  public set assertedControls(value: string[]) {
    this._assertedControls = value;
  }
  public resetAssertedControls() {
    this._assertedControls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertedControlsInput() {
    return this._assertedControls;
  }

  // control_panel_arn - computed: false, optional: false, required: true
  private _controlPanelArn?: string; 
  public get controlPanelArn() {
    return this.getStringAttribute('control_panel_arn');
  }
  public set controlPanelArn(value: string) {
    this._controlPanelArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPanelArnInput() {
    return this._controlPanelArn;
  }

  // gating_controls - computed: false, optional: true, required: false
  private _gatingControls?: string[]; 
  public get gatingControls() {
    return this.getListAttribute('gating_controls');
  }
  public set gatingControls(value: string[]) {
    this._gatingControls = value;
  }
  public resetGatingControls() {
    this._gatingControls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatingControlsInput() {
    return this._gatingControls;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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
  public set targetControls(value: string[]) {
    this._targetControls = value;
  }
  public resetTargetControls() {
    this._targetControls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetControlsInput() {
    return this._targetControls;
  }

  // wait_period_ms - computed: false, optional: false, required: true
  private _waitPeriodMs?: number; 
  public get waitPeriodMs() {
    return this.getNumberAttribute('wait_period_ms');
  }
  public set waitPeriodMs(value: number) {
    this._waitPeriodMs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get waitPeriodMsInput() {
    return this._waitPeriodMs;
  }

  // rule_config - computed: false, optional: false, required: true
  private _ruleConfig = new Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference(this, "rule_config", true);
  public get ruleConfig() {
    return this._ruleConfig;
  }
  public putRuleConfig(value: Route53RecoverycontrolconfigSafetyRuleRuleConfig) {
    this._ruleConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleConfigInput() {
    return this._ruleConfig.internalValue;
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
      rule_config: route53RecoverycontrolconfigSafetyRuleRuleConfigToTerraform(this._ruleConfig.internalValue),
    };
  }
}
