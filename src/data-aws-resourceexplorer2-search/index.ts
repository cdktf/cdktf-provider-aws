/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/data-sources/resourceexplorer2_search
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsResourceexplorer2SearchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/data-sources/resourceexplorer2_search#query_string DataAwsResourceexplorer2Search#query_string}
  */
  readonly queryString: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/data-sources/resourceexplorer2_search#view_arn DataAwsResourceexplorer2Search#view_arn}
  */
  readonly viewArn?: string;
  /**
  * resource_count block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/data-sources/resourceexplorer2_search#resource_count DataAwsResourceexplorer2Search#resource_count}
  */
  readonly resourceCount?: DataAwsResourceexplorer2SearchResourceCount[] | cdktf.IResolvable;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/data-sources/resourceexplorer2_search#resources DataAwsResourceexplorer2Search#resources}
  */
  readonly resources?: DataAwsResourceexplorer2SearchResources[] | cdktf.IResolvable;
}
export interface DataAwsResourceexplorer2SearchResourceCount {
}

export function dataAwsResourceexplorer2SearchResourceCountToTerraform(struct?: DataAwsResourceexplorer2SearchResourceCount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsResourceexplorer2SearchResourceCountToHclTerraform(struct?: DataAwsResourceexplorer2SearchResourceCount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsResourceexplorer2SearchResourceCountOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsResourceexplorer2SearchResourceCount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsResourceexplorer2SearchResourceCount | cdktf.IResolvable | undefined) {
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

  // complete - computed: true, optional: false, required: false
  public get complete() {
    return this.getBooleanAttribute('complete');
  }

  // total_resources - computed: true, optional: false, required: false
  public get totalResources() {
    return this.getNumberAttribute('total_resources');
  }
}

export class DataAwsResourceexplorer2SearchResourceCountList extends cdktf.ComplexList {
  public internalValue? : DataAwsResourceexplorer2SearchResourceCount[] | cdktf.IResolvable

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
  public get(index: number): DataAwsResourceexplorer2SearchResourceCountOutputReference {
    return new DataAwsResourceexplorer2SearchResourceCountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsResourceexplorer2SearchResourcesResourceProperty {
}

export function dataAwsResourceexplorer2SearchResourcesResourcePropertyToTerraform(struct?: DataAwsResourceexplorer2SearchResourcesResourceProperty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsResourceexplorer2SearchResourcesResourcePropertyToHclTerraform(struct?: DataAwsResourceexplorer2SearchResourcesResourceProperty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsResourceexplorer2SearchResourcesResourcePropertyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsResourceexplorer2SearchResourcesResourceProperty | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsResourceexplorer2SearchResourcesResourceProperty | cdktf.IResolvable | undefined) {
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

  // data - computed: true, optional: false, required: false
  public get data() {
    return this.getStringAttribute('data');
  }

  // last_reported_at - computed: true, optional: false, required: false
  public get lastReportedAt() {
    return this.getStringAttribute('last_reported_at');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAwsResourceexplorer2SearchResourcesResourcePropertyList extends cdktf.ComplexList {
  public internalValue? : DataAwsResourceexplorer2SearchResourcesResourceProperty[] | cdktf.IResolvable

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
  public get(index: number): DataAwsResourceexplorer2SearchResourcesResourcePropertyOutputReference {
    return new DataAwsResourceexplorer2SearchResourcesResourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsResourceexplorer2SearchResources {
  /**
  * resource_property block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/data-sources/resourceexplorer2_search#resource_property DataAwsResourceexplorer2Search#resource_property}
  */
  readonly resourceProperty?: DataAwsResourceexplorer2SearchResourcesResourceProperty[] | cdktf.IResolvable;
}

export function dataAwsResourceexplorer2SearchResourcesToTerraform(struct?: DataAwsResourceexplorer2SearchResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_property: cdktf.listMapper(dataAwsResourceexplorer2SearchResourcesResourcePropertyToTerraform, true)(struct!.resourceProperty),
  }
}


export function dataAwsResourceexplorer2SearchResourcesToHclTerraform(struct?: DataAwsResourceexplorer2SearchResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_property: {
      value: cdktf.listMapperHcl(dataAwsResourceexplorer2SearchResourcesResourcePropertyToHclTerraform, true)(struct!.resourceProperty),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsResourceexplorer2SearchResourcesResourcePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsResourceexplorer2SearchResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsResourceexplorer2SearchResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceProperty?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceProperty = this._resourceProperty?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsResourceexplorer2SearchResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceProperty.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceProperty.internalValue = value.resourceProperty;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // last_reported_at - computed: true, optional: false, required: false
  public get lastReportedAt() {
    return this.getStringAttribute('last_reported_at');
  }

  // owning_account_id - computed: true, optional: false, required: false
  public get owningAccountId() {
    return this.getStringAttribute('owning_account_id');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }

  // resource_property - computed: false, optional: true, required: false
  private _resourceProperty = new DataAwsResourceexplorer2SearchResourcesResourcePropertyList(this, "resource_property", false);
  public get resourceProperty() {
    return this._resourceProperty;
  }
  public putResourceProperty(value: DataAwsResourceexplorer2SearchResourcesResourceProperty[] | cdktf.IResolvable) {
    this._resourceProperty.internalValue = value;
  }
  public resetResourceProperty() {
    this._resourceProperty.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePropertyInput() {
    return this._resourceProperty.internalValue;
  }
}

export class DataAwsResourceexplorer2SearchResourcesList extends cdktf.ComplexList {
  public internalValue? : DataAwsResourceexplorer2SearchResources[] | cdktf.IResolvable

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
  public get(index: number): DataAwsResourceexplorer2SearchResourcesOutputReference {
    return new DataAwsResourceexplorer2SearchResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/data-sources/resourceexplorer2_search aws_resourceexplorer2_search}
*/
export class DataAwsResourceexplorer2Search extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_resourceexplorer2_search";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsResourceexplorer2Search resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsResourceexplorer2Search to import
  * @param importFromId The id of the existing DataAwsResourceexplorer2Search that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/data-sources/resourceexplorer2_search#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsResourceexplorer2Search to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_resourceexplorer2_search", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/data-sources/resourceexplorer2_search aws_resourceexplorer2_search} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsResourceexplorer2SearchConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsResourceexplorer2SearchConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_resourceexplorer2_search',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.44.0',
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
    this._queryString = config.queryString;
    this._viewArn = config.viewArn;
    this._resourceCount.internalValue = config.resourceCount;
    this._resources.internalValue = config.resources;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // query_string - computed: false, optional: false, required: true
  private _queryString?: string; 
  public get queryString() {
    return this.getStringAttribute('query_string');
  }
  public set queryString(value: string) {
    this._queryString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString;
  }

  // view_arn - computed: false, optional: true, required: false
  private _viewArn?: string; 
  public get viewArn() {
    return this.getStringAttribute('view_arn');
  }
  public set viewArn(value: string) {
    this._viewArn = value;
  }
  public resetViewArn() {
    this._viewArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewArnInput() {
    return this._viewArn;
  }

  // resource_count - computed: false, optional: true, required: false
  private _resourceCount = new DataAwsResourceexplorer2SearchResourceCountList(this, "resource_count", false);
  public get resourceCount() {
    return this._resourceCount;
  }
  public putResourceCount(value: DataAwsResourceexplorer2SearchResourceCount[] | cdktf.IResolvable) {
    this._resourceCount.internalValue = value;
  }
  public resetResourceCount() {
    this._resourceCount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceCountInput() {
    return this._resourceCount.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataAwsResourceexplorer2SearchResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataAwsResourceexplorer2SearchResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      query_string: cdktf.stringToTerraform(this._queryString),
      view_arn: cdktf.stringToTerraform(this._viewArn),
      resource_count: cdktf.listMapper(dataAwsResourceexplorer2SearchResourceCountToTerraform, true)(this._resourceCount.internalValue),
      resources: cdktf.listMapper(dataAwsResourceexplorer2SearchResourcesToTerraform, true)(this._resources.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      query_string: {
        value: cdktf.stringToHclTerraform(this._queryString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      view_arn: {
        value: cdktf.stringToHclTerraform(this._viewArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_count: {
        value: cdktf.listMapperHcl(dataAwsResourceexplorer2SearchResourceCountToHclTerraform, true)(this._resourceCount.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAwsResourceexplorer2SearchResourceCountList",
      },
      resources: {
        value: cdktf.listMapperHcl(dataAwsResourceexplorer2SearchResourcesToHclTerraform, true)(this._resources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAwsResourceexplorer2SearchResourcesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
