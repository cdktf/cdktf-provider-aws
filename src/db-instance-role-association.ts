// https://www.terraform.io/docs/providers/aws/r/db_instance_role_association.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "db_instance_identifier": {
        "type": "string",
        "required": true
      },
      "feature_name": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "role_arn": {
        "type": "string",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DbInstanceRoleAssociationConfig extends TerraformMetaArguments {
  readonly dbInstanceIdentifier: string;
  readonly featureName: string;
  readonly roleArn: string;
}

// Resource

export class DbInstanceRoleAssociation extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DbInstanceRoleAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_db_instance_role_association',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dbInstanceIdentifier = config.dbInstanceIdentifier;
    this._featureName = config.featureName;
    this._roleArn = config.roleArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // db_instance_identifier - computed: false, optional: false, required: true
  private _dbInstanceIdentifier: string;
  public get dbInstanceIdentifier() {
    return this._dbInstanceIdentifier;
  }
  public set dbInstanceIdentifier(value: string) {
    this._dbInstanceIdentifier = value;
  }

  // feature_name - computed: false, optional: false, required: true
  private _featureName: string;
  public get featureName() {
    return this._featureName;
  }
  public set featureName(value: string) {
    this._featureName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn: string;
  public get roleArn() {
    return this._roleArn;
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      db_instance_identifier: this._dbInstanceIdentifier,
      feature_name: this._featureName,
      role_arn: this._roleArn,
    };
  }
}
