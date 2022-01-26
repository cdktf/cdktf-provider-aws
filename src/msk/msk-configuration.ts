// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Managed Streaming for Kafka
*/
export interface MskConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_configuration#description MskConfiguration#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_configuration#kafka_versions MskConfiguration#kafka_versions}
  */
  readonly kafkaVersions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_configuration#name MskConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_configuration#server_properties MskConfiguration#server_properties}
  */
  readonly serverProperties: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/msk_configuration aws_msk_configuration}
*/
export class MskConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_msk_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/msk_configuration aws_msk_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MskConfigurationConfig
  */
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kafka_versions - computed: false, optional: true, required: false
  private _kafkaVersions?: string[]; 
  public get kafkaVersions() {
    return cdktf.Fn.tolist(this.getListAttribute('kafka_versions'));
  }
  public set kafkaVersions(value: string[]) {
    this._kafkaVersions = value;
  }
  public resetKafkaVersions() {
    this._kafkaVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaVersionsInput() {
    return this._kafkaVersions;
  }

  // latest_revision - computed: true, optional: false, required: false
  public get latestRevision() {
    return this.getNumberAttribute('latest_revision');
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

  // server_properties - computed: false, optional: false, required: true
  private _serverProperties?: string; 
  public get serverProperties() {
    return this.getStringAttribute('server_properties');
  }
  public set serverProperties(value: string) {
    this._serverProperties = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPropertiesInput() {
    return this._serverProperties;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      kafka_versions: cdktf.listMapper(cdktf.stringToTerraform)(this._kafkaVersions),
      name: cdktf.stringToTerraform(this._name),
      server_properties: cdktf.stringToTerraform(this._serverProperties),
    };
  }
}
