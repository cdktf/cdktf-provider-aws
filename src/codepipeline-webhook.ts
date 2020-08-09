// https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "authentication": {
        "type": "string",
        "required": true
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
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "target_action": {
        "type": "string",
        "required": true
      },
      "target_pipeline": {
        "type": "string",
        "required": true
      },
      "url": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
      "authentication_configuration": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "allowed_ip_range": {
              "type": "string",
              "optional": true
            },
            "secret_token": {
              "type": "string",
              "optional": true,
              "sensitive": true
            }
          }
        },
        "max_items": 1
      },
      "filter": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "json_path": {
              "type": "string",
              "required": true
            },
            "match_equals": {
              "type": "string",
              "required": true
            }
          }
        },
        "min_items": 1
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CodepipelineWebhookConfig extends TerraformMetaArguments {
  readonly authentication: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  readonly targetAction: string;
  readonly targetPipeline: string;
  /** authentication_configuration block */
  readonly authenticationConfiguration?: CodepipelineWebhookAuthenticationConfiguration[];
  /** filter block */
  readonly filter: CodepipelineWebhookFilter[];
}
export interface CodepipelineWebhookAuthenticationConfiguration {
  readonly allowedIpRange?: string;
  readonly secretToken?: string;
}
export interface CodepipelineWebhookFilter {
  readonly jsonPath: string;
  readonly matchEquals: string;
}

// Resource

export class CodepipelineWebhook extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CodepipelineWebhookConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_codepipeline_webhook',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._authentication = config.authentication;
    this._name = config.name;
    this._tags = config.tags;
    this._targetAction = config.targetAction;
    this._targetPipeline = config.targetPipeline;
    this._authenticationConfiguration = config.authenticationConfiguration;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication - computed: false, optional: false, required: true
  private _authentication: string;
  public get authentication() {
    return this._authentication;
  }
  public set authentication(value: string) {
    this._authentication = value;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // target_action - computed: false, optional: false, required: true
  private _targetAction: string;
  public get targetAction() {
    return this._targetAction;
  }
  public set targetAction(value: string) {
    this._targetAction = value;
  }

  // target_pipeline - computed: false, optional: false, required: true
  private _targetPipeline: string;
  public get targetPipeline() {
    return this._targetPipeline;
  }
  public set targetPipeline(value: string) {
    this._targetPipeline = value;
  }

  // url - computed: true, optional: false, required: true
  public get url() {
    return this.getStringAttribute('url');
  }

  // authentication_configuration - computed: false, optional: true, required: false
  private _authenticationConfiguration?: CodepipelineWebhookAuthenticationConfiguration[];
  public get authenticationConfiguration() {
    return this._authenticationConfiguration;
  }
  public set authenticationConfiguration(value: CodepipelineWebhookAuthenticationConfiguration[] | undefined) {
    this._authenticationConfiguration = value;
  }

  // filter - computed: false, optional: false, required: true
  private _filter: CodepipelineWebhookFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: CodepipelineWebhookFilter[]) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication: this._authentication,
      name: this._name,
      tags: this._tags,
      target_action: this._targetAction,
      target_pipeline: this._targetPipeline,
      authentication_configuration: this._authenticationConfiguration,
      filter: this._filter,
    };
  }
}
