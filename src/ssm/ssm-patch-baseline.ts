// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Systems Manager
*/
export interface SsmPatchBaselineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#approved_patches SsmPatchBaseline#approved_patches}
  */
  readonly approvedPatches?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#approved_patches_compliance_level SsmPatchBaseline#approved_patches_compliance_level}
  */
  readonly approvedPatchesComplianceLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#approved_patches_enable_non_security SsmPatchBaseline#approved_patches_enable_non_security}
  */
  readonly approvedPatchesEnableNonSecurity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#description SsmPatchBaseline#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#name SsmPatchBaseline#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#operating_system SsmPatchBaseline#operating_system}
  */
  readonly operatingSystem?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#rejected_patches SsmPatchBaseline#rejected_patches}
  */
  readonly rejectedPatches?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#rejected_patches_action SsmPatchBaseline#rejected_patches_action}
  */
  readonly rejectedPatchesAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#tags SsmPatchBaseline#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#tags_all SsmPatchBaseline#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * approval_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#approval_rule SsmPatchBaseline#approval_rule}
  */
  readonly approvalRule?: SsmPatchBaselineApprovalRule[];
  /**
  * global_filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#global_filter SsmPatchBaseline#global_filter}
  */
  readonly globalFilter?: SsmPatchBaselineGlobalFilter[];
  /**
  * source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#source SsmPatchBaseline#source}
  */
  readonly source?: SsmPatchBaselineSource[];
}
export interface SsmPatchBaselineApprovalRulePatchFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#key SsmPatchBaseline#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#values SsmPatchBaseline#values}
  */
  readonly values: string[];
}

export function ssmPatchBaselineApprovalRulePatchFilterToTerraform(struct?: SsmPatchBaselineApprovalRulePatchFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface SsmPatchBaselineApprovalRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#approve_after_days SsmPatchBaseline#approve_after_days}
  */
  readonly approveAfterDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#approve_until_date SsmPatchBaseline#approve_until_date}
  */
  readonly approveUntilDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#compliance_level SsmPatchBaseline#compliance_level}
  */
  readonly complianceLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#enable_non_security SsmPatchBaseline#enable_non_security}
  */
  readonly enableNonSecurity?: boolean | cdktf.IResolvable;
  /**
  * patch_filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#patch_filter SsmPatchBaseline#patch_filter}
  */
  readonly patchFilter: SsmPatchBaselineApprovalRulePatchFilter[];
}

export function ssmPatchBaselineApprovalRuleToTerraform(struct?: SsmPatchBaselineApprovalRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    approve_after_days: cdktf.numberToTerraform(struct!.approveAfterDays),
    approve_until_date: cdktf.stringToTerraform(struct!.approveUntilDate),
    compliance_level: cdktf.stringToTerraform(struct!.complianceLevel),
    enable_non_security: cdktf.booleanToTerraform(struct!.enableNonSecurity),
    patch_filter: cdktf.listMapper(ssmPatchBaselineApprovalRulePatchFilterToTerraform)(struct!.patchFilter),
  }
}

export interface SsmPatchBaselineGlobalFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#key SsmPatchBaseline#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#values SsmPatchBaseline#values}
  */
  readonly values: string[];
}

export function ssmPatchBaselineGlobalFilterToTerraform(struct?: SsmPatchBaselineGlobalFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface SsmPatchBaselineSource {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#configuration SsmPatchBaseline#configuration}
  */
  readonly configuration: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#name SsmPatchBaseline#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#products SsmPatchBaseline#products}
  */
  readonly products: string[];
}

export function ssmPatchBaselineSourceToTerraform(struct?: SsmPatchBaselineSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.stringToTerraform(struct!.configuration),
    name: cdktf.stringToTerraform(struct!.name),
    products: cdktf.listMapper(cdktf.stringToTerraform)(struct!.products),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html aws_ssm_patch_baseline}
*/
export class SsmPatchBaseline extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ssm_patch_baseline";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html aws_ssm_patch_baseline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsmPatchBaselineConfig
  */
  public constructor(scope: Construct, id: string, config: SsmPatchBaselineConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssm_patch_baseline',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._approvedPatches = config.approvedPatches;
    this._approvedPatchesComplianceLevel = config.approvedPatchesComplianceLevel;
    this._approvedPatchesEnableNonSecurity = config.approvedPatchesEnableNonSecurity;
    this._description = config.description;
    this._name = config.name;
    this._operatingSystem = config.operatingSystem;
    this._rejectedPatches = config.rejectedPatches;
    this._rejectedPatchesAction = config.rejectedPatchesAction;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._approvalRule = config.approvalRule;
    this._globalFilter = config.globalFilter;
    this._source = config.source;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // approved_patches - computed: false, optional: true, required: false
  private _approvedPatches?: string[]; 
  public get approvedPatches() {
    return this.getListAttribute('approved_patches');
  }
  public set approvedPatches(value: string[]) {
    this._approvedPatches = value;
  }
  public resetApprovedPatches() {
    this._approvedPatches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvedPatchesInput() {
    return this._approvedPatches;
  }

  // approved_patches_compliance_level - computed: false, optional: true, required: false
  private _approvedPatchesComplianceLevel?: string; 
  public get approvedPatchesComplianceLevel() {
    return this.getStringAttribute('approved_patches_compliance_level');
  }
  public set approvedPatchesComplianceLevel(value: string) {
    this._approvedPatchesComplianceLevel = value;
  }
  public resetApprovedPatchesComplianceLevel() {
    this._approvedPatchesComplianceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvedPatchesComplianceLevelInput() {
    return this._approvedPatchesComplianceLevel;
  }

  // approved_patches_enable_non_security - computed: false, optional: true, required: false
  private _approvedPatchesEnableNonSecurity?: boolean | cdktf.IResolvable; 
  public get approvedPatchesEnableNonSecurity() {
    return this.getBooleanAttribute('approved_patches_enable_non_security') as any;
  }
  public set approvedPatchesEnableNonSecurity(value: boolean | cdktf.IResolvable) {
    this._approvedPatchesEnableNonSecurity = value;
  }
  public resetApprovedPatchesEnableNonSecurity() {
    this._approvedPatchesEnableNonSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvedPatchesEnableNonSecurityInput() {
    return this._approvedPatchesEnableNonSecurity;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // operating_system - computed: false, optional: true, required: false
  private _operatingSystem?: string; 
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }
  public set operatingSystem(value: string) {
    this._operatingSystem = value;
  }
  public resetOperatingSystem() {
    this._operatingSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemInput() {
    return this._operatingSystem;
  }

  // rejected_patches - computed: false, optional: true, required: false
  private _rejectedPatches?: string[]; 
  public get rejectedPatches() {
    return this.getListAttribute('rejected_patches');
  }
  public set rejectedPatches(value: string[]) {
    this._rejectedPatches = value;
  }
  public resetRejectedPatches() {
    this._rejectedPatches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectedPatchesInput() {
    return this._rejectedPatches;
  }

  // rejected_patches_action - computed: true, optional: true, required: false
  private _rejectedPatchesAction?: string; 
  public get rejectedPatchesAction() {
    return this.getStringAttribute('rejected_patches_action');
  }
  public set rejectedPatchesAction(value: string) {
    this._rejectedPatchesAction = value;
  }
  public resetRejectedPatchesAction() {
    this._rejectedPatchesAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectedPatchesActionInput() {
    return this._rejectedPatchesAction;
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

  // approval_rule - computed: false, optional: true, required: false
  private _approvalRule?: SsmPatchBaselineApprovalRule[]; 
  public get approvalRule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('approval_rule') as any;
  }
  public set approvalRule(value: SsmPatchBaselineApprovalRule[]) {
    this._approvalRule = value;
  }
  public resetApprovalRule() {
    this._approvalRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalRuleInput() {
    return this._approvalRule;
  }

  // global_filter - computed: false, optional: true, required: false
  private _globalFilter?: SsmPatchBaselineGlobalFilter[]; 
  public get globalFilter() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('global_filter') as any;
  }
  public set globalFilter(value: SsmPatchBaselineGlobalFilter[]) {
    this._globalFilter = value;
  }
  public resetGlobalFilter() {
    this._globalFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalFilterInput() {
    return this._globalFilter;
  }

  // source - computed: false, optional: true, required: false
  private _source?: SsmPatchBaselineSource[]; 
  public get source() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('source') as any;
  }
  public set source(value: SsmPatchBaselineSource[]) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      approved_patches: cdktf.listMapper(cdktf.stringToTerraform)(this._approvedPatches),
      approved_patches_compliance_level: cdktf.stringToTerraform(this._approvedPatchesComplianceLevel),
      approved_patches_enable_non_security: cdktf.booleanToTerraform(this._approvedPatchesEnableNonSecurity),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      operating_system: cdktf.stringToTerraform(this._operatingSystem),
      rejected_patches: cdktf.listMapper(cdktf.stringToTerraform)(this._rejectedPatches),
      rejected_patches_action: cdktf.stringToTerraform(this._rejectedPatchesAction),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      approval_rule: cdktf.listMapper(ssmPatchBaselineApprovalRuleToTerraform)(this._approvalRule),
      global_filter: cdktf.listMapper(ssmPatchBaselineGlobalFilterToTerraform)(this._globalFilter),
      source: cdktf.listMapper(ssmPatchBaselineSourceToTerraform)(this._source),
    };
  }
}
