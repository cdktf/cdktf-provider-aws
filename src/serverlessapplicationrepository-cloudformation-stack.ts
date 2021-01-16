// https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServerlessapplicationrepositoryCloudformationStackConfig extends cdktf.TerraformMetaArguments {
  readonly applicationId: string;
  readonly capabilities: string[];
  readonly name: string;
  readonly parameters?: { [key: string]: string };
  readonly semanticVersion?: string;
  readonly tags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: ServerlessapplicationrepositoryCloudformationStackTimeouts;
}
export interface ServerlessapplicationrepositoryCloudformationStackTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function serverlessapplicationrepositoryCloudformationStackTimeoutsToTerraform(struct?: ServerlessapplicationrepositoryCloudformationStackTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ServerlessapplicationrepositoryCloudformationStack extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ServerlessapplicationrepositoryCloudformationStackConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_serverlessapplicationrepository_cloudformation_stack',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._applicationId = config.applicationId;
    this._capabilities = config.capabilities;
    this._name = config.name;
    this._parameters = config.parameters;
    this._semanticVersion = config.semanticVersion;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: false, required: true
  private _applicationId: string;
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId
  }

  // capabilities - computed: false, optional: false, required: true
  private _capabilities: string[];
  public get capabilities() {
    return this.getListAttribute('capabilities');
  }
  public set capabilities(value: string[]) {
    this._capabilities = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities
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

  // outputs - computed: true, optional: false, required: false
  public outputs(key: string): string {
    return new cdktf.StringMap(this, 'outputs').lookup(key);
  }

  // parameters - computed: true, optional: true, required: false
  private _parameters?: { [key: string]: string }
  public get parameters(): { [key: string]: string } {
    return this.interpolationForAttribute('parameters') as any; // Getting the computed value is not yet implemented
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters
  }

  // semantic_version - computed: true, optional: true, required: false
  private _semanticVersion?: string;
  public get semanticVersion() {
    return this.getStringAttribute('semantic_version');
  }
  public set semanticVersion(value: string) {
    this._semanticVersion = value;
  }
  public resetSemanticVersion() {
    this._semanticVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get semanticVersionInput() {
    return this._semanticVersion
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ServerlessapplicationrepositoryCloudformationStackTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ServerlessapplicationrepositoryCloudformationStackTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      capabilities: cdktf.listMapper(cdktf.stringToTerraform)(this._capabilities),
      name: cdktf.stringToTerraform(this._name),
      parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
      semantic_version: cdktf.stringToTerraform(this._semanticVersion),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      timeouts: serverlessapplicationrepositoryCloudformationStackTimeoutsToTerraform(this._timeouts),
    };
  }
}
