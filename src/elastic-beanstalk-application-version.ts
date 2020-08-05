// https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "application": {
        "type": "string",
        "required": true
      },
      "arn": {
        "type": "string",
        "computed": true
      },
      "bucket": {
        "type": "string",
        "required": true
      },
      "description": {
        "type": "string",
        "optional": true
      },
      "force_delete": {
        "type": "bool",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "key": {
        "type": "string",
        "required": true
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
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ElasticBeanstalkApplicationVersionConfig extends TerraformMetaArguments {
  readonly application: string;
  readonly bucket: string;
  readonly description?: string;
  readonly forceDelete?: boolean;
  readonly key: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class ElasticBeanstalkApplicationVersion extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ElasticBeanstalkApplicationVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_elastic_beanstalk_application_version',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._application = config.application;
    this._bucket = config.bucket;
    this._description = config.description;
    this._forceDelete = config.forceDelete;
    this._key = config.key;
    this._name = config.name;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application - computed: false, optional: false, required: true
  private _application: string;
  public get application() {
    return this._application;
  }
  public set application(value: string) {
    this._application = value;
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket: string;
  public get bucket() {
    return this._bucket;
  }
  public set bucket(value: string) {
    this._bucket = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // force_delete - computed: false, optional: true, required: false
  private _forceDelete?: boolean;
  public get forceDelete() {
    return this._forceDelete;
  }
  public set forceDelete(value: boolean | undefined) {
    this._forceDelete = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // key - computed: false, optional: false, required: true
  private _key: string;
  public get key() {
    return this._key;
  }
  public set key(value: string) {
    this._key = value;
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

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      application: this._application,
      bucket: this._bucket,
      description: this._description,
      force_delete: this._forceDelete,
      key: this._key,
      name: this._name,
      tags: this._tags,
    };
  }
}
