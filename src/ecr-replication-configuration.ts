// https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcrReplicationConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * replication_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration.html#replication_configuration EcrReplicationConfiguration#replication_configuration}
  */
  readonly replicationConfiguration?: EcrReplicationConfigurationReplicationConfiguration[];
}
export interface EcrReplicationConfigurationReplicationConfigurationRuleDestination {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration.html#region EcrReplicationConfiguration#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration.html#registry_id EcrReplicationConfiguration#registry_id}
  */
  readonly registryId: string;
}

function ecrReplicationConfigurationReplicationConfigurationRuleDestinationToTerraform(struct?: EcrReplicationConfigurationReplicationConfigurationRuleDestination): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    region: cdktf.stringToTerraform(struct!.region),
    registry_id: cdktf.stringToTerraform(struct!.registryId),
  }
}

export interface EcrReplicationConfigurationReplicationConfigurationRule {
  /**
  * destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration.html#destination EcrReplicationConfiguration#destination}
  */
  readonly destination: EcrReplicationConfigurationReplicationConfigurationRuleDestination[];
}

function ecrReplicationConfigurationReplicationConfigurationRuleToTerraform(struct?: EcrReplicationConfigurationReplicationConfigurationRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    destination: cdktf.listMapper(ecrReplicationConfigurationReplicationConfigurationRuleDestinationToTerraform)(struct!.destination),
  }
}

export interface EcrReplicationConfigurationReplicationConfiguration {
  /**
  * rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration.html#rule EcrReplicationConfiguration#rule}
  */
  readonly rule: EcrReplicationConfigurationReplicationConfigurationRule[];
}

function ecrReplicationConfigurationReplicationConfigurationToTerraform(struct?: EcrReplicationConfigurationReplicationConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    rule: cdktf.listMapper(ecrReplicationConfigurationReplicationConfigurationRuleToTerraform)(struct!.rule),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration.html aws_ecr_replication_configuration}
*/
export class EcrReplicationConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ecr_replication_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration.html aws_ecr_replication_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcrReplicationConfigurationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EcrReplicationConfigurationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_ecr_replication_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._replicationConfiguration = config.replicationConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // registry_id - computed: true, optional: false, required: false
  public get registryId() {
    return this.getStringAttribute('registry_id');
  }

  // replication_configuration - computed: false, optional: true, required: false
  private _replicationConfiguration?: EcrReplicationConfigurationReplicationConfiguration[];
  public get replicationConfiguration() {
    return this.interpolationForAttribute('replication_configuration') as any;
  }
  public set replicationConfiguration(value: EcrReplicationConfigurationReplicationConfiguration[] ) {
    this._replicationConfiguration = value;
  }
  public resetReplicationConfiguration() {
    this._replicationConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationConfigurationInput() {
    return this._replicationConfiguration
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      replication_configuration: cdktf.listMapper(ecrReplicationConfigurationReplicationConfigurationToTerraform)(this._replicationConfiguration),
    };
  }
}
