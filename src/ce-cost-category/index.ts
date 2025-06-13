/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CeCostCategoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#default_value CeCostCategory#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#effective_start CeCostCategory#effective_start}
  */
  readonly effectiveStart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#id CeCostCategory#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#name CeCostCategory#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#rule_version CeCostCategory#rule_version}
  */
  readonly ruleVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#tags CeCostCategory#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#tags_all CeCostCategory#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#rule CeCostCategory#rule}
  */
  readonly rule: CeCostCategoryRule[] | cdktf.IResolvable;
  /**
  * split_charge_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#split_charge_rule CeCostCategory#split_charge_rule}
  */
  readonly splitChargeRule?: CeCostCategorySplitChargeRule[] | cdktf.IResolvable;
}
export interface CeCostCategoryRuleInheritedValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#dimension_key CeCostCategory#dimension_key}
  */
  readonly dimensionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#dimension_name CeCostCategory#dimension_name}
  */
  readonly dimensionName?: string;
}

export function ceCostCategoryRuleInheritedValueToTerraform(struct?: CeCostCategoryRuleInheritedValueOutputReference | CeCostCategoryRuleInheritedValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension_key: cdktf.stringToTerraform(struct!.dimensionKey),
    dimension_name: cdktf.stringToTerraform(struct!.dimensionName),
  }
}


export function ceCostCategoryRuleInheritedValueToHclTerraform(struct?: CeCostCategoryRuleInheritedValueOutputReference | CeCostCategoryRuleInheritedValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension_key: {
      value: cdktf.stringToHclTerraform(struct!.dimensionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimension_name: {
      value: cdktf.stringToHclTerraform(struct!.dimensionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleInheritedValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CeCostCategoryRuleInheritedValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionKey = this._dimensionKey;
    }
    if (this._dimensionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionName = this._dimensionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleInheritedValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dimensionKey = undefined;
      this._dimensionName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dimensionKey = value.dimensionKey;
      this._dimensionName = value.dimensionName;
    }
  }

  // dimension_key - computed: false, optional: true, required: false
  private _dimensionKey?: string; 
  public get dimensionKey() {
    return this.getStringAttribute('dimension_key');
  }
  public set dimensionKey(value: string) {
    this._dimensionKey = value;
  }
  public resetDimensionKey() {
    this._dimensionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionKeyInput() {
    return this._dimensionKey;
  }

  // dimension_name - computed: false, optional: true, required: false
  private _dimensionName?: string; 
  public get dimensionName() {
    return this.getStringAttribute('dimension_name');
  }
  public set dimensionName(value: string) {
    this._dimensionName = value;
  }
  public resetDimensionName() {
    this._dimensionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionNameInput() {
    return this._dimensionName;
  }
}
export interface CeCostCategoryRuleRuleAndAndCostCategory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
  */
  readonly values?: string[];
}

export function ceCostCategoryRuleRuleAndAndCostCategoryToTerraform(struct?: CeCostCategoryRuleRuleAndAndCostCategoryOutputReference | CeCostCategoryRuleRuleAndAndCostCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    match_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchOptions),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function ceCostCategoryRuleRuleAndAndCostCategoryToHclTerraform(struct?: CeCostCategoryRuleRuleAndAndCostCategoryOutputReference | CeCostCategoryRuleRuleAndAndCostCategory): any {
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
    match_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleAndAndCostCategoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CeCostCategoryRuleRuleAndAndCostCategory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRuleAndAndCostCategory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface CeCostCategoryRuleRuleAndAndDimension {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
  */
  readonly values?: string[];
}

export function ceCostCategoryRuleRuleAndAndDimensionToTerraform(struct?: CeCostCategoryRuleRuleAndAndDimensionOutputReference | CeCostCategoryRuleRuleAndAndDimension): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    match_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchOptions),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function ceCostCategoryRuleRuleAndAndDimensionToHclTerraform(struct?: CeCostCategoryRuleRuleAndAndDimensionOutputReference | CeCostCategoryRuleRuleAndAndDimension): any {
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
    match_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleAndAndDimensionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CeCostCategoryRuleRuleAndAndDimension | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRuleAndAndDimension | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface CeCostCategoryRuleRuleAndAndTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
  */
  readonly values?: string[];
}

export function ceCostCategoryRuleRuleAndAndTagsToTerraform(struct?: CeCostCategoryRuleRuleAndAndTagsOutputReference | CeCostCategoryRuleRuleAndAndTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    match_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchOptions),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function ceCostCategoryRuleRuleAndAndTagsToHclTerraform(struct?: CeCostCategoryRuleRuleAndAndTagsOutputReference | CeCostCategoryRuleRuleAndAndTags): any {
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
    match_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleAndAndTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CeCostCategoryRuleRuleAndAndTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRuleAndAndTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface CeCostCategoryRuleRuleAndAnd {
  /**
  * cost_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#cost_category CeCostCategory#cost_category}
  */
  readonly costCategory?: CeCostCategoryRuleRuleAndAndCostCategory;
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#dimension CeCostCategory#dimension}
  */
  readonly dimension?: CeCostCategoryRuleRuleAndAndDimension;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#tags CeCostCategory#tags}
  */
  readonly tags?: CeCostCategoryRuleRuleAndAndTags;
}

export function ceCostCategoryRuleRuleAndAndToTerraform(struct?: CeCostCategoryRuleRuleAndAnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cost_category: ceCostCategoryRuleRuleAndAndCostCategoryToTerraform(struct!.costCategory),
    dimension: ceCostCategoryRuleRuleAndAndDimensionToTerraform(struct!.dimension),
    tags: ceCostCategoryRuleRuleAndAndTagsToTerraform(struct!.tags),
  }
}


export function ceCostCategoryRuleRuleAndAndToHclTerraform(struct?: CeCostCategoryRuleRuleAndAnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cost_category: {
      value: ceCostCategoryRuleRuleAndAndCostCategoryToHclTerraform(struct!.costCategory),
      isBlock: true,
      type: "list",
      storageClassType: "CeCostCategoryRuleRuleAndAndCostCategoryList",
    },
    dimension: {
      value: ceCostCategoryRuleRuleAndAndDimensionToHclTerraform(struct!.dimension),
      isBlock: true,
      type: "list",
      storageClassType: "CeCostCategoryRuleRuleAndAndDimensionList",
    },
    tags: {
      value: ceCostCategoryRuleRuleAndAndTagsToHclTerraform(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "CeCostCategoryRuleRuleAndAndTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleAndAndOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CeCostCategoryRuleRuleAndAnd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._costCategory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costCategory = this._costCategory?.internalValue;
    }
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRuleAndAnd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._costCategory.internalValue = undefined;
      this._dimension.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._costCategory.internalValue = value.costCategory;
      this._dimension.internalValue = value.dimension;
      this._tags.internalValue = value.tags;
    }
  }

  // cost_category - computed: false, optional: true, required: false
  private _costCategory = new CeCostCategoryRuleRuleAndAndCostCategoryOutputReference(this, "cost_category");
  public get costCategory() {
    return this._costCategory;
  }
  public putCostCategory(value: CeCostCategoryRuleRuleAndAndCostCategory) {
    this._costCategory.internalValue = value;
  }
  public resetCostCategory() {
    this._costCategory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCategoryInput() {
    return this._costCategory.internalValue;
  }

  // dimension - computed: false, optional: true, required: false
  private _dimension = new CeCostCategoryRuleRuleAndAndDimensionOutputReference(this, "dimension");
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: CeCostCategoryRuleRuleAndAndDimension) {
    this._dimension.internalValue = value;
  }
  public resetDimension() {
    this._dimension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new CeCostCategoryRuleRuleAndAndTagsOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: CeCostCategoryRuleRuleAndAndTags) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class CeCostCategoryRuleRuleAndAndList extends cdktf.ComplexList {
  public internalValue? : CeCostCategoryRuleRuleAndAnd[] | cdktf.IResolvable

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
  public get(index: number): CeCostCategoryRuleRuleAndAndOutputReference {
    return new CeCostCategoryRuleRuleAndAndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CeCostCategoryRuleRuleAndCostCategory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
  */
  readonly values?: string[];
}

export function ceCostCategoryRuleRuleAndCostCategoryToTerraform(struct?: CeCostCategoryRuleRuleAndCostCategoryOutputReference | CeCostCategoryRuleRuleAndCostCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    match_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchOptions),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function ceCostCategoryRuleRuleAndCostCategoryToHclTerraform(struct?: CeCostCategoryRuleRuleAndCostCategoryOutputReference | CeCostCategoryRuleRuleAndCostCategory): any {
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
    match_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleAndCostCategoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CeCostCategoryRuleRuleAndCostCategory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRuleAndCostCategory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface CeCostCategoryRuleRuleAndDimension {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
  */
  readonly values?: string[];
}

export function ceCostCategoryRuleRuleAndDimensionToTerraform(struct?: CeCostCategoryRuleRuleAndDimensionOutputReference | CeCostCategoryRuleRuleAndDimension): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    match_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchOptions),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function ceCostCategoryRuleRuleAndDimensionToHclTerraform(struct?: CeCostCategoryRuleRuleAndDimensionOutputReference | CeCostCategoryRuleRuleAndDimension): any {
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
    match_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleAndDimensionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CeCostCategoryRuleRuleAndDimension | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRuleAndDimension | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface CeCostCategoryRuleRuleAndNotCostCategory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
  */
  readonly values?: string[];
}

export function ceCostCategoryRuleRuleAndNotCostCategoryToTerraform(struct?: CeCostCategoryRuleRuleAndNotCostCategoryOutputReference | CeCostCategoryRuleRuleAndNotCostCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    match_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchOptions),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function ceCostCategoryRuleRuleAndNotCostCategoryToHclTerraform(struct?: CeCostCategoryRuleRuleAndNotCostCategoryOutputReference | CeCostCategoryRuleRuleAndNotCostCategory): any {
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
    match_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleAndNotCostCategoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CeCostCategoryRuleRuleAndNotCostCategory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRuleAndNotCostCategory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface CeCostCategoryRuleRuleAndNotDimension {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
  */
  readonly values?: string[];
}

export function ceCostCategoryRuleRuleAndNotDimensionToTerraform(struct?: CeCostCategoryRuleRuleAndNotDimensionOutputReference | CeCostCategoryRuleRuleAndNotDimension): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    match_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchOptions),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function ceCostCategoryRuleRuleAndNotDimensionToHclTerraform(struct?: CeCostCategoryRuleRuleAndNotDimensionOutputReference | CeCostCategoryRuleRuleAndNotDimension): any {
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
    match_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleAndNotDimensionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CeCostCategoryRuleRuleAndNotDimension | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRuleAndNotDimension | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface CeCostCategoryRuleRuleAndNotTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
  */
  readonly values?: string[];
}

export function ceCostCategoryRuleRuleAndNotTagsToTerraform(struct?: CeCostCategoryRuleRuleAndNotTagsOutputReference | CeCostCategoryRuleRuleAndNotTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    match_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchOptions),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function ceCostCategoryRuleRuleAndNotTagsToHclTerraform(struct?: CeCostCategoryRuleRuleAndNotTagsOutputReference | CeCostCategoryRuleRuleAndNotTags): any {
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
    match_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleAndNotTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CeCostCategoryRuleRuleAndNotTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRuleAndNotTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface CeCostCategoryRuleRuleAndNot {
  /**
  * cost_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#cost_category CeCostCategory#cost_category}
  */
  readonly costCategory?: CeCostCategoryRuleRuleAndNotCostCategory;
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#dimension CeCostCategory#dimension}
  */
  readonly dimension?: CeCostCategoryRuleRuleAndNotDimension;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#tags CeCostCategory#tags}
  */
  readonly tags?: CeCostCategoryRuleRuleAndNotTags;
}

export function ceCostCategoryRuleRuleAndNotToTerraform(struct?: CeCostCategoryRuleRuleAndNotOutputReference | CeCostCategoryRuleRuleAndNot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cost_category: ceCostCategoryRuleRuleAndNotCostCategoryToTerraform(struct!.costCategory),
    dimension: ceCostCategoryRuleRuleAndNotDimensionToTerraform(struct!.dimension),
    tags: ceCostCategoryRuleRuleAndNotTagsToTerraform(struct!.tags),
  }
}


export function ceCostCategoryRuleRuleAndNotToHclTerraform(struct?: CeCostCategoryRuleRuleAndNotOutputReference | CeCostCategoryRuleRuleAndNot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cost_category: {
      value: ceCostCategoryRuleRuleAndNotCostCategoryToHclTerraform(struct!.costCategory),
      isBlock: true,
      type: "list",
      storageClassType: "CeCostCategoryRuleRuleAndNotCostCategoryList",
    },
    dimension: {
      value: ceCostCategoryRuleRuleAndNotDimensionToHclTerraform(struct!.dimension),
      isBlock: true,
      type: "list",
      storageClassType: "CeCostCategoryRuleRuleAndNotDimensionList",
    },
    tags: {
      value: ceCostCategoryRuleRuleAndNotTagsToHclTerraform(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "CeCostCategoryRuleRuleAndNotTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleAndNotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CeCostCategoryRuleRuleAndNot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._costCategory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costCategory = this._costCategory?.internalValue;
    }
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRuleAndNot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._costCategory.internalValue = undefined;
      this._dimension.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._costCategory.internalValue = value.costCategory;
      this._dimension.internalValue = value.dimension;
      this._tags.internalValue = value.tags;
    }
  }

  // cost_category - computed: false, optional: true, required: false
  private _costCategory = new CeCostCategoryRuleRuleAndNotCostCategoryOutputReference(this, "cost_category");
  public get costCategory() {
    return this._costCategory;
  }
  public putCostCategory(value: CeCostCategoryRuleRuleAndNotCostCategory) {
    this._costCategory.internalValue = value;
  }
  public resetCostCategory() {
    this._costCategory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCategoryInput() {
    return this._costCategory.internalValue;
  }

  // dimension - computed: false, optional: true, required: false
  private _dimension = new CeCostCategoryRuleRuleAndNotDimensionOutputReference(this, "dimension");
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: CeCostCategoryRuleRuleAndNotDimension) {
    this._dimension.internalValue = value;
  }
  public resetDimension() {
    this._dimension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new CeCostCategoryRuleRuleAndNotTagsOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: CeCostCategoryRuleRuleAndNotTags) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface CeCostCategoryRuleRuleAndOrCostCategory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
  */
  readonly values?: string[];
}

export function ceCostCategoryRuleRuleAndOrCostCategoryToTerraform(struct?: CeCostCategoryRuleRuleAndOrCostCategoryOutputReference | CeCostCategoryRuleRuleAndOrCostCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    match_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchOptions),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function ceCostCategoryRuleRuleAndOrCostCategoryToHclTerraform(struct?: CeCostCategoryRuleRuleAndOrCostCategoryOutputReference | CeCostCategoryRuleRuleAndOrCostCategory): any {
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
    match_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleAndOrCostCategoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CeCostCategoryRuleRuleAndOrCostCategory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRuleAndOrCostCategory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface CeCostCategoryRuleRuleAndOrDimension {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
  */
  readonly values?: string[];
}

export function ceCostCategoryRuleRuleAndOrDimensionToTerraform(struct?: CeCostCategoryRuleRuleAndOrDimensionOutputReference | CeCostCategoryRuleRuleAndOrDimension): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    match_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchOptions),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function ceCostCategoryRuleRuleAndOrDimensionToHclTerraform(struct?: CeCostCategoryRuleRuleAndOrDimensionOutputReference | CeCostCategoryRuleRuleAndOrDimension): any {
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
    match_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleAndOrDimensionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CeCostCategoryRuleRuleAndOrDimension | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRuleAndOrDimension | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface CeCostCategoryRuleRuleAndOrTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
  */
  readonly values?: string[];
}

export function ceCostCategoryRuleRuleAndOrTagsToTerraform(struct?: CeCostCategoryRuleRuleAndOrTagsOutputReference | CeCostCategoryRuleRuleAndOrTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    match_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchOptions),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function ceCostCategoryRuleRuleAndOrTagsToHclTerraform(struct?: CeCostCategoryRuleRuleAndOrTagsOutputReference | CeCostCategoryRuleRuleAndOrTags): any {
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
    match_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleAndOrTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CeCostCategoryRuleRuleAndOrTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRuleAndOrTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface CeCostCategoryRuleRuleAndOr {
  /**
  * cost_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#cost_category CeCostCategory#cost_category}
  */
  readonly costCategory?: CeCostCategoryRuleRuleAndOrCostCategory;
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#dimension CeCostCategory#dimension}
  */
  readonly dimension?: CeCostCategoryRuleRuleAndOrDimension;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#tags CeCostCategory#tags}
  */
  readonly tags?: CeCostCategoryRuleRuleAndOrTags;
}

export function ceCostCategoryRuleRuleAndOrToTerraform(struct?: CeCostCategoryRuleRuleAndOr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cost_category: ceCostCategoryRuleRuleAndOrCostCategoryToTerraform(struct!.costCategory),
    dimension: ceCostCategoryRuleRuleAndOrDimensionToTerraform(struct!.dimension),
    tags: ceCostCategoryRuleRuleAndOrTagsToTerraform(struct!.tags),
  }
}


export function ceCostCategoryRuleRuleAndOrToHclTerraform(struct?: CeCostCategoryRuleRuleAndOr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cost_category: {
      value: ceCostCategoryRuleRuleAndOrCostCategoryToHclTerraform(struct!.costCategory),
      isBlock: true,
      type: "list",
      storageClassType: "CeCostCategoryRuleRuleAndOrCostCategoryList",
    },
    dimension: {
      value: ceCostCategoryRuleRuleAndOrDimensionToHclTerraform(struct!.dimension),
      isBlock: true,
      type: "list",
      storageClassType: "CeCostCategoryRuleRuleAndOrDimensionList",
    },
    tags: {
      value: ceCostCategoryRuleRuleAndOrTagsToHclTerraform(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "CeCostCategoryRuleRuleAndOrTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleAndOrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CeCostCategoryRuleRuleAndOr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._costCategory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costCategory = this._costCategory?.internalValue;
    }
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRuleAndOr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._costCategory.internalValue = undefined;
      this._dimension.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._costCategory.internalValue = value.costCategory;
      this._dimension.internalValue = value.dimension;
      this._tags.internalValue = value.tags;
    }
  }

  // cost_category - computed: false, optional: true, required: false
  private _costCategory = new CeCostCategoryRuleRuleAndOrCostCategoryOutputReference(this, "cost_category");
  public get costCategory() {
    return this._costCategory;
  }
  public putCostCategory(value: CeCostCategoryRuleRuleAndOrCostCategory) {
    this._costCategory.internalValue = value;
  }
  public resetCostCategory() {
    this._costCategory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCategoryInput() {
    return this._costCategory.internalValue;
  }

  // dimension - computed: false, optional: true, required: false
  private _dimension = new CeCostCategoryRuleRuleAndOrDimensionOutputReference(this, "dimension");
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: CeCostCategoryRuleRuleAndOrDimension) {
    this._dimension.internalValue = value;
  }
  public resetDimension() {
    this._dimension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new CeCostCategoryRuleRuleAndOrTagsOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: CeCostCategoryRuleRuleAndOrTags) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class CeCostCategoryRuleRuleAndOrList extends cdktf.ComplexList {
  public internalValue? : CeCostCategoryRuleRuleAndOr[] | cdktf.IResolvable

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
  public get(index: number): CeCostCategoryRuleRuleAndOrOutputReference {
    return new CeCostCategoryRuleRuleAndOrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CeCostCategoryRuleRuleAndTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
  */
  readonly values?: string[];
}

export function ceCostCategoryRuleRuleAndTagsToTerraform(struct?: CeCostCategoryRuleRuleAndTagsOutputReference | CeCostCategoryRuleRuleAndTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    match_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchOptions),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function ceCostCategoryRuleRuleAndTagsToHclTerraform(struct?: CeCostCategoryRuleRuleAndTagsOutputReference | CeCostCategoryRuleRuleAndTags): any {
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
    match_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleAndTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CeCostCategoryRuleRuleAndTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRuleAndTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface CeCostCategoryRuleRuleAnd {
  /**
  * and block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#and CeCostCategory#and}
  */
  readonly and?: CeCostCategoryRuleRuleAndAnd[] | cdktf.IResolvable;
  /**
  * cost_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#cost_category CeCostCategory#cost_category}
  */
  readonly costCategory?: CeCostCategoryRuleRuleAndCostCategory;
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#dimension CeCostCategory#dimension}
  */
  readonly dimension?: CeCostCategoryRuleRuleAndDimension;
  /**
  * not block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#not CeCostCategory#not}
  */
  readonly not?: CeCostCategoryRuleRuleAndNot;
  /**
  * or block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#or CeCostCategory#or}
  */
  readonly or?: CeCostCategoryRuleRuleAndOr[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#tags CeCostCategory#tags}
  */
  readonly tags?: CeCostCategoryRuleRuleAndTags;
}

export function ceCostCategoryRuleRuleAndToTerraform(struct?: CeCostCategoryRuleRuleAnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    and: cdktf.listMapper(ceCostCategoryRuleRuleAndAndToTerraform, true)(struct!.and),
    cost_category: ceCostCategoryRuleRuleAndCostCategoryToTerraform(struct!.costCategory),
    dimension: ceCostCategoryRuleRuleAndDimensionToTerraform(struct!.dimension),
    not: ceCostCategoryRuleRuleAndNotToTerraform(struct!.not),
    or: cdktf.listMapper(ceCostCategoryRuleRuleAndOrToTerraform, true)(struct!.or),
    tags: ceCostCategoryRuleRuleAndTagsToTerraform(struct!.tags),
  }
}


export function ceCostCategoryRuleRuleAndToHclTerraform(struct?: CeCostCategoryRuleRuleAnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    and: {
      value: cdktf.listMapperHcl(ceCostCategoryRuleRuleAndAndToHclTerraform, true)(struct!.and),
      isBlock: true,
      type: "set",
      storageClassType: "CeCostCategoryRuleRuleAndAndList",
    },
    cost_category: {
      value: ceCostCategoryRuleRuleAndCostCategoryToHclTerraform(struct!.costCategory),
      isBlock: true,
      type: "list",
      storageClassType: "CeCostCategoryRuleRuleAndCostCategoryList",
    },
    dimension: {
      value: ceCostCategoryRuleRuleAndDimensionToHclTerraform(struct!.dimension),
      isBlock: true,
      type: "list",
      storageClassType: "CeCostCategoryRuleRuleAndDimensionList",
    },
    not: {
      value: ceCostCategoryRuleRuleAndNotToHclTerraform(struct!.not),
      isBlock: true,
      type: "list",
      storageClassType: "CeCostCategoryRuleRuleAndNotList",
    },
    or: {
      value: cdktf.listMapperHcl(ceCostCategoryRuleRuleAndOrToHclTerraform, true)(struct!.or),
      isBlock: true,
      type: "set",
      storageClassType: "CeCostCategoryRuleRuleAndOrList",
    },
    tags: {
      value: ceCostCategoryRuleRuleAndTagsToHclTerraform(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "CeCostCategoryRuleRuleAndTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleAndOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CeCostCategoryRuleRuleAnd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._and?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.and = this._and?.internalValue;
    }
    if (this._costCategory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costCategory = this._costCategory?.internalValue;
    }
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    if (this._not?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.not = this._not?.internalValue;
    }
    if (this._or?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.or = this._or?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRuleAnd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._and.internalValue = undefined;
      this._costCategory.internalValue = undefined;
      this._dimension.internalValue = undefined;
      this._not.internalValue = undefined;
      this._or.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._and.internalValue = value.and;
      this._costCategory.internalValue = value.costCategory;
      this._dimension.internalValue = value.dimension;
      this._not.internalValue = value.not;
      this._or.internalValue = value.or;
      this._tags.internalValue = value.tags;
    }
  }

  // and - computed: false, optional: true, required: false
  private _and = new CeCostCategoryRuleRuleAndAndList(this, "and", true);
  public get and() {
    return this._and;
  }
  public putAnd(value: CeCostCategoryRuleRuleAndAnd[] | cdktf.IResolvable) {
    this._and.internalValue = value;
  }
  public resetAnd() {
    this._and.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and.internalValue;
  }

  // cost_category - computed: false, optional: true, required: false
  private _costCategory = new CeCostCategoryRuleRuleAndCostCategoryOutputReference(this, "cost_category");
  public get costCategory() {
    return this._costCategory;
  }
  public putCostCategory(value: CeCostCategoryRuleRuleAndCostCategory) {
    this._costCategory.internalValue = value;
  }
  public resetCostCategory() {
    this._costCategory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCategoryInput() {
    return this._costCategory.internalValue;
  }

  // dimension - computed: false, optional: true, required: false
  private _dimension = new CeCostCategoryRuleRuleAndDimensionOutputReference(this, "dimension");
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: CeCostCategoryRuleRuleAndDimension) {
    this._dimension.internalValue = value;
  }
  public resetDimension() {
    this._dimension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }

  // not - computed: false, optional: true, required: false
  private _not = new CeCostCategoryRuleRuleAndNotOutputReference(this, "not");
  public get not() {
    return this._not;
  }
  public putNot(value: CeCostCategoryRuleRuleAndNot) {
    this._not.internalValue = value;
  }
  public resetNot() {
    this._not.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notInput() {
    return this._not.internalValue;
  }

  // or - computed: false, optional: true, required: false
  private _or = new CeCostCategoryRuleRuleAndOrList(this, "or", true);
  public get or() {
    return this._or;
  }
  public putOr(value: CeCostCategoryRuleRuleAndOr[] | cdktf.IResolvable) {
    this._or.internalValue = value;
  }
  public resetOr() {
    this._or.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orInput() {
    return this._or.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new CeCostCategoryRuleRuleAndTagsOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: CeCostCategoryRuleRuleAndTags) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class CeCostCategoryRuleRuleAndList extends cdktf.ComplexList {
  public internalValue? : CeCostCategoryRuleRuleAnd[] | cdktf.IResolvable

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
  public get(index: number): CeCostCategoryRuleRuleAndOutputReference {
    return new CeCostCategoryRuleRuleAndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CeCostCategoryRuleRuleCostCategory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
  */
  readonly values?: string[];
}

export function ceCostCategoryRuleRuleCostCategoryToTerraform(struct?: CeCostCategoryRuleRuleCostCategoryOutputReference | CeCostCategoryRuleRuleCostCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    match_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchOptions),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function ceCostCategoryRuleRuleCostCategoryToHclTerraform(struct?: CeCostCategoryRuleRuleCostCategoryOutputReference | CeCostCategoryRuleRuleCostCategory): any {
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
    match_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleCostCategoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CeCostCategoryRuleRuleCostCategory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRuleCostCategory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface CeCostCategoryRuleRuleDimension {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
  */
  readonly values?: string[];
}

export function ceCostCategoryRuleRuleDimensionToTerraform(struct?: CeCostCategoryRuleRuleDimensionOutputReference | CeCostCategoryRuleRuleDimension): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    match_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchOptions),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function ceCostCategoryRuleRuleDimensionToHclTerraform(struct?: CeCostCategoryRuleRuleDimensionOutputReference | CeCostCategoryRuleRuleDimension): any {
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
    match_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleDimensionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CeCostCategoryRuleRuleDimension | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRuleDimension | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface CeCostCategoryRuleRuleNotAndCostCategory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
  */
  readonly values?: string[];
}

export function ceCostCategoryRuleRuleNotAndCostCategoryToTerraform(struct?: CeCostCategoryRuleRuleNotAndCostCategoryOutputReference | CeCostCategoryRuleRuleNotAndCostCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    match_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchOptions),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function ceCostCategoryRuleRuleNotAndCostCategoryToHclTerraform(struct?: CeCostCategoryRuleRuleNotAndCostCategoryOutputReference | CeCostCategoryRuleRuleNotAndCostCategory): any {
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
    match_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleNotAndCostCategoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CeCostCategoryRuleRuleNotAndCostCategory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRuleNotAndCostCategory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface CeCostCategoryRuleRuleNotAndDimension {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
  */
  readonly values?: string[];
}

export function ceCostCategoryRuleRuleNotAndDimensionToTerraform(struct?: CeCostCategoryRuleRuleNotAndDimensionOutputReference | CeCostCategoryRuleRuleNotAndDimension): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    match_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchOptions),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function ceCostCategoryRuleRuleNotAndDimensionToHclTerraform(struct?: CeCostCategoryRuleRuleNotAndDimensionOutputReference | CeCostCategoryRuleRuleNotAndDimension): any {
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
    match_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleNotAndDimensionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CeCostCategoryRuleRuleNotAndDimension | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRuleNotAndDimension | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface CeCostCategoryRuleRuleNotAndTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
  */
  readonly values?: string[];
}

export function ceCostCategoryRuleRuleNotAndTagsToTerraform(struct?: CeCostCategoryRuleRuleNotAndTagsOutputReference | CeCostCategoryRuleRuleNotAndTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    match_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchOptions),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function ceCostCategoryRuleRuleNotAndTagsToHclTerraform(struct?: CeCostCategoryRuleRuleNotAndTagsOutputReference | CeCostCategoryRuleRuleNotAndTags): any {
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
    match_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleNotAndTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CeCostCategoryRuleRuleNotAndTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRuleNotAndTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface CeCostCategoryRuleRuleNotAnd {
  /**
  * cost_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#cost_category CeCostCategory#cost_category}
  */
  readonly costCategory?: CeCostCategoryRuleRuleNotAndCostCategory;
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#dimension CeCostCategory#dimension}
  */
  readonly dimension?: CeCostCategoryRuleRuleNotAndDimension;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#tags CeCostCategory#tags}
  */
  readonly tags?: CeCostCategoryRuleRuleNotAndTags;
}

export function ceCostCategoryRuleRuleNotAndToTerraform(struct?: CeCostCategoryRuleRuleNotAnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cost_category: ceCostCategoryRuleRuleNotAndCostCategoryToTerraform(struct!.costCategory),
    dimension: ceCostCategoryRuleRuleNotAndDimensionToTerraform(struct!.dimension),
    tags: ceCostCategoryRuleRuleNotAndTagsToTerraform(struct!.tags),
  }
}


export function ceCostCategoryRuleRuleNotAndToHclTerraform(struct?: CeCostCategoryRuleRuleNotAnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cost_category: {
      value: ceCostCategoryRuleRuleNotAndCostCategoryToHclTerraform(struct!.costCategory),
      isBlock: true,
      type: "list",
      storageClassType: "CeCostCategoryRuleRuleNotAndCostCategoryList",
    },
    dimension: {
      value: ceCostCategoryRuleRuleNotAndDimensionToHclTerraform(struct!.dimension),
      isBlock: true,
      type: "list",
      storageClassType: "CeCostCategoryRuleRuleNotAndDimensionList",
    },
    tags: {
      value: ceCostCategoryRuleRuleNotAndTagsToHclTerraform(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "CeCostCategoryRuleRuleNotAndTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleNotAndOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CeCostCategoryRuleRuleNotAnd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._costCategory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costCategory = this._costCategory?.internalValue;
    }
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRuleNotAnd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._costCategory.internalValue = undefined;
      this._dimension.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._costCategory.internalValue = value.costCategory;
      this._dimension.internalValue = value.dimension;
      this._tags.internalValue = value.tags;
    }
  }

  // cost_category - computed: false, optional: true, required: false
  private _costCategory = new CeCostCategoryRuleRuleNotAndCostCategoryOutputReference(this, "cost_category");
  public get costCategory() {
    return this._costCategory;
  }
  public putCostCategory(value: CeCostCategoryRuleRuleNotAndCostCategory) {
    this._costCategory.internalValue = value;
  }
  public resetCostCategory() {
    this._costCategory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCategoryInput() {
    return this._costCategory.internalValue;
  }

  // dimension - computed: false, optional: true, required: false
  private _dimension = new CeCostCategoryRuleRuleNotAndDimensionOutputReference(this, "dimension");
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: CeCostCategoryRuleRuleNotAndDimension) {
    this._dimension.internalValue = value;
  }
  public resetDimension() {
    this._dimension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new CeCostCategoryRuleRuleNotAndTagsOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: CeCostCategoryRuleRuleNotAndTags) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class CeCostCategoryRuleRuleNotAndList extends cdktf.ComplexList {
  public internalValue? : CeCostCategoryRuleRuleNotAnd[] | cdktf.IResolvable

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
  public get(index: number): CeCostCategoryRuleRuleNotAndOutputReference {
    return new CeCostCategoryRuleRuleNotAndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CeCostCategoryRuleRuleNotCostCategory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
  */
  readonly values?: string[];
}

export function ceCostCategoryRuleRuleNotCostCategoryToTerraform(struct?: CeCostCategoryRuleRuleNotCostCategoryOutputReference | CeCostCategoryRuleRuleNotCostCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    match_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchOptions),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function ceCostCategoryRuleRuleNotCostCategoryToHclTerraform(struct?: CeCostCategoryRuleRuleNotCostCategoryOutputReference | CeCostCategoryRuleRuleNotCostCategory): any {
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
    match_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleNotCostCategoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CeCostCategoryRuleRuleNotCostCategory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRuleNotCostCategory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface CeCostCategoryRuleRuleNotDimension {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
  */
  readonly values?: string[];
}

export function ceCostCategoryRuleRuleNotDimensionToTerraform(struct?: CeCostCategoryRuleRuleNotDimensionOutputReference | CeCostCategoryRuleRuleNotDimension): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    match_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchOptions),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function ceCostCategoryRuleRuleNotDimensionToHclTerraform(struct?: CeCostCategoryRuleRuleNotDimensionOutputReference | CeCostCategoryRuleRuleNotDimension): any {
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
    match_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleNotDimensionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CeCostCategoryRuleRuleNotDimension | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRuleNotDimension | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface CeCostCategoryRuleRuleNotNotCostCategory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
  */
  readonly values?: string[];
}

export function ceCostCategoryRuleRuleNotNotCostCategoryToTerraform(struct?: CeCostCategoryRuleRuleNotNotCostCategoryOutputReference | CeCostCategoryRuleRuleNotNotCostCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    match_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchOptions),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function ceCostCategoryRuleRuleNotNotCostCategoryToHclTerraform(struct?: CeCostCategoryRuleRuleNotNotCostCategoryOutputReference | CeCostCategoryRuleRuleNotNotCostCategory): any {
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
    match_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleNotNotCostCategoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CeCostCategoryRuleRuleNotNotCostCategory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRuleNotNotCostCategory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface CeCostCategoryRuleRuleNotNotDimension {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
  */
  readonly values?: string[];
}

export function ceCostCategoryRuleRuleNotNotDimensionToTerraform(struct?: CeCostCategoryRuleRuleNotNotDimensionOutputReference | CeCostCategoryRuleRuleNotNotDimension): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    match_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchOptions),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function ceCostCategoryRuleRuleNotNotDimensionToHclTerraform(struct?: CeCostCategoryRuleRuleNotNotDimensionOutputReference | CeCostCategoryRuleRuleNotNotDimension): any {
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
    match_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleNotNotDimensionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CeCostCategoryRuleRuleNotNotDimension | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRuleNotNotDimension | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface CeCostCategoryRuleRuleNotNotTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
  */
  readonly values?: string[];
}

export function ceCostCategoryRuleRuleNotNotTagsToTerraform(struct?: CeCostCategoryRuleRuleNotNotTagsOutputReference | CeCostCategoryRuleRuleNotNotTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    match_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchOptions),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function ceCostCategoryRuleRuleNotNotTagsToHclTerraform(struct?: CeCostCategoryRuleRuleNotNotTagsOutputReference | CeCostCategoryRuleRuleNotNotTags): any {
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
    match_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleNotNotTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CeCostCategoryRuleRuleNotNotTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRuleNotNotTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface CeCostCategoryRuleRuleNotNot {
  /**
  * cost_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#cost_category CeCostCategory#cost_category}
  */
  readonly costCategory?: CeCostCategoryRuleRuleNotNotCostCategory;
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#dimension CeCostCategory#dimension}
  */
  readonly dimension?: CeCostCategoryRuleRuleNotNotDimension;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#tags CeCostCategory#tags}
  */
  readonly tags?: CeCostCategoryRuleRuleNotNotTags;
}

export function ceCostCategoryRuleRuleNotNotToTerraform(struct?: CeCostCategoryRuleRuleNotNotOutputReference | CeCostCategoryRuleRuleNotNot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cost_category: ceCostCategoryRuleRuleNotNotCostCategoryToTerraform(struct!.costCategory),
    dimension: ceCostCategoryRuleRuleNotNotDimensionToTerraform(struct!.dimension),
    tags: ceCostCategoryRuleRuleNotNotTagsToTerraform(struct!.tags),
  }
}


export function ceCostCategoryRuleRuleNotNotToHclTerraform(struct?: CeCostCategoryRuleRuleNotNotOutputReference | CeCostCategoryRuleRuleNotNot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cost_category: {
      value: ceCostCategoryRuleRuleNotNotCostCategoryToHclTerraform(struct!.costCategory),
      isBlock: true,
      type: "list",
      storageClassType: "CeCostCategoryRuleRuleNotNotCostCategoryList",
    },
    dimension: {
      value: ceCostCategoryRuleRuleNotNotDimensionToHclTerraform(struct!.dimension),
      isBlock: true,
      type: "list",
      storageClassType: "CeCostCategoryRuleRuleNotNotDimensionList",
    },
    tags: {
      value: ceCostCategoryRuleRuleNotNotTagsToHclTerraform(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "CeCostCategoryRuleRuleNotNotTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleNotNotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CeCostCategoryRuleRuleNotNot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._costCategory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costCategory = this._costCategory?.internalValue;
    }
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRuleNotNot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._costCategory.internalValue = undefined;
      this._dimension.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._costCategory.internalValue = value.costCategory;
      this._dimension.internalValue = value.dimension;
      this._tags.internalValue = value.tags;
    }
  }

  // cost_category - computed: false, optional: true, required: false
  private _costCategory = new CeCostCategoryRuleRuleNotNotCostCategoryOutputReference(this, "cost_category");
  public get costCategory() {
    return this._costCategory;
  }
  public putCostCategory(value: CeCostCategoryRuleRuleNotNotCostCategory) {
    this._costCategory.internalValue = value;
  }
  public resetCostCategory() {
    this._costCategory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCategoryInput() {
    return this._costCategory.internalValue;
  }

  // dimension - computed: false, optional: true, required: false
  private _dimension = new CeCostCategoryRuleRuleNotNotDimensionOutputReference(this, "dimension");
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: CeCostCategoryRuleRuleNotNotDimension) {
    this._dimension.internalValue = value;
  }
  public resetDimension() {
    this._dimension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new CeCostCategoryRuleRuleNotNotTagsOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: CeCostCategoryRuleRuleNotNotTags) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface CeCostCategoryRuleRuleNotOrCostCategory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
  */
  readonly values?: string[];
}

export function ceCostCategoryRuleRuleNotOrCostCategoryToTerraform(struct?: CeCostCategoryRuleRuleNotOrCostCategoryOutputReference | CeCostCategoryRuleRuleNotOrCostCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    match_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchOptions),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function ceCostCategoryRuleRuleNotOrCostCategoryToHclTerraform(struct?: CeCostCategoryRuleRuleNotOrCostCategoryOutputReference | CeCostCategoryRuleRuleNotOrCostCategory): any {
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
    match_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleNotOrCostCategoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CeCostCategoryRuleRuleNotOrCostCategory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRuleNotOrCostCategory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface CeCostCategoryRuleRuleNotOrDimension {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
  */
  readonly values?: string[];
}

export function ceCostCategoryRuleRuleNotOrDimensionToTerraform(struct?: CeCostCategoryRuleRuleNotOrDimensionOutputReference | CeCostCategoryRuleRuleNotOrDimension): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    match_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchOptions),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function ceCostCategoryRuleRuleNotOrDimensionToHclTerraform(struct?: CeCostCategoryRuleRuleNotOrDimensionOutputReference | CeCostCategoryRuleRuleNotOrDimension): any {
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
    match_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleNotOrDimensionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CeCostCategoryRuleRuleNotOrDimension | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRuleNotOrDimension | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface CeCostCategoryRuleRuleNotOrTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
  */
  readonly values?: string[];
}

export function ceCostCategoryRuleRuleNotOrTagsToTerraform(struct?: CeCostCategoryRuleRuleNotOrTagsOutputReference | CeCostCategoryRuleRuleNotOrTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    match_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchOptions),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function ceCostCategoryRuleRuleNotOrTagsToHclTerraform(struct?: CeCostCategoryRuleRuleNotOrTagsOutputReference | CeCostCategoryRuleRuleNotOrTags): any {
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
    match_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleNotOrTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CeCostCategoryRuleRuleNotOrTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRuleNotOrTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface CeCostCategoryRuleRuleNotOr {
  /**
  * cost_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#cost_category CeCostCategory#cost_category}
  */
  readonly costCategory?: CeCostCategoryRuleRuleNotOrCostCategory;
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#dimension CeCostCategory#dimension}
  */
  readonly dimension?: CeCostCategoryRuleRuleNotOrDimension;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#tags CeCostCategory#tags}
  */
  readonly tags?: CeCostCategoryRuleRuleNotOrTags;
}

export function ceCostCategoryRuleRuleNotOrToTerraform(struct?: CeCostCategoryRuleRuleNotOr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cost_category: ceCostCategoryRuleRuleNotOrCostCategoryToTerraform(struct!.costCategory),
    dimension: ceCostCategoryRuleRuleNotOrDimensionToTerraform(struct!.dimension),
    tags: ceCostCategoryRuleRuleNotOrTagsToTerraform(struct!.tags),
  }
}


export function ceCostCategoryRuleRuleNotOrToHclTerraform(struct?: CeCostCategoryRuleRuleNotOr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cost_category: {
      value: ceCostCategoryRuleRuleNotOrCostCategoryToHclTerraform(struct!.costCategory),
      isBlock: true,
      type: "list",
      storageClassType: "CeCostCategoryRuleRuleNotOrCostCategoryList",
    },
    dimension: {
      value: ceCostCategoryRuleRuleNotOrDimensionToHclTerraform(struct!.dimension),
      isBlock: true,
      type: "list",
      storageClassType: "CeCostCategoryRuleRuleNotOrDimensionList",
    },
    tags: {
      value: ceCostCategoryRuleRuleNotOrTagsToHclTerraform(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "CeCostCategoryRuleRuleNotOrTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleNotOrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CeCostCategoryRuleRuleNotOr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._costCategory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costCategory = this._costCategory?.internalValue;
    }
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRuleNotOr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._costCategory.internalValue = undefined;
      this._dimension.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._costCategory.internalValue = value.costCategory;
      this._dimension.internalValue = value.dimension;
      this._tags.internalValue = value.tags;
    }
  }

  // cost_category - computed: false, optional: true, required: false
  private _costCategory = new CeCostCategoryRuleRuleNotOrCostCategoryOutputReference(this, "cost_category");
  public get costCategory() {
    return this._costCategory;
  }
  public putCostCategory(value: CeCostCategoryRuleRuleNotOrCostCategory) {
    this._costCategory.internalValue = value;
  }
  public resetCostCategory() {
    this._costCategory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCategoryInput() {
    return this._costCategory.internalValue;
  }

  // dimension - computed: false, optional: true, required: false
  private _dimension = new CeCostCategoryRuleRuleNotOrDimensionOutputReference(this, "dimension");
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: CeCostCategoryRuleRuleNotOrDimension) {
    this._dimension.internalValue = value;
  }
  public resetDimension() {
    this._dimension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new CeCostCategoryRuleRuleNotOrTagsOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: CeCostCategoryRuleRuleNotOrTags) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class CeCostCategoryRuleRuleNotOrList extends cdktf.ComplexList {
  public internalValue? : CeCostCategoryRuleRuleNotOr[] | cdktf.IResolvable

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
  public get(index: number): CeCostCategoryRuleRuleNotOrOutputReference {
    return new CeCostCategoryRuleRuleNotOrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CeCostCategoryRuleRuleNotTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
  */
  readonly values?: string[];
}

export function ceCostCategoryRuleRuleNotTagsToTerraform(struct?: CeCostCategoryRuleRuleNotTagsOutputReference | CeCostCategoryRuleRuleNotTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    match_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchOptions),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function ceCostCategoryRuleRuleNotTagsToHclTerraform(struct?: CeCostCategoryRuleRuleNotTagsOutputReference | CeCostCategoryRuleRuleNotTags): any {
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
    match_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleNotTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CeCostCategoryRuleRuleNotTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRuleNotTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface CeCostCategoryRuleRuleNot {
  /**
  * and block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#and CeCostCategory#and}
  */
  readonly and?: CeCostCategoryRuleRuleNotAnd[] | cdktf.IResolvable;
  /**
  * cost_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#cost_category CeCostCategory#cost_category}
  */
  readonly costCategory?: CeCostCategoryRuleRuleNotCostCategory;
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#dimension CeCostCategory#dimension}
  */
  readonly dimension?: CeCostCategoryRuleRuleNotDimension;
  /**
  * not block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#not CeCostCategory#not}
  */
  readonly not?: CeCostCategoryRuleRuleNotNot;
  /**
  * or block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#or CeCostCategory#or}
  */
  readonly or?: CeCostCategoryRuleRuleNotOr[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#tags CeCostCategory#tags}
  */
  readonly tags?: CeCostCategoryRuleRuleNotTags;
}

export function ceCostCategoryRuleRuleNotToTerraform(struct?: CeCostCategoryRuleRuleNotOutputReference | CeCostCategoryRuleRuleNot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    and: cdktf.listMapper(ceCostCategoryRuleRuleNotAndToTerraform, true)(struct!.and),
    cost_category: ceCostCategoryRuleRuleNotCostCategoryToTerraform(struct!.costCategory),
    dimension: ceCostCategoryRuleRuleNotDimensionToTerraform(struct!.dimension),
    not: ceCostCategoryRuleRuleNotNotToTerraform(struct!.not),
    or: cdktf.listMapper(ceCostCategoryRuleRuleNotOrToTerraform, true)(struct!.or),
    tags: ceCostCategoryRuleRuleNotTagsToTerraform(struct!.tags),
  }
}


export function ceCostCategoryRuleRuleNotToHclTerraform(struct?: CeCostCategoryRuleRuleNotOutputReference | CeCostCategoryRuleRuleNot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    and: {
      value: cdktf.listMapperHcl(ceCostCategoryRuleRuleNotAndToHclTerraform, true)(struct!.and),
      isBlock: true,
      type: "set",
      storageClassType: "CeCostCategoryRuleRuleNotAndList",
    },
    cost_category: {
      value: ceCostCategoryRuleRuleNotCostCategoryToHclTerraform(struct!.costCategory),
      isBlock: true,
      type: "list",
      storageClassType: "CeCostCategoryRuleRuleNotCostCategoryList",
    },
    dimension: {
      value: ceCostCategoryRuleRuleNotDimensionToHclTerraform(struct!.dimension),
      isBlock: true,
      type: "list",
      storageClassType: "CeCostCategoryRuleRuleNotDimensionList",
    },
    not: {
      value: ceCostCategoryRuleRuleNotNotToHclTerraform(struct!.not),
      isBlock: true,
      type: "list",
      storageClassType: "CeCostCategoryRuleRuleNotNotList",
    },
    or: {
      value: cdktf.listMapperHcl(ceCostCategoryRuleRuleNotOrToHclTerraform, true)(struct!.or),
      isBlock: true,
      type: "set",
      storageClassType: "CeCostCategoryRuleRuleNotOrList",
    },
    tags: {
      value: ceCostCategoryRuleRuleNotTagsToHclTerraform(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "CeCostCategoryRuleRuleNotTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleNotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CeCostCategoryRuleRuleNot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._and?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.and = this._and?.internalValue;
    }
    if (this._costCategory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costCategory = this._costCategory?.internalValue;
    }
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    if (this._not?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.not = this._not?.internalValue;
    }
    if (this._or?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.or = this._or?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRuleNot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._and.internalValue = undefined;
      this._costCategory.internalValue = undefined;
      this._dimension.internalValue = undefined;
      this._not.internalValue = undefined;
      this._or.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._and.internalValue = value.and;
      this._costCategory.internalValue = value.costCategory;
      this._dimension.internalValue = value.dimension;
      this._not.internalValue = value.not;
      this._or.internalValue = value.or;
      this._tags.internalValue = value.tags;
    }
  }

  // and - computed: false, optional: true, required: false
  private _and = new CeCostCategoryRuleRuleNotAndList(this, "and", true);
  public get and() {
    return this._and;
  }
  public putAnd(value: CeCostCategoryRuleRuleNotAnd[] | cdktf.IResolvable) {
    this._and.internalValue = value;
  }
  public resetAnd() {
    this._and.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and.internalValue;
  }

  // cost_category - computed: false, optional: true, required: false
  private _costCategory = new CeCostCategoryRuleRuleNotCostCategoryOutputReference(this, "cost_category");
  public get costCategory() {
    return this._costCategory;
  }
  public putCostCategory(value: CeCostCategoryRuleRuleNotCostCategory) {
    this._costCategory.internalValue = value;
  }
  public resetCostCategory() {
    this._costCategory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCategoryInput() {
    return this._costCategory.internalValue;
  }

  // dimension - computed: false, optional: true, required: false
  private _dimension = new CeCostCategoryRuleRuleNotDimensionOutputReference(this, "dimension");
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: CeCostCategoryRuleRuleNotDimension) {
    this._dimension.internalValue = value;
  }
  public resetDimension() {
    this._dimension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }

  // not - computed: false, optional: true, required: false
  private _not = new CeCostCategoryRuleRuleNotNotOutputReference(this, "not");
  public get not() {
    return this._not;
  }
  public putNot(value: CeCostCategoryRuleRuleNotNot) {
    this._not.internalValue = value;
  }
  public resetNot() {
    this._not.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notInput() {
    return this._not.internalValue;
  }

  // or - computed: false, optional: true, required: false
  private _or = new CeCostCategoryRuleRuleNotOrList(this, "or", true);
  public get or() {
    return this._or;
  }
  public putOr(value: CeCostCategoryRuleRuleNotOr[] | cdktf.IResolvable) {
    this._or.internalValue = value;
  }
  public resetOr() {
    this._or.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orInput() {
    return this._or.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new CeCostCategoryRuleRuleNotTagsOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: CeCostCategoryRuleRuleNotTags) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface CeCostCategoryRuleRuleOrAndCostCategory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
  */
  readonly values?: string[];
}

export function ceCostCategoryRuleRuleOrAndCostCategoryToTerraform(struct?: CeCostCategoryRuleRuleOrAndCostCategoryOutputReference | CeCostCategoryRuleRuleOrAndCostCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    match_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchOptions),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function ceCostCategoryRuleRuleOrAndCostCategoryToHclTerraform(struct?: CeCostCategoryRuleRuleOrAndCostCategoryOutputReference | CeCostCategoryRuleRuleOrAndCostCategory): any {
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
    match_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleOrAndCostCategoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CeCostCategoryRuleRuleOrAndCostCategory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRuleOrAndCostCategory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface CeCostCategoryRuleRuleOrAndDimension {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
  */
  readonly values?: string[];
}

export function ceCostCategoryRuleRuleOrAndDimensionToTerraform(struct?: CeCostCategoryRuleRuleOrAndDimensionOutputReference | CeCostCategoryRuleRuleOrAndDimension): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    match_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchOptions),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function ceCostCategoryRuleRuleOrAndDimensionToHclTerraform(struct?: CeCostCategoryRuleRuleOrAndDimensionOutputReference | CeCostCategoryRuleRuleOrAndDimension): any {
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
    match_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleOrAndDimensionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CeCostCategoryRuleRuleOrAndDimension | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRuleOrAndDimension | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface CeCostCategoryRuleRuleOrAndTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
  */
  readonly values?: string[];
}

export function ceCostCategoryRuleRuleOrAndTagsToTerraform(struct?: CeCostCategoryRuleRuleOrAndTagsOutputReference | CeCostCategoryRuleRuleOrAndTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    match_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchOptions),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function ceCostCategoryRuleRuleOrAndTagsToHclTerraform(struct?: CeCostCategoryRuleRuleOrAndTagsOutputReference | CeCostCategoryRuleRuleOrAndTags): any {
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
    match_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleOrAndTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CeCostCategoryRuleRuleOrAndTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRuleOrAndTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface CeCostCategoryRuleRuleOrAnd {
  /**
  * cost_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#cost_category CeCostCategory#cost_category}
  */
  readonly costCategory?: CeCostCategoryRuleRuleOrAndCostCategory;
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#dimension CeCostCategory#dimension}
  */
  readonly dimension?: CeCostCategoryRuleRuleOrAndDimension;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#tags CeCostCategory#tags}
  */
  readonly tags?: CeCostCategoryRuleRuleOrAndTags;
}

export function ceCostCategoryRuleRuleOrAndToTerraform(struct?: CeCostCategoryRuleRuleOrAnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cost_category: ceCostCategoryRuleRuleOrAndCostCategoryToTerraform(struct!.costCategory),
    dimension: ceCostCategoryRuleRuleOrAndDimensionToTerraform(struct!.dimension),
    tags: ceCostCategoryRuleRuleOrAndTagsToTerraform(struct!.tags),
  }
}


export function ceCostCategoryRuleRuleOrAndToHclTerraform(struct?: CeCostCategoryRuleRuleOrAnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cost_category: {
      value: ceCostCategoryRuleRuleOrAndCostCategoryToHclTerraform(struct!.costCategory),
      isBlock: true,
      type: "list",
      storageClassType: "CeCostCategoryRuleRuleOrAndCostCategoryList",
    },
    dimension: {
      value: ceCostCategoryRuleRuleOrAndDimensionToHclTerraform(struct!.dimension),
      isBlock: true,
      type: "list",
      storageClassType: "CeCostCategoryRuleRuleOrAndDimensionList",
    },
    tags: {
      value: ceCostCategoryRuleRuleOrAndTagsToHclTerraform(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "CeCostCategoryRuleRuleOrAndTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleOrAndOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CeCostCategoryRuleRuleOrAnd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._costCategory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costCategory = this._costCategory?.internalValue;
    }
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRuleOrAnd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._costCategory.internalValue = undefined;
      this._dimension.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._costCategory.internalValue = value.costCategory;
      this._dimension.internalValue = value.dimension;
      this._tags.internalValue = value.tags;
    }
  }

  // cost_category - computed: false, optional: true, required: false
  private _costCategory = new CeCostCategoryRuleRuleOrAndCostCategoryOutputReference(this, "cost_category");
  public get costCategory() {
    return this._costCategory;
  }
  public putCostCategory(value: CeCostCategoryRuleRuleOrAndCostCategory) {
    this._costCategory.internalValue = value;
  }
  public resetCostCategory() {
    this._costCategory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCategoryInput() {
    return this._costCategory.internalValue;
  }

  // dimension - computed: false, optional: true, required: false
  private _dimension = new CeCostCategoryRuleRuleOrAndDimensionOutputReference(this, "dimension");
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: CeCostCategoryRuleRuleOrAndDimension) {
    this._dimension.internalValue = value;
  }
  public resetDimension() {
    this._dimension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new CeCostCategoryRuleRuleOrAndTagsOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: CeCostCategoryRuleRuleOrAndTags) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class CeCostCategoryRuleRuleOrAndList extends cdktf.ComplexList {
  public internalValue? : CeCostCategoryRuleRuleOrAnd[] | cdktf.IResolvable

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
  public get(index: number): CeCostCategoryRuleRuleOrAndOutputReference {
    return new CeCostCategoryRuleRuleOrAndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CeCostCategoryRuleRuleOrCostCategory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
  */
  readonly values?: string[];
}

export function ceCostCategoryRuleRuleOrCostCategoryToTerraform(struct?: CeCostCategoryRuleRuleOrCostCategoryOutputReference | CeCostCategoryRuleRuleOrCostCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    match_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchOptions),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function ceCostCategoryRuleRuleOrCostCategoryToHclTerraform(struct?: CeCostCategoryRuleRuleOrCostCategoryOutputReference | CeCostCategoryRuleRuleOrCostCategory): any {
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
    match_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleOrCostCategoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CeCostCategoryRuleRuleOrCostCategory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRuleOrCostCategory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface CeCostCategoryRuleRuleOrDimension {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
  */
  readonly values?: string[];
}

export function ceCostCategoryRuleRuleOrDimensionToTerraform(struct?: CeCostCategoryRuleRuleOrDimensionOutputReference | CeCostCategoryRuleRuleOrDimension): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    match_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchOptions),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function ceCostCategoryRuleRuleOrDimensionToHclTerraform(struct?: CeCostCategoryRuleRuleOrDimensionOutputReference | CeCostCategoryRuleRuleOrDimension): any {
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
    match_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleOrDimensionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CeCostCategoryRuleRuleOrDimension | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRuleOrDimension | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface CeCostCategoryRuleRuleOrNotCostCategory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
  */
  readonly values?: string[];
}

export function ceCostCategoryRuleRuleOrNotCostCategoryToTerraform(struct?: CeCostCategoryRuleRuleOrNotCostCategoryOutputReference | CeCostCategoryRuleRuleOrNotCostCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    match_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchOptions),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function ceCostCategoryRuleRuleOrNotCostCategoryToHclTerraform(struct?: CeCostCategoryRuleRuleOrNotCostCategoryOutputReference | CeCostCategoryRuleRuleOrNotCostCategory): any {
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
    match_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleOrNotCostCategoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CeCostCategoryRuleRuleOrNotCostCategory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRuleOrNotCostCategory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface CeCostCategoryRuleRuleOrNotDimension {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
  */
  readonly values?: string[];
}

export function ceCostCategoryRuleRuleOrNotDimensionToTerraform(struct?: CeCostCategoryRuleRuleOrNotDimensionOutputReference | CeCostCategoryRuleRuleOrNotDimension): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    match_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchOptions),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function ceCostCategoryRuleRuleOrNotDimensionToHclTerraform(struct?: CeCostCategoryRuleRuleOrNotDimensionOutputReference | CeCostCategoryRuleRuleOrNotDimension): any {
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
    match_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleOrNotDimensionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CeCostCategoryRuleRuleOrNotDimension | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRuleOrNotDimension | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface CeCostCategoryRuleRuleOrNotTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
  */
  readonly values?: string[];
}

export function ceCostCategoryRuleRuleOrNotTagsToTerraform(struct?: CeCostCategoryRuleRuleOrNotTagsOutputReference | CeCostCategoryRuleRuleOrNotTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    match_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchOptions),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function ceCostCategoryRuleRuleOrNotTagsToHclTerraform(struct?: CeCostCategoryRuleRuleOrNotTagsOutputReference | CeCostCategoryRuleRuleOrNotTags): any {
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
    match_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleOrNotTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CeCostCategoryRuleRuleOrNotTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRuleOrNotTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface CeCostCategoryRuleRuleOrNot {
  /**
  * cost_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#cost_category CeCostCategory#cost_category}
  */
  readonly costCategory?: CeCostCategoryRuleRuleOrNotCostCategory;
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#dimension CeCostCategory#dimension}
  */
  readonly dimension?: CeCostCategoryRuleRuleOrNotDimension;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#tags CeCostCategory#tags}
  */
  readonly tags?: CeCostCategoryRuleRuleOrNotTags;
}

export function ceCostCategoryRuleRuleOrNotToTerraform(struct?: CeCostCategoryRuleRuleOrNotOutputReference | CeCostCategoryRuleRuleOrNot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cost_category: ceCostCategoryRuleRuleOrNotCostCategoryToTerraform(struct!.costCategory),
    dimension: ceCostCategoryRuleRuleOrNotDimensionToTerraform(struct!.dimension),
    tags: ceCostCategoryRuleRuleOrNotTagsToTerraform(struct!.tags),
  }
}


export function ceCostCategoryRuleRuleOrNotToHclTerraform(struct?: CeCostCategoryRuleRuleOrNotOutputReference | CeCostCategoryRuleRuleOrNot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cost_category: {
      value: ceCostCategoryRuleRuleOrNotCostCategoryToHclTerraform(struct!.costCategory),
      isBlock: true,
      type: "list",
      storageClassType: "CeCostCategoryRuleRuleOrNotCostCategoryList",
    },
    dimension: {
      value: ceCostCategoryRuleRuleOrNotDimensionToHclTerraform(struct!.dimension),
      isBlock: true,
      type: "list",
      storageClassType: "CeCostCategoryRuleRuleOrNotDimensionList",
    },
    tags: {
      value: ceCostCategoryRuleRuleOrNotTagsToHclTerraform(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "CeCostCategoryRuleRuleOrNotTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleOrNotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CeCostCategoryRuleRuleOrNot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._costCategory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costCategory = this._costCategory?.internalValue;
    }
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRuleOrNot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._costCategory.internalValue = undefined;
      this._dimension.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._costCategory.internalValue = value.costCategory;
      this._dimension.internalValue = value.dimension;
      this._tags.internalValue = value.tags;
    }
  }

  // cost_category - computed: false, optional: true, required: false
  private _costCategory = new CeCostCategoryRuleRuleOrNotCostCategoryOutputReference(this, "cost_category");
  public get costCategory() {
    return this._costCategory;
  }
  public putCostCategory(value: CeCostCategoryRuleRuleOrNotCostCategory) {
    this._costCategory.internalValue = value;
  }
  public resetCostCategory() {
    this._costCategory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCategoryInput() {
    return this._costCategory.internalValue;
  }

  // dimension - computed: false, optional: true, required: false
  private _dimension = new CeCostCategoryRuleRuleOrNotDimensionOutputReference(this, "dimension");
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: CeCostCategoryRuleRuleOrNotDimension) {
    this._dimension.internalValue = value;
  }
  public resetDimension() {
    this._dimension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new CeCostCategoryRuleRuleOrNotTagsOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: CeCostCategoryRuleRuleOrNotTags) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface CeCostCategoryRuleRuleOrOrCostCategory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
  */
  readonly values?: string[];
}

export function ceCostCategoryRuleRuleOrOrCostCategoryToTerraform(struct?: CeCostCategoryRuleRuleOrOrCostCategoryOutputReference | CeCostCategoryRuleRuleOrOrCostCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    match_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchOptions),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function ceCostCategoryRuleRuleOrOrCostCategoryToHclTerraform(struct?: CeCostCategoryRuleRuleOrOrCostCategoryOutputReference | CeCostCategoryRuleRuleOrOrCostCategory): any {
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
    match_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleOrOrCostCategoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CeCostCategoryRuleRuleOrOrCostCategory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRuleOrOrCostCategory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface CeCostCategoryRuleRuleOrOrDimension {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
  */
  readonly values?: string[];
}

export function ceCostCategoryRuleRuleOrOrDimensionToTerraform(struct?: CeCostCategoryRuleRuleOrOrDimensionOutputReference | CeCostCategoryRuleRuleOrOrDimension): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    match_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchOptions),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function ceCostCategoryRuleRuleOrOrDimensionToHclTerraform(struct?: CeCostCategoryRuleRuleOrOrDimensionOutputReference | CeCostCategoryRuleRuleOrOrDimension): any {
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
    match_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleOrOrDimensionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CeCostCategoryRuleRuleOrOrDimension | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRuleOrOrDimension | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface CeCostCategoryRuleRuleOrOrTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
  */
  readonly values?: string[];
}

export function ceCostCategoryRuleRuleOrOrTagsToTerraform(struct?: CeCostCategoryRuleRuleOrOrTagsOutputReference | CeCostCategoryRuleRuleOrOrTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    match_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchOptions),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function ceCostCategoryRuleRuleOrOrTagsToHclTerraform(struct?: CeCostCategoryRuleRuleOrOrTagsOutputReference | CeCostCategoryRuleRuleOrOrTags): any {
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
    match_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleOrOrTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CeCostCategoryRuleRuleOrOrTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRuleOrOrTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface CeCostCategoryRuleRuleOrOr {
  /**
  * cost_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#cost_category CeCostCategory#cost_category}
  */
  readonly costCategory?: CeCostCategoryRuleRuleOrOrCostCategory;
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#dimension CeCostCategory#dimension}
  */
  readonly dimension?: CeCostCategoryRuleRuleOrOrDimension;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#tags CeCostCategory#tags}
  */
  readonly tags?: CeCostCategoryRuleRuleOrOrTags;
}

export function ceCostCategoryRuleRuleOrOrToTerraform(struct?: CeCostCategoryRuleRuleOrOr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cost_category: ceCostCategoryRuleRuleOrOrCostCategoryToTerraform(struct!.costCategory),
    dimension: ceCostCategoryRuleRuleOrOrDimensionToTerraform(struct!.dimension),
    tags: ceCostCategoryRuleRuleOrOrTagsToTerraform(struct!.tags),
  }
}


export function ceCostCategoryRuleRuleOrOrToHclTerraform(struct?: CeCostCategoryRuleRuleOrOr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cost_category: {
      value: ceCostCategoryRuleRuleOrOrCostCategoryToHclTerraform(struct!.costCategory),
      isBlock: true,
      type: "list",
      storageClassType: "CeCostCategoryRuleRuleOrOrCostCategoryList",
    },
    dimension: {
      value: ceCostCategoryRuleRuleOrOrDimensionToHclTerraform(struct!.dimension),
      isBlock: true,
      type: "list",
      storageClassType: "CeCostCategoryRuleRuleOrOrDimensionList",
    },
    tags: {
      value: ceCostCategoryRuleRuleOrOrTagsToHclTerraform(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "CeCostCategoryRuleRuleOrOrTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleOrOrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CeCostCategoryRuleRuleOrOr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._costCategory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costCategory = this._costCategory?.internalValue;
    }
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRuleOrOr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._costCategory.internalValue = undefined;
      this._dimension.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._costCategory.internalValue = value.costCategory;
      this._dimension.internalValue = value.dimension;
      this._tags.internalValue = value.tags;
    }
  }

  // cost_category - computed: false, optional: true, required: false
  private _costCategory = new CeCostCategoryRuleRuleOrOrCostCategoryOutputReference(this, "cost_category");
  public get costCategory() {
    return this._costCategory;
  }
  public putCostCategory(value: CeCostCategoryRuleRuleOrOrCostCategory) {
    this._costCategory.internalValue = value;
  }
  public resetCostCategory() {
    this._costCategory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCategoryInput() {
    return this._costCategory.internalValue;
  }

  // dimension - computed: false, optional: true, required: false
  private _dimension = new CeCostCategoryRuleRuleOrOrDimensionOutputReference(this, "dimension");
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: CeCostCategoryRuleRuleOrOrDimension) {
    this._dimension.internalValue = value;
  }
  public resetDimension() {
    this._dimension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new CeCostCategoryRuleRuleOrOrTagsOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: CeCostCategoryRuleRuleOrOrTags) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class CeCostCategoryRuleRuleOrOrList extends cdktf.ComplexList {
  public internalValue? : CeCostCategoryRuleRuleOrOr[] | cdktf.IResolvable

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
  public get(index: number): CeCostCategoryRuleRuleOrOrOutputReference {
    return new CeCostCategoryRuleRuleOrOrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CeCostCategoryRuleRuleOrTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
  */
  readonly values?: string[];
}

export function ceCostCategoryRuleRuleOrTagsToTerraform(struct?: CeCostCategoryRuleRuleOrTagsOutputReference | CeCostCategoryRuleRuleOrTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    match_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchOptions),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function ceCostCategoryRuleRuleOrTagsToHclTerraform(struct?: CeCostCategoryRuleRuleOrTagsOutputReference | CeCostCategoryRuleRuleOrTags): any {
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
    match_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleOrTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CeCostCategoryRuleRuleOrTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRuleOrTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface CeCostCategoryRuleRuleOr {
  /**
  * and block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#and CeCostCategory#and}
  */
  readonly and?: CeCostCategoryRuleRuleOrAnd[] | cdktf.IResolvable;
  /**
  * cost_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#cost_category CeCostCategory#cost_category}
  */
  readonly costCategory?: CeCostCategoryRuleRuleOrCostCategory;
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#dimension CeCostCategory#dimension}
  */
  readonly dimension?: CeCostCategoryRuleRuleOrDimension;
  /**
  * not block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#not CeCostCategory#not}
  */
  readonly not?: CeCostCategoryRuleRuleOrNot;
  /**
  * or block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#or CeCostCategory#or}
  */
  readonly or?: CeCostCategoryRuleRuleOrOr[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#tags CeCostCategory#tags}
  */
  readonly tags?: CeCostCategoryRuleRuleOrTags;
}

export function ceCostCategoryRuleRuleOrToTerraform(struct?: CeCostCategoryRuleRuleOr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    and: cdktf.listMapper(ceCostCategoryRuleRuleOrAndToTerraform, true)(struct!.and),
    cost_category: ceCostCategoryRuleRuleOrCostCategoryToTerraform(struct!.costCategory),
    dimension: ceCostCategoryRuleRuleOrDimensionToTerraform(struct!.dimension),
    not: ceCostCategoryRuleRuleOrNotToTerraform(struct!.not),
    or: cdktf.listMapper(ceCostCategoryRuleRuleOrOrToTerraform, true)(struct!.or),
    tags: ceCostCategoryRuleRuleOrTagsToTerraform(struct!.tags),
  }
}


export function ceCostCategoryRuleRuleOrToHclTerraform(struct?: CeCostCategoryRuleRuleOr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    and: {
      value: cdktf.listMapperHcl(ceCostCategoryRuleRuleOrAndToHclTerraform, true)(struct!.and),
      isBlock: true,
      type: "set",
      storageClassType: "CeCostCategoryRuleRuleOrAndList",
    },
    cost_category: {
      value: ceCostCategoryRuleRuleOrCostCategoryToHclTerraform(struct!.costCategory),
      isBlock: true,
      type: "list",
      storageClassType: "CeCostCategoryRuleRuleOrCostCategoryList",
    },
    dimension: {
      value: ceCostCategoryRuleRuleOrDimensionToHclTerraform(struct!.dimension),
      isBlock: true,
      type: "list",
      storageClassType: "CeCostCategoryRuleRuleOrDimensionList",
    },
    not: {
      value: ceCostCategoryRuleRuleOrNotToHclTerraform(struct!.not),
      isBlock: true,
      type: "list",
      storageClassType: "CeCostCategoryRuleRuleOrNotList",
    },
    or: {
      value: cdktf.listMapperHcl(ceCostCategoryRuleRuleOrOrToHclTerraform, true)(struct!.or),
      isBlock: true,
      type: "set",
      storageClassType: "CeCostCategoryRuleRuleOrOrList",
    },
    tags: {
      value: ceCostCategoryRuleRuleOrTagsToHclTerraform(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "CeCostCategoryRuleRuleOrTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleOrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CeCostCategoryRuleRuleOr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._and?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.and = this._and?.internalValue;
    }
    if (this._costCategory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costCategory = this._costCategory?.internalValue;
    }
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    if (this._not?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.not = this._not?.internalValue;
    }
    if (this._or?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.or = this._or?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRuleOr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._and.internalValue = undefined;
      this._costCategory.internalValue = undefined;
      this._dimension.internalValue = undefined;
      this._not.internalValue = undefined;
      this._or.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._and.internalValue = value.and;
      this._costCategory.internalValue = value.costCategory;
      this._dimension.internalValue = value.dimension;
      this._not.internalValue = value.not;
      this._or.internalValue = value.or;
      this._tags.internalValue = value.tags;
    }
  }

  // and - computed: false, optional: true, required: false
  private _and = new CeCostCategoryRuleRuleOrAndList(this, "and", true);
  public get and() {
    return this._and;
  }
  public putAnd(value: CeCostCategoryRuleRuleOrAnd[] | cdktf.IResolvable) {
    this._and.internalValue = value;
  }
  public resetAnd() {
    this._and.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and.internalValue;
  }

  // cost_category - computed: false, optional: true, required: false
  private _costCategory = new CeCostCategoryRuleRuleOrCostCategoryOutputReference(this, "cost_category");
  public get costCategory() {
    return this._costCategory;
  }
  public putCostCategory(value: CeCostCategoryRuleRuleOrCostCategory) {
    this._costCategory.internalValue = value;
  }
  public resetCostCategory() {
    this._costCategory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCategoryInput() {
    return this._costCategory.internalValue;
  }

  // dimension - computed: false, optional: true, required: false
  private _dimension = new CeCostCategoryRuleRuleOrDimensionOutputReference(this, "dimension");
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: CeCostCategoryRuleRuleOrDimension) {
    this._dimension.internalValue = value;
  }
  public resetDimension() {
    this._dimension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }

  // not - computed: false, optional: true, required: false
  private _not = new CeCostCategoryRuleRuleOrNotOutputReference(this, "not");
  public get not() {
    return this._not;
  }
  public putNot(value: CeCostCategoryRuleRuleOrNot) {
    this._not.internalValue = value;
  }
  public resetNot() {
    this._not.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notInput() {
    return this._not.internalValue;
  }

  // or - computed: false, optional: true, required: false
  private _or = new CeCostCategoryRuleRuleOrOrList(this, "or", true);
  public get or() {
    return this._or;
  }
  public putOr(value: CeCostCategoryRuleRuleOrOr[] | cdktf.IResolvable) {
    this._or.internalValue = value;
  }
  public resetOr() {
    this._or.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orInput() {
    return this._or.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new CeCostCategoryRuleRuleOrTagsOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: CeCostCategoryRuleRuleOrTags) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class CeCostCategoryRuleRuleOrList extends cdktf.ComplexList {
  public internalValue? : CeCostCategoryRuleRuleOr[] | cdktf.IResolvable

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
  public get(index: number): CeCostCategoryRuleRuleOrOutputReference {
    return new CeCostCategoryRuleRuleOrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CeCostCategoryRuleRuleTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
  */
  readonly values?: string[];
}

export function ceCostCategoryRuleRuleTagsToTerraform(struct?: CeCostCategoryRuleRuleTagsOutputReference | CeCostCategoryRuleRuleTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    match_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchOptions),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function ceCostCategoryRuleRuleTagsToHclTerraform(struct?: CeCostCategoryRuleRuleTagsOutputReference | CeCostCategoryRuleRuleTags): any {
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
    match_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CeCostCategoryRuleRuleTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRuleTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface CeCostCategoryRuleRule {
  /**
  * and block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#and CeCostCategory#and}
  */
  readonly and?: CeCostCategoryRuleRuleAnd[] | cdktf.IResolvable;
  /**
  * cost_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#cost_category CeCostCategory#cost_category}
  */
  readonly costCategory?: CeCostCategoryRuleRuleCostCategory;
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#dimension CeCostCategory#dimension}
  */
  readonly dimension?: CeCostCategoryRuleRuleDimension;
  /**
  * not block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#not CeCostCategory#not}
  */
  readonly not?: CeCostCategoryRuleRuleNot;
  /**
  * or block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#or CeCostCategory#or}
  */
  readonly or?: CeCostCategoryRuleRuleOr[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#tags CeCostCategory#tags}
  */
  readonly tags?: CeCostCategoryRuleRuleTags;
}

export function ceCostCategoryRuleRuleToTerraform(struct?: CeCostCategoryRuleRuleOutputReference | CeCostCategoryRuleRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    and: cdktf.listMapper(ceCostCategoryRuleRuleAndToTerraform, true)(struct!.and),
    cost_category: ceCostCategoryRuleRuleCostCategoryToTerraform(struct!.costCategory),
    dimension: ceCostCategoryRuleRuleDimensionToTerraform(struct!.dimension),
    not: ceCostCategoryRuleRuleNotToTerraform(struct!.not),
    or: cdktf.listMapper(ceCostCategoryRuleRuleOrToTerraform, true)(struct!.or),
    tags: ceCostCategoryRuleRuleTagsToTerraform(struct!.tags),
  }
}


export function ceCostCategoryRuleRuleToHclTerraform(struct?: CeCostCategoryRuleRuleOutputReference | CeCostCategoryRuleRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    and: {
      value: cdktf.listMapperHcl(ceCostCategoryRuleRuleAndToHclTerraform, true)(struct!.and),
      isBlock: true,
      type: "set",
      storageClassType: "CeCostCategoryRuleRuleAndList",
    },
    cost_category: {
      value: ceCostCategoryRuleRuleCostCategoryToHclTerraform(struct!.costCategory),
      isBlock: true,
      type: "list",
      storageClassType: "CeCostCategoryRuleRuleCostCategoryList",
    },
    dimension: {
      value: ceCostCategoryRuleRuleDimensionToHclTerraform(struct!.dimension),
      isBlock: true,
      type: "list",
      storageClassType: "CeCostCategoryRuleRuleDimensionList",
    },
    not: {
      value: ceCostCategoryRuleRuleNotToHclTerraform(struct!.not),
      isBlock: true,
      type: "list",
      storageClassType: "CeCostCategoryRuleRuleNotList",
    },
    or: {
      value: cdktf.listMapperHcl(ceCostCategoryRuleRuleOrToHclTerraform, true)(struct!.or),
      isBlock: true,
      type: "set",
      storageClassType: "CeCostCategoryRuleRuleOrList",
    },
    tags: {
      value: ceCostCategoryRuleRuleTagsToHclTerraform(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "CeCostCategoryRuleRuleTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CeCostCategoryRuleRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._and?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.and = this._and?.internalValue;
    }
    if (this._costCategory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costCategory = this._costCategory?.internalValue;
    }
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    if (this._not?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.not = this._not?.internalValue;
    }
    if (this._or?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.or = this._or?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRuleRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._and.internalValue = undefined;
      this._costCategory.internalValue = undefined;
      this._dimension.internalValue = undefined;
      this._not.internalValue = undefined;
      this._or.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._and.internalValue = value.and;
      this._costCategory.internalValue = value.costCategory;
      this._dimension.internalValue = value.dimension;
      this._not.internalValue = value.not;
      this._or.internalValue = value.or;
      this._tags.internalValue = value.tags;
    }
  }

  // and - computed: false, optional: true, required: false
  private _and = new CeCostCategoryRuleRuleAndList(this, "and", true);
  public get and() {
    return this._and;
  }
  public putAnd(value: CeCostCategoryRuleRuleAnd[] | cdktf.IResolvable) {
    this._and.internalValue = value;
  }
  public resetAnd() {
    this._and.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and.internalValue;
  }

  // cost_category - computed: false, optional: true, required: false
  private _costCategory = new CeCostCategoryRuleRuleCostCategoryOutputReference(this, "cost_category");
  public get costCategory() {
    return this._costCategory;
  }
  public putCostCategory(value: CeCostCategoryRuleRuleCostCategory) {
    this._costCategory.internalValue = value;
  }
  public resetCostCategory() {
    this._costCategory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCategoryInput() {
    return this._costCategory.internalValue;
  }

  // dimension - computed: false, optional: true, required: false
  private _dimension = new CeCostCategoryRuleRuleDimensionOutputReference(this, "dimension");
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: CeCostCategoryRuleRuleDimension) {
    this._dimension.internalValue = value;
  }
  public resetDimension() {
    this._dimension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }

  // not - computed: false, optional: true, required: false
  private _not = new CeCostCategoryRuleRuleNotOutputReference(this, "not");
  public get not() {
    return this._not;
  }
  public putNot(value: CeCostCategoryRuleRuleNot) {
    this._not.internalValue = value;
  }
  public resetNot() {
    this._not.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notInput() {
    return this._not.internalValue;
  }

  // or - computed: false, optional: true, required: false
  private _or = new CeCostCategoryRuleRuleOrList(this, "or", true);
  public get or() {
    return this._or;
  }
  public putOr(value: CeCostCategoryRuleRuleOr[] | cdktf.IResolvable) {
    this._or.internalValue = value;
  }
  public resetOr() {
    this._or.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orInput() {
    return this._or.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new CeCostCategoryRuleRuleTagsOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: CeCostCategoryRuleRuleTags) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface CeCostCategoryRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#type CeCostCategory#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#value CeCostCategory#value}
  */
  readonly value?: string;
  /**
  * inherited_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#inherited_value CeCostCategory#inherited_value}
  */
  readonly inheritedValue?: CeCostCategoryRuleInheritedValue;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#rule CeCostCategory#rule}
  */
  readonly rule?: CeCostCategoryRuleRule;
}

export function ceCostCategoryRuleToTerraform(struct?: CeCostCategoryRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    inherited_value: ceCostCategoryRuleInheritedValueToTerraform(struct!.inheritedValue),
    rule: ceCostCategoryRuleRuleToTerraform(struct!.rule),
  }
}


export function ceCostCategoryRuleToHclTerraform(struct?: CeCostCategoryRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inherited_value: {
      value: ceCostCategoryRuleInheritedValueToHclTerraform(struct!.inheritedValue),
      isBlock: true,
      type: "list",
      storageClassType: "CeCostCategoryRuleInheritedValueList",
    },
    rule: {
      value: ceCostCategoryRuleRuleToHclTerraform(struct!.rule),
      isBlock: true,
      type: "list",
      storageClassType: "CeCostCategoryRuleRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategoryRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CeCostCategoryRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._inheritedValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inheritedValue = this._inheritedValue?.internalValue;
    }
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategoryRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
      this._inheritedValue.internalValue = undefined;
      this._rule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
      this._inheritedValue.internalValue = value.inheritedValue;
      this._rule.internalValue = value.rule;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // inherited_value - computed: false, optional: true, required: false
  private _inheritedValue = new CeCostCategoryRuleInheritedValueOutputReference(this, "inherited_value");
  public get inheritedValue() {
    return this._inheritedValue;
  }
  public putInheritedValue(value: CeCostCategoryRuleInheritedValue) {
    this._inheritedValue.internalValue = value;
  }
  public resetInheritedValue() {
    this._inheritedValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritedValueInput() {
    return this._inheritedValue.internalValue;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new CeCostCategoryRuleRuleOutputReference(this, "rule");
  public get rule() {
    return this._rule;
  }
  public putRule(value: CeCostCategoryRuleRule) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}

export class CeCostCategoryRuleList extends cdktf.ComplexList {
  public internalValue? : CeCostCategoryRule[] | cdktf.IResolvable

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
  public get(index: number): CeCostCategoryRuleOutputReference {
    return new CeCostCategoryRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CeCostCategorySplitChargeRuleParameter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#type CeCostCategory#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
  */
  readonly values?: string[];
}

export function ceCostCategorySplitChargeRuleParameterToTerraform(struct?: CeCostCategorySplitChargeRuleParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function ceCostCategorySplitChargeRuleParameterToHclTerraform(struct?: CeCostCategorySplitChargeRuleParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class CeCostCategorySplitChargeRuleParameterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CeCostCategorySplitChargeRuleParameter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategorySplitChargeRuleParameter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._values = value.values;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class CeCostCategorySplitChargeRuleParameterList extends cdktf.ComplexList {
  public internalValue? : CeCostCategorySplitChargeRuleParameter[] | cdktf.IResolvable

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
  public get(index: number): CeCostCategorySplitChargeRuleParameterOutputReference {
    return new CeCostCategorySplitChargeRuleParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CeCostCategorySplitChargeRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#method CeCostCategory#method}
  */
  readonly method: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#source CeCostCategory#source}
  */
  readonly source: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#targets CeCostCategory#targets}
  */
  readonly targets: string[];
  /**
  * parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#parameter CeCostCategory#parameter}
  */
  readonly parameter?: CeCostCategorySplitChargeRuleParameter[] | cdktf.IResolvable;
}

export function ceCostCategorySplitChargeRuleToTerraform(struct?: CeCostCategorySplitChargeRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    source: cdktf.stringToTerraform(struct!.source),
    targets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targets),
    parameter: cdktf.listMapper(ceCostCategorySplitChargeRuleParameterToTerraform, true)(struct!.parameter),
  }
}


export function ceCostCategorySplitChargeRuleToHclTerraform(struct?: CeCostCategorySplitChargeRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    targets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targets),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    parameter: {
      value: cdktf.listMapperHcl(ceCostCategorySplitChargeRuleParameterToHclTerraform, true)(struct!.parameter),
      isBlock: true,
      type: "set",
      storageClassType: "CeCostCategorySplitChargeRuleParameterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CeCostCategorySplitChargeRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CeCostCategorySplitChargeRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._targets !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets;
    }
    if (this._parameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter = this._parameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CeCostCategorySplitChargeRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._method = undefined;
      this._source = undefined;
      this._targets = undefined;
      this._parameter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._method = value.method;
      this._source = value.source;
      this._targets = value.targets;
      this._parameter.internalValue = value.parameter;
    }
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // targets - computed: false, optional: false, required: true
  private _targets?: string[]; 
  public get targets() {
    return cdktf.Fn.tolist(this.getListAttribute('targets'));
  }
  public set targets(value: string[]) {
    this._targets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets;
  }

  // parameter - computed: false, optional: true, required: false
  private _parameter = new CeCostCategorySplitChargeRuleParameterList(this, "parameter", true);
  public get parameter() {
    return this._parameter;
  }
  public putParameter(value: CeCostCategorySplitChargeRuleParameter[] | cdktf.IResolvable) {
    this._parameter.internalValue = value;
  }
  public resetParameter() {
    this._parameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter.internalValue;
  }
}

export class CeCostCategorySplitChargeRuleList extends cdktf.ComplexList {
  public internalValue? : CeCostCategorySplitChargeRule[] | cdktf.IResolvable

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
  public get(index: number): CeCostCategorySplitChargeRuleOutputReference {
    return new CeCostCategorySplitChargeRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category aws_ce_cost_category}
*/
export class CeCostCategory extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ce_cost_category";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CeCostCategory resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CeCostCategory to import
  * @param importFromId The id of the existing CeCostCategory that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CeCostCategory to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ce_cost_category", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category aws_ce_cost_category} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CeCostCategoryConfig
  */
  public constructor(scope: Construct, id: string, config: CeCostCategoryConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ce_cost_category',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.100.0',
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
    this._defaultValue = config.defaultValue;
    this._effectiveStart = config.effectiveStart;
    this._id = config.id;
    this._name = config.name;
    this._ruleVersion = config.ruleVersion;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._rule.internalValue = config.rule;
    this._splitChargeRule.internalValue = config.splitChargeRule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // effective_end - computed: true, optional: false, required: false
  public get effectiveEnd() {
    return this.getStringAttribute('effective_end');
  }

  // effective_start - computed: true, optional: true, required: false
  private _effectiveStart?: string; 
  public get effectiveStart() {
    return this.getStringAttribute('effective_start');
  }
  public set effectiveStart(value: string) {
    this._effectiveStart = value;
  }
  public resetEffectiveStart() {
    this._effectiveStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveStartInput() {
    return this._effectiveStart;
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

  // rule_version - computed: false, optional: false, required: true
  private _ruleVersion?: string; 
  public get ruleVersion() {
    return this.getStringAttribute('rule_version');
  }
  public set ruleVersion(value: string) {
    this._ruleVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleVersionInput() {
    return this._ruleVersion;
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

  // rule - computed: false, optional: false, required: true
  private _rule = new CeCostCategoryRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: CeCostCategoryRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // split_charge_rule - computed: false, optional: true, required: false
  private _splitChargeRule = new CeCostCategorySplitChargeRuleList(this, "split_charge_rule", true);
  public get splitChargeRule() {
    return this._splitChargeRule;
  }
  public putSplitChargeRule(value: CeCostCategorySplitChargeRule[] | cdktf.IResolvable) {
    this._splitChargeRule.internalValue = value;
  }
  public resetSplitChargeRule() {
    this._splitChargeRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitChargeRuleInput() {
    return this._splitChargeRule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_value: cdktf.stringToTerraform(this._defaultValue),
      effective_start: cdktf.stringToTerraform(this._effectiveStart),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      rule_version: cdktf.stringToTerraform(this._ruleVersion),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      rule: cdktf.listMapper(ceCostCategoryRuleToTerraform, true)(this._rule.internalValue),
      split_charge_rule: cdktf.listMapper(ceCostCategorySplitChargeRuleToTerraform, true)(this._splitChargeRule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_value: {
        value: cdktf.stringToHclTerraform(this._defaultValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      effective_start: {
        value: cdktf.stringToHclTerraform(this._effectiveStart),
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
      rule_version: {
        value: cdktf.stringToHclTerraform(this._ruleVersion),
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
      rule: {
        value: cdktf.listMapperHcl(ceCostCategoryRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CeCostCategoryRuleList",
      },
      split_charge_rule: {
        value: cdktf.listMapperHcl(ceCostCategorySplitChargeRuleToHclTerraform, true)(this._splitChargeRule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CeCostCategorySplitChargeRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
