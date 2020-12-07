// https://www.terraform.io/docs/providers/aws/r/s3_bucket_public_access_block.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3BucketPublicAccessBlockConfig extends cdktf.TerraformMetaArguments {
  readonly blockPublicAcls?: boolean;
  readonly blockPublicPolicy?: boolean;
  readonly bucket: string;
  readonly ignorePublicAcls?: boolean;
  readonly restrictPublicBuckets?: boolean;
}

// Resource

export class S3BucketPublicAccessBlock extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: S3BucketPublicAccessBlockConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3_bucket_public_access_block',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._blockPublicAcls = config.blockPublicAcls;
    this._blockPublicPolicy = config.blockPublicPolicy;
    this._bucket = config.bucket;
    this._ignorePublicAcls = config.ignorePublicAcls;
    this._restrictPublicBuckets = config.restrictPublicBuckets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // block_public_acls - computed: false, optional: true, required: false
  private _blockPublicAcls?: boolean;
  public get blockPublicAcls() {
    return this.getBooleanAttribute('block_public_acls');
  }
  public set blockPublicAcls(value: boolean ) {
    this._blockPublicAcls = value;
  }
  public resetBlockPublicAcls() {
    this._blockPublicAcls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockPublicAclsInput() {
    return this._blockPublicAcls
  }

  // block_public_policy - computed: false, optional: true, required: false
  private _blockPublicPolicy?: boolean;
  public get blockPublicPolicy() {
    return this.getBooleanAttribute('block_public_policy');
  }
  public set blockPublicPolicy(value: boolean ) {
    this._blockPublicPolicy = value;
  }
  public resetBlockPublicPolicy() {
    this._blockPublicPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockPublicPolicyInput() {
    return this._blockPublicPolicy
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_public_acls - computed: false, optional: true, required: false
  private _ignorePublicAcls?: boolean;
  public get ignorePublicAcls() {
    return this.getBooleanAttribute('ignore_public_acls');
  }
  public set ignorePublicAcls(value: boolean ) {
    this._ignorePublicAcls = value;
  }
  public resetIgnorePublicAcls() {
    this._ignorePublicAcls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignorePublicAclsInput() {
    return this._ignorePublicAcls
  }

  // restrict_public_buckets - computed: false, optional: true, required: false
  private _restrictPublicBuckets?: boolean;
  public get restrictPublicBuckets() {
    return this.getBooleanAttribute('restrict_public_buckets');
  }
  public set restrictPublicBuckets(value: boolean ) {
    this._restrictPublicBuckets = value;
  }
  public resetRestrictPublicBuckets() {
    this._restrictPublicBuckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictPublicBucketsInput() {
    return this._restrictPublicBuckets
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      block_public_acls: cdktf.booleanToTerraform(this._blockPublicAcls),
      block_public_policy: cdktf.booleanToTerraform(this._blockPublicPolicy),
      bucket: cdktf.stringToTerraform(this._bucket),
      ignore_public_acls: cdktf.booleanToTerraform(this._ignorePublicAcls),
      restrict_public_buckets: cdktf.booleanToTerraform(this._restrictPublicBuckets),
    };
  }
}
