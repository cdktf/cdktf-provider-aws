// https://www.terraform.io/docs/providers/aws/r/appautoscaling_target.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "max_capacity": {
        "type": "number",
        "required": true
      },
      "min_capacity": {
        "type": "number",
        "required": true
      },
      "resource_id": {
        "type": "string",
        "required": true
      },
      "role_arn": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "scalable_dimension": {
        "type": "string",
        "required": true
      },
      "service_namespace": {
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

export interface AppautoscalingTargetConfig extends TerraformMetaArguments {
  readonly maxCapacity: number;
  readonly minCapacity: number;
  readonly resourceId: string;
  readonly roleArn?: string;
  readonly scalableDimension: string;
  readonly serviceNamespace: string;
}

// Resource

export class AppautoscalingTarget extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AppautoscalingTargetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appautoscaling_target',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._maxCapacity = config.maxCapacity;
    this._minCapacity = config.minCapacity;
    this._resourceId = config.resourceId;
    this._roleArn = config.roleArn;
    this._scalableDimension = config.scalableDimension;
    this._serviceNamespace = config.serviceNamespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // max_capacity - computed: false, optional: false, required: true
  private _maxCapacity: number;
  public get maxCapacity() {
    return this._maxCapacity;
  }
  public set maxCapacity(value: number) {
    this._maxCapacity = value;
  }

  // min_capacity - computed: false, optional: false, required: true
  private _minCapacity: number;
  public get minCapacity() {
    return this._minCapacity;
  }
  public set minCapacity(value: number) {
    this._minCapacity = value;
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId: string;
  public get resourceId() {
    return this._resourceId;
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string;
  public get roleArn() {
    return this._roleArn ?? this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string | undefined) {
    this._roleArn = value;
  }

  // scalable_dimension - computed: false, optional: false, required: true
  private _scalableDimension: string;
  public get scalableDimension() {
    return this._scalableDimension;
  }
  public set scalableDimension(value: string) {
    this._scalableDimension = value;
  }

  // service_namespace - computed: false, optional: false, required: true
  private _serviceNamespace: string;
  public get serviceNamespace() {
    return this._serviceNamespace;
  }
  public set serviceNamespace(value: string) {
    this._serviceNamespace = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      max_capacity: this._maxCapacity,
      min_capacity: this._minCapacity,
      resource_id: this._resourceId,
      role_arn: this._roleArn,
      scalable_dimension: this._scalableDimension,
      service_namespace: this._serviceNamespace,
    };
  }
}
