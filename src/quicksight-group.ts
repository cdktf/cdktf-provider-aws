// https://www.terraform.io/docs/providers/aws/r/quicksight_group.html
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
      "aws_account_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "description": {
        "type": "string",
        "optional": true
      },
      "group_name": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "namespace": {
        "type": "string",
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

export interface QuicksightGroupConfig extends TerraformMetaArguments {
  readonly awsAccountId?: string;
  readonly description?: string;
  readonly groupName: string;
  readonly namespace?: string;
}

// Resource

export class QuicksightGroup extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: QuicksightGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_quicksight_group',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._awsAccountId = config.awsAccountId;
    this._description = config.description;
    this._groupName = config.groupName;
    this._namespace = config.namespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // aws_account_id - computed: true, optional: true, required: false
  private _awsAccountId?: string;
  public get awsAccountId() {
    return this._awsAccountId ?? this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string | undefined) {
    this._awsAccountId = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // group_name - computed: false, optional: false, required: true
  private _groupName: string;
  public get groupName() {
    return this._groupName;
  }
  public set groupName(value: string) {
    this._groupName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string;
  public get namespace() {
    return this._namespace;
  }
  public set namespace(value: string | undefined) {
    this._namespace = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_account_id: this._awsAccountId,
      description: this._description,
      group_name: this._groupName,
      namespace: this._namespace,
    };
  }
}
