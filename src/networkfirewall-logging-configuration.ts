// https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkfirewallLoggingConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration.html#firewall_arn NetworkfirewallLoggingConfiguration#firewall_arn}
  */
  readonly firewallArn: string;
  /**
  * logging_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration.html#logging_configuration NetworkfirewallLoggingConfiguration#logging_configuration}
  */
  readonly loggingConfiguration: NetworkfirewallLoggingConfigurationLoggingConfiguration[];
}
export interface NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration.html#log_destination NetworkfirewallLoggingConfiguration#log_destination}
  */
  readonly logDestination: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration.html#log_destination_type NetworkfirewallLoggingConfiguration#log_destination_type}
  */
  readonly logDestinationType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration.html#log_type NetworkfirewallLoggingConfiguration#log_type}
  */
  readonly logType: string;
}

function networkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigToTerraform(struct?: NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    log_destination: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.logDestination),
    log_destination_type: cdktf.stringToTerraform(struct!.logDestinationType),
    log_type: cdktf.stringToTerraform(struct!.logType),
  }
}

export interface NetworkfirewallLoggingConfigurationLoggingConfiguration {
  /**
  * log_destination_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration.html#log_destination_config NetworkfirewallLoggingConfiguration#log_destination_config}
  */
  readonly logDestinationConfig: NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfig[];
}

function networkfirewallLoggingConfigurationLoggingConfigurationToTerraform(struct?: NetworkfirewallLoggingConfigurationLoggingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    log_destination_config: cdktf.listMapper(networkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigToTerraform)(struct!.logDestinationConfig),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration.html aws_networkfirewall_logging_configuration}
*/
export class NetworkfirewallLoggingConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_networkfirewall_logging_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration.html aws_networkfirewall_logging_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkfirewallLoggingConfigurationConfig
  */
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
    return this.getStringAttribute('firewall_arn');
  }
  public set firewallArn(value: string) {
    this._firewallArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallArnInput() {
    return this._firewallArn
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // logging_configuration - computed: false, optional: false, required: true
  private _loggingConfiguration: NetworkfirewallLoggingConfigurationLoggingConfiguration[];
  public get loggingConfiguration() {
    return this.interpolationForAttribute('logging_configuration') as any;
  }
  public set loggingConfiguration(value: NetworkfirewallLoggingConfigurationLoggingConfiguration[]) {
    this._loggingConfiguration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigurationInput() {
    return this._loggingConfiguration
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      firewall_arn: cdktf.stringToTerraform(this._firewallArn),
      logging_configuration: cdktf.listMapper(networkfirewallLoggingConfigurationLoggingConfigurationToTerraform)(this._loggingConfiguration),
    };
  }
}
