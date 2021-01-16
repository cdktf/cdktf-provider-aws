// https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";

// Configuration

export interface ServerlessapplicationrepositoryCloudformationStackConfig extends TerraformMetaArguments {
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

// Resource

export class ServerlessapplicationrepositoryCloudformationStack extends TerraformResource {

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
    return this._applicationId;
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }

  // capabilities - computed: false, optional: false, required: true
  private _capabilities: string[];
  public get capabilities() {
    return this._capabilities;
  }
  public set capabilities(value: string[]) {
    this._capabilities = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // outputs - computed: true, optional: false, required: true
  public outputs(key: string): string {
    return new StringMap(this, 'outputs').lookup(key);
  }

  // parameters - computed: true, optional: true, required: false
  private _parameters?: { [key: string]: string }
  public get parameters(): { [key: string]: string } | undefined {
    return this._parameters; // Getting the computed value is not yet implemented
  }
  public set parameters(value: { [key: string]: string } | undefined) {
    this._parameters = value;
  }

  // semantic_version - computed: true, optional: true, required: false
  private _semanticVersion?: string;
  public get semanticVersion() {
    return this._semanticVersion ?? this.getStringAttribute('semantic_version');
  }
  public set semanticVersion(value: string | undefined) {
    this._semanticVersion = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ServerlessapplicationrepositoryCloudformationStackTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ServerlessapplicationrepositoryCloudformationStackTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: this._applicationId,
      capabilities: this._capabilities,
      name: this._name,
      parameters: this._parameters,
      semantic_version: this._semanticVersion,
      tags: this._tags,
      timeouts: this._timeouts,
    };
  }
}
