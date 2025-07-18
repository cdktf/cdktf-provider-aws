/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_classifier
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlueClassifierConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_classifier#id GlueClassifier#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_classifier#name GlueClassifier#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_classifier#region GlueClassifier#region}
  */
  readonly region?: string;
  /**
  * csv_classifier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_classifier#csv_classifier GlueClassifier#csv_classifier}
  */
  readonly csvClassifier?: GlueClassifierCsvClassifier;
  /**
  * grok_classifier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_classifier#grok_classifier GlueClassifier#grok_classifier}
  */
  readonly grokClassifier?: GlueClassifierGrokClassifier;
  /**
  * json_classifier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_classifier#json_classifier GlueClassifier#json_classifier}
  */
  readonly jsonClassifier?: GlueClassifierJsonClassifier;
  /**
  * xml_classifier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_classifier#xml_classifier GlueClassifier#xml_classifier}
  */
  readonly xmlClassifier?: GlueClassifierXmlClassifier;
}
export interface GlueClassifierCsvClassifier {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_classifier#allow_single_column GlueClassifier#allow_single_column}
  */
  readonly allowSingleColumn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_classifier#contains_header GlueClassifier#contains_header}
  */
  readonly containsHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_classifier#custom_datatype_configured GlueClassifier#custom_datatype_configured}
  */
  readonly customDatatypeConfigured?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_classifier#custom_datatypes GlueClassifier#custom_datatypes}
  */
  readonly customDatatypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_classifier#delimiter GlueClassifier#delimiter}
  */
  readonly delimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_classifier#disable_value_trimming GlueClassifier#disable_value_trimming}
  */
  readonly disableValueTrimming?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_classifier#header GlueClassifier#header}
  */
  readonly header?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_classifier#quote_symbol GlueClassifier#quote_symbol}
  */
  readonly quoteSymbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_classifier#serde GlueClassifier#serde}
  */
  readonly serde?: string;
}

export function glueClassifierCsvClassifierToTerraform(struct?: GlueClassifierCsvClassifierOutputReference | GlueClassifierCsvClassifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_single_column: cdktf.booleanToTerraform(struct!.allowSingleColumn),
    contains_header: cdktf.stringToTerraform(struct!.containsHeader),
    custom_datatype_configured: cdktf.booleanToTerraform(struct!.customDatatypeConfigured),
    custom_datatypes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.customDatatypes),
    delimiter: cdktf.stringToTerraform(struct!.delimiter),
    disable_value_trimming: cdktf.booleanToTerraform(struct!.disableValueTrimming),
    header: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.header),
    quote_symbol: cdktf.stringToTerraform(struct!.quoteSymbol),
    serde: cdktf.stringToTerraform(struct!.serde),
  }
}


export function glueClassifierCsvClassifierToHclTerraform(struct?: GlueClassifierCsvClassifierOutputReference | GlueClassifierCsvClassifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_single_column: {
      value: cdktf.booleanToHclTerraform(struct!.allowSingleColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    contains_header: {
      value: cdktf.stringToHclTerraform(struct!.containsHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_datatype_configured: {
      value: cdktf.booleanToHclTerraform(struct!.customDatatypeConfigured),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_datatypes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.customDatatypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    delimiter: {
      value: cdktf.stringToHclTerraform(struct!.delimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_value_trimming: {
      value: cdktf.booleanToHclTerraform(struct!.disableValueTrimming),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    header: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.header),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    quote_symbol: {
      value: cdktf.stringToHclTerraform(struct!.quoteSymbol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serde: {
      value: cdktf.stringToHclTerraform(struct!.serde),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueClassifierCsvClassifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlueClassifierCsvClassifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowSingleColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowSingleColumn = this._allowSingleColumn;
    }
    if (this._containsHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.containsHeader = this._containsHeader;
    }
    if (this._customDatatypeConfigured !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDatatypeConfigured = this._customDatatypeConfigured;
    }
    if (this._customDatatypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDatatypes = this._customDatatypes;
    }
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    if (this._disableValueTrimming !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableValueTrimming = this._disableValueTrimming;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._quoteSymbol !== undefined) {
      hasAnyValues = true;
      internalValueResult.quoteSymbol = this._quoteSymbol;
    }
    if (this._serde !== undefined) {
      hasAnyValues = true;
      internalValueResult.serde = this._serde;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueClassifierCsvClassifier | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowSingleColumn = undefined;
      this._containsHeader = undefined;
      this._customDatatypeConfigured = undefined;
      this._customDatatypes = undefined;
      this._delimiter = undefined;
      this._disableValueTrimming = undefined;
      this._header = undefined;
      this._quoteSymbol = undefined;
      this._serde = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowSingleColumn = value.allowSingleColumn;
      this._containsHeader = value.containsHeader;
      this._customDatatypeConfigured = value.customDatatypeConfigured;
      this._customDatatypes = value.customDatatypes;
      this._delimiter = value.delimiter;
      this._disableValueTrimming = value.disableValueTrimming;
      this._header = value.header;
      this._quoteSymbol = value.quoteSymbol;
      this._serde = value.serde;
    }
  }

  // allow_single_column - computed: false, optional: true, required: false
  private _allowSingleColumn?: boolean | cdktf.IResolvable; 
  public get allowSingleColumn() {
    return this.getBooleanAttribute('allow_single_column');
  }
  public set allowSingleColumn(value: boolean | cdktf.IResolvable) {
    this._allowSingleColumn = value;
  }
  public resetAllowSingleColumn() {
    this._allowSingleColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSingleColumnInput() {
    return this._allowSingleColumn;
  }

  // contains_header - computed: false, optional: true, required: false
  private _containsHeader?: string; 
  public get containsHeader() {
    return this.getStringAttribute('contains_header');
  }
  public set containsHeader(value: string) {
    this._containsHeader = value;
  }
  public resetContainsHeader() {
    this._containsHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsHeaderInput() {
    return this._containsHeader;
  }

  // custom_datatype_configured - computed: false, optional: true, required: false
  private _customDatatypeConfigured?: boolean | cdktf.IResolvable; 
  public get customDatatypeConfigured() {
    return this.getBooleanAttribute('custom_datatype_configured');
  }
  public set customDatatypeConfigured(value: boolean | cdktf.IResolvable) {
    this._customDatatypeConfigured = value;
  }
  public resetCustomDatatypeConfigured() {
    this._customDatatypeConfigured = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDatatypeConfiguredInput() {
    return this._customDatatypeConfigured;
  }

  // custom_datatypes - computed: false, optional: true, required: false
  private _customDatatypes?: string[]; 
  public get customDatatypes() {
    return this.getListAttribute('custom_datatypes');
  }
  public set customDatatypes(value: string[]) {
    this._customDatatypes = value;
  }
  public resetCustomDatatypes() {
    this._customDatatypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDatatypesInput() {
    return this._customDatatypes;
  }

  // delimiter - computed: false, optional: true, required: false
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  public resetDelimiter() {
    this._delimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }

  // disable_value_trimming - computed: false, optional: true, required: false
  private _disableValueTrimming?: boolean | cdktf.IResolvable; 
  public get disableValueTrimming() {
    return this.getBooleanAttribute('disable_value_trimming');
  }
  public set disableValueTrimming(value: boolean | cdktf.IResolvable) {
    this._disableValueTrimming = value;
  }
  public resetDisableValueTrimming() {
    this._disableValueTrimming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableValueTrimmingInput() {
    return this._disableValueTrimming;
  }

  // header - computed: false, optional: true, required: false
  private _header?: string[]; 
  public get header() {
    return this.getListAttribute('header');
  }
  public set header(value: string[]) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // quote_symbol - computed: false, optional: true, required: false
  private _quoteSymbol?: string; 
  public get quoteSymbol() {
    return this.getStringAttribute('quote_symbol');
  }
  public set quoteSymbol(value: string) {
    this._quoteSymbol = value;
  }
  public resetQuoteSymbol() {
    this._quoteSymbol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quoteSymbolInput() {
    return this._quoteSymbol;
  }

  // serde - computed: true, optional: true, required: false
  private _serde?: string; 
  public get serde() {
    return this.getStringAttribute('serde');
  }
  public set serde(value: string) {
    this._serde = value;
  }
  public resetSerde() {
    this._serde = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serdeInput() {
    return this._serde;
  }
}
export interface GlueClassifierGrokClassifier {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_classifier#classification GlueClassifier#classification}
  */
  readonly classification: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_classifier#custom_patterns GlueClassifier#custom_patterns}
  */
  readonly customPatterns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_classifier#grok_pattern GlueClassifier#grok_pattern}
  */
  readonly grokPattern: string;
}

export function glueClassifierGrokClassifierToTerraform(struct?: GlueClassifierGrokClassifierOutputReference | GlueClassifierGrokClassifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    classification: cdktf.stringToTerraform(struct!.classification),
    custom_patterns: cdktf.stringToTerraform(struct!.customPatterns),
    grok_pattern: cdktf.stringToTerraform(struct!.grokPattern),
  }
}


export function glueClassifierGrokClassifierToHclTerraform(struct?: GlueClassifierGrokClassifierOutputReference | GlueClassifierGrokClassifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    classification: {
      value: cdktf.stringToHclTerraform(struct!.classification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_patterns: {
      value: cdktf.stringToHclTerraform(struct!.customPatterns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grok_pattern: {
      value: cdktf.stringToHclTerraform(struct!.grokPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueClassifierGrokClassifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlueClassifierGrokClassifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classification !== undefined) {
      hasAnyValues = true;
      internalValueResult.classification = this._classification;
    }
    if (this._customPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPatterns = this._customPatterns;
    }
    if (this._grokPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.grokPattern = this._grokPattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueClassifierGrokClassifier | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._classification = undefined;
      this._customPatterns = undefined;
      this._grokPattern = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._classification = value.classification;
      this._customPatterns = value.customPatterns;
      this._grokPattern = value.grokPattern;
    }
  }

  // classification - computed: false, optional: false, required: true
  private _classification?: string; 
  public get classification() {
    return this.getStringAttribute('classification');
  }
  public set classification(value: string) {
    this._classification = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classificationInput() {
    return this._classification;
  }

  // custom_patterns - computed: false, optional: true, required: false
  private _customPatterns?: string; 
  public get customPatterns() {
    return this.getStringAttribute('custom_patterns');
  }
  public set customPatterns(value: string) {
    this._customPatterns = value;
  }
  public resetCustomPatterns() {
    this._customPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPatternsInput() {
    return this._customPatterns;
  }

  // grok_pattern - computed: false, optional: false, required: true
  private _grokPattern?: string; 
  public get grokPattern() {
    return this.getStringAttribute('grok_pattern');
  }
  public set grokPattern(value: string) {
    this._grokPattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get grokPatternInput() {
    return this._grokPattern;
  }
}
export interface GlueClassifierJsonClassifier {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_classifier#json_path GlueClassifier#json_path}
  */
  readonly jsonPath: string;
}

export function glueClassifierJsonClassifierToTerraform(struct?: GlueClassifierJsonClassifierOutputReference | GlueClassifierJsonClassifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json_path: cdktf.stringToTerraform(struct!.jsonPath),
  }
}


export function glueClassifierJsonClassifierToHclTerraform(struct?: GlueClassifierJsonClassifierOutputReference | GlueClassifierJsonClassifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    json_path: {
      value: cdktf.stringToHclTerraform(struct!.jsonPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueClassifierJsonClassifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlueClassifierJsonClassifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonPath = this._jsonPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueClassifierJsonClassifier | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jsonPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jsonPath = value.jsonPath;
    }
  }

  // json_path - computed: false, optional: false, required: true
  private _jsonPath?: string; 
  public get jsonPath() {
    return this.getStringAttribute('json_path');
  }
  public set jsonPath(value: string) {
    this._jsonPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonPathInput() {
    return this._jsonPath;
  }
}
export interface GlueClassifierXmlClassifier {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_classifier#classification GlueClassifier#classification}
  */
  readonly classification: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_classifier#row_tag GlueClassifier#row_tag}
  */
  readonly rowTag: string;
}

export function glueClassifierXmlClassifierToTerraform(struct?: GlueClassifierXmlClassifierOutputReference | GlueClassifierXmlClassifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    classification: cdktf.stringToTerraform(struct!.classification),
    row_tag: cdktf.stringToTerraform(struct!.rowTag),
  }
}


export function glueClassifierXmlClassifierToHclTerraform(struct?: GlueClassifierXmlClassifierOutputReference | GlueClassifierXmlClassifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    classification: {
      value: cdktf.stringToHclTerraform(struct!.classification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    row_tag: {
      value: cdktf.stringToHclTerraform(struct!.rowTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueClassifierXmlClassifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlueClassifierXmlClassifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classification !== undefined) {
      hasAnyValues = true;
      internalValueResult.classification = this._classification;
    }
    if (this._rowTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowTag = this._rowTag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueClassifierXmlClassifier | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._classification = undefined;
      this._rowTag = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._classification = value.classification;
      this._rowTag = value.rowTag;
    }
  }

  // classification - computed: false, optional: false, required: true
  private _classification?: string; 
  public get classification() {
    return this.getStringAttribute('classification');
  }
  public set classification(value: string) {
    this._classification = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classificationInput() {
    return this._classification;
  }

  // row_tag - computed: false, optional: false, required: true
  private _rowTag?: string; 
  public get rowTag() {
    return this.getStringAttribute('row_tag');
  }
  public set rowTag(value: string) {
    this._rowTag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rowTagInput() {
    return this._rowTag;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_classifier aws_glue_classifier}
*/
export class GlueClassifier extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_glue_classifier";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GlueClassifier resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GlueClassifier to import
  * @param importFromId The id of the existing GlueClassifier that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_classifier#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GlueClassifier to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_glue_classifier", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_classifier aws_glue_classifier} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlueClassifierConfig
  */
  public constructor(scope: Construct, id: string, config: GlueClassifierConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_classifier',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.4.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._csvClassifier.internalValue = config.csvClassifier;
    this._grokClassifier.internalValue = config.grokClassifier;
    this._jsonClassifier.internalValue = config.jsonClassifier;
    this._xmlClassifier.internalValue = config.xmlClassifier;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // csv_classifier - computed: false, optional: true, required: false
  private _csvClassifier = new GlueClassifierCsvClassifierOutputReference(this, "csv_classifier");
  public get csvClassifier() {
    return this._csvClassifier;
  }
  public putCsvClassifier(value: GlueClassifierCsvClassifier) {
    this._csvClassifier.internalValue = value;
  }
  public resetCsvClassifier() {
    this._csvClassifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvClassifierInput() {
    return this._csvClassifier.internalValue;
  }

  // grok_classifier - computed: false, optional: true, required: false
  private _grokClassifier = new GlueClassifierGrokClassifierOutputReference(this, "grok_classifier");
  public get grokClassifier() {
    return this._grokClassifier;
  }
  public putGrokClassifier(value: GlueClassifierGrokClassifier) {
    this._grokClassifier.internalValue = value;
  }
  public resetGrokClassifier() {
    this._grokClassifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grokClassifierInput() {
    return this._grokClassifier.internalValue;
  }

  // json_classifier - computed: false, optional: true, required: false
  private _jsonClassifier = new GlueClassifierJsonClassifierOutputReference(this, "json_classifier");
  public get jsonClassifier() {
    return this._jsonClassifier;
  }
  public putJsonClassifier(value: GlueClassifierJsonClassifier) {
    this._jsonClassifier.internalValue = value;
  }
  public resetJsonClassifier() {
    this._jsonClassifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonClassifierInput() {
    return this._jsonClassifier.internalValue;
  }

  // xml_classifier - computed: false, optional: true, required: false
  private _xmlClassifier = new GlueClassifierXmlClassifierOutputReference(this, "xml_classifier");
  public get xmlClassifier() {
    return this._xmlClassifier;
  }
  public putXmlClassifier(value: GlueClassifierXmlClassifier) {
    this._xmlClassifier.internalValue = value;
  }
  public resetXmlClassifier() {
    this._xmlClassifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlClassifierInput() {
    return this._xmlClassifier.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      csv_classifier: glueClassifierCsvClassifierToTerraform(this._csvClassifier.internalValue),
      grok_classifier: glueClassifierGrokClassifierToTerraform(this._grokClassifier.internalValue),
      json_classifier: glueClassifierJsonClassifierToTerraform(this._jsonClassifier.internalValue),
      xml_classifier: glueClassifierXmlClassifierToTerraform(this._xmlClassifier.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csv_classifier: {
        value: glueClassifierCsvClassifierToHclTerraform(this._csvClassifier.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlueClassifierCsvClassifierList",
      },
      grok_classifier: {
        value: glueClassifierGrokClassifierToHclTerraform(this._grokClassifier.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlueClassifierGrokClassifierList",
      },
      json_classifier: {
        value: glueClassifierJsonClassifierToHclTerraform(this._jsonClassifier.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlueClassifierJsonClassifierList",
      },
      xml_classifier: {
        value: glueClassifierXmlClassifierToHclTerraform(this._xmlClassifier.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlueClassifierXmlClassifierList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
