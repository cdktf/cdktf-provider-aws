// https://www.terraform.io/docs/providers/aws/r/glue_classifier.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlueClassifierConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#name GlueClassifier#name}
  */
  readonly name: string;
  /**
  * csv_classifier block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#csv_classifier GlueClassifier#csv_classifier}
  */
  readonly csvClassifier?: GlueClassifierCsvClassifier[];
  /**
  * grok_classifier block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#grok_classifier GlueClassifier#grok_classifier}
  */
  readonly grokClassifier?: GlueClassifierGrokClassifier[];
  /**
  * json_classifier block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#json_classifier GlueClassifier#json_classifier}
  */
  readonly jsonClassifier?: GlueClassifierJsonClassifier[];
  /**
  * xml_classifier block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#xml_classifier GlueClassifier#xml_classifier}
  */
  readonly xmlClassifier?: GlueClassifierXmlClassifier[];
}
export interface GlueClassifierCsvClassifier {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#allow_single_column GlueClassifier#allow_single_column}
  */
  readonly allowSingleColumn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#contains_header GlueClassifier#contains_header}
  */
  readonly containsHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#delimiter GlueClassifier#delimiter}
  */
  readonly delimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#disable_value_trimming GlueClassifier#disable_value_trimming}
  */
  readonly disableValueTrimming?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#header GlueClassifier#header}
  */
  readonly header?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#quote_symbol GlueClassifier#quote_symbol}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#classification GlueClassifier#classification}
  */
  readonly classification: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#custom_patterns GlueClassifier#custom_patterns}
  */
  readonly customPatterns?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#grok_pattern GlueClassifier#grok_pattern}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#json_path GlueClassifier#json_path}
  */
  readonly jsonPath: string;
}

function glueClassifierJsonClassifierToTerraform(struct?: GlueClassifierJsonClassifier): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    json_path: cdktf.stringToTerraform(struct!.jsonPath),
  }
}

export interface GlueClassifierXmlClassifier {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#classification GlueClassifier#classification}
  */
  readonly classification: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#row_tag GlueClassifier#row_tag}
  */
  readonly rowTag: string;
}

function glueClassifierXmlClassifierToTerraform(struct?: GlueClassifierXmlClassifier): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    classification: cdktf.stringToTerraform(struct!.classification),
    row_tag: cdktf.stringToTerraform(struct!.rowTag),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html aws_glue_classifier}
*/
export class GlueClassifier extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_glue_classifier";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html aws_glue_classifier} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlueClassifierConfig
  */
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
