// https://www.terraform.io/docs/providers/aws/r/iam_role.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamRoleConfig extends cdktf.TerraformMetaArguments {
  readonly assumeRolePolicy: string;
  readonly description?: string;
  readonly forceDetachPolicies?: boolean;
  readonly maxSessionDuration?: number;
  readonly name?: string;
  readonly namePrefix?: string;
  readonly path?: string;
  readonly permissionsBoundary?: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class IamRole extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IamRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iam_role',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._assumeRolePolicy = config.assumeRolePolicy;
    this._description = config.description;
    this._forceDetachPolicies = config.forceDetachPolicies;
    this._maxSessionDuration = config.maxSessionDuration;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._path = config.path;
    this._permissionsBoundary = config.permissionsBoundary;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // assume_role_policy - computed: false, optional: false, required: true
  private _assumeRolePolicy: string;
  public get assumeRolePolicy() {
    return this.getStringAttribute('assume_role_policy');
  }
  public set assumeRolePolicy(value: string) {
    this._assumeRolePolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRolePolicyInput() {
    return this._assumeRolePolicy
  }

  // create_date - computed: true, optional: false, required: false
  public get createDate() {
    return this.getStringAttribute('create_date');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // force_detach_policies - computed: false, optional: true, required: false
  private _forceDetachPolicies?: boolean;
  public get forceDetachPolicies() {
    return this.getBooleanAttribute('force_detach_policies');
  }
  public set forceDetachPolicies(value: boolean ) {
    this._forceDetachPolicies = value;
  }
  public resetForceDetachPolicies() {
    this._forceDetachPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDetachPoliciesInput() {
    return this._forceDetachPolicies
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_session_duration - computed: false, optional: true, required: false
  private _maxSessionDuration?: number;
  public get maxSessionDuration() {
    return this.getNumberAttribute('max_session_duration');
  }
  public set maxSessionDuration(value: number ) {
    this._maxSessionDuration = value;
  }
  public resetMaxSessionDuration() {
    this._maxSessionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSessionDurationInput() {
    return this._maxSessionDuration
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string;
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string ) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix
  }

  // path - computed: false, optional: true, required: false
  private _path?: string;
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string ) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path
  }

  // permissions_boundary - computed: false, optional: true, required: false
  private _permissionsBoundary?: string;
  public get permissionsBoundary() {
    return this.getStringAttribute('permissions_boundary');
  }
  public set permissionsBoundary(value: string ) {
    this._permissionsBoundary = value;
  }
  public resetPermissionsBoundary() {
    this._permissionsBoundary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsBoundaryInput() {
    return this._permissionsBoundary
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

  // unique_id - computed: true, optional: false, required: false
  public get uniqueId() {
    return this.getStringAttribute('unique_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assume_role_policy: cdktf.stringToTerraform(this._assumeRolePolicy),
      description: cdktf.stringToTerraform(this._description),
      force_detach_policies: cdktf.booleanToTerraform(this._forceDetachPolicies),
      max_session_duration: cdktf.numberToTerraform(this._maxSessionDuration),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      path: cdktf.stringToTerraform(this._path),
      permissions_boundary: cdktf.stringToTerraform(this._permissionsBoundary),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
