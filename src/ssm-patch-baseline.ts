// https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsmPatchBaselineConfig extends cdktf.TerraformMetaArguments {
  readonly approvedPatches?: string[];
  readonly approvedPatchesComplianceLevel?: string;
  readonly description?: string;
  readonly name: string;
  readonly operatingSystem?: string;
  readonly rejectedPatches?: string[];
  readonly tags?: { [key: string]: string };
  /** approval_rule block */
  readonly approvalRule?: SsmPatchBaselineApprovalRule[];
  /** global_filter block */
  readonly globalFilter?: SsmPatchBaselineGlobalFilter[];
}
export interface SsmPatchBaselineApprovalRulePatchFilter {
  readonly key: string;
  readonly values: string[];
}

function ssmPatchBaselineApprovalRulePatchFilterToTerraform(struct?: SsmPatchBaselineApprovalRulePatchFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface SsmPatchBaselineApprovalRule {
  readonly approveAfterDays: number;
  readonly complianceLevel?: string;
  readonly enableNonSecurity?: boolean;
  /** patch_filter block */
  readonly patchFilter: SsmPatchBaselineApprovalRulePatchFilter[];
}

function ssmPatchBaselineApprovalRuleToTerraform(struct?: SsmPatchBaselineApprovalRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    approve_after_days: cdktf.numberToTerraform(struct!.approveAfterDays),
    compliance_level: cdktf.stringToTerraform(struct!.complianceLevel),
    enable_non_security: cdktf.booleanToTerraform(struct!.enableNonSecurity),
    patch_filter: cdktf.listMapper(ssmPatchBaselineApprovalRulePatchFilterToTerraform)(struct!.patchFilter),
  }
}

export interface SsmPatchBaselineGlobalFilter {
  readonly key: string;
  readonly values: string[];
}

function ssmPatchBaselineGlobalFilterToTerraform(struct?: SsmPatchBaselineGlobalFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


// Resource

export class SsmPatchBaseline extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._description = config.description;
    this._name = config.name;
    this._operatingSystem = config.operatingSystem;
    this._rejectedPatches = config.rejectedPatches;
    this._tags = config.tags;
    this._approvalRule = config.approvalRule;
    this._globalFilter = config.globalFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // approved_patches - computed: false, optional: true, required: false
  private _approvedPatches?: string[];
  public get approvedPatches() {
    return this.getListAttribute('approved_patches');
  }
  public set approvedPatches(value: string[] ) {
    this._approvedPatches = value;
  }
  public resetApprovedPatches() {
    this._approvedPatches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvedPatchesInput() {
    return this._approvedPatches
  }

  // approved_patches_compliance_level - computed: false, optional: true, required: false
  private _approvedPatchesComplianceLevel?: string;
  public get approvedPatchesComplianceLevel() {
    return this.getStringAttribute('approved_patches_compliance_level');
  }
  public set approvedPatchesComplianceLevel(value: string ) {
    this._approvedPatchesComplianceLevel = value;
  }
  public resetApprovedPatchesComplianceLevel() {
    this._approvedPatchesComplianceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvedPatchesComplianceLevelInput() {
    return this._approvedPatchesComplianceLevel
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
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

  // operating_system - computed: false, optional: true, required: false
  private _operatingSystem?: string;
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }
  public set operatingSystem(value: string ) {
    this._operatingSystem = value;
  }
  public resetOperatingSystem() {
    this._operatingSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemInput() {
    return this._operatingSystem
  }

  // rejected_patches - computed: false, optional: true, required: false
  private _rejectedPatches?: string[];
  public get rejectedPatches() {
    return this.getListAttribute('rejected_patches');
  }
  public set rejectedPatches(value: string[] ) {
    this._rejectedPatches = value;
  }
  public resetRejectedPatches() {
    this._rejectedPatches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectedPatchesInput() {
    return this._rejectedPatches
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

  // approval_rule - computed: false, optional: true, required: false
  private _approvalRule?: SsmPatchBaselineApprovalRule[];
  public get approvalRule() {
    return this.interpolationForAttribute('approval_rule') as any;
  }
  public set approvalRule(value: SsmPatchBaselineApprovalRule[] ) {
    this._approvalRule = value;
  }
  public resetApprovalRule() {
    this._approvalRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalRuleInput() {
    return this._approvalRule
  }

  // global_filter - computed: false, optional: true, required: false
  private _globalFilter?: SsmPatchBaselineGlobalFilter[];
  public get globalFilter() {
    return this.interpolationForAttribute('global_filter') as any;
  }
  public set globalFilter(value: SsmPatchBaselineGlobalFilter[] ) {
    this._globalFilter = value;
  }
  public resetGlobalFilter() {
    this._globalFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalFilterInput() {
    return this._globalFilter
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      approved_patches: cdktf.listMapper(cdktf.stringToTerraform)(this._approvedPatches),
      approved_patches_compliance_level: cdktf.stringToTerraform(this._approvedPatchesComplianceLevel),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      operating_system: cdktf.stringToTerraform(this._operatingSystem),
      rejected_patches: cdktf.listMapper(cdktf.stringToTerraform)(this._rejectedPatches),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      approval_rule: cdktf.listMapper(ssmPatchBaselineApprovalRuleToTerraform)(this._approvalRule),
      global_filter: cdktf.listMapper(ssmPatchBaselineGlobalFilterToTerraform)(this._globalFilter),
    };
  }
}
