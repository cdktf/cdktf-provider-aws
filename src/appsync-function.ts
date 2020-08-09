// https://www.terraform.io/docs/providers/aws/r/appsync_function.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "api_id": {
        "type": "string",
        "required": true
      },
      "arn": {
        "type": "string",
        "computed": true
      },
      "data_source": {
        "type": "string",
        "required": true
      },
      "description": {
        "type": "string",
        "optional": true
      },
      "function_id": {
        "type": "string",
        "computed": true
      },
      "function_version": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "request_mapping_template": {
        "type": "string",
        "required": true
      },
      "response_mapping_template": {
        "type": "string",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AppsyncFunctionConfig extends TerraformMetaArguments {
  readonly apiId: string;
  readonly dataSource: string;
  readonly description?: string;
  readonly functionVersion?: string;
  readonly name: string;
  readonly requestMappingTemplate: string;
  readonly responseMappingTemplate: string;
}

// Resource

export class AppsyncFunction extends TerraformResource {

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
    return this._apiId;
  }
  public set apiId(value: string) {
    this._apiId = value;
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // data_source - computed: false, optional: false, required: true
  private _dataSource: string;
  public get dataSource() {
    return this._dataSource;
  }
  public set dataSource(value: string) {
    this._dataSource = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // function_id - computed: true, optional: false, required: true
  public get functionId() {
    return this.getStringAttribute('function_id');
  }

  // function_version - computed: false, optional: true, required: false
  private _functionVersion?: string;
  public get functionVersion() {
    return this._functionVersion;
  }
  public set functionVersion(value: string | undefined) {
    this._functionVersion = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // request_mapping_template - computed: false, optional: false, required: true
  private _requestMappingTemplate: string;
  public get requestMappingTemplate() {
    return this._requestMappingTemplate;
  }
  public set requestMappingTemplate(value: string) {
    this._requestMappingTemplate = value;
  }

  // response_mapping_template - computed: false, optional: false, required: true
  private _responseMappingTemplate: string;
  public get responseMappingTemplate() {
    return this._responseMappingTemplate;
  }
  public set responseMappingTemplate(value: string) {
    this._responseMappingTemplate = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      api_id: this._apiId,
      data_source: this._dataSource,
      description: this._description,
      function_version: this._functionVersion,
      name: this._name,
      request_mapping_template: this._requestMappingTemplate,
      response_mapping_template: this._responseMappingTemplate,
    };
  }
}
