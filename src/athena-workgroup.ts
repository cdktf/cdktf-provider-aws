// https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AthenaWorkgroupConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly forceDestroy?: boolean;
  readonly name: string;
  readonly state?: string;
  readonly tags?: { [key: string]: string };
  /** configuration block */
  readonly configuration?: AthenaWorkgroupConfiguration[];
}
export interface AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration {
  readonly encryptionOption?: string;
  readonly kmsKeyArn?: string;
}
export interface AthenaWorkgroupConfigurationResultConfiguration {
  readonly outputLocation?: string;
  /** encryption_configuration block */
  readonly encryptionConfiguration?: AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration[];
}
export interface AthenaWorkgroupConfiguration {
  readonly bytesScannedCutoffPerQuery?: number;
  readonly enforceWorkgroupConfiguration?: boolean;
  readonly publishCloudwatchMetricsEnabled?: boolean;
  /** result_configuration block */
  readonly resultConfiguration?: AthenaWorkgroupConfigurationResultConfiguration[];
}

// Resource

export class AthenaWorkgroup extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AthenaWorkgroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_athena_workgroup',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._forceDestroy = config.forceDestroy;
    this._name = config.name;
    this._state = config.state;
    this._tags = config.tags;
    this._configuration = config.configuration;
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

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean;
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }
  public set forceDestroy(value: boolean ) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy
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

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string ) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: AthenaWorkgroupConfiguration[];
  public get configuration() {
    return this.interpolationForAttribute('configuration') as any;
  }
  public set configuration(value: AthenaWorkgroupConfiguration[] ) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      force_destroy: this._forceDestroy,
      name: this._name,
      state: this._state,
      tags: this._tags,
      configuration: this._configuration,
    };
  }
}
