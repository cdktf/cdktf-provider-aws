/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudtrailConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail#cloud_watch_logs_group_arn Cloudtrail#cloud_watch_logs_group_arn}
  */
  readonly cloudWatchLogsGroupArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail#cloud_watch_logs_role_arn Cloudtrail#cloud_watch_logs_role_arn}
  */
  readonly cloudWatchLogsRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail#enable_log_file_validation Cloudtrail#enable_log_file_validation}
  */
  readonly enableLogFileValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail#enable_logging Cloudtrail#enable_logging}
  */
  readonly enableLogging?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail#id Cloudtrail#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail#include_global_service_events Cloudtrail#include_global_service_events}
  */
  readonly includeGlobalServiceEvents?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail#is_multi_region_trail Cloudtrail#is_multi_region_trail}
  */
  readonly isMultiRegionTrail?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail#is_organization_trail Cloudtrail#is_organization_trail}
  */
  readonly isOrganizationTrail?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail#kms_key_id Cloudtrail#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail#name Cloudtrail#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail#region Cloudtrail#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail#s3_bucket_name Cloudtrail#s3_bucket_name}
  */
  readonly s3BucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail#s3_key_prefix Cloudtrail#s3_key_prefix}
  */
  readonly s3KeyPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail#sns_topic_name Cloudtrail#sns_topic_name}
  */
  readonly snsTopicName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail#tags Cloudtrail#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail#tags_all Cloudtrail#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * advanced_event_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail#advanced_event_selector Cloudtrail#advanced_event_selector}
  */
  readonly advancedEventSelector?: CloudtrailAdvancedEventSelector[] | cdktf.IResolvable;
  /**
  * event_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail#event_selector Cloudtrail#event_selector}
  */
  readonly eventSelector?: CloudtrailEventSelector[] | cdktf.IResolvable;
  /**
  * insight_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail#insight_selector Cloudtrail#insight_selector}
  */
  readonly insightSelector?: CloudtrailInsightSelector[] | cdktf.IResolvable;
}
export interface CloudtrailAdvancedEventSelectorFieldSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail#ends_with Cloudtrail#ends_with}
  */
  readonly endsWith?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail#equals Cloudtrail#equals}
  */
  readonly equalTo?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail#field Cloudtrail#field}
  */
  readonly field: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail#not_ends_with Cloudtrail#not_ends_with}
  */
  readonly notEndsWith?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail#not_equals Cloudtrail#not_equals}
  */
  readonly notEquals?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail#not_starts_with Cloudtrail#not_starts_with}
  */
  readonly notStartsWith?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail#starts_with Cloudtrail#starts_with}
  */
  readonly startsWith?: string[];
}

export function cloudtrailAdvancedEventSelectorFieldSelectorToTerraform(struct?: CloudtrailAdvancedEventSelectorFieldSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ends_with: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.endsWith),
    equals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.equalTo),
    field: cdktf.stringToTerraform(struct!.field),
    not_ends_with: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notEndsWith),
    not_equals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notEquals),
    not_starts_with: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notStartsWith),
    starts_with: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.startsWith),
  }
}


export function cloudtrailAdvancedEventSelectorFieldSelectorToHclTerraform(struct?: CloudtrailAdvancedEventSelectorFieldSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ends_with: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.endsWith),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    equals: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.equalTo),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_ends_with: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notEndsWith),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    not_equals: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notEquals),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    not_starts_with: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notStartsWith),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    starts_with: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.startsWith),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudtrailAdvancedEventSelectorFieldSelectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudtrailAdvancedEventSelectorFieldSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.endsWith = this._endsWith;
    }
    if (this._equals !== undefined) {
      hasAnyValues = true;
      internalValueResult.equalTo = this._equals;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._notEndsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.notEndsWith = this._notEndsWith;
    }
    if (this._notEquals !== undefined) {
      hasAnyValues = true;
      internalValueResult.notEquals = this._notEquals;
    }
    if (this._notStartsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.notStartsWith = this._notStartsWith;
    }
    if (this._startsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.startsWith = this._startsWith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudtrailAdvancedEventSelectorFieldSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endsWith = undefined;
      this._equals = undefined;
      this._field = undefined;
      this._notEndsWith = undefined;
      this._notEquals = undefined;
      this._notStartsWith = undefined;
      this._startsWith = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endsWith = value.endsWith;
      this._equals = value.equalTo;
      this._field = value.field;
      this._notEndsWith = value.notEndsWith;
      this._notEquals = value.notEquals;
      this._notStartsWith = value.notStartsWith;
      this._startsWith = value.startsWith;
    }
  }

  // ends_with - computed: false, optional: true, required: false
  private _endsWith?: string[]; 
  public get endsWith() {
    return this.getListAttribute('ends_with');
  }
  public set endsWith(value: string[]) {
    this._endsWith = value;
  }
  public resetEndsWith() {
    this._endsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endsWithInput() {
    return this._endsWith;
  }

  // equals - computed: false, optional: true, required: false
  private _equals?: string[]; 
  public get equalTo() {
    return this.getListAttribute('equals');
  }
  public set equalTo(value: string[]) {
    this._equals = value;
  }
  public resetEqualTo() {
    this._equals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get equalToInput() {
    return this._equals;
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // not_ends_with - computed: false, optional: true, required: false
  private _notEndsWith?: string[]; 
  public get notEndsWith() {
    return this.getListAttribute('not_ends_with');
  }
  public set notEndsWith(value: string[]) {
    this._notEndsWith = value;
  }
  public resetNotEndsWith() {
    this._notEndsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notEndsWithInput() {
    return this._notEndsWith;
  }

  // not_equals - computed: false, optional: true, required: false
  private _notEquals?: string[]; 
  public get notEquals() {
    return this.getListAttribute('not_equals');
  }
  public set notEquals(value: string[]) {
    this._notEquals = value;
  }
  public resetNotEquals() {
    this._notEquals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notEqualsInput() {
    return this._notEquals;
  }

  // not_starts_with - computed: false, optional: true, required: false
  private _notStartsWith?: string[]; 
  public get notStartsWith() {
    return this.getListAttribute('not_starts_with');
  }
  public set notStartsWith(value: string[]) {
    this._notStartsWith = value;
  }
  public resetNotStartsWith() {
    this._notStartsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notStartsWithInput() {
    return this._notStartsWith;
  }

  // starts_with - computed: false, optional: true, required: false
  private _startsWith?: string[]; 
  public get startsWith() {
    return this.getListAttribute('starts_with');
  }
  public set startsWith(value: string[]) {
    this._startsWith = value;
  }
  public resetStartsWith() {
    this._startsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startsWithInput() {
    return this._startsWith;
  }
}

export class CloudtrailAdvancedEventSelectorFieldSelectorList extends cdktf.ComplexList {
  public internalValue? : CloudtrailAdvancedEventSelectorFieldSelector[] | cdktf.IResolvable

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
  public get(index: number): CloudtrailAdvancedEventSelectorFieldSelectorOutputReference {
    return new CloudtrailAdvancedEventSelectorFieldSelectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudtrailAdvancedEventSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail#name Cloudtrail#name}
  */
  readonly name?: string;
  /**
  * field_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail#field_selector Cloudtrail#field_selector}
  */
  readonly fieldSelector: CloudtrailAdvancedEventSelectorFieldSelector[] | cdktf.IResolvable;
}

export function cloudtrailAdvancedEventSelectorToTerraform(struct?: CloudtrailAdvancedEventSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    field_selector: cdktf.listMapper(cloudtrailAdvancedEventSelectorFieldSelectorToTerraform, true)(struct!.fieldSelector),
  }
}


export function cloudtrailAdvancedEventSelectorToHclTerraform(struct?: CloudtrailAdvancedEventSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_selector: {
      value: cdktf.listMapperHcl(cloudtrailAdvancedEventSelectorFieldSelectorToHclTerraform, true)(struct!.fieldSelector),
      isBlock: true,
      type: "set",
      storageClassType: "CloudtrailAdvancedEventSelectorFieldSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudtrailAdvancedEventSelectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudtrailAdvancedEventSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._fieldSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldSelector = this._fieldSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudtrailAdvancedEventSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._fieldSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._fieldSelector.internalValue = value.fieldSelector;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // field_selector - computed: false, optional: false, required: true
  private _fieldSelector = new CloudtrailAdvancedEventSelectorFieldSelectorList(this, "field_selector", true);
  public get fieldSelector() {
    return this._fieldSelector;
  }
  public putFieldSelector(value: CloudtrailAdvancedEventSelectorFieldSelector[] | cdktf.IResolvable) {
    this._fieldSelector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldSelectorInput() {
    return this._fieldSelector.internalValue;
  }
}

export class CloudtrailAdvancedEventSelectorList extends cdktf.ComplexList {
  public internalValue? : CloudtrailAdvancedEventSelector[] | cdktf.IResolvable

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
  public get(index: number): CloudtrailAdvancedEventSelectorOutputReference {
    return new CloudtrailAdvancedEventSelectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudtrailEventSelectorDataResource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail#type Cloudtrail#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail#values Cloudtrail#values}
  */
  readonly values: string[];
}

export function cloudtrailEventSelectorDataResourceToTerraform(struct?: CloudtrailEventSelectorDataResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function cloudtrailEventSelectorDataResourceToHclTerraform(struct?: CloudtrailEventSelectorDataResource | cdktf.IResolvable): any {
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

export class CloudtrailEventSelectorDataResourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudtrailEventSelectorDataResource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudtrailEventSelectorDataResource | cdktf.IResolvable | undefined) {
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

export class CloudtrailEventSelectorDataResourceList extends cdktf.ComplexList {
  public internalValue? : CloudtrailEventSelectorDataResource[] | cdktf.IResolvable

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
  public get(index: number): CloudtrailEventSelectorDataResourceOutputReference {
    return new CloudtrailEventSelectorDataResourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudtrailEventSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail#exclude_management_event_sources Cloudtrail#exclude_management_event_sources}
  */
  readonly excludeManagementEventSources?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail#include_management_events Cloudtrail#include_management_events}
  */
  readonly includeManagementEvents?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail#read_write_type Cloudtrail#read_write_type}
  */
  readonly readWriteType?: string;
  /**
  * data_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail#data_resource Cloudtrail#data_resource}
  */
  readonly dataResource?: CloudtrailEventSelectorDataResource[] | cdktf.IResolvable;
}

export function cloudtrailEventSelectorToTerraform(struct?: CloudtrailEventSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_management_event_sources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeManagementEventSources),
    include_management_events: cdktf.booleanToTerraform(struct!.includeManagementEvents),
    read_write_type: cdktf.stringToTerraform(struct!.readWriteType),
    data_resource: cdktf.listMapper(cloudtrailEventSelectorDataResourceToTerraform, true)(struct!.dataResource),
  }
}


export function cloudtrailEventSelectorToHclTerraform(struct?: CloudtrailEventSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_management_event_sources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeManagementEventSources),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    include_management_events: {
      value: cdktf.booleanToHclTerraform(struct!.includeManagementEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    read_write_type: {
      value: cdktf.stringToHclTerraform(struct!.readWriteType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_resource: {
      value: cdktf.listMapperHcl(cloudtrailEventSelectorDataResourceToHclTerraform, true)(struct!.dataResource),
      isBlock: true,
      type: "list",
      storageClassType: "CloudtrailEventSelectorDataResourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudtrailEventSelectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudtrailEventSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeManagementEventSources !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeManagementEventSources = this._excludeManagementEventSources;
    }
    if (this._includeManagementEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeManagementEvents = this._includeManagementEvents;
    }
    if (this._readWriteType !== undefined) {
      hasAnyValues = true;
      internalValueResult.readWriteType = this._readWriteType;
    }
    if (this._dataResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataResource = this._dataResource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudtrailEventSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludeManagementEventSources = undefined;
      this._includeManagementEvents = undefined;
      this._readWriteType = undefined;
      this._dataResource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludeManagementEventSources = value.excludeManagementEventSources;
      this._includeManagementEvents = value.includeManagementEvents;
      this._readWriteType = value.readWriteType;
      this._dataResource.internalValue = value.dataResource;
    }
  }

  // exclude_management_event_sources - computed: false, optional: true, required: false
  private _excludeManagementEventSources?: string[]; 
  public get excludeManagementEventSources() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_management_event_sources'));
  }
  public set excludeManagementEventSources(value: string[]) {
    this._excludeManagementEventSources = value;
  }
  public resetExcludeManagementEventSources() {
    this._excludeManagementEventSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeManagementEventSourcesInput() {
    return this._excludeManagementEventSources;
  }

  // include_management_events - computed: false, optional: true, required: false
  private _includeManagementEvents?: boolean | cdktf.IResolvable; 
  public get includeManagementEvents() {
    return this.getBooleanAttribute('include_management_events');
  }
  public set includeManagementEvents(value: boolean | cdktf.IResolvable) {
    this._includeManagementEvents = value;
  }
  public resetIncludeManagementEvents() {
    this._includeManagementEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeManagementEventsInput() {
    return this._includeManagementEvents;
  }

  // read_write_type - computed: false, optional: true, required: false
  private _readWriteType?: string; 
  public get readWriteType() {
    return this.getStringAttribute('read_write_type');
  }
  public set readWriteType(value: string) {
    this._readWriteType = value;
  }
  public resetReadWriteType() {
    this._readWriteType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readWriteTypeInput() {
    return this._readWriteType;
  }

  // data_resource - computed: false, optional: true, required: false
  private _dataResource = new CloudtrailEventSelectorDataResourceList(this, "data_resource", false);
  public get dataResource() {
    return this._dataResource;
  }
  public putDataResource(value: CloudtrailEventSelectorDataResource[] | cdktf.IResolvable) {
    this._dataResource.internalValue = value;
  }
  public resetDataResource() {
    this._dataResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataResourceInput() {
    return this._dataResource.internalValue;
  }
}

export class CloudtrailEventSelectorList extends cdktf.ComplexList {
  public internalValue? : CloudtrailEventSelector[] | cdktf.IResolvable

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
  public get(index: number): CloudtrailEventSelectorOutputReference {
    return new CloudtrailEventSelectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudtrailInsightSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail#insight_type Cloudtrail#insight_type}
  */
  readonly insightType: string;
}

export function cloudtrailInsightSelectorToTerraform(struct?: CloudtrailInsightSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    insight_type: cdktf.stringToTerraform(struct!.insightType),
  }
}


export function cloudtrailInsightSelectorToHclTerraform(struct?: CloudtrailInsightSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    insight_type: {
      value: cdktf.stringToHclTerraform(struct!.insightType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudtrailInsightSelectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudtrailInsightSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insightType !== undefined) {
      hasAnyValues = true;
      internalValueResult.insightType = this._insightType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudtrailInsightSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._insightType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._insightType = value.insightType;
    }
  }

  // insight_type - computed: false, optional: false, required: true
  private _insightType?: string; 
  public get insightType() {
    return this.getStringAttribute('insight_type');
  }
  public set insightType(value: string) {
    this._insightType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get insightTypeInput() {
    return this._insightType;
  }
}

export class CloudtrailInsightSelectorList extends cdktf.ComplexList {
  public internalValue? : CloudtrailInsightSelector[] | cdktf.IResolvable

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
  public get(index: number): CloudtrailInsightSelectorOutputReference {
    return new CloudtrailInsightSelectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail aws_cloudtrail}
*/
export class Cloudtrail extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudtrail";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cloudtrail resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cloudtrail to import
  * @param importFromId The id of the existing Cloudtrail that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cloudtrail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudtrail", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail aws_cloudtrail} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudtrailConfig
  */
  public constructor(scope: Construct, id: string, config: CloudtrailConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudtrail',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.4.0',
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
    this._cloudWatchLogsGroupArn = config.cloudWatchLogsGroupArn;
    this._cloudWatchLogsRoleArn = config.cloudWatchLogsRoleArn;
    this._enableLogFileValidation = config.enableLogFileValidation;
    this._enableLogging = config.enableLogging;
    this._id = config.id;
    this._includeGlobalServiceEvents = config.includeGlobalServiceEvents;
    this._isMultiRegionTrail = config.isMultiRegionTrail;
    this._isOrganizationTrail = config.isOrganizationTrail;
    this._kmsKeyId = config.kmsKeyId;
    this._name = config.name;
    this._region = config.region;
    this._s3BucketName = config.s3BucketName;
    this._s3KeyPrefix = config.s3KeyPrefix;
    this._snsTopicName = config.snsTopicName;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._advancedEventSelector.internalValue = config.advancedEventSelector;
    this._eventSelector.internalValue = config.eventSelector;
    this._insightSelector.internalValue = config.insightSelector;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cloud_watch_logs_group_arn - computed: false, optional: true, required: false
  private _cloudWatchLogsGroupArn?: string; 
  public get cloudWatchLogsGroupArn() {
    return this.getStringAttribute('cloud_watch_logs_group_arn');
  }
  public set cloudWatchLogsGroupArn(value: string) {
    this._cloudWatchLogsGroupArn = value;
  }
  public resetCloudWatchLogsGroupArn() {
    this._cloudWatchLogsGroupArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudWatchLogsGroupArnInput() {
    return this._cloudWatchLogsGroupArn;
  }

  // cloud_watch_logs_role_arn - computed: false, optional: true, required: false
  private _cloudWatchLogsRoleArn?: string; 
  public get cloudWatchLogsRoleArn() {
    return this.getStringAttribute('cloud_watch_logs_role_arn');
  }
  public set cloudWatchLogsRoleArn(value: string) {
    this._cloudWatchLogsRoleArn = value;
  }
  public resetCloudWatchLogsRoleArn() {
    this._cloudWatchLogsRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudWatchLogsRoleArnInput() {
    return this._cloudWatchLogsRoleArn;
  }

  // enable_log_file_validation - computed: false, optional: true, required: false
  private _enableLogFileValidation?: boolean | cdktf.IResolvable; 
  public get enableLogFileValidation() {
    return this.getBooleanAttribute('enable_log_file_validation');
  }
  public set enableLogFileValidation(value: boolean | cdktf.IResolvable) {
    this._enableLogFileValidation = value;
  }
  public resetEnableLogFileValidation() {
    this._enableLogFileValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLogFileValidationInput() {
    return this._enableLogFileValidation;
  }

  // enable_logging - computed: false, optional: true, required: false
  private _enableLogging?: boolean | cdktf.IResolvable; 
  public get enableLogging() {
    return this.getBooleanAttribute('enable_logging');
  }
  public set enableLogging(value: boolean | cdktf.IResolvable) {
    this._enableLogging = value;
  }
  public resetEnableLogging() {
    this._enableLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLoggingInput() {
    return this._enableLogging;
  }

  // home_region - computed: true, optional: false, required: false
  public get homeRegion() {
    return this.getStringAttribute('home_region');
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

  // include_global_service_events - computed: false, optional: true, required: false
  private _includeGlobalServiceEvents?: boolean | cdktf.IResolvable; 
  public get includeGlobalServiceEvents() {
    return this.getBooleanAttribute('include_global_service_events');
  }
  public set includeGlobalServiceEvents(value: boolean | cdktf.IResolvable) {
    this._includeGlobalServiceEvents = value;
  }
  public resetIncludeGlobalServiceEvents() {
    this._includeGlobalServiceEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeGlobalServiceEventsInput() {
    return this._includeGlobalServiceEvents;
  }

  // is_multi_region_trail - computed: false, optional: true, required: false
  private _isMultiRegionTrail?: boolean | cdktf.IResolvable; 
  public get isMultiRegionTrail() {
    return this.getBooleanAttribute('is_multi_region_trail');
  }
  public set isMultiRegionTrail(value: boolean | cdktf.IResolvable) {
    this._isMultiRegionTrail = value;
  }
  public resetIsMultiRegionTrail() {
    this._isMultiRegionTrail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMultiRegionTrailInput() {
    return this._isMultiRegionTrail;
  }

  // is_organization_trail - computed: false, optional: true, required: false
  private _isOrganizationTrail?: boolean | cdktf.IResolvable; 
  public get isOrganizationTrail() {
    return this.getBooleanAttribute('is_organization_trail');
  }
  public set isOrganizationTrail(value: boolean | cdktf.IResolvable) {
    this._isOrganizationTrail = value;
  }
  public resetIsOrganizationTrail() {
    this._isOrganizationTrail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOrganizationTrailInput() {
    return this._isOrganizationTrail;
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
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

  // s3_bucket_name - computed: false, optional: false, required: true
  private _s3BucketName?: string; 
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }
  public set s3BucketName(value: string) {
    this._s3BucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketNameInput() {
    return this._s3BucketName;
  }

  // s3_key_prefix - computed: false, optional: true, required: false
  private _s3KeyPrefix?: string; 
  public get s3KeyPrefix() {
    return this.getStringAttribute('s3_key_prefix');
  }
  public set s3KeyPrefix(value: string) {
    this._s3KeyPrefix = value;
  }
  public resetS3KeyPrefix() {
    this._s3KeyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3KeyPrefixInput() {
    return this._s3KeyPrefix;
  }

  // sns_topic_arn - computed: true, optional: false, required: false
  public get snsTopicArn() {
    return this.getStringAttribute('sns_topic_arn');
  }

  // sns_topic_name - computed: false, optional: true, required: false
  private _snsTopicName?: string; 
  public get snsTopicName() {
    return this.getStringAttribute('sns_topic_name');
  }
  public set snsTopicName(value: string) {
    this._snsTopicName = value;
  }
  public resetSnsTopicName() {
    this._snsTopicName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsTopicNameInput() {
    return this._snsTopicName;
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

  // advanced_event_selector - computed: false, optional: true, required: false
  private _advancedEventSelector = new CloudtrailAdvancedEventSelectorList(this, "advanced_event_selector", false);
  public get advancedEventSelector() {
    return this._advancedEventSelector;
  }
  public putAdvancedEventSelector(value: CloudtrailAdvancedEventSelector[] | cdktf.IResolvable) {
    this._advancedEventSelector.internalValue = value;
  }
  public resetAdvancedEventSelector() {
    this._advancedEventSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedEventSelectorInput() {
    return this._advancedEventSelector.internalValue;
  }

  // event_selector - computed: false, optional: true, required: false
  private _eventSelector = new CloudtrailEventSelectorList(this, "event_selector", false);
  public get eventSelector() {
    return this._eventSelector;
  }
  public putEventSelector(value: CloudtrailEventSelector[] | cdktf.IResolvable) {
    this._eventSelector.internalValue = value;
  }
  public resetEventSelector() {
    this._eventSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventSelectorInput() {
    return this._eventSelector.internalValue;
  }

  // insight_selector - computed: false, optional: true, required: false
  private _insightSelector = new CloudtrailInsightSelectorList(this, "insight_selector", true);
  public get insightSelector() {
    return this._insightSelector;
  }
  public putInsightSelector(value: CloudtrailInsightSelector[] | cdktf.IResolvable) {
    this._insightSelector.internalValue = value;
  }
  public resetInsightSelector() {
    this._insightSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insightSelectorInput() {
    return this._insightSelector.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_watch_logs_group_arn: cdktf.stringToTerraform(this._cloudWatchLogsGroupArn),
      cloud_watch_logs_role_arn: cdktf.stringToTerraform(this._cloudWatchLogsRoleArn),
      enable_log_file_validation: cdktf.booleanToTerraform(this._enableLogFileValidation),
      enable_logging: cdktf.booleanToTerraform(this._enableLogging),
      id: cdktf.stringToTerraform(this._id),
      include_global_service_events: cdktf.booleanToTerraform(this._includeGlobalServiceEvents),
      is_multi_region_trail: cdktf.booleanToTerraform(this._isMultiRegionTrail),
      is_organization_trail: cdktf.booleanToTerraform(this._isOrganizationTrail),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      s3_bucket_name: cdktf.stringToTerraform(this._s3BucketName),
      s3_key_prefix: cdktf.stringToTerraform(this._s3KeyPrefix),
      sns_topic_name: cdktf.stringToTerraform(this._snsTopicName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      advanced_event_selector: cdktf.listMapper(cloudtrailAdvancedEventSelectorToTerraform, true)(this._advancedEventSelector.internalValue),
      event_selector: cdktf.listMapper(cloudtrailEventSelectorToTerraform, true)(this._eventSelector.internalValue),
      insight_selector: cdktf.listMapper(cloudtrailInsightSelectorToTerraform, true)(this._insightSelector.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_watch_logs_group_arn: {
        value: cdktf.stringToHclTerraform(this._cloudWatchLogsGroupArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_watch_logs_role_arn: {
        value: cdktf.stringToHclTerraform(this._cloudWatchLogsRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_log_file_validation: {
        value: cdktf.booleanToHclTerraform(this._enableLogFileValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_logging: {
        value: cdktf.booleanToHclTerraform(this._enableLogging),
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
      include_global_service_events: {
        value: cdktf.booleanToHclTerraform(this._includeGlobalServiceEvents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_multi_region_trail: {
        value: cdktf.booleanToHclTerraform(this._isMultiRegionTrail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_organization_trail: {
        value: cdktf.booleanToHclTerraform(this._isOrganizationTrail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kms_key_id: {
        value: cdktf.stringToHclTerraform(this._kmsKeyId),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_bucket_name: {
        value: cdktf.stringToHclTerraform(this._s3BucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_key_prefix: {
        value: cdktf.stringToHclTerraform(this._s3KeyPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sns_topic_name: {
        value: cdktf.stringToHclTerraform(this._snsTopicName),
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
      advanced_event_selector: {
        value: cdktf.listMapperHcl(cloudtrailAdvancedEventSelectorToHclTerraform, true)(this._advancedEventSelector.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudtrailAdvancedEventSelectorList",
      },
      event_selector: {
        value: cdktf.listMapperHcl(cloudtrailEventSelectorToHclTerraform, true)(this._eventSelector.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudtrailEventSelectorList",
      },
      insight_selector: {
        value: cdktf.listMapperHcl(cloudtrailInsightSelectorToHclTerraform, true)(this._insightSelector.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudtrailInsightSelectorList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
