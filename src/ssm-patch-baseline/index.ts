/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/ssm_patch_baseline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsmPatchBaselineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/ssm_patch_baseline#approved_patches SsmPatchBaseline#approved_patches}
  */
  readonly approvedPatches?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/ssm_patch_baseline#approved_patches_compliance_level SsmPatchBaseline#approved_patches_compliance_level}
  */
  readonly approvedPatchesComplianceLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/ssm_patch_baseline#approved_patches_enable_non_security SsmPatchBaseline#approved_patches_enable_non_security}
  */
  readonly approvedPatchesEnableNonSecurity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/ssm_patch_baseline#available_security_updates_compliance_status SsmPatchBaseline#available_security_updates_compliance_status}
  */
  readonly availableSecurityUpdatesComplianceStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/ssm_patch_baseline#description SsmPatchBaseline#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/ssm_patch_baseline#id SsmPatchBaseline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/ssm_patch_baseline#name SsmPatchBaseline#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/ssm_patch_baseline#operating_system SsmPatchBaseline#operating_system}
  */
  readonly operatingSystem?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/ssm_patch_baseline#region SsmPatchBaseline#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/ssm_patch_baseline#rejected_patches SsmPatchBaseline#rejected_patches}
  */
  readonly rejectedPatches?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/ssm_patch_baseline#rejected_patches_action SsmPatchBaseline#rejected_patches_action}
  */
  readonly rejectedPatchesAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/ssm_patch_baseline#tags SsmPatchBaseline#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/ssm_patch_baseline#tags_all SsmPatchBaseline#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * approval_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/ssm_patch_baseline#approval_rule SsmPatchBaseline#approval_rule}
  */
  readonly approvalRule?: SsmPatchBaselineApprovalRule[] | cdktf.IResolvable;
  /**
  * global_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/ssm_patch_baseline#global_filter SsmPatchBaseline#global_filter}
  */
  readonly globalFilter?: SsmPatchBaselineGlobalFilter[] | cdktf.IResolvable;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/ssm_patch_baseline#source SsmPatchBaseline#source}
  */
  readonly source?: SsmPatchBaselineSource[] | cdktf.IResolvable;
}
export interface SsmPatchBaselineApprovalRulePatchFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/ssm_patch_baseline#key SsmPatchBaseline#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/ssm_patch_baseline#values SsmPatchBaseline#values}
  */
  readonly values: string[];
}

export function ssmPatchBaselineApprovalRulePatchFilterToTerraform(struct?: SsmPatchBaselineApprovalRulePatchFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function ssmPatchBaselineApprovalRulePatchFilterToHclTerraform(struct?: SsmPatchBaselineApprovalRulePatchFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmPatchBaselineApprovalRulePatchFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SsmPatchBaselineApprovalRulePatchFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmPatchBaselineApprovalRulePatchFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class SsmPatchBaselineApprovalRulePatchFilterList extends cdktf.ComplexList {
  public internalValue? : SsmPatchBaselineApprovalRulePatchFilter[] | cdktf.IResolvable

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
  public get(index: number): SsmPatchBaselineApprovalRulePatchFilterOutputReference {
    return new SsmPatchBaselineApprovalRulePatchFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsmPatchBaselineApprovalRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/ssm_patch_baseline#approve_after_days SsmPatchBaseline#approve_after_days}
  */
  readonly approveAfterDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/ssm_patch_baseline#approve_until_date SsmPatchBaseline#approve_until_date}
  */
  readonly approveUntilDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/ssm_patch_baseline#compliance_level SsmPatchBaseline#compliance_level}
  */
  readonly complianceLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/ssm_patch_baseline#enable_non_security SsmPatchBaseline#enable_non_security}
  */
  readonly enableNonSecurity?: boolean | cdktf.IResolvable;
  /**
  * patch_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/ssm_patch_baseline#patch_filter SsmPatchBaseline#patch_filter}
  */
  readonly patchFilter: SsmPatchBaselineApprovalRulePatchFilter[] | cdktf.IResolvable;
}

export function ssmPatchBaselineApprovalRuleToTerraform(struct?: SsmPatchBaselineApprovalRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    approve_after_days: cdktf.numberToTerraform(struct!.approveAfterDays),
    approve_until_date: cdktf.stringToTerraform(struct!.approveUntilDate),
    compliance_level: cdktf.stringToTerraform(struct!.complianceLevel),
    enable_non_security: cdktf.booleanToTerraform(struct!.enableNonSecurity),
    patch_filter: cdktf.listMapper(ssmPatchBaselineApprovalRulePatchFilterToTerraform, true)(struct!.patchFilter),
  }
}


export function ssmPatchBaselineApprovalRuleToHclTerraform(struct?: SsmPatchBaselineApprovalRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    approve_after_days: {
      value: cdktf.numberToHclTerraform(struct!.approveAfterDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    approve_until_date: {
      value: cdktf.stringToHclTerraform(struct!.approveUntilDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compliance_level: {
      value: cdktf.stringToHclTerraform(struct!.complianceLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_non_security: {
      value: cdktf.booleanToHclTerraform(struct!.enableNonSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    patch_filter: {
      value: cdktf.listMapperHcl(ssmPatchBaselineApprovalRulePatchFilterToHclTerraform, true)(struct!.patchFilter),
      isBlock: true,
      type: "list",
      storageClassType: "SsmPatchBaselineApprovalRulePatchFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmPatchBaselineApprovalRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SsmPatchBaselineApprovalRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._approveAfterDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.approveAfterDays = this._approveAfterDays;
    }
    if (this._approveUntilDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.approveUntilDate = this._approveUntilDate;
    }
    if (this._complianceLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.complianceLevel = this._complianceLevel;
    }
    if (this._enableNonSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNonSecurity = this._enableNonSecurity;
    }
    if (this._patchFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patchFilter = this._patchFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmPatchBaselineApprovalRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._approveAfterDays = undefined;
      this._approveUntilDate = undefined;
      this._complianceLevel = undefined;
      this._enableNonSecurity = undefined;
      this._patchFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._approveAfterDays = value.approveAfterDays;
      this._approveUntilDate = value.approveUntilDate;
      this._complianceLevel = value.complianceLevel;
      this._enableNonSecurity = value.enableNonSecurity;
      this._patchFilter.internalValue = value.patchFilter;
    }
  }

  // approve_after_days - computed: false, optional: true, required: false
  private _approveAfterDays?: number; 
  public get approveAfterDays() {
    return this.getNumberAttribute('approve_after_days');
  }
  public set approveAfterDays(value: number) {
    this._approveAfterDays = value;
  }
  public resetApproveAfterDays() {
    this._approveAfterDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approveAfterDaysInput() {
    return this._approveAfterDays;
  }

  // approve_until_date - computed: false, optional: true, required: false
  private _approveUntilDate?: string; 
  public get approveUntilDate() {
    return this.getStringAttribute('approve_until_date');
  }
  public set approveUntilDate(value: string) {
    this._approveUntilDate = value;
  }
  public resetApproveUntilDate() {
    this._approveUntilDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approveUntilDateInput() {
    return this._approveUntilDate;
  }

  // compliance_level - computed: false, optional: true, required: false
  private _complianceLevel?: string; 
  public get complianceLevel() {
    return this.getStringAttribute('compliance_level');
  }
  public set complianceLevel(value: string) {
    this._complianceLevel = value;
  }
  public resetComplianceLevel() {
    this._complianceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceLevelInput() {
    return this._complianceLevel;
  }

  // enable_non_security - computed: false, optional: true, required: false
  private _enableNonSecurity?: boolean | cdktf.IResolvable; 
  public get enableNonSecurity() {
    return this.getBooleanAttribute('enable_non_security');
  }
  public set enableNonSecurity(value: boolean | cdktf.IResolvable) {
    this._enableNonSecurity = value;
  }
  public resetEnableNonSecurity() {
    this._enableNonSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNonSecurityInput() {
    return this._enableNonSecurity;
  }

  // patch_filter - computed: false, optional: false, required: true
  private _patchFilter = new SsmPatchBaselineApprovalRulePatchFilterList(this, "patch_filter", false);
  public get patchFilter() {
    return this._patchFilter;
  }
  public putPatchFilter(value: SsmPatchBaselineApprovalRulePatchFilter[] | cdktf.IResolvable) {
    this._patchFilter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patchFilterInput() {
    return this._patchFilter.internalValue;
  }
}

export class SsmPatchBaselineApprovalRuleList extends cdktf.ComplexList {
  public internalValue? : SsmPatchBaselineApprovalRule[] | cdktf.IResolvable

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
  public get(index: number): SsmPatchBaselineApprovalRuleOutputReference {
    return new SsmPatchBaselineApprovalRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsmPatchBaselineGlobalFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/ssm_patch_baseline#key SsmPatchBaseline#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/ssm_patch_baseline#values SsmPatchBaseline#values}
  */
  readonly values: string[];
}

export function ssmPatchBaselineGlobalFilterToTerraform(struct?: SsmPatchBaselineGlobalFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function ssmPatchBaselineGlobalFilterToHclTerraform(struct?: SsmPatchBaselineGlobalFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmPatchBaselineGlobalFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SsmPatchBaselineGlobalFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmPatchBaselineGlobalFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class SsmPatchBaselineGlobalFilterList extends cdktf.ComplexList {
  public internalValue? : SsmPatchBaselineGlobalFilter[] | cdktf.IResolvable

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
  public get(index: number): SsmPatchBaselineGlobalFilterOutputReference {
    return new SsmPatchBaselineGlobalFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsmPatchBaselineSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/ssm_patch_baseline#configuration SsmPatchBaseline#configuration}
  */
  readonly configuration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/ssm_patch_baseline#name SsmPatchBaseline#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/ssm_patch_baseline#products SsmPatchBaseline#products}
  */
  readonly products: string[];
}

export function ssmPatchBaselineSourceToTerraform(struct?: SsmPatchBaselineSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.stringToTerraform(struct!.configuration),
    name: cdktf.stringToTerraform(struct!.name),
    products: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.products),
  }
}


export function ssmPatchBaselineSourceToHclTerraform(struct?: SsmPatchBaselineSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.stringToHclTerraform(struct!.configuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    products: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.products),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmPatchBaselineSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SsmPatchBaselineSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._products !== undefined) {
      hasAnyValues = true;
      internalValueResult.products = this._products;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmPatchBaselineSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuration = undefined;
      this._name = undefined;
      this._products = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuration = value.configuration;
      this._name = value.name;
      this._products = value.products;
    }
  }

  // configuration - computed: false, optional: false, required: true
  private _configuration?: string; 
  public get configuration() {
    return this.getStringAttribute('configuration');
  }
  public set configuration(value: string) {
    this._configuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
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

  // products - computed: false, optional: false, required: true
  private _products?: string[]; 
  public get products() {
    return this.getListAttribute('products');
  }
  public set products(value: string[]) {
    this._products = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productsInput() {
    return this._products;
  }
}

export class SsmPatchBaselineSourceList extends cdktf.ComplexList {
  public internalValue? : SsmPatchBaselineSource[] | cdktf.IResolvable

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
  public get(index: number): SsmPatchBaselineSourceOutputReference {
    return new SsmPatchBaselineSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/ssm_patch_baseline aws_ssm_patch_baseline}
*/
export class SsmPatchBaseline extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ssm_patch_baseline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SsmPatchBaseline resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SsmPatchBaseline to import
  * @param importFromId The id of the existing SsmPatchBaseline that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/ssm_patch_baseline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SsmPatchBaseline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ssm_patch_baseline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/ssm_patch_baseline aws_ssm_patch_baseline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsmPatchBaselineConfig
  */
  public constructor(scope: Construct, id: string, config: SsmPatchBaselineConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssm_patch_baseline',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.14.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._approvedPatches = config.approvedPatches;
    this._approvedPatchesComplianceLevel = config.approvedPatchesComplianceLevel;
    this._approvedPatchesEnableNonSecurity = config.approvedPatchesEnableNonSecurity;
    this._availableSecurityUpdatesComplianceStatus = config.availableSecurityUpdatesComplianceStatus;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._operatingSystem = config.operatingSystem;
    this._region = config.region;
    this._rejectedPatches = config.rejectedPatches;
    this._rejectedPatchesAction = config.rejectedPatchesAction;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._approvalRule.internalValue = config.approvalRule;
    this._globalFilter.internalValue = config.globalFilter;
    this._source.internalValue = config.source;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // approved_patches - computed: false, optional: true, required: false
  private _approvedPatches?: string[]; 
  public get approvedPatches() {
    return cdktf.Fn.tolist(this.getListAttribute('approved_patches'));
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
    return this.getBooleanAttribute('approved_patches_enable_non_security');
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

  // available_security_updates_compliance_status - computed: true, optional: true, required: false
  private _availableSecurityUpdatesComplianceStatus?: string; 
  public get availableSecurityUpdatesComplianceStatus() {
    return this.getStringAttribute('available_security_updates_compliance_status');
  }
  public set availableSecurityUpdatesComplianceStatus(value: string) {
    this._availableSecurityUpdatesComplianceStatus = value;
  }
  public resetAvailableSecurityUpdatesComplianceStatus() {
    this._availableSecurityUpdatesComplianceStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availableSecurityUpdatesComplianceStatusInput() {
    return this._availableSecurityUpdatesComplianceStatus;
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

  // json - computed: true, optional: false, required: false
  public get json() {
    return this.getStringAttribute('json');
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // rejected_patches - computed: false, optional: true, required: false
  private _rejectedPatches?: string[]; 
  public get rejectedPatches() {
    return cdktf.Fn.tolist(this.getListAttribute('rejected_patches'));
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
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
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
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
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
  private _approvalRule = new SsmPatchBaselineApprovalRuleList(this, "approval_rule", false);
  public get approvalRule() {
    return this._approvalRule;
  }
  public putApprovalRule(value: SsmPatchBaselineApprovalRule[] | cdktf.IResolvable) {
    this._approvalRule.internalValue = value;
  }
  public resetApprovalRule() {
    this._approvalRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalRuleInput() {
    return this._approvalRule.internalValue;
  }

  // global_filter - computed: false, optional: true, required: false
  private _globalFilter = new SsmPatchBaselineGlobalFilterList(this, "global_filter", false);
  public get globalFilter() {
    return this._globalFilter;
  }
  public putGlobalFilter(value: SsmPatchBaselineGlobalFilter[] | cdktf.IResolvable) {
    this._globalFilter.internalValue = value;
  }
  public resetGlobalFilter() {
    this._globalFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalFilterInput() {
    return this._globalFilter.internalValue;
  }

  // source - computed: false, optional: true, required: false
  private _source = new SsmPatchBaselineSourceList(this, "source", false);
  public get source() {
    return this._source;
  }
  public putSource(value: SsmPatchBaselineSource[] | cdktf.IResolvable) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      approved_patches: cdktf.listMapper(cdktf.stringToTerraform, false)(this._approvedPatches),
      approved_patches_compliance_level: cdktf.stringToTerraform(this._approvedPatchesComplianceLevel),
      approved_patches_enable_non_security: cdktf.booleanToTerraform(this._approvedPatchesEnableNonSecurity),
      available_security_updates_compliance_status: cdktf.stringToTerraform(this._availableSecurityUpdatesComplianceStatus),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      operating_system: cdktf.stringToTerraform(this._operatingSystem),
      region: cdktf.stringToTerraform(this._region),
      rejected_patches: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rejectedPatches),
      rejected_patches_action: cdktf.stringToTerraform(this._rejectedPatchesAction),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      approval_rule: cdktf.listMapper(ssmPatchBaselineApprovalRuleToTerraform, true)(this._approvalRule.internalValue),
      global_filter: cdktf.listMapper(ssmPatchBaselineGlobalFilterToTerraform, true)(this._globalFilter.internalValue),
      source: cdktf.listMapper(ssmPatchBaselineSourceToTerraform, true)(this._source.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      approved_patches: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._approvedPatches),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      approved_patches_compliance_level: {
        value: cdktf.stringToHclTerraform(this._approvedPatchesComplianceLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      approved_patches_enable_non_security: {
        value: cdktf.booleanToHclTerraform(this._approvedPatchesEnableNonSecurity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      available_security_updates_compliance_status: {
        value: cdktf.stringToHclTerraform(this._availableSecurityUpdatesComplianceStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operating_system: {
        value: cdktf.stringToHclTerraform(this._operatingSystem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rejected_patches: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._rejectedPatches),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      rejected_patches_action: {
        value: cdktf.stringToHclTerraform(this._rejectedPatchesAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      approval_rule: {
        value: cdktf.listMapperHcl(ssmPatchBaselineApprovalRuleToHclTerraform, true)(this._approvalRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SsmPatchBaselineApprovalRuleList",
      },
      global_filter: {
        value: cdktf.listMapperHcl(ssmPatchBaselineGlobalFilterToHclTerraform, true)(this._globalFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SsmPatchBaselineGlobalFilterList",
      },
      source: {
        value: cdktf.listMapperHcl(ssmPatchBaselineSourceToHclTerraform, true)(this._source.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SsmPatchBaselineSourceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
