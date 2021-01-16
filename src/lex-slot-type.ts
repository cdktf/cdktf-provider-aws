// https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LexSlotTypeConfig extends TerraformMetaArguments {
  readonly createVersion?: boolean;
  readonly description?: string;
  readonly name: string;
  readonly valueSelectionStrategy?: string;
  /** enumeration_value block */
  readonly enumerationValue: LexSlotTypeEnumerationValue[];
  /** timeouts block */
  readonly timeouts?: LexSlotTypeTimeouts;
}
export interface LexSlotTypeEnumerationValue {
  readonly synonyms?: string[];
  readonly value: string;
}
export interface LexSlotTypeTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class LexSlotType extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LexSlotTypeConfig) {
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
    this._createVersion = config.createVersion;
    this._description = config.description;
    this._name = config.name;
    this._valueSelectionStrategy = config.valueSelectionStrategy;
    this._enumerationValue = config.enumerationValue;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // checksum - computed: true, optional: false, required: true
  public get checksum() {
    return this.getStringAttribute('checksum');
  }

  // create_version - computed: false, optional: true, required: false
  private _createVersion?: boolean;
  public get createVersion() {
    return this._createVersion;
  }
  public set createVersion(value: boolean | undefined) {
    this._createVersion = value;
  }

  // created_date - computed: true, optional: false, required: true
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // last_updated_date - computed: true, optional: false, required: true
  public get lastUpdatedDate() {
    return this.getStringAttribute('last_updated_date');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // value_selection_strategy - computed: false, optional: true, required: false
  private _valueSelectionStrategy?: string;
  public get valueSelectionStrategy() {
    return this._valueSelectionStrategy;
  }
  public set valueSelectionStrategy(value: string | undefined) {
    this._valueSelectionStrategy = value;
  }

  // version - computed: true, optional: false, required: true
  public get version() {
    return this.getStringAttribute('version');
  }

  // enumeration_value - computed: false, optional: false, required: true
  private _enumerationValue: LexSlotTypeEnumerationValue[];
  public get enumerationValue() {
    return this._enumerationValue;
  }
  public set enumerationValue(value: LexSlotTypeEnumerationValue[]) {
    this._enumerationValue = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LexSlotTypeTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: LexSlotTypeTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      create_version: this._createVersion,
      description: this._description,
      name: this._name,
      value_selection_strategy: this._valueSelectionStrategy,
      enumeration_value: this._enumerationValue,
      timeouts: this._timeouts,
    };
  }
}
