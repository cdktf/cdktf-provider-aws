// https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LexSlotTypeConfig extends cdktf.TerraformMetaArguments {
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

function lexSlotTypeEnumerationValueToTerraform(struct?: LexSlotTypeEnumerationValue): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    synonyms: cdktf.listMapper(cdktf.stringToTerraform)(struct!.synonyms),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface LexSlotTypeTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function lexSlotTypeTimeoutsToTerraform(struct?: LexSlotTypeTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class LexSlotType extends cdktf.TerraformResource {

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

  // checksum - computed: true, optional: false, required: false
  public get checksum() {
    return this.getStringAttribute('checksum');
  }

  // create_version - computed: false, optional: true, required: false
  private _createVersion?: boolean;
  public get createVersion() {
    return this.getBooleanAttribute('create_version');
  }
  public set createVersion(value: boolean ) {
    this._createVersion = value;
  }
  public resetCreateVersion() {
    this._createVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createVersionInput() {
    return this._createVersion
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
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

  // last_updated_date - computed: true, optional: false, required: false
  public get lastUpdatedDate() {
    return this.getStringAttribute('last_updated_date');
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

  // value_selection_strategy - computed: false, optional: true, required: false
  private _valueSelectionStrategy?: string;
  public get valueSelectionStrategy() {
    return this.getStringAttribute('value_selection_strategy');
  }
  public set valueSelectionStrategy(value: string ) {
    this._valueSelectionStrategy = value;
  }
  public resetValueSelectionStrategy() {
    this._valueSelectionStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueSelectionStrategyInput() {
    return this._valueSelectionStrategy
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // enumeration_value - computed: false, optional: false, required: true
  private _enumerationValue: LexSlotTypeEnumerationValue[];
  public get enumerationValue() {
    return this.interpolationForAttribute('enumeration_value') as any;
  }
  public set enumerationValue(value: LexSlotTypeEnumerationValue[]) {
    this._enumerationValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enumerationValueInput() {
    return this._enumerationValue
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LexSlotTypeTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: LexSlotTypeTimeouts ) {
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
      create_version: cdktf.booleanToTerraform(this._createVersion),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      value_selection_strategy: cdktf.stringToTerraform(this._valueSelectionStrategy),
      enumeration_value: cdktf.listMapper(lexSlotTypeEnumerationValueToTerraform)(this._enumerationValue),
      timeouts: lexSlotTypeTimeoutsToTerraform(this._timeouts),
    };
  }
}
