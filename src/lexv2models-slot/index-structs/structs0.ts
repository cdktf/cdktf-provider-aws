/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktf from 'cdktf';
export interface Lexv2ModelsSlotMultipleValuesSetting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#allow_multiple_values Lexv2ModelsSlot#allow_multiple_values}
  */
  readonly allowMultipleValues?: boolean | cdktf.IResolvable;
}

export function lexv2ModelsSlotMultipleValuesSettingToTerraform(struct?: Lexv2ModelsSlotMultipleValuesSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_multiple_values: cdktf.booleanToTerraform(struct!.allowMultipleValues),
  }
}


export function lexv2ModelsSlotMultipleValuesSettingToHclTerraform(struct?: Lexv2ModelsSlotMultipleValuesSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_multiple_values: {
      value: cdktf.booleanToHclTerraform(struct!.allowMultipleValues),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotMultipleValuesSettingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotMultipleValuesSetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowMultipleValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowMultipleValues = this._allowMultipleValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotMultipleValuesSetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowMultipleValues = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowMultipleValues = value.allowMultipleValues;
    }
  }

  // allow_multiple_values - computed: false, optional: true, required: false
  private _allowMultipleValues?: boolean | cdktf.IResolvable; 
  public get allowMultipleValues() {
    return this.getBooleanAttribute('allow_multiple_values');
  }
  public set allowMultipleValues(value: boolean | cdktf.IResolvable) {
    this._allowMultipleValues = value;
  }
  public resetAllowMultipleValues() {
    this._allowMultipleValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMultipleValuesInput() {
    return this._allowMultipleValues;
  }
}

export class Lexv2ModelsSlotMultipleValuesSettingList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotMultipleValuesSetting[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotMultipleValuesSettingOutputReference {
    return new Lexv2ModelsSlotMultipleValuesSettingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotObfuscationSetting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#obfuscation_setting_type Lexv2ModelsSlot#obfuscation_setting_type}
  */
  readonly obfuscationSettingType: string;
}

export function lexv2ModelsSlotObfuscationSettingToTerraform(struct?: Lexv2ModelsSlotObfuscationSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    obfuscation_setting_type: cdktf.stringToTerraform(struct!.obfuscationSettingType),
  }
}


export function lexv2ModelsSlotObfuscationSettingToHclTerraform(struct?: Lexv2ModelsSlotObfuscationSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    obfuscation_setting_type: {
      value: cdktf.stringToHclTerraform(struct!.obfuscationSettingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotObfuscationSettingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotObfuscationSetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._obfuscationSettingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.obfuscationSettingType = this._obfuscationSettingType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotObfuscationSetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._obfuscationSettingType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._obfuscationSettingType = value.obfuscationSettingType;
    }
  }

  // obfuscation_setting_type - computed: false, optional: false, required: true
  private _obfuscationSettingType?: string; 
  public get obfuscationSettingType() {
    return this.getStringAttribute('obfuscation_setting_type');
  }
  public set obfuscationSettingType(value: string) {
    this._obfuscationSettingType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get obfuscationSettingTypeInput() {
    return this._obfuscationSettingType;
  }
}

export class Lexv2ModelsSlotObfuscationSettingList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotObfuscationSetting[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotObfuscationSettingOutputReference {
    return new Lexv2ModelsSlotObfuscationSettingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingDefaultValueSpecificationDefaultValueListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#default_value Lexv2ModelsSlot#default_value}
  */
  readonly defaultValue: string;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingDefaultValueSpecificationDefaultValueListStructToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingDefaultValueSpecificationDefaultValueListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingDefaultValueSpecificationDefaultValueListStructToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingDefaultValueSpecificationDefaultValueListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingDefaultValueSpecificationDefaultValueListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingDefaultValueSpecificationDefaultValueListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingDefaultValueSpecificationDefaultValueListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
    }
  }

  // default_value - computed: false, optional: false, required: true
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingDefaultValueSpecificationDefaultValueListStructList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingDefaultValueSpecificationDefaultValueListStruct[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingDefaultValueSpecificationDefaultValueListStructOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingDefaultValueSpecificationDefaultValueListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingDefaultValueSpecification {
  /**
  * default_value_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#default_value_list Lexv2ModelsSlot#default_value_list}
  */
  readonly defaultValueList?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingDefaultValueSpecificationDefaultValueListStruct[] | cdktf.IResolvable;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingDefaultValueSpecificationToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingDefaultValueSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value_list: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingDefaultValueSpecificationDefaultValueListStructToTerraform, true)(struct!.defaultValueList),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingDefaultValueSpecificationToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingDefaultValueSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value_list: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingDefaultValueSpecificationDefaultValueListStructToHclTerraform, true)(struct!.defaultValueList),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingDefaultValueSpecificationDefaultValueListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingDefaultValueSpecificationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingDefaultValueSpecification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValueList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValueList = this._defaultValueList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingDefaultValueSpecification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValueList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValueList.internalValue = value.defaultValueList;
    }
  }

  // default_value_list - computed: false, optional: true, required: false
  private _defaultValueList = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingDefaultValueSpecificationDefaultValueListStructList(this, "default_value_list", false);
  public get defaultValueList() {
    return this._defaultValueList;
  }
  public putDefaultValueList(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingDefaultValueSpecificationDefaultValueListStruct[] | cdktf.IResolvable) {
    this._defaultValueList.internalValue = value;
  }
  public resetDefaultValueList() {
    this._defaultValueList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueListInput() {
    return this._defaultValueList.internalValue;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingDefaultValueSpecificationList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingDefaultValueSpecification[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingDefaultValueSpecificationOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingDefaultValueSpecificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageCustomPayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
  */
  readonly value: string;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageCustomPayloadToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageCustomPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageCustomPayloadToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageCustomPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageCustomPayloadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageCustomPayload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageCustomPayload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageCustomPayloadList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageCustomPayload[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageCustomPayloadOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageCustomPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardButton {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#text Lexv2ModelsSlot#text}
  */
  readonly text: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
  */
  readonly value: string;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardButtonToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardButton | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardButton | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardButtonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardButton | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardButton | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
      this._value = value.value;
    }
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardButtonList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardButtonOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardButtonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#image_url Lexv2ModelsSlot#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#subtitle Lexv2ModelsSlot#subtitle}
  */
  readonly subtitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#title Lexv2ModelsSlot#title}
  */
  readonly title: string;
  /**
  * button block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#button Lexv2ModelsSlot#button}
  */
  readonly button?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_url: cdktf.stringToTerraform(struct!.imageUrl),
    subtitle: cdktf.stringToTerraform(struct!.subtitle),
    title: cdktf.stringToTerraform(struct!.title),
    button: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardButtonToTerraform, true)(struct!.button),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_url: {
      value: cdktf.stringToHclTerraform(struct!.imageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subtitle: {
      value: cdktf.stringToHclTerraform(struct!.subtitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    button: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardButtonToHclTerraform, true)(struct!.button),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardButtonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUrl = this._imageUrl;
    }
    if (this._subtitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtitle = this._subtitle;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._button?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.button = this._button?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCard | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageUrl = undefined;
      this._subtitle = undefined;
      this._title = undefined;
      this._button.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageUrl = value.imageUrl;
      this._subtitle = value.subtitle;
      this._title = value.title;
      this._button.internalValue = value.button;
    }
  }

  // image_url - computed: false, optional: true, required: false
  private _imageUrl?: string; 
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  public resetImageUrl() {
    this._imageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
  }

  // subtitle - computed: false, optional: true, required: false
  private _subtitle?: string; 
  public get subtitle() {
    return this.getStringAttribute('subtitle');
  }
  public set subtitle(value: string) {
    this._subtitle = value;
  }
  public resetSubtitle() {
    this._subtitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtitleInput() {
    return this._subtitle;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // button - computed: false, optional: true, required: false
  private _button = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardButtonList(this, "button", false);
  public get button() {
    return this._button;
  }
  public putButton(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable) {
    this._button.internalValue = value;
  }
  public resetButton() {
    this._button.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonInput() {
    return this._button.internalValue;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCard[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
  */
  readonly value: string;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessageToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessageToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessageList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessageOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
  */
  readonly value: string;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessageToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessageToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessageList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessage[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessageOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessage {
  /**
  * custom_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#custom_payload Lexv2ModelsSlot#custom_payload}
  */
  readonly customPayload?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageCustomPayload[] | cdktf.IResolvable;
  /**
  * image_response_card block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#image_response_card Lexv2ModelsSlot#image_response_card}
  */
  readonly imageResponseCard?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCard[] | cdktf.IResolvable;
  /**
  * plain_text_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#plain_text_message Lexv2ModelsSlot#plain_text_message}
  */
  readonly plainTextMessage?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable;
  /**
  * ssml_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#ssml_message Lexv2ModelsSlot#ssml_message}
  */
  readonly ssmlMessage?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessage[] | cdktf.IResolvable;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_payload: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageCustomPayloadToTerraform, true)(struct!.customPayload),
    image_response_card: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardToTerraform, true)(struct!.imageResponseCard),
    plain_text_message: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessageToTerraform, true)(struct!.plainTextMessage),
    ssml_message: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessageToTerraform, true)(struct!.ssmlMessage),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_payload: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageCustomPayloadToHclTerraform, true)(struct!.customPayload),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageCustomPayloadList",
    },
    image_response_card: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardToHclTerraform, true)(struct!.imageResponseCard),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardList",
    },
    plain_text_message: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessageToHclTerraform, true)(struct!.plainTextMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessageList",
    },
    ssml_message: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessageToHclTerraform, true)(struct!.ssmlMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customPayload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPayload = this._customPayload?.internalValue;
    }
    if (this._imageResponseCard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageResponseCard = this._imageResponseCard?.internalValue;
    }
    if (this._plainTextMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plainTextMessage = this._plainTextMessage?.internalValue;
    }
    if (this._ssmlMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssmlMessage = this._ssmlMessage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = undefined;
      this._imageResponseCard.internalValue = undefined;
      this._plainTextMessage.internalValue = undefined;
      this._ssmlMessage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = value.customPayload;
      this._imageResponseCard.internalValue = value.imageResponseCard;
      this._plainTextMessage.internalValue = value.plainTextMessage;
      this._ssmlMessage.internalValue = value.ssmlMessage;
    }
  }

  // custom_payload - computed: false, optional: true, required: false
  private _customPayload = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageCustomPayloadList(this, "custom_payload", false);
  public get customPayload() {
    return this._customPayload;
  }
  public putCustomPayload(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageCustomPayload[] | cdktf.IResolvable) {
    this._customPayload.internalValue = value;
  }
  public resetCustomPayload() {
    this._customPayload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPayloadInput() {
    return this._customPayload.internalValue;
  }

  // image_response_card - computed: false, optional: true, required: false
  private _imageResponseCard = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardList(this, "image_response_card", false);
  public get imageResponseCard() {
    return this._imageResponseCard;
  }
  public putImageResponseCard(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCard[] | cdktf.IResolvable) {
    this._imageResponseCard.internalValue = value;
  }
  public resetImageResponseCard() {
    this._imageResponseCard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageResponseCardInput() {
    return this._imageResponseCard.internalValue;
  }

  // plain_text_message - computed: false, optional: true, required: false
  private _plainTextMessage = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessageList(this, "plain_text_message", false);
  public get plainTextMessage() {
    return this._plainTextMessage;
  }
  public putPlainTextMessage(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable) {
    this._plainTextMessage.internalValue = value;
  }
  public resetPlainTextMessage() {
    this._plainTextMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainTextMessageInput() {
    return this._plainTextMessage.internalValue;
  }

  // ssml_message - computed: false, optional: true, required: false
  private _ssmlMessage = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessageList(this, "ssml_message", false);
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
  public putSsmlMessage(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessage[] | cdktf.IResolvable) {
    this._ssmlMessage.internalValue = value;
  }
  public resetSsmlMessage() {
    this._ssmlMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmlMessageInput() {
    return this._ssmlMessage.internalValue;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessage[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationCustomPayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
  */
  readonly value: string;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationCustomPayloadToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationCustomPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationCustomPayloadToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationCustomPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationCustomPayloadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationCustomPayload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationCustomPayload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationCustomPayloadList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationCustomPayload[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationCustomPayloadOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationCustomPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardButton {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#text Lexv2ModelsSlot#text}
  */
  readonly text: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
  */
  readonly value: string;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardButtonToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardButton | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardButton | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardButtonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardButton | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardButton | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
      this._value = value.value;
    }
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardButtonList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardButtonOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardButtonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#image_url Lexv2ModelsSlot#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#subtitle Lexv2ModelsSlot#subtitle}
  */
  readonly subtitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#title Lexv2ModelsSlot#title}
  */
  readonly title: string;
  /**
  * button block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#button Lexv2ModelsSlot#button}
  */
  readonly button?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_url: cdktf.stringToTerraform(struct!.imageUrl),
    subtitle: cdktf.stringToTerraform(struct!.subtitle),
    title: cdktf.stringToTerraform(struct!.title),
    button: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardButtonToTerraform, true)(struct!.button),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_url: {
      value: cdktf.stringToHclTerraform(struct!.imageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subtitle: {
      value: cdktf.stringToHclTerraform(struct!.subtitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    button: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardButtonToHclTerraform, true)(struct!.button),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardButtonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUrl = this._imageUrl;
    }
    if (this._subtitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtitle = this._subtitle;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._button?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.button = this._button?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCard | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageUrl = undefined;
      this._subtitle = undefined;
      this._title = undefined;
      this._button.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageUrl = value.imageUrl;
      this._subtitle = value.subtitle;
      this._title = value.title;
      this._button.internalValue = value.button;
    }
  }

  // image_url - computed: false, optional: true, required: false
  private _imageUrl?: string; 
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  public resetImageUrl() {
    this._imageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
  }

  // subtitle - computed: false, optional: true, required: false
  private _subtitle?: string; 
  public get subtitle() {
    return this.getStringAttribute('subtitle');
  }
  public set subtitle(value: string) {
    this._subtitle = value;
  }
  public resetSubtitle() {
    this._subtitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtitleInput() {
    return this._subtitle;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // button - computed: false, optional: true, required: false
  private _button = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardButtonList(this, "button", false);
  public get button() {
    return this._button;
  }
  public putButton(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable) {
    this._button.internalValue = value;
  }
  public resetButton() {
    this._button.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonInput() {
    return this._button.internalValue;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCard[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
  */
  readonly value: string;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessageToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessageToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessageList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessageOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
  */
  readonly value: string;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessageToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessageToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessageList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessage[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessageOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariation {
  /**
  * custom_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#custom_payload Lexv2ModelsSlot#custom_payload}
  */
  readonly customPayload?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationCustomPayload[] | cdktf.IResolvable;
  /**
  * image_response_card block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#image_response_card Lexv2ModelsSlot#image_response_card}
  */
  readonly imageResponseCard?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCard[] | cdktf.IResolvable;
  /**
  * plain_text_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#plain_text_message Lexv2ModelsSlot#plain_text_message}
  */
  readonly plainTextMessage?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable;
  /**
  * ssml_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#ssml_message Lexv2ModelsSlot#ssml_message}
  */
  readonly ssmlMessage?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessage[] | cdktf.IResolvable;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_payload: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationCustomPayloadToTerraform, true)(struct!.customPayload),
    image_response_card: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardToTerraform, true)(struct!.imageResponseCard),
    plain_text_message: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessageToTerraform, true)(struct!.plainTextMessage),
    ssml_message: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessageToTerraform, true)(struct!.ssmlMessage),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_payload: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationCustomPayloadToHclTerraform, true)(struct!.customPayload),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationCustomPayloadList",
    },
    image_response_card: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardToHclTerraform, true)(struct!.imageResponseCard),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardList",
    },
    plain_text_message: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessageToHclTerraform, true)(struct!.plainTextMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessageList",
    },
    ssml_message: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessageToHclTerraform, true)(struct!.ssmlMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customPayload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPayload = this._customPayload?.internalValue;
    }
    if (this._imageResponseCard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageResponseCard = this._imageResponseCard?.internalValue;
    }
    if (this._plainTextMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plainTextMessage = this._plainTextMessage?.internalValue;
    }
    if (this._ssmlMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssmlMessage = this._ssmlMessage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = undefined;
      this._imageResponseCard.internalValue = undefined;
      this._plainTextMessage.internalValue = undefined;
      this._ssmlMessage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = value.customPayload;
      this._imageResponseCard.internalValue = value.imageResponseCard;
      this._plainTextMessage.internalValue = value.plainTextMessage;
      this._ssmlMessage.internalValue = value.ssmlMessage;
    }
  }

  // custom_payload - computed: false, optional: true, required: false
  private _customPayload = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationCustomPayloadList(this, "custom_payload", false);
  public get customPayload() {
    return this._customPayload;
  }
  public putCustomPayload(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationCustomPayload[] | cdktf.IResolvable) {
    this._customPayload.internalValue = value;
  }
  public resetCustomPayload() {
    this._customPayload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPayloadInput() {
    return this._customPayload.internalValue;
  }

  // image_response_card - computed: false, optional: true, required: false
  private _imageResponseCard = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardList(this, "image_response_card", false);
  public get imageResponseCard() {
    return this._imageResponseCard;
  }
  public putImageResponseCard(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCard[] | cdktf.IResolvable) {
    this._imageResponseCard.internalValue = value;
  }
  public resetImageResponseCard() {
    this._imageResponseCard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageResponseCardInput() {
    return this._imageResponseCard.internalValue;
  }

  // plain_text_message - computed: false, optional: true, required: false
  private _plainTextMessage = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessageList(this, "plain_text_message", false);
  public get plainTextMessage() {
    return this._plainTextMessage;
  }
  public putPlainTextMessage(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable) {
    this._plainTextMessage.internalValue = value;
  }
  public resetPlainTextMessage() {
    this._plainTextMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainTextMessageInput() {
    return this._plainTextMessage.internalValue;
  }

  // ssml_message - computed: false, optional: true, required: false
  private _ssmlMessage = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessageList(this, "ssml_message", false);
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
  public putSsmlMessage(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessage[] | cdktf.IResolvable) {
    this._ssmlMessage.internalValue = value;
  }
  public resetSsmlMessage() {
    this._ssmlMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmlMessageInput() {
    return this._ssmlMessage.internalValue;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariation[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroup {
  /**
  * message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#message Lexv2ModelsSlot#message}
  */
  readonly message?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessage[] | cdktf.IResolvable;
  /**
  * variation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#variation Lexv2ModelsSlot#variation}
  */
  readonly variation?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariation[] | cdktf.IResolvable;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageToTerraform, true)(struct!.message),
    variation: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationToTerraform, true)(struct!.variation),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageToHclTerraform, true)(struct!.message),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageList",
    },
    variation: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationToHclTerraform, true)(struct!.variation),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message?.internalValue;
    }
    if (this._variation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variation = this._variation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._message.internalValue = undefined;
      this._variation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._message.internalValue = value.message;
      this._variation.internalValue = value.variation;
    }
  }

  // message - computed: false, optional: true, required: false
  private _message = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessageList(this, "message", false);
  public get message() {
    return this._message;
  }
  public putMessage(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupMessage[] | cdktf.IResolvable) {
    this._message.internalValue = value;
  }
  public resetMessage() {
    this._message.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message.internalValue;
  }

  // variation - computed: false, optional: true, required: false
  private _variation = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariationList(this, "variation", false);
  public get variation() {
    return this._variation;
  }
  public putVariation(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupVariation[] | cdktf.IResolvable) {
    this._variation.internalValue = value;
  }
  public resetVariation() {
    this._variation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variationInput() {
    return this._variation.internalValue;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroup[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#allow_audio_input Lexv2ModelsSlot#allow_audio_input}
  */
  readonly allowAudioInput: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#allow_dtmf_input Lexv2ModelsSlot#allow_dtmf_input}
  */
  readonly allowDtmfInput: boolean | cdktf.IResolvable;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypesToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_audio_input: cdktf.booleanToTerraform(struct!.allowAudioInput),
    allow_dtmf_input: cdktf.booleanToTerraform(struct!.allowDtmfInput),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypesToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_audio_input: {
      value: cdktf.booleanToHclTerraform(struct!.allowAudioInput),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_dtmf_input: {
      value: cdktf.booleanToHclTerraform(struct!.allowDtmfInput),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowAudioInput !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAudioInput = this._allowAudioInput;
    }
    if (this._allowDtmfInput !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowDtmfInput = this._allowDtmfInput;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowAudioInput = undefined;
      this._allowDtmfInput = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowAudioInput = value.allowAudioInput;
      this._allowDtmfInput = value.allowDtmfInput;
    }
  }

  // allow_audio_input - computed: false, optional: false, required: true
  private _allowAudioInput?: boolean | cdktf.IResolvable; 
  public get allowAudioInput() {
    return this.getBooleanAttribute('allow_audio_input');
  }
  public set allowAudioInput(value: boolean | cdktf.IResolvable) {
    this._allowAudioInput = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAudioInputInput() {
    return this._allowAudioInput;
  }

  // allow_dtmf_input - computed: false, optional: false, required: true
  private _allowDtmfInput?: boolean | cdktf.IResolvable; 
  public get allowDtmfInput() {
    return this.getBooleanAttribute('allow_dtmf_input');
  }
  public set allowDtmfInput(value: boolean | cdktf.IResolvable) {
    this._allowDtmfInput = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDtmfInputInput() {
    return this._allowDtmfInput;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypesList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypesOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#end_timeout_ms Lexv2ModelsSlot#end_timeout_ms}
  */
  readonly endTimeoutMs: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#max_length_ms Lexv2ModelsSlot#max_length_ms}
  */
  readonly maxLengthMs: number;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecificationToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_timeout_ms: cdktf.numberToTerraform(struct!.endTimeoutMs),
    max_length_ms: cdktf.numberToTerraform(struct!.maxLengthMs),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecificationToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_timeout_ms: {
      value: cdktf.numberToHclTerraform(struct!.endTimeoutMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_length_ms: {
      value: cdktf.numberToHclTerraform(struct!.maxLengthMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecificationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTimeoutMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTimeoutMs = this._endTimeoutMs;
    }
    if (this._maxLengthMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLengthMs = this._maxLengthMs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endTimeoutMs = undefined;
      this._maxLengthMs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endTimeoutMs = value.endTimeoutMs;
      this._maxLengthMs = value.maxLengthMs;
    }
  }

  // end_timeout_ms - computed: false, optional: false, required: true
  private _endTimeoutMs?: number; 
  public get endTimeoutMs() {
    return this.getNumberAttribute('end_timeout_ms');
  }
  public set endTimeoutMs(value: number) {
    this._endTimeoutMs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeoutMsInput() {
    return this._endTimeoutMs;
  }

  // max_length_ms - computed: false, optional: false, required: true
  private _maxLengthMs?: number; 
  public get maxLengthMs() {
    return this.getNumberAttribute('max_length_ms');
  }
  public set maxLengthMs(value: number) {
    this._maxLengthMs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthMsInput() {
    return this._maxLengthMs;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecificationList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecification[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecificationOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#deletion_character Lexv2ModelsSlot#deletion_character}
  */
  readonly deletionCharacter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#end_character Lexv2ModelsSlot#end_character}
  */
  readonly endCharacter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#end_timeout_ms Lexv2ModelsSlot#end_timeout_ms}
  */
  readonly endTimeoutMs: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#max_length Lexv2ModelsSlot#max_length}
  */
  readonly maxLength: number;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecificationToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deletion_character: cdktf.stringToTerraform(struct!.deletionCharacter),
    end_character: cdktf.stringToTerraform(struct!.endCharacter),
    end_timeout_ms: cdktf.numberToTerraform(struct!.endTimeoutMs),
    max_length: cdktf.numberToTerraform(struct!.maxLength),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecificationToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deletion_character: {
      value: cdktf.stringToHclTerraform(struct!.deletionCharacter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_character: {
      value: cdktf.stringToHclTerraform(struct!.endCharacter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_timeout_ms: {
      value: cdktf.numberToHclTerraform(struct!.endTimeoutMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_length: {
      value: cdktf.numberToHclTerraform(struct!.maxLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecificationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deletionCharacter !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletionCharacter = this._deletionCharacter;
    }
    if (this._endCharacter !== undefined) {
      hasAnyValues = true;
      internalValueResult.endCharacter = this._endCharacter;
    }
    if (this._endTimeoutMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTimeoutMs = this._endTimeoutMs;
    }
    if (this._maxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLength = this._maxLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deletionCharacter = undefined;
      this._endCharacter = undefined;
      this._endTimeoutMs = undefined;
      this._maxLength = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deletionCharacter = value.deletionCharacter;
      this._endCharacter = value.endCharacter;
      this._endTimeoutMs = value.endTimeoutMs;
      this._maxLength = value.maxLength;
    }
  }

  // deletion_character - computed: false, optional: false, required: true
  private _deletionCharacter?: string; 
  public get deletionCharacter() {
    return this.getStringAttribute('deletion_character');
  }
  public set deletionCharacter(value: string) {
    this._deletionCharacter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionCharacterInput() {
    return this._deletionCharacter;
  }

  // end_character - computed: false, optional: false, required: true
  private _endCharacter?: string; 
  public get endCharacter() {
    return this.getStringAttribute('end_character');
  }
  public set endCharacter(value: string) {
    this._endCharacter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endCharacterInput() {
    return this._endCharacter;
  }

  // end_timeout_ms - computed: false, optional: false, required: true
  private _endTimeoutMs?: number; 
  public get endTimeoutMs() {
    return this.getNumberAttribute('end_timeout_ms');
  }
  public set endTimeoutMs(value: number) {
    this._endTimeoutMs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeoutMsInput() {
    return this._endTimeoutMs;
  }

  // max_length - computed: false, optional: false, required: true
  private _maxLength?: number; 
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }
  public set maxLength(value: number) {
    this._maxLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecificationList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecification[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecificationOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#start_timeout_ms Lexv2ModelsSlot#start_timeout_ms}
  */
  readonly startTimeoutMs: number;
  /**
  * audio_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#audio_specification Lexv2ModelsSlot#audio_specification}
  */
  readonly audioSpecification?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecification[] | cdktf.IResolvable;
  /**
  * dtmf_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#dtmf_specification Lexv2ModelsSlot#dtmf_specification}
  */
  readonly dtmfSpecification?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecification[] | cdktf.IResolvable;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    start_timeout_ms: cdktf.numberToTerraform(struct!.startTimeoutMs),
    audio_specification: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecificationToTerraform, true)(struct!.audioSpecification),
    dtmf_specification: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecificationToTerraform, true)(struct!.dtmfSpecification),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    start_timeout_ms: {
      value: cdktf.numberToHclTerraform(struct!.startTimeoutMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    audio_specification: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecificationToHclTerraform, true)(struct!.audioSpecification),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecificationList",
    },
    dtmf_specification: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecificationToHclTerraform, true)(struct!.dtmfSpecification),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecificationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._startTimeoutMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTimeoutMs = this._startTimeoutMs;
    }
    if (this._audioSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioSpecification = this._audioSpecification?.internalValue;
    }
    if (this._dtmfSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dtmfSpecification = this._dtmfSpecification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._startTimeoutMs = undefined;
      this._audioSpecification.internalValue = undefined;
      this._dtmfSpecification.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._startTimeoutMs = value.startTimeoutMs;
      this._audioSpecification.internalValue = value.audioSpecification;
      this._dtmfSpecification.internalValue = value.dtmfSpecification;
    }
  }

  // start_timeout_ms - computed: false, optional: false, required: true
  private _startTimeoutMs?: number; 
  public get startTimeoutMs() {
    return this.getNumberAttribute('start_timeout_ms');
  }
  public set startTimeoutMs(value: number) {
    this._startTimeoutMs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeoutMsInput() {
    return this._startTimeoutMs;
  }

  // audio_specification - computed: false, optional: true, required: false
  private _audioSpecification = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecificationList(this, "audio_specification", false);
  public get audioSpecification() {
    return this._audioSpecification;
  }
  public putAudioSpecification(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecification[] | cdktf.IResolvable) {
    this._audioSpecification.internalValue = value;
  }
  public resetAudioSpecification() {
    this._audioSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioSpecificationInput() {
    return this._audioSpecification.internalValue;
  }

  // dtmf_specification - computed: false, optional: true, required: false
  private _dtmfSpecification = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecificationList(this, "dtmf_specification", false);
  public get dtmfSpecification() {
    return this._dtmfSpecification;
  }
  public putDtmfSpecification(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecification[] | cdktf.IResolvable) {
    this._dtmfSpecification.internalValue = value;
  }
  public resetDtmfSpecification() {
    this._dtmfSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtmfSpecificationInput() {
    return this._dtmfSpecification.internalValue;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecification[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#start_timeout_ms Lexv2ModelsSlot#start_timeout_ms}
  */
  readonly startTimeoutMs: number;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecificationToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    start_timeout_ms: cdktf.numberToTerraform(struct!.startTimeoutMs),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecificationToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    start_timeout_ms: {
      value: cdktf.numberToHclTerraform(struct!.startTimeoutMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecificationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._startTimeoutMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTimeoutMs = this._startTimeoutMs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._startTimeoutMs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._startTimeoutMs = value.startTimeoutMs;
    }
  }

  // start_timeout_ms - computed: false, optional: false, required: true
  private _startTimeoutMs?: number; 
  public get startTimeoutMs() {
    return this.getNumberAttribute('start_timeout_ms');
  }
  public set startTimeoutMs(value: number) {
    this._startTimeoutMs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeoutMsInput() {
    return this._startTimeoutMs;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecificationList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecification[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecificationOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#allow_interrupt Lexv2ModelsSlot#allow_interrupt}
  */
  readonly allowInterrupt?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#map_block_key Lexv2ModelsSlot#map_block_key}
  */
  readonly mapBlockKey: string;
  /**
  * allowed_input_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#allowed_input_types Lexv2ModelsSlot#allowed_input_types}
  */
  readonly allowedInputTypes?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes[] | cdktf.IResolvable;
  /**
  * audio_and_dtmf_input_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#audio_and_dtmf_input_specification Lexv2ModelsSlot#audio_and_dtmf_input_specification}
  */
  readonly audioAndDtmfInputSpecification?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecification[] | cdktf.IResolvable;
  /**
  * text_input_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#text_input_specification Lexv2ModelsSlot#text_input_specification}
  */
  readonly textInputSpecification?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecification[] | cdktf.IResolvable;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_interrupt: cdktf.booleanToTerraform(struct!.allowInterrupt),
    map_block_key: cdktf.stringToTerraform(struct!.mapBlockKey),
    allowed_input_types: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypesToTerraform, true)(struct!.allowedInputTypes),
    audio_and_dtmf_input_specification: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationToTerraform, true)(struct!.audioAndDtmfInputSpecification),
    text_input_specification: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecificationToTerraform, true)(struct!.textInputSpecification),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_interrupt: {
      value: cdktf.booleanToHclTerraform(struct!.allowInterrupt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    map_block_key: {
      value: cdktf.stringToHclTerraform(struct!.mapBlockKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allowed_input_types: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypesToHclTerraform, true)(struct!.allowedInputTypes),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypesList",
    },
    audio_and_dtmf_input_specification: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationToHclTerraform, true)(struct!.audioAndDtmfInputSpecification),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationList",
    },
    text_input_specification: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecificationToHclTerraform, true)(struct!.textInputSpecification),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecificationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowInterrupt !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInterrupt = this._allowInterrupt;
    }
    if (this._mapBlockKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapBlockKey = this._mapBlockKey;
    }
    if (this._allowedInputTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedInputTypes = this._allowedInputTypes?.internalValue;
    }
    if (this._audioAndDtmfInputSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioAndDtmfInputSpecification = this._audioAndDtmfInputSpecification?.internalValue;
    }
    if (this._textInputSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textInputSpecification = this._textInputSpecification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowInterrupt = undefined;
      this._mapBlockKey = undefined;
      this._allowedInputTypes.internalValue = undefined;
      this._audioAndDtmfInputSpecification.internalValue = undefined;
      this._textInputSpecification.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowInterrupt = value.allowInterrupt;
      this._mapBlockKey = value.mapBlockKey;
      this._allowedInputTypes.internalValue = value.allowedInputTypes;
      this._audioAndDtmfInputSpecification.internalValue = value.audioAndDtmfInputSpecification;
      this._textInputSpecification.internalValue = value.textInputSpecification;
    }
  }

  // allow_interrupt - computed: false, optional: true, required: false
  private _allowInterrupt?: boolean | cdktf.IResolvable; 
  public get allowInterrupt() {
    return this.getBooleanAttribute('allow_interrupt');
  }
  public set allowInterrupt(value: boolean | cdktf.IResolvable) {
    this._allowInterrupt = value;
  }
  public resetAllowInterrupt() {
    this._allowInterrupt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInterruptInput() {
    return this._allowInterrupt;
  }

  // map_block_key - computed: false, optional: false, required: true
  private _mapBlockKey?: string; 
  public get mapBlockKey() {
    return this.getStringAttribute('map_block_key');
  }
  public set mapBlockKey(value: string) {
    this._mapBlockKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mapBlockKeyInput() {
    return this._mapBlockKey;
  }

  // allowed_input_types - computed: false, optional: true, required: false
  private _allowedInputTypes = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypesList(this, "allowed_input_types", false);
  public get allowedInputTypes() {
    return this._allowedInputTypes;
  }
  public putAllowedInputTypes(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes[] | cdktf.IResolvable) {
    this._allowedInputTypes.internalValue = value;
  }
  public resetAllowedInputTypes() {
    this._allowedInputTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedInputTypesInput() {
    return this._allowedInputTypes.internalValue;
  }

  // audio_and_dtmf_input_specification - computed: false, optional: true, required: false
  private _audioAndDtmfInputSpecification = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationList(this, "audio_and_dtmf_input_specification", false);
  public get audioAndDtmfInputSpecification() {
    return this._audioAndDtmfInputSpecification;
  }
  public putAudioAndDtmfInputSpecification(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecification[] | cdktf.IResolvable) {
    this._audioAndDtmfInputSpecification.internalValue = value;
  }
  public resetAudioAndDtmfInputSpecification() {
    this._audioAndDtmfInputSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioAndDtmfInputSpecificationInput() {
    return this._audioAndDtmfInputSpecification.internalValue;
  }

  // text_input_specification - computed: false, optional: true, required: false
  private _textInputSpecification = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecificationList(this, "text_input_specification", false);
  public get textInputSpecification() {
    return this._textInputSpecification;
  }
  public putTextInputSpecification(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecification[] | cdktf.IResolvable) {
    this._textInputSpecification.internalValue = value;
  }
  public resetTextInputSpecification() {
    this._textInputSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInputSpecificationInput() {
    return this._textInputSpecification.internalValue;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecification[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#allow_interrupt Lexv2ModelsSlot#allow_interrupt}
  */
  readonly allowInterrupt?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#max_retries Lexv2ModelsSlot#max_retries}
  */
  readonly maxRetries: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#message_selection_strategy Lexv2ModelsSlot#message_selection_strategy}
  */
  readonly messageSelectionStrategy?: string;
  /**
  * message_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#message_group Lexv2ModelsSlot#message_group}
  */
  readonly messageGroup?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroup[] | cdktf.IResolvable;
  /**
  * prompt_attempts_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#prompt_attempts_specification Lexv2ModelsSlot#prompt_attempts_specification}
  */
  readonly promptAttemptsSpecification?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecification[] | cdktf.IResolvable;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_interrupt: cdktf.booleanToTerraform(struct!.allowInterrupt),
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
    message_selection_strategy: cdktf.stringToTerraform(struct!.messageSelectionStrategy),
    message_group: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupToTerraform, true)(struct!.messageGroup),
    prompt_attempts_specification: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationToTerraform, true)(struct!.promptAttemptsSpecification),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_interrupt: {
      value: cdktf.booleanToHclTerraform(struct!.allowInterrupt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_retries: {
      value: cdktf.numberToHclTerraform(struct!.maxRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message_selection_strategy: {
      value: cdktf.stringToHclTerraform(struct!.messageSelectionStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_group: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupToHclTerraform, true)(struct!.messageGroup),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupList",
    },
    prompt_attempts_specification: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationToHclTerraform, true)(struct!.promptAttemptsSpecification),
      isBlock: true,
      type: "set",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowInterrupt !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInterrupt = this._allowInterrupt;
    }
    if (this._maxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetries = this._maxRetries;
    }
    if (this._messageSelectionStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageSelectionStrategy = this._messageSelectionStrategy;
    }
    if (this._messageGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageGroup = this._messageGroup?.internalValue;
    }
    if (this._promptAttemptsSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.promptAttemptsSpecification = this._promptAttemptsSpecification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowInterrupt = undefined;
      this._maxRetries = undefined;
      this._messageSelectionStrategy = undefined;
      this._messageGroup.internalValue = undefined;
      this._promptAttemptsSpecification.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowInterrupt = value.allowInterrupt;
      this._maxRetries = value.maxRetries;
      this._messageSelectionStrategy = value.messageSelectionStrategy;
      this._messageGroup.internalValue = value.messageGroup;
      this._promptAttemptsSpecification.internalValue = value.promptAttemptsSpecification;
    }
  }

  // allow_interrupt - computed: false, optional: true, required: false
  private _allowInterrupt?: boolean | cdktf.IResolvable; 
  public get allowInterrupt() {
    return this.getBooleanAttribute('allow_interrupt');
  }
  public set allowInterrupt(value: boolean | cdktf.IResolvable) {
    this._allowInterrupt = value;
  }
  public resetAllowInterrupt() {
    this._allowInterrupt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInterruptInput() {
    return this._allowInterrupt;
  }

  // max_retries - computed: false, optional: false, required: true
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // message_selection_strategy - computed: false, optional: true, required: false
  private _messageSelectionStrategy?: string; 
  public get messageSelectionStrategy() {
    return this.getStringAttribute('message_selection_strategy');
  }
  public set messageSelectionStrategy(value: string) {
    this._messageSelectionStrategy = value;
  }
  public resetMessageSelectionStrategy() {
    this._messageSelectionStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageSelectionStrategyInput() {
    return this._messageSelectionStrategy;
  }

  // message_group - computed: false, optional: true, required: false
  private _messageGroup = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroupList(this, "message_group", false);
  public get messageGroup() {
    return this._messageGroup;
  }
  public putMessageGroup(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroup[] | cdktf.IResolvable) {
    this._messageGroup.internalValue = value;
  }
  public resetMessageGroup() {
    this._messageGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageGroupInput() {
    return this._messageGroup.internalValue;
  }

  // prompt_attempts_specification - computed: false, optional: true, required: false
  private _promptAttemptsSpecification = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationList(this, "prompt_attempts_specification", true);
  public get promptAttemptsSpecification() {
    return this._promptAttemptsSpecification;
  }
  public putPromptAttemptsSpecification(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecification[] | cdktf.IResolvable) {
    this._promptAttemptsSpecification.internalValue = value;
  }
  public resetPromptAttemptsSpecification() {
    this._promptAttemptsSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptAttemptsSpecificationInput() {
    return this._promptAttemptsSpecification.internalValue;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecification[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingSampleUtterance {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#utterance Lexv2ModelsSlot#utterance}
  */
  readonly utterance: string;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingSampleUtteranceToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingSampleUtterance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    utterance: cdktf.stringToTerraform(struct!.utterance),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingSampleUtteranceToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingSampleUtterance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    utterance: {
      value: cdktf.stringToHclTerraform(struct!.utterance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingSampleUtteranceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingSampleUtterance | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._utterance !== undefined) {
      hasAnyValues = true;
      internalValueResult.utterance = this._utterance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingSampleUtterance | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._utterance = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._utterance = value.utterance;
    }
  }

  // utterance - computed: false, optional: false, required: true
  private _utterance?: string; 
  public get utterance() {
    return this.getStringAttribute('utterance');
  }
  public set utterance(value: string) {
    this._utterance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get utteranceInput() {
    return this._utterance;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingSampleUtteranceList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingSampleUtterance[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingSampleUtteranceOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingSampleUtteranceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageCustomPayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
  */
  readonly value: string;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageCustomPayloadToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageCustomPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageCustomPayloadToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageCustomPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageCustomPayloadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageCustomPayload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageCustomPayload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageCustomPayloadList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageCustomPayloadOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageCustomPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardButton {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#text Lexv2ModelsSlot#text}
  */
  readonly text: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
  */
  readonly value: string;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardButtonToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardButtonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
      this._value = value.value;
    }
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardButtonList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardButtonOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardButtonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#image_url Lexv2ModelsSlot#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#subtitle Lexv2ModelsSlot#subtitle}
  */
  readonly subtitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#title Lexv2ModelsSlot#title}
  */
  readonly title: string;
  /**
  * button block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#button Lexv2ModelsSlot#button}
  */
  readonly button?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_url: cdktf.stringToTerraform(struct!.imageUrl),
    subtitle: cdktf.stringToTerraform(struct!.subtitle),
    title: cdktf.stringToTerraform(struct!.title),
    button: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardButtonToTerraform, true)(struct!.button),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_url: {
      value: cdktf.stringToHclTerraform(struct!.imageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subtitle: {
      value: cdktf.stringToHclTerraform(struct!.subtitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    button: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardButtonToHclTerraform, true)(struct!.button),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardButtonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUrl = this._imageUrl;
    }
    if (this._subtitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtitle = this._subtitle;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._button?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.button = this._button?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageUrl = undefined;
      this._subtitle = undefined;
      this._title = undefined;
      this._button.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageUrl = value.imageUrl;
      this._subtitle = value.subtitle;
      this._title = value.title;
      this._button.internalValue = value.button;
    }
  }

  // image_url - computed: false, optional: true, required: false
  private _imageUrl?: string; 
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  public resetImageUrl() {
    this._imageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
  }

  // subtitle - computed: false, optional: true, required: false
  private _subtitle?: string; 
  public get subtitle() {
    return this.getStringAttribute('subtitle');
  }
  public set subtitle(value: string) {
    this._subtitle = value;
  }
  public resetSubtitle() {
    this._subtitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtitleInput() {
    return this._subtitle;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // button - computed: false, optional: true, required: false
  private _button = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardButtonList(this, "button", false);
  public get button() {
    return this._button;
  }
  public putButton(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable) {
    this._button.internalValue = value;
  }
  public resetButton() {
    this._button.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonInput() {
    return this._button.internalValue;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessagePlainTextMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
  */
  readonly value: string;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessagePlainTextMessageToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessagePlainTextMessageToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessagePlainTextMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessagePlainTextMessageList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessagePlainTextMessageOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessagePlainTextMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageSsmlMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
  */
  readonly value: string;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageSsmlMessageToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageSsmlMessageToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageSsmlMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageSsmlMessageList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageSsmlMessageOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageSsmlMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessage {
  /**
  * custom_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#custom_payload Lexv2ModelsSlot#custom_payload}
  */
  readonly customPayload?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable;
  /**
  * image_response_card block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#image_response_card Lexv2ModelsSlot#image_response_card}
  */
  readonly imageResponseCard?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable;
  /**
  * plain_text_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#plain_text_message Lexv2ModelsSlot#plain_text_message}
  */
  readonly plainTextMessage?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable;
  /**
  * ssml_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#ssml_message Lexv2ModelsSlot#ssml_message}
  */
  readonly ssmlMessage?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_payload: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageCustomPayloadToTerraform, true)(struct!.customPayload),
    image_response_card: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardToTerraform, true)(struct!.imageResponseCard),
    plain_text_message: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessagePlainTextMessageToTerraform, true)(struct!.plainTextMessage),
    ssml_message: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageSsmlMessageToTerraform, true)(struct!.ssmlMessage),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_payload: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageCustomPayloadToHclTerraform, true)(struct!.customPayload),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageCustomPayloadList",
    },
    image_response_card: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardToHclTerraform, true)(struct!.imageResponseCard),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardList",
    },
    plain_text_message: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessagePlainTextMessageToHclTerraform, true)(struct!.plainTextMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessagePlainTextMessageList",
    },
    ssml_message: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageSsmlMessageToHclTerraform, true)(struct!.ssmlMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageSsmlMessageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customPayload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPayload = this._customPayload?.internalValue;
    }
    if (this._imageResponseCard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageResponseCard = this._imageResponseCard?.internalValue;
    }
    if (this._plainTextMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plainTextMessage = this._plainTextMessage?.internalValue;
    }
    if (this._ssmlMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssmlMessage = this._ssmlMessage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = undefined;
      this._imageResponseCard.internalValue = undefined;
      this._plainTextMessage.internalValue = undefined;
      this._ssmlMessage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = value.customPayload;
      this._imageResponseCard.internalValue = value.imageResponseCard;
      this._plainTextMessage.internalValue = value.plainTextMessage;
      this._ssmlMessage.internalValue = value.ssmlMessage;
    }
  }

  // custom_payload - computed: false, optional: true, required: false
  private _customPayload = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageCustomPayloadList(this, "custom_payload", false);
  public get customPayload() {
    return this._customPayload;
  }
  public putCustomPayload(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable) {
    this._customPayload.internalValue = value;
  }
  public resetCustomPayload() {
    this._customPayload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPayloadInput() {
    return this._customPayload.internalValue;
  }

  // image_response_card - computed: false, optional: true, required: false
  private _imageResponseCard = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardList(this, "image_response_card", false);
  public get imageResponseCard() {
    return this._imageResponseCard;
  }
  public putImageResponseCard(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable) {
    this._imageResponseCard.internalValue = value;
  }
  public resetImageResponseCard() {
    this._imageResponseCard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageResponseCardInput() {
    return this._imageResponseCard.internalValue;
  }

  // plain_text_message - computed: false, optional: true, required: false
  private _plainTextMessage = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessagePlainTextMessageList(this, "plain_text_message", false);
  public get plainTextMessage() {
    return this._plainTextMessage;
  }
  public putPlainTextMessage(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable) {
    this._plainTextMessage.internalValue = value;
  }
  public resetPlainTextMessage() {
    this._plainTextMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainTextMessageInput() {
    return this._plainTextMessage.internalValue;
  }

  // ssml_message - computed: false, optional: true, required: false
  private _ssmlMessage = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageSsmlMessageList(this, "ssml_message", false);
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
  public putSsmlMessage(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable) {
    this._ssmlMessage.internalValue = value;
  }
  public resetSsmlMessage() {
    this._ssmlMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmlMessageInput() {
    return this._ssmlMessage.internalValue;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessage[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationCustomPayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
  */
  readonly value: string;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationCustomPayloadToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationCustomPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationCustomPayloadToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationCustomPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationCustomPayloadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationCustomPayload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationCustomPayload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationCustomPayloadList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationCustomPayloadOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationCustomPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardButton {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#text Lexv2ModelsSlot#text}
  */
  readonly text: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
  */
  readonly value: string;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardButtonToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardButtonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
      this._value = value.value;
    }
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardButtonList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardButtonOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardButtonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#image_url Lexv2ModelsSlot#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#subtitle Lexv2ModelsSlot#subtitle}
  */
  readonly subtitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#title Lexv2ModelsSlot#title}
  */
  readonly title: string;
  /**
  * button block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#button Lexv2ModelsSlot#button}
  */
  readonly button?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_url: cdktf.stringToTerraform(struct!.imageUrl),
    subtitle: cdktf.stringToTerraform(struct!.subtitle),
    title: cdktf.stringToTerraform(struct!.title),
    button: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardButtonToTerraform, true)(struct!.button),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_url: {
      value: cdktf.stringToHclTerraform(struct!.imageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subtitle: {
      value: cdktf.stringToHclTerraform(struct!.subtitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    button: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardButtonToHclTerraform, true)(struct!.button),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardButtonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUrl = this._imageUrl;
    }
    if (this._subtitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtitle = this._subtitle;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._button?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.button = this._button?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageUrl = undefined;
      this._subtitle = undefined;
      this._title = undefined;
      this._button.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageUrl = value.imageUrl;
      this._subtitle = value.subtitle;
      this._title = value.title;
      this._button.internalValue = value.button;
    }
  }

  // image_url - computed: false, optional: true, required: false
  private _imageUrl?: string; 
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  public resetImageUrl() {
    this._imageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
  }

  // subtitle - computed: false, optional: true, required: false
  private _subtitle?: string; 
  public get subtitle() {
    return this.getStringAttribute('subtitle');
  }
  public set subtitle(value: string) {
    this._subtitle = value;
  }
  public resetSubtitle() {
    this._subtitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtitleInput() {
    return this._subtitle;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // button - computed: false, optional: true, required: false
  private _button = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardButtonList(this, "button", false);
  public get button() {
    return this._button;
  }
  public putButton(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable) {
    this._button.internalValue = value;
  }
  public resetButton() {
    this._button.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonInput() {
    return this._button.internalValue;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationPlainTextMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
  */
  readonly value: string;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationPlainTextMessageToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationPlainTextMessageToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationPlainTextMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationPlainTextMessageList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationPlainTextMessageOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationPlainTextMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationSsmlMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
  */
  readonly value: string;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationSsmlMessageToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationSsmlMessageToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationSsmlMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationSsmlMessageList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationSsmlMessageOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationSsmlMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariation {
  /**
  * custom_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#custom_payload Lexv2ModelsSlot#custom_payload}
  */
  readonly customPayload?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable;
  /**
  * image_response_card block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#image_response_card Lexv2ModelsSlot#image_response_card}
  */
  readonly imageResponseCard?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable;
  /**
  * plain_text_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#plain_text_message Lexv2ModelsSlot#plain_text_message}
  */
  readonly plainTextMessage?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable;
  /**
  * ssml_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#ssml_message Lexv2ModelsSlot#ssml_message}
  */
  readonly ssmlMessage?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_payload: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationCustomPayloadToTerraform, true)(struct!.customPayload),
    image_response_card: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardToTerraform, true)(struct!.imageResponseCard),
    plain_text_message: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationPlainTextMessageToTerraform, true)(struct!.plainTextMessage),
    ssml_message: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationSsmlMessageToTerraform, true)(struct!.ssmlMessage),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_payload: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationCustomPayloadToHclTerraform, true)(struct!.customPayload),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationCustomPayloadList",
    },
    image_response_card: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardToHclTerraform, true)(struct!.imageResponseCard),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardList",
    },
    plain_text_message: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationPlainTextMessageToHclTerraform, true)(struct!.plainTextMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationPlainTextMessageList",
    },
    ssml_message: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationSsmlMessageToHclTerraform, true)(struct!.ssmlMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationSsmlMessageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customPayload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPayload = this._customPayload?.internalValue;
    }
    if (this._imageResponseCard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageResponseCard = this._imageResponseCard?.internalValue;
    }
    if (this._plainTextMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plainTextMessage = this._plainTextMessage?.internalValue;
    }
    if (this._ssmlMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssmlMessage = this._ssmlMessage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = undefined;
      this._imageResponseCard.internalValue = undefined;
      this._plainTextMessage.internalValue = undefined;
      this._ssmlMessage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = value.customPayload;
      this._imageResponseCard.internalValue = value.imageResponseCard;
      this._plainTextMessage.internalValue = value.plainTextMessage;
      this._ssmlMessage.internalValue = value.ssmlMessage;
    }
  }

  // custom_payload - computed: false, optional: true, required: false
  private _customPayload = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationCustomPayloadList(this, "custom_payload", false);
  public get customPayload() {
    return this._customPayload;
  }
  public putCustomPayload(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable) {
    this._customPayload.internalValue = value;
  }
  public resetCustomPayload() {
    this._customPayload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPayloadInput() {
    return this._customPayload.internalValue;
  }

  // image_response_card - computed: false, optional: true, required: false
  private _imageResponseCard = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardList(this, "image_response_card", false);
  public get imageResponseCard() {
    return this._imageResponseCard;
  }
  public putImageResponseCard(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable) {
    this._imageResponseCard.internalValue = value;
  }
  public resetImageResponseCard() {
    this._imageResponseCard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageResponseCardInput() {
    return this._imageResponseCard.internalValue;
  }

  // plain_text_message - computed: false, optional: true, required: false
  private _plainTextMessage = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationPlainTextMessageList(this, "plain_text_message", false);
  public get plainTextMessage() {
    return this._plainTextMessage;
  }
  public putPlainTextMessage(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable) {
    this._plainTextMessage.internalValue = value;
  }
  public resetPlainTextMessage() {
    this._plainTextMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainTextMessageInput() {
    return this._plainTextMessage.internalValue;
  }

  // ssml_message - computed: false, optional: true, required: false
  private _ssmlMessage = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationSsmlMessageList(this, "ssml_message", false);
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
  public putSsmlMessage(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable) {
    this._ssmlMessage.internalValue = value;
  }
  public resetSsmlMessage() {
    this._ssmlMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmlMessageInput() {
    return this._ssmlMessage.internalValue;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariation[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroup {
  /**
  * message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#message Lexv2ModelsSlot#message}
  */
  readonly message?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessage[] | cdktf.IResolvable;
  /**
  * variation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#variation Lexv2ModelsSlot#variation}
  */
  readonly variation?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariation[] | cdktf.IResolvable;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageToTerraform, true)(struct!.message),
    variation: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationToTerraform, true)(struct!.variation),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageToHclTerraform, true)(struct!.message),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageList",
    },
    variation: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationToHclTerraform, true)(struct!.variation),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message?.internalValue;
    }
    if (this._variation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variation = this._variation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._message.internalValue = undefined;
      this._variation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._message.internalValue = value.message;
      this._variation.internalValue = value.variation;
    }
  }

  // message - computed: false, optional: true, required: false
  private _message = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageList(this, "message", false);
  public get message() {
    return this._message;
  }
  public putMessage(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessage[] | cdktf.IResolvable) {
    this._message.internalValue = value;
  }
  public resetMessage() {
    this._message.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message.internalValue;
  }

  // variation - computed: false, optional: true, required: false
  private _variation = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationList(this, "variation", false);
  public get variation() {
    return this._variation;
  }
  public putVariation(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariation[] | cdktf.IResolvable) {
    this._variation.internalValue = value;
  }
  public resetVariation() {
    this._variation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variationInput() {
    return this._variation.internalValue;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroup[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#allow_interrupt Lexv2ModelsSlot#allow_interrupt}
  */
  readonly allowInterrupt?: boolean | cdktf.IResolvable;
  /**
  * message_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#message_group Lexv2ModelsSlot#message_group}
  */
  readonly messageGroup?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroup[] | cdktf.IResolvable;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_interrupt: cdktf.booleanToTerraform(struct!.allowInterrupt),
    message_group: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupToTerraform, true)(struct!.messageGroup),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_interrupt: {
      value: cdktf.booleanToHclTerraform(struct!.allowInterrupt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    message_group: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupToHclTerraform, true)(struct!.messageGroup),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowInterrupt !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInterrupt = this._allowInterrupt;
    }
    if (this._messageGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageGroup = this._messageGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowInterrupt = undefined;
      this._messageGroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowInterrupt = value.allowInterrupt;
      this._messageGroup.internalValue = value.messageGroup;
    }
  }

  // allow_interrupt - computed: false, optional: true, required: false
  private _allowInterrupt?: boolean | cdktf.IResolvable; 
  public get allowInterrupt() {
    return this.getBooleanAttribute('allow_interrupt');
  }
  public set allowInterrupt(value: boolean | cdktf.IResolvable) {
    this._allowInterrupt = value;
  }
  public resetAllowInterrupt() {
    this._allowInterrupt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInterruptInput() {
    return this._allowInterrupt;
  }

  // message_group - computed: false, optional: true, required: false
  private _messageGroup = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupList(this, "message_group", false);
  public get messageGroup() {
    return this._messageGroup;
  }
  public putMessageGroup(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroup[] | cdktf.IResolvable) {
    this._messageGroup.internalValue = value;
  }
  public resetMessageGroup() {
    this._messageGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageGroupInput() {
    return this._messageGroup.internalValue;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponse[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageCustomPayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
  */
  readonly value: string;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageCustomPayloadToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageCustomPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageCustomPayloadToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageCustomPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageCustomPayloadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageCustomPayload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageCustomPayload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageCustomPayloadList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageCustomPayloadOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageCustomPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardButton {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#text Lexv2ModelsSlot#text}
  */
  readonly text: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
  */
  readonly value: string;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardButtonToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardButtonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
      this._value = value.value;
    }
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardButtonList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardButtonOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardButtonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#image_url Lexv2ModelsSlot#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#subtitle Lexv2ModelsSlot#subtitle}
  */
  readonly subtitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#title Lexv2ModelsSlot#title}
  */
  readonly title: string;
  /**
  * button block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#button Lexv2ModelsSlot#button}
  */
  readonly button?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_url: cdktf.stringToTerraform(struct!.imageUrl),
    subtitle: cdktf.stringToTerraform(struct!.subtitle),
    title: cdktf.stringToTerraform(struct!.title),
    button: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardButtonToTerraform, true)(struct!.button),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_url: {
      value: cdktf.stringToHclTerraform(struct!.imageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subtitle: {
      value: cdktf.stringToHclTerraform(struct!.subtitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    button: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardButtonToHclTerraform, true)(struct!.button),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardButtonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUrl = this._imageUrl;
    }
    if (this._subtitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtitle = this._subtitle;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._button?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.button = this._button?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageUrl = undefined;
      this._subtitle = undefined;
      this._title = undefined;
      this._button.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageUrl = value.imageUrl;
      this._subtitle = value.subtitle;
      this._title = value.title;
      this._button.internalValue = value.button;
    }
  }

  // image_url - computed: false, optional: true, required: false
  private _imageUrl?: string; 
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  public resetImageUrl() {
    this._imageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
  }

  // subtitle - computed: false, optional: true, required: false
  private _subtitle?: string; 
  public get subtitle() {
    return this.getStringAttribute('subtitle');
  }
  public set subtitle(value: string) {
    this._subtitle = value;
  }
  public resetSubtitle() {
    this._subtitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtitleInput() {
    return this._subtitle;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // button - computed: false, optional: true, required: false
  private _button = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardButtonList(this, "button", false);
  public get button() {
    return this._button;
  }
  public putButton(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable) {
    this._button.internalValue = value;
  }
  public resetButton() {
    this._button.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonInput() {
    return this._button.internalValue;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessagePlainTextMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
  */
  readonly value: string;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessagePlainTextMessageToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessagePlainTextMessageToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessagePlainTextMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessagePlainTextMessageList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessagePlainTextMessageOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessagePlainTextMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageSsmlMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
  */
  readonly value: string;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageSsmlMessageToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageSsmlMessageToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageSsmlMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageSsmlMessageList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageSsmlMessageOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageSsmlMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessage {
  /**
  * custom_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#custom_payload Lexv2ModelsSlot#custom_payload}
  */
  readonly customPayload?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable;
  /**
  * image_response_card block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#image_response_card Lexv2ModelsSlot#image_response_card}
  */
  readonly imageResponseCard?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable;
  /**
  * plain_text_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#plain_text_message Lexv2ModelsSlot#plain_text_message}
  */
  readonly plainTextMessage?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable;
  /**
  * ssml_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#ssml_message Lexv2ModelsSlot#ssml_message}
  */
  readonly ssmlMessage?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_payload: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageCustomPayloadToTerraform, true)(struct!.customPayload),
    image_response_card: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardToTerraform, true)(struct!.imageResponseCard),
    plain_text_message: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessagePlainTextMessageToTerraform, true)(struct!.plainTextMessage),
    ssml_message: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageSsmlMessageToTerraform, true)(struct!.ssmlMessage),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_payload: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageCustomPayloadToHclTerraform, true)(struct!.customPayload),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageCustomPayloadList",
    },
    image_response_card: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardToHclTerraform, true)(struct!.imageResponseCard),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardList",
    },
    plain_text_message: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessagePlainTextMessageToHclTerraform, true)(struct!.plainTextMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessagePlainTextMessageList",
    },
    ssml_message: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageSsmlMessageToHclTerraform, true)(struct!.ssmlMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageSsmlMessageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customPayload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPayload = this._customPayload?.internalValue;
    }
    if (this._imageResponseCard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageResponseCard = this._imageResponseCard?.internalValue;
    }
    if (this._plainTextMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plainTextMessage = this._plainTextMessage?.internalValue;
    }
    if (this._ssmlMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssmlMessage = this._ssmlMessage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = undefined;
      this._imageResponseCard.internalValue = undefined;
      this._plainTextMessage.internalValue = undefined;
      this._ssmlMessage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = value.customPayload;
      this._imageResponseCard.internalValue = value.imageResponseCard;
      this._plainTextMessage.internalValue = value.plainTextMessage;
      this._ssmlMessage.internalValue = value.ssmlMessage;
    }
  }

  // custom_payload - computed: false, optional: true, required: false
  private _customPayload = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageCustomPayloadList(this, "custom_payload", false);
  public get customPayload() {
    return this._customPayload;
  }
  public putCustomPayload(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable) {
    this._customPayload.internalValue = value;
  }
  public resetCustomPayload() {
    this._customPayload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPayloadInput() {
    return this._customPayload.internalValue;
  }

  // image_response_card - computed: false, optional: true, required: false
  private _imageResponseCard = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardList(this, "image_response_card", false);
  public get imageResponseCard() {
    return this._imageResponseCard;
  }
  public putImageResponseCard(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable) {
    this._imageResponseCard.internalValue = value;
  }
  public resetImageResponseCard() {
    this._imageResponseCard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageResponseCardInput() {
    return this._imageResponseCard.internalValue;
  }

  // plain_text_message - computed: false, optional: true, required: false
  private _plainTextMessage = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessagePlainTextMessageList(this, "plain_text_message", false);
  public get plainTextMessage() {
    return this._plainTextMessage;
  }
  public putPlainTextMessage(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable) {
    this._plainTextMessage.internalValue = value;
  }
  public resetPlainTextMessage() {
    this._plainTextMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainTextMessageInput() {
    return this._plainTextMessage.internalValue;
  }

  // ssml_message - computed: false, optional: true, required: false
  private _ssmlMessage = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageSsmlMessageList(this, "ssml_message", false);
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
  public putSsmlMessage(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable) {
    this._ssmlMessage.internalValue = value;
  }
  public resetSsmlMessage() {
    this._ssmlMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmlMessageInput() {
    return this._ssmlMessage.internalValue;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessage[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationCustomPayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
  */
  readonly value: string;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationCustomPayloadToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationCustomPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationCustomPayloadToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationCustomPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationCustomPayloadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationCustomPayload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationCustomPayload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationCustomPayloadList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationCustomPayloadOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationCustomPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardButton {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#text Lexv2ModelsSlot#text}
  */
  readonly text: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
  */
  readonly value: string;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardButtonToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardButtonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
      this._value = value.value;
    }
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardButtonList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardButtonOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardButtonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#image_url Lexv2ModelsSlot#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#subtitle Lexv2ModelsSlot#subtitle}
  */
  readonly subtitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#title Lexv2ModelsSlot#title}
  */
  readonly title: string;
  /**
  * button block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#button Lexv2ModelsSlot#button}
  */
  readonly button?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_url: cdktf.stringToTerraform(struct!.imageUrl),
    subtitle: cdktf.stringToTerraform(struct!.subtitle),
    title: cdktf.stringToTerraform(struct!.title),
    button: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardButtonToTerraform, true)(struct!.button),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_url: {
      value: cdktf.stringToHclTerraform(struct!.imageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subtitle: {
      value: cdktf.stringToHclTerraform(struct!.subtitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    button: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardButtonToHclTerraform, true)(struct!.button),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardButtonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUrl = this._imageUrl;
    }
    if (this._subtitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtitle = this._subtitle;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._button?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.button = this._button?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageUrl = undefined;
      this._subtitle = undefined;
      this._title = undefined;
      this._button.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageUrl = value.imageUrl;
      this._subtitle = value.subtitle;
      this._title = value.title;
      this._button.internalValue = value.button;
    }
  }

  // image_url - computed: false, optional: true, required: false
  private _imageUrl?: string; 
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  public resetImageUrl() {
    this._imageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
  }

  // subtitle - computed: false, optional: true, required: false
  private _subtitle?: string; 
  public get subtitle() {
    return this.getStringAttribute('subtitle');
  }
  public set subtitle(value: string) {
    this._subtitle = value;
  }
  public resetSubtitle() {
    this._subtitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtitleInput() {
    return this._subtitle;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // button - computed: false, optional: true, required: false
  private _button = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardButtonList(this, "button", false);
  public get button() {
    return this._button;
  }
  public putButton(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable) {
    this._button.internalValue = value;
  }
  public resetButton() {
    this._button.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonInput() {
    return this._button.internalValue;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationPlainTextMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
  */
  readonly value: string;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationPlainTextMessageToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationPlainTextMessageToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationPlainTextMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationPlainTextMessageList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationPlainTextMessageOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationPlainTextMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationSsmlMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
  */
  readonly value: string;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationSsmlMessageToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationSsmlMessageToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationSsmlMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationSsmlMessageList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationSsmlMessageOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationSsmlMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariation {
  /**
  * custom_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#custom_payload Lexv2ModelsSlot#custom_payload}
  */
  readonly customPayload?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable;
  /**
  * image_response_card block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#image_response_card Lexv2ModelsSlot#image_response_card}
  */
  readonly imageResponseCard?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable;
  /**
  * plain_text_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#plain_text_message Lexv2ModelsSlot#plain_text_message}
  */
  readonly plainTextMessage?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable;
  /**
  * ssml_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#ssml_message Lexv2ModelsSlot#ssml_message}
  */
  readonly ssmlMessage?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_payload: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationCustomPayloadToTerraform, true)(struct!.customPayload),
    image_response_card: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardToTerraform, true)(struct!.imageResponseCard),
    plain_text_message: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationPlainTextMessageToTerraform, true)(struct!.plainTextMessage),
    ssml_message: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationSsmlMessageToTerraform, true)(struct!.ssmlMessage),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_payload: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationCustomPayloadToHclTerraform, true)(struct!.customPayload),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationCustomPayloadList",
    },
    image_response_card: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardToHclTerraform, true)(struct!.imageResponseCard),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardList",
    },
    plain_text_message: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationPlainTextMessageToHclTerraform, true)(struct!.plainTextMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationPlainTextMessageList",
    },
    ssml_message: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationSsmlMessageToHclTerraform, true)(struct!.ssmlMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationSsmlMessageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customPayload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPayload = this._customPayload?.internalValue;
    }
    if (this._imageResponseCard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageResponseCard = this._imageResponseCard?.internalValue;
    }
    if (this._plainTextMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plainTextMessage = this._plainTextMessage?.internalValue;
    }
    if (this._ssmlMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssmlMessage = this._ssmlMessage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = undefined;
      this._imageResponseCard.internalValue = undefined;
      this._plainTextMessage.internalValue = undefined;
      this._ssmlMessage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = value.customPayload;
      this._imageResponseCard.internalValue = value.imageResponseCard;
      this._plainTextMessage.internalValue = value.plainTextMessage;
      this._ssmlMessage.internalValue = value.ssmlMessage;
    }
  }

  // custom_payload - computed: false, optional: true, required: false
  private _customPayload = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationCustomPayloadList(this, "custom_payload", false);
  public get customPayload() {
    return this._customPayload;
  }
  public putCustomPayload(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable) {
    this._customPayload.internalValue = value;
  }
  public resetCustomPayload() {
    this._customPayload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPayloadInput() {
    return this._customPayload.internalValue;
  }

  // image_response_card - computed: false, optional: true, required: false
  private _imageResponseCard = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardList(this, "image_response_card", false);
  public get imageResponseCard() {
    return this._imageResponseCard;
  }
  public putImageResponseCard(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable) {
    this._imageResponseCard.internalValue = value;
  }
  public resetImageResponseCard() {
    this._imageResponseCard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageResponseCardInput() {
    return this._imageResponseCard.internalValue;
  }

  // plain_text_message - computed: false, optional: true, required: false
  private _plainTextMessage = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationPlainTextMessageList(this, "plain_text_message", false);
  public get plainTextMessage() {
    return this._plainTextMessage;
  }
  public putPlainTextMessage(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable) {
    this._plainTextMessage.internalValue = value;
  }
  public resetPlainTextMessage() {
    this._plainTextMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainTextMessageInput() {
    return this._plainTextMessage.internalValue;
  }

  // ssml_message - computed: false, optional: true, required: false
  private _ssmlMessage = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationSsmlMessageList(this, "ssml_message", false);
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
  public putSsmlMessage(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable) {
    this._ssmlMessage.internalValue = value;
  }
  public resetSsmlMessage() {
    this._ssmlMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmlMessageInput() {
    return this._ssmlMessage.internalValue;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariation[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroup {
  /**
  * message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#message Lexv2ModelsSlot#message}
  */
  readonly message?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessage[] | cdktf.IResolvable;
  /**
  * variation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#variation Lexv2ModelsSlot#variation}
  */
  readonly variation?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariation[] | cdktf.IResolvable;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageToTerraform, true)(struct!.message),
    variation: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationToTerraform, true)(struct!.variation),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageToHclTerraform, true)(struct!.message),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageList",
    },
    variation: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationToHclTerraform, true)(struct!.variation),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message?.internalValue;
    }
    if (this._variation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variation = this._variation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._message.internalValue = undefined;
      this._variation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._message.internalValue = value.message;
      this._variation.internalValue = value.variation;
    }
  }

  // message - computed: false, optional: true, required: false
  private _message = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageList(this, "message", false);
  public get message() {
    return this._message;
  }
  public putMessage(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessage[] | cdktf.IResolvable) {
    this._message.internalValue = value;
  }
  public resetMessage() {
    this._message.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message.internalValue;
  }

  // variation - computed: false, optional: true, required: false
  private _variation = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationList(this, "variation", false);
  public get variation() {
    return this._variation;
  }
  public putVariation(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariation[] | cdktf.IResolvable) {
    this._variation.internalValue = value;
  }
  public resetVariation() {
    this._variation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variationInput() {
    return this._variation.internalValue;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroup[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#allow_interrupt Lexv2ModelsSlot#allow_interrupt}
  */
  readonly allowInterrupt?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#frequency_in_seconds Lexv2ModelsSlot#frequency_in_seconds}
  */
  readonly frequencyInSeconds: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#timeout_in_seconds Lexv2ModelsSlot#timeout_in_seconds}
  */
  readonly timeoutInSeconds: number;
  /**
  * message_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#message_group Lexv2ModelsSlot#message_group}
  */
  readonly messageGroup?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroup[] | cdktf.IResolvable;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_interrupt: cdktf.booleanToTerraform(struct!.allowInterrupt),
    frequency_in_seconds: cdktf.numberToTerraform(struct!.frequencyInSeconds),
    timeout_in_seconds: cdktf.numberToTerraform(struct!.timeoutInSeconds),
    message_group: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupToTerraform, true)(struct!.messageGroup),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_interrupt: {
      value: cdktf.booleanToHclTerraform(struct!.allowInterrupt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    frequency_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.frequencyInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message_group: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupToHclTerraform, true)(struct!.messageGroup),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowInterrupt !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInterrupt = this._allowInterrupt;
    }
    if (this._frequencyInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequencyInSeconds = this._frequencyInSeconds;
    }
    if (this._timeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutInSeconds = this._timeoutInSeconds;
    }
    if (this._messageGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageGroup = this._messageGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowInterrupt = undefined;
      this._frequencyInSeconds = undefined;
      this._timeoutInSeconds = undefined;
      this._messageGroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowInterrupt = value.allowInterrupt;
      this._frequencyInSeconds = value.frequencyInSeconds;
      this._timeoutInSeconds = value.timeoutInSeconds;
      this._messageGroup.internalValue = value.messageGroup;
    }
  }

  // allow_interrupt - computed: false, optional: true, required: false
  private _allowInterrupt?: boolean | cdktf.IResolvable; 
  public get allowInterrupt() {
    return this.getBooleanAttribute('allow_interrupt');
  }
  public set allowInterrupt(value: boolean | cdktf.IResolvable) {
    this._allowInterrupt = value;
  }
  public resetAllowInterrupt() {
    this._allowInterrupt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInterruptInput() {
    return this._allowInterrupt;
  }

  // frequency_in_seconds - computed: false, optional: false, required: true
  private _frequencyInSeconds?: number; 
  public get frequencyInSeconds() {
    return this.getNumberAttribute('frequency_in_seconds');
  }
  public set frequencyInSeconds(value: number) {
    this._frequencyInSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInSecondsInput() {
    return this._frequencyInSeconds;
  }

  // timeout_in_seconds - computed: false, optional: false, required: true
  private _timeoutInSeconds?: number; 
  public get timeoutInSeconds() {
    return this.getNumberAttribute('timeout_in_seconds');
  }
  public set timeoutInSeconds(value: number) {
    this._timeoutInSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInSecondsInput() {
    return this._timeoutInSeconds;
  }

  // message_group - computed: false, optional: true, required: false
  private _messageGroup = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupList(this, "message_group", false);
  public get messageGroup() {
    return this._messageGroup;
  }
  public putMessageGroup(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroup[] | cdktf.IResolvable) {
    this._messageGroup.internalValue = value;
  }
  public resetMessageGroup() {
    this._messageGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageGroupInput() {
    return this._messageGroup.internalValue;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponse[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageCustomPayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
  */
  readonly value: string;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageCustomPayloadToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageCustomPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageCustomPayloadToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageCustomPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageCustomPayloadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageCustomPayload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageCustomPayload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageCustomPayloadList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageCustomPayloadOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageCustomPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardButton {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#text Lexv2ModelsSlot#text}
  */
  readonly text: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
  */
  readonly value: string;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardButtonToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardButtonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
      this._value = value.value;
    }
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardButtonList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardButtonOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardButtonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#image_url Lexv2ModelsSlot#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#subtitle Lexv2ModelsSlot#subtitle}
  */
  readonly subtitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#title Lexv2ModelsSlot#title}
  */
  readonly title: string;
  /**
  * button block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#button Lexv2ModelsSlot#button}
  */
  readonly button?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_url: cdktf.stringToTerraform(struct!.imageUrl),
    subtitle: cdktf.stringToTerraform(struct!.subtitle),
    title: cdktf.stringToTerraform(struct!.title),
    button: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardButtonToTerraform, true)(struct!.button),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_url: {
      value: cdktf.stringToHclTerraform(struct!.imageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subtitle: {
      value: cdktf.stringToHclTerraform(struct!.subtitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    button: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardButtonToHclTerraform, true)(struct!.button),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardButtonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUrl = this._imageUrl;
    }
    if (this._subtitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtitle = this._subtitle;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._button?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.button = this._button?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageUrl = undefined;
      this._subtitle = undefined;
      this._title = undefined;
      this._button.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageUrl = value.imageUrl;
      this._subtitle = value.subtitle;
      this._title = value.title;
      this._button.internalValue = value.button;
    }
  }

  // image_url - computed: false, optional: true, required: false
  private _imageUrl?: string; 
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  public resetImageUrl() {
    this._imageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
  }

  // subtitle - computed: false, optional: true, required: false
  private _subtitle?: string; 
  public get subtitle() {
    return this.getStringAttribute('subtitle');
  }
  public set subtitle(value: string) {
    this._subtitle = value;
  }
  public resetSubtitle() {
    this._subtitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtitleInput() {
    return this._subtitle;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // button - computed: false, optional: true, required: false
  private _button = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardButtonList(this, "button", false);
  public get button() {
    return this._button;
  }
  public putButton(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable) {
    this._button.internalValue = value;
  }
  public resetButton() {
    this._button.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonInput() {
    return this._button.internalValue;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessagePlainTextMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
  */
  readonly value: string;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessagePlainTextMessageToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessagePlainTextMessageToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessagePlainTextMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessagePlainTextMessageList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessagePlainTextMessageOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessagePlainTextMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageSsmlMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
  */
  readonly value: string;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageSsmlMessageToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageSsmlMessageToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageSsmlMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageSsmlMessageList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageSsmlMessageOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageSsmlMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessage {
  /**
  * custom_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#custom_payload Lexv2ModelsSlot#custom_payload}
  */
  readonly customPayload?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable;
  /**
  * image_response_card block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#image_response_card Lexv2ModelsSlot#image_response_card}
  */
  readonly imageResponseCard?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable;
  /**
  * plain_text_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#plain_text_message Lexv2ModelsSlot#plain_text_message}
  */
  readonly plainTextMessage?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable;
  /**
  * ssml_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#ssml_message Lexv2ModelsSlot#ssml_message}
  */
  readonly ssmlMessage?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_payload: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageCustomPayloadToTerraform, true)(struct!.customPayload),
    image_response_card: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardToTerraform, true)(struct!.imageResponseCard),
    plain_text_message: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessagePlainTextMessageToTerraform, true)(struct!.plainTextMessage),
    ssml_message: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageSsmlMessageToTerraform, true)(struct!.ssmlMessage),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_payload: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageCustomPayloadToHclTerraform, true)(struct!.customPayload),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageCustomPayloadList",
    },
    image_response_card: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardToHclTerraform, true)(struct!.imageResponseCard),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardList",
    },
    plain_text_message: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessagePlainTextMessageToHclTerraform, true)(struct!.plainTextMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessagePlainTextMessageList",
    },
    ssml_message: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageSsmlMessageToHclTerraform, true)(struct!.ssmlMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageSsmlMessageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customPayload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPayload = this._customPayload?.internalValue;
    }
    if (this._imageResponseCard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageResponseCard = this._imageResponseCard?.internalValue;
    }
    if (this._plainTextMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plainTextMessage = this._plainTextMessage?.internalValue;
    }
    if (this._ssmlMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssmlMessage = this._ssmlMessage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = undefined;
      this._imageResponseCard.internalValue = undefined;
      this._plainTextMessage.internalValue = undefined;
      this._ssmlMessage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = value.customPayload;
      this._imageResponseCard.internalValue = value.imageResponseCard;
      this._plainTextMessage.internalValue = value.plainTextMessage;
      this._ssmlMessage.internalValue = value.ssmlMessage;
    }
  }

  // custom_payload - computed: false, optional: true, required: false
  private _customPayload = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageCustomPayloadList(this, "custom_payload", false);
  public get customPayload() {
    return this._customPayload;
  }
  public putCustomPayload(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable) {
    this._customPayload.internalValue = value;
  }
  public resetCustomPayload() {
    this._customPayload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPayloadInput() {
    return this._customPayload.internalValue;
  }

  // image_response_card - computed: false, optional: true, required: false
  private _imageResponseCard = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardList(this, "image_response_card", false);
  public get imageResponseCard() {
    return this._imageResponseCard;
  }
  public putImageResponseCard(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable) {
    this._imageResponseCard.internalValue = value;
  }
  public resetImageResponseCard() {
    this._imageResponseCard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageResponseCardInput() {
    return this._imageResponseCard.internalValue;
  }

  // plain_text_message - computed: false, optional: true, required: false
  private _plainTextMessage = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessagePlainTextMessageList(this, "plain_text_message", false);
  public get plainTextMessage() {
    return this._plainTextMessage;
  }
  public putPlainTextMessage(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable) {
    this._plainTextMessage.internalValue = value;
  }
  public resetPlainTextMessage() {
    this._plainTextMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainTextMessageInput() {
    return this._plainTextMessage.internalValue;
  }

  // ssml_message - computed: false, optional: true, required: false
  private _ssmlMessage = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageSsmlMessageList(this, "ssml_message", false);
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
  public putSsmlMessage(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable) {
    this._ssmlMessage.internalValue = value;
  }
  public resetSsmlMessage() {
    this._ssmlMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmlMessageInput() {
    return this._ssmlMessage.internalValue;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessage[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationCustomPayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
  */
  readonly value: string;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationCustomPayloadToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationCustomPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationCustomPayloadToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationCustomPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationCustomPayloadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationCustomPayload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationCustomPayload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationCustomPayloadList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationCustomPayloadOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationCustomPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardButton {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#text Lexv2ModelsSlot#text}
  */
  readonly text: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
  */
  readonly value: string;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardButtonToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardButtonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
      this._value = value.value;
    }
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardButtonList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardButtonOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardButtonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#image_url Lexv2ModelsSlot#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#subtitle Lexv2ModelsSlot#subtitle}
  */
  readonly subtitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#title Lexv2ModelsSlot#title}
  */
  readonly title: string;
  /**
  * button block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#button Lexv2ModelsSlot#button}
  */
  readonly button?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_url: cdktf.stringToTerraform(struct!.imageUrl),
    subtitle: cdktf.stringToTerraform(struct!.subtitle),
    title: cdktf.stringToTerraform(struct!.title),
    button: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardButtonToTerraform, true)(struct!.button),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_url: {
      value: cdktf.stringToHclTerraform(struct!.imageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subtitle: {
      value: cdktf.stringToHclTerraform(struct!.subtitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    button: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardButtonToHclTerraform, true)(struct!.button),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardButtonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUrl = this._imageUrl;
    }
    if (this._subtitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtitle = this._subtitle;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._button?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.button = this._button?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageUrl = undefined;
      this._subtitle = undefined;
      this._title = undefined;
      this._button.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageUrl = value.imageUrl;
      this._subtitle = value.subtitle;
      this._title = value.title;
      this._button.internalValue = value.button;
    }
  }

  // image_url - computed: false, optional: true, required: false
  private _imageUrl?: string; 
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  public resetImageUrl() {
    this._imageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
  }

  // subtitle - computed: false, optional: true, required: false
  private _subtitle?: string; 
  public get subtitle() {
    return this.getStringAttribute('subtitle');
  }
  public set subtitle(value: string) {
    this._subtitle = value;
  }
  public resetSubtitle() {
    this._subtitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtitleInput() {
    return this._subtitle;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // button - computed: false, optional: true, required: false
  private _button = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardButtonList(this, "button", false);
  public get button() {
    return this._button;
  }
  public putButton(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable) {
    this._button.internalValue = value;
  }
  public resetButton() {
    this._button.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonInput() {
    return this._button.internalValue;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationPlainTextMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
  */
  readonly value: string;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationPlainTextMessageToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationPlainTextMessageToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationPlainTextMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationPlainTextMessageList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationPlainTextMessageOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationPlainTextMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationSsmlMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
  */
  readonly value: string;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationSsmlMessageToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationSsmlMessageToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationSsmlMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationSsmlMessageList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationSsmlMessageOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationSsmlMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariation {
  /**
  * custom_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#custom_payload Lexv2ModelsSlot#custom_payload}
  */
  readonly customPayload?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable;
  /**
  * image_response_card block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#image_response_card Lexv2ModelsSlot#image_response_card}
  */
  readonly imageResponseCard?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable;
  /**
  * plain_text_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#plain_text_message Lexv2ModelsSlot#plain_text_message}
  */
  readonly plainTextMessage?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable;
  /**
  * ssml_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#ssml_message Lexv2ModelsSlot#ssml_message}
  */
  readonly ssmlMessage?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_payload: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationCustomPayloadToTerraform, true)(struct!.customPayload),
    image_response_card: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardToTerraform, true)(struct!.imageResponseCard),
    plain_text_message: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationPlainTextMessageToTerraform, true)(struct!.plainTextMessage),
    ssml_message: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationSsmlMessageToTerraform, true)(struct!.ssmlMessage),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_payload: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationCustomPayloadToHclTerraform, true)(struct!.customPayload),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationCustomPayloadList",
    },
    image_response_card: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardToHclTerraform, true)(struct!.imageResponseCard),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardList",
    },
    plain_text_message: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationPlainTextMessageToHclTerraform, true)(struct!.plainTextMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationPlainTextMessageList",
    },
    ssml_message: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationSsmlMessageToHclTerraform, true)(struct!.ssmlMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationSsmlMessageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customPayload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPayload = this._customPayload?.internalValue;
    }
    if (this._imageResponseCard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageResponseCard = this._imageResponseCard?.internalValue;
    }
    if (this._plainTextMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plainTextMessage = this._plainTextMessage?.internalValue;
    }
    if (this._ssmlMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssmlMessage = this._ssmlMessage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = undefined;
      this._imageResponseCard.internalValue = undefined;
      this._plainTextMessage.internalValue = undefined;
      this._ssmlMessage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = value.customPayload;
      this._imageResponseCard.internalValue = value.imageResponseCard;
      this._plainTextMessage.internalValue = value.plainTextMessage;
      this._ssmlMessage.internalValue = value.ssmlMessage;
    }
  }

  // custom_payload - computed: false, optional: true, required: false
  private _customPayload = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationCustomPayloadList(this, "custom_payload", false);
  public get customPayload() {
    return this._customPayload;
  }
  public putCustomPayload(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable) {
    this._customPayload.internalValue = value;
  }
  public resetCustomPayload() {
    this._customPayload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPayloadInput() {
    return this._customPayload.internalValue;
  }

  // image_response_card - computed: false, optional: true, required: false
  private _imageResponseCard = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardList(this, "image_response_card", false);
  public get imageResponseCard() {
    return this._imageResponseCard;
  }
  public putImageResponseCard(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable) {
    this._imageResponseCard.internalValue = value;
  }
  public resetImageResponseCard() {
    this._imageResponseCard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageResponseCardInput() {
    return this._imageResponseCard.internalValue;
  }

  // plain_text_message - computed: false, optional: true, required: false
  private _plainTextMessage = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationPlainTextMessageList(this, "plain_text_message", false);
  public get plainTextMessage() {
    return this._plainTextMessage;
  }
  public putPlainTextMessage(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable) {
    this._plainTextMessage.internalValue = value;
  }
  public resetPlainTextMessage() {
    this._plainTextMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainTextMessageInput() {
    return this._plainTextMessage.internalValue;
  }

  // ssml_message - computed: false, optional: true, required: false
  private _ssmlMessage = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationSsmlMessageList(this, "ssml_message", false);
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
  public putSsmlMessage(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable) {
    this._ssmlMessage.internalValue = value;
  }
  public resetSsmlMessage() {
    this._ssmlMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmlMessageInput() {
    return this._ssmlMessage.internalValue;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariation[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroup {
  /**
  * message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#message Lexv2ModelsSlot#message}
  */
  readonly message?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessage[] | cdktf.IResolvable;
  /**
  * variation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#variation Lexv2ModelsSlot#variation}
  */
  readonly variation?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariation[] | cdktf.IResolvable;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageToTerraform, true)(struct!.message),
    variation: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationToTerraform, true)(struct!.variation),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageToHclTerraform, true)(struct!.message),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageList",
    },
    variation: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationToHclTerraform, true)(struct!.variation),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message?.internalValue;
    }
    if (this._variation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variation = this._variation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._message.internalValue = undefined;
      this._variation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._message.internalValue = value.message;
      this._variation.internalValue = value.variation;
    }
  }

  // message - computed: false, optional: true, required: false
  private _message = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageList(this, "message", false);
  public get message() {
    return this._message;
  }
  public putMessage(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessage[] | cdktf.IResolvable) {
    this._message.internalValue = value;
  }
  public resetMessage() {
    this._message.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message.internalValue;
  }

  // variation - computed: false, optional: true, required: false
  private _variation = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationList(this, "variation", false);
  public get variation() {
    return this._variation;
  }
  public putVariation(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariation[] | cdktf.IResolvable) {
    this._variation.internalValue = value;
  }
  public resetVariation() {
    this._variation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variationInput() {
    return this._variation.internalValue;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroup[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#allow_interrupt Lexv2ModelsSlot#allow_interrupt}
  */
  readonly allowInterrupt?: boolean | cdktf.IResolvable;
  /**
  * message_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#message_group Lexv2ModelsSlot#message_group}
  */
  readonly messageGroup?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroup[] | cdktf.IResolvable;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_interrupt: cdktf.booleanToTerraform(struct!.allowInterrupt),
    message_group: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupToTerraform, true)(struct!.messageGroup),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_interrupt: {
      value: cdktf.booleanToHclTerraform(struct!.allowInterrupt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    message_group: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupToHclTerraform, true)(struct!.messageGroup),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowInterrupt !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInterrupt = this._allowInterrupt;
    }
    if (this._messageGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageGroup = this._messageGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowInterrupt = undefined;
      this._messageGroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowInterrupt = value.allowInterrupt;
      this._messageGroup.internalValue = value.messageGroup;
    }
  }

  // allow_interrupt - computed: false, optional: true, required: false
  private _allowInterrupt?: boolean | cdktf.IResolvable; 
  public get allowInterrupt() {
    return this.getBooleanAttribute('allow_interrupt');
  }
  public set allowInterrupt(value: boolean | cdktf.IResolvable) {
    this._allowInterrupt = value;
  }
  public resetAllowInterrupt() {
    this._allowInterrupt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInterruptInput() {
    return this._allowInterrupt;
  }

  // message_group - computed: false, optional: true, required: false
  private _messageGroup = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupList(this, "message_group", false);
  public get messageGroup() {
    return this._messageGroup;
  }
  public putMessageGroup(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroup[] | cdktf.IResolvable) {
    this._messageGroup.internalValue = value;
  }
  public resetMessageGroup() {
    this._messageGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageGroupInput() {
    return this._messageGroup.internalValue;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponse[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#active Lexv2ModelsSlot#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * continue_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#continue_response Lexv2ModelsSlot#continue_response}
  */
  readonly continueResponse?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponse[] | cdktf.IResolvable;
  /**
  * still_waiting_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#still_waiting_response Lexv2ModelsSlot#still_waiting_response}
  */
  readonly stillWaitingResponse?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponse[] | cdktf.IResolvable;
  /**
  * waiting_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#waiting_response Lexv2ModelsSlot#waiting_response}
  */
  readonly waitingResponse?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponse[] | cdktf.IResolvable;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    continue_response: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseToTerraform, true)(struct!.continueResponse),
    still_waiting_response: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseToTerraform, true)(struct!.stillWaitingResponse),
    waiting_response: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseToTerraform, true)(struct!.waitingResponse),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    continue_response: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseToHclTerraform, true)(struct!.continueResponse),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseList",
    },
    still_waiting_response: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseToHclTerraform, true)(struct!.stillWaitingResponse),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseList",
    },
    waiting_response: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseToHclTerraform, true)(struct!.waitingResponse),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._continueResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.continueResponse = this._continueResponse?.internalValue;
    }
    if (this._stillWaitingResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stillWaitingResponse = this._stillWaitingResponse?.internalValue;
    }
    if (this._waitingResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitingResponse = this._waitingResponse?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._active = undefined;
      this._continueResponse.internalValue = undefined;
      this._stillWaitingResponse.internalValue = undefined;
      this._waitingResponse.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._active = value.active;
      this._continueResponse.internalValue = value.continueResponse;
      this._stillWaitingResponse.internalValue = value.stillWaitingResponse;
      this._waitingResponse.internalValue = value.waitingResponse;
    }
  }

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // continue_response - computed: false, optional: true, required: false
  private _continueResponse = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponseList(this, "continue_response", false);
  public get continueResponse() {
    return this._continueResponse;
  }
  public putContinueResponse(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationContinueResponse[] | cdktf.IResolvable) {
    this._continueResponse.internalValue = value;
  }
  public resetContinueResponse() {
    this._continueResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continueResponseInput() {
    return this._continueResponse.internalValue;
  }

  // still_waiting_response - computed: false, optional: true, required: false
  private _stillWaitingResponse = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseList(this, "still_waiting_response", false);
  public get stillWaitingResponse() {
    return this._stillWaitingResponse;
  }
  public putStillWaitingResponse(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponse[] | cdktf.IResolvable) {
    this._stillWaitingResponse.internalValue = value;
  }
  public resetStillWaitingResponse() {
    this._stillWaitingResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stillWaitingResponseInput() {
    return this._stillWaitingResponse.internalValue;
  }

  // waiting_response - computed: false, optional: true, required: false
  private _waitingResponse = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponseList(this, "waiting_response", false);
  public get waitingResponse() {
    return this._waitingResponse;
  }
  public putWaitingResponse(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationWaitingResponse[] | cdktf.IResolvable) {
    this._waitingResponse.internalValue = value;
  }
  public resetWaitingResponse() {
    this._waitingResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitingResponseInput() {
    return this._waitingResponse.internalValue;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecification[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSetting {
  /**
  * default_value_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#default_value_specification Lexv2ModelsSlot#default_value_specification}
  */
  readonly defaultValueSpecification?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingDefaultValueSpecification[] | cdktf.IResolvable;
  /**
  * prompt_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#prompt_specification Lexv2ModelsSlot#prompt_specification}
  */
  readonly promptSpecification?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecification[] | cdktf.IResolvable;
  /**
  * sample_utterance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#sample_utterance Lexv2ModelsSlot#sample_utterance}
  */
  readonly sampleUtterance?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingSampleUtterance[] | cdktf.IResolvable;
  /**
  * wait_and_continue_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#wait_and_continue_specification Lexv2ModelsSlot#wait_and_continue_specification}
  */
  readonly waitAndContinueSpecification?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecification[] | cdktf.IResolvable;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value_specification: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingDefaultValueSpecificationToTerraform, true)(struct!.defaultValueSpecification),
    prompt_specification: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationToTerraform, true)(struct!.promptSpecification),
    sample_utterance: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingSampleUtteranceToTerraform, true)(struct!.sampleUtterance),
    wait_and_continue_specification: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationToTerraform, true)(struct!.waitAndContinueSpecification),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value_specification: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingDefaultValueSpecificationToHclTerraform, true)(struct!.defaultValueSpecification),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingDefaultValueSpecificationList",
    },
    prompt_specification: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationToHclTerraform, true)(struct!.promptSpecification),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationList",
    },
    sample_utterance: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingSampleUtteranceToHclTerraform, true)(struct!.sampleUtterance),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingSampleUtteranceList",
    },
    wait_and_continue_specification: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationToHclTerraform, true)(struct!.waitAndContinueSpecification),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValueSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValueSpecification = this._defaultValueSpecification?.internalValue;
    }
    if (this._promptSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.promptSpecification = this._promptSpecification?.internalValue;
    }
    if (this._sampleUtterance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleUtterance = this._sampleUtterance?.internalValue;
    }
    if (this._waitAndContinueSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitAndContinueSpecification = this._waitAndContinueSpecification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValueSpecification.internalValue = undefined;
      this._promptSpecification.internalValue = undefined;
      this._sampleUtterance.internalValue = undefined;
      this._waitAndContinueSpecification.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValueSpecification.internalValue = value.defaultValueSpecification;
      this._promptSpecification.internalValue = value.promptSpecification;
      this._sampleUtterance.internalValue = value.sampleUtterance;
      this._waitAndContinueSpecification.internalValue = value.waitAndContinueSpecification;
    }
  }

  // default_value_specification - computed: false, optional: true, required: false
  private _defaultValueSpecification = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingDefaultValueSpecificationList(this, "default_value_specification", false);
  public get defaultValueSpecification() {
    return this._defaultValueSpecification;
  }
  public putDefaultValueSpecification(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingDefaultValueSpecification[] | cdktf.IResolvable) {
    this._defaultValueSpecification.internalValue = value;
  }
  public resetDefaultValueSpecification() {
    this._defaultValueSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueSpecificationInput() {
    return this._defaultValueSpecification.internalValue;
  }

  // prompt_specification - computed: false, optional: true, required: false
  private _promptSpecification = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationList(this, "prompt_specification", false);
  public get promptSpecification() {
    return this._promptSpecification;
  }
  public putPromptSpecification(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecification[] | cdktf.IResolvable) {
    this._promptSpecification.internalValue = value;
  }
  public resetPromptSpecification() {
    this._promptSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptSpecificationInput() {
    return this._promptSpecification.internalValue;
  }

  // sample_utterance - computed: false, optional: true, required: false
  private _sampleUtterance = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingSampleUtteranceList(this, "sample_utterance", false);
  public get sampleUtterance() {
    return this._sampleUtterance;
  }
  public putSampleUtterance(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingSampleUtterance[] | cdktf.IResolvable) {
    this._sampleUtterance.internalValue = value;
  }
  public resetSampleUtterance() {
    this._sampleUtterance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleUtteranceInput() {
    return this._sampleUtterance.internalValue;
  }

  // wait_and_continue_specification - computed: false, optional: true, required: false
  private _waitAndContinueSpecification = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecificationList(this, "wait_and_continue_specification", false);
  public get waitAndContinueSpecification() {
    return this._waitAndContinueSpecification;
  }
  public putWaitAndContinueSpecification(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecification[] | cdktf.IResolvable) {
    this._waitAndContinueSpecification.internalValue = value;
  }
  public resetWaitAndContinueSpecification() {
    this._waitAndContinueSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitAndContinueSpecificationInput() {
    return this._waitAndContinueSpecification.internalValue;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSetting[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSettingSlotSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#map_block_key Lexv2ModelsSlot#map_block_key}
  */
  readonly mapBlockKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#slot_type_id Lexv2ModelsSlot#slot_type_id}
  */
  readonly slotTypeId: string;
  /**
  * value_elicitation_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#value_elicitation_setting Lexv2ModelsSlot#value_elicitation_setting}
  */
  readonly valueElicitationSetting?: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSetting[] | cdktf.IResolvable;
}

export function lexv2ModelsSlotSubSlotSettingSlotSpecificationToTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    map_block_key: cdktf.stringToTerraform(struct!.mapBlockKey),
    slot_type_id: cdktf.stringToTerraform(struct!.slotTypeId),
    value_elicitation_setting: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingToTerraform, true)(struct!.valueElicitationSetting),
  }
}


export function lexv2ModelsSlotSubSlotSettingSlotSpecificationToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSettingSlotSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    map_block_key: {
      value: cdktf.stringToHclTerraform(struct!.mapBlockKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slot_type_id: {
      value: cdktf.stringToHclTerraform(struct!.slotTypeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_elicitation_setting: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingToHclTerraform, true)(struct!.valueElicitationSetting),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSettingSlotSpecification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mapBlockKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapBlockKey = this._mapBlockKey;
    }
    if (this._slotTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.slotTypeId = this._slotTypeId;
    }
    if (this._valueElicitationSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueElicitationSetting = this._valueElicitationSetting?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSettingSlotSpecification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mapBlockKey = undefined;
      this._slotTypeId = undefined;
      this._valueElicitationSetting.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mapBlockKey = value.mapBlockKey;
      this._slotTypeId = value.slotTypeId;
      this._valueElicitationSetting.internalValue = value.valueElicitationSetting;
    }
  }

  // map_block_key - computed: false, optional: false, required: true
  private _mapBlockKey?: string; 
  public get mapBlockKey() {
    return this.getStringAttribute('map_block_key');
  }
  public set mapBlockKey(value: string) {
    this._mapBlockKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mapBlockKeyInput() {
    return this._mapBlockKey;
  }

  // slot_type_id - computed: false, optional: false, required: true
  private _slotTypeId?: string; 
  public get slotTypeId() {
    return this.getStringAttribute('slot_type_id');
  }
  public set slotTypeId(value: string) {
    this._slotTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slotTypeIdInput() {
    return this._slotTypeId;
  }

  // value_elicitation_setting - computed: false, optional: true, required: false
  private _valueElicitationSetting = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingList(this, "value_elicitation_setting", false);
  public get valueElicitationSetting() {
    return this._valueElicitationSetting;
  }
  public putValueElicitationSetting(value: Lexv2ModelsSlotSubSlotSettingSlotSpecificationValueElicitationSetting[] | cdktf.IResolvable) {
    this._valueElicitationSetting.internalValue = value;
  }
  public resetValueElicitationSetting() {
    this._valueElicitationSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueElicitationSettingInput() {
    return this._valueElicitationSetting.internalValue;
  }
}

export class Lexv2ModelsSlotSubSlotSettingSlotSpecificationList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSettingSlotSpecification[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingSlotSpecificationOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingSlotSpecificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotSubSlotSetting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#expression Lexv2ModelsSlot#expression}
  */
  readonly expression?: string;
  /**
  * slot_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#slot_specification Lexv2ModelsSlot#slot_specification}
  */
  readonly slotSpecification?: Lexv2ModelsSlotSubSlotSettingSlotSpecification[] | cdktf.IResolvable;
}

export function lexv2ModelsSlotSubSlotSettingToTerraform(struct?: Lexv2ModelsSlotSubSlotSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    slot_specification: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingSlotSpecificationToTerraform, true)(struct!.slotSpecification),
  }
}


export function lexv2ModelsSlotSubSlotSettingToHclTerraform(struct?: Lexv2ModelsSlotSubSlotSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slot_specification: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingSlotSpecificationToHclTerraform, true)(struct!.slotSpecification),
      isBlock: true,
      type: "set",
      storageClassType: "Lexv2ModelsSlotSubSlotSettingSlotSpecificationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotSubSlotSettingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotSubSlotSetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._slotSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slotSpecification = this._slotSpecification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotSubSlotSetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._slotSpecification.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._slotSpecification.internalValue = value.slotSpecification;
    }
  }

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // slot_specification - computed: false, optional: true, required: false
  private _slotSpecification = new Lexv2ModelsSlotSubSlotSettingSlotSpecificationList(this, "slot_specification", true);
  public get slotSpecification() {
    return this._slotSpecification;
  }
  public putSlotSpecification(value: Lexv2ModelsSlotSubSlotSettingSlotSpecification[] | cdktf.IResolvable) {
    this._slotSpecification.internalValue = value;
  }
  public resetSlotSpecification() {
    this._slotSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotSpecificationInput() {
    return this._slotSpecification.internalValue;
  }
}

export class Lexv2ModelsSlotSubSlotSettingList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotSubSlotSetting[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotSubSlotSettingOutputReference {
    return new Lexv2ModelsSlotSubSlotSettingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#create Lexv2ModelsSlot#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#delete Lexv2ModelsSlot#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#update Lexv2ModelsSlot#update}
  */
  readonly update?: string;
}

export function lexv2ModelsSlotTimeoutsToTerraform(struct?: Lexv2ModelsSlotTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function lexv2ModelsSlotTimeoutsToHclTerraform(struct?: Lexv2ModelsSlotTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Lexv2ModelsSlotTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface Lexv2ModelsSlotValueElicitationSettingDefaultValueSpecificationDefaultValueListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#default_value Lexv2ModelsSlot#default_value}
  */
  readonly defaultValue: string;
}

export function lexv2ModelsSlotValueElicitationSettingDefaultValueSpecificationDefaultValueListStructToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingDefaultValueSpecificationDefaultValueListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
  }
}


export function lexv2ModelsSlotValueElicitationSettingDefaultValueSpecificationDefaultValueListStructToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingDefaultValueSpecificationDefaultValueListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotValueElicitationSettingDefaultValueSpecificationDefaultValueListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotValueElicitationSettingDefaultValueSpecificationDefaultValueListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotValueElicitationSettingDefaultValueSpecificationDefaultValueListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
    }
  }

  // default_value - computed: false, optional: false, required: true
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }
}

export class Lexv2ModelsSlotValueElicitationSettingDefaultValueSpecificationDefaultValueListStructList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotValueElicitationSettingDefaultValueSpecificationDefaultValueListStruct[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotValueElicitationSettingDefaultValueSpecificationDefaultValueListStructOutputReference {
    return new Lexv2ModelsSlotValueElicitationSettingDefaultValueSpecificationDefaultValueListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotValueElicitationSettingDefaultValueSpecification {
  /**
  * default_value_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#default_value_list Lexv2ModelsSlot#default_value_list}
  */
  readonly defaultValueList?: Lexv2ModelsSlotValueElicitationSettingDefaultValueSpecificationDefaultValueListStruct[] | cdktf.IResolvable;
}

export function lexv2ModelsSlotValueElicitationSettingDefaultValueSpecificationToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingDefaultValueSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value_list: cdktf.listMapper(lexv2ModelsSlotValueElicitationSettingDefaultValueSpecificationDefaultValueListStructToTerraform, true)(struct!.defaultValueList),
  }
}


export function lexv2ModelsSlotValueElicitationSettingDefaultValueSpecificationToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingDefaultValueSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value_list: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotValueElicitationSettingDefaultValueSpecificationDefaultValueListStructToHclTerraform, true)(struct!.defaultValueList),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotValueElicitationSettingDefaultValueSpecificationDefaultValueListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotValueElicitationSettingDefaultValueSpecificationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotValueElicitationSettingDefaultValueSpecification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValueList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValueList = this._defaultValueList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotValueElicitationSettingDefaultValueSpecification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValueList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValueList.internalValue = value.defaultValueList;
    }
  }

  // default_value_list - computed: false, optional: true, required: false
  private _defaultValueList = new Lexv2ModelsSlotValueElicitationSettingDefaultValueSpecificationDefaultValueListStructList(this, "default_value_list", false);
  public get defaultValueList() {
    return this._defaultValueList;
  }
  public putDefaultValueList(value: Lexv2ModelsSlotValueElicitationSettingDefaultValueSpecificationDefaultValueListStruct[] | cdktf.IResolvable) {
    this._defaultValueList.internalValue = value;
  }
  public resetDefaultValueList() {
    this._defaultValueList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueListInput() {
    return this._defaultValueList.internalValue;
  }
}

export class Lexv2ModelsSlotValueElicitationSettingDefaultValueSpecificationList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotValueElicitationSettingDefaultValueSpecification[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotValueElicitationSettingDefaultValueSpecificationOutputReference {
    return new Lexv2ModelsSlotValueElicitationSettingDefaultValueSpecificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageCustomPayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
  */
  readonly value: string;
}

export function lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageCustomPayloadToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageCustomPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageCustomPayloadToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageCustomPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageCustomPayloadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageCustomPayload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageCustomPayload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageCustomPayloadList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageCustomPayload[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageCustomPayloadOutputReference {
    return new Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageCustomPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardButton {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#text Lexv2ModelsSlot#text}
  */
  readonly text: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
  */
  readonly value: string;
}

export function lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardButtonToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardButton | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardButton | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardButtonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardButton | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardButton | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
      this._value = value.value;
    }
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardButtonList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardButtonOutputReference {
    return new Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardButtonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#image_url Lexv2ModelsSlot#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#subtitle Lexv2ModelsSlot#subtitle}
  */
  readonly subtitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#title Lexv2ModelsSlot#title}
  */
  readonly title: string;
  /**
  * button block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#button Lexv2ModelsSlot#button}
  */
  readonly button?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable;
}

export function lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_url: cdktf.stringToTerraform(struct!.imageUrl),
    subtitle: cdktf.stringToTerraform(struct!.subtitle),
    title: cdktf.stringToTerraform(struct!.title),
    button: cdktf.listMapper(lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardButtonToTerraform, true)(struct!.button),
  }
}


export function lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_url: {
      value: cdktf.stringToHclTerraform(struct!.imageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subtitle: {
      value: cdktf.stringToHclTerraform(struct!.subtitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    button: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardButtonToHclTerraform, true)(struct!.button),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardButtonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUrl = this._imageUrl;
    }
    if (this._subtitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtitle = this._subtitle;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._button?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.button = this._button?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCard | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageUrl = undefined;
      this._subtitle = undefined;
      this._title = undefined;
      this._button.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageUrl = value.imageUrl;
      this._subtitle = value.subtitle;
      this._title = value.title;
      this._button.internalValue = value.button;
    }
  }

  // image_url - computed: false, optional: true, required: false
  private _imageUrl?: string; 
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  public resetImageUrl() {
    this._imageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
  }

  // subtitle - computed: false, optional: true, required: false
  private _subtitle?: string; 
  public get subtitle() {
    return this.getStringAttribute('subtitle');
  }
  public set subtitle(value: string) {
    this._subtitle = value;
  }
  public resetSubtitle() {
    this._subtitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtitleInput() {
    return this._subtitle;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // button - computed: false, optional: true, required: false
  private _button = new Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardButtonList(this, "button", false);
  public get button() {
    return this._button;
  }
  public putButton(value: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable) {
    this._button.internalValue = value;
  }
  public resetButton() {
    this._button.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonInput() {
    return this._button.internalValue;
  }
}

export class Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCard[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardOutputReference {
    return new Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
  */
  readonly value: string;
}

export function lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessageToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessageToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessageList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessageOutputReference {
    return new Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
  */
  readonly value: string;
}

export function lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessageToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessageToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessageList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessage[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessageOutputReference {
    return new Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessage {
  /**
  * custom_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#custom_payload Lexv2ModelsSlot#custom_payload}
  */
  readonly customPayload?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageCustomPayload[] | cdktf.IResolvable;
  /**
  * image_response_card block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#image_response_card Lexv2ModelsSlot#image_response_card}
  */
  readonly imageResponseCard?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCard[] | cdktf.IResolvable;
  /**
  * plain_text_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#plain_text_message Lexv2ModelsSlot#plain_text_message}
  */
  readonly plainTextMessage?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable;
  /**
  * ssml_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#ssml_message Lexv2ModelsSlot#ssml_message}
  */
  readonly ssmlMessage?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessage[] | cdktf.IResolvable;
}

export function lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_payload: cdktf.listMapper(lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageCustomPayloadToTerraform, true)(struct!.customPayload),
    image_response_card: cdktf.listMapper(lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardToTerraform, true)(struct!.imageResponseCard),
    plain_text_message: cdktf.listMapper(lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessageToTerraform, true)(struct!.plainTextMessage),
    ssml_message: cdktf.listMapper(lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessageToTerraform, true)(struct!.ssmlMessage),
  }
}


export function lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_payload: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageCustomPayloadToHclTerraform, true)(struct!.customPayload),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageCustomPayloadList",
    },
    image_response_card: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardToHclTerraform, true)(struct!.imageResponseCard),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardList",
    },
    plain_text_message: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessageToHclTerraform, true)(struct!.plainTextMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessageList",
    },
    ssml_message: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessageToHclTerraform, true)(struct!.ssmlMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customPayload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPayload = this._customPayload?.internalValue;
    }
    if (this._imageResponseCard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageResponseCard = this._imageResponseCard?.internalValue;
    }
    if (this._plainTextMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plainTextMessage = this._plainTextMessage?.internalValue;
    }
    if (this._ssmlMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssmlMessage = this._ssmlMessage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = undefined;
      this._imageResponseCard.internalValue = undefined;
      this._plainTextMessage.internalValue = undefined;
      this._ssmlMessage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = value.customPayload;
      this._imageResponseCard.internalValue = value.imageResponseCard;
      this._plainTextMessage.internalValue = value.plainTextMessage;
      this._ssmlMessage.internalValue = value.ssmlMessage;
    }
  }

  // custom_payload - computed: false, optional: true, required: false
  private _customPayload = new Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageCustomPayloadList(this, "custom_payload", false);
  public get customPayload() {
    return this._customPayload;
  }
  public putCustomPayload(value: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageCustomPayload[] | cdktf.IResolvable) {
    this._customPayload.internalValue = value;
  }
  public resetCustomPayload() {
    this._customPayload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPayloadInput() {
    return this._customPayload.internalValue;
  }

  // image_response_card - computed: false, optional: true, required: false
  private _imageResponseCard = new Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardList(this, "image_response_card", false);
  public get imageResponseCard() {
    return this._imageResponseCard;
  }
  public putImageResponseCard(value: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCard[] | cdktf.IResolvable) {
    this._imageResponseCard.internalValue = value;
  }
  public resetImageResponseCard() {
    this._imageResponseCard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageResponseCardInput() {
    return this._imageResponseCard.internalValue;
  }

  // plain_text_message - computed: false, optional: true, required: false
  private _plainTextMessage = new Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessageList(this, "plain_text_message", false);
  public get plainTextMessage() {
    return this._plainTextMessage;
  }
  public putPlainTextMessage(value: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable) {
    this._plainTextMessage.internalValue = value;
  }
  public resetPlainTextMessage() {
    this._plainTextMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainTextMessageInput() {
    return this._plainTextMessage.internalValue;
  }

  // ssml_message - computed: false, optional: true, required: false
  private _ssmlMessage = new Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessageList(this, "ssml_message", false);
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
  public putSsmlMessage(value: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessage[] | cdktf.IResolvable) {
    this._ssmlMessage.internalValue = value;
  }
  public resetSsmlMessage() {
    this._ssmlMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmlMessageInput() {
    return this._ssmlMessage.internalValue;
  }
}

export class Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessage[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageOutputReference {
    return new Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationCustomPayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
  */
  readonly value: string;
}

export function lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationCustomPayloadToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationCustomPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationCustomPayloadToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationCustomPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationCustomPayloadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationCustomPayload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationCustomPayload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationCustomPayloadList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationCustomPayload[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationCustomPayloadOutputReference {
    return new Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationCustomPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardButton {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#text Lexv2ModelsSlot#text}
  */
  readonly text: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
  */
  readonly value: string;
}

export function lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardButtonToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardButton | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardButton | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardButtonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardButton | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardButton | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
      this._value = value.value;
    }
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardButtonList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardButtonOutputReference {
    return new Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardButtonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#image_url Lexv2ModelsSlot#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#subtitle Lexv2ModelsSlot#subtitle}
  */
  readonly subtitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#title Lexv2ModelsSlot#title}
  */
  readonly title: string;
  /**
  * button block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#button Lexv2ModelsSlot#button}
  */
  readonly button?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable;
}

export function lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_url: cdktf.stringToTerraform(struct!.imageUrl),
    subtitle: cdktf.stringToTerraform(struct!.subtitle),
    title: cdktf.stringToTerraform(struct!.title),
    button: cdktf.listMapper(lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardButtonToTerraform, true)(struct!.button),
  }
}


export function lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_url: {
      value: cdktf.stringToHclTerraform(struct!.imageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subtitle: {
      value: cdktf.stringToHclTerraform(struct!.subtitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    button: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardButtonToHclTerraform, true)(struct!.button),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardButtonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUrl = this._imageUrl;
    }
    if (this._subtitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtitle = this._subtitle;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._button?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.button = this._button?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCard | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageUrl = undefined;
      this._subtitle = undefined;
      this._title = undefined;
      this._button.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageUrl = value.imageUrl;
      this._subtitle = value.subtitle;
      this._title = value.title;
      this._button.internalValue = value.button;
    }
  }

  // image_url - computed: false, optional: true, required: false
  private _imageUrl?: string; 
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  public resetImageUrl() {
    this._imageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
  }

  // subtitle - computed: false, optional: true, required: false
  private _subtitle?: string; 
  public get subtitle() {
    return this.getStringAttribute('subtitle');
  }
  public set subtitle(value: string) {
    this._subtitle = value;
  }
  public resetSubtitle() {
    this._subtitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtitleInput() {
    return this._subtitle;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // button - computed: false, optional: true, required: false
  private _button = new Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardButtonList(this, "button", false);
  public get button() {
    return this._button;
  }
  public putButton(value: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable) {
    this._button.internalValue = value;
  }
  public resetButton() {
    this._button.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonInput() {
    return this._button.internalValue;
  }
}

export class Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCard[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardOutputReference {
    return new Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
  */
  readonly value: string;
}

export function lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessageToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessageToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessageList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessageOutputReference {
    return new Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
  */
  readonly value: string;
}

export function lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessageToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessageToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessageList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessage[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessageOutputReference {
    return new Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariation {
  /**
  * custom_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#custom_payload Lexv2ModelsSlot#custom_payload}
  */
  readonly customPayload?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationCustomPayload[] | cdktf.IResolvable;
  /**
  * image_response_card block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#image_response_card Lexv2ModelsSlot#image_response_card}
  */
  readonly imageResponseCard?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCard[] | cdktf.IResolvable;
  /**
  * plain_text_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#plain_text_message Lexv2ModelsSlot#plain_text_message}
  */
  readonly plainTextMessage?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable;
  /**
  * ssml_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#ssml_message Lexv2ModelsSlot#ssml_message}
  */
  readonly ssmlMessage?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessage[] | cdktf.IResolvable;
}

export function lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_payload: cdktf.listMapper(lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationCustomPayloadToTerraform, true)(struct!.customPayload),
    image_response_card: cdktf.listMapper(lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardToTerraform, true)(struct!.imageResponseCard),
    plain_text_message: cdktf.listMapper(lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessageToTerraform, true)(struct!.plainTextMessage),
    ssml_message: cdktf.listMapper(lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessageToTerraform, true)(struct!.ssmlMessage),
  }
}


export function lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_payload: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationCustomPayloadToHclTerraform, true)(struct!.customPayload),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationCustomPayloadList",
    },
    image_response_card: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardToHclTerraform, true)(struct!.imageResponseCard),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardList",
    },
    plain_text_message: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessageToHclTerraform, true)(struct!.plainTextMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessageList",
    },
    ssml_message: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessageToHclTerraform, true)(struct!.ssmlMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customPayload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPayload = this._customPayload?.internalValue;
    }
    if (this._imageResponseCard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageResponseCard = this._imageResponseCard?.internalValue;
    }
    if (this._plainTextMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plainTextMessage = this._plainTextMessage?.internalValue;
    }
    if (this._ssmlMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssmlMessage = this._ssmlMessage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = undefined;
      this._imageResponseCard.internalValue = undefined;
      this._plainTextMessage.internalValue = undefined;
      this._ssmlMessage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = value.customPayload;
      this._imageResponseCard.internalValue = value.imageResponseCard;
      this._plainTextMessage.internalValue = value.plainTextMessage;
      this._ssmlMessage.internalValue = value.ssmlMessage;
    }
  }

  // custom_payload - computed: false, optional: true, required: false
  private _customPayload = new Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationCustomPayloadList(this, "custom_payload", false);
  public get customPayload() {
    return this._customPayload;
  }
  public putCustomPayload(value: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationCustomPayload[] | cdktf.IResolvable) {
    this._customPayload.internalValue = value;
  }
  public resetCustomPayload() {
    this._customPayload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPayloadInput() {
    return this._customPayload.internalValue;
  }

  // image_response_card - computed: false, optional: true, required: false
  private _imageResponseCard = new Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardList(this, "image_response_card", false);
  public get imageResponseCard() {
    return this._imageResponseCard;
  }
  public putImageResponseCard(value: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCard[] | cdktf.IResolvable) {
    this._imageResponseCard.internalValue = value;
  }
  public resetImageResponseCard() {
    this._imageResponseCard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageResponseCardInput() {
    return this._imageResponseCard.internalValue;
  }

  // plain_text_message - computed: false, optional: true, required: false
  private _plainTextMessage = new Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessageList(this, "plain_text_message", false);
  public get plainTextMessage() {
    return this._plainTextMessage;
  }
  public putPlainTextMessage(value: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable) {
    this._plainTextMessage.internalValue = value;
  }
  public resetPlainTextMessage() {
    this._plainTextMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainTextMessageInput() {
    return this._plainTextMessage.internalValue;
  }

  // ssml_message - computed: false, optional: true, required: false
  private _ssmlMessage = new Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessageList(this, "ssml_message", false);
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
  public putSsmlMessage(value: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessage[] | cdktf.IResolvable) {
    this._ssmlMessage.internalValue = value;
  }
  public resetSsmlMessage() {
    this._ssmlMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmlMessageInput() {
    return this._ssmlMessage.internalValue;
  }
}

export class Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariation[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationOutputReference {
    return new Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroup {
  /**
  * message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#message Lexv2ModelsSlot#message}
  */
  readonly message?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessage[] | cdktf.IResolvable;
  /**
  * variation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#variation Lexv2ModelsSlot#variation}
  */
  readonly variation?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariation[] | cdktf.IResolvable;
}

export function lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktf.listMapper(lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageToTerraform, true)(struct!.message),
    variation: cdktf.listMapper(lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationToTerraform, true)(struct!.variation),
  }
}


export function lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageToHclTerraform, true)(struct!.message),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageList",
    },
    variation: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationToHclTerraform, true)(struct!.variation),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message?.internalValue;
    }
    if (this._variation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variation = this._variation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._message.internalValue = undefined;
      this._variation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._message.internalValue = value.message;
      this._variation.internalValue = value.variation;
    }
  }

  // message - computed: false, optional: true, required: false
  private _message = new Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageList(this, "message", false);
  public get message() {
    return this._message;
  }
  public putMessage(value: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessage[] | cdktf.IResolvable) {
    this._message.internalValue = value;
  }
  public resetMessage() {
    this._message.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message.internalValue;
  }

  // variation - computed: false, optional: true, required: false
  private _variation = new Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationList(this, "variation", false);
  public get variation() {
    return this._variation;
  }
  public putVariation(value: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariation[] | cdktf.IResolvable) {
    this._variation.internalValue = value;
  }
  public resetVariation() {
    this._variation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variationInput() {
    return this._variation.internalValue;
  }
}

export class Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroup[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupOutputReference {
    return new Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#allow_audio_input Lexv2ModelsSlot#allow_audio_input}
  */
  readonly allowAudioInput: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#allow_dtmf_input Lexv2ModelsSlot#allow_dtmf_input}
  */
  readonly allowDtmfInput: boolean | cdktf.IResolvable;
}

export function lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypesToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_audio_input: cdktf.booleanToTerraform(struct!.allowAudioInput),
    allow_dtmf_input: cdktf.booleanToTerraform(struct!.allowDtmfInput),
  }
}


export function lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypesToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_audio_input: {
      value: cdktf.booleanToHclTerraform(struct!.allowAudioInput),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_dtmf_input: {
      value: cdktf.booleanToHclTerraform(struct!.allowDtmfInput),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowAudioInput !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAudioInput = this._allowAudioInput;
    }
    if (this._allowDtmfInput !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowDtmfInput = this._allowDtmfInput;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowAudioInput = undefined;
      this._allowDtmfInput = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowAudioInput = value.allowAudioInput;
      this._allowDtmfInput = value.allowDtmfInput;
    }
  }

  // allow_audio_input - computed: false, optional: false, required: true
  private _allowAudioInput?: boolean | cdktf.IResolvable; 
  public get allowAudioInput() {
    return this.getBooleanAttribute('allow_audio_input');
  }
  public set allowAudioInput(value: boolean | cdktf.IResolvable) {
    this._allowAudioInput = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAudioInputInput() {
    return this._allowAudioInput;
  }

  // allow_dtmf_input - computed: false, optional: false, required: true
  private _allowDtmfInput?: boolean | cdktf.IResolvable; 
  public get allowDtmfInput() {
    return this.getBooleanAttribute('allow_dtmf_input');
  }
  public set allowDtmfInput(value: boolean | cdktf.IResolvable) {
    this._allowDtmfInput = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDtmfInputInput() {
    return this._allowDtmfInput;
  }
}

export class Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypesList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypesOutputReference {
    return new Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#end_timeout_ms Lexv2ModelsSlot#end_timeout_ms}
  */
  readonly endTimeoutMs: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#max_length_ms Lexv2ModelsSlot#max_length_ms}
  */
  readonly maxLengthMs: number;
}

export function lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecificationToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_timeout_ms: cdktf.numberToTerraform(struct!.endTimeoutMs),
    max_length_ms: cdktf.numberToTerraform(struct!.maxLengthMs),
  }
}


export function lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecificationToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_timeout_ms: {
      value: cdktf.numberToHclTerraform(struct!.endTimeoutMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_length_ms: {
      value: cdktf.numberToHclTerraform(struct!.maxLengthMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecificationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTimeoutMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTimeoutMs = this._endTimeoutMs;
    }
    if (this._maxLengthMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLengthMs = this._maxLengthMs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endTimeoutMs = undefined;
      this._maxLengthMs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endTimeoutMs = value.endTimeoutMs;
      this._maxLengthMs = value.maxLengthMs;
    }
  }

  // end_timeout_ms - computed: false, optional: false, required: true
  private _endTimeoutMs?: number; 
  public get endTimeoutMs() {
    return this.getNumberAttribute('end_timeout_ms');
  }
  public set endTimeoutMs(value: number) {
    this._endTimeoutMs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeoutMsInput() {
    return this._endTimeoutMs;
  }

  // max_length_ms - computed: false, optional: false, required: true
  private _maxLengthMs?: number; 
  public get maxLengthMs() {
    return this.getNumberAttribute('max_length_ms');
  }
  public set maxLengthMs(value: number) {
    this._maxLengthMs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthMsInput() {
    return this._maxLengthMs;
  }
}

export class Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecificationList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecification[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecificationOutputReference {
    return new Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#deletion_character Lexv2ModelsSlot#deletion_character}
  */
  readonly deletionCharacter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#end_character Lexv2ModelsSlot#end_character}
  */
  readonly endCharacter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#end_timeout_ms Lexv2ModelsSlot#end_timeout_ms}
  */
  readonly endTimeoutMs: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#max_length Lexv2ModelsSlot#max_length}
  */
  readonly maxLength: number;
}

export function lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecificationToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deletion_character: cdktf.stringToTerraform(struct!.deletionCharacter),
    end_character: cdktf.stringToTerraform(struct!.endCharacter),
    end_timeout_ms: cdktf.numberToTerraform(struct!.endTimeoutMs),
    max_length: cdktf.numberToTerraform(struct!.maxLength),
  }
}


export function lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecificationToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deletion_character: {
      value: cdktf.stringToHclTerraform(struct!.deletionCharacter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_character: {
      value: cdktf.stringToHclTerraform(struct!.endCharacter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_timeout_ms: {
      value: cdktf.numberToHclTerraform(struct!.endTimeoutMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_length: {
      value: cdktf.numberToHclTerraform(struct!.maxLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecificationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deletionCharacter !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletionCharacter = this._deletionCharacter;
    }
    if (this._endCharacter !== undefined) {
      hasAnyValues = true;
      internalValueResult.endCharacter = this._endCharacter;
    }
    if (this._endTimeoutMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTimeoutMs = this._endTimeoutMs;
    }
    if (this._maxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLength = this._maxLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deletionCharacter = undefined;
      this._endCharacter = undefined;
      this._endTimeoutMs = undefined;
      this._maxLength = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deletionCharacter = value.deletionCharacter;
      this._endCharacter = value.endCharacter;
      this._endTimeoutMs = value.endTimeoutMs;
      this._maxLength = value.maxLength;
    }
  }

  // deletion_character - computed: false, optional: false, required: true
  private _deletionCharacter?: string; 
  public get deletionCharacter() {
    return this.getStringAttribute('deletion_character');
  }
  public set deletionCharacter(value: string) {
    this._deletionCharacter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionCharacterInput() {
    return this._deletionCharacter;
  }

  // end_character - computed: false, optional: false, required: true
  private _endCharacter?: string; 
  public get endCharacter() {
    return this.getStringAttribute('end_character');
  }
  public set endCharacter(value: string) {
    this._endCharacter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endCharacterInput() {
    return this._endCharacter;
  }

  // end_timeout_ms - computed: false, optional: false, required: true
  private _endTimeoutMs?: number; 
  public get endTimeoutMs() {
    return this.getNumberAttribute('end_timeout_ms');
  }
  public set endTimeoutMs(value: number) {
    this._endTimeoutMs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeoutMsInput() {
    return this._endTimeoutMs;
  }

  // max_length - computed: false, optional: false, required: true
  private _maxLength?: number; 
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }
  public set maxLength(value: number) {
    this._maxLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
  }
}

export class Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecificationList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecification[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecificationOutputReference {
    return new Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#start_timeout_ms Lexv2ModelsSlot#start_timeout_ms}
  */
  readonly startTimeoutMs: number;
  /**
  * audio_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#audio_specification Lexv2ModelsSlot#audio_specification}
  */
  readonly audioSpecification?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecification[] | cdktf.IResolvable;
  /**
  * dtmf_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#dtmf_specification Lexv2ModelsSlot#dtmf_specification}
  */
  readonly dtmfSpecification?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecification[] | cdktf.IResolvable;
}

export function lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    start_timeout_ms: cdktf.numberToTerraform(struct!.startTimeoutMs),
    audio_specification: cdktf.listMapper(lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecificationToTerraform, true)(struct!.audioSpecification),
    dtmf_specification: cdktf.listMapper(lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecificationToTerraform, true)(struct!.dtmfSpecification),
  }
}


export function lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    start_timeout_ms: {
      value: cdktf.numberToHclTerraform(struct!.startTimeoutMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    audio_specification: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecificationToHclTerraform, true)(struct!.audioSpecification),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecificationList",
    },
    dtmf_specification: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecificationToHclTerraform, true)(struct!.dtmfSpecification),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecificationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._startTimeoutMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTimeoutMs = this._startTimeoutMs;
    }
    if (this._audioSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioSpecification = this._audioSpecification?.internalValue;
    }
    if (this._dtmfSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dtmfSpecification = this._dtmfSpecification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._startTimeoutMs = undefined;
      this._audioSpecification.internalValue = undefined;
      this._dtmfSpecification.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._startTimeoutMs = value.startTimeoutMs;
      this._audioSpecification.internalValue = value.audioSpecification;
      this._dtmfSpecification.internalValue = value.dtmfSpecification;
    }
  }

  // start_timeout_ms - computed: false, optional: false, required: true
  private _startTimeoutMs?: number; 
  public get startTimeoutMs() {
    return this.getNumberAttribute('start_timeout_ms');
  }
  public set startTimeoutMs(value: number) {
    this._startTimeoutMs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeoutMsInput() {
    return this._startTimeoutMs;
  }

  // audio_specification - computed: false, optional: true, required: false
  private _audioSpecification = new Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecificationList(this, "audio_specification", false);
  public get audioSpecification() {
    return this._audioSpecification;
  }
  public putAudioSpecification(value: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecification[] | cdktf.IResolvable) {
    this._audioSpecification.internalValue = value;
  }
  public resetAudioSpecification() {
    this._audioSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioSpecificationInput() {
    return this._audioSpecification.internalValue;
  }

  // dtmf_specification - computed: false, optional: true, required: false
  private _dtmfSpecification = new Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecificationList(this, "dtmf_specification", false);
  public get dtmfSpecification() {
    return this._dtmfSpecification;
  }
  public putDtmfSpecification(value: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecification[] | cdktf.IResolvable) {
    this._dtmfSpecification.internalValue = value;
  }
  public resetDtmfSpecification() {
    this._dtmfSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtmfSpecificationInput() {
    return this._dtmfSpecification.internalValue;
  }
}

export class Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecification[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationOutputReference {
    return new Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#start_timeout_ms Lexv2ModelsSlot#start_timeout_ms}
  */
  readonly startTimeoutMs: number;
}

export function lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecificationToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    start_timeout_ms: cdktf.numberToTerraform(struct!.startTimeoutMs),
  }
}


export function lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecificationToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    start_timeout_ms: {
      value: cdktf.numberToHclTerraform(struct!.startTimeoutMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecificationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._startTimeoutMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTimeoutMs = this._startTimeoutMs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._startTimeoutMs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._startTimeoutMs = value.startTimeoutMs;
    }
  }

  // start_timeout_ms - computed: false, optional: false, required: true
  private _startTimeoutMs?: number; 
  public get startTimeoutMs() {
    return this.getNumberAttribute('start_timeout_ms');
  }
  public set startTimeoutMs(value: number) {
    this._startTimeoutMs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeoutMsInput() {
    return this._startTimeoutMs;
  }
}

export class Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecificationList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecification[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecificationOutputReference {
    return new Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#allow_interrupt Lexv2ModelsSlot#allow_interrupt}
  */
  readonly allowInterrupt?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#map_block_key Lexv2ModelsSlot#map_block_key}
  */
  readonly mapBlockKey: string;
  /**
  * allowed_input_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#allowed_input_types Lexv2ModelsSlot#allowed_input_types}
  */
  readonly allowedInputTypes?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes[] | cdktf.IResolvable;
  /**
  * audio_and_dtmf_input_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#audio_and_dtmf_input_specification Lexv2ModelsSlot#audio_and_dtmf_input_specification}
  */
  readonly audioAndDtmfInputSpecification?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecification[] | cdktf.IResolvable;
  /**
  * text_input_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#text_input_specification Lexv2ModelsSlot#text_input_specification}
  */
  readonly textInputSpecification?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecification[] | cdktf.IResolvable;
}

export function lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_interrupt: cdktf.booleanToTerraform(struct!.allowInterrupt),
    map_block_key: cdktf.stringToTerraform(struct!.mapBlockKey),
    allowed_input_types: cdktf.listMapper(lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypesToTerraform, true)(struct!.allowedInputTypes),
    audio_and_dtmf_input_specification: cdktf.listMapper(lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationToTerraform, true)(struct!.audioAndDtmfInputSpecification),
    text_input_specification: cdktf.listMapper(lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecificationToTerraform, true)(struct!.textInputSpecification),
  }
}


export function lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_interrupt: {
      value: cdktf.booleanToHclTerraform(struct!.allowInterrupt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    map_block_key: {
      value: cdktf.stringToHclTerraform(struct!.mapBlockKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allowed_input_types: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypesToHclTerraform, true)(struct!.allowedInputTypes),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypesList",
    },
    audio_and_dtmf_input_specification: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationToHclTerraform, true)(struct!.audioAndDtmfInputSpecification),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationList",
    },
    text_input_specification: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecificationToHclTerraform, true)(struct!.textInputSpecification),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecificationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowInterrupt !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInterrupt = this._allowInterrupt;
    }
    if (this._mapBlockKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapBlockKey = this._mapBlockKey;
    }
    if (this._allowedInputTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedInputTypes = this._allowedInputTypes?.internalValue;
    }
    if (this._audioAndDtmfInputSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioAndDtmfInputSpecification = this._audioAndDtmfInputSpecification?.internalValue;
    }
    if (this._textInputSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textInputSpecification = this._textInputSpecification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowInterrupt = undefined;
      this._mapBlockKey = undefined;
      this._allowedInputTypes.internalValue = undefined;
      this._audioAndDtmfInputSpecification.internalValue = undefined;
      this._textInputSpecification.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowInterrupt = value.allowInterrupt;
      this._mapBlockKey = value.mapBlockKey;
      this._allowedInputTypes.internalValue = value.allowedInputTypes;
      this._audioAndDtmfInputSpecification.internalValue = value.audioAndDtmfInputSpecification;
      this._textInputSpecification.internalValue = value.textInputSpecification;
    }
  }

  // allow_interrupt - computed: false, optional: true, required: false
  private _allowInterrupt?: boolean | cdktf.IResolvable; 
  public get allowInterrupt() {
    return this.getBooleanAttribute('allow_interrupt');
  }
  public set allowInterrupt(value: boolean | cdktf.IResolvable) {
    this._allowInterrupt = value;
  }
  public resetAllowInterrupt() {
    this._allowInterrupt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInterruptInput() {
    return this._allowInterrupt;
  }

  // map_block_key - computed: false, optional: false, required: true
  private _mapBlockKey?: string; 
  public get mapBlockKey() {
    return this.getStringAttribute('map_block_key');
  }
  public set mapBlockKey(value: string) {
    this._mapBlockKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mapBlockKeyInput() {
    return this._mapBlockKey;
  }

  // allowed_input_types - computed: false, optional: true, required: false
  private _allowedInputTypes = new Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypesList(this, "allowed_input_types", false);
  public get allowedInputTypes() {
    return this._allowedInputTypes;
  }
  public putAllowedInputTypes(value: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes[] | cdktf.IResolvable) {
    this._allowedInputTypes.internalValue = value;
  }
  public resetAllowedInputTypes() {
    this._allowedInputTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedInputTypesInput() {
    return this._allowedInputTypes.internalValue;
  }

  // audio_and_dtmf_input_specification - computed: false, optional: true, required: false
  private _audioAndDtmfInputSpecification = new Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationList(this, "audio_and_dtmf_input_specification", false);
  public get audioAndDtmfInputSpecification() {
    return this._audioAndDtmfInputSpecification;
  }
  public putAudioAndDtmfInputSpecification(value: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecification[] | cdktf.IResolvable) {
    this._audioAndDtmfInputSpecification.internalValue = value;
  }
  public resetAudioAndDtmfInputSpecification() {
    this._audioAndDtmfInputSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioAndDtmfInputSpecificationInput() {
    return this._audioAndDtmfInputSpecification.internalValue;
  }

  // text_input_specification - computed: false, optional: true, required: false
  private _textInputSpecification = new Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecificationList(this, "text_input_specification", false);
  public get textInputSpecification() {
    return this._textInputSpecification;
  }
  public putTextInputSpecification(value: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecification[] | cdktf.IResolvable) {
    this._textInputSpecification.internalValue = value;
  }
  public resetTextInputSpecification() {
    this._textInputSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInputSpecificationInput() {
    return this._textInputSpecification.internalValue;
  }
}

export class Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecification[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationOutputReference {
    return new Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotValueElicitationSettingPromptSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#allow_interrupt Lexv2ModelsSlot#allow_interrupt}
  */
  readonly allowInterrupt?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#max_retries Lexv2ModelsSlot#max_retries}
  */
  readonly maxRetries: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#message_selection_strategy Lexv2ModelsSlot#message_selection_strategy}
  */
  readonly messageSelectionStrategy?: string;
  /**
  * message_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#message_group Lexv2ModelsSlot#message_group}
  */
  readonly messageGroup?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroup[] | cdktf.IResolvable;
  /**
  * prompt_attempts_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#prompt_attempts_specification Lexv2ModelsSlot#prompt_attempts_specification}
  */
  readonly promptAttemptsSpecification?: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecification[] | cdktf.IResolvable;
}

export function lexv2ModelsSlotValueElicitationSettingPromptSpecificationToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingPromptSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_interrupt: cdktf.booleanToTerraform(struct!.allowInterrupt),
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
    message_selection_strategy: cdktf.stringToTerraform(struct!.messageSelectionStrategy),
    message_group: cdktf.listMapper(lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupToTerraform, true)(struct!.messageGroup),
    prompt_attempts_specification: cdktf.listMapper(lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationToTerraform, true)(struct!.promptAttemptsSpecification),
  }
}


export function lexv2ModelsSlotValueElicitationSettingPromptSpecificationToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingPromptSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_interrupt: {
      value: cdktf.booleanToHclTerraform(struct!.allowInterrupt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_retries: {
      value: cdktf.numberToHclTerraform(struct!.maxRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message_selection_strategy: {
      value: cdktf.stringToHclTerraform(struct!.messageSelectionStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_group: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupToHclTerraform, true)(struct!.messageGroup),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupList",
    },
    prompt_attempts_specification: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationToHclTerraform, true)(struct!.promptAttemptsSpecification),
      isBlock: true,
      type: "set",
      storageClassType: "Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotValueElicitationSettingPromptSpecificationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotValueElicitationSettingPromptSpecification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowInterrupt !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInterrupt = this._allowInterrupt;
    }
    if (this._maxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetries = this._maxRetries;
    }
    if (this._messageSelectionStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageSelectionStrategy = this._messageSelectionStrategy;
    }
    if (this._messageGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageGroup = this._messageGroup?.internalValue;
    }
    if (this._promptAttemptsSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.promptAttemptsSpecification = this._promptAttemptsSpecification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotValueElicitationSettingPromptSpecification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowInterrupt = undefined;
      this._maxRetries = undefined;
      this._messageSelectionStrategy = undefined;
      this._messageGroup.internalValue = undefined;
      this._promptAttemptsSpecification.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowInterrupt = value.allowInterrupt;
      this._maxRetries = value.maxRetries;
      this._messageSelectionStrategy = value.messageSelectionStrategy;
      this._messageGroup.internalValue = value.messageGroup;
      this._promptAttemptsSpecification.internalValue = value.promptAttemptsSpecification;
    }
  }

  // allow_interrupt - computed: false, optional: true, required: false
  private _allowInterrupt?: boolean | cdktf.IResolvable; 
  public get allowInterrupt() {
    return this.getBooleanAttribute('allow_interrupt');
  }
  public set allowInterrupt(value: boolean | cdktf.IResolvable) {
    this._allowInterrupt = value;
  }
  public resetAllowInterrupt() {
    this._allowInterrupt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInterruptInput() {
    return this._allowInterrupt;
  }

  // max_retries - computed: false, optional: false, required: true
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // message_selection_strategy - computed: false, optional: true, required: false
  private _messageSelectionStrategy?: string; 
  public get messageSelectionStrategy() {
    return this.getStringAttribute('message_selection_strategy');
  }
  public set messageSelectionStrategy(value: string) {
    this._messageSelectionStrategy = value;
  }
  public resetMessageSelectionStrategy() {
    this._messageSelectionStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageSelectionStrategyInput() {
    return this._messageSelectionStrategy;
  }

  // message_group - computed: false, optional: true, required: false
  private _messageGroup = new Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroupList(this, "message_group", false);
  public get messageGroup() {
    return this._messageGroup;
  }
  public putMessageGroup(value: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationMessageGroup[] | cdktf.IResolvable) {
    this._messageGroup.internalValue = value;
  }
  public resetMessageGroup() {
    this._messageGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageGroupInput() {
    return this._messageGroup.internalValue;
  }

  // prompt_attempts_specification - computed: false, optional: true, required: false
  private _promptAttemptsSpecification = new Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationList(this, "prompt_attempts_specification", true);
  public get promptAttemptsSpecification() {
    return this._promptAttemptsSpecification;
  }
  public putPromptAttemptsSpecification(value: Lexv2ModelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecification[] | cdktf.IResolvable) {
    this._promptAttemptsSpecification.internalValue = value;
  }
  public resetPromptAttemptsSpecification() {
    this._promptAttemptsSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptAttemptsSpecificationInput() {
    return this._promptAttemptsSpecification.internalValue;
  }
}

export class Lexv2ModelsSlotValueElicitationSettingPromptSpecificationList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotValueElicitationSettingPromptSpecification[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotValueElicitationSettingPromptSpecificationOutputReference {
    return new Lexv2ModelsSlotValueElicitationSettingPromptSpecificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotValueElicitationSettingSampleUtterance {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#utterance Lexv2ModelsSlot#utterance}
  */
  readonly utterance: string;
}

export function lexv2ModelsSlotValueElicitationSettingSampleUtteranceToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingSampleUtterance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    utterance: cdktf.stringToTerraform(struct!.utterance),
  }
}


export function lexv2ModelsSlotValueElicitationSettingSampleUtteranceToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingSampleUtterance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    utterance: {
      value: cdktf.stringToHclTerraform(struct!.utterance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotValueElicitationSettingSampleUtteranceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotValueElicitationSettingSampleUtterance | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._utterance !== undefined) {
      hasAnyValues = true;
      internalValueResult.utterance = this._utterance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotValueElicitationSettingSampleUtterance | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._utterance = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._utterance = value.utterance;
    }
  }

  // utterance - computed: false, optional: false, required: true
  private _utterance?: string; 
  public get utterance() {
    return this.getStringAttribute('utterance');
  }
  public set utterance(value: string) {
    this._utterance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get utteranceInput() {
    return this._utterance;
  }
}

export class Lexv2ModelsSlotValueElicitationSettingSampleUtteranceList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotValueElicitationSettingSampleUtterance[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotValueElicitationSettingSampleUtteranceOutputReference {
    return new Lexv2ModelsSlotValueElicitationSettingSampleUtteranceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotValueElicitationSettingSlotResolutionSetting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#slot_resolution_strategy Lexv2ModelsSlot#slot_resolution_strategy}
  */
  readonly slotResolutionStrategy: string;
}

export function lexv2ModelsSlotValueElicitationSettingSlotResolutionSettingToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingSlotResolutionSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    slot_resolution_strategy: cdktf.stringToTerraform(struct!.slotResolutionStrategy),
  }
}


export function lexv2ModelsSlotValueElicitationSettingSlotResolutionSettingToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingSlotResolutionSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    slot_resolution_strategy: {
      value: cdktf.stringToHclTerraform(struct!.slotResolutionStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotValueElicitationSettingSlotResolutionSettingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotValueElicitationSettingSlotResolutionSetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._slotResolutionStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.slotResolutionStrategy = this._slotResolutionStrategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotValueElicitationSettingSlotResolutionSetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._slotResolutionStrategy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._slotResolutionStrategy = value.slotResolutionStrategy;
    }
  }

  // slot_resolution_strategy - computed: false, optional: false, required: true
  private _slotResolutionStrategy?: string; 
  public get slotResolutionStrategy() {
    return this.getStringAttribute('slot_resolution_strategy');
  }
  public set slotResolutionStrategy(value: string) {
    this._slotResolutionStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slotResolutionStrategyInput() {
    return this._slotResolutionStrategy;
  }
}

export class Lexv2ModelsSlotValueElicitationSettingSlotResolutionSettingList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotValueElicitationSettingSlotResolutionSetting[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotValueElicitationSettingSlotResolutionSettingOutputReference {
    return new Lexv2ModelsSlotValueElicitationSettingSlotResolutionSettingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageCustomPayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
  */
  readonly value: string;
}

export function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageCustomPayloadToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageCustomPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageCustomPayloadToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageCustomPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageCustomPayloadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageCustomPayload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageCustomPayload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageCustomPayloadList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageCustomPayloadOutputReference {
    return new Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageCustomPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardButton {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#text Lexv2ModelsSlot#text}
  */
  readonly text: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
  */
  readonly value: string;
}

export function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardButtonToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardButtonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
      this._value = value.value;
    }
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardButtonList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardButtonOutputReference {
    return new Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardButtonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#image_url Lexv2ModelsSlot#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#subtitle Lexv2ModelsSlot#subtitle}
  */
  readonly subtitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#title Lexv2ModelsSlot#title}
  */
  readonly title: string;
  /**
  * button block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#button Lexv2ModelsSlot#button}
  */
  readonly button?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable;
}

export function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_url: cdktf.stringToTerraform(struct!.imageUrl),
    subtitle: cdktf.stringToTerraform(struct!.subtitle),
    title: cdktf.stringToTerraform(struct!.title),
    button: cdktf.listMapper(lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardButtonToTerraform, true)(struct!.button),
  }
}


export function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_url: {
      value: cdktf.stringToHclTerraform(struct!.imageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subtitle: {
      value: cdktf.stringToHclTerraform(struct!.subtitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    button: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardButtonToHclTerraform, true)(struct!.button),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardButtonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUrl = this._imageUrl;
    }
    if (this._subtitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtitle = this._subtitle;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._button?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.button = this._button?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageUrl = undefined;
      this._subtitle = undefined;
      this._title = undefined;
      this._button.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageUrl = value.imageUrl;
      this._subtitle = value.subtitle;
      this._title = value.title;
      this._button.internalValue = value.button;
    }
  }

  // image_url - computed: false, optional: true, required: false
  private _imageUrl?: string; 
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  public resetImageUrl() {
    this._imageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
  }

  // subtitle - computed: false, optional: true, required: false
  private _subtitle?: string; 
  public get subtitle() {
    return this.getStringAttribute('subtitle');
  }
  public set subtitle(value: string) {
    this._subtitle = value;
  }
  public resetSubtitle() {
    this._subtitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtitleInput() {
    return this._subtitle;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // button - computed: false, optional: true, required: false
  private _button = new Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardButtonList(this, "button", false);
  public get button() {
    return this._button;
  }
  public putButton(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable) {
    this._button.internalValue = value;
  }
  public resetButton() {
    this._button.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonInput() {
    return this._button.internalValue;
  }
}

export class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardOutputReference {
    return new Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessagePlainTextMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
  */
  readonly value: string;
}

export function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessagePlainTextMessageToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessagePlainTextMessageToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessagePlainTextMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessagePlainTextMessageList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessagePlainTextMessageOutputReference {
    return new Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessagePlainTextMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
