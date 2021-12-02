// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Service Discovery
*/
export interface ServiceDiscoveryInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_instance.html#attributes ServiceDiscoveryInstance#attributes}
  */
  readonly attributes: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_instance.html#instance_id ServiceDiscoveryInstance#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_instance.html#service_id ServiceDiscoveryInstance#service_id}
  */
  readonly serviceId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_instance.html aws_service_discovery_instance}
*/
export class ServiceDiscoveryInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_service_discovery_instance";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_instance.html aws_service_discovery_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceDiscoveryInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceDiscoveryInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_service_discovery_instance',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._attributes = config.attributes;
    this._instanceId = config.instanceId;
    this._serviceId = config.serviceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attributes - computed: false, optional: false, required: true
  private _attributes?: { [key: string]: string } | cdktf.IResolvable; 
  public get attributes() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('attributes') as any;
  }
  public set attributes(value: { [key: string]: string } | cdktf.IResolvable) {
    this._attributes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // service_id - computed: false, optional: false, required: true
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attributes: cdktf.hashMapper(cdktf.anyToTerraform)(this._attributes),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      service_id: cdktf.stringToTerraform(this._serviceId),
    };
  }
}
