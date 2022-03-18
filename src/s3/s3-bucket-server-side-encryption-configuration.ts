// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Simple Storage Service
*/
export interface S3BucketServerSideEncryptionConfigurationAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_server_side_encryption_configuration#bucket S3BucketServerSideEncryptionConfigurationA#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_server_side_encryption_configuration#expected_bucket_owner S3BucketServerSideEncryptionConfigurationA#expected_bucket_owner}
  */
  readonly expectedBucketOwner?: string;
  /**
  * rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_server_side_encryption_configuration#rule S3BucketServerSideEncryptionConfigurationA#rule}
  */
  readonly rule: S3BucketServerSideEncryptionConfigurationRuleA[] | cdktf.IResolvable;
}
export interface S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultA {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_server_side_encryption_configuration#kms_master_key_id S3BucketServerSideEncryptionConfigurationA#kms_master_key_id}
  */
  readonly kmsMasterKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_server_side_encryption_configuration#sse_algorithm S3BucketServerSideEncryptionConfigurationA#sse_algorithm}
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

export class S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_server_side_encryption_configuration#bucket_key_enabled S3BucketServerSideEncryptionConfigurationA#bucket_key_enabled}
  */
  readonly bucketKeyEnabled?: boolean | cdktf.IResolvable;
  /**
  * apply_server_side_encryption_by_default block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_server_side_encryption_configuration#apply_server_side_encryption_by_default S3BucketServerSideEncryptionConfigurationA#apply_server_side_encryption_by_default}
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


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_server_side_encryption_configuration aws_s3_bucket_server_side_encryption_configuration}
*/
export class S3BucketServerSideEncryptionConfigurationA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_s3_bucket_server_side_encryption_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_server_side_encryption_configuration aws_s3_bucket_server_side_encryption_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3BucketServerSideEncryptionConfigurationAConfig
  */
  public constructor(scope: Construct, id: string, config: S3BucketServerSideEncryptionConfigurationAConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3_bucket_server_side_encryption_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bucket = config.bucket;
    this._expectedBucketOwner = config.expectedBucketOwner;
    this._rule = config.rule;
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
  public get id() {
    return this.getStringAttribute('id');
  }

  // rule - computed: false, optional: false, required: true
  private _rule?: S3BucketServerSideEncryptionConfigurationRuleA[] | cdktf.IResolvable; 
  public get rule() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('rule')));
  }
  public set rule(value: S3BucketServerSideEncryptionConfigurationRuleA[] | cdktf.IResolvable) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      expected_bucket_owner: cdktf.stringToTerraform(this._expectedBucketOwner),
      rule: cdktf.listMapper(s3BucketServerSideEncryptionConfigurationRuleAToTerraform)(this._rule),
    };
  }
}
