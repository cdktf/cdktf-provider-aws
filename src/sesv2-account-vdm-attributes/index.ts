// https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/sesv2_account_vdm_attributes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Sesv2AccountVdmAttributesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/sesv2_account_vdm_attributes#id Sesv2AccountVdmAttributes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/sesv2_account_vdm_attributes#vdm_enabled Sesv2AccountVdmAttributes#vdm_enabled}
  */
  readonly vdmEnabled: string;
  /**
  * dashboard_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/sesv2_account_vdm_attributes#dashboard_attributes Sesv2AccountVdmAttributes#dashboard_attributes}
  */
  readonly dashboardAttributes?: Sesv2AccountVdmAttributesDashboardAttributes;
  /**
  * guardian_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/sesv2_account_vdm_attributes#guardian_attributes Sesv2AccountVdmAttributes#guardian_attributes}
  */
  readonly guardianAttributes?: Sesv2AccountVdmAttributesGuardianAttributes;
}
export interface Sesv2AccountVdmAttributesDashboardAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/sesv2_account_vdm_attributes#engagement_metrics Sesv2AccountVdmAttributes#engagement_metrics}
  */
  readonly engagementMetrics?: string;
}

export function sesv2AccountVdmAttributesDashboardAttributesToTerraform(struct?: Sesv2AccountVdmAttributesDashboardAttributesOutputReference | Sesv2AccountVdmAttributesDashboardAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    engagement_metrics: cdktf.stringToTerraform(struct!.engagementMetrics),
  }
}

export class Sesv2AccountVdmAttributesDashboardAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Sesv2AccountVdmAttributesDashboardAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._engagementMetrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.engagementMetrics = this._engagementMetrics;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Sesv2AccountVdmAttributesDashboardAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._engagementMetrics = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._engagementMetrics = value.engagementMetrics;
    }
  }

  // engagement_metrics - computed: false, optional: true, required: false
  private _engagementMetrics?: string; 
  public get engagementMetrics() {
    return this.getStringAttribute('engagement_metrics');
  }
  public set engagementMetrics(value: string) {
    this._engagementMetrics = value;
  }
  public resetEngagementMetrics() {
    this._engagementMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engagementMetricsInput() {
    return this._engagementMetrics;
  }
}
export interface Sesv2AccountVdmAttributesGuardianAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/sesv2_account_vdm_attributes#optimized_shared_delivery Sesv2AccountVdmAttributes#optimized_shared_delivery}
  */
  readonly optimizedSharedDelivery?: string;
}

export function sesv2AccountVdmAttributesGuardianAttributesToTerraform(struct?: Sesv2AccountVdmAttributesGuardianAttributesOutputReference | Sesv2AccountVdmAttributesGuardianAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optimized_shared_delivery: cdktf.stringToTerraform(struct!.optimizedSharedDelivery),
  }
}

export class Sesv2AccountVdmAttributesGuardianAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Sesv2AccountVdmAttributesGuardianAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optimizedSharedDelivery !== undefined) {
      hasAnyValues = true;
      internalValueResult.optimizedSharedDelivery = this._optimizedSharedDelivery;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Sesv2AccountVdmAttributesGuardianAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._optimizedSharedDelivery = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._optimizedSharedDelivery = value.optimizedSharedDelivery;
    }
  }

  // optimized_shared_delivery - computed: false, optional: true, required: false
  private _optimizedSharedDelivery?: string; 
  public get optimizedSharedDelivery() {
    return this.getStringAttribute('optimized_shared_delivery');
  }
  public set optimizedSharedDelivery(value: string) {
    this._optimizedSharedDelivery = value;
  }
  public resetOptimizedSharedDelivery() {
    this._optimizedSharedDelivery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizedSharedDeliveryInput() {
    return this._optimizedSharedDelivery;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/sesv2_account_vdm_attributes aws_sesv2_account_vdm_attributes}
*/
export class Sesv2AccountVdmAttributes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sesv2_account_vdm_attributes";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/sesv2_account_vdm_attributes aws_sesv2_account_vdm_attributes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Sesv2AccountVdmAttributesConfig
  */
  public constructor(scope: Construct, id: string, config: Sesv2AccountVdmAttributesConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sesv2_account_vdm_attributes',
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
    this._id = config.id;
    this._vdmEnabled = config.vdmEnabled;
    this._dashboardAttributes.internalValue = config.dashboardAttributes;
    this._guardianAttributes.internalValue = config.guardianAttributes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // vdm_enabled - computed: false, optional: false, required: true
  private _vdmEnabled?: string; 
  public get vdmEnabled() {
    return this.getStringAttribute('vdm_enabled');
  }
  public set vdmEnabled(value: string) {
    this._vdmEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vdmEnabledInput() {
    return this._vdmEnabled;
  }

  // dashboard_attributes - computed: false, optional: true, required: false
  private _dashboardAttributes = new Sesv2AccountVdmAttributesDashboardAttributesOutputReference(this, "dashboard_attributes");
  public get dashboardAttributes() {
    return this._dashboardAttributes;
  }
  public putDashboardAttributes(value: Sesv2AccountVdmAttributesDashboardAttributes) {
    this._dashboardAttributes.internalValue = value;
  }
  public resetDashboardAttributes() {
    this._dashboardAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardAttributesInput() {
    return this._dashboardAttributes.internalValue;
  }

  // guardian_attributes - computed: false, optional: true, required: false
  private _guardianAttributes = new Sesv2AccountVdmAttributesGuardianAttributesOutputReference(this, "guardian_attributes");
  public get guardianAttributes() {
    return this._guardianAttributes;
  }
  public putGuardianAttributes(value: Sesv2AccountVdmAttributesGuardianAttributes) {
    this._guardianAttributes.internalValue = value;
  }
  public resetGuardianAttributes() {
    this._guardianAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guardianAttributesInput() {
    return this._guardianAttributes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      vdm_enabled: cdktf.stringToTerraform(this._vdmEnabled),
      dashboard_attributes: sesv2AccountVdmAttributesDashboardAttributesToTerraform(this._dashboardAttributes.internalValue),
      guardian_attributes: sesv2AccountVdmAttributesGuardianAttributesToTerraform(this._guardianAttributes.internalValue),
    };
  }
}
