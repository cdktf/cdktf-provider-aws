// https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DbProxyDefaultTargetGroupConfig extends TerraformMetaArguments {
  readonly dbProxyName: string;
  /** connection_pool_config block */
  readonly connectionPoolConfig?: DbProxyDefaultTargetGroupConnectionPoolConfig[];
  /** timeouts block */
  readonly timeouts?: DbProxyDefaultTargetGroupTimeouts;
}
export interface DbProxyDefaultTargetGroupConnectionPoolConfig {
  readonly connectionBorrowTimeout?: number;
  readonly initQuery?: string;
  readonly maxConnectionsPercent?: number;
  readonly maxIdleConnectionsPercent?: number;
  readonly sessionPinningFilters?: string[];
}
export interface DbProxyDefaultTargetGroupTimeouts {
  readonly create?: string;
  readonly update?: string;
}

// Resource

export class DbProxyDefaultTargetGroup extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DbProxyDefaultTargetGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_db_proxy_default_target_group',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dbProxyName = config.dbProxyName;
    this._connectionPoolConfig = config.connectionPoolConfig;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // db_proxy_name - computed: false, optional: false, required: true
  private _dbProxyName: string;
  public get dbProxyName() {
    return this._dbProxyName;
  }
  public set dbProxyName(value: string) {
    this._dbProxyName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // connection_pool_config - computed: false, optional: true, required: false
  private _connectionPoolConfig?: DbProxyDefaultTargetGroupConnectionPoolConfig[];
  public get connectionPoolConfig() {
    return this._connectionPoolConfig;
  }
  public set connectionPoolConfig(value: DbProxyDefaultTargetGroupConnectionPoolConfig[] | undefined) {
    this._connectionPoolConfig = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DbProxyDefaultTargetGroupTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DbProxyDefaultTargetGroupTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      db_proxy_name: this._dbProxyName,
      connection_pool_config: this._connectionPoolConfig,
      timeouts: this._timeouts,
    };
  }
}
