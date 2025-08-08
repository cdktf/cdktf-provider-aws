/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/networkfirewall_logging_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkfirewallLoggingConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/networkfirewall_logging_configuration#firewall_arn NetworkfirewallLoggingConfiguration#firewall_arn}
  */
  readonly firewallArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/networkfirewall_logging_configuration#id NetworkfirewallLoggingConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/networkfirewall_logging_configuration#region NetworkfirewallLoggingConfiguration#region}
  */
  readonly region?: string;
  /**
  * logging_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/networkfirewall_logging_configuration#logging_configuration NetworkfirewallLoggingConfiguration#logging_configuration}
  */
  readonly loggingConfiguration: NetworkfirewallLoggingConfigurationLoggingConfiguration;
}
export interface NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/networkfirewall_logging_configuration#log_destination NetworkfirewallLoggingConfiguration#log_destination}
  */
  readonly logDestination: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/networkfirewall_logging_configuration#log_destination_type NetworkfirewallLoggingConfiguration#log_destination_type}
  */
  readonly logDestinationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/networkfirewall_logging_configuration#log_type NetworkfirewallLoggingConfiguration#log_type}
  */
  readonly logType: string;
}

export function networkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigToTerraform(struct?: NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_destination: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.logDestination),
    log_destination_type: cdktf.stringToTerraform(struct!.logDestinationType),
    log_type: cdktf.stringToTerraform(struct!.logType),
  }
}


export function networkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigToHclTerraform(struct?: NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_destination: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.logDestination),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    log_destination_type: {
      value: cdktf.stringToHclTerraform(struct!.logDestinationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_type: {
      value: cdktf.stringToHclTerraform(struct!.logType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logDestination !== undefined) {
      hasAnyValues = true;
      internalValueResult.logDestination = this._logDestination;
    }
    if (this._logDestinationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.logDestinationType = this._logDestinationType;
    }
    if (this._logType !== undefined) {
      hasAnyValues = true;
      internalValueResult.logType = this._logType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logDestination = undefined;
      this._logDestinationType = undefined;
      this._logType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logDestination = value.logDestination;
      this._logDestinationType = value.logDestinationType;
      this._logType = value.logType;
    }
  }

  // log_destination - computed: false, optional: false, required: true
  private _logDestination?: { [key: string]: string }; 
  public get logDestination() {
    return this.getStringMapAttribute('log_destination');
  }
  public set logDestination(value: { [key: string]: string }) {
    this._logDestination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logDestinationInput() {
    return this._logDestination;
  }

  // log_destination_type - computed: false, optional: false, required: true
  private _logDestinationType?: string; 
  public get logDestinationType() {
    return this.getStringAttribute('log_destination_type');
  }
  public set logDestinationType(value: string) {
    this._logDestinationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logDestinationTypeInput() {
    return this._logDestinationType;
  }

  // log_type - computed: false, optional: false, required: true
  private _logType?: string; 
  public get logType() {
    return this.getStringAttribute('log_type');
  }
  public set logType(value: string) {
    this._logType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeInput() {
    return this._logType;
  }
}

export class NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigList extends cdktf.ComplexList {
  public internalValue? : NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference {
    return new NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkfirewallLoggingConfigurationLoggingConfiguration {
  /**
  * log_destination_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/networkfirewall_logging_configuration#log_destination_config NetworkfirewallLoggingConfiguration#log_destination_config}
  */
  readonly logDestinationConfig: NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfig[] | cdktf.IResolvable;
}

export function networkfirewallLoggingConfigurationLoggingConfigurationToTerraform(struct?: NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference | NetworkfirewallLoggingConfigurationLoggingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_destination_config: cdktf.listMapper(networkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigToTerraform, true)(struct!.logDestinationConfig),
  }
}


export function networkfirewallLoggingConfigurationLoggingConfigurationToHclTerraform(struct?: NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference | NetworkfirewallLoggingConfigurationLoggingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_destination_config: {
      value: cdktf.listMapperHcl(networkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigToHclTerraform, true)(struct!.logDestinationConfig),
      isBlock: true,
      type: "set",
      storageClassType: "NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkfirewallLoggingConfigurationLoggingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logDestinationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logDestinationConfig = this._logDestinationConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallLoggingConfigurationLoggingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logDestinationConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logDestinationConfig.internalValue = value.logDestinationConfig;
    }
  }

  // log_destination_config - computed: false, optional: false, required: true
  private _logDestinationConfig = new NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigList(this, "log_destination_config", true);
  public get logDestinationConfig() {
    return this._logDestinationConfig;
  }
  public putLogDestinationConfig(value: NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfig[] | cdktf.IResolvable) {
    this._logDestinationConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logDestinationConfigInput() {
    return this._logDestinationConfig.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/networkfirewall_logging_configuration aws_networkfirewall_logging_configuration}
*/
export class NetworkfirewallLoggingConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_networkfirewall_logging_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkfirewallLoggingConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkfirewallLoggingConfiguration to import
  * @param importFromId The id of the existing NetworkfirewallLoggingConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/networkfirewall_logging_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkfirewallLoggingConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_networkfirewall_logging_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/networkfirewall_logging_configuration aws_networkfirewall_logging_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkfirewallLoggingConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkfirewallLoggingConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_networkfirewall_logging_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.8.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._firewallArn = config.firewallArn;
    this._id = config.id;
    this._region = config.region;
    this._loggingConfiguration.internalValue = config.loggingConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // firewall_arn - computed: false, optional: false, required: true
  private _firewallArn?: string; 
  public get firewallArn() {
    return this.getStringAttribute('firewall_arn');
  }
  public set firewallArn(value: string) {
    this._firewallArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallArnInput() {
    return this._firewallArn;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // logging_configuration - computed: false, optional: false, required: true
  private _loggingConfiguration = new NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference(this, "logging_configuration");
  public get loggingConfiguration() {
    return this._loggingConfiguration;
  }
  public putLoggingConfiguration(value: NetworkfirewallLoggingConfigurationLoggingConfiguration) {
    this._loggingConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigurationInput() {
    return this._loggingConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      firewall_arn: cdktf.stringToTerraform(this._firewallArn),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      logging_configuration: networkfirewallLoggingConfigurationLoggingConfigurationToTerraform(this._loggingConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      firewall_arn: {
        value: cdktf.stringToHclTerraform(this._firewallArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logging_configuration: {
        value: networkfirewallLoggingConfigurationLoggingConfigurationToHclTerraform(this._loggingConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkfirewallLoggingConfigurationLoggingConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
