// https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DbProxyDefaultTargetGroupConfig extends cdktf.TerraformMetaArguments {
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

function dbProxyDefaultTargetGroupConnectionPoolConfigToTerraform(struct?: DbProxyDefaultTargetGroupConnectionPoolConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    connection_borrow_timeout: cdktf.numberToTerraform(struct!.connectionBorrowTimeout),
    init_query: cdktf.stringToTerraform(struct!.initQuery),
    max_connections_percent: cdktf.numberToTerraform(struct!.maxConnectionsPercent),
    max_idle_connections_percent: cdktf.numberToTerraform(struct!.maxIdleConnectionsPercent),
    session_pinning_filters: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sessionPinningFilters),
  }
}

export interface DbProxyDefaultTargetGroupTimeouts {
  readonly create?: string;
  readonly update?: string;
}

function dbProxyDefaultTargetGroupTimeoutsToTerraform(struct?: DbProxyDefaultTargetGroupTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class DbProxyDefaultTargetGroup extends cdktf.TerraformResource {

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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // db_proxy_name - computed: false, optional: false, required: true
  private _dbProxyName: string;
  public get dbProxyName() {
    return this.getStringAttribute('db_proxy_name');
  }
  public set dbProxyName(value: string) {
    this._dbProxyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbProxyNameInput() {
    return this._dbProxyName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // connection_pool_config - computed: false, optional: true, required: false
  private _connectionPoolConfig?: DbProxyDefaultTargetGroupConnectionPoolConfig[];
  public get connectionPoolConfig() {
    return this.interpolationForAttribute('connection_pool_config') as any;
  }
  public set connectionPoolConfig(value: DbProxyDefaultTargetGroupConnectionPoolConfig[] ) {
    this._connectionPoolConfig = value;
  }
  public resetConnectionPoolConfig() {
    this._connectionPoolConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPoolConfigInput() {
    return this._connectionPoolConfig
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DbProxyDefaultTargetGroupTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DbProxyDefaultTargetGroupTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      db_proxy_name: cdktf.stringToTerraform(this._dbProxyName),
      connection_pool_config: cdktf.listMapper(dbProxyDefaultTargetGroupConnectionPoolConfigToTerraform)(this._connectionPoolConfig),
      timeouts: dbProxyDefaultTargetGroupTimeoutsToTerraform(this._timeouts),
    };
  }
}
