/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/data-sources/devopsguru_resource_collection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsDevopsguruResourceCollectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/data-sources/devopsguru_resource_collection#type DataAwsDevopsguruResourceCollection#type}
  */
  readonly type: string;
  /**
  * cloudformation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/data-sources/devopsguru_resource_collection#cloudformation DataAwsDevopsguruResourceCollection#cloudformation}
  */
  readonly cloudformation?: DataAwsDevopsguruResourceCollectionCloudformation[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/data-sources/devopsguru_resource_collection#tags DataAwsDevopsguruResourceCollection#tags}
  */
  readonly tags?: DataAwsDevopsguruResourceCollectionTags[] | cdktf.IResolvable;
}
export interface DataAwsDevopsguruResourceCollectionCloudformation {
}

export function dataAwsDevopsguruResourceCollectionCloudformationToTerraform(struct?: DataAwsDevopsguruResourceCollectionCloudformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsDevopsguruResourceCollectionCloudformationToHclTerraform(struct?: DataAwsDevopsguruResourceCollectionCloudformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsDevopsguruResourceCollectionCloudformationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsDevopsguruResourceCollectionCloudformation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsDevopsguruResourceCollectionCloudformation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // stack_names - computed: true, optional: false, required: false
  public get stackNames() {
    return this.getListAttribute('stack_names');
  }
}

export class DataAwsDevopsguruResourceCollectionCloudformationList extends cdktf.ComplexList {
  public internalValue? : DataAwsDevopsguruResourceCollectionCloudformation[] | cdktf.IResolvable

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
  public get(index: number): DataAwsDevopsguruResourceCollectionCloudformationOutputReference {
    return new DataAwsDevopsguruResourceCollectionCloudformationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsDevopsguruResourceCollectionTags {
}

export function dataAwsDevopsguruResourceCollectionTagsToTerraform(struct?: DataAwsDevopsguruResourceCollectionTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsDevopsguruResourceCollectionTagsToHclTerraform(struct?: DataAwsDevopsguruResourceCollectionTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsDevopsguruResourceCollectionTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsDevopsguruResourceCollectionTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsDevopsguruResourceCollectionTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // app_boundary_key - computed: true, optional: false, required: false
  public get appBoundaryKey() {
    return this.getStringAttribute('app_boundary_key');
  }

  // tag_values - computed: true, optional: false, required: false
  public get tagValues() {
    return this.getListAttribute('tag_values');
  }
}

export class DataAwsDevopsguruResourceCollectionTagsList extends cdktf.ComplexList {
  public internalValue? : DataAwsDevopsguruResourceCollectionTags[] | cdktf.IResolvable

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
  public get(index: number): DataAwsDevopsguruResourceCollectionTagsOutputReference {
    return new DataAwsDevopsguruResourceCollectionTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/data-sources/devopsguru_resource_collection aws_devopsguru_resource_collection}
*/
export class DataAwsDevopsguruResourceCollection extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_devopsguru_resource_collection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsDevopsguruResourceCollection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsDevopsguruResourceCollection to import
  * @param importFromId The id of the existing DataAwsDevopsguruResourceCollection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/data-sources/devopsguru_resource_collection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsDevopsguruResourceCollection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_devopsguru_resource_collection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/data-sources/devopsguru_resource_collection aws_devopsguru_resource_collection} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsDevopsguruResourceCollectionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsDevopsguruResourceCollectionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_devopsguru_resource_collection',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.97.0',
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
    this._type = config.type;
    this._cloudformation.internalValue = config.cloudformation;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // cloudformation - computed: false, optional: true, required: false
  private _cloudformation = new DataAwsDevopsguruResourceCollectionCloudformationList(this, "cloudformation", false);
  public get cloudformation() {
    return this._cloudformation;
  }
  public putCloudformation(value: DataAwsDevopsguruResourceCollectionCloudformation[] | cdktf.IResolvable) {
    this._cloudformation.internalValue = value;
  }
  public resetCloudformation() {
    this._cloudformation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudformationInput() {
    return this._cloudformation.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataAwsDevopsguruResourceCollectionTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataAwsDevopsguruResourceCollectionTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      type: cdktf.stringToTerraform(this._type),
      cloudformation: cdktf.listMapper(dataAwsDevopsguruResourceCollectionCloudformationToTerraform, true)(this._cloudformation.internalValue),
      tags: cdktf.listMapper(dataAwsDevopsguruResourceCollectionTagsToTerraform, true)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloudformation: {
        value: cdktf.listMapperHcl(dataAwsDevopsguruResourceCollectionCloudformationToHclTerraform, true)(this._cloudformation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAwsDevopsguruResourceCollectionCloudformationList",
      },
      tags: {
        value: cdktf.listMapperHcl(dataAwsDevopsguruResourceCollectionTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAwsDevopsguruResourceCollectionTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
