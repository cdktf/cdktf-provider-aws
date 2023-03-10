// https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RolesanywhereProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#duration_seconds RolesanywhereProfile#duration_seconds}
  */
  readonly durationSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#enabled RolesanywhereProfile#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#id RolesanywhereProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#managed_policy_arns RolesanywhereProfile#managed_policy_arns}
  */
  readonly managedPolicyArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#name RolesanywhereProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#require_instance_properties RolesanywhereProfile#require_instance_properties}
  */
  readonly requireInstanceProperties?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#role_arns RolesanywhereProfile#role_arns}
  */
  readonly roleArns: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#session_policy RolesanywhereProfile#session_policy}
  */
  readonly sessionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#tags RolesanywhereProfile#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#tags_all RolesanywhereProfile#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile aws_rolesanywhere_profile}
*/
export class RolesanywhereProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_rolesanywhere_profile";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile aws_rolesanywhere_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RolesanywhereProfileConfig
  */
  public constructor(scope: Construct, id: string, config: RolesanywhereProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_rolesanywhere_profile',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.58.0',
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
    this._durationSeconds = config.durationSeconds;
    this._enabled = config.enabled;
    this._id = config.id;
    this._managedPolicyArns = config.managedPolicyArns;
    this._name = config.name;
    this._requireInstanceProperties = config.requireInstanceProperties;
    this._roleArns = config.roleArns;
    this._sessionPolicy = config.sessionPolicy;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // duration_seconds - computed: true, optional: true, required: false
  private _durationSeconds?: number; 
  public get durationSeconds() {
    return this.getNumberAttribute('duration_seconds');
  }
  public set durationSeconds(value: number) {
    this._durationSeconds = value;
  }
  public resetDurationSeconds() {
    this._durationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationSecondsInput() {
    return this._durationSeconds;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // managed_policy_arns - computed: false, optional: true, required: false
  private _managedPolicyArns?: string[]; 
  public get managedPolicyArns() {
    return cdktf.Fn.tolist(this.getListAttribute('managed_policy_arns'));
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

  // require_instance_properties - computed: false, optional: true, required: false
  private _requireInstanceProperties?: boolean | cdktf.IResolvable; 
  public get requireInstanceProperties() {
    return this.getBooleanAttribute('require_instance_properties');
  }
  public set requireInstanceProperties(value: boolean | cdktf.IResolvable) {
    this._requireInstanceProperties = value;
  }
  public resetRequireInstanceProperties() {
    this._requireInstanceProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireInstancePropertiesInput() {
    return this._requireInstanceProperties;
  }

  // role_arns - computed: false, optional: false, required: true
  private _roleArns?: string[]; 
  public get roleArns() {
    return cdktf.Fn.tolist(this.getListAttribute('role_arns'));
  }
  public set roleArns(value: string[]) {
    this._roleArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnsInput() {
    return this._roleArns;
  }

  // session_policy - computed: false, optional: true, required: false
  private _sessionPolicy?: string; 
  public get sessionPolicy() {
    return this.getStringAttribute('session_policy');
  }
  public set sessionPolicy(value: string) {
    this._sessionPolicy = value;
  }
  public resetSessionPolicy() {
    this._sessionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionPolicyInput() {
    return this._sessionPolicy;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      duration_seconds: cdktf.numberToTerraform(this._durationSeconds),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      managed_policy_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._managedPolicyArns),
      name: cdktf.stringToTerraform(this._name),
      require_instance_properties: cdktf.booleanToTerraform(this._requireInstanceProperties),
      role_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roleArns),
      session_policy: cdktf.stringToTerraform(this._sessionPolicy),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
    };
  }
}
