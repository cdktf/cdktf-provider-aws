// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS CodeCommit
*/
export interface CodecommitTriggerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_trigger.html#repository_name CodecommitTrigger#repository_name}
  */
  readonly repositoryName: string;
  /**
  * trigger block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_trigger.html#trigger CodecommitTrigger#trigger}
  */
  readonly trigger: CodecommitTriggerTrigger[];
}
export interface CodecommitTriggerTrigger {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_trigger.html#branches CodecommitTrigger#branches}
  */
  readonly branches?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_trigger.html#custom_data CodecommitTrigger#custom_data}
  */
  readonly customData?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_trigger.html#destination_arn CodecommitTrigger#destination_arn}
  */
  readonly destinationArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_trigger.html#events CodecommitTrigger#events}
  */
  readonly events: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_trigger.html#name CodecommitTrigger#name}
  */
  readonly name: string;
}

export function codecommitTriggerTriggerToTerraform(struct?: CodecommitTriggerTrigger): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branches: cdktf.listMapper(cdktf.stringToTerraform)(struct!.branches),
    custom_data: cdktf.stringToTerraform(struct!.customData),
    destination_arn: cdktf.stringToTerraform(struct!.destinationArn),
    events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.events),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/codecommit_trigger.html aws_codecommit_trigger}
*/
export class CodecommitTrigger extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_codecommit_trigger";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codecommit_trigger.html aws_codecommit_trigger} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CodecommitTriggerConfig
  */
  public constructor(scope: Construct, id: string, config: CodecommitTriggerConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_codecommit_trigger',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._repositoryName = config.repositoryName;
    this._trigger = config.trigger;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration_id - computed: true, optional: false, required: false
  public get configurationId() {
    return this.getStringAttribute('configuration_id');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // repository_name - computed: false, optional: false, required: true
  private _repositoryName?: string; 
  public get repositoryName() {
    return this.getStringAttribute('repository_name');
  }
  public set repositoryName(value: string) {
    this._repositoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryNameInput() {
    return this._repositoryName;
  }

  // trigger - computed: false, optional: false, required: true
  private _trigger?: CodecommitTriggerTrigger[]; 
  public get trigger() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('trigger') as any;
  }
  public set trigger(value: CodecommitTriggerTrigger[]) {
    this._trigger = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      repository_name: cdktf.stringToTerraform(this._repositoryName),
      trigger: cdktf.listMapper(codecommitTriggerTriggerToTerraform)(this._trigger),
    };
  }
}
