// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Glue
*/
export interface DataAwsGlueScriptConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#language DataAwsGlueScript#language}
  */
  readonly language?: string;
  /**
  * dag_edge block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#dag_edge DataAwsGlueScript#dag_edge}
  */
  readonly dagEdge: DataAwsGlueScriptDagEdge[] | cdktf.IResolvable;
  /**
  * dag_node block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#dag_node DataAwsGlueScript#dag_node}
  */
  readonly dagNode: DataAwsGlueScriptDagNode[] | cdktf.IResolvable;
}
export interface DataAwsGlueScriptDagEdge {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#source DataAwsGlueScript#source}
  */
  readonly source: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#target DataAwsGlueScript#target}
  */
  readonly target: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#target_parameter DataAwsGlueScript#target_parameter}
  */
  readonly targetParameter?: string;
}

export function dataAwsGlueScriptDagEdgeToTerraform(struct?: DataAwsGlueScriptDagEdge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: cdktf.stringToTerraform(struct!.source),
    target: cdktf.stringToTerraform(struct!.target),
    target_parameter: cdktf.stringToTerraform(struct!.targetParameter),
  }
}

export interface DataAwsGlueScriptDagNodeArgs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#name DataAwsGlueScript#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#param DataAwsGlueScript#param}
  */
  readonly param?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#value DataAwsGlueScript#value}
  */
  readonly value: string;
}

export function dataAwsGlueScriptDagNodeArgsToTerraform(struct?: DataAwsGlueScriptDagNodeArgs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    param: cdktf.booleanToTerraform(struct!.param),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface DataAwsGlueScriptDagNode {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#id DataAwsGlueScript#id}
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#line_number DataAwsGlueScript#line_number}
  */
  readonly lineNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#node_type DataAwsGlueScript#node_type}
  */
  readonly nodeType: string;
  /**
  * args block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#args DataAwsGlueScript#args}
  */
  readonly args: DataAwsGlueScriptDagNodeArgs[] | cdktf.IResolvable;
}

export function dataAwsGlueScriptDagNodeToTerraform(struct?: DataAwsGlueScriptDagNode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    line_number: cdktf.numberToTerraform(struct!.lineNumber),
    node_type: cdktf.stringToTerraform(struct!.nodeType),
    args: cdktf.listMapper(dataAwsGlueScriptDagNodeArgsToTerraform)(struct!.args),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/glue_script aws_glue_script}
*/
export class DataAwsGlueScript extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_glue_script";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/glue_script aws_glue_script} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsGlueScriptConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsGlueScriptConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_script',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._language = config.language;
    this._dagEdge = config.dagEdge;
    this._dagNode = config.dagNode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // language - computed: false, optional: true, required: false
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  public resetLanguage() {
    this._language = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
  }

  // python_script - computed: true, optional: false, required: false
  public get pythonScript() {
    return this.getStringAttribute('python_script');
  }

  // scala_code - computed: true, optional: false, required: false
  public get scalaCode() {
    return this.getStringAttribute('scala_code');
  }

  // dag_edge - computed: false, optional: false, required: true
  private _dagEdge?: DataAwsGlueScriptDagEdge[] | cdktf.IResolvable; 
  public get dagEdge() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('dag_edge');
  }
  public set dagEdge(value: DataAwsGlueScriptDagEdge[] | cdktf.IResolvable) {
    this._dagEdge = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dagEdgeInput() {
    return this._dagEdge;
  }

  // dag_node - computed: false, optional: false, required: true
  private _dagNode?: DataAwsGlueScriptDagNode[] | cdktf.IResolvable; 
  public get dagNode() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('dag_node');
  }
  public set dagNode(value: DataAwsGlueScriptDagNode[] | cdktf.IResolvable) {
    this._dagNode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dagNodeInput() {
    return this._dagNode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      language: cdktf.stringToTerraform(this._language),
      dag_edge: cdktf.listMapper(dataAwsGlueScriptDagEdgeToTerraform)(this._dagEdge),
      dag_node: cdktf.listMapper(dataAwsGlueScriptDagNodeToTerraform)(this._dagNode),
    };
  }
}
