// https://www.terraform.io/docs/providers/aws/r/msk_configuration.html
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
      "kafka_versions": {
        "type": [
          "set",
          "string"
        ],
        "required": true
      },
      "latest_revision": {
        "type": "number",
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "server_properties": {
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

export interface MskConfigurationConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly kafkaVersions: string[];
  readonly name: string;
  readonly serverProperties: string;
}

// Resource

export class MskConfiguration extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: MskConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_msk_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._kafkaVersions = config.kafkaVersions;
    this._name = config.name;
    this._serverProperties = config.serverProperties;
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

  // kafka_versions - computed: false, optional: false, required: true
  private _kafkaVersions: string[];
  public get kafkaVersions() {
    return this._kafkaVersions;
  }
  public set kafkaVersions(value: string[]) {
    this._kafkaVersions = value;
  }

  // latest_revision - computed: true, optional: false, required: true
  public get latestRevision() {
    return this.getNumberAttribute('latest_revision');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // server_properties - computed: false, optional: false, required: true
  private _serverProperties: string;
  public get serverProperties() {
    return this._serverProperties;
  }
  public set serverProperties(value: string) {
    this._serverProperties = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      kafka_versions: this._kafkaVersions,
      name: this._name,
      server_properties: this._serverProperties,
    };
  }
}
