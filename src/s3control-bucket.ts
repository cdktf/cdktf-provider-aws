// https://www.terraform.io/docs/providers/aws/r/s3_control_bucket.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3ControlBucketConfig extends cdktf.TerraformMetaArguments {
  readonly bucket: string;
  readonly outpostId: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class S3ControlBucket extends cdktf.TerraformResource {

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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

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

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // outpost_id - computed: false, optional: false, required: true
  private _outpostId: string;
  public get outpostId() {
    return this.getStringAttribute('outpost_id');
  }
  public set outpostId(value: string) {
    this._outpostId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outpostIdInput() {
    return this._outpostId
  }

  // public_access_block_enabled - computed: true, optional: false, required: false
  public get publicAccessBlockEnabled() {
    return this.getBooleanAttribute('public_access_block_enabled');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      outpost_id: cdktf.stringToTerraform(this._outpostId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
