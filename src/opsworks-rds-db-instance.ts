// https://www.terraform.io/docs/providers/aws/r/opsworks_rds_db_instance.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "db_password": {
        "type": "string",
        "required": true,
        "sensitive": true
      },
      "db_user": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "rds_db_instance_arn": {
        "type": "string",
        "required": true
      },
      "stack_id": {
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

export interface OpsworksRdsDbInstanceConfig extends TerraformMetaArguments {
  readonly dbPassword: string;
  readonly dbUser: string;
  readonly rdsDbInstanceArn: string;
  readonly stackId: string;
}

// Resource

export class OpsworksRdsDbInstance extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: OpsworksRdsDbInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_opsworks_rds_db_instance',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dbPassword = config.dbPassword;
    this._dbUser = config.dbUser;
    this._rdsDbInstanceArn = config.rdsDbInstanceArn;
    this._stackId = config.stackId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // db_password - computed: false, optional: false, required: true
  private _dbPassword: string;
  public get dbPassword() {
    return this._dbPassword;
  }
  public set dbPassword(value: string) {
    this._dbPassword = value;
  }

  // db_user - computed: false, optional: false, required: true
  private _dbUser: string;
  public get dbUser() {
    return this._dbUser;
  }
  public set dbUser(value: string) {
    this._dbUser = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // rds_db_instance_arn - computed: false, optional: false, required: true
  private _rdsDbInstanceArn: string;
  public get rdsDbInstanceArn() {
    return this._rdsDbInstanceArn;
  }
  public set rdsDbInstanceArn(value: string) {
    this._rdsDbInstanceArn = value;
  }

  // stack_id - computed: false, optional: false, required: true
  private _stackId: string;
  public get stackId() {
    return this._stackId;
  }
  public set stackId(value: string) {
    this._stackId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      db_password: this._dbPassword,
      db_user: this._dbUser,
      rds_db_instance_arn: this._rdsDbInstanceArn,
      stack_id: this._stackId,
    };
  }
}
