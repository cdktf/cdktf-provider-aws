// https://www.terraform.io/docs/providers/aws/r/ssm_parameter.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsmParameterConfig extends cdktf.TerraformMetaArguments {
  readonly allowedPattern?: string;
  readonly description?: string;
  readonly keyId?: string;
  readonly name: string;
  readonly overwrite?: boolean;
  readonly tags?: { [key: string]: string };
  readonly tier?: string;
  readonly type: string;
  readonly value: string;
}

// Resource

export class SsmParameter extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SsmParameterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssm_parameter',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allowedPattern = config.allowedPattern;
    this._description = config.description;
    this._keyId = config.keyId;
    this._name = config.name;
    this._overwrite = config.overwrite;
    this._tags = config.tags;
    this._tier = config.tier;
    this._type = config.type;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_pattern - computed: false, optional: true, required: false
  private _allowedPattern?: string;
  public get allowedPattern() {
    return this.getStringAttribute('allowed_pattern');
  }
  public set allowedPattern(value: string ) {
    this._allowedPattern = value;
  }
  public resetAllowedPattern() {
    this._allowedPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedPatternInput() {
    return this._allowedPattern
  }

  // arn - computed: true, optional: true, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_id - computed: true, optional: true, required: false
  private _keyId?: string;
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId
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

  // overwrite - computed: false, optional: true, required: false
  private _overwrite?: boolean;
  public get overwrite() {
    return this.getBooleanAttribute('overwrite');
  }
  public set overwrite(value: boolean ) {
    this._overwrite = value;
  }
  public resetOverwrite() {
    this._overwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite
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

  // tier - computed: false, optional: true, required: false
  private _tier?: string;
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string ) {
    this._tier = value;
  }
  public resetTier() {
    this._tier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // value - computed: false, optional: false, required: true
  private _value: string;
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_pattern: cdktf.stringToTerraform(this._allowedPattern),
      description: cdktf.stringToTerraform(this._description),
      key_id: cdktf.stringToTerraform(this._keyId),
      name: cdktf.stringToTerraform(this._name),
      overwrite: cdktf.booleanToTerraform(this._overwrite),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tier: cdktf.stringToTerraform(this._tier),
      type: cdktf.stringToTerraform(this._type),
      value: cdktf.stringToTerraform(this._value),
    };
  }
}
