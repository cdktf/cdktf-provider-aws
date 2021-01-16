// https://www.terraform.io/docs/providers/aws/r/db_proxy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DbProxyConfig extends TerraformMetaArguments {
  readonly debugLogging?: boolean;
  readonly engineFamily: string;
  readonly idleClientTimeout?: number;
  readonly name: string;
  readonly requireTls?: boolean;
  readonly roleArn: string;
  readonly tags?: { [key: string]: string };
  readonly vpcSecurityGroupIds?: string[];
  readonly vpcSubnetIds: string[];
  /** auth block */
  readonly auth: DbProxyAuth[];
  /** timeouts block */
  readonly timeouts?: DbProxyTimeouts;
}
export interface DbProxyAuth {
  readonly authScheme?: string;
  readonly description?: string;
  readonly iamAuth?: string;
  readonly secretArn?: string;
}
export interface DbProxyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class DbProxy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DbProxyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_db_proxy',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._debugLogging = config.debugLogging;
    this._engineFamily = config.engineFamily;
    this._idleClientTimeout = config.idleClientTimeout;
    this._name = config.name;
    this._requireTls = config.requireTls;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
    this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
    this._vpcSubnetIds = config.vpcSubnetIds;
    this._auth = config.auth;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // debug_logging - computed: false, optional: true, required: false
  private _debugLogging?: boolean;
  public get debugLogging() {
    return this._debugLogging;
  }
  public set debugLogging(value: boolean | undefined) {
    this._debugLogging = value;
  }

  // endpoint - computed: true, optional: false, required: true
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // engine_family - computed: false, optional: false, required: true
  private _engineFamily: string;
  public get engineFamily() {
    return this._engineFamily;
  }
  public set engineFamily(value: string) {
    this._engineFamily = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // idle_client_timeout - computed: true, optional: true, required: false
  private _idleClientTimeout?: number;
  public get idleClientTimeout() {
    return this._idleClientTimeout ?? this.getNumberAttribute('idle_client_timeout');
  }
  public set idleClientTimeout(value: number | undefined) {
    this._idleClientTimeout = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // require_tls - computed: false, optional: true, required: false
  private _requireTls?: boolean;
  public get requireTls() {
    return this._requireTls;
  }
  public set requireTls(value: boolean | undefined) {
    this._requireTls = value;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn: string;
  public get roleArn() {
    return this._roleArn;
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // vpc_security_group_ids - computed: true, optional: true, required: false
  private _vpcSecurityGroupIds?: string[];
  public get vpcSecurityGroupIds() {
    return this._vpcSecurityGroupIds ?? this.getListAttribute('vpc_security_group_ids');
  }
  public set vpcSecurityGroupIds(value: string[] | undefined) {
    this._vpcSecurityGroupIds = value;
  }

  // vpc_subnet_ids - computed: false, optional: false, required: true
  private _vpcSubnetIds: string[];
  public get vpcSubnetIds() {
    return this._vpcSubnetIds;
  }
  public set vpcSubnetIds(value: string[]) {
    this._vpcSubnetIds = value;
  }

  // auth - computed: false, optional: false, required: true
  private _auth: DbProxyAuth[];
  public get auth() {
    return this._auth;
  }
  public set auth(value: DbProxyAuth[]) {
    this._auth = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DbProxyTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DbProxyTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      debug_logging: this._debugLogging,
      engine_family: this._engineFamily,
      idle_client_timeout: this._idleClientTimeout,
      name: this._name,
      require_tls: this._requireTls,
      role_arn: this._roleArn,
      tags: this._tags,
      vpc_security_group_ids: this._vpcSecurityGroupIds,
      vpc_subnet_ids: this._vpcSubnetIds,
      auth: this._auth,
      timeouts: this._timeouts,
    };
  }
}
