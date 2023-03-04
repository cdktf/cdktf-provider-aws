// https://www.terraform.io/docs/providers/aws/d/datapipeline_pipeline_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsDatapipelinePipelineDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/datapipeline_pipeline_definition#id DataAwsDatapipelinePipelineDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/datapipeline_pipeline_definition#pipeline_id DataAwsDatapipelinePipelineDefinition#pipeline_id}
  */
  readonly pipelineId: string;
  /**
  * parameter_value block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/datapipeline_pipeline_definition#parameter_value DataAwsDatapipelinePipelineDefinition#parameter_value}
  */
  readonly parameterValue?: DataAwsDatapipelinePipelineDefinitionParameterValue[] | cdktf.IResolvable;
}
export interface DataAwsDatapipelinePipelineDefinitionParameterObjectAttribute {
}

export function dataAwsDatapipelinePipelineDefinitionParameterObjectAttributeToTerraform(struct?: DataAwsDatapipelinePipelineDefinitionParameterObjectAttribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsDatapipelinePipelineDefinitionParameterObjectAttribute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsDatapipelinePipelineDefinitionParameterObjectAttribute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // string_value - computed: true, optional: false, required: false
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
}

export class DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference {
    return new DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsDatapipelinePipelineDefinitionParameterObject {
}

export function dataAwsDatapipelinePipelineDefinitionParameterObjectToTerraform(struct?: DataAwsDatapipelinePipelineDefinitionParameterObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsDatapipelinePipelineDefinitionParameterObject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsDatapipelinePipelineDefinitionParameterObject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute - computed: true, optional: false, required: false
  private _attribute = new DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList(this, "attribute", true);
  public get attribute() {
    return this._attribute;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataAwsDatapipelinePipelineDefinitionParameterObjectList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference {
    return new DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsDatapipelinePipelineDefinitionPipelineObjectField {
}

export function dataAwsDatapipelinePipelineDefinitionPipelineObjectFieldToTerraform(struct?: DataAwsDatapipelinePipelineDefinitionPipelineObjectField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsDatapipelinePipelineDefinitionPipelineObjectField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsDatapipelinePipelineDefinitionPipelineObjectField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // ref_value - computed: true, optional: false, required: false
  public get refValue() {
    return this.getStringAttribute('ref_value');
  }

  // string_value - computed: true, optional: false, required: false
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
}

export class DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference {
    return new DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsDatapipelinePipelineDefinitionPipelineObject {
}

export function dataAwsDatapipelinePipelineDefinitionPipelineObjectToTerraform(struct?: DataAwsDatapipelinePipelineDefinitionPipelineObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsDatapipelinePipelineDefinitionPipelineObject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsDatapipelinePipelineDefinitionPipelineObject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field - computed: true, optional: false, required: false
  private _field = new DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList(this, "field", true);
  public get field() {
    return this._field;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAwsDatapipelinePipelineDefinitionPipelineObjectList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference {
    return new DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsDatapipelinePipelineDefinitionParameterValue {
}

export function dataAwsDatapipelinePipelineDefinitionParameterValueToTerraform(struct?: DataAwsDatapipelinePipelineDefinitionParameterValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsDatapipelinePipelineDefinitionParameterValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsDatapipelinePipelineDefinitionParameterValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // string_value - computed: true, optional: false, required: false
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
}

export class DataAwsDatapipelinePipelineDefinitionParameterValueList extends cdktf.ComplexList {
  public internalValue? : DataAwsDatapipelinePipelineDefinitionParameterValue[] | cdktf.IResolvable

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
  public get(index: number): DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference {
    return new DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/datapipeline_pipeline_definition aws_datapipeline_pipeline_definition}
*/
export class DataAwsDatapipelinePipelineDefinition extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_datapipeline_pipeline_definition";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/datapipeline_pipeline_definition aws_datapipeline_pipeline_definition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsDatapipelinePipelineDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsDatapipelinePipelineDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_datapipeline_pipeline_definition',
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
    this._pipelineId = config.pipelineId;
    this._parameterValue.internalValue = config.parameterValue;
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

  // parameter_object - computed: true, optional: false, required: false
  private _parameterObject = new DataAwsDatapipelinePipelineDefinitionParameterObjectList(this, "parameter_object", true);
  public get parameterObject() {
    return this._parameterObject;
  }

  // pipeline_id - computed: false, optional: false, required: true
  private _pipelineId?: string; 
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }
  public set pipelineId(value: string) {
    this._pipelineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineIdInput() {
    return this._pipelineId;
  }

  // pipeline_object - computed: true, optional: false, required: false
  private _pipelineObject = new DataAwsDatapipelinePipelineDefinitionPipelineObjectList(this, "pipeline_object", true);
  public get pipelineObject() {
    return this._pipelineObject;
  }

  // parameter_value - computed: false, optional: true, required: false
  private _parameterValue = new DataAwsDatapipelinePipelineDefinitionParameterValueList(this, "parameter_value", true);
  public get parameterValue() {
    return this._parameterValue;
  }
  public putParameterValue(value: DataAwsDatapipelinePipelineDefinitionParameterValue[] | cdktf.IResolvable) {
    this._parameterValue.internalValue = value;
  }
  public resetParameterValue() {
    this._parameterValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueInput() {
    return this._parameterValue.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      pipeline_id: cdktf.stringToTerraform(this._pipelineId),
      parameter_value: cdktf.listMapper(dataAwsDatapipelinePipelineDefinitionParameterValueToTerraform, true)(this._parameterValue.internalValue),
    };
  }
}
