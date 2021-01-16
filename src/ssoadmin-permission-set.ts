// https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SsoadminPermissionSetConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly instanceArn: string;
  readonly name: string;
  readonly relayState?: string;
  readonly sessionDuration?: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class SsoadminPermissionSet extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SsoadminPermissionSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssoadmin_permission_set',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._instanceArn = config.instanceArn;
    this._name = config.name;
    this._relayState = config.relayState;
    this._sessionDuration = config.sessionDuration;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_date - computed: true, optional: false, required: true
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // instance_arn - computed: false, optional: false, required: true
  private _instanceArn: string;
  public get instanceArn() {
    return this._instanceArn;
  }
  public set instanceArn(value: string) {
    this._instanceArn = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // relay_state - computed: false, optional: true, required: false
  private _relayState?: string;
  public get relayState() {
    return this._relayState;
  }
  public set relayState(value: string | undefined) {
    this._relayState = value;
  }

  // session_duration - computed: false, optional: true, required: false
  private _sessionDuration?: string;
  public get sessionDuration() {
    return this._sessionDuration;
  }
  public set sessionDuration(value: string | undefined) {
    this._sessionDuration = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      instance_arn: this._instanceArn,
      name: this._name,
      relay_state: this._relayState,
      session_duration: this._sessionDuration,
      tags: this._tags,
    };
  }
}
