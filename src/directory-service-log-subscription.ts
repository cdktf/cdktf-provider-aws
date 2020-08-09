// https://www.terraform.io/docs/providers/aws/r/directory_service_log_subscription.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "directory_id": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "log_group_name": {
        "type": "string",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DirectoryServiceLogSubscriptionConfig extends TerraformMetaArguments {
  readonly directoryId: string;
  readonly logGroupName: string;
}

// Resource

export class DirectoryServiceLogSubscription extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DirectoryServiceLogSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_directory_service_log_subscription',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._directoryId = config.directoryId;
    this._logGroupName = config.logGroupName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // directory_id - computed: false, optional: false, required: true
  private _directoryId: string;
  public get directoryId() {
    return this._directoryId;
  }
  public set directoryId(value: string) {
    this._directoryId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // log_group_name - computed: false, optional: false, required: true
  private _logGroupName: string;
  public get logGroupName() {
    return this._logGroupName;
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      directory_id: this._directoryId,
      log_group_name: this._logGroupName,
    };
  }
}
