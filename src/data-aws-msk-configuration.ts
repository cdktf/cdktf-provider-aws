// https://www.terraform.io/docs/providers/aws/r/data_aws_msk_configuration.html
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
        "computed": true
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
        "computed": true
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
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsMskConfigurationConfig extends TerraformMetaArguments {
  readonly name: string;
}

// Resource

export class DataAwsMskConfiguration extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsMskConfigurationConfig) {
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // kafka_versions - computed: true, optional: false, required: true
  public get kafkaVersions() {
    return this.getListAttribute('kafka_versions');
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

  // server_properties - computed: true, optional: false, required: true
  public get serverProperties() {
    return this.getStringAttribute('server_properties');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
    };
  }
}
