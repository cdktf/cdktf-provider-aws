// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Lex
*/
export interface DataAwsLexSlotTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lex_slot_type.html#name DataAwsLexSlotType#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lex_slot_type.html#version DataAwsLexSlotType#version}
  */
  readonly version?: string;
}
export class DataAwsLexSlotTypeEnumerationValue extends cdktf.ComplexComputedList {

  // synonyms - computed: true, optional: false, required: false
  public get synonyms() {
    return this.getListAttribute('synonyms');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/lex_slot_type.html aws_lex_slot_type}
*/
export class DataAwsLexSlotType extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_lex_slot_type";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lex_slot_type.html aws_lex_slot_type} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsLexSlotTypeConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsLexSlotTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lex_slot_type',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // checksum - computed: true, optional: false, required: false
  public get checksum() {
    return this.getStringAttribute('checksum');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enumeration_value - computed: true, optional: false, required: false
  public enumerationValue(index: string) {
    return new DataAwsLexSlotTypeEnumerationValue(this, 'enumeration_value', index);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated_date - computed: true, optional: false, required: false
  public get lastUpdatedDate() {
    return this.getStringAttribute('last_updated_date');
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

  // value_selection_strategy - computed: true, optional: false, required: false
  public get valueSelectionStrategy() {
    return this.getStringAttribute('value_selection_strategy');
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      version: cdktf.stringToTerraform(this._version),
    };
  }
}
