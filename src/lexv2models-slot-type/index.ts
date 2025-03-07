/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Lexv2ModelsSlotTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot_type#bot_id Lexv2ModelsSlotType#bot_id}
  */
  readonly botId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot_type#bot_version Lexv2ModelsSlotType#bot_version}
  */
  readonly botVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot_type#description Lexv2ModelsSlotType#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot_type#locale_id Lexv2ModelsSlotType#locale_id}
  */
  readonly localeId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot_type#name Lexv2ModelsSlotType#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot_type#parent_slot_type_signature Lexv2ModelsSlotType#parent_slot_type_signature}
  */
  readonly parentSlotTypeSignature?: string;
  /**
  * composite_slot_type_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot_type#composite_slot_type_setting Lexv2ModelsSlotType#composite_slot_type_setting}
  */
  readonly compositeSlotTypeSetting?: Lexv2ModelsSlotTypeCompositeSlotTypeSetting[] | cdktf.IResolvable;
  /**
  * external_source_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot_type#external_source_setting Lexv2ModelsSlotType#external_source_setting}
  */
  readonly externalSourceSetting?: Lexv2ModelsSlotTypeExternalSourceSetting[] | cdktf.IResolvable;
  /**
  * slot_type_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot_type#slot_type_values Lexv2ModelsSlotType#slot_type_values}
  */
  readonly slotTypeValues?: Lexv2ModelsSlotTypeSlotTypeValues[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot_type#timeouts Lexv2ModelsSlotType#timeouts}
  */
  readonly timeouts?: Lexv2ModelsSlotTypeTimeouts;
  /**
  * value_selection_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot_type#value_selection_setting Lexv2ModelsSlotType#value_selection_setting}
  */
  readonly valueSelectionSetting?: Lexv2ModelsSlotTypeValueSelectionSetting[] | cdktf.IResolvable;
}
export interface Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot_type#name Lexv2ModelsSlotType#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot_type#slot_type_id Lexv2ModelsSlotType#slot_type_id}
  */
  readonly slotTypeId: string;
}

export function lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsToTerraform(struct?: Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    slot_type_id: cdktf.stringToTerraform(struct!.slotTypeId),
  }
}


export function lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsToHclTerraform(struct?: Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots | cdktf.IResolvable): any {
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
    slot_type_id: {
      value: cdktf.stringToHclTerraform(struct!.slotTypeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._slotTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.slotTypeId = this._slotTypeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._slotTypeId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._slotTypeId = value.slotTypeId;
    }
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
}

export class Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference {
    return new Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotTypeCompositeSlotTypeSetting {
  /**
  * sub_slots block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot_type#sub_slots Lexv2ModelsSlotType#sub_slots}
  */
  readonly subSlots?: Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots[] | cdktf.IResolvable;
}

export function lexv2ModelsSlotTypeCompositeSlotTypeSettingToTerraform(struct?: Lexv2ModelsSlotTypeCompositeSlotTypeSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sub_slots: cdktf.listMapper(lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsToTerraform, true)(struct!.subSlots),
  }
}


export function lexv2ModelsSlotTypeCompositeSlotTypeSettingToHclTerraform(struct?: Lexv2ModelsSlotTypeCompositeSlotTypeSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sub_slots: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsToHclTerraform, true)(struct!.subSlots),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotTypeCompositeSlotTypeSetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subSlots?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subSlots = this._subSlots?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotTypeCompositeSlotTypeSetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._subSlots.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._subSlots.internalValue = value.subSlots;
    }
  }

  // sub_slots - computed: false, optional: true, required: false
  private _subSlots = new Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList(this, "sub_slots", false);
  public get subSlots() {
    return this._subSlots;
  }
  public putSubSlots(value: Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots[] | cdktf.IResolvable) {
    this._subSlots.internalValue = value;
  }
  public resetSubSlots() {
    this._subSlots.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subSlotsInput() {
    return this._subSlots.internalValue;
  }
}

export class Lexv2ModelsSlotTypeCompositeSlotTypeSettingList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotTypeCompositeSlotTypeSetting[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference {
    return new Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot_type#kms_key_arn Lexv2ModelsSlotType#kms_key_arn}
  */
  readonly kmsKeyArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot_type#s3_bucket_name Lexv2ModelsSlotType#s3_bucket_name}
  */
  readonly s3BucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot_type#s3_object_key Lexv2ModelsSlotType#s3_object_key}
  */
  readonly s3ObjectKey: string;
}

export function lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceToTerraform(struct?: Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
    s3_bucket_name: cdktf.stringToTerraform(struct!.s3BucketName),
    s3_object_key: cdktf.stringToTerraform(struct!.s3ObjectKey),
  }
}


export function lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceToHclTerraform(struct?: Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_arn: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.s3BucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_object_key: {
      value: cdktf.stringToHclTerraform(struct!.s3ObjectKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    if (this._s3BucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketName = this._s3BucketName;
    }
    if (this._s3ObjectKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3ObjectKey = this._s3ObjectKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKeyArn = undefined;
      this._s3BucketName = undefined;
      this._s3ObjectKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKeyArn = value.kmsKeyArn;
      this._s3BucketName = value.s3BucketName;
      this._s3ObjectKey = value.s3ObjectKey;
    }
  }

  // kms_key_arn - computed: false, optional: false, required: true
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
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

  // s3_object_key - computed: false, optional: false, required: true
  private _s3ObjectKey?: string; 
  public get s3ObjectKey() {
    return this.getStringAttribute('s3_object_key');
  }
  public set s3ObjectKey(value: string) {
    this._s3ObjectKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ObjectKeyInput() {
    return this._s3ObjectKey;
  }
}

export class Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference {
    return new Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting {
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot_type#source Lexv2ModelsSlotType#source}
  */
  readonly source?: Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource[] | cdktf.IResolvable;
}

export function lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingToTerraform(struct?: Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: cdktf.listMapper(lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceToTerraform, true)(struct!.source),
  }
}


export function lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingToHclTerraform(struct?: Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceToHclTerraform, true)(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source.internalValue = value.source;
    }
  }

  // source - computed: false, optional: true, required: false
  private _source = new Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList(this, "source", false);
  public get source() {
    return this._source;
  }
  public putSource(value: Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource[] | cdktf.IResolvable) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}

export class Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference {
    return new Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotTypeExternalSourceSetting {
  /**
  * grammar_slot_type_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot_type#grammar_slot_type_setting Lexv2ModelsSlotType#grammar_slot_type_setting}
  */
  readonly grammarSlotTypeSetting?: Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting[] | cdktf.IResolvable;
}

export function lexv2ModelsSlotTypeExternalSourceSettingToTerraform(struct?: Lexv2ModelsSlotTypeExternalSourceSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grammar_slot_type_setting: cdktf.listMapper(lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingToTerraform, true)(struct!.grammarSlotTypeSetting),
  }
}


export function lexv2ModelsSlotTypeExternalSourceSettingToHclTerraform(struct?: Lexv2ModelsSlotTypeExternalSourceSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grammar_slot_type_setting: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingToHclTerraform, true)(struct!.grammarSlotTypeSetting),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotTypeExternalSourceSettingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotTypeExternalSourceSetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grammarSlotTypeSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grammarSlotTypeSetting = this._grammarSlotTypeSetting?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotTypeExternalSourceSetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._grammarSlotTypeSetting.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._grammarSlotTypeSetting.internalValue = value.grammarSlotTypeSetting;
    }
  }

  // grammar_slot_type_setting - computed: false, optional: true, required: false
  private _grammarSlotTypeSetting = new Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList(this, "grammar_slot_type_setting", false);
  public get grammarSlotTypeSetting() {
    return this._grammarSlotTypeSetting;
  }
  public putGrammarSlotTypeSetting(value: Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting[] | cdktf.IResolvable) {
    this._grammarSlotTypeSetting.internalValue = value;
  }
  public resetGrammarSlotTypeSetting() {
    this._grammarSlotTypeSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grammarSlotTypeSettingInput() {
    return this._grammarSlotTypeSetting.internalValue;
  }
}

export class Lexv2ModelsSlotTypeExternalSourceSettingList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotTypeExternalSourceSetting[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotTypeExternalSourceSettingOutputReference {
    return new Lexv2ModelsSlotTypeExternalSourceSettingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotTypeSlotTypeValuesSampleValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot_type#value Lexv2ModelsSlotType#value}
  */
  readonly value: string;
}

export function lexv2ModelsSlotTypeSlotTypeValuesSampleValueToTerraform(struct?: Lexv2ModelsSlotTypeSlotTypeValuesSampleValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsSlotTypeSlotTypeValuesSampleValueToHclTerraform(struct?: Lexv2ModelsSlotTypeSlotTypeValuesSampleValue | cdktf.IResolvable): any {
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

export class Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotTypeSlotTypeValuesSampleValue | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsSlotTypeSlotTypeValuesSampleValue | cdktf.IResolvable | undefined) {
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

export class Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotTypeSlotTypeValuesSampleValue[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference {
    return new Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotTypeSlotTypeValuesSynonyms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot_type#value Lexv2ModelsSlotType#value}
  */
  readonly value: string;
}

export function lexv2ModelsSlotTypeSlotTypeValuesSynonymsToTerraform(struct?: Lexv2ModelsSlotTypeSlotTypeValuesSynonyms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsSlotTypeSlotTypeValuesSynonymsToHclTerraform(struct?: Lexv2ModelsSlotTypeSlotTypeValuesSynonyms | cdktf.IResolvable): any {
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

export class Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotTypeSlotTypeValuesSynonyms | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsSlotTypeSlotTypeValuesSynonyms | cdktf.IResolvable | undefined) {
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

export class Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotTypeSlotTypeValuesSynonyms[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference {
    return new Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotTypeSlotTypeValues {
  /**
  * sample_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot_type#sample_value Lexv2ModelsSlotType#sample_value}
  */
  readonly sampleValue?: Lexv2ModelsSlotTypeSlotTypeValuesSampleValue[] | cdktf.IResolvable;
  /**
  * synonyms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot_type#synonyms Lexv2ModelsSlotType#synonyms}
  */
  readonly synonyms?: Lexv2ModelsSlotTypeSlotTypeValuesSynonyms[] | cdktf.IResolvable;
}

export function lexv2ModelsSlotTypeSlotTypeValuesToTerraform(struct?: Lexv2ModelsSlotTypeSlotTypeValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sample_value: cdktf.listMapper(lexv2ModelsSlotTypeSlotTypeValuesSampleValueToTerraform, true)(struct!.sampleValue),
    synonyms: cdktf.listMapper(lexv2ModelsSlotTypeSlotTypeValuesSynonymsToTerraform, true)(struct!.synonyms),
  }
}


export function lexv2ModelsSlotTypeSlotTypeValuesToHclTerraform(struct?: Lexv2ModelsSlotTypeSlotTypeValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sample_value: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotTypeSlotTypeValuesSampleValueToHclTerraform, true)(struct!.sampleValue),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList",
    },
    synonyms: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotTypeSlotTypeValuesSynonymsToHclTerraform, true)(struct!.synonyms),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotTypeSlotTypeValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotTypeSlotTypeValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sampleValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleValue = this._sampleValue?.internalValue;
    }
    if (this._synonyms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.synonyms = this._synonyms?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotTypeSlotTypeValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sampleValue.internalValue = undefined;
      this._synonyms.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sampleValue.internalValue = value.sampleValue;
      this._synonyms.internalValue = value.synonyms;
    }
  }

  // sample_value - computed: false, optional: true, required: false
  private _sampleValue = new Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList(this, "sample_value", false);
  public get sampleValue() {
    return this._sampleValue;
  }
  public putSampleValue(value: Lexv2ModelsSlotTypeSlotTypeValuesSampleValue[] | cdktf.IResolvable) {
    this._sampleValue.internalValue = value;
  }
  public resetSampleValue() {
    this._sampleValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleValueInput() {
    return this._sampleValue.internalValue;
  }

  // synonyms - computed: false, optional: true, required: false
  private _synonyms = new Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList(this, "synonyms", false);
  public get synonyms() {
    return this._synonyms;
  }
  public putSynonyms(value: Lexv2ModelsSlotTypeSlotTypeValuesSynonyms[] | cdktf.IResolvable) {
    this._synonyms.internalValue = value;
  }
  public resetSynonyms() {
    this._synonyms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synonymsInput() {
    return this._synonyms.internalValue;
  }
}

export class Lexv2ModelsSlotTypeSlotTypeValuesList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotTypeSlotTypeValues[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotTypeSlotTypeValuesOutputReference {
    return new Lexv2ModelsSlotTypeSlotTypeValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotTypeTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot_type#create Lexv2ModelsSlotType#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot_type#delete Lexv2ModelsSlotType#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot_type#update Lexv2ModelsSlotType#update}
  */
  readonly update?: string;
}

export function lexv2ModelsSlotTypeTimeoutsToTerraform(struct?: Lexv2ModelsSlotTypeTimeouts | cdktf.IResolvable): any {
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


export function lexv2ModelsSlotTypeTimeoutsToHclTerraform(struct?: Lexv2ModelsSlotTypeTimeouts | cdktf.IResolvable): any {
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

export class Lexv2ModelsSlotTypeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Lexv2ModelsSlotTypeTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsSlotTypeTimeouts | cdktf.IResolvable | undefined) {
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
export interface Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot_type#audio_recognition_strategy Lexv2ModelsSlotType#audio_recognition_strategy}
  */
  readonly audioRecognitionStrategy?: string;
}

export function lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingToTerraform(struct?: Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio_recognition_strategy: cdktf.stringToTerraform(struct!.audioRecognitionStrategy),
  }
}


export function lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingToHclTerraform(struct?: Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audio_recognition_strategy: {
      value: cdktf.stringToHclTerraform(struct!.audioRecognitionStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioRecognitionStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioRecognitionStrategy = this._audioRecognitionStrategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audioRecognitionStrategy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audioRecognitionStrategy = value.audioRecognitionStrategy;
    }
  }

  // audio_recognition_strategy - computed: false, optional: true, required: false
  private _audioRecognitionStrategy?: string; 
  public get audioRecognitionStrategy() {
    return this.getStringAttribute('audio_recognition_strategy');
  }
  public set audioRecognitionStrategy(value: string) {
    this._audioRecognitionStrategy = value;
  }
  public resetAudioRecognitionStrategy() {
    this._audioRecognitionStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioRecognitionStrategyInput() {
    return this._audioRecognitionStrategy;
  }
}

export class Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference {
    return new Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot_type#pattern Lexv2ModelsSlotType#pattern}
  */
  readonly pattern: string;
}

export function lexv2ModelsSlotTypeValueSelectionSettingRegexFilterToTerraform(struct?: Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function lexv2ModelsSlotTypeValueSelectionSettingRegexFilterToHclTerraform(struct?: Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pattern = value.pattern;
    }
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}

export class Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference {
    return new Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsSlotTypeValueSelectionSetting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot_type#resolution_strategy Lexv2ModelsSlotType#resolution_strategy}
  */
  readonly resolutionStrategy: string;
  /**
  * advanced_recognition_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot_type#advanced_recognition_setting Lexv2ModelsSlotType#advanced_recognition_setting}
  */
  readonly advancedRecognitionSetting?: Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting[] | cdktf.IResolvable;
  /**
  * regex_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot_type#regex_filter Lexv2ModelsSlotType#regex_filter}
  */
  readonly regexFilter?: Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter[] | cdktf.IResolvable;
}

export function lexv2ModelsSlotTypeValueSelectionSettingToTerraform(struct?: Lexv2ModelsSlotTypeValueSelectionSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resolution_strategy: cdktf.stringToTerraform(struct!.resolutionStrategy),
    advanced_recognition_setting: cdktf.listMapper(lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingToTerraform, true)(struct!.advancedRecognitionSetting),
    regex_filter: cdktf.listMapper(lexv2ModelsSlotTypeValueSelectionSettingRegexFilterToTerraform, true)(struct!.regexFilter),
  }
}


export function lexv2ModelsSlotTypeValueSelectionSettingToHclTerraform(struct?: Lexv2ModelsSlotTypeValueSelectionSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resolution_strategy: {
      value: cdktf.stringToHclTerraform(struct!.resolutionStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    advanced_recognition_setting: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingToHclTerraform, true)(struct!.advancedRecognitionSetting),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList",
    },
    regex_filter: {
      value: cdktf.listMapperHcl(lexv2ModelsSlotTypeValueSelectionSettingRegexFilterToHclTerraform, true)(struct!.regexFilter),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsSlotTypeValueSelectionSettingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Lexv2ModelsSlotTypeValueSelectionSetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resolutionStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolutionStrategy = this._resolutionStrategy;
    }
    if (this._advancedRecognitionSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedRecognitionSetting = this._advancedRecognitionSetting?.internalValue;
    }
    if (this._regexFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexFilter = this._regexFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsSlotTypeValueSelectionSetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resolutionStrategy = undefined;
      this._advancedRecognitionSetting.internalValue = undefined;
      this._regexFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resolutionStrategy = value.resolutionStrategy;
      this._advancedRecognitionSetting.internalValue = value.advancedRecognitionSetting;
      this._regexFilter.internalValue = value.regexFilter;
    }
  }

  // resolution_strategy - computed: false, optional: false, required: true
  private _resolutionStrategy?: string; 
  public get resolutionStrategy() {
    return this.getStringAttribute('resolution_strategy');
  }
  public set resolutionStrategy(value: string) {
    this._resolutionStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resolutionStrategyInput() {
    return this._resolutionStrategy;
  }

  // advanced_recognition_setting - computed: false, optional: true, required: false
  private _advancedRecognitionSetting = new Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList(this, "advanced_recognition_setting", false);
  public get advancedRecognitionSetting() {
    return this._advancedRecognitionSetting;
  }
  public putAdvancedRecognitionSetting(value: Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting[] | cdktf.IResolvable) {
    this._advancedRecognitionSetting.internalValue = value;
  }
  public resetAdvancedRecognitionSetting() {
    this._advancedRecognitionSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedRecognitionSettingInput() {
    return this._advancedRecognitionSetting.internalValue;
  }

  // regex_filter - computed: false, optional: true, required: false
  private _regexFilter = new Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList(this, "regex_filter", false);
  public get regexFilter() {
    return this._regexFilter;
  }
  public putRegexFilter(value: Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter[] | cdktf.IResolvable) {
    this._regexFilter.internalValue = value;
  }
  public resetRegexFilter() {
    this._regexFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexFilterInput() {
    return this._regexFilter.internalValue;
  }
}

export class Lexv2ModelsSlotTypeValueSelectionSettingList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsSlotTypeValueSelectionSetting[] | cdktf.IResolvable

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
  public get(index: number): Lexv2ModelsSlotTypeValueSelectionSettingOutputReference {
    return new Lexv2ModelsSlotTypeValueSelectionSettingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot_type aws_lexv2models_slot_type}
*/
export class Lexv2ModelsSlotType extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lexv2models_slot_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Lexv2ModelsSlotType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Lexv2ModelsSlotType to import
  * @param importFromId The id of the existing Lexv2ModelsSlotType that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Lexv2ModelsSlotType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_lexv2models_slot_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/lexv2models_slot_type aws_lexv2models_slot_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Lexv2ModelsSlotTypeConfig
  */
  public constructor(scope: Construct, id: string, config: Lexv2ModelsSlotTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lexv2models_slot_type',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.90.0',
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
    this._botId = config.botId;
    this._botVersion = config.botVersion;
    this._description = config.description;
    this._localeId = config.localeId;
    this._name = config.name;
    this._parentSlotTypeSignature = config.parentSlotTypeSignature;
    this._compositeSlotTypeSetting.internalValue = config.compositeSlotTypeSetting;
    this._externalSourceSetting.internalValue = config.externalSourceSetting;
    this._slotTypeValues.internalValue = config.slotTypeValues;
    this._timeouts.internalValue = config.timeouts;
    this._valueSelectionSetting.internalValue = config.valueSelectionSetting;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bot_id - computed: false, optional: false, required: true
  private _botId?: string; 
  public get botId() {
    return this.getStringAttribute('bot_id');
  }
  public set botId(value: string) {
    this._botId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get botIdInput() {
    return this._botId;
  }

  // bot_version - computed: false, optional: false, required: true
  private _botVersion?: string; 
  public get botVersion() {
    return this.getStringAttribute('bot_version');
  }
  public set botVersion(value: string) {
    this._botVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get botVersionInput() {
    return this._botVersion;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // locale_id - computed: false, optional: false, required: true
  private _localeId?: string; 
  public get localeId() {
    return this.getStringAttribute('locale_id');
  }
  public set localeId(value: string) {
    this._localeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localeIdInput() {
    return this._localeId;
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

  // parent_slot_type_signature - computed: false, optional: true, required: false
  private _parentSlotTypeSignature?: string; 
  public get parentSlotTypeSignature() {
    return this.getStringAttribute('parent_slot_type_signature');
  }
  public set parentSlotTypeSignature(value: string) {
    this._parentSlotTypeSignature = value;
  }
  public resetParentSlotTypeSignature() {
    this._parentSlotTypeSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentSlotTypeSignatureInput() {
    return this._parentSlotTypeSignature;
  }

  // slot_type_id - computed: true, optional: false, required: false
  public get slotTypeId() {
    return this.getStringAttribute('slot_type_id');
  }

  // composite_slot_type_setting - computed: false, optional: true, required: false
  private _compositeSlotTypeSetting = new Lexv2ModelsSlotTypeCompositeSlotTypeSettingList(this, "composite_slot_type_setting", false);
  public get compositeSlotTypeSetting() {
    return this._compositeSlotTypeSetting;
  }
  public putCompositeSlotTypeSetting(value: Lexv2ModelsSlotTypeCompositeSlotTypeSetting[] | cdktf.IResolvable) {
    this._compositeSlotTypeSetting.internalValue = value;
  }
  public resetCompositeSlotTypeSetting() {
    this._compositeSlotTypeSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compositeSlotTypeSettingInput() {
    return this._compositeSlotTypeSetting.internalValue;
  }

  // external_source_setting - computed: false, optional: true, required: false
  private _externalSourceSetting = new Lexv2ModelsSlotTypeExternalSourceSettingList(this, "external_source_setting", false);
  public get externalSourceSetting() {
    return this._externalSourceSetting;
  }
  public putExternalSourceSetting(value: Lexv2ModelsSlotTypeExternalSourceSetting[] | cdktf.IResolvable) {
    this._externalSourceSetting.internalValue = value;
  }
  public resetExternalSourceSetting() {
    this._externalSourceSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSourceSettingInput() {
    return this._externalSourceSetting.internalValue;
  }

  // slot_type_values - computed: false, optional: true, required: false
  private _slotTypeValues = new Lexv2ModelsSlotTypeSlotTypeValuesList(this, "slot_type_values", false);
  public get slotTypeValues() {
    return this._slotTypeValues;
  }
  public putSlotTypeValues(value: Lexv2ModelsSlotTypeSlotTypeValues[] | cdktf.IResolvable) {
    this._slotTypeValues.internalValue = value;
  }
  public resetSlotTypeValues() {
    this._slotTypeValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotTypeValuesInput() {
    return this._slotTypeValues.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new Lexv2ModelsSlotTypeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: Lexv2ModelsSlotTypeTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // value_selection_setting - computed: false, optional: true, required: false
  private _valueSelectionSetting = new Lexv2ModelsSlotTypeValueSelectionSettingList(this, "value_selection_setting", false);
  public get valueSelectionSetting() {
    return this._valueSelectionSetting;
  }
  public putValueSelectionSetting(value: Lexv2ModelsSlotTypeValueSelectionSetting[] | cdktf.IResolvable) {
    this._valueSelectionSetting.internalValue = value;
  }
  public resetValueSelectionSetting() {
    this._valueSelectionSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueSelectionSettingInput() {
    return this._valueSelectionSetting.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bot_id: cdktf.stringToTerraform(this._botId),
      bot_version: cdktf.stringToTerraform(this._botVersion),
      description: cdktf.stringToTerraform(this._description),
      locale_id: cdktf.stringToTerraform(this._localeId),
      name: cdktf.stringToTerraform(this._name),
      parent_slot_type_signature: cdktf.stringToTerraform(this._parentSlotTypeSignature),
      composite_slot_type_setting: cdktf.listMapper(lexv2ModelsSlotTypeCompositeSlotTypeSettingToTerraform, true)(this._compositeSlotTypeSetting.internalValue),
      external_source_setting: cdktf.listMapper(lexv2ModelsSlotTypeExternalSourceSettingToTerraform, true)(this._externalSourceSetting.internalValue),
      slot_type_values: cdktf.listMapper(lexv2ModelsSlotTypeSlotTypeValuesToTerraform, true)(this._slotTypeValues.internalValue),
      timeouts: lexv2ModelsSlotTypeTimeoutsToTerraform(this._timeouts.internalValue),
      value_selection_setting: cdktf.listMapper(lexv2ModelsSlotTypeValueSelectionSettingToTerraform, true)(this._valueSelectionSetting.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bot_id: {
        value: cdktf.stringToHclTerraform(this._botId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bot_version: {
        value: cdktf.stringToHclTerraform(this._botVersion),
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
      locale_id: {
        value: cdktf.stringToHclTerraform(this._localeId),
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
      parent_slot_type_signature: {
        value: cdktf.stringToHclTerraform(this._parentSlotTypeSignature),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      composite_slot_type_setting: {
        value: cdktf.listMapperHcl(lexv2ModelsSlotTypeCompositeSlotTypeSettingToHclTerraform, true)(this._compositeSlotTypeSetting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Lexv2ModelsSlotTypeCompositeSlotTypeSettingList",
      },
      external_source_setting: {
        value: cdktf.listMapperHcl(lexv2ModelsSlotTypeExternalSourceSettingToHclTerraform, true)(this._externalSourceSetting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Lexv2ModelsSlotTypeExternalSourceSettingList",
      },
      slot_type_values: {
        value: cdktf.listMapperHcl(lexv2ModelsSlotTypeSlotTypeValuesToHclTerraform, true)(this._slotTypeValues.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Lexv2ModelsSlotTypeSlotTypeValuesList",
      },
      timeouts: {
        value: lexv2ModelsSlotTypeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Lexv2ModelsSlotTypeTimeouts",
      },
      value_selection_setting: {
        value: cdktf.listMapperHcl(lexv2ModelsSlotTypeValueSelectionSettingToHclTerraform, true)(this._valueSelectionSetting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Lexv2ModelsSlotTypeValueSelectionSettingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
