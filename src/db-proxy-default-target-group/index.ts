// https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DbProxyDefaultTargetGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#db_proxy_name DbProxyDefaultTargetGroup#db_proxy_name}
  */
  readonly dbProxyName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#id DbProxyDefaultTargetGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * connection_pool_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#connection_pool_config DbProxyDefaultTargetGroup#connection_pool_config}
  */
  readonly connectionPoolConfig?: DbProxyDefaultTargetGroupConnectionPoolConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#timeouts DbProxyDefaultTargetGroup#timeouts}
  */
  readonly timeouts?: DbProxyDefaultTargetGroupTimeouts;
}
export interface DbProxyDefaultTargetGroupConnectionPoolConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#connection_borrow_timeout DbProxyDefaultTargetGroup#connection_borrow_timeout}
  */
  readonly connectionBorrowTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#init_query DbProxyDefaultTargetGroup#init_query}
  */
  readonly initQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#max_connections_percent DbProxyDefaultTargetGroup#max_connections_percent}
  */
  readonly maxConnectionsPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#max_idle_connections_percent DbProxyDefaultTargetGroup#max_idle_connections_percent}
  */
  readonly maxIdleConnectionsPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#session_pinning_filters DbProxyDefaultTargetGroup#session_pinning_filters}
  */
  readonly sessionPinningFilters?: string[];
}

export function dbProxyDefaultTargetGroupConnectionPoolConfigToTerraform(struct?: DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference | DbProxyDefaultTargetGroupConnectionPoolConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_borrow_timeout: cdktf.numberToTerraform(struct!.connectionBorrowTimeout),
    init_query: cdktf.stringToTerraform(struct!.initQuery),
    max_connections_percent: cdktf.numberToTerraform(struct!.maxConnectionsPercent),
    max_idle_connections_percent: cdktf.numberToTerraform(struct!.maxIdleConnectionsPercent),
    session_pinning_filters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sessionPinningFilters),
  }
}

export class DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbProxyDefaultTargetGroupConnectionPoolConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionBorrowTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionBorrowTimeout = this._connectionBorrowTimeout;
    }
    if (this._initQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.initQuery = this._initQuery;
    }
    if (this._maxConnectionsPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnectionsPercent = this._maxConnectionsPercent;
    }
    if (this._maxIdleConnectionsPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIdleConnectionsPercent = this._maxIdleConnectionsPercent;
    }
    if (this._sessionPinningFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionPinningFilters = this._sessionPinningFilters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbProxyDefaultTargetGroupConnectionPoolConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionBorrowTimeout = undefined;
      this._initQuery = undefined;
      this._maxConnectionsPercent = undefined;
      this._maxIdleConnectionsPercent = undefined;
      this._sessionPinningFilters = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionBorrowTimeout = value.connectionBorrowTimeout;
      this._initQuery = value.initQuery;
      this._maxConnectionsPercent = value.maxConnectionsPercent;
      this._maxIdleConnectionsPercent = value.maxIdleConnectionsPercent;
      this._sessionPinningFilters = value.sessionPinningFilters;
    }
  }

  // connection_borrow_timeout - computed: false, optional: true, required: false
  private _connectionBorrowTimeout?: number; 
  public get connectionBorrowTimeout() {
    return this.getNumberAttribute('connection_borrow_timeout');
  }
  public set connectionBorrowTimeout(value: number) {
    this._connectionBorrowTimeout = value;
  }
  public resetConnectionBorrowTimeout() {
    this._connectionBorrowTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionBorrowTimeoutInput() {
    return this._connectionBorrowTimeout;
  }

  // init_query - computed: false, optional: true, required: false
  private _initQuery?: string; 
  public get initQuery() {
    return this.getStringAttribute('init_query');
  }
  public set initQuery(value: string) {
    this._initQuery = value;
  }
  public resetInitQuery() {
    this._initQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initQueryInput() {
    return this._initQuery;
  }

  // max_connections_percent - computed: false, optional: true, required: false
  private _maxConnectionsPercent?: number; 
  public get maxConnectionsPercent() {
    return this.getNumberAttribute('max_connections_percent');
  }
  public set maxConnectionsPercent(value: number) {
    this._maxConnectionsPercent = value;
  }
  public resetMaxConnectionsPercent() {
    this._maxConnectionsPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsPercentInput() {
    return this._maxConnectionsPercent;
  }

  // max_idle_connections_percent - computed: false, optional: true, required: false
  private _maxIdleConnectionsPercent?: number; 
  public get maxIdleConnectionsPercent() {
    return this.getNumberAttribute('max_idle_connections_percent');
  }
  public set maxIdleConnectionsPercent(value: number) {
    this._maxIdleConnectionsPercent = value;
  }
  public resetMaxIdleConnectionsPercent() {
    this._maxIdleConnectionsPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdleConnectionsPercentInput() {
    return this._maxIdleConnectionsPercent;
  }

  // session_pinning_filters - computed: false, optional: true, required: false
  private _sessionPinningFilters?: string[]; 
  public get sessionPinningFilters() {
    return cdktf.Fn.tolist(this.getListAttribute('session_pinning_filters'));
  }
  public set sessionPinningFilters(value: string[]) {
    this._sessionPinningFilters = value;
  }
  public resetSessionPinningFilters() {
    this._sessionPinningFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionPinningFiltersInput() {
    return this._sessionPinningFilters;
  }
}
export interface DbProxyDefaultTargetGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#create DbProxyDefaultTargetGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#update DbProxyDefaultTargetGroup#update}
  */
  readonly update?: string;
}

export function dbProxyDefaultTargetGroupTimeoutsToTerraform(struct?: DbProxyDefaultTargetGroupTimeoutsOutputReference | DbProxyDefaultTargetGroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class DbProxyDefaultTargetGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbProxyDefaultTargetGroupTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbProxyDefaultTargetGroupTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group aws_db_proxy_default_target_group}
*/
export class DbProxyDefaultTargetGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_db_proxy_default_target_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group aws_db_proxy_default_target_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DbProxyDefaultTargetGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DbProxyDefaultTargetGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_db_proxy_default_target_group',
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
    this._dbProxyName = config.dbProxyName;
    this._id = config.id;
    this._connectionPoolConfig.internalValue = config.connectionPoolConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // connection_pool_config - computed: false, optional: true, required: false
  private _connectionPoolConfig = new DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference(this, "connection_pool_config");
  public get connectionPoolConfig() {
    return this._connectionPoolConfig;
  }
  public putConnectionPoolConfig(value: DbProxyDefaultTargetGroupConnectionPoolConfig) {
    this._connectionPoolConfig.internalValue = value;
  }
  public resetConnectionPoolConfig() {
    this._connectionPoolConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPoolConfigInput() {
    return this._connectionPoolConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DbProxyDefaultTargetGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DbProxyDefaultTargetGroupTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      db_proxy_name: cdktf.stringToTerraform(this._dbProxyName),
      id: cdktf.stringToTerraform(this._id),
      connection_pool_config: dbProxyDefaultTargetGroupConnectionPoolConfigToTerraform(this._connectionPoolConfig.internalValue),
      timeouts: dbProxyDefaultTargetGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
