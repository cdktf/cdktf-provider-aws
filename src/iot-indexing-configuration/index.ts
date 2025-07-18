/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotIndexingConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#id IotIndexingConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#region IotIndexingConfiguration#region}
  */
  readonly region?: string;
  /**
  * thing_group_indexing_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#thing_group_indexing_configuration IotIndexingConfiguration#thing_group_indexing_configuration}
  */
  readonly thingGroupIndexingConfiguration?: IotIndexingConfigurationThingGroupIndexingConfiguration;
  /**
  * thing_indexing_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#thing_indexing_configuration IotIndexingConfiguration#thing_indexing_configuration}
  */
  readonly thingIndexingConfiguration?: IotIndexingConfigurationThingIndexingConfiguration;
}
export interface IotIndexingConfigurationThingGroupIndexingConfigurationCustomField {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#name IotIndexingConfiguration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#type IotIndexingConfiguration#type}
  */
  readonly type?: string;
}

export function iotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldToTerraform(struct?: IotIndexingConfigurationThingGroupIndexingConfigurationCustomField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function iotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldToHclTerraform(struct?: IotIndexingConfigurationThingGroupIndexingConfigurationCustomField | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IotIndexingConfigurationThingGroupIndexingConfigurationCustomField | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotIndexingConfigurationThingGroupIndexingConfigurationCustomField | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
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
}

export class IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList extends cdktf.ComplexList {
  public internalValue? : IotIndexingConfigurationThingGroupIndexingConfigurationCustomField[] | cdktf.IResolvable

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
  public get(index: number): IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference {
    return new IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotIndexingConfigurationThingGroupIndexingConfigurationManagedField {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#name IotIndexingConfiguration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#type IotIndexingConfiguration#type}
  */
  readonly type?: string;
}

export function iotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldToTerraform(struct?: IotIndexingConfigurationThingGroupIndexingConfigurationManagedField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function iotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldToHclTerraform(struct?: IotIndexingConfigurationThingGroupIndexingConfigurationManagedField | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IotIndexingConfigurationThingGroupIndexingConfigurationManagedField | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotIndexingConfigurationThingGroupIndexingConfigurationManagedField | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
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
}

export class IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList extends cdktf.ComplexList {
  public internalValue? : IotIndexingConfigurationThingGroupIndexingConfigurationManagedField[] | cdktf.IResolvable

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
  public get(index: number): IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference {
    return new IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotIndexingConfigurationThingGroupIndexingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#thing_group_indexing_mode IotIndexingConfiguration#thing_group_indexing_mode}
  */
  readonly thingGroupIndexingMode: string;
  /**
  * custom_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#custom_field IotIndexingConfiguration#custom_field}
  */
  readonly customField?: IotIndexingConfigurationThingGroupIndexingConfigurationCustomField[] | cdktf.IResolvable;
  /**
  * managed_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#managed_field IotIndexingConfiguration#managed_field}
  */
  readonly managedField?: IotIndexingConfigurationThingGroupIndexingConfigurationManagedField[] | cdktf.IResolvable;
}

export function iotIndexingConfigurationThingGroupIndexingConfigurationToTerraform(struct?: IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference | IotIndexingConfigurationThingGroupIndexingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    thing_group_indexing_mode: cdktf.stringToTerraform(struct!.thingGroupIndexingMode),
    custom_field: cdktf.listMapper(iotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldToTerraform, true)(struct!.customField),
    managed_field: cdktf.listMapper(iotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldToTerraform, true)(struct!.managedField),
  }
}


export function iotIndexingConfigurationThingGroupIndexingConfigurationToHclTerraform(struct?: IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference | IotIndexingConfigurationThingGroupIndexingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    thing_group_indexing_mode: {
      value: cdktf.stringToHclTerraform(struct!.thingGroupIndexingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_field: {
      value: cdktf.listMapperHcl(iotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldToHclTerraform, true)(struct!.customField),
      isBlock: true,
      type: "set",
      storageClassType: "IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList",
    },
    managed_field: {
      value: cdktf.listMapperHcl(iotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldToHclTerraform, true)(struct!.managedField),
      isBlock: true,
      type: "set",
      storageClassType: "IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IotIndexingConfigurationThingGroupIndexingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._thingGroupIndexingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.thingGroupIndexingMode = this._thingGroupIndexingMode;
    }
    if (this._customField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customField = this._customField?.internalValue;
    }
    if (this._managedField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedField = this._managedField?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotIndexingConfigurationThingGroupIndexingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._thingGroupIndexingMode = undefined;
      this._customField.internalValue = undefined;
      this._managedField.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._thingGroupIndexingMode = value.thingGroupIndexingMode;
      this._customField.internalValue = value.customField;
      this._managedField.internalValue = value.managedField;
    }
  }

  // thing_group_indexing_mode - computed: false, optional: false, required: true
  private _thingGroupIndexingMode?: string; 
  public get thingGroupIndexingMode() {
    return this.getStringAttribute('thing_group_indexing_mode');
  }
  public set thingGroupIndexingMode(value: string) {
    this._thingGroupIndexingMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thingGroupIndexingModeInput() {
    return this._thingGroupIndexingMode;
  }

  // custom_field - computed: false, optional: true, required: false
  private _customField = new IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList(this, "custom_field", true);
  public get customField() {
    return this._customField;
  }
  public putCustomField(value: IotIndexingConfigurationThingGroupIndexingConfigurationCustomField[] | cdktf.IResolvable) {
    this._customField.internalValue = value;
  }
  public resetCustomField() {
    this._customField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFieldInput() {
    return this._customField.internalValue;
  }

  // managed_field - computed: false, optional: true, required: false
  private _managedField = new IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList(this, "managed_field", true);
  public get managedField() {
    return this._managedField;
  }
  public putManagedField(value: IotIndexingConfigurationThingGroupIndexingConfigurationManagedField[] | cdktf.IResolvable) {
    this._managedField.internalValue = value;
  }
  public resetManagedField() {
    this._managedField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedFieldInput() {
    return this._managedField.internalValue;
  }
}
export interface IotIndexingConfigurationThingIndexingConfigurationCustomField {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#name IotIndexingConfiguration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#type IotIndexingConfiguration#type}
  */
  readonly type?: string;
}

export function iotIndexingConfigurationThingIndexingConfigurationCustomFieldToTerraform(struct?: IotIndexingConfigurationThingIndexingConfigurationCustomField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function iotIndexingConfigurationThingIndexingConfigurationCustomFieldToHclTerraform(struct?: IotIndexingConfigurationThingIndexingConfigurationCustomField | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IotIndexingConfigurationThingIndexingConfigurationCustomField | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotIndexingConfigurationThingIndexingConfigurationCustomField | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
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
}

export class IotIndexingConfigurationThingIndexingConfigurationCustomFieldList extends cdktf.ComplexList {
  public internalValue? : IotIndexingConfigurationThingIndexingConfigurationCustomField[] | cdktf.IResolvable

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
  public get(index: number): IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference {
    return new IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotIndexingConfigurationThingIndexingConfigurationFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#named_shadow_names IotIndexingConfiguration#named_shadow_names}
  */
  readonly namedShadowNames?: string[];
}

export function iotIndexingConfigurationThingIndexingConfigurationFilterToTerraform(struct?: IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference | IotIndexingConfigurationThingIndexingConfigurationFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    named_shadow_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namedShadowNames),
  }
}


export function iotIndexingConfigurationThingIndexingConfigurationFilterToHclTerraform(struct?: IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference | IotIndexingConfigurationThingIndexingConfigurationFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    named_shadow_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namedShadowNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IotIndexingConfigurationThingIndexingConfigurationFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namedShadowNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.namedShadowNames = this._namedShadowNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotIndexingConfigurationThingIndexingConfigurationFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._namedShadowNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._namedShadowNames = value.namedShadowNames;
    }
  }

  // named_shadow_names - computed: false, optional: true, required: false
  private _namedShadowNames?: string[]; 
  public get namedShadowNames() {
    return cdktf.Fn.tolist(this.getListAttribute('named_shadow_names'));
  }
  public set namedShadowNames(value: string[]) {
    this._namedShadowNames = value;
  }
  public resetNamedShadowNames() {
    this._namedShadowNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namedShadowNamesInput() {
    return this._namedShadowNames;
  }
}
export interface IotIndexingConfigurationThingIndexingConfigurationManagedField {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#name IotIndexingConfiguration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#type IotIndexingConfiguration#type}
  */
  readonly type?: string;
}

export function iotIndexingConfigurationThingIndexingConfigurationManagedFieldToTerraform(struct?: IotIndexingConfigurationThingIndexingConfigurationManagedField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function iotIndexingConfigurationThingIndexingConfigurationManagedFieldToHclTerraform(struct?: IotIndexingConfigurationThingIndexingConfigurationManagedField | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IotIndexingConfigurationThingIndexingConfigurationManagedField | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotIndexingConfigurationThingIndexingConfigurationManagedField | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
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
}

export class IotIndexingConfigurationThingIndexingConfigurationManagedFieldList extends cdktf.ComplexList {
  public internalValue? : IotIndexingConfigurationThingIndexingConfigurationManagedField[] | cdktf.IResolvable

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
  public get(index: number): IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference {
    return new IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotIndexingConfigurationThingIndexingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#device_defender_indexing_mode IotIndexingConfiguration#device_defender_indexing_mode}
  */
  readonly deviceDefenderIndexingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#named_shadow_indexing_mode IotIndexingConfiguration#named_shadow_indexing_mode}
  */
  readonly namedShadowIndexingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#thing_connectivity_indexing_mode IotIndexingConfiguration#thing_connectivity_indexing_mode}
  */
  readonly thingConnectivityIndexingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#thing_indexing_mode IotIndexingConfiguration#thing_indexing_mode}
  */
  readonly thingIndexingMode: string;
  /**
  * custom_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#custom_field IotIndexingConfiguration#custom_field}
  */
  readonly customField?: IotIndexingConfigurationThingIndexingConfigurationCustomField[] | cdktf.IResolvable;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#filter IotIndexingConfiguration#filter}
  */
  readonly filter?: IotIndexingConfigurationThingIndexingConfigurationFilter;
  /**
  * managed_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#managed_field IotIndexingConfiguration#managed_field}
  */
  readonly managedField?: IotIndexingConfigurationThingIndexingConfigurationManagedField[] | cdktf.IResolvable;
}

export function iotIndexingConfigurationThingIndexingConfigurationToTerraform(struct?: IotIndexingConfigurationThingIndexingConfigurationOutputReference | IotIndexingConfigurationThingIndexingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_defender_indexing_mode: cdktf.stringToTerraform(struct!.deviceDefenderIndexingMode),
    named_shadow_indexing_mode: cdktf.stringToTerraform(struct!.namedShadowIndexingMode),
    thing_connectivity_indexing_mode: cdktf.stringToTerraform(struct!.thingConnectivityIndexingMode),
    thing_indexing_mode: cdktf.stringToTerraform(struct!.thingIndexingMode),
    custom_field: cdktf.listMapper(iotIndexingConfigurationThingIndexingConfigurationCustomFieldToTerraform, true)(struct!.customField),
    filter: iotIndexingConfigurationThingIndexingConfigurationFilterToTerraform(struct!.filter),
    managed_field: cdktf.listMapper(iotIndexingConfigurationThingIndexingConfigurationManagedFieldToTerraform, true)(struct!.managedField),
  }
}


export function iotIndexingConfigurationThingIndexingConfigurationToHclTerraform(struct?: IotIndexingConfigurationThingIndexingConfigurationOutputReference | IotIndexingConfigurationThingIndexingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_defender_indexing_mode: {
      value: cdktf.stringToHclTerraform(struct!.deviceDefenderIndexingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    named_shadow_indexing_mode: {
      value: cdktf.stringToHclTerraform(struct!.namedShadowIndexingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    thing_connectivity_indexing_mode: {
      value: cdktf.stringToHclTerraform(struct!.thingConnectivityIndexingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    thing_indexing_mode: {
      value: cdktf.stringToHclTerraform(struct!.thingIndexingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_field: {
      value: cdktf.listMapperHcl(iotIndexingConfigurationThingIndexingConfigurationCustomFieldToHclTerraform, true)(struct!.customField),
      isBlock: true,
      type: "set",
      storageClassType: "IotIndexingConfigurationThingIndexingConfigurationCustomFieldList",
    },
    filter: {
      value: iotIndexingConfigurationThingIndexingConfigurationFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "IotIndexingConfigurationThingIndexingConfigurationFilterList",
    },
    managed_field: {
      value: cdktf.listMapperHcl(iotIndexingConfigurationThingIndexingConfigurationManagedFieldToHclTerraform, true)(struct!.managedField),
      isBlock: true,
      type: "set",
      storageClassType: "IotIndexingConfigurationThingIndexingConfigurationManagedFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotIndexingConfigurationThingIndexingConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IotIndexingConfigurationThingIndexingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceDefenderIndexingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceDefenderIndexingMode = this._deviceDefenderIndexingMode;
    }
    if (this._namedShadowIndexingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.namedShadowIndexingMode = this._namedShadowIndexingMode;
    }
    if (this._thingConnectivityIndexingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.thingConnectivityIndexingMode = this._thingConnectivityIndexingMode;
    }
    if (this._thingIndexingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.thingIndexingMode = this._thingIndexingMode;
    }
    if (this._customField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customField = this._customField?.internalValue;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._managedField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedField = this._managedField?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotIndexingConfigurationThingIndexingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deviceDefenderIndexingMode = undefined;
      this._namedShadowIndexingMode = undefined;
      this._thingConnectivityIndexingMode = undefined;
      this._thingIndexingMode = undefined;
      this._customField.internalValue = undefined;
      this._filter.internalValue = undefined;
      this._managedField.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deviceDefenderIndexingMode = value.deviceDefenderIndexingMode;
      this._namedShadowIndexingMode = value.namedShadowIndexingMode;
      this._thingConnectivityIndexingMode = value.thingConnectivityIndexingMode;
      this._thingIndexingMode = value.thingIndexingMode;
      this._customField.internalValue = value.customField;
      this._filter.internalValue = value.filter;
      this._managedField.internalValue = value.managedField;
    }
  }

  // device_defender_indexing_mode - computed: false, optional: true, required: false
  private _deviceDefenderIndexingMode?: string; 
  public get deviceDefenderIndexingMode() {
    return this.getStringAttribute('device_defender_indexing_mode');
  }
  public set deviceDefenderIndexingMode(value: string) {
    this._deviceDefenderIndexingMode = value;
  }
  public resetDeviceDefenderIndexingMode() {
    this._deviceDefenderIndexingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceDefenderIndexingModeInput() {
    return this._deviceDefenderIndexingMode;
  }

  // named_shadow_indexing_mode - computed: false, optional: true, required: false
  private _namedShadowIndexingMode?: string; 
  public get namedShadowIndexingMode() {
    return this.getStringAttribute('named_shadow_indexing_mode');
  }
  public set namedShadowIndexingMode(value: string) {
    this._namedShadowIndexingMode = value;
  }
  public resetNamedShadowIndexingMode() {
    this._namedShadowIndexingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namedShadowIndexingModeInput() {
    return this._namedShadowIndexingMode;
  }

  // thing_connectivity_indexing_mode - computed: false, optional: true, required: false
  private _thingConnectivityIndexingMode?: string; 
  public get thingConnectivityIndexingMode() {
    return this.getStringAttribute('thing_connectivity_indexing_mode');
  }
  public set thingConnectivityIndexingMode(value: string) {
    this._thingConnectivityIndexingMode = value;
  }
  public resetThingConnectivityIndexingMode() {
    this._thingConnectivityIndexingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thingConnectivityIndexingModeInput() {
    return this._thingConnectivityIndexingMode;
  }

  // thing_indexing_mode - computed: false, optional: false, required: true
  private _thingIndexingMode?: string; 
  public get thingIndexingMode() {
    return this.getStringAttribute('thing_indexing_mode');
  }
  public set thingIndexingMode(value: string) {
    this._thingIndexingMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thingIndexingModeInput() {
    return this._thingIndexingMode;
  }

  // custom_field - computed: false, optional: true, required: false
  private _customField = new IotIndexingConfigurationThingIndexingConfigurationCustomFieldList(this, "custom_field", true);
  public get customField() {
    return this._customField;
  }
  public putCustomField(value: IotIndexingConfigurationThingIndexingConfigurationCustomField[] | cdktf.IResolvable) {
    this._customField.internalValue = value;
  }
  public resetCustomField() {
    this._customField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFieldInput() {
    return this._customField.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: IotIndexingConfigurationThingIndexingConfigurationFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // managed_field - computed: false, optional: true, required: false
  private _managedField = new IotIndexingConfigurationThingIndexingConfigurationManagedFieldList(this, "managed_field", true);
  public get managedField() {
    return this._managedField;
  }
  public putManagedField(value: IotIndexingConfigurationThingIndexingConfigurationManagedField[] | cdktf.IResolvable) {
    this._managedField.internalValue = value;
  }
  public resetManagedField() {
    this._managedField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedFieldInput() {
    return this._managedField.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration aws_iot_indexing_configuration}
*/
export class IotIndexingConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_iot_indexing_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IotIndexingConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IotIndexingConfiguration to import
  * @param importFromId The id of the existing IotIndexingConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IotIndexingConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_iot_indexing_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration aws_iot_indexing_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotIndexingConfigurationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IotIndexingConfigurationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_iot_indexing_configuration',
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
    this._id = config.id;
    this._region = config.region;
    this._thingGroupIndexingConfiguration.internalValue = config.thingGroupIndexingConfiguration;
    this._thingIndexingConfiguration.internalValue = config.thingIndexingConfiguration;
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

  // thing_group_indexing_configuration - computed: false, optional: true, required: false
  private _thingGroupIndexingConfiguration = new IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference(this, "thing_group_indexing_configuration");
  public get thingGroupIndexingConfiguration() {
    return this._thingGroupIndexingConfiguration;
  }
  public putThingGroupIndexingConfiguration(value: IotIndexingConfigurationThingGroupIndexingConfiguration) {
    this._thingGroupIndexingConfiguration.internalValue = value;
  }
  public resetThingGroupIndexingConfiguration() {
    this._thingGroupIndexingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thingGroupIndexingConfigurationInput() {
    return this._thingGroupIndexingConfiguration.internalValue;
  }

  // thing_indexing_configuration - computed: false, optional: true, required: false
  private _thingIndexingConfiguration = new IotIndexingConfigurationThingIndexingConfigurationOutputReference(this, "thing_indexing_configuration");
  public get thingIndexingConfiguration() {
    return this._thingIndexingConfiguration;
  }
  public putThingIndexingConfiguration(value: IotIndexingConfigurationThingIndexingConfiguration) {
    this._thingIndexingConfiguration.internalValue = value;
  }
  public resetThingIndexingConfiguration() {
    this._thingIndexingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thingIndexingConfigurationInput() {
    return this._thingIndexingConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      thing_group_indexing_configuration: iotIndexingConfigurationThingGroupIndexingConfigurationToTerraform(this._thingGroupIndexingConfiguration.internalValue),
      thing_indexing_configuration: iotIndexingConfigurationThingIndexingConfigurationToTerraform(this._thingIndexingConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      thing_group_indexing_configuration: {
        value: iotIndexingConfigurationThingGroupIndexingConfigurationToHclTerraform(this._thingGroupIndexingConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IotIndexingConfigurationThingGroupIndexingConfigurationList",
      },
      thing_indexing_configuration: {
        value: iotIndexingConfigurationThingIndexingConfigurationToHclTerraform(this._thingIndexingConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IotIndexingConfigurationThingIndexingConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
