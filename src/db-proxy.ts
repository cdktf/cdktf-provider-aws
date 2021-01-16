// https://www.terraform.io/docs/providers/aws/r/db_proxy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DbProxyConfig extends cdktf.TerraformMetaArguments {
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

function dbProxyAuthToTerraform(struct?: DbProxyAuth): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    auth_scheme: cdktf.stringToTerraform(struct!.authScheme),
    description: cdktf.stringToTerraform(struct!.description),
    iam_auth: cdktf.stringToTerraform(struct!.iamAuth),
    secret_arn: cdktf.stringToTerraform(struct!.secretArn),
  }
}

export interface DbProxyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function dbProxyTimeoutsToTerraform(struct?: DbProxyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class DbProxy extends cdktf.TerraformResource {

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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // debug_logging - computed: false, optional: true, required: false
  private _debugLogging?: boolean;
  public get debugLogging() {
    return this.getBooleanAttribute('debug_logging');
  }
  public set debugLogging(value: boolean ) {
    this._debugLogging = value;
  }
  public resetDebugLogging() {
    this._debugLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugLoggingInput() {
    return this._debugLogging
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // engine_family - computed: false, optional: false, required: true
  private _engineFamily: string;
  public get engineFamily() {
    return this.getStringAttribute('engine_family');
  }
  public set engineFamily(value: string) {
    this._engineFamily = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineFamilyInput() {
    return this._engineFamily
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idle_client_timeout - computed: true, optional: true, required: false
  private _idleClientTimeout?: number;
  public get idleClientTimeout() {
    return this.getNumberAttribute('idle_client_timeout');
  }
  public set idleClientTimeout(value: number) {
    this._idleClientTimeout = value;
  }
  public resetIdleClientTimeout() {
    this._idleClientTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleClientTimeoutInput() {
    return this._idleClientTimeout
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // require_tls - computed: false, optional: true, required: false
  private _requireTls?: boolean;
  public get requireTls() {
    return this.getBooleanAttribute('require_tls');
  }
  public set requireTls(value: boolean ) {
    this._requireTls = value;
  }
  public resetRequireTls() {
    this._requireTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireTlsInput() {
    return this._requireTls
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn: string;
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // vpc_security_group_ids - computed: true, optional: true, required: false
  private _vpcSecurityGroupIds?: string[];
  public get vpcSecurityGroupIds() {
    return this.getListAttribute('vpc_security_group_ids');
  }
  public set vpcSecurityGroupIds(value: string[]) {
    this._vpcSecurityGroupIds = value;
  }
  public resetVpcSecurityGroupIds() {
    this._vpcSecurityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcSecurityGroupIdsInput() {
    return this._vpcSecurityGroupIds
  }

  // vpc_subnet_ids - computed: false, optional: false, required: true
  private _vpcSubnetIds: string[];
  public get vpcSubnetIds() {
    return this.getListAttribute('vpc_subnet_ids');
  }
  public set vpcSubnetIds(value: string[]) {
    this._vpcSubnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcSubnetIdsInput() {
    return this._vpcSubnetIds
  }

  // auth - computed: false, optional: false, required: true
  private _auth: DbProxyAuth[];
  public get auth() {
    return this.interpolationForAttribute('auth') as any;
  }
  public set auth(value: DbProxyAuth[]) {
    this._auth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DbProxyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DbProxyTimeouts ) {
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
      debug_logging: cdktf.booleanToTerraform(this._debugLogging),
      engine_family: cdktf.stringToTerraform(this._engineFamily),
      idle_client_timeout: cdktf.numberToTerraform(this._idleClientTimeout),
      name: cdktf.stringToTerraform(this._name),
      require_tls: cdktf.booleanToTerraform(this._requireTls),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSecurityGroupIds),
      vpc_subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSubnetIds),
      auth: cdktf.listMapper(dbProxyAuthToTerraform)(this._auth),
      timeouts: dbProxyTimeoutsToTerraform(this._timeouts),
    };
  }
}
