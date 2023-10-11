// https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkvoice_sip_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ChimesdkvoiceSipRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkvoice_sip_rule#disabled ChimesdkvoiceSipRule#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkvoice_sip_rule#id ChimesdkvoiceSipRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkvoice_sip_rule#name ChimesdkvoiceSipRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkvoice_sip_rule#trigger_type ChimesdkvoiceSipRule#trigger_type}
  */
  readonly triggerType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkvoice_sip_rule#trigger_value ChimesdkvoiceSipRule#trigger_value}
  */
  readonly triggerValue: string;
  /**
  * target_applications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkvoice_sip_rule#target_applications ChimesdkvoiceSipRule#target_applications}
  */
  readonly targetApplications: ChimesdkvoiceSipRuleTargetApplications[] | cdktf.IResolvable;
}
export interface ChimesdkvoiceSipRuleTargetApplications {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkvoice_sip_rule#aws_region ChimesdkvoiceSipRule#aws_region}
  */
  readonly awsRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkvoice_sip_rule#priority ChimesdkvoiceSipRule#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkvoice_sip_rule#sip_media_application_id ChimesdkvoiceSipRule#sip_media_application_id}
  */
  readonly sipMediaApplicationId: string;
}

export function chimesdkvoiceSipRuleTargetApplicationsToTerraform(struct?: ChimesdkvoiceSipRuleTargetApplications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_region: cdktf.stringToTerraform(struct!.awsRegion),
    priority: cdktf.numberToTerraform(struct!.priority),
    sip_media_application_id: cdktf.stringToTerraform(struct!.sipMediaApplicationId),
  }
}

export class ChimesdkvoiceSipRuleTargetApplicationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ChimesdkvoiceSipRuleTargetApplications | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._sipMediaApplicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipMediaApplicationId = this._sipMediaApplicationId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChimesdkvoiceSipRuleTargetApplications | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsRegion = undefined;
      this._priority = undefined;
      this._sipMediaApplicationId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsRegion = value.awsRegion;
      this._priority = value.priority;
      this._sipMediaApplicationId = value.sipMediaApplicationId;
    }
  }

  // aws_region - computed: false, optional: false, required: true
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // sip_media_application_id - computed: false, optional: false, required: true
  private _sipMediaApplicationId?: string; 
  public get sipMediaApplicationId() {
    return this.getStringAttribute('sip_media_application_id');
  }
  public set sipMediaApplicationId(value: string) {
    this._sipMediaApplicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sipMediaApplicationIdInput() {
    return this._sipMediaApplicationId;
  }
}

export class ChimesdkvoiceSipRuleTargetApplicationsList extends cdktf.ComplexList {
  public internalValue? : ChimesdkvoiceSipRuleTargetApplications[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ChimesdkvoiceSipRuleTargetApplicationsOutputReference {
    return new ChimesdkvoiceSipRuleTargetApplicationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkvoice_sip_rule aws_chimesdkvoice_sip_rule}
*/
export class ChimesdkvoiceSipRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_chimesdkvoice_sip_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkvoice_sip_rule aws_chimesdkvoice_sip_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChimesdkvoiceSipRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ChimesdkvoiceSipRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_chimesdkvoice_sip_rule',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.20.1',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._disabled = config.disabled;
    this._id = config.id;
    this._name = config.name;
    this._triggerType = config.triggerType;
    this._triggerValue = config.triggerValue;
    this._targetApplications.internalValue = config.targetApplications;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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

  // trigger_type - computed: false, optional: false, required: true
  private _triggerType?: string; 
  public get triggerType() {
    return this.getStringAttribute('trigger_type');
  }
  public set triggerType(value: string) {
    this._triggerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerTypeInput() {
    return this._triggerType;
  }

  // trigger_value - computed: false, optional: false, required: true
  private _triggerValue?: string; 
  public get triggerValue() {
    return this.getStringAttribute('trigger_value');
  }
  public set triggerValue(value: string) {
    this._triggerValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerValueInput() {
    return this._triggerValue;
  }

  // target_applications - computed: false, optional: false, required: true
  private _targetApplications = new ChimesdkvoiceSipRuleTargetApplicationsList(this, "target_applications", true);
  public get targetApplications() {
    return this._targetApplications;
  }
  public putTargetApplications(value: ChimesdkvoiceSipRuleTargetApplications[] | cdktf.IResolvable) {
    this._targetApplications.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetApplicationsInput() {
    return this._targetApplications.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      trigger_type: cdktf.stringToTerraform(this._triggerType),
      trigger_value: cdktf.stringToTerraform(this._triggerValue),
      target_applications: cdktf.listMapper(chimesdkvoiceSipRuleTargetApplicationsToTerraform, true)(this._targetApplications.internalValue),
    };
  }
}
