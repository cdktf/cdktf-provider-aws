/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/wafregional_xss_match_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafregionalXssMatchSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/wafregional_xss_match_set#id WafregionalXssMatchSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/wafregional_xss_match_set#name WafregionalXssMatchSet#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/wafregional_xss_match_set#region WafregionalXssMatchSet#region}
  */
  readonly region?: string;
  /**
  * xss_match_tuple block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/wafregional_xss_match_set#xss_match_tuple WafregionalXssMatchSet#xss_match_tuple}
  */
  readonly xssMatchTuple?: WafregionalXssMatchSetXssMatchTuple[] | cdktf.IResolvable;
}
export interface WafregionalXssMatchSetXssMatchTupleFieldToMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/wafregional_xss_match_set#data WafregionalXssMatchSet#data}
  */
  readonly data?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/wafregional_xss_match_set#type WafregionalXssMatchSet#type}
  */
  readonly type: string;
}

export function wafregionalXssMatchSetXssMatchTupleFieldToMatchToTerraform(struct?: WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference | WafregionalXssMatchSetXssMatchTupleFieldToMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function wafregionalXssMatchSetXssMatchTupleFieldToMatchToHclTerraform(struct?: WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference | WafregionalXssMatchSetXssMatchTupleFieldToMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WafregionalXssMatchSetXssMatchTupleFieldToMatch | undefined {
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

  public set internalValue(value: WafregionalXssMatchSetXssMatchTupleFieldToMatch | undefined) {
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
export interface WafregionalXssMatchSetXssMatchTuple {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/wafregional_xss_match_set#text_transformation WafregionalXssMatchSet#text_transformation}
  */
  readonly textTransformation: string;
  /**
  * field_to_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/wafregional_xss_match_set#field_to_match WafregionalXssMatchSet#field_to_match}
  */
  readonly fieldToMatch: WafregionalXssMatchSetXssMatchTupleFieldToMatch;
}

export function wafregionalXssMatchSetXssMatchTupleToTerraform(struct?: WafregionalXssMatchSetXssMatchTuple | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text_transformation: cdktf.stringToTerraform(struct!.textTransformation),
    field_to_match: wafregionalXssMatchSetXssMatchTupleFieldToMatchToTerraform(struct!.fieldToMatch),
  }
}


export function wafregionalXssMatchSetXssMatchTupleToHclTerraform(struct?: WafregionalXssMatchSetXssMatchTuple | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text_transformation: {
      value: cdktf.stringToHclTerraform(struct!.textTransformation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_to_match: {
      value: wafregionalXssMatchSetXssMatchTupleFieldToMatchToHclTerraform(struct!.fieldToMatch),
      isBlock: true,
      type: "list",
      storageClassType: "WafregionalXssMatchSetXssMatchTupleFieldToMatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafregionalXssMatchSetXssMatchTupleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafregionalXssMatchSetXssMatchTuple | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WafregionalXssMatchSetXssMatchTuple | cdktf.IResolvable | undefined) {
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
  private _fieldToMatch = new WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference(this, "field_to_match");
  public get fieldToMatch() {
    return this._fieldToMatch;
  }
  public putFieldToMatch(value: WafregionalXssMatchSetXssMatchTupleFieldToMatch) {
    this._fieldToMatch.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldToMatchInput() {
    return this._fieldToMatch.internalValue;
  }
}

export class WafregionalXssMatchSetXssMatchTupleList extends cdktf.ComplexList {
  public internalValue? : WafregionalXssMatchSetXssMatchTuple[] | cdktf.IResolvable

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
  public get(index: number): WafregionalXssMatchSetXssMatchTupleOutputReference {
    return new WafregionalXssMatchSetXssMatchTupleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/wafregional_xss_match_set aws_wafregional_xss_match_set}
*/
export class WafregionalXssMatchSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_wafregional_xss_match_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WafregionalXssMatchSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WafregionalXssMatchSet to import
  * @param importFromId The id of the existing WafregionalXssMatchSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/wafregional_xss_match_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WafregionalXssMatchSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_wafregional_xss_match_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/wafregional_xss_match_set aws_wafregional_xss_match_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafregionalXssMatchSetConfig
  */
  public constructor(scope: Construct, id: string, config: WafregionalXssMatchSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_wafregional_xss_match_set',
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
    this._xssMatchTuple.internalValue = config.xssMatchTuple;
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

  // xss_match_tuple - computed: false, optional: true, required: false
  private _xssMatchTuple = new WafregionalXssMatchSetXssMatchTupleList(this, "xss_match_tuple", true);
  public get xssMatchTuple() {
    return this._xssMatchTuple;
  }
  public putXssMatchTuple(value: WafregionalXssMatchSetXssMatchTuple[] | cdktf.IResolvable) {
    this._xssMatchTuple.internalValue = value;
  }
  public resetXssMatchTuple() {
    this._xssMatchTuple.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xssMatchTupleInput() {
    return this._xssMatchTuple.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      xss_match_tuple: cdktf.listMapper(wafregionalXssMatchSetXssMatchTupleToTerraform, true)(this._xssMatchTuple.internalValue),
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
      xss_match_tuple: {
        value: cdktf.listMapperHcl(wafregionalXssMatchSetXssMatchTupleToHclTerraform, true)(this._xssMatchTuple.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WafregionalXssMatchSetXssMatchTupleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
