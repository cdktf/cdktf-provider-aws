// https://www.terraform.io/docs/providers/aws/r/appsync_function.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppsyncFunctionConfig extends cdktf.TerraformMetaArguments {
  readonly apiId: string;
  readonly dataSource: string;
  readonly description?: string;
  readonly functionVersion?: string;
  readonly name: string;
  readonly requestMappingTemplate: string;
  readonly responseMappingTemplate: string;
}

// Resource

export class AppsyncFunction extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AppsyncFunctionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appsync_function',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiId = config.apiId;
    this._dataSource = config.dataSource;
    this._description = config.description;
    this._functionVersion = config.functionVersion;
    this._name = config.name;
    this._requestMappingTemplate = config.requestMappingTemplate;
    this._responseMappingTemplate = config.responseMappingTemplate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_id - computed: false, optional: false, required: true
  private _apiId: string;
  public get apiId() {
    return this.getStringAttribute('api_id');
  }
  public set apiId(value: string) {
    this._apiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiIdInput() {
    return this._apiId
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // data_source - computed: false, optional: false, required: true
  private _dataSource: string;
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }
  public set dataSource(value: string) {
    this._dataSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // function_id - computed: true, optional: false, required: false
  public get functionId() {
    return this.getStringAttribute('function_id');
  }

  // function_version - computed: false, optional: true, required: false
  private _functionVersion?: string;
  public get functionVersion() {
    return this.getStringAttribute('function_version');
  }
  public set functionVersion(value: string ) {
    this._functionVersion = value;
  }
  public resetFunctionVersion() {
    this._functionVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionVersionInput() {
    return this._functionVersion
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // request_mapping_template - computed: false, optional: false, required: true
  private _requestMappingTemplate: string;
  public get requestMappingTemplate() {
    return this.getStringAttribute('request_mapping_template');
  }
  public set requestMappingTemplate(value: string) {
    this._requestMappingTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMappingTemplateInput() {
    return this._requestMappingTemplate
  }

  // response_mapping_template - computed: false, optional: false, required: true
  private _responseMappingTemplate: string;
  public get responseMappingTemplate() {
    return this.getStringAttribute('response_mapping_template');
  }
  public set responseMappingTemplate(value: string) {
    this._responseMappingTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseMappingTemplateInput() {
    return this._responseMappingTemplate
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_id: cdktf.stringToTerraform(this._apiId),
      data_source: cdktf.stringToTerraform(this._dataSource),
      description: cdktf.stringToTerraform(this._description),
      function_version: cdktf.stringToTerraform(this._functionVersion),
      name: cdktf.stringToTerraform(this._name),
      request_mapping_template: cdktf.stringToTerraform(this._requestMappingTemplate),
      response_mapping_template: cdktf.stringToTerraform(this._responseMappingTemplate),
    };
  }
}
