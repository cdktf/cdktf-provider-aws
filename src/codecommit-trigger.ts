// https://www.terraform.io/docs/providers/aws/r/codecommit_trigger.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CodecommitTriggerConfig extends TerraformMetaArguments {
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

// Resource

export class CodecommitTrigger extends TerraformResource {

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
      repository_name: this._repositoryName,
      trigger: this._trigger,
    };
  }
}
