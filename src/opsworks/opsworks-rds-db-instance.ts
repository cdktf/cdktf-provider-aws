// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS OpsWorks
*/
export interface OpsworksRdsDbInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rds_db_instance#db_password OpsworksRdsDbInstance#db_password}
  */
  readonly dbPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rds_db_instance#db_user OpsworksRdsDbInstance#db_user}
  */
  readonly dbUser: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rds_db_instance#rds_db_instance_arn OpsworksRdsDbInstance#rds_db_instance_arn}
  */
  readonly rdsDbInstanceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rds_db_instance#stack_id OpsworksRdsDbInstance#stack_id}
  */
  readonly stackId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rds_db_instance aws_opsworks_rds_db_instance}
*/
export class OpsworksRdsDbInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_opsworks_rds_db_instance";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rds_db_instance aws_opsworks_rds_db_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpsworksRdsDbInstanceConfig
  */
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
  private _dbPassword?: string; 
  public get dbPassword() {
    return this.getStringAttribute('db_password');
  }
  public set dbPassword(value: string) {
    this._dbPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbPasswordInput() {
    return this._dbPassword;
  }

  // db_user - computed: false, optional: false, required: true
  private _dbUser?: string; 
  public get dbUser() {
    return this.getStringAttribute('db_user');
  }
  public set dbUser(value: string) {
    this._dbUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbUserInput() {
    return this._dbUser;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // rds_db_instance_arn - computed: false, optional: false, required: true
  private _rdsDbInstanceArn?: string; 
  public get rdsDbInstanceArn() {
    return this.getStringAttribute('rds_db_instance_arn');
  }
  public set rdsDbInstanceArn(value: string) {
    this._rdsDbInstanceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rdsDbInstanceArnInput() {
    return this._rdsDbInstanceArn;
  }

  // stack_id - computed: false, optional: false, required: true
  private _stackId?: string; 
  public get stackId() {
    return this.getStringAttribute('stack_id');
  }
  public set stackId(value: string) {
    this._stackId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stackIdInput() {
    return this._stackId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      db_password: cdktf.stringToTerraform(this._dbPassword),
      db_user: cdktf.stringToTerraform(this._dbUser),
      rds_db_instance_arn: cdktf.stringToTerraform(this._rdsDbInstanceArn),
      stack_id: cdktf.stringToTerraform(this._stackId),
    };
  }
}
