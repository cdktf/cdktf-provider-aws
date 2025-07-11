/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/resourcegroupstaggingapi_resources
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsResourcegroupstaggingapiResourcesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/resourcegroupstaggingapi_resources#exclude_compliant_resources DataAwsResourcegroupstaggingapiResources#exclude_compliant_resources}
  */
  readonly excludeCompliantResources?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/resourcegroupstaggingapi_resources#id DataAwsResourcegroupstaggingapiResources#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/resourcegroupstaggingapi_resources#include_compliance_details DataAwsResourcegroupstaggingapiResources#include_compliance_details}
  */
  readonly includeComplianceDetails?: boolean | cdktf.IResolvable;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/resourcegroupstaggingapi_resources#region DataAwsResourcegroupstaggingapiResources#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/resourcegroupstaggingapi_resources#resource_arn_list DataAwsResourcegroupstaggingapiResources#resource_arn_list}
  */
  readonly resourceArnList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/resourcegroupstaggingapi_resources#resource_type_filters DataAwsResourcegroupstaggingapiResources#resource_type_filters}
  */
  readonly resourceTypeFilters?: string[];
  /**
  * tag_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/resourcegroupstaggingapi_resources#tag_filter DataAwsResourcegroupstaggingapiResources#tag_filter}
  */
  readonly tagFilter?: DataAwsResourcegroupstaggingapiResourcesTagFilter[] | cdktf.IResolvable;
}
export interface DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails {
}

export function dataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsToTerraform(struct?: DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsToHclTerraform(struct?: DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compliance_status - computed: true, optional: false, required: false
  public get complianceStatus() {
    return this.getBooleanAttribute('compliance_status');
  }

  // keys_with_noncompliant_values - computed: true, optional: false, required: false
  public get keysWithNoncompliantValues() {
    return cdktf.Fn.tolist(this.getListAttribute('keys_with_noncompliant_values'));
  }

  // non_compliant_keys - computed: true, optional: false, required: false
  public get nonCompliantKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('non_compliant_keys'));
  }
}

export class DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference {
    return new DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListStruct {
}

export function dataAwsResourcegroupstaggingapiResourcesResourceTagMappingListStructToTerraform(struct?: DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsResourcegroupstaggingapiResourcesResourceTagMappingListStructToHclTerraform(struct?: DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compliance_details - computed: true, optional: false, required: false
  private _complianceDetails = new DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList(this, "compliance_details", false);
  public get complianceDetails() {
    return this._complianceDetails;
  }

  // resource_arn - computed: true, optional: false, required: false
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }
}

export class DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListStructOutputReference {
    return new DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsResourcegroupstaggingapiResourcesTagFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/resourcegroupstaggingapi_resources#key DataAwsResourcegroupstaggingapiResources#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/resourcegroupstaggingapi_resources#values DataAwsResourcegroupstaggingapiResources#values}
  */
  readonly values?: string[];
}

export function dataAwsResourcegroupstaggingapiResourcesTagFilterToTerraform(struct?: DataAwsResourcegroupstaggingapiResourcesTagFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataAwsResourcegroupstaggingapiResourcesTagFilterToHclTerraform(struct?: DataAwsResourcegroupstaggingapiResourcesTagFilter | cdktf.IResolvable): any {
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

export class DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsResourcegroupstaggingapiResourcesTagFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataAwsResourcegroupstaggingapiResourcesTagFilter | cdktf.IResolvable | undefined) {
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

export class DataAwsResourcegroupstaggingapiResourcesTagFilterList extends cdktf.ComplexList {
  public internalValue? : DataAwsResourcegroupstaggingapiResourcesTagFilter[] | cdktf.IResolvable

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
  public get(index: number): DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference {
    return new DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/resourcegroupstaggingapi_resources aws_resourcegroupstaggingapi_resources}
*/
export class DataAwsResourcegroupstaggingapiResources extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_resourcegroupstaggingapi_resources";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsResourcegroupstaggingapiResources resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsResourcegroupstaggingapiResources to import
  * @param importFromId The id of the existing DataAwsResourcegroupstaggingapiResources that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/resourcegroupstaggingapi_resources#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsResourcegroupstaggingapiResources to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_resourcegroupstaggingapi_resources", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/resourcegroupstaggingapi_resources aws_resourcegroupstaggingapi_resources} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsResourcegroupstaggingapiResourcesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsResourcegroupstaggingapiResourcesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_resourcegroupstaggingapi_resources',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.3.0',
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
    this._excludeCompliantResources = config.excludeCompliantResources;
    this._id = config.id;
    this._includeComplianceDetails = config.includeComplianceDetails;
    this._region = config.region;
    this._resourceArnList = config.resourceArnList;
    this._resourceTypeFilters = config.resourceTypeFilters;
    this._tagFilter.internalValue = config.tagFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // exclude_compliant_resources - computed: false, optional: true, required: false
  private _excludeCompliantResources?: boolean | cdktf.IResolvable; 
  public get excludeCompliantResources() {
    return this.getBooleanAttribute('exclude_compliant_resources');
  }
  public set excludeCompliantResources(value: boolean | cdktf.IResolvable) {
    this._excludeCompliantResources = value;
  }
  public resetExcludeCompliantResources() {
    this._excludeCompliantResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeCompliantResourcesInput() {
    return this._excludeCompliantResources;
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

  // include_compliance_details - computed: false, optional: true, required: false
  private _includeComplianceDetails?: boolean | cdktf.IResolvable; 
  public get includeComplianceDetails() {
    return this.getBooleanAttribute('include_compliance_details');
  }
  public set includeComplianceDetails(value: boolean | cdktf.IResolvable) {
    this._includeComplianceDetails = value;
  }
  public resetIncludeComplianceDetails() {
    this._includeComplianceDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeComplianceDetailsInput() {
    return this._includeComplianceDetails;
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

  // resource_arn_list - computed: false, optional: true, required: false
  private _resourceArnList?: string[]; 
  public get resourceArnList() {
    return cdktf.Fn.tolist(this.getListAttribute('resource_arn_list'));
  }
  public set resourceArnList(value: string[]) {
    this._resourceArnList = value;
  }
  public resetResourceArnList() {
    this._resourceArnList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnListInput() {
    return this._resourceArnList;
  }

  // resource_tag_mapping_list - computed: true, optional: false, required: false
  private _resourceTagMappingList = new DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListStructList(this, "resource_tag_mapping_list", false);
  public get resourceTagMappingList() {
    return this._resourceTagMappingList;
  }

  // resource_type_filters - computed: false, optional: true, required: false
  private _resourceTypeFilters?: string[]; 
  public get resourceTypeFilters() {
    return cdktf.Fn.tolist(this.getListAttribute('resource_type_filters'));
  }
  public set resourceTypeFilters(value: string[]) {
    this._resourceTypeFilters = value;
  }
  public resetResourceTypeFilters() {
    this._resourceTypeFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeFiltersInput() {
    return this._resourceTypeFilters;
  }

  // tag_filter - computed: false, optional: true, required: false
  private _tagFilter = new DataAwsResourcegroupstaggingapiResourcesTagFilterList(this, "tag_filter", false);
  public get tagFilter() {
    return this._tagFilter;
  }
  public putTagFilter(value: DataAwsResourcegroupstaggingapiResourcesTagFilter[] | cdktf.IResolvable) {
    this._tagFilter.internalValue = value;
  }
  public resetTagFilter() {
    this._tagFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagFilterInput() {
    return this._tagFilter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      exclude_compliant_resources: cdktf.booleanToTerraform(this._excludeCompliantResources),
      id: cdktf.stringToTerraform(this._id),
      include_compliance_details: cdktf.booleanToTerraform(this._includeComplianceDetails),
      region: cdktf.stringToTerraform(this._region),
      resource_arn_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resourceArnList),
      resource_type_filters: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resourceTypeFilters),
      tag_filter: cdktf.listMapper(dataAwsResourcegroupstaggingapiResourcesTagFilterToTerraform, true)(this._tagFilter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      exclude_compliant_resources: {
        value: cdktf.booleanToHclTerraform(this._excludeCompliantResources),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_compliance_details: {
        value: cdktf.booleanToHclTerraform(this._includeComplianceDetails),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_arn_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._resourceArnList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      resource_type_filters: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._resourceTypeFilters),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tag_filter: {
        value: cdktf.listMapperHcl(dataAwsResourcegroupstaggingapiResourcesTagFilterToHclTerraform, true)(this._tagFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAwsResourcegroupstaggingapiResourcesTagFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
