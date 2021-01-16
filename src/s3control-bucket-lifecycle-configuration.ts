// https://www.terraform.io/docs/providers/aws/r/s3_control_bucket_lifecycle_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3ControlBucketLifecycleConfigurationConfig extends cdktf.TerraformMetaArguments {
  readonly bucket: string;
  /** rule block */
  readonly rule: S3ControlBucketLifecycleConfigurationRule[];
}
export interface S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload {
  readonly daysAfterInitiation: number;
}

function s3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadToTerraform(struct?: S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    days_after_initiation: cdktf.numberToTerraform(struct!.daysAfterInitiation),
  }
}

export interface S3ControlBucketLifecycleConfigurationRuleExpiration {
  readonly date?: string;
  readonly days?: number;
  readonly expiredObjectDeleteMarker?: boolean;
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
  readonly prefix?: string;
  readonly tags?: { [key: string]: string };
}

function s3ControlBucketLifecycleConfigurationRuleFilterToTerraform(struct?: S3ControlBucketLifecycleConfigurationRuleFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.tags),
  }
}

export interface S3ControlBucketLifecycleConfigurationRule {
  readonly id: string;
  readonly status?: string;
  /** abort_incomplete_multipart_upload block */
  readonly abortIncompleteMultipartUpload?: S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload[];
  /** expiration block */
  readonly expiration?: S3ControlBucketLifecycleConfigurationRuleExpiration[];
  /** filter block */
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


// Resource

export class S3ControlBucketLifecycleConfiguration extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
