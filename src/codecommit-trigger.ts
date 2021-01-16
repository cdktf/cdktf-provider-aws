// https://www.terraform.io/docs/providers/aws/r/codecommit_trigger.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CodecommitTriggerConfig extends cdktf.TerraformMetaArguments {
  readonly repositoryName: string;
  /** trigger block */
  readonly trigger: CodecommitTriggerTrigger[];
}
export interface CodecommitTriggerTrigger {
  readonly branches?: string[];
  readonly customData?: string;
  readonly destinationArn: string;
  readonly events: string[];
  readonly name: string;
}

function codecommitTriggerTriggerToTerraform(struct?: CodecommitTriggerTrigger): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    branches: cdktf.listMapper(cdktf.stringToTerraform)(struct!.branches),
    custom_data: cdktf.stringToTerraform(struct!.customData),
    destination_arn: cdktf.stringToTerraform(struct!.destinationArn),
    events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.events),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


// Resource

export class CodecommitTrigger extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _repositoryName: string;
  public get repositoryName() {
    return this.getStringAttribute('repository_name');
  }
  public set repositoryName(value: string) {
    this._repositoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryNameInput() {
    return this._repositoryName
  }

  // trigger - computed: false, optional: false, required: true
  private _trigger: CodecommitTriggerTrigger[];
  public get trigger() {
    return this.interpolationForAttribute('trigger') as any;
  }
  public set trigger(value: CodecommitTriggerTrigger[]) {
    this._trigger = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger
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
