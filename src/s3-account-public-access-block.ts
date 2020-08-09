// https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "account_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "block_public_acls": {
        "type": "bool",
        "optional": true
      },
      "block_public_policy": {
        "type": "bool",
        "optional": true
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

export interface S3AccountPublicAccessBlockConfig extends TerraformMetaArguments {
  readonly accountId?: string;
  readonly blockPublicAcls?: boolean;
  readonly blockPublicPolicy?: boolean;
  readonly ignorePublicAcls?: boolean;
  readonly restrictPublicBuckets?: boolean;
}

// Resource

export class S3AccountPublicAccessBlock extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    return this._accountId ?? this.getStringAttribute('account_id');
  }
  public set accountId(value: string | undefined) {
    this._accountId = value;
  }

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
      account_id: this._accountId,
      block_public_acls: this._blockPublicAcls,
      block_public_policy: this._blockPublicPolicy,
      ignore_public_acls: this._ignorePublicAcls,
      restrict_public_buckets: this._restrictPublicBuckets,
    };
  }
}
