/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/data-sources/ssm_patch_baselines
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsSsmPatchBaselinesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/data-sources/ssm_patch_baselines#default_baselines DataAwsSsmPatchBaselines#default_baselines}
  */
  readonly defaultBaselines?: boolean | cdktf.IResolvable;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/data-sources/ssm_patch_baselines#filter DataAwsSsmPatchBaselines#filter}
  */
  readonly filter?: DataAwsSsmPatchBaselinesFilter[] | cdktf.IResolvable;
}
export interface DataAwsSsmPatchBaselinesBaselineIdentities {
}

export function dataAwsSsmPatchBaselinesBaselineIdentitiesToTerraform(struct?: DataAwsSsmPatchBaselinesBaselineIdentities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsSsmPatchBaselinesBaselineIdentitiesToHclTerraform(struct?: DataAwsSsmPatchBaselinesBaselineIdentities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsSsmPatchBaselinesBaselineIdentities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsSsmPatchBaselinesBaselineIdentities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // baseline_description - computed: true, optional: false, required: false
  public get baselineDescription() {
    return this.getStringAttribute('baseline_description');
  }

  // baseline_id - computed: true, optional: false, required: false
  public get baselineId() {
    return this.getStringAttribute('baseline_id');
  }

  // baseline_name - computed: true, optional: false, required: false
  public get baselineName() {
    return this.getStringAttribute('baseline_name');
  }

  // default_baseline - computed: true, optional: false, required: false
  public get defaultBaseline() {
    return this.getBooleanAttribute('default_baseline');
  }

  // operating_system - computed: true, optional: false, required: false
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }
}

export class DataAwsSsmPatchBaselinesBaselineIdentitiesList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference {
    return new DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsSsmPatchBaselinesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/data-sources/ssm_patch_baselines#key DataAwsSsmPatchBaselines#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/data-sources/ssm_patch_baselines#values DataAwsSsmPatchBaselines#values}
  */
  readonly values: string[];
}

export function dataAwsSsmPatchBaselinesFilterToTerraform(struct?: DataAwsSsmPatchBaselinesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataAwsSsmPatchBaselinesFilterToHclTerraform(struct?: DataAwsSsmPatchBaselinesFilter | cdktf.IResolvable): any {
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
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsSsmPatchBaselinesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsSsmPatchBaselinesFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataAwsSsmPatchBaselinesFilter | cdktf.IResolvable | undefined) {
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
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataAwsSsmPatchBaselinesFilterList extends cdktf.ComplexList {
  public internalValue? : DataAwsSsmPatchBaselinesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataAwsSsmPatchBaselinesFilterOutputReference {
    return new DataAwsSsmPatchBaselinesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/data-sources/ssm_patch_baselines aws_ssm_patch_baselines}
*/
export class DataAwsSsmPatchBaselines extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ssm_patch_baselines";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsSsmPatchBaselines resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsSsmPatchBaselines to import
  * @param importFromId The id of the existing DataAwsSsmPatchBaselines that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/data-sources/ssm_patch_baselines#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsSsmPatchBaselines to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ssm_patch_baselines", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/data-sources/ssm_patch_baselines aws_ssm_patch_baselines} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsSsmPatchBaselinesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsSsmPatchBaselinesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_ssm_patch_baselines',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.99.1',
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
    this._defaultBaselines = config.defaultBaselines;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // baseline_identities - computed: true, optional: false, required: false
  private _baselineIdentities = new DataAwsSsmPatchBaselinesBaselineIdentitiesList(this, "baseline_identities", false);
  public get baselineIdentities() {
    return this._baselineIdentities;
  }

  // default_baselines - computed: false, optional: true, required: false
  private _defaultBaselines?: boolean | cdktf.IResolvable; 
  public get defaultBaselines() {
    return this.getBooleanAttribute('default_baselines');
  }
  public set defaultBaselines(value: boolean | cdktf.IResolvable) {
    this._defaultBaselines = value;
  }
  public resetDefaultBaselines() {
    this._defaultBaselines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultBaselinesInput() {
    return this._defaultBaselines;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataAwsSsmPatchBaselinesFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataAwsSsmPatchBaselinesFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_baselines: cdktf.booleanToTerraform(this._defaultBaselines),
      filter: cdktf.listMapper(dataAwsSsmPatchBaselinesFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_baselines: {
        value: cdktf.booleanToHclTerraform(this._defaultBaselines),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filter: {
        value: cdktf.listMapperHcl(dataAwsSsmPatchBaselinesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAwsSsmPatchBaselinesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
