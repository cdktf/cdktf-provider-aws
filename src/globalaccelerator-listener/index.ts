// https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlobalacceleratorListenerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener#accelerator_arn GlobalacceleratorListener#accelerator_arn}
  */
  readonly acceleratorArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener#client_affinity GlobalacceleratorListener#client_affinity}
  */
  readonly clientAffinity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener#id GlobalacceleratorListener#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener#protocol GlobalacceleratorListener#protocol}
  */
  readonly protocol: string;
  /**
  * port_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener#port_range GlobalacceleratorListener#port_range}
  */
  readonly portRange: GlobalacceleratorListenerPortRange[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener#timeouts GlobalacceleratorListener#timeouts}
  */
  readonly timeouts?: GlobalacceleratorListenerTimeouts;
}
export interface GlobalacceleratorListenerPortRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener#from_port GlobalacceleratorListener#from_port}
  */
  readonly fromPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener#to_port GlobalacceleratorListener#to_port}
  */
  readonly toPort?: number;
}

export function globalacceleratorListenerPortRangeToTerraform(struct?: GlobalacceleratorListenerPortRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_port: cdktf.numberToTerraform(struct!.fromPort),
    to_port: cdktf.numberToTerraform(struct!.toPort),
  }
}

export class GlobalacceleratorListenerPortRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GlobalacceleratorListenerPortRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromPort = this._fromPort;
    }
    if (this._toPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPort = this._toPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalacceleratorListenerPortRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromPort = undefined;
      this._toPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromPort = value.fromPort;
      this._toPort = value.toPort;
    }
  }

  // from_port - computed: false, optional: true, required: false
  private _fromPort?: number; 
  public get fromPort() {
    return this.getNumberAttribute('from_port');
  }
  public set fromPort(value: number) {
    this._fromPort = value;
  }
  public resetFromPort() {
    this._fromPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromPortInput() {
    return this._fromPort;
  }

  // to_port - computed: false, optional: true, required: false
  private _toPort?: number; 
  public get toPort() {
    return this.getNumberAttribute('to_port');
  }
  public set toPort(value: number) {
    this._toPort = value;
  }
  public resetToPort() {
    this._toPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortInput() {
    return this._toPort;
  }
}

export class GlobalacceleratorListenerPortRangeList extends cdktf.ComplexList {
  public internalValue? : GlobalacceleratorListenerPortRange[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GlobalacceleratorListenerPortRangeOutputReference {
    return new GlobalacceleratorListenerPortRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlobalacceleratorListenerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener#create GlobalacceleratorListener#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener#delete GlobalacceleratorListener#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener#update GlobalacceleratorListener#update}
  */
  readonly update?: string;
}

export function globalacceleratorListenerTimeoutsToTerraform(struct?: GlobalacceleratorListenerTimeoutsOutputReference | GlobalacceleratorListenerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class GlobalacceleratorListenerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalacceleratorListenerTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalacceleratorListenerTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener aws_globalaccelerator_listener}
*/
export class GlobalacceleratorListener extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_globalaccelerator_listener";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener aws_globalaccelerator_listener} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlobalacceleratorListenerConfig
  */
  public constructor(scope: Construct, id: string, config: GlobalacceleratorListenerConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_globalaccelerator_listener',
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
    this._acceleratorArn = config.acceleratorArn;
    this._clientAffinity = config.clientAffinity;
    this._id = config.id;
    this._protocol = config.protocol;
    this._portRange.internalValue = config.portRange;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accelerator_arn - computed: false, optional: false, required: true
  private _acceleratorArn?: string; 
  public get acceleratorArn() {
    return this.getStringAttribute('accelerator_arn');
  }
  public set acceleratorArn(value: string) {
    this._acceleratorArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorArnInput() {
    return this._acceleratorArn;
  }

  // client_affinity - computed: false, optional: true, required: false
  private _clientAffinity?: string; 
  public get clientAffinity() {
    return this.getStringAttribute('client_affinity');
  }
  public set clientAffinity(value: string) {
    this._clientAffinity = value;
  }
  public resetClientAffinity() {
    this._clientAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAffinityInput() {
    return this._clientAffinity;
  }

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

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // port_range - computed: false, optional: false, required: true
  private _portRange = new GlobalacceleratorListenerPortRangeList(this, "port_range", true);
  public get portRange() {
    return this._portRange;
  }
  public putPortRange(value: GlobalacceleratorListenerPortRange[] | cdktf.IResolvable) {
    this._portRange.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeInput() {
    return this._portRange.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GlobalacceleratorListenerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GlobalacceleratorListenerTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accelerator_arn: cdktf.stringToTerraform(this._acceleratorArn),
      client_affinity: cdktf.stringToTerraform(this._clientAffinity),
      id: cdktf.stringToTerraform(this._id),
      protocol: cdktf.stringToTerraform(this._protocol),
      port_range: cdktf.listMapper(globalacceleratorListenerPortRangeToTerraform, true)(this._portRange.internalValue),
      timeouts: globalacceleratorListenerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
