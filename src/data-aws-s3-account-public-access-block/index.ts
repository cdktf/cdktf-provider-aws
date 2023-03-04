// https://www.terraform.io/docs/providers/aws/d/s3_account_public_access_block
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsS3AccountPublicAccessBlockConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_account_public_access_block#account_id DataAwsS3AccountPublicAccessBlock#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_account_public_access_block#id DataAwsS3AccountPublicAccessBlock#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/s3_account_public_access_block aws_s3_account_public_access_block}
*/
export class DataAwsS3AccountPublicAccessBlock extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_s3_account_public_access_block";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/s3_account_public_access_block aws_s3_account_public_access_block} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsS3AccountPublicAccessBlockConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsS3AccountPublicAccessBlockConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_s3_account_public_access_block',
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
    this._accountId = config.accountId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
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

  // block_public_acls - computed: true, optional: false, required: false
  public get blockPublicAcls() {
    return this.getBooleanAttribute('block_public_acls');
  }

  // block_public_policy - computed: true, optional: false, required: false
  public get blockPublicPolicy() {
    return this.getBooleanAttribute('block_public_policy');
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

  // ignore_public_acls - computed: true, optional: false, required: false
  public get ignorePublicAcls() {
    return this.getBooleanAttribute('ignore_public_acls');
  }

  // restrict_public_buckets - computed: true, optional: false, required: false
  public get restrictPublicBuckets() {
    return this.getBooleanAttribute('restrict_public_buckets');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
