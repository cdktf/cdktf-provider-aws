// https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3ControlBucketLifecycleConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#bucket S3ControlBucketLifecycleConfiguration#bucket}
  */
  readonly bucket: string;
  /**
  * rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#rule S3ControlBucketLifecycleConfiguration#rule}
  */
  readonly rule: S3ControlBucketLifecycleConfigurationRule[];
}
export interface S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#days_after_initiation S3ControlBucketLifecycleConfiguration#days_after_initiation}
  */
  readonly daysAfterInitiation: number;
}

function s3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadToTerraform(struct?: S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    days_after_initiation: cdktf.numberToTerraform(struct!.daysAfterInitiation),
  }
}

export interface S3ControlBucketLifecycleConfigurationRuleExpiration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#date S3ControlBucketLifecycleConfiguration#date}
  */
  readonly date?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#days S3ControlBucketLifecycleConfiguration#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#expired_object_delete_marker S3ControlBucketLifecycleConfiguration#expired_object_delete_marker}
  */
  readonly expiredObjectDeleteMarker?: boolean | cdktf.IResolvable;
}

function s3ControlBucketLifecycleConfigurationRuleExpirationToTerraform(struct?: S3ControlBucketLifecycleConfigurationRuleExpiration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    date: cdktf.stringToTerraform(struct!.date),
    days: cdktf.numberToTerraform(struct!.days),
    expired_object_delete_marker: cdktf.booleanToTerraform(struct!.expiredObjectDeleteMarker),
  }
}

export interface S3ControlBucketLifecycleConfigurationRuleFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#prefix S3ControlBucketLifecycleConfiguration#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#tags S3ControlBucketLifecycleConfiguration#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
}

function s3ControlBucketLifecycleConfigurationRuleFilterToTerraform(struct?: S3ControlBucketLifecycleConfigurationRuleFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.tags),
  }
}

export interface S3ControlBucketLifecycleConfigurationRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#id S3ControlBucketLifecycleConfiguration#id}
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#status S3ControlBucketLifecycleConfiguration#status}
  */
  readonly status?: string;
  /**
  * abort_incomplete_multipart_upload block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#abort_incomplete_multipart_upload S3ControlBucketLifecycleConfiguration#abort_incomplete_multipart_upload}
  */
  readonly abortIncompleteMultipartUpload?: S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload[];
  /**
  * expiration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#expiration S3ControlBucketLifecycleConfiguration#expiration}
  */
  readonly expiration?: S3ControlBucketLifecycleConfigurationRuleExpiration[];
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#filter S3ControlBucketLifecycleConfiguration#filter}
  */
  readonly filter?: S3ControlBucketLifecycleConfigurationRuleFilter[];
}

function s3ControlBucketLifecycleConfigurationRuleToTerraform(struct?: S3ControlBucketLifecycleConfigurationRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    status: cdktf.stringToTerraform(struct!.status),
    abort_incomplete_multipart_upload: cdktf.listMapper(s3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadToTerraform)(struct!.abortIncompleteMultipartUpload),
    expiration: cdktf.listMapper(s3ControlBucketLifecycleConfigurationRuleExpirationToTerraform)(struct!.expiration),
    filter: cdktf.listMapper(s3ControlBucketLifecycleConfigurationRuleFilterToTerraform)(struct!.filter),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html aws_s3control_bucket_lifecycle_configuration}
*/
export class S3ControlBucketLifecycleConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_s3control_bucket_lifecycle_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html aws_s3control_bucket_lifecycle_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3ControlBucketLifecycleConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: S3ControlBucketLifecycleConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3control_bucket_lifecycle_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bucket = config.bucket;
    this._rule = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: false, required: true
  private _bucket: string;
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // rule - computed: false, optional: false, required: true
  private _rule: S3ControlBucketLifecycleConfigurationRule[];
  public get rule() {
    return this.interpolationForAttribute('rule') as any;
  }
  public set rule(value: S3ControlBucketLifecycleConfigurationRule[]) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      rule: cdktf.listMapper(s3ControlBucketLifecycleConfigurationRuleToTerraform)(this._rule),
    };
  }
}
