// https://www.terraform.io/docs/providers/aws/r/db_proxy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DbProxyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#debug_logging DbProxy#debug_logging}
  */
  readonly debugLogging?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#engine_family DbProxy#engine_family}
  */
  readonly engineFamily: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#id DbProxy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#idle_client_timeout DbProxy#idle_client_timeout}
  */
  readonly idleClientTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#name DbProxy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#require_tls DbProxy#require_tls}
  */
  readonly requireTls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#role_arn DbProxy#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#tags DbProxy#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#tags_all DbProxy#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#vpc_security_group_ids DbProxy#vpc_security_group_ids}
  */
  readonly vpcSecurityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#vpc_subnet_ids DbProxy#vpc_subnet_ids}
  */
  readonly vpcSubnetIds: string[];
  /**
  * auth block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#auth DbProxy#auth}
  */
  readonly auth: DbProxyAuth[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#timeouts DbProxy#timeouts}
  */
  readonly timeouts?: DbProxyTimeouts;
}
export interface DbProxyAuth {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#auth_scheme DbProxy#auth_scheme}
  */
  readonly authScheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#client_password_auth_type DbProxy#client_password_auth_type}
  */
  readonly clientPasswordAuthType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#description DbProxy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#iam_auth DbProxy#iam_auth}
  */
  readonly iamAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#secret_arn DbProxy#secret_arn}
  */
  readonly secretArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#username DbProxy#username}
  */
  readonly username?: string;
}

export function dbProxyAuthToTerraform(struct?: DbProxyAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_scheme: cdktf.stringToTerraform(struct!.authScheme),
    client_password_auth_type: cdktf.stringToTerraform(struct!.clientPasswordAuthType),
    description: cdktf.stringToTerraform(struct!.description),
    iam_auth: cdktf.stringToTerraform(struct!.iamAuth),
    secret_arn: cdktf.stringToTerraform(struct!.secretArn),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class DbProxyAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DbProxyAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authScheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.authScheme = this._authScheme;
    }
    if (this._clientPasswordAuthType !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientPasswordAuthType = this._clientPasswordAuthType;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._iamAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamAuth = this._iamAuth;
    }
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbProxyAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authScheme = undefined;
      this._clientPasswordAuthType = undefined;
      this._description = undefined;
      this._iamAuth = undefined;
      this._secretArn = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authScheme = value.authScheme;
      this._clientPasswordAuthType = value.clientPasswordAuthType;
      this._description = value.description;
      this._iamAuth = value.iamAuth;
      this._secretArn = value.secretArn;
      this._username = value.username;
    }
  }

  // auth_scheme - computed: false, optional: true, required: false
  private _authScheme?: string; 
  public get authScheme() {
    return this.getStringAttribute('auth_scheme');
  }
  public set authScheme(value: string) {
    this._authScheme = value;
  }
  public resetAuthScheme() {
    this._authScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSchemeInput() {
    return this._authScheme;
  }

  // client_password_auth_type - computed: true, optional: true, required: false
  private _clientPasswordAuthType?: string; 
  public get clientPasswordAuthType() {
    return this.getStringAttribute('client_password_auth_type');
  }
  public set clientPasswordAuthType(value: string) {
    this._clientPasswordAuthType = value;
  }
  public resetClientPasswordAuthType() {
    this._clientPasswordAuthType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientPasswordAuthTypeInput() {
    return this._clientPasswordAuthType;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // iam_auth - computed: false, optional: true, required: false
  private _iamAuth?: string; 
  public get iamAuth() {
    return this.getStringAttribute('iam_auth');
  }
  public set iamAuth(value: string) {
    this._iamAuth = value;
  }
  public resetIamAuth() {
    this._iamAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamAuthInput() {
    return this._iamAuth;
  }

  // secret_arn - computed: false, optional: true, required: false
  private _secretArn?: string; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  public resetSecretArn() {
    this._secretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class DbProxyAuthList extends cdktf.ComplexList {
  public internalValue? : DbProxyAuth[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DbProxyAuthOutputReference {
    return new DbProxyAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbProxyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#create DbProxy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#delete DbProxy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#update DbProxy#update}
  */
  readonly update?: string;
}

export function dbProxyTimeoutsToTerraform(struct?: DbProxyTimeoutsOutputReference | DbProxyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbProxyTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbProxyTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_proxy aws_db_proxy}
*/
export class DbProxy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_db_proxy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_proxy aws_db_proxy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DbProxyConfig
  */
  public constructor(scope: Construct, id: string, config: DbProxyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_db_proxy',
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
    this._debugLogging = config.debugLogging;
    this._engineFamily = config.engineFamily;
    this._id = config.id;
    this._idleClientTimeout = config.idleClientTimeout;
    this._name = config.name;
    this._requireTls = config.requireTls;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
    this._vpcSubnetIds = config.vpcSubnetIds;
    this._auth.internalValue = config.auth;
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
    return this.getBooleanAttribute('debug_logging');
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
    return this.getBooleanAttribute('require_tls');
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
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
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
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
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
    return cdktf.Fn.tolist(this.getListAttribute('vpc_security_group_ids'));
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
    return cdktf.Fn.tolist(this.getListAttribute('vpc_subnet_ids'));
  }
  public set vpcSubnetIds(value: string[]) {
    this._vpcSubnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcSubnetIdsInput() {
    return this._vpcSubnetIds;
  }

  // auth - computed: false, optional: false, required: true
  private _auth = new DbProxyAuthList(this, "auth", false);
  public get auth() {
    return this._auth;
  }
  public putAuth(value: DbProxyAuth[] | cdktf.IResolvable) {
    this._auth.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DbProxyTimeoutsOutputReference(this, "timeouts");
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
      id: cdktf.stringToTerraform(this._id),
      idle_client_timeout: cdktf.numberToTerraform(this._idleClientTimeout),
      name: cdktf.stringToTerraform(this._name),
      require_tls: cdktf.booleanToTerraform(this._requireTls),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vpcSecurityGroupIds),
      vpc_subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vpcSubnetIds),
      auth: cdktf.listMapper(dbProxyAuthToTerraform, true)(this._auth.internalValue),
      timeouts: dbProxyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
