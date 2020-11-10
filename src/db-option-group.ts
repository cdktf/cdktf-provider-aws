// https://www.terraform.io/docs/providers/aws/r/db_option_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DbOptionGroupConfig extends TerraformMetaArguments {
  readonly engineName: string;
  readonly majorEngineVersion: string;
  readonly name?: string;
  readonly namePrefix?: string;
  readonly optionGroupDescription?: string;
  readonly tags?: { [key: string]: string };
  /** option block */
  readonly option?: DbOptionGroupOption[];
  /** timeouts block */
  readonly timeouts?: DbOptionGroupTimeouts;
}
export interface DbOptionGroupOptionOptionSettings {
  readonly name: string;
  readonly value: string;
}
export interface DbOptionGroupOption {
  readonly dbSecurityGroupMemberships?: string[];
  readonly optionName: string;
  readonly port?: number;
  readonly version?: string;
  readonly vpcSecurityGroupMemberships?: string[];
  /** option_settings block */
  readonly optionSettings?: DbOptionGroupOptionOptionSettings[];
}
export interface DbOptionGroupTimeouts {
  readonly delete?: string;
}

// Resource

export class DbOptionGroup extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
      engine_name: this._engineName,
      major_engine_version: this._majorEngineVersion,
      name: this._name,
      name_prefix: this._namePrefix,
      option_group_description: this._optionGroupDescription,
      tags: this._tags,
      option: this._option,
      timeouts: this._timeouts,
    };
  }
}
