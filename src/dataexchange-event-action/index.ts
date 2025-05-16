/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/dataexchange_event_action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataexchangeEventActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/dataexchange_event_action#action DataexchangeEventAction#action}
  */
  readonly action?: DataexchangeEventActionAction[] | cdktf.IResolvable;
  /**
  * event block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/dataexchange_event_action#event DataexchangeEventAction#event}
  */
  readonly event?: DataexchangeEventActionEvent[] | cdktf.IResolvable;
}
export interface DataexchangeEventActionActionExportRevisionToS3Encryption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/dataexchange_event_action#kms_key_arn DataexchangeEventAction#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/dataexchange_event_action#type DataexchangeEventAction#type}
  */
  readonly type?: string;
}

export function dataexchangeEventActionActionExportRevisionToS3EncryptionToTerraform(struct?: DataexchangeEventActionActionExportRevisionToS3Encryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataexchangeEventActionActionExportRevisionToS3EncryptionToHclTerraform(struct?: DataexchangeEventActionActionExportRevisionToS3Encryption | cdktf.IResolvable): any {
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

export class DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataexchangeEventActionActionExportRevisionToS3Encryption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataexchangeEventActionActionExportRevisionToS3Encryption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKeyArn = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKeyArn = value.kmsKeyArn;
      this._type = value.type;
    }
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
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

export class DataexchangeEventActionActionExportRevisionToS3EncryptionList extends cdktf.ComplexList {
  public internalValue? : DataexchangeEventActionActionExportRevisionToS3Encryption[] | cdktf.IResolvable

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
  public get(index: number): DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference {
    return new DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataexchangeEventActionActionExportRevisionToS3RevisionDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/dataexchange_event_action#bucket DataexchangeEventAction#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/dataexchange_event_action#key_pattern DataexchangeEventAction#key_pattern}
  */
  readonly keyPattern?: string;
}

export function dataexchangeEventActionActionExportRevisionToS3RevisionDestinationToTerraform(struct?: DataexchangeEventActionActionExportRevisionToS3RevisionDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    key_pattern: cdktf.stringToTerraform(struct!.keyPattern),
  }
}


export function dataexchangeEventActionActionExportRevisionToS3RevisionDestinationToHclTerraform(struct?: DataexchangeEventActionActionExportRevisionToS3RevisionDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_pattern: {
      value: cdktf.stringToHclTerraform(struct!.keyPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataexchangeEventActionActionExportRevisionToS3RevisionDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._keyPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPattern = this._keyPattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataexchangeEventActionActionExportRevisionToS3RevisionDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._keyPattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._keyPattern = value.keyPattern;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // key_pattern - computed: true, optional: true, required: false
  private _keyPattern?: string; 
  public get keyPattern() {
    return this.getStringAttribute('key_pattern');
  }
  public set keyPattern(value: string) {
    this._keyPattern = value;
  }
  public resetKeyPattern() {
    this._keyPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPatternInput() {
    return this._keyPattern;
  }
}

export class DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList extends cdktf.ComplexList {
  public internalValue? : DataexchangeEventActionActionExportRevisionToS3RevisionDestination[] | cdktf.IResolvable

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
  public get(index: number): DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference {
    return new DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataexchangeEventActionActionExportRevisionToS3 {
  /**
  * encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/dataexchange_event_action#encryption DataexchangeEventAction#encryption}
  */
  readonly encryption?: DataexchangeEventActionActionExportRevisionToS3Encryption[] | cdktf.IResolvable;
  /**
  * revision_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/dataexchange_event_action#revision_destination DataexchangeEventAction#revision_destination}
  */
  readonly revisionDestination?: DataexchangeEventActionActionExportRevisionToS3RevisionDestination[] | cdktf.IResolvable;
}

export function dataexchangeEventActionActionExportRevisionToS3ToTerraform(struct?: DataexchangeEventActionActionExportRevisionToS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption: cdktf.listMapper(dataexchangeEventActionActionExportRevisionToS3EncryptionToTerraform, true)(struct!.encryption),
    revision_destination: cdktf.listMapper(dataexchangeEventActionActionExportRevisionToS3RevisionDestinationToTerraform, true)(struct!.revisionDestination),
  }
}


export function dataexchangeEventActionActionExportRevisionToS3ToHclTerraform(struct?: DataexchangeEventActionActionExportRevisionToS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encryption: {
      value: cdktf.listMapperHcl(dataexchangeEventActionActionExportRevisionToS3EncryptionToHclTerraform, true)(struct!.encryption),
      isBlock: true,
      type: "list",
      storageClassType: "DataexchangeEventActionActionExportRevisionToS3EncryptionList",
    },
    revision_destination: {
      value: cdktf.listMapperHcl(dataexchangeEventActionActionExportRevisionToS3RevisionDestinationToHclTerraform, true)(struct!.revisionDestination),
      isBlock: true,
      type: "list",
      storageClassType: "DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataexchangeEventActionActionExportRevisionToS3OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataexchangeEventActionActionExportRevisionToS3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption?.internalValue;
    }
    if (this._revisionDestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.revisionDestination = this._revisionDestination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataexchangeEventActionActionExportRevisionToS3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryption.internalValue = undefined;
      this._revisionDestination.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryption.internalValue = value.encryption;
      this._revisionDestination.internalValue = value.revisionDestination;
    }
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption = new DataexchangeEventActionActionExportRevisionToS3EncryptionList(this, "encryption", false);
  public get encryption() {
    return this._encryption;
  }
  public putEncryption(value: DataexchangeEventActionActionExportRevisionToS3Encryption[] | cdktf.IResolvable) {
    this._encryption.internalValue = value;
  }
  public resetEncryption() {
    this._encryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption.internalValue;
  }

  // revision_destination - computed: false, optional: true, required: false
  private _revisionDestination = new DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList(this, "revision_destination", false);
  public get revisionDestination() {
    return this._revisionDestination;
  }
  public putRevisionDestination(value: DataexchangeEventActionActionExportRevisionToS3RevisionDestination[] | cdktf.IResolvable) {
    this._revisionDestination.internalValue = value;
  }
  public resetRevisionDestination() {
    this._revisionDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionDestinationInput() {
    return this._revisionDestination.internalValue;
  }
}

export class DataexchangeEventActionActionExportRevisionToS3List extends cdktf.ComplexList {
  public internalValue? : DataexchangeEventActionActionExportRevisionToS3[] | cdktf.IResolvable

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
  public get(index: number): DataexchangeEventActionActionExportRevisionToS3OutputReference {
    return new DataexchangeEventActionActionExportRevisionToS3OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataexchangeEventActionAction {
  /**
  * export_revision_to_s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/dataexchange_event_action#export_revision_to_s3 DataexchangeEventAction#export_revision_to_s3}
  */
  readonly exportRevisionToS3?: DataexchangeEventActionActionExportRevisionToS3[] | cdktf.IResolvable;
}

export function dataexchangeEventActionActionToTerraform(struct?: DataexchangeEventActionAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    export_revision_to_s3: cdktf.listMapper(dataexchangeEventActionActionExportRevisionToS3ToTerraform, true)(struct!.exportRevisionToS3),
  }
}


export function dataexchangeEventActionActionToHclTerraform(struct?: DataexchangeEventActionAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    export_revision_to_s3: {
      value: cdktf.listMapperHcl(dataexchangeEventActionActionExportRevisionToS3ToHclTerraform, true)(struct!.exportRevisionToS3),
      isBlock: true,
      type: "list",
      storageClassType: "DataexchangeEventActionActionExportRevisionToS3List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataexchangeEventActionActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataexchangeEventActionAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exportRevisionToS3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportRevisionToS3 = this._exportRevisionToS3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataexchangeEventActionAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exportRevisionToS3.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exportRevisionToS3.internalValue = value.exportRevisionToS3;
    }
  }

  // export_revision_to_s3 - computed: false, optional: true, required: false
  private _exportRevisionToS3 = new DataexchangeEventActionActionExportRevisionToS3List(this, "export_revision_to_s3", false);
  public get exportRevisionToS3() {
    return this._exportRevisionToS3;
  }
  public putExportRevisionToS3(value: DataexchangeEventActionActionExportRevisionToS3[] | cdktf.IResolvable) {
    this._exportRevisionToS3.internalValue = value;
  }
  public resetExportRevisionToS3() {
    this._exportRevisionToS3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportRevisionToS3Input() {
    return this._exportRevisionToS3.internalValue;
  }
}

export class DataexchangeEventActionActionList extends cdktf.ComplexList {
  public internalValue? : DataexchangeEventActionAction[] | cdktf.IResolvable

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
  public get(index: number): DataexchangeEventActionActionOutputReference {
    return new DataexchangeEventActionActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataexchangeEventActionEventRevisionPublished {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/dataexchange_event_action#data_set_id DataexchangeEventAction#data_set_id}
  */
  readonly dataSetId: string;
}

export function dataexchangeEventActionEventRevisionPublishedToTerraform(struct?: DataexchangeEventActionEventRevisionPublished | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_set_id: cdktf.stringToTerraform(struct!.dataSetId),
  }
}


export function dataexchangeEventActionEventRevisionPublishedToHclTerraform(struct?: DataexchangeEventActionEventRevisionPublished | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_set_id: {
      value: cdktf.stringToHclTerraform(struct!.dataSetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataexchangeEventActionEventRevisionPublishedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataexchangeEventActionEventRevisionPublished | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSetId = this._dataSetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataexchangeEventActionEventRevisionPublished | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSetId = value.dataSetId;
    }
  }

  // data_set_id - computed: false, optional: false, required: true
  private _dataSetId?: string; 
  public get dataSetId() {
    return this.getStringAttribute('data_set_id');
  }
  public set dataSetId(value: string) {
    this._dataSetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetIdInput() {
    return this._dataSetId;
  }
}

export class DataexchangeEventActionEventRevisionPublishedList extends cdktf.ComplexList {
  public internalValue? : DataexchangeEventActionEventRevisionPublished[] | cdktf.IResolvable

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
  public get(index: number): DataexchangeEventActionEventRevisionPublishedOutputReference {
    return new DataexchangeEventActionEventRevisionPublishedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataexchangeEventActionEvent {
  /**
  * revision_published block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/dataexchange_event_action#revision_published DataexchangeEventAction#revision_published}
  */
  readonly revisionPublished?: DataexchangeEventActionEventRevisionPublished[] | cdktf.IResolvable;
}

export function dataexchangeEventActionEventToTerraform(struct?: DataexchangeEventActionEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    revision_published: cdktf.listMapper(dataexchangeEventActionEventRevisionPublishedToTerraform, true)(struct!.revisionPublished),
  }
}


export function dataexchangeEventActionEventToHclTerraform(struct?: DataexchangeEventActionEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    revision_published: {
      value: cdktf.listMapperHcl(dataexchangeEventActionEventRevisionPublishedToHclTerraform, true)(struct!.revisionPublished),
      isBlock: true,
      type: "list",
      storageClassType: "DataexchangeEventActionEventRevisionPublishedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataexchangeEventActionEventOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataexchangeEventActionEvent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._revisionPublished?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.revisionPublished = this._revisionPublished?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataexchangeEventActionEvent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._revisionPublished.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._revisionPublished.internalValue = value.revisionPublished;
    }
  }

  // revision_published - computed: false, optional: true, required: false
  private _revisionPublished = new DataexchangeEventActionEventRevisionPublishedList(this, "revision_published", false);
  public get revisionPublished() {
    return this._revisionPublished;
  }
  public putRevisionPublished(value: DataexchangeEventActionEventRevisionPublished[] | cdktf.IResolvable) {
    this._revisionPublished.internalValue = value;
  }
  public resetRevisionPublished() {
    this._revisionPublished.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionPublishedInput() {
    return this._revisionPublished.internalValue;
  }
}

export class DataexchangeEventActionEventList extends cdktf.ComplexList {
  public internalValue? : DataexchangeEventActionEvent[] | cdktf.IResolvable

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
  public get(index: number): DataexchangeEventActionEventOutputReference {
    return new DataexchangeEventActionEventOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/dataexchange_event_action aws_dataexchange_event_action}
*/
export class DataexchangeEventAction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_dataexchange_event_action";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataexchangeEventAction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataexchangeEventAction to import
  * @param importFromId The id of the existing DataexchangeEventAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/dataexchange_event_action#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataexchangeEventAction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_dataexchange_event_action", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/dataexchange_event_action aws_dataexchange_event_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataexchangeEventActionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataexchangeEventActionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_dataexchange_event_action',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.98.0',
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
    this._action.internalValue = config.action;
    this._event.internalValue = config.event;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // action - computed: false, optional: true, required: false
  private _action = new DataexchangeEventActionActionList(this, "action", false);
  public get action() {
    return this._action;
  }
  public putAction(value: DataexchangeEventActionAction[] | cdktf.IResolvable) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // event - computed: false, optional: true, required: false
  private _event = new DataexchangeEventActionEventList(this, "event", false);
  public get event() {
    return this._event;
  }
  public putEvent(value: DataexchangeEventActionEvent[] | cdktf.IResolvable) {
    this._event.internalValue = value;
  }
  public resetEvent() {
    this._event.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.listMapper(dataexchangeEventActionActionToTerraform, true)(this._action.internalValue),
      event: cdktf.listMapper(dataexchangeEventActionEventToTerraform, true)(this._event.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.listMapperHcl(dataexchangeEventActionActionToHclTerraform, true)(this._action.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataexchangeEventActionActionList",
      },
      event: {
        value: cdktf.listMapperHcl(dataexchangeEventActionEventToHclTerraform, true)(this._event.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataexchangeEventActionEventList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
