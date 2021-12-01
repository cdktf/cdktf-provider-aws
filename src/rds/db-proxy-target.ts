// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Relational Database Service
*/
export interface DbProxyTargetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_target.html#db_cluster_identifier DbProxyTarget#db_cluster_identifier}
  */
  readonly dbClusterIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_target.html#db_instance_identifier DbProxyTarget#db_instance_identifier}
  */
  readonly dbInstanceIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_target.html#db_proxy_name DbProxyTarget#db_proxy_name}
  */
  readonly dbProxyName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_target.html#target_group_name DbProxyTarget#target_group_name}
  */
  readonly targetGroupName: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_target.html aws_db_proxy_target}
*/
export class DbProxyTarget extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_db_proxy_target";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_target.html aws_db_proxy_target} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DbProxyTargetConfig
  */
  public constructor(scope: Construct, id: string, config: DbProxyTargetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_db_proxy_target',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dbClusterIdentifier = config.dbClusterIdentifier;
    this._dbInstanceIdentifier = config.dbInstanceIdentifier;
    this._dbProxyName = config.dbProxyName;
    this._targetGroupName = config.targetGroupName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // db_cluster_identifier - computed: false, optional: true, required: false
  private _dbClusterIdentifier?: string; 
  public get dbClusterIdentifier() {
    return this.getStringAttribute('db_cluster_identifier');
  }
  public set dbClusterIdentifier(value: string) {
    this._dbClusterIdentifier = value;
  }
  public resetDbClusterIdentifier() {
    this._dbClusterIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterIdentifierInput() {
    return this._dbClusterIdentifier;
  }

  // db_instance_identifier - computed: false, optional: true, required: false
  private _dbInstanceIdentifier?: string; 
  public get dbInstanceIdentifier() {
    return this.getStringAttribute('db_instance_identifier');
  }
  public set dbInstanceIdentifier(value: string) {
    this._dbInstanceIdentifier = value;
  }
  public resetDbInstanceIdentifier() {
    this._dbInstanceIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceIdentifierInput() {
    return this._dbInstanceIdentifier;
  }

  // db_proxy_name - computed: false, optional: false, required: true
  private _dbProxyName?: string; 
  public get dbProxyName() {
    return this.getStringAttribute('db_proxy_name');
  }
  public set dbProxyName(value: string) {
    this._dbProxyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbProxyNameInput() {
    return this._dbProxyName;
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // rds_resource_id - computed: true, optional: false, required: false
  public get rdsResourceId() {
    return this.getStringAttribute('rds_resource_id');
  }

  // target_arn - computed: true, optional: false, required: false
  public get targetArn() {
    return this.getStringAttribute('target_arn');
  }

  // target_group_name - computed: false, optional: false, required: true
  private _targetGroupName?: string; 
  public get targetGroupName() {
    return this.getStringAttribute('target_group_name');
  }
  public set targetGroupName(value: string) {
    this._targetGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupNameInput() {
    return this._targetGroupName;
  }

  // tracked_cluster_id - computed: true, optional: false, required: false
  public get trackedClusterId() {
    return this.getStringAttribute('tracked_cluster_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      db_cluster_identifier: cdktf.stringToTerraform(this._dbClusterIdentifier),
      db_instance_identifier: cdktf.stringToTerraform(this._dbInstanceIdentifier),
      db_proxy_name: cdktf.stringToTerraform(this._dbProxyName),
      target_group_name: cdktf.stringToTerraform(this._targetGroupName),
    };
  }
}
