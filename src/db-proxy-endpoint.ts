// https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DbProxyEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html#db_proxy_endpoint_name DbProxyEndpoint#db_proxy_endpoint_name}
  */
  readonly dbProxyEndpointName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html#db_proxy_name DbProxyEndpoint#db_proxy_name}
  */
  readonly dbProxyName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html#tags DbProxyEndpoint#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html#tags_all DbProxyEndpoint#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html#target_role DbProxyEndpoint#target_role}
  */
  readonly targetRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html#vpc_security_group_ids DbProxyEndpoint#vpc_security_group_ids}
  */
  readonly vpcSecurityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html#vpc_subnet_ids DbProxyEndpoint#vpc_subnet_ids}
  */
  readonly vpcSubnetIds: string[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html#timeouts DbProxyEndpoint#timeouts}
  */
  readonly timeouts?: DbProxyEndpointTimeouts;
}
export interface DbProxyEndpointTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html#create DbProxyEndpoint#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html#delete DbProxyEndpoint#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html#update DbProxyEndpoint#update}
  */
  readonly update?: string;
}

function dbProxyEndpointTimeoutsToTerraform(struct?: DbProxyEndpointTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html aws_db_proxy_endpoint}
*/
export class DbProxyEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_db_proxy_endpoint";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html aws_db_proxy_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DbProxyEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: DbProxyEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_db_proxy_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dbProxyEndpointName = config.dbProxyEndpointName;
    this._dbProxyName = config.dbProxyName;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._targetRole = config.targetRole;
    this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
    this._vpcSubnetIds = config.vpcSubnetIds;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // db_proxy_endpoint_name - computed: false, optional: false, required: true
  private _dbProxyEndpointName: string;
  public get dbProxyEndpointName() {
    return this.getStringAttribute('db_proxy_endpoint_name');
  }
  public set dbProxyEndpointName(value: string) {
    this._dbProxyEndpointName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbProxyEndpointNameInput() {
    return this._dbProxyEndpointName
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

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // target_role - computed: false, optional: true, required: false
  private _targetRole?: string;
  public get targetRole() {
    return this.getStringAttribute('target_role');
  }
  public set targetRole(value: string ) {
    this._targetRole = value;
  }
  public resetTargetRole() {
    this._targetRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRoleInput() {
    return this._targetRole
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DbProxyEndpointTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DbProxyEndpointTimeouts ) {
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
      db_proxy_endpoint_name: cdktf.stringToTerraform(this._dbProxyEndpointName),
      db_proxy_name: cdktf.stringToTerraform(this._dbProxyName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      target_role: cdktf.stringToTerraform(this._targetRole),
      vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSecurityGroupIds),
      vpc_subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSubnetIds),
      timeouts: dbProxyEndpointTimeoutsToTerraform(this._timeouts),
    };
  }
}
