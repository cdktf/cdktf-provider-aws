// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Relational Database Service
*/
export interface DbProxyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#debug_logging DbProxy#debug_logging}
  */
  readonly debugLogging?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#engine_family DbProxy#engine_family}
  */
  readonly engineFamily: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#idle_client_timeout DbProxy#idle_client_timeout}
  */
  readonly idleClientTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#name DbProxy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#require_tls DbProxy#require_tls}
  */
  readonly requireTls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#role_arn DbProxy#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#tags DbProxy#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#tags_all DbProxy#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#vpc_security_group_ids DbProxy#vpc_security_group_ids}
  */
  readonly vpcSecurityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#vpc_subnet_ids DbProxy#vpc_subnet_ids}
  */
  readonly vpcSubnetIds: string[];
  /**
  * auth block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#auth DbProxy#auth}
  */
  readonly auth: DbProxyAuth[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#timeouts DbProxy#timeouts}
  */
  readonly timeouts?: DbProxyTimeouts;
}
export interface DbProxyAuth {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#auth_scheme DbProxy#auth_scheme}
  */
  readonly authScheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#description DbProxy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#iam_auth DbProxy#iam_auth}
  */
  readonly iamAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#secret_arn DbProxy#secret_arn}
  */
  readonly secretArn?: string;
}

export function dbProxyAuthToTerraform(struct?: DbProxyAuth): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_scheme: cdktf.stringToTerraform(struct!.authScheme),
    description: cdktf.stringToTerraform(struct!.description),
    iam_auth: cdktf.stringToTerraform(struct!.iamAuth),
    secret_arn: cdktf.stringToTerraform(struct!.secretArn),
  }
}

export interface DbProxyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#create DbProxy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#delete DbProxy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#update DbProxy#update}
  */
  readonly update?: string;
}

export function dbProxyTimeoutsToTerraform(struct?: DbProxyTimeoutsOutputReference | DbProxyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class DbProxyTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DbProxyTimeouts | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbProxyTimeouts | undefined) {
    if (value === undefined) {
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this._create = value.create;
      this._delete = value.delete;
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

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html aws_db_proxy}
*/
export class DbProxy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_db_proxy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html aws_db_proxy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DbProxyConfig
  */
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
    this._tagsAll = config.tagsAll;
    this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
    this._vpcSubnetIds = config.vpcSubnetIds;
    this._auth = config.auth;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // debug_logging - computed: false, optional: true, required: false
  private _debugLogging?: boolean | cdktf.IResolvable; 
  public get debugLogging() {
    return this.getBooleanAttribute('debug_logging') as any;
  }
  public set debugLogging(value: boolean | cdktf.IResolvable) {
    this._debugLogging = value;
  }
  public resetDebugLogging() {
    this._debugLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugLoggingInput() {
    return this._debugLogging;
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // engine_family - computed: false, optional: false, required: true
  private _engineFamily?: string; 
  public get engineFamily() {
    return this.getStringAttribute('engine_family');
  }
  public set engineFamily(value: string) {
    this._engineFamily = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineFamilyInput() {
    return this._engineFamily;
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
    return this._idleClientTimeout;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // require_tls - computed: false, optional: true, required: false
  private _requireTls?: boolean | cdktf.IResolvable; 
  public get requireTls() {
    return this.getBooleanAttribute('require_tls') as any;
  }
  public set requireTls(value: boolean | cdktf.IResolvable) {
    this._requireTls = value;
  }
  public resetRequireTls() {
    this._requireTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireTlsInput() {
    return this._requireTls;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable; 
  public get tagsAll() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_all') as any;
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
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
    return this._vpcSecurityGroupIds;
  }

  // vpc_subnet_ids - computed: false, optional: false, required: true
  private _vpcSubnetIds?: string[]; 
  public get vpcSubnetIds() {
    return this.getListAttribute('vpc_subnet_ids');
  }
  public set vpcSubnetIds(value: string[]) {
    this._vpcSubnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcSubnetIdsInput() {
    return this._vpcSubnetIds;
  }

  // auth - computed: false, optional: false, required: true
  private _auth?: DbProxyAuth[]; 
  public get auth() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('auth') as any;
  }
  public set auth(value: DbProxyAuth[]) {
    this._auth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DbProxyTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DbProxyTimeouts) {
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
      debug_logging: cdktf.booleanToTerraform(this._debugLogging),
      engine_family: cdktf.stringToTerraform(this._engineFamily),
      idle_client_timeout: cdktf.numberToTerraform(this._idleClientTimeout),
      name: cdktf.stringToTerraform(this._name),
      require_tls: cdktf.booleanToTerraform(this._requireTls),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSecurityGroupIds),
      vpc_subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSubnetIds),
      auth: cdktf.listMapper(dbProxyAuthToTerraform)(this._auth),
      timeouts: dbProxyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
