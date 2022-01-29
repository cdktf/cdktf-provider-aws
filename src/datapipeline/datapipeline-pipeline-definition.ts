// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Data Pipeline
*/
export interface DatapipelinePipelineDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#pipeline_id DatapipelinePipelineDefinition#pipeline_id}
  */
  readonly pipelineId: string;
  /**
  * parameter_object block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#parameter_object DatapipelinePipelineDefinition#parameter_object}
  */
  readonly parameterObject?: DatapipelinePipelineDefinitionParameterObject[] | cdktf.IResolvable;
  /**
  * parameter_value block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#parameter_value DatapipelinePipelineDefinition#parameter_value}
  */
  readonly parameterValue?: DatapipelinePipelineDefinitionParameterValue[] | cdktf.IResolvable;
  /**
  * pipeline_object block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#pipeline_object DatapipelinePipelineDefinition#pipeline_object}
  */
  readonly pipelineObject: DatapipelinePipelineDefinitionPipelineObject[] | cdktf.IResolvable;
}
export interface DatapipelinePipelineDefinitionParameterObjectAttribute {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#key DatapipelinePipelineDefinition#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#string_value DatapipelinePipelineDefinition#string_value}
  */
  readonly stringValue: string;
}

export function datapipelinePipelineDefinitionParameterObjectAttributeToTerraform(struct?: DatapipelinePipelineDefinitionParameterObjectAttribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
  }
}

export interface DatapipelinePipelineDefinitionParameterObject {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#id DatapipelinePipelineDefinition#id}
  */
  readonly id: string;
  /**
  * attribute block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#attribute DatapipelinePipelineDefinition#attribute}
  */
  readonly attribute?: DatapipelinePipelineDefinitionParameterObjectAttribute[] | cdktf.IResolvable;
}

export function datapipelinePipelineDefinitionParameterObjectToTerraform(struct?: DatapipelinePipelineDefinitionParameterObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    attribute: cdktf.listMapper(datapipelinePipelineDefinitionParameterObjectAttributeToTerraform)(struct!.attribute),
  }
}

export interface DatapipelinePipelineDefinitionParameterValue {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#id DatapipelinePipelineDefinition#id}
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#string_value DatapipelinePipelineDefinition#string_value}
  */
  readonly stringValue: string;
}

export function datapipelinePipelineDefinitionParameterValueToTerraform(struct?: DatapipelinePipelineDefinitionParameterValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
  }
}

export interface DatapipelinePipelineDefinitionPipelineObjectField {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#key DatapipelinePipelineDefinition#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#ref_value DatapipelinePipelineDefinition#ref_value}
  */
  readonly refValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#string_value DatapipelinePipelineDefinition#string_value}
  */
  readonly stringValue?: string;
}

export function datapipelinePipelineDefinitionPipelineObjectFieldToTerraform(struct?: DatapipelinePipelineDefinitionPipelineObjectField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    ref_value: cdktf.stringToTerraform(struct!.refValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
  }
}

export interface DatapipelinePipelineDefinitionPipelineObject {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#id DatapipelinePipelineDefinition#id}
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#name DatapipelinePipelineDefinition#name}
  */
  readonly name: string;
  /**
  * field block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#field DatapipelinePipelineDefinition#field}
  */
  readonly field?: DatapipelinePipelineDefinitionPipelineObjectField[] | cdktf.IResolvable;
}

export function datapipelinePipelineDefinitionPipelineObjectToTerraform(struct?: DatapipelinePipelineDefinitionPipelineObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    field: cdktf.listMapper(datapipelinePipelineDefinitionPipelineObjectFieldToTerraform)(struct!.field),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition aws_datapipeline_pipeline_definition}
*/
export class DatapipelinePipelineDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_datapipeline_pipeline_definition";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition aws_datapipeline_pipeline_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatapipelinePipelineDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: DatapipelinePipelineDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_datapipeline_pipeline_definition',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._pipelineId = config.pipelineId;
    this._parameterObject = config.parameterObject;
    this._parameterValue = config.parameterValue;
    this._pipelineObject = config.pipelineObject;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // parameter_object - computed: false, optional: true, required: false
  private _parameterObject?: DatapipelinePipelineDefinitionParameterObject[] | cdktf.IResolvable; 
  public get parameterObject() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('parameter_object')));
  }
  public set parameterObject(value: DatapipelinePipelineDefinitionParameterObject[] | cdktf.IResolvable) {
    this._parameterObject = value;
  }
  public resetParameterObject() {
    this._parameterObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterObjectInput() {
    return this._parameterObject;
  }

  // parameter_value - computed: false, optional: true, required: false
  private _parameterValue?: DatapipelinePipelineDefinitionParameterValue[] | cdktf.IResolvable; 
  public get parameterValue() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('parameter_value')));
  }
  public set parameterValue(value: DatapipelinePipelineDefinitionParameterValue[] | cdktf.IResolvable) {
    this._parameterValue = value;
  }
  public resetParameterValue() {
    this._parameterValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueInput() {
    return this._parameterValue;
  }

  // pipeline_object - computed: false, optional: false, required: true
  private _pipelineObject?: DatapipelinePipelineDefinitionPipelineObject[] | cdktf.IResolvable; 
  public get pipelineObject() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('pipeline_object')));
  }
  public set pipelineObject(value: DatapipelinePipelineDefinitionPipelineObject[] | cdktf.IResolvable) {
    this._pipelineObject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineObjectInput() {
    return this._pipelineObject;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      pipeline_id: cdktf.stringToTerraform(this._pipelineId),
      parameter_object: cdktf.listMapper(datapipelinePipelineDefinitionParameterObjectToTerraform)(this._parameterObject),
      parameter_value: cdktf.listMapper(datapipelinePipelineDefinitionParameterValueToTerraform)(this._parameterValue),
      pipeline_object: cdktf.listMapper(datapipelinePipelineDefinitionPipelineObjectToTerraform)(this._pipelineObject),
    };
  }
}
