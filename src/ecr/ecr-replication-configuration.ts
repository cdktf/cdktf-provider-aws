// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS EC2 Container Registry
*/
export interface EcrReplicationConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * replication_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration.html#replication_configuration EcrReplicationConfiguration#replication_configuration}
  */
  readonly replicationConfiguration?: EcrReplicationConfigurationReplicationConfiguration;
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

export function ecrReplicationConfigurationReplicationConfigurationRuleDestinationToTerraform(struct?: EcrReplicationConfigurationReplicationConfigurationRuleDestination): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export function ecrReplicationConfigurationReplicationConfigurationRuleToTerraform(struct?: EcrReplicationConfigurationReplicationConfigurationRuleOutputReference | EcrReplicationConfigurationReplicationConfigurationRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.listMapper(ecrReplicationConfigurationReplicationConfigurationRuleDestinationToTerraform)(struct!.destination),
  }
}

export class EcrReplicationConfigurationReplicationConfigurationRuleOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EcrReplicationConfigurationReplicationConfigurationRule | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._destination) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcrReplicationConfigurationReplicationConfigurationRule | undefined) {
    if (value === undefined) {
      this._destination = undefined;
    }
    else {
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: EcrReplicationConfigurationReplicationConfigurationRuleDestination[]; 
  public get destination() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('destination') as any;
  }
  public set destination(value: EcrReplicationConfigurationReplicationConfigurationRuleDestination[]) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}
export interface EcrReplicationConfigurationReplicationConfiguration {
  /**
  * rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration.html#rule EcrReplicationConfiguration#rule}
  */
  readonly rule: EcrReplicationConfigurationReplicationConfigurationRule;
}

export function ecrReplicationConfigurationReplicationConfigurationToTerraform(struct?: EcrReplicationConfigurationReplicationConfigurationOutputReference | EcrReplicationConfigurationReplicationConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: ecrReplicationConfigurationReplicationConfigurationRuleToTerraform(struct!.rule),
  }
}

export class EcrReplicationConfigurationReplicationConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EcrReplicationConfigurationReplicationConfiguration | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._rule) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcrReplicationConfigurationReplicationConfiguration | undefined) {
    if (value === undefined) {
      this._rule.internalValue = undefined;
    }
    else {
      this._rule.internalValue = value.rule;
    }
  }

  // rule - computed: false, optional: false, required: true
  private _rule = new EcrReplicationConfigurationReplicationConfigurationRuleOutputReference(this as any, "rule", true);
  public get rule() {
    return this._rule;
  }
  public putRule(value: EcrReplicationConfigurationReplicationConfigurationRule) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
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
    this._replicationConfiguration.internalValue = config.replicationConfiguration;
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
  private _replicationConfiguration = new EcrReplicationConfigurationReplicationConfigurationOutputReference(this as any, "replication_configuration", true);
  public get replicationConfiguration() {
    return this._replicationConfiguration;
  }
  public putReplicationConfiguration(value: EcrReplicationConfigurationReplicationConfiguration) {
    this._replicationConfiguration.internalValue = value;
  }
  public resetReplicationConfiguration() {
    this._replicationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationConfigurationInput() {
    return this._replicationConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      replication_configuration: ecrReplicationConfigurationReplicationConfigurationToTerraform(this._replicationConfiguration.internalValue),
    };
  }
}
