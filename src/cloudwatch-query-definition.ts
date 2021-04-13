// https://www.terraform.io/docs/providers/aws/r/cloudwatch_query_definition.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudwatchQueryDefinitionConfig extends cdktf.TerraformMetaArguments {
  readonly logGroupNames?: string[];
  readonly name: string;
  readonly queryString: string;
}

// Resource

export class CloudwatchQueryDefinition extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CloudwatchQueryDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudwatch_query_definition',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._logGroupNames = config.logGroupNames;
    this._name = config.name;
    this._queryString = config.queryString;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_group_names - computed: false, optional: true, required: false
  private _logGroupNames?: string[];
  public get logGroupNames() {
    return this.getListAttribute('log_group_names');
  }
  public set logGroupNames(value: string[] ) {
    this._logGroupNames = value;
  }
  public resetLogGroupNames() {
    this._logGroupNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNamesInput() {
    return this._logGroupNames
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

  // query_definition_id - computed: true, optional: false, required: false
  public get queryDefinitionId() {
    return this.getStringAttribute('query_definition_id');
  }

  // query_string - computed: false, optional: false, required: true
  private _queryString: string;
  public get queryString() {
    return this.getStringAttribute('query_string');
  }
  public set queryString(value: string) {
    this._queryString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      log_group_names: cdktf.listMapper(cdktf.stringToTerraform)(this._logGroupNames),
      name: cdktf.stringToTerraform(this._name),
      query_string: cdktf.stringToTerraform(this._queryString),
    };
  }
}
