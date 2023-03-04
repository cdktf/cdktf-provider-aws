// https://www.terraform.io/docs/providers/aws/r/cloudwatch_query_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudwatchQueryDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_query_definition#id CloudwatchQueryDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_query_definition#log_group_names CloudwatchQueryDefinition#log_group_names}
  */
  readonly logGroupNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_query_definition#name CloudwatchQueryDefinition#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_query_definition#query_string CloudwatchQueryDefinition#query_string}
  */
  readonly queryString: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_query_definition aws_cloudwatch_query_definition}
*/
export class CloudwatchQueryDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudwatch_query_definition";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_query_definition aws_cloudwatch_query_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudwatchQueryDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: CloudwatchQueryDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudwatch_query_definition',
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
    this._logGroupNames = config.logGroupNames;
    this._name = config.name;
    this._queryString = config.queryString;
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

  // log_group_names - computed: false, optional: true, required: false
  private _logGroupNames?: string[]; 
  public get logGroupNames() {
    return this.getListAttribute('log_group_names');
  }
  public set logGroupNames(value: string[]) {
    this._logGroupNames = value;
  }
  public resetLogGroupNames() {
    this._logGroupNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNamesInput() {
    return this._logGroupNames;
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

  // query_definition_id - computed: true, optional: false, required: false
  public get queryDefinitionId() {
    return this.getStringAttribute('query_definition_id');
  }

  // query_string - computed: false, optional: false, required: true
  private _queryString?: string; 
  public get queryString() {
    return this.getStringAttribute('query_string');
  }
  public set queryString(value: string) {
    this._queryString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      log_group_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._logGroupNames),
      name: cdktf.stringToTerraform(this._name),
      query_string: cdktf.stringToTerraform(this._queryString),
    };
  }
}
