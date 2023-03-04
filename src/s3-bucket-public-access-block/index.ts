// https://www.terraform.io/docs/providers/aws/r/s3_bucket_public_access_block
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3BucketPublicAccessBlockConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_public_access_block#block_public_acls S3BucketPublicAccessBlock#block_public_acls}
  */
  readonly blockPublicAcls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_public_access_block#block_public_policy S3BucketPublicAccessBlock#block_public_policy}
  */
  readonly blockPublicPolicy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_public_access_block#bucket S3BucketPublicAccessBlock#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_public_access_block#id S3BucketPublicAccessBlock#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_public_access_block#ignore_public_acls S3BucketPublicAccessBlock#ignore_public_acls}
  */
  readonly ignorePublicAcls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_public_access_block#restrict_public_buckets S3BucketPublicAccessBlock#restrict_public_buckets}
  */
  readonly restrictPublicBuckets?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_public_access_block aws_s3_bucket_public_access_block}
*/
export class S3BucketPublicAccessBlock extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_s3_bucket_public_access_block";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_public_access_block aws_s3_bucket_public_access_block} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3BucketPublicAccessBlockConfig
  */
  public constructor(scope: Construct, id: string, config: S3BucketPublicAccessBlockConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3_bucket_public_access_block',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blockPublicAcls = config.blockPublicAcls;
    this._blockPublicPolicy = config.blockPublicPolicy;
    this._bucket = config.bucket;
    this._id = config.id;
    this._ignorePublicAcls = config.ignorePublicAcls;
    this._restrictPublicBuckets = config.restrictPublicBuckets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // block_public_acls - computed: false, optional: true, required: false
  private _blockPublicAcls?: boolean | cdktf.IResolvable; 
  public get blockPublicAcls() {
    return this.getBooleanAttribute('block_public_acls');
  }
  public set blockPublicAcls(value: boolean | cdktf.IResolvable) {
    this._blockPublicAcls = value;
  }
  public resetBlockPublicAcls() {
    this._blockPublicAcls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockPublicAclsInput() {
    return this._blockPublicAcls;
  }

  // block_public_policy - computed: false, optional: true, required: false
  private _blockPublicPolicy?: boolean | cdktf.IResolvable; 
  public get blockPublicPolicy() {
    return this.getBooleanAttribute('block_public_policy');
  }
  public set blockPublicPolicy(value: boolean | cdktf.IResolvable) {
    this._blockPublicPolicy = value;
  }
  public resetBlockPublicPolicy() {
    this._blockPublicPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockPublicPolicyInput() {
    return this._blockPublicPolicy;
  }

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

  // ignore_public_acls - computed: false, optional: true, required: false
  private _ignorePublicAcls?: boolean | cdktf.IResolvable; 
  public get ignorePublicAcls() {
    return this.getBooleanAttribute('ignore_public_acls');
  }
  public set ignorePublicAcls(value: boolean | cdktf.IResolvable) {
    this._ignorePublicAcls = value;
  }
  public resetIgnorePublicAcls() {
    this._ignorePublicAcls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignorePublicAclsInput() {
    return this._ignorePublicAcls;
  }

  // restrict_public_buckets - computed: false, optional: true, required: false
  private _restrictPublicBuckets?: boolean | cdktf.IResolvable; 
  public get restrictPublicBuckets() {
    return this.getBooleanAttribute('restrict_public_buckets');
  }
  public set restrictPublicBuckets(value: boolean | cdktf.IResolvable) {
    this._restrictPublicBuckets = value;
  }
  public resetRestrictPublicBuckets() {
    this._restrictPublicBuckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictPublicBucketsInput() {
    return this._restrictPublicBuckets;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      block_public_acls: cdktf.booleanToTerraform(this._blockPublicAcls),
      block_public_policy: cdktf.booleanToTerraform(this._blockPublicPolicy),
      bucket: cdktf.stringToTerraform(this._bucket),
      id: cdktf.stringToTerraform(this._id),
      ignore_public_acls: cdktf.booleanToTerraform(this._ignorePublicAcls),
      restrict_public_buckets: cdktf.booleanToTerraform(this._restrictPublicBuckets),
    };
  }
}
