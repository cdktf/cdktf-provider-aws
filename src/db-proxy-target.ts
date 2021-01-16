// https://www.terraform.io/docs/providers/aws/r/db_proxy_target.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DbProxyTargetConfig extends TerraformMetaArguments {
  readonly dbClusterIdentifier?: string;
  readonly dbInstanceIdentifier?: string;
  readonly dbProxyName: string;
  readonly targetGroupName: string;
}

// Resource

export class DbProxyTarget extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    return this._dbClusterIdentifier;
  }
  public set dbClusterIdentifier(value: string | undefined) {
    this._dbClusterIdentifier = value;
  }

  // db_instance_identifier - computed: false, optional: true, required: false
  private _dbInstanceIdentifier?: string;
  public get dbInstanceIdentifier() {
    return this._dbInstanceIdentifier;
  }
  public set dbInstanceIdentifier(value: string | undefined) {
    this._dbInstanceIdentifier = value;
  }

  // db_proxy_name - computed: false, optional: false, required: true
  private _dbProxyName: string;
  public get dbProxyName() {
    return this._dbProxyName;
  }
  public set dbProxyName(value: string) {
    this._dbProxyName = value;
  }

  // endpoint - computed: true, optional: false, required: true
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getNumberAttribute('port');
  }

  // rds_resource_id - computed: true, optional: false, required: true
  public get rdsResourceId() {
    return this.getStringAttribute('rds_resource_id');
  }

  // target_arn - computed: true, optional: false, required: true
  public get targetArn() {
    return this.getStringAttribute('target_arn');
  }

  // target_group_name - computed: false, optional: false, required: true
  private _targetGroupName: string;
  public get targetGroupName() {
    return this._targetGroupName;
  }
  public set targetGroupName(value: string) {
    this._targetGroupName = value;
  }

  // tracked_cluster_id - computed: true, optional: false, required: true
  public get trackedClusterId() {
    return this.getStringAttribute('tracked_cluster_id');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      db_cluster_identifier: this._dbClusterIdentifier,
      db_instance_identifier: this._dbInstanceIdentifier,
      db_proxy_name: this._dbProxyName,
      target_group_name: this._targetGroupName,
    };
  }
}
