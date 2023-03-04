// https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafregionalSqlInjectionMatchSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set#id WafregionalSqlInjectionMatchSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set#name WafregionalSqlInjectionMatchSet#name}
  */
  readonly name: string;
  /**
  * sql_injection_match_tuple block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set#sql_injection_match_tuple WafregionalSqlInjectionMatchSet#sql_injection_match_tuple}
  */
  readonly sqlInjectionMatchTuple?: WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple[] | cdktf.IResolvable;
}
export interface WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set#data WafregionalSqlInjectionMatchSet#data}
  */
  readonly data?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set#type WafregionalSqlInjectionMatchSet#type}
  */
  readonly type: string;
}

export function wafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchToTerraform(struct?: WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference | WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._data = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._data = value.data;
      this._type = value.type;
    }
  }

  // data - computed: false, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set#text_transformation WafregionalSqlInjectionMatchSet#text_transformation}
  */
  readonly textTransformation: string;
  /**
  * field_to_match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set#field_to_match WafregionalSqlInjectionMatchSet#field_to_match}
  */
  readonly fieldToMatch: WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch;
}

export function wafregionalSqlInjectionMatchSetSqlInjectionMatchTupleToTerraform(struct?: WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text_transformation: cdktf.stringToTerraform(struct!.textTransformation),
    field_to_match: wafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchToTerraform(struct!.fieldToMatch),
  }
}

export class WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._textTransformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.textTransformation = this._textTransformation;
    }
    if (this._fieldToMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._textTransformation = undefined;
      this._fieldToMatch.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._textTransformation = value.textTransformation;
      this._fieldToMatch.internalValue = value.fieldToMatch;
    }
  }

  // text_transformation - computed: false, optional: false, required: true
  private _textTransformation?: string; 
  public get textTransformation() {
    return this.getStringAttribute('text_transformation');
  }
  public set textTransformation(value: string) {
    this._textTransformation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textTransformationInput() {
    return this._textTransformation;
  }

  // field_to_match - computed: false, optional: false, required: true
  private _fieldToMatch = new WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference(this, "field_to_match");
  public get fieldToMatch() {
    return this._fieldToMatch;
  }
  public putFieldToMatch(value: WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch) {
    this._fieldToMatch.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldToMatchInput() {
    return this._fieldToMatch.internalValue;
  }
}

export class WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList extends cdktf.ComplexList {
  public internalValue? : WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference {
    return new WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set aws_wafregional_sql_injection_match_set}
*/
export class WafregionalSqlInjectionMatchSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_wafregional_sql_injection_match_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set aws_wafregional_sql_injection_match_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafregionalSqlInjectionMatchSetConfig
  */
  public constructor(scope: Construct, id: string, config: WafregionalSqlInjectionMatchSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_wafregional_sql_injection_match_set',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
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
    this._id = config.id;
    this._name = config.name;
    this._sqlInjectionMatchTuple.internalValue = config.sqlInjectionMatchTuple;
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

  // sql_injection_match_tuple - computed: false, optional: true, required: false
  private _sqlInjectionMatchTuple = new WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList(this, "sql_injection_match_tuple", true);
  public get sqlInjectionMatchTuple() {
    return this._sqlInjectionMatchTuple;
  }
  public putSqlInjectionMatchTuple(value: WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple[] | cdktf.IResolvable) {
    this._sqlInjectionMatchTuple.internalValue = value;
  }
  public resetSqlInjectionMatchTuple() {
    this._sqlInjectionMatchTuple.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlInjectionMatchTupleInput() {
    return this._sqlInjectionMatchTuple.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      sql_injection_match_tuple: cdktf.listMapper(wafregionalSqlInjectionMatchSetSqlInjectionMatchTupleToTerraform, true)(this._sqlInjectionMatchTuple.internalValue),
    };
  }
}
