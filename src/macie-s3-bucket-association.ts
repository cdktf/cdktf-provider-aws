// https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "bucket_name": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "member_account_id": {
        "type": "string",
        "optional": true
      },
      "prefix": {
        "type": "string",
        "optional": true
      }
    },
    "block_types": {
      "classification_type": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "continuous": {
              "type": "string",
              "optional": true
            },
            "one_time": {
              "type": "string",
              "optional": true
            }
          }
        },
        "max_items": 1
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface MacieS3BucketAssociationConfig extends TerraformMetaArguments {
  readonly bucketName: string;
  readonly memberAccountId?: string;
  readonly prefix?: string;
  /** classification_type block */
  readonly classificationType?: MacieS3BucketAssociationClassificationType[];
}
export interface MacieS3BucketAssociationClassificationType {
  readonly continuous?: string;
  readonly oneTime?: string;
}

// Resource

export class MacieS3BucketAssociation extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: MacieS3BucketAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_macie_s3_bucket_association',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bucketName = config.bucketName;
    this._memberAccountId = config.memberAccountId;
    this._prefix = config.prefix;
    this._classificationType = config.classificationType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName: string;
  public get bucketName() {
    return this._bucketName;
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // member_account_id - computed: false, optional: true, required: false
  private _memberAccountId?: string;
  public get memberAccountId() {
    return this._memberAccountId;
  }
  public set memberAccountId(value: string | undefined) {
    this._memberAccountId = value;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string;
  public get prefix() {
    return this._prefix;
  }
  public set prefix(value: string | undefined) {
    this._prefix = value;
  }

  // classification_type - computed: false, optional: true, required: false
  private _classificationType?: MacieS3BucketAssociationClassificationType[];
  public get classificationType() {
    return this._classificationType;
  }
  public set classificationType(value: MacieS3BucketAssociationClassificationType[] | undefined) {
    this._classificationType = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket_name: this._bucketName,
      member_account_id: this._memberAccountId,
      prefix: this._prefix,
      classification_type: this._classificationType,
    };
  }
}
