// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Identity and Access Management
*/
export interface IamRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role.html#assume_role_policy IamRole#assume_role_policy}
  */
  readonly assumeRolePolicy: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role.html#description IamRole#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role.html#force_detach_policies IamRole#force_detach_policies}
  */
  readonly forceDetachPolicies?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role.html#managed_policy_arns IamRole#managed_policy_arns}
  */
  readonly managedPolicyArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role.html#max_session_duration IamRole#max_session_duration}
  */
  readonly maxSessionDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role.html#name IamRole#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role.html#name_prefix IamRole#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role.html#path IamRole#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role.html#permissions_boundary IamRole#permissions_boundary}
  */
  readonly permissionsBoundary?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role.html#tags IamRole#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role.html#tags_all IamRole#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * inline_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role.html#inline_policy IamRole#inline_policy}
  */
  readonly inlinePolicy?: IamRoleInlinePolicy[];
}
export interface IamRoleInlinePolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role.html#name IamRole#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role.html#policy IamRole#policy}
  */
  readonly policy?: string;
}

export function iamRoleInlinePolicyToTerraform(struct?: IamRoleInlinePolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    policy: cdktf.stringToTerraform(struct!.policy),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_role.html aws_iam_role}
*/
export class IamRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_iam_role";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_role.html aws_iam_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamRoleConfig
  */
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
    this._managedPolicyArns = config.managedPolicyArns;
    this._maxSessionDuration = config.maxSessionDuration;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._path = config.path;
    this._permissionsBoundary = config.permissionsBoundary;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._inlinePolicy = config.inlinePolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // assume_role_policy - computed: false, optional: false, required: true
  private _assumeRolePolicy?: string; 
  public get assumeRolePolicy() {
    return this.getStringAttribute('assume_role_policy');
  }
  public set assumeRolePolicy(value: string) {
    this._assumeRolePolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRolePolicyInput() {
    return this._assumeRolePolicy;
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

  // force_detach_policies - computed: false, optional: true, required: false
  private _forceDetachPolicies?: boolean | cdktf.IResolvable; 
  public get forceDetachPolicies() {
    return this.getBooleanAttribute('force_detach_policies') as any;
  }
  public set forceDetachPolicies(value: boolean | cdktf.IResolvable) {
    this._forceDetachPolicies = value;
  }
  public resetForceDetachPolicies() {
    this._forceDetachPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDetachPoliciesInput() {
    return this._forceDetachPolicies;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // managed_policy_arns - computed: true, optional: true, required: false
  private _managedPolicyArns?: string[]; 
  public get managedPolicyArns() {
    return this.getListAttribute('managed_policy_arns');
  }
  public set managedPolicyArns(value: string[]) {
    this._managedPolicyArns = value;
  }
  public resetManagedPolicyArns() {
    this._managedPolicyArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedPolicyArnsInput() {
    return this._managedPolicyArns;
  }

  // max_session_duration - computed: false, optional: true, required: false
  private _maxSessionDuration?: number; 
  public get maxSessionDuration() {
    return this.getNumberAttribute('max_session_duration');
  }
  public set maxSessionDuration(value: number) {
    this._maxSessionDuration = value;
  }
  public resetMaxSessionDuration() {
    this._maxSessionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSessionDurationInput() {
    return this._maxSessionDuration;
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
    return this._name;
  }

  // name_prefix - computed: true, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // permissions_boundary - computed: false, optional: true, required: false
  private _permissionsBoundary?: string; 
  public get permissionsBoundary() {
    return this.getStringAttribute('permissions_boundary');
  }
  public set permissionsBoundary(value: string) {
    this._permissionsBoundary = value;
  }
  public resetPermissionsBoundary() {
    this._permissionsBoundary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsBoundaryInput() {
    return this._permissionsBoundary;
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

  // unique_id - computed: true, optional: false, required: false
  public get uniqueId() {
    return this.getStringAttribute('unique_id');
  }

  // inline_policy - computed: false, optional: true, required: false
  private _inlinePolicy?: IamRoleInlinePolicy[]; 
  public get inlinePolicy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('inline_policy') as any;
  }
  public set inlinePolicy(value: IamRoleInlinePolicy[]) {
    this._inlinePolicy = value;
  }
  public resetInlinePolicy() {
    this._inlinePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlinePolicyInput() {
    return this._inlinePolicy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assume_role_policy: cdktf.stringToTerraform(this._assumeRolePolicy),
      description: cdktf.stringToTerraform(this._description),
      force_detach_policies: cdktf.booleanToTerraform(this._forceDetachPolicies),
      managed_policy_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._managedPolicyArns),
      max_session_duration: cdktf.numberToTerraform(this._maxSessionDuration),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      path: cdktf.stringToTerraform(this._path),
      permissions_boundary: cdktf.stringToTerraform(this._permissionsBoundary),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      inline_policy: cdktf.listMapper(iamRoleInlinePolicyToTerraform)(this._inlinePolicy),
    };
  }
}
