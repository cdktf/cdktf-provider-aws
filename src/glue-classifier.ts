// https://www.terraform.io/docs/providers/aws/r/glue_classifier.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlueClassifierConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  /** csv_classifier block */
  readonly csvClassifier?: GlueClassifierCsvClassifier[];
  /** grok_classifier block */
  readonly grokClassifier?: GlueClassifierGrokClassifier[];
  /** json_classifier block */
  readonly jsonClassifier?: GlueClassifierJsonClassifier[];
  /** xml_classifier block */
  readonly xmlClassifier?: GlueClassifierXmlClassifier[];
}
export interface GlueClassifierCsvClassifier {
  readonly allowSingleColumn?: boolean;
  readonly containsHeader?: string;
  readonly delimiter?: string;
  readonly disableValueTrimming?: boolean;
  readonly header?: string[];
  readonly quoteSymbol?: string;
}

function glueClassifierCsvClassifierToTerraform(struct?: GlueClassifierCsvClassifier): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allow_single_column: cdktf.booleanToTerraform(struct!.allowSingleColumn),
    contains_header: cdktf.stringToTerraform(struct!.containsHeader),
    delimiter: cdktf.stringToTerraform(struct!.delimiter),
    disable_value_trimming: cdktf.booleanToTerraform(struct!.disableValueTrimming),
    header: cdktf.listMapper(cdktf.stringToTerraform)(struct!.header),
    quote_symbol: cdktf.stringToTerraform(struct!.quoteSymbol),
  }
}

export interface GlueClassifierGrokClassifier {
  readonly classification: string;
  readonly customPatterns?: string;
  readonly grokPattern: string;
}

function glueClassifierGrokClassifierToTerraform(struct?: GlueClassifierGrokClassifier): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    classification: cdktf.stringToTerraform(struct!.classification),
    custom_patterns: cdktf.stringToTerraform(struct!.customPatterns),
    grok_pattern: cdktf.stringToTerraform(struct!.grokPattern),
  }
}

export interface GlueClassifierJsonClassifier {
  readonly jsonPath: string;
}

function glueClassifierJsonClassifierToTerraform(struct?: GlueClassifierJsonClassifier): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    json_path: cdktf.stringToTerraform(struct!.jsonPath),
  }
}

export interface GlueClassifierXmlClassifier {
  readonly classification: string;
  readonly rowTag: string;
}

function glueClassifierXmlClassifierToTerraform(struct?: GlueClassifierXmlClassifier): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    classification: cdktf.stringToTerraform(struct!.classification),
    row_tag: cdktf.stringToTerraform(struct!.rowTag),
  }
}


// Resource

export class GlueClassifier extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GlueClassifierConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_classifier',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._csvClassifier = config.csvClassifier;
    this._grokClassifier = config.grokClassifier;
    this._jsonClassifier = config.jsonClassifier;
    this._xmlClassifier = config.xmlClassifier;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // csv_classifier - computed: false, optional: true, required: false
  private _csvClassifier?: GlueClassifierCsvClassifier[];
  public get csvClassifier() {
    return this.interpolationForAttribute('csv_classifier') as any;
  }
  public set csvClassifier(value: GlueClassifierCsvClassifier[] ) {
    this._csvClassifier = value;
  }
  public resetCsvClassifier() {
    this._csvClassifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvClassifierInput() {
    return this._csvClassifier
  }

  // grok_classifier - computed: false, optional: true, required: false
  private _grokClassifier?: GlueClassifierGrokClassifier[];
  public get grokClassifier() {
    return this.interpolationForAttribute('grok_classifier') as any;
  }
  public set grokClassifier(value: GlueClassifierGrokClassifier[] ) {
    this._grokClassifier = value;
  }
  public resetGrokClassifier() {
    this._grokClassifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grokClassifierInput() {
    return this._grokClassifier
  }

  // json_classifier - computed: false, optional: true, required: false
  private _jsonClassifier?: GlueClassifierJsonClassifier[];
  public get jsonClassifier() {
    return this.interpolationForAttribute('json_classifier') as any;
  }
  public set jsonClassifier(value: GlueClassifierJsonClassifier[] ) {
    this._jsonClassifier = value;
  }
  public resetJsonClassifier() {
    this._jsonClassifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonClassifierInput() {
    return this._jsonClassifier
  }

  // xml_classifier - computed: false, optional: true, required: false
  private _xmlClassifier?: GlueClassifierXmlClassifier[];
  public get xmlClassifier() {
    return this.interpolationForAttribute('xml_classifier') as any;
  }
  public set xmlClassifier(value: GlueClassifierXmlClassifier[] ) {
    this._xmlClassifier = value;
  }
  public resetXmlClassifier() {
    this._xmlClassifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlClassifierInput() {
    return this._xmlClassifier
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      csv_classifier: cdktf.listMapper(glueClassifierCsvClassifierToTerraform)(this._csvClassifier),
      grok_classifier: cdktf.listMapper(glueClassifierGrokClassifierToTerraform)(this._grokClassifier),
      json_classifier: cdktf.listMapper(glueClassifierJsonClassifierToTerraform)(this._jsonClassifier),
      xml_classifier: cdktf.listMapper(glueClassifierXmlClassifierToTerraform)(this._xmlClassifier),
    };
  }
}
