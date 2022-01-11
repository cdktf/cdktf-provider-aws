// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Managed Streaming for Kafka
*/
export interface MskconnectWorkerConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_worker_configuration#description MskconnectWorkerConfiguration#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_worker_configuration#name MskconnectWorkerConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_worker_configuration#properties_file_content MskconnectWorkerConfiguration#properties_file_content}
  */
  readonly propertiesFileContent: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_worker_configuration aws_mskconnect_worker_configuration}
*/
export class MskconnectWorkerConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_mskconnect_worker_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_worker_configuration aws_mskconnect_worker_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MskconnectWorkerConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: MskconnectWorkerConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_mskconnect_worker_configuration',
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
    this._propertiesFileContent = config.propertiesFileContent;
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

  // properties_file_content - computed: false, optional: false, required: true
  private _propertiesFileContent?: string; 
  public get propertiesFileContent() {
    return this.getStringAttribute('properties_file_content');
  }
  public set propertiesFileContent(value: string) {
    this._propertiesFileContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesFileContentInput() {
    return this._propertiesFileContent;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      properties_file_content: cdktf.stringToTerraform(this._propertiesFileContent),
    };
  }
}
