/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_bucket_server_side_encryption_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3BucketServerSideEncryptionConfigurationAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_bucket_server_side_encryption_configuration#bucket S3BucketServerSideEncryptionConfigurationA#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_bucket_server_side_encryption_configuration#expected_bucket_owner S3BucketServerSideEncryptionConfigurationA#expected_bucket_owner}
  */
  readonly expectedBucketOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_bucket_server_side_encryption_configuration#id S3BucketServerSideEncryptionConfigurationA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_bucket_server_side_encryption_configuration#rule S3BucketServerSideEncryptionConfigurationA#rule}
  */
  readonly rule: S3BucketServerSideEncryptionConfigurationRuleA[] | cdktf.IResolvable;
}
export interface S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_bucket_server_side_encryption_configuration#kms_master_key_id S3BucketServerSideEncryptionConfigurationA#kms_master_key_id}
  */
  readonly kmsMasterKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_bucket_server_side_encryption_configuration#sse_algorithm S3BucketServerSideEncryptionConfigurationA#sse_algorithm}
  */
  readonly sseAlgorithm: string;
}

export function s3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAToTerraform(struct?: S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference | S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_master_key_id: cdktf.stringToTerraform(struct!.kmsMasterKeyId),
    sse_algorithm: cdktf.stringToTerraform(struct!.sseAlgorithm),
  }
}


export function s3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAToHclTerraform(struct?: S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference | S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_master_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsMasterKeyId),
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

export class S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsMasterKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsMasterKeyId = this._kmsMasterKeyId;
    }
    if (this._sseAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.sseAlgorithm = this._sseAlgorithm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsMasterKeyId = undefined;
      this._sseAlgorithm = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsMasterKeyId = value.kmsMasterKeyId;
      this._sseAlgorithm = value.sseAlgorithm;
    }
  }

  // kms_master_key_id - computed: false, optional: true, required: false
  private _kmsMasterKeyId?: string; 
  public get kmsMasterKeyId() {
    return this.getStringAttribute('kms_master_key_id');
  }
  public set kmsMasterKeyId(value: string) {
    this._kmsMasterKeyId = value;
  }
  public resetKmsMasterKeyId() {
    this._kmsMasterKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsMasterKeyIdInput() {
    return this._kmsMasterKeyId;
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
export interface S3BucketServerSideEncryptionConfigurationRuleA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_bucket_server_side_encryption_configuration#bucket_key_enabled S3BucketServerSideEncryptionConfigurationA#bucket_key_enabled}
  */
  readonly bucketKeyEnabled?: boolean | cdktf.IResolvable;
  /**
  * apply_server_side_encryption_by_default block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_bucket_server_side_encryption_configuration#apply_server_side_encryption_by_default S3BucketServerSideEncryptionConfigurationA#apply_server_side_encryption_by_default}
  */
  readonly applyServerSideEncryptionByDefault?: S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultA;
}

export function s3BucketServerSideEncryptionConfigurationRuleAToTerraform(struct?: S3BucketServerSideEncryptionConfigurationRuleA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_key_enabled: cdktf.booleanToTerraform(struct!.bucketKeyEnabled),
    apply_server_side_encryption_by_default: s3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAToTerraform(struct!.applyServerSideEncryptionByDefault),
  }
}


export function s3BucketServerSideEncryptionConfigurationRuleAToHclTerraform(struct?: S3BucketServerSideEncryptionConfigurationRuleA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_key_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.bucketKeyEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    apply_server_side_encryption_by_default: {
      value: s3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAToHclTerraform(struct!.applyServerSideEncryptionByDefault),
      isBlock: true,
      type: "list",
      storageClassType: "S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketServerSideEncryptionConfigurationRuleAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): S3BucketServerSideEncryptionConfigurationRuleA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketKeyEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketKeyEnabled = this._bucketKeyEnabled;
    }
    if (this._applyServerSideEncryptionByDefault?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyServerSideEncryptionByDefault = this._applyServerSideEncryptionByDefault?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketServerSideEncryptionConfigurationRuleA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketKeyEnabled = undefined;
      this._applyServerSideEncryptionByDefault.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketKeyEnabled = value.bucketKeyEnabled;
      this._applyServerSideEncryptionByDefault.internalValue = value.applyServerSideEncryptionByDefault;
    }
  }

  // bucket_key_enabled - computed: false, optional: true, required: false
  private _bucketKeyEnabled?: boolean | cdktf.IResolvable; 
  public get bucketKeyEnabled() {
    return this.getBooleanAttribute('bucket_key_enabled');
  }
  public set bucketKeyEnabled(value: boolean | cdktf.IResolvable) {
    this._bucketKeyEnabled = value;
  }
  public resetBucketKeyEnabled() {
    this._bucketKeyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketKeyEnabledInput() {
    return this._bucketKeyEnabled;
  }

  // apply_server_side_encryption_by_default - computed: false, optional: true, required: false
  private _applyServerSideEncryptionByDefault = new S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference(this, "apply_server_side_encryption_by_default");
  public get applyServerSideEncryptionByDefault() {
    return this._applyServerSideEncryptionByDefault;
  }
  public putApplyServerSideEncryptionByDefault(value: S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultA) {
    this._applyServerSideEncryptionByDefault.internalValue = value;
  }
  public resetApplyServerSideEncryptionByDefault() {
    this._applyServerSideEncryptionByDefault.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyServerSideEncryptionByDefaultInput() {
    return this._applyServerSideEncryptionByDefault.internalValue;
  }
}

export class S3BucketServerSideEncryptionConfigurationRuleAList extends cdktf.ComplexList {
  public internalValue? : S3BucketServerSideEncryptionConfigurationRuleA[] | cdktf.IResolvable

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
  public get(index: number): S3BucketServerSideEncryptionConfigurationRuleAOutputReference {
    return new S3BucketServerSideEncryptionConfigurationRuleAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_bucket_server_side_encryption_configuration aws_s3_bucket_server_side_encryption_configuration}
*/
export class S3BucketServerSideEncryptionConfigurationA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_s3_bucket_server_side_encryption_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a S3BucketServerSideEncryptionConfigurationA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the S3BucketServerSideEncryptionConfigurationA to import
  * @param importFromId The id of the existing S3BucketServerSideEncryptionConfigurationA that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_bucket_server_side_encryption_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the S3BucketServerSideEncryptionConfigurationA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_s3_bucket_server_side_encryption_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_bucket_server_side_encryption_configuration aws_s3_bucket_server_side_encryption_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3BucketServerSideEncryptionConfigurationAConfig
  */
  public constructor(scope: Construct, id: string, config: S3BucketServerSideEncryptionConfigurationAConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3_bucket_server_side_encryption_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.54.1',
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
    this._bucket = config.bucket;
    this._expectedBucketOwner = config.expectedBucketOwner;
    this._id = config.id;
    this._rule.internalValue = config.rule;
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

  // rule - computed: false, optional: false, required: true
  private _rule = new S3BucketServerSideEncryptionConfigurationRuleAList(this, "rule", true);
  public get rule() {
    return this._rule;
  }
  public putRule(value: S3BucketServerSideEncryptionConfigurationRuleA[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      expected_bucket_owner: cdktf.stringToTerraform(this._expectedBucketOwner),
      id: cdktf.stringToTerraform(this._id),
      rule: cdktf.listMapper(s3BucketServerSideEncryptionConfigurationRuleAToTerraform, true)(this._rule.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule: {
        value: cdktf.listMapperHcl(s3BucketServerSideEncryptionConfigurationRuleAToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "S3BucketServerSideEncryptionConfigurationRuleAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
