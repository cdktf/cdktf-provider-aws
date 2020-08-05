// https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_schedule.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "definitions": {
        "type": [
          "set",
          "string"
        ],
        "required": true
      },
      "description": {
        "type": "string",
        "optional": true
      },
      "force_destroy": {
        "type": "bool",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "identifier": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "identifier_prefix": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface RedshiftSnapshotScheduleConfig extends TerraformMetaArguments {
  readonly definitions: string[];
  readonly description?: string;
  readonly forceDestroy?: boolean;
  readonly identifier?: string;
  readonly identifierPrefix?: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class RedshiftSnapshotSchedule extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: RedshiftSnapshotScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_redshift_snapshot_schedule',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._definitions = config.definitions;
    this._description = config.description;
    this._forceDestroy = config.forceDestroy;
    this._identifier = config.identifier;
    this._identifierPrefix = config.identifierPrefix;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // definitions - computed: false, optional: false, required: true
  private _definitions: string[];
  public get definitions() {
    return this._definitions;
  }
  public set definitions(value: string[]) {
    this._definitions = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean;
  public get forceDestroy() {
    return this._forceDestroy;
  }
  public set forceDestroy(value: boolean | undefined) {
    this._forceDestroy = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // identifier - computed: true, optional: true, required: false
  private _identifier?: string;
  public get identifier() {
    return this._identifier ?? this.getStringAttribute('identifier');
  }
  public set identifier(value: string | undefined) {
    this._identifier = value;
  }

  // identifier_prefix - computed: true, optional: true, required: false
  private _identifierPrefix?: string;
  public get identifierPrefix() {
    return this._identifierPrefix ?? this.getStringAttribute('identifier_prefix');
  }
  public set identifierPrefix(value: string | undefined) {
    this._identifierPrefix = value;
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

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      definitions: this._definitions,
      description: this._description,
      force_destroy: this._forceDestroy,
      identifier: this._identifier,
      identifier_prefix: this._identifierPrefix,
      tags: this._tags,
    };
  }
}
