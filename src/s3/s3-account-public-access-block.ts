// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Simple Storage Service
*/
export interface S3AccountPublicAccessBlockConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block.html#account_id S3AccountPublicAccessBlock#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block.html#block_public_acls S3AccountPublicAccessBlock#block_public_acls}
  */
  readonly blockPublicAcls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block.html#block_public_policy S3AccountPublicAccessBlock#block_public_policy}
  */
  readonly blockPublicPolicy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block.html#ignore_public_acls S3AccountPublicAccessBlock#ignore_public_acls}
  */
  readonly ignorePublicAcls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block.html#restrict_public_buckets S3AccountPublicAccessBlock#restrict_public_buckets}
  */
  readonly restrictPublicBuckets?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block.html aws_s3_account_public_access_block}
*/
export class S3AccountPublicAccessBlock extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_s3_account_public_access_block";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block.html aws_s3_account_public_access_block} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3AccountPublicAccessBlockConfig = {}
  */
  public constructor(scope: Construct, id: string, config: S3AccountPublicAccessBlockConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_s3_account_public_access_block',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
    this._blockPublicAcls = config.blockPublicAcls;
    this._blockPublicPolicy = config.blockPublicPolicy;
    this._ignorePublicAcls = config.ignorePublicAcls;
    this._restrictPublicBuckets = config.restrictPublicBuckets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // block_public_acls - computed: false, optional: true, required: false
  private _blockPublicAcls?: boolean | cdktf.IResolvable; 
  public get blockPublicAcls() {
    return this.getBooleanAttribute('block_public_acls') as any;
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
    return this.getBooleanAttribute('block_public_policy') as any;
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_public_acls - computed: false, optional: true, required: false
  private _ignorePublicAcls?: boolean | cdktf.IResolvable; 
  public get ignorePublicAcls() {
    return this.getBooleanAttribute('ignore_public_acls') as any;
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
    return this.getBooleanAttribute('restrict_public_buckets') as any;
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
      account_id: cdktf.stringToTerraform(this._accountId),
      block_public_acls: cdktf.booleanToTerraform(this._blockPublicAcls),
      block_public_policy: cdktf.booleanToTerraform(this._blockPublicPolicy),
      ignore_public_acls: cdktf.booleanToTerraform(this._ignorePublicAcls),
      restrict_public_buckets: cdktf.booleanToTerraform(this._restrictPublicBuckets),
    };
  }
}
