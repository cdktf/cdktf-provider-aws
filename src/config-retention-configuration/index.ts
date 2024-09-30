// https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/config_retention_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigRetentionConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/config_retention_configuration#retention_period_in_days ConfigRetentionConfiguration#retention_period_in_days}
  */
  readonly retentionPeriodInDays: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/config_retention_configuration aws_config_retention_configuration}
*/
export class ConfigRetentionConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_config_retention_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConfigRetentionConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigRetentionConfiguration to import
  * @param importFromId The id of the existing ConfigRetentionConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/config_retention_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigRetentionConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_config_retention_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/config_retention_configuration aws_config_retention_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigRetentionConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigRetentionConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_config_retention_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.69.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._retentionPeriodInDays = config.retentionPeriodInDays;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // retention_period_in_days - computed: false, optional: false, required: true
  private _retentionPeriodInDays?: number; 
  public get retentionPeriodInDays() {
    return this.getNumberAttribute('retention_period_in_days');
  }
  public set retentionPeriodInDays(value: number) {
    this._retentionPeriodInDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodInDaysInput() {
    return this._retentionPeriodInDays;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      retention_period_in_days: cdktf.numberToTerraform(this._retentionPeriodInDays),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      retention_period_in_days: {
        value: cdktf.numberToHclTerraform(this._retentionPeriodInDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
