// https://www.terraform.io/docs/providers/aws/r/s3_bucket_ownership_controls.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface S3BucketOwnershipControlsConfig extends TerraformMetaArguments {
  readonly bucket: string;
  /** rule block */
  readonly rule: S3BucketOwnershipControlsRule[];
}
export interface S3BucketOwnershipControlsRule {
  readonly objectOwnership: string;
}

// Resource

export class S3BucketOwnershipControls extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: S3BucketOwnershipControlsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3_bucket_ownership_controls',
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
  private _rule: S3BucketOwnershipControlsRule[];
  public get rule() {
    return this._rule;
  }
  public set rule(value: S3BucketOwnershipControlsRule[]) {
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
