// https://www.terraform.io/docs/providers/aws/r/s3_bucket_public_access_block.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "block_public_acls": {
        "type": "bool",
        "optional": true
      },
      "block_public_policy": {
        "type": "bool",
        "optional": true
      },
      "bucket": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "ignore_public_acls": {
        "type": "bool",
        "optional": true
      },
      "restrict_public_buckets": {
        "type": "bool",
        "optional": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface S3BucketPublicAccessBlockConfig extends TerraformMetaArguments {
  readonly blockPublicAcls?: boolean;
  readonly blockPublicPolicy?: boolean;
  readonly bucket: string;
  readonly ignorePublicAcls?: boolean;
  readonly restrictPublicBuckets?: boolean;
}

// Resource

export class S3BucketPublicAccessBlock extends TerraformResource {

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
    return this._blockPublicAcls;
  }
  public set blockPublicAcls(value: boolean | undefined) {
    this._blockPublicAcls = value;
  }

  // block_public_policy - computed: false, optional: true, required: false
  private _blockPublicPolicy?: boolean;
  public get blockPublicPolicy() {
    return this._blockPublicPolicy;
  }
  public set blockPublicPolicy(value: boolean | undefined) {
    this._blockPublicPolicy = value;
  }

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

  // ignore_public_acls - computed: false, optional: true, required: false
  private _ignorePublicAcls?: boolean;
  public get ignorePublicAcls() {
    return this._ignorePublicAcls;
  }
  public set ignorePublicAcls(value: boolean | undefined) {
    this._ignorePublicAcls = value;
  }

  // restrict_public_buckets - computed: false, optional: true, required: false
  private _restrictPublicBuckets?: boolean;
  public get restrictPublicBuckets() {
    return this._restrictPublicBuckets;
  }
  public set restrictPublicBuckets(value: boolean | undefined) {
    this._restrictPublicBuckets = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      block_public_acls: this._blockPublicAcls,
      block_public_policy: this._blockPublicPolicy,
      bucket: this._bucket,
      ignore_public_acls: this._ignorePublicAcls,
      restrict_public_buckets: this._restrictPublicBuckets,
    };
  }
}
