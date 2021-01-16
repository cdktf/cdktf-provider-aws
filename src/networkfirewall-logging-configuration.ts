// https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface NetworkfirewallLoggingConfigurationConfig extends TerraformMetaArguments {
  readonly firewallArn: string;
  /** logging_configuration block */
  readonly loggingConfiguration: NetworkfirewallLoggingConfigurationLoggingConfiguration[];
}
export interface NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfig {
  readonly logDestination: { [key: string]: string };
  readonly logDestinationType: string;
  readonly logType: string;
}
export interface NetworkfirewallLoggingConfigurationLoggingConfiguration {
  /** log_destination_config block */
  readonly logDestinationConfig: NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfig[];
}

// Resource

export class NetworkfirewallLoggingConfiguration extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: NetworkfirewallLoggingConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_networkfirewall_logging_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._firewallArn = config.firewallArn;
    this._loggingConfiguration = config.loggingConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // firewall_arn - computed: false, optional: false, required: true
  private _firewallArn: string;
  public get firewallArn() {
    return this._firewallArn;
  }
  public set firewallArn(value: string) {
    this._firewallArn = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // logging_configuration - computed: false, optional: false, required: true
  private _loggingConfiguration: NetworkfirewallLoggingConfigurationLoggingConfiguration[];
  public get loggingConfiguration() {
    return this._loggingConfiguration;
  }
  public set loggingConfiguration(value: NetworkfirewallLoggingConfigurationLoggingConfiguration[]) {
    this._loggingConfiguration = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      firewall_arn: this._firewallArn,
      logging_configuration: this._loggingConfiguration,
    };
  }
}
