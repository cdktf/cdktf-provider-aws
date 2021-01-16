// https://www.terraform.io/docs/providers/aws/r/s3_control_bucket.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface S3ControlBucketConfig extends TerraformMetaArguments {
  readonly bucket: string;
  readonly outpostId: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class S3ControlBucket extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: S3ControlBucketConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3control_bucket',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bucket = config.bucket;
    this._outpostId = config.outpostId;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket: string;
  public get bucket() {
    return this._bucket;
  }
  public set bucket(value: string) {
    this._bucket = value;
  }

  // creation_date - computed: true, optional: false, required: true
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // outpost_id - computed: false, optional: false, required: true
  private _outpostId: string;
  public get outpostId() {
    return this._outpostId;
  }
  public set outpostId(value: string) {
    this._outpostId = value;
  }

  // public_access_block_enabled - computed: true, optional: false, required: true
  public get publicAccessBlockEnabled() {
    return this.getBooleanAttribute('public_access_block_enabled');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: this._bucket,
      outpost_id: this._outpostId,
      tags: this._tags,
    };
  }
}
