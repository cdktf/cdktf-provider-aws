/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/s3_bucket_metadata_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3BucketMetadataConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/s3_bucket_metadata_configuration#bucket S3BucketMetadataConfiguration#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/s3_bucket_metadata_configuration#expected_bucket_owner S3BucketMetadataConfiguration#expected_bucket_owner}
  */
  readonly expectedBucketOwner?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/s3_bucket_metadata_configuration#region S3BucketMetadataConfiguration#region}
  */
  readonly region?: string;
  /**
  * metadata_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/s3_bucket_metadata_configuration#metadata_configuration S3BucketMetadataConfiguration#metadata_configuration}
  */
  readonly metadataConfiguration?: S3BucketMetadataConfigurationMetadataConfiguration[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/s3_bucket_metadata_configuration#timeouts S3BucketMetadataConfiguration#timeouts}
  */
  readonly timeouts?: S3BucketMetadataConfigurationTimeouts;
}
export interface S3BucketMetadataConfigurationMetadataConfigurationDestination {
}

export function s3BucketMetadataConfigurationMetadataConfigurationDestinationToTerraform(struct?: S3BucketMetadataConfigurationMetadataConfigurationDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function s3BucketMetadataConfigurationMetadataConfigurationDestinationToHclTerraform(struct?: S3BucketMetadataConfigurationMetadataConfigurationDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): S3BucketMetadataConfigurationMetadataConfigurationDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketMetadataConfigurationMetadataConfigurationDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // table_bucket_arn - computed: true, optional: false, required: false
  public get tableBucketArn() {
    return this.getStringAttribute('table_bucket_arn');
  }

  // table_bucket_type - computed: true, optional: false, required: false
  public get tableBucketType() {
    return this.getStringAttribute('table_bucket_type');
  }

  // table_namespace - computed: true, optional: false, required: false
  public get tableNamespace() {
    return this.getStringAttribute('table_namespace');
  }
}

export class S3BucketMetadataConfigurationMetadataConfigurationDestinationList extends cdktf.ComplexList {

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
  public get(index: number): S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference {
    return new S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/s3_bucket_metadata_configuration#kms_key_arn S3BucketMetadataConfiguration#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/s3_bucket_metadata_configuration#sse_algorithm S3BucketMetadataConfiguration#sse_algorithm}
  */
  readonly sseAlgorithm: string;
}

export function s3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationToTerraform(struct?: S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
    sse_algorithm: cdktf.stringToTerraform(struct!.sseAlgorithm),
  }
}


export function s3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationToHclTerraform(struct?: S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfiguration | cdktf.IResolvable): any {
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
    sse_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.sseAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    if (this._sseAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.sseAlgorithm = this._sseAlgorithm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKeyArn = undefined;
      this._sseAlgorithm = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKeyArn = value.kmsKeyArn;
      this._sseAlgorithm = value.sseAlgorithm;
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

  // sse_algorithm - computed: false, optional: false, required: true
  private _sseAlgorithm?: string; 
  public get sseAlgorithm() {
    return this.getStringAttribute('sse_algorithm');
  }
  public set sseAlgorithm(value: string) {
    this._sseAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sseAlgorithmInput() {
    return this._sseAlgorithm;
  }
}

export class S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationList extends cdktf.ComplexList {
  public internalValue? : S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfiguration[] | cdktf.IResolvable

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
  public get(index: number): S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference {
    return new S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/s3_bucket_metadata_configuration#configuration_state S3BucketMetadataConfiguration#configuration_state}
  */
  readonly configurationState: string;
  /**
  * encryption_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/s3_bucket_metadata_configuration#encryption_configuration S3BucketMetadataConfiguration#encryption_configuration}
  */
  readonly encryptionConfiguration?: S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfiguration[] | cdktf.IResolvable;
}

export function s3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationToTerraform(struct?: S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration_state: cdktf.stringToTerraform(struct!.configurationState),
    encryption_configuration: cdktf.listMapper(s3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationToTerraform, true)(struct!.encryptionConfiguration),
  }
}


export function s3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationToHclTerraform(struct?: S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration_state: {
      value: cdktf.stringToHclTerraform(struct!.configurationState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_configuration: {
      value: cdktf.listMapperHcl(s3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationToHclTerraform, true)(struct!.encryptionConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configurationState !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationState = this._configurationState;
    }
    if (this._encryptionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionConfiguration = this._encryptionConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configurationState = undefined;
      this._encryptionConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configurationState = value.configurationState;
      this._encryptionConfiguration.internalValue = value.encryptionConfiguration;
    }
  }

  // configuration_state - computed: false, optional: false, required: true
  private _configurationState?: string; 
  public get configurationState() {
    return this.getStringAttribute('configuration_state');
  }
  public set configurationState(value: string) {
    this._configurationState = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationStateInput() {
    return this._configurationState;
  }

  // table_arn - computed: true, optional: false, required: false
  public get tableArn() {
    return this.getStringAttribute('table_arn');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }

  // encryption_configuration - computed: false, optional: true, required: false
  private _encryptionConfiguration = new S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationList(this, "encryption_configuration", false);
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }
  public putEncryptionConfiguration(value: S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfiguration[] | cdktf.IResolvable) {
    this._encryptionConfiguration.internalValue = value;
  }
  public resetEncryptionConfiguration() {
    this._encryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration.internalValue;
  }
}

export class S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationList extends cdktf.ComplexList {
  public internalValue? : S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfiguration[] | cdktf.IResolvable

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
  public get(index: number): S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference {
    return new S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/s3_bucket_metadata_configuration#kms_key_arn S3BucketMetadataConfiguration#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/s3_bucket_metadata_configuration#sse_algorithm S3BucketMetadataConfiguration#sse_algorithm}
  */
  readonly sseAlgorithm: string;
}

export function s3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationToTerraform(struct?: S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
    sse_algorithm: cdktf.stringToTerraform(struct!.sseAlgorithm),
  }
}


export function s3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationToHclTerraform(struct?: S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfiguration | cdktf.IResolvable): any {
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
    sse_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.sseAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    if (this._sseAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.sseAlgorithm = this._sseAlgorithm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKeyArn = undefined;
      this._sseAlgorithm = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKeyArn = value.kmsKeyArn;
      this._sseAlgorithm = value.sseAlgorithm;
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

  // sse_algorithm - computed: false, optional: false, required: true
  private _sseAlgorithm?: string; 
  public get sseAlgorithm() {
    return this.getStringAttribute('sse_algorithm');
  }
  public set sseAlgorithm(value: string) {
    this._sseAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sseAlgorithmInput() {
    return this._sseAlgorithm;
  }
}

export class S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationList extends cdktf.ComplexList {
  public internalValue? : S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfiguration[] | cdktf.IResolvable

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
  public get(index: number): S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference {
    return new S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpiration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/s3_bucket_metadata_configuration#days S3BucketMetadataConfiguration#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/s3_bucket_metadata_configuration#expiration S3BucketMetadataConfiguration#expiration}
  */
  readonly expiration: string;
}

export function s3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationToTerraform(struct?: S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpiration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    expiration: cdktf.stringToTerraform(struct!.expiration),
  }
}


export function s3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationToHclTerraform(struct?: S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpiration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    expiration: {
      value: cdktf.stringToHclTerraform(struct!.expiration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpiration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._expiration !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiration = this._expiration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpiration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._days = undefined;
      this._expiration = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._days = value.days;
      this._expiration = value.expiration;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // expiration - computed: false, optional: false, required: true
  private _expiration?: string; 
  public get expiration() {
    return this.getStringAttribute('expiration');
  }
  public set expiration(value: string) {
    this._expiration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationInput() {
    return this._expiration;
  }
}

export class S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationList extends cdktf.ComplexList {
  public internalValue? : S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpiration[] | cdktf.IResolvable

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
  public get(index: number): S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference {
    return new S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfiguration {
  /**
  * encryption_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/s3_bucket_metadata_configuration#encryption_configuration S3BucketMetadataConfiguration#encryption_configuration}
  */
  readonly encryptionConfiguration?: S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfiguration[] | cdktf.IResolvable;
  /**
  * record_expiration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/s3_bucket_metadata_configuration#record_expiration S3BucketMetadataConfiguration#record_expiration}
  */
  readonly recordExpiration?: S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpiration[] | cdktf.IResolvable;
}

export function s3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationToTerraform(struct?: S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption_configuration: cdktf.listMapper(s3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationToTerraform, true)(struct!.encryptionConfiguration),
    record_expiration: cdktf.listMapper(s3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationToTerraform, true)(struct!.recordExpiration),
  }
}


export function s3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationToHclTerraform(struct?: S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encryption_configuration: {
      value: cdktf.listMapperHcl(s3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationToHclTerraform, true)(struct!.encryptionConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationList",
    },
    record_expiration: {
      value: cdktf.listMapperHcl(s3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationToHclTerraform, true)(struct!.recordExpiration),
      isBlock: true,
      type: "list",
      storageClassType: "S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionConfiguration = this._encryptionConfiguration?.internalValue;
    }
    if (this._recordExpiration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordExpiration = this._recordExpiration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptionConfiguration.internalValue = undefined;
      this._recordExpiration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptionConfiguration.internalValue = value.encryptionConfiguration;
      this._recordExpiration.internalValue = value.recordExpiration;
    }
  }

  // table_arn - computed: true, optional: false, required: false
  public get tableArn() {
    return this.getStringAttribute('table_arn');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }

  // encryption_configuration - computed: false, optional: true, required: false
  private _encryptionConfiguration = new S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationList(this, "encryption_configuration", false);
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }
  public putEncryptionConfiguration(value: S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfiguration[] | cdktf.IResolvable) {
    this._encryptionConfiguration.internalValue = value;
  }
  public resetEncryptionConfiguration() {
    this._encryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration.internalValue;
  }

  // record_expiration - computed: false, optional: true, required: false
  private _recordExpiration = new S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationList(this, "record_expiration", false);
  public get recordExpiration() {
    return this._recordExpiration;
  }
  public putRecordExpiration(value: S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpiration[] | cdktf.IResolvable) {
    this._recordExpiration.internalValue = value;
  }
  public resetRecordExpiration() {
    this._recordExpiration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordExpirationInput() {
    return this._recordExpiration.internalValue;
  }
}

export class S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationList extends cdktf.ComplexList {
  public internalValue? : S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfiguration[] | cdktf.IResolvable

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
  public get(index: number): S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference {
    return new S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3BucketMetadataConfigurationMetadataConfiguration {
  /**
  * inventory_table_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/s3_bucket_metadata_configuration#inventory_table_configuration S3BucketMetadataConfiguration#inventory_table_configuration}
  */
  readonly inventoryTableConfiguration?: S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfiguration[] | cdktf.IResolvable;
  /**
  * journal_table_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/s3_bucket_metadata_configuration#journal_table_configuration S3BucketMetadataConfiguration#journal_table_configuration}
  */
  readonly journalTableConfiguration?: S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfiguration[] | cdktf.IResolvable;
}

export function s3BucketMetadataConfigurationMetadataConfigurationToTerraform(struct?: S3BucketMetadataConfigurationMetadataConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inventory_table_configuration: cdktf.listMapper(s3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationToTerraform, true)(struct!.inventoryTableConfiguration),
    journal_table_configuration: cdktf.listMapper(s3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationToTerraform, true)(struct!.journalTableConfiguration),
  }
}


export function s3BucketMetadataConfigurationMetadataConfigurationToHclTerraform(struct?: S3BucketMetadataConfigurationMetadataConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inventory_table_configuration: {
      value: cdktf.listMapperHcl(s3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationToHclTerraform, true)(struct!.inventoryTableConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationList",
    },
    journal_table_configuration: {
      value: cdktf.listMapperHcl(s3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationToHclTerraform, true)(struct!.journalTableConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketMetadataConfigurationMetadataConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): S3BucketMetadataConfigurationMetadataConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inventoryTableConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inventoryTableConfiguration = this._inventoryTableConfiguration?.internalValue;
    }
    if (this._journalTableConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.journalTableConfiguration = this._journalTableConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketMetadataConfigurationMetadataConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inventoryTableConfiguration.internalValue = undefined;
      this._journalTableConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inventoryTableConfiguration.internalValue = value.inventoryTableConfiguration;
      this._journalTableConfiguration.internalValue = value.journalTableConfiguration;
    }
  }

  // destination - computed: true, optional: false, required: false
  private _destination = new S3BucketMetadataConfigurationMetadataConfigurationDestinationList(this, "destination", false);
  public get destination() {
    return this._destination;
  }

  // inventory_table_configuration - computed: false, optional: true, required: false
  private _inventoryTableConfiguration = new S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationList(this, "inventory_table_configuration", false);
  public get inventoryTableConfiguration() {
    return this._inventoryTableConfiguration;
  }
  public putInventoryTableConfiguration(value: S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfiguration[] | cdktf.IResolvable) {
    this._inventoryTableConfiguration.internalValue = value;
  }
  public resetInventoryTableConfiguration() {
    this._inventoryTableConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inventoryTableConfigurationInput() {
    return this._inventoryTableConfiguration.internalValue;
  }

  // journal_table_configuration - computed: false, optional: true, required: false
  private _journalTableConfiguration = new S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationList(this, "journal_table_configuration", false);
  public get journalTableConfiguration() {
    return this._journalTableConfiguration;
  }
  public putJournalTableConfiguration(value: S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfiguration[] | cdktf.IResolvable) {
    this._journalTableConfiguration.internalValue = value;
  }
  public resetJournalTableConfiguration() {
    this._journalTableConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get journalTableConfigurationInput() {
    return this._journalTableConfiguration.internalValue;
  }
}

export class S3BucketMetadataConfigurationMetadataConfigurationList extends cdktf.ComplexList {
  public internalValue? : S3BucketMetadataConfigurationMetadataConfiguration[] | cdktf.IResolvable

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
  public get(index: number): S3BucketMetadataConfigurationMetadataConfigurationOutputReference {
    return new S3BucketMetadataConfigurationMetadataConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3BucketMetadataConfigurationTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/s3_bucket_metadata_configuration#create S3BucketMetadataConfiguration#create}
  */
  readonly create?: string;
}

export function s3BucketMetadataConfigurationTimeoutsToTerraform(struct?: S3BucketMetadataConfigurationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function s3BucketMetadataConfigurationTimeoutsToHclTerraform(struct?: S3BucketMetadataConfigurationTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketMetadataConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketMetadataConfigurationTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketMetadataConfigurationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/s3_bucket_metadata_configuration aws_s3_bucket_metadata_configuration}
*/
export class S3BucketMetadataConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_s3_bucket_metadata_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a S3BucketMetadataConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the S3BucketMetadataConfiguration to import
  * @param importFromId The id of the existing S3BucketMetadataConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/s3_bucket_metadata_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the S3BucketMetadataConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_s3_bucket_metadata_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/s3_bucket_metadata_configuration aws_s3_bucket_metadata_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3BucketMetadataConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: S3BucketMetadataConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3_bucket_metadata_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.6.0',
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
    this._bucket = config.bucket;
    this._expectedBucketOwner = config.expectedBucketOwner;
    this._region = config.region;
    this._metadataConfiguration.internalValue = config.metadataConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // expected_bucket_owner - computed: false, optional: true, required: false
  private _expectedBucketOwner?: string; 
  public get expectedBucketOwner() {
    return this.getStringAttribute('expected_bucket_owner');
  }
  public set expectedBucketOwner(value: string) {
    this._expectedBucketOwner = value;
  }
  public resetExpectedBucketOwner() {
    this._expectedBucketOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedBucketOwnerInput() {
    return this._expectedBucketOwner;
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

  // metadata_configuration - computed: false, optional: true, required: false
  private _metadataConfiguration = new S3BucketMetadataConfigurationMetadataConfigurationList(this, "metadata_configuration", false);
  public get metadataConfiguration() {
    return this._metadataConfiguration;
  }
  public putMetadataConfiguration(value: S3BucketMetadataConfigurationMetadataConfiguration[] | cdktf.IResolvable) {
    this._metadataConfiguration.internalValue = value;
  }
  public resetMetadataConfiguration() {
    this._metadataConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataConfigurationInput() {
    return this._metadataConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new S3BucketMetadataConfigurationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: S3BucketMetadataConfigurationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      expected_bucket_owner: cdktf.stringToTerraform(this._expectedBucketOwner),
      region: cdktf.stringToTerraform(this._region),
      metadata_configuration: cdktf.listMapper(s3BucketMetadataConfigurationMetadataConfigurationToTerraform, true)(this._metadataConfiguration.internalValue),
      timeouts: s3BucketMetadataConfigurationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket: {
        value: cdktf.stringToHclTerraform(this._bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expected_bucket_owner: {
        value: cdktf.stringToHclTerraform(this._expectedBucketOwner),
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
      metadata_configuration: {
        value: cdktf.listMapperHcl(s3BucketMetadataConfigurationMetadataConfigurationToHclTerraform, true)(this._metadataConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "S3BucketMetadataConfigurationMetadataConfigurationList",
      },
      timeouts: {
        value: s3BucketMetadataConfigurationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "S3BucketMetadataConfigurationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
