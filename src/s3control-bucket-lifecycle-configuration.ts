// https://www.terraform.io/docs/providers/aws/r/s3_control_bucket_lifecycle_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface S3ControlBucketLifecycleConfigurationConfig extends TerraformMetaArguments {
  readonly bucket: string;
  /** rule block */
  readonly rule: S3ControlBucketLifecycleConfigurationRule[];
}
export interface S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload {
  readonly daysAfterInitiation: number;
}
export interface S3ControlBucketLifecycleConfigurationRuleExpiration {
  readonly date?: string;
  readonly days?: number;
  readonly expiredObjectDeleteMarker?: boolean;
}
export interface S3ControlBucketLifecycleConfigurationRuleFilter {
  readonly prefix?: string;
  readonly tags?: { [key: string]: string };
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

// Resource

export class S3ControlBucketLifecycleConfiguration extends TerraformResource {

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
    return this._bucket;
  }
  public set bucket(value: string) {
    this._bucket = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // rule - computed: false, optional: false, required: true
  private _rule: S3ControlBucketLifecycleConfigurationRule[];
  public get rule() {
    return this._rule;
  }
  public set rule(value: S3ControlBucketLifecycleConfigurationRule[]) {
    this._rule = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: this._bucket,
      rule: this._rule,
    };
  }
}
