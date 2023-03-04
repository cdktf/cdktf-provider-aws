// https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsoadminInstanceAccessControlAttributesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes#id SsoadminInstanceAccessControlAttributes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes#instance_arn SsoadminInstanceAccessControlAttributes#instance_arn}
  */
  readonly instanceArn: string;
  /**
  * attribute block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes#attribute SsoadminInstanceAccessControlAttributes#attribute}
  */
  readonly attribute: SsoadminInstanceAccessControlAttributesAttribute[] | cdktf.IResolvable;
}
export interface SsoadminInstanceAccessControlAttributesAttributeValue {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes#source SsoadminInstanceAccessControlAttributes#source}
  */
  readonly source: string[];
}

export function ssoadminInstanceAccessControlAttributesAttributeValueToTerraform(struct?: SsoadminInstanceAccessControlAttributesAttributeValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.source),
  }
}

export class SsoadminInstanceAccessControlAttributesAttributeValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SsoadminInstanceAccessControlAttributesAttributeValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsoadminInstanceAccessControlAttributesAttributeValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source = value.source;
    }
  }

  // source - computed: false, optional: false, required: true
  private _source?: string[]; 
  public get source() {
    return cdktf.Fn.tolist(this.getListAttribute('source'));
  }
  public set source(value: string[]) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class SsoadminInstanceAccessControlAttributesAttributeValueList extends cdktf.ComplexList {
  public internalValue? : SsoadminInstanceAccessControlAttributesAttributeValue[] | cdktf.IResolvable

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
  public get(index: number): SsoadminInstanceAccessControlAttributesAttributeValueOutputReference {
    return new SsoadminInstanceAccessControlAttributesAttributeValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsoadminInstanceAccessControlAttributesAttribute {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes#key SsoadminInstanceAccessControlAttributes#key}
  */
  readonly key: string;
  /**
  * value block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes#value SsoadminInstanceAccessControlAttributes#value}
  */
  readonly value: SsoadminInstanceAccessControlAttributesAttributeValue[] | cdktf.IResolvable;
}

export function ssoadminInstanceAccessControlAttributesAttributeToTerraform(struct?: SsoadminInstanceAccessControlAttributesAttribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.listMapper(ssoadminInstanceAccessControlAttributesAttributeValueToTerraform, true)(struct!.value),
  }
}

export class SsoadminInstanceAccessControlAttributesAttributeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SsoadminInstanceAccessControlAttributesAttribute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsoadminInstanceAccessControlAttributesAttribute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value.internalValue = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value = new SsoadminInstanceAccessControlAttributesAttributeValueList(this, "value", true);
  public get value() {
    return this._value;
  }
  public putValue(value: SsoadminInstanceAccessControlAttributesAttributeValue[] | cdktf.IResolvable) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class SsoadminInstanceAccessControlAttributesAttributeList extends cdktf.ComplexList {
  public internalValue? : SsoadminInstanceAccessControlAttributesAttribute[] | cdktf.IResolvable

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
  public get(index: number): SsoadminInstanceAccessControlAttributesAttributeOutputReference {
    return new SsoadminInstanceAccessControlAttributesAttributeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes aws_ssoadmin_instance_access_control_attributes}
*/
export class SsoadminInstanceAccessControlAttributes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ssoadmin_instance_access_control_attributes";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes aws_ssoadmin_instance_access_control_attributes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsoadminInstanceAccessControlAttributesConfig
  */
  public constructor(scope: Construct, id: string, config: SsoadminInstanceAccessControlAttributesConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssoadmin_instance_access_control_attributes',
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
    this._instanceArn = config.instanceArn;
    this._attribute.internalValue = config.attribute;
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

  // instance_arn - computed: false, optional: false, required: true
  private _instanceArn?: string; 
  public get instanceArn() {
    return this.getStringAttribute('instance_arn');
  }
  public set instanceArn(value: string) {
    this._instanceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceArnInput() {
    return this._instanceArn;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_reason - computed: true, optional: false, required: false
  public get statusReason() {
    return this.getStringAttribute('status_reason');
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute = new SsoadminInstanceAccessControlAttributesAttributeList(this, "attribute", true);
  public get attribute() {
    return this._attribute;
  }
  public putAttribute(value: SsoadminInstanceAccessControlAttributesAttribute[] | cdktf.IResolvable) {
    this._attribute.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_arn: cdktf.stringToTerraform(this._instanceArn),
      attribute: cdktf.listMapper(ssoadminInstanceAccessControlAttributesAttributeToTerraform, true)(this._attribute.internalValue),
    };
  }
}
