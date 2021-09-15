// https://www.terraform.io/docs/providers/aws/r/db_option_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DbOptionGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#engine_name DbOptionGroup#engine_name}
  */
  readonly engineName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#major_engine_version DbOptionGroup#major_engine_version}
  */
  readonly majorEngineVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#name DbOptionGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#name_prefix DbOptionGroup#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#option_group_description DbOptionGroup#option_group_description}
  */
  readonly optionGroupDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#tags DbOptionGroup#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#tags_all DbOptionGroup#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * option block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#option DbOptionGroup#option}
  */
  readonly option?: DbOptionGroupOption[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#timeouts DbOptionGroup#timeouts}
  */
  readonly timeouts?: DbOptionGroupTimeouts;
}
export interface DbOptionGroupOptionOptionSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#name DbOptionGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#value DbOptionGroup#value}
  */
  readonly value: string;
}

function dbOptionGroupOptionOptionSettingsToTerraform(struct?: DbOptionGroupOptionOptionSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface DbOptionGroupOption {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#db_security_group_memberships DbOptionGroup#db_security_group_memberships}
  */
  readonly dbSecurityGroupMemberships?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#option_name DbOptionGroup#option_name}
  */
  readonly optionName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#port DbOptionGroup#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#version DbOptionGroup#version}
  */
  readonly version?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#vpc_security_group_memberships DbOptionGroup#vpc_security_group_memberships}
  */
  readonly vpcSecurityGroupMemberships?: string[];
  /**
  * option_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#option_settings DbOptionGroup#option_settings}
  */
  readonly optionSettings?: DbOptionGroupOptionOptionSettings[];
}

function dbOptionGroupOptionToTerraform(struct?: DbOptionGroupOption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    db_security_group_memberships: cdktf.listMapper(cdktf.stringToTerraform)(struct!.dbSecurityGroupMemberships),
    option_name: cdktf.stringToTerraform(struct!.optionName),
    port: cdktf.numberToTerraform(struct!.port),
    version: cdktf.stringToTerraform(struct!.version),
    vpc_security_group_memberships: cdktf.listMapper(cdktf.stringToTerraform)(struct!.vpcSecurityGroupMemberships),
    option_settings: cdktf.listMapper(dbOptionGroupOptionOptionSettingsToTerraform)(struct!.optionSettings),
  }
}

export interface DbOptionGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#delete DbOptionGroup#delete}
  */
  readonly delete?: string;
}

function dbOptionGroupTimeoutsToTerraform(struct?: DbOptionGroupTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html aws_db_option_group}
*/
export class DbOptionGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_db_option_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html aws_db_option_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DbOptionGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DbOptionGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_db_option_group',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._engineName = config.engineName;
    this._majorEngineVersion = config.majorEngineVersion;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._optionGroupDescription = config.optionGroupDescription;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._option = config.option;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // engine_name - computed: false, optional: false, required: true
  private _engineName: string;
  public get engineName() {
    return this.getStringAttribute('engine_name');
  }
  public set engineName(value: string) {
    this._engineName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineNameInput() {
    return this._engineName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // major_engine_version - computed: false, optional: false, required: true
  private _majorEngineVersion: string;
  public get majorEngineVersion() {
    return this.getStringAttribute('major_engine_version');
  }
  public set majorEngineVersion(value: string) {
    this._majorEngineVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get majorEngineVersionInput() {
    return this._majorEngineVersion
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
    return this._namePrefix
  }

  // option_group_description - computed: false, optional: true, required: false
  private _optionGroupDescription?: string;
  public get optionGroupDescription() {
    return this.getStringAttribute('option_group_description');
  }
  public set optionGroupDescription(value: string ) {
    this._optionGroupDescription = value;
  }
  public resetOptionGroupDescription() {
    this._optionGroupDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionGroupDescriptionInput() {
    return this._optionGroupDescription
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

  // option - computed: false, optional: true, required: false
  private _option?: DbOptionGroupOption[];
  public get option() {
    return this.interpolationForAttribute('option') as any;
  }
  public set option(value: DbOptionGroupOption[] ) {
    this._option = value;
  }
  public resetOption() {
    this._option = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionInput() {
    return this._option
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DbOptionGroupTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DbOptionGroupTimeouts ) {
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
      engine_name: cdktf.stringToTerraform(this._engineName),
      major_engine_version: cdktf.stringToTerraform(this._majorEngineVersion),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      option_group_description: cdktf.stringToTerraform(this._optionGroupDescription),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      option: cdktf.listMapper(dbOptionGroupOptionToTerraform)(this._option),
      timeouts: dbOptionGroupTimeoutsToTerraform(this._timeouts),
    };
  }
}
