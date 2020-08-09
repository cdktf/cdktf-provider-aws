// https://www.terraform.io/docs/providers/aws/r/appsync_resolver.html
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
        "optional": true
      },
      "field": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "kind": {
        "type": "string",
        "optional": true
      },
      "request_template": {
        "type": "string",
        "required": true
      },
      "response_template": {
        "type": "string",
        "required": true
      },
      "type": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
      "caching_config": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "caching_keys": {
              "type": [
                "set",
                "string"
              ],
              "optional": true
            },
            "ttl": {
              "type": "number",
              "optional": true
            }
          }
        },
        "max_items": 1
      },
      "pipeline_config": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "functions": {
              "type": [
                "list",
                "string"
              ],
              "optional": true
            }
          }
        },
        "max_items": 1
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AppsyncResolverConfig extends TerraformMetaArguments {
  readonly apiId: string;
  readonly dataSource?: string;
  readonly field: string;
  readonly kind?: string;
  readonly requestTemplate: string;
  readonly responseTemplate: string;
  readonly type: string;
  /** caching_config block */
  readonly cachingConfig?: AppsyncResolverCachingConfig[];
  /** pipeline_config block */
  readonly pipelineConfig?: AppsyncResolverPipelineConfig[];
}
export interface AppsyncResolverCachingConfig {
  readonly cachingKeys?: string[];
  readonly ttl?: number;
}
export interface AppsyncResolverPipelineConfig {
  readonly functions?: string[];
}

// Resource

export class AppsyncResolver extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AppsyncResolverConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appsync_resolver',
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
    this._field = config.field;
    this._kind = config.kind;
    this._requestTemplate = config.requestTemplate;
    this._responseTemplate = config.responseTemplate;
    this._type = config.type;
    this._cachingConfig = config.cachingConfig;
    this._pipelineConfig = config.pipelineConfig;
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

  // data_source - computed: false, optional: true, required: false
  private _dataSource?: string;
  public get dataSource() {
    return this._dataSource;
  }
  public set dataSource(value: string | undefined) {
    this._dataSource = value;
  }

  // field - computed: false, optional: false, required: true
  private _field: string;
  public get field() {
    return this._field;
  }
  public set field(value: string) {
    this._field = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string;
  public get kind() {
    return this._kind;
  }
  public set kind(value: string | undefined) {
    this._kind = value;
  }

  // request_template - computed: false, optional: false, required: true
  private _requestTemplate: string;
  public get requestTemplate() {
    return this._requestTemplate;
  }
  public set requestTemplate(value: string) {
    this._requestTemplate = value;
  }

  // response_template - computed: false, optional: false, required: true
  private _responseTemplate: string;
  public get responseTemplate() {
    return this._responseTemplate;
  }
  public set responseTemplate(value: string) {
    this._responseTemplate = value;
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this._type;
  }
  public set type(value: string) {
    this._type = value;
  }

  // caching_config - computed: false, optional: true, required: false
  private _cachingConfig?: AppsyncResolverCachingConfig[];
  public get cachingConfig() {
    return this._cachingConfig;
  }
  public set cachingConfig(value: AppsyncResolverCachingConfig[] | undefined) {
    this._cachingConfig = value;
  }

  // pipeline_config - computed: false, optional: true, required: false
  private _pipelineConfig?: AppsyncResolverPipelineConfig[];
  public get pipelineConfig() {
    return this._pipelineConfig;
  }
  public set pipelineConfig(value: AppsyncResolverPipelineConfig[] | undefined) {
    this._pipelineConfig = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      api_id: this._apiId,
      data_source: this._dataSource,
      field: this._field,
      kind: this._kind,
      request_template: this._requestTemplate,
      response_template: this._responseTemplate,
      type: this._type,
      caching_config: this._cachingConfig,
      pipeline_config: this._pipelineConfig,
    };
  }
}
