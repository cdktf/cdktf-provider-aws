// https://www.terraform.io/docs/providers/aws/r/appautoscaling_target
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppautoscalingTargetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_target#id AppautoscalingTarget#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_target#max_capacity AppautoscalingTarget#max_capacity}
  */
  readonly maxCapacity: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_target#min_capacity AppautoscalingTarget#min_capacity}
  */
  readonly minCapacity: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_target#resource_id AppautoscalingTarget#resource_id}
  */
  readonly resourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_target#role_arn AppautoscalingTarget#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_target#scalable_dimension AppautoscalingTarget#scalable_dimension}
  */
  readonly scalableDimension: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_target#service_namespace AppautoscalingTarget#service_namespace}
  */
  readonly serviceNamespace: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_target aws_appautoscaling_target}
*/
export class AppautoscalingTarget extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_appautoscaling_target";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_target aws_appautoscaling_target} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppautoscalingTargetConfig
  */
  public constructor(scope: Construct, id: string, config: AppautoscalingTargetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appautoscaling_target',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
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
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // max_capacity - computed: false, optional: false, required: true
  private _maxCapacity?: number; 
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }
  public set maxCapacity(value: number) {
    this._maxCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCapacityInput() {
    return this._maxCapacity;
  }

  // min_capacity - computed: false, optional: false, required: true
  private _minCapacity?: number; 
  public get minCapacity() {
    return this.getNumberAttribute('min_capacity');
  }
  public set minCapacity(value: number) {
    this._minCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minCapacityInput() {
    return this._minCapacity;
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // scalable_dimension - computed: false, optional: false, required: true
  private _scalableDimension?: string; 
  public get scalableDimension() {
    return this.getStringAttribute('scalable_dimension');
  }
  public set scalableDimension(value: string) {
    this._scalableDimension = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalableDimensionInput() {
    return this._scalableDimension;
  }

  // service_namespace - computed: false, optional: false, required: true
  private _serviceNamespace?: string; 
  public get serviceNamespace() {
    return this.getStringAttribute('service_namespace');
  }
  public set serviceNamespace(value: string) {
    this._serviceNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNamespaceInput() {
    return this._serviceNamespace;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      max_capacity: cdktf.numberToTerraform(this._maxCapacity),
      min_capacity: cdktf.numberToTerraform(this._minCapacity),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      scalable_dimension: cdktf.stringToTerraform(this._scalableDimension),
      service_namespace: cdktf.stringToTerraform(this._serviceNamespace),
    };
  }
}
