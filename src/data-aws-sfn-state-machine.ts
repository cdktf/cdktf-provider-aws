// https://www.terraform.io/docs/providers/aws/r/data_aws_sfn_state_machine.html
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
      "creation_date": {
        "type": "string",
        "computed": true
      },
      "definition": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "role_arn": {
        "type": "string",
        "computed": true
      },
      "status": {
        "type": "string",
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsSfnStateMachineConfig extends TerraformMetaArguments {
  readonly name: string;
}

// Resource

export class DataAwsSfnStateMachine extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsSfnStateMachineConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sfn_state_machine',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // creation_date - computed: true, optional: false, required: true
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // definition - computed: true, optional: false, required: true
  public get definition() {
    return this.getStringAttribute('definition');
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

  // role_arn - computed: true, optional: false, required: true
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
    };
  }
}
