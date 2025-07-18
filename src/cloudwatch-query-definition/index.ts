/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_query_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudwatchQueryDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_query_definition#id CloudwatchQueryDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_query_definition#log_group_names CloudwatchQueryDefinition#log_group_names}
  */
  readonly logGroupNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_query_definition#name CloudwatchQueryDefinition#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_query_definition#query_string CloudwatchQueryDefinition#query_string}
  */
  readonly queryString: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_query_definition#region CloudwatchQueryDefinition#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_query_definition aws_cloudwatch_query_definition}
*/
export class CloudwatchQueryDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudwatch_query_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudwatchQueryDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudwatchQueryDefinition to import
  * @param importFromId The id of the existing CloudwatchQueryDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_query_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudwatchQueryDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudwatch_query_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_query_definition aws_cloudwatch_query_definition} Resource
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
    this._logGroupNames = config.logGroupNames;
    this._name = config.name;
    this._queryString = config.queryString;
    this._region = config.region;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      log_group_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._logGroupNames),
      name: cdktf.stringToTerraform(this._name),
      query_string: cdktf.stringToTerraform(this._queryString),
      region: cdktf.stringToTerraform(this._region),
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
      log_group_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._logGroupNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_string: {
        value: cdktf.stringToHclTerraform(this._queryString),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
