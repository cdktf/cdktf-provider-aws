// https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "description": {
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
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      }
    },
    "block_types": {
      "appversion_lifecycle": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "delete_source_from_s3": {
              "type": "bool",
              "optional": true
            },
            "max_age_in_days": {
              "type": "number",
              "optional": true
            },
            "max_count": {
              "type": "number",
              "optional": true
            },
            "service_role": {
              "type": "string",
              "required": true
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

export interface ElasticBeanstalkApplicationConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** appversion_lifecycle block */
  readonly appversionLifecycle?: ElasticBeanstalkApplicationAppversionLifecycle[];
}
export interface ElasticBeanstalkApplicationAppversionLifecycle {
  readonly deleteSourceFromS3?: boolean;
  readonly maxAgeInDays?: number;
  readonly maxCount?: number;
  readonly serviceRole: string;
}

// Resource

export class ElasticBeanstalkApplication extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ElasticBeanstalkApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_elastic_beanstalk_application',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._name = config.name;
    this._tags = config.tags;
    this._appversionLifecycle = config.appversionLifecycle;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
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

  // appversion_lifecycle - computed: false, optional: true, required: false
  private _appversionLifecycle?: ElasticBeanstalkApplicationAppversionLifecycle[];
  public get appversionLifecycle() {
    return this._appversionLifecycle;
  }
  public set appversionLifecycle(value: ElasticBeanstalkApplicationAppversionLifecycle[] | undefined) {
    this._appversionLifecycle = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      name: this._name,
      tags: this._tags,
      appversion_lifecycle: this._appversionLifecycle,
    };
  }
}
