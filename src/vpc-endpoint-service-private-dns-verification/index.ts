// https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/vpc_endpoint_service_private_dns_verification
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcEndpointServicePrivateDnsVerificationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/vpc_endpoint_service_private_dns_verification#service_id VpcEndpointServicePrivateDnsVerification#service_id}
  */
  readonly serviceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/vpc_endpoint_service_private_dns_verification#wait_for_verification VpcEndpointServicePrivateDnsVerification#wait_for_verification}
  */
  readonly waitForVerification?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/vpc_endpoint_service_private_dns_verification#timeouts VpcEndpointServicePrivateDnsVerification#timeouts}
  */
  readonly timeouts?: VpcEndpointServicePrivateDnsVerificationTimeouts;
}
export interface VpcEndpointServicePrivateDnsVerificationTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/vpc_endpoint_service_private_dns_verification#create VpcEndpointServicePrivateDnsVerification#create}
  */
  readonly create?: string;
}

export function vpcEndpointServicePrivateDnsVerificationTimeoutsToTerraform(struct?: VpcEndpointServicePrivateDnsVerificationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function vpcEndpointServicePrivateDnsVerificationTimeoutsToHclTerraform(struct?: VpcEndpointServicePrivateDnsVerificationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpcEndpointServicePrivateDnsVerificationTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcEndpointServicePrivateDnsVerificationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/vpc_endpoint_service_private_dns_verification aws_vpc_endpoint_service_private_dns_verification}
*/
export class VpcEndpointServicePrivateDnsVerification extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_vpc_endpoint_service_private_dns_verification";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcEndpointServicePrivateDnsVerification resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcEndpointServicePrivateDnsVerification to import
  * @param importFromId The id of the existing VpcEndpointServicePrivateDnsVerification that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/vpc_endpoint_service_private_dns_verification#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcEndpointServicePrivateDnsVerification to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_vpc_endpoint_service_private_dns_verification", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/vpc_endpoint_service_private_dns_verification aws_vpc_endpoint_service_private_dns_verification} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcEndpointServicePrivateDnsVerificationConfig
  */
  public constructor(scope: Construct, id: string, config: VpcEndpointServicePrivateDnsVerificationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_vpc_endpoint_service_private_dns_verification',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.51.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._serviceId = config.serviceId;
    this._waitForVerification = config.waitForVerification;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // wait_for_verification - computed: false, optional: true, required: false
  private _waitForVerification?: boolean | cdktf.IResolvable; 
  public get waitForVerification() {
    return this.getBooleanAttribute('wait_for_verification');
  }
  public set waitForVerification(value: boolean | cdktf.IResolvable) {
    this._waitForVerification = value;
  }
  public resetWaitForVerification() {
    this._waitForVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForVerificationInput() {
    return this._waitForVerification;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VpcEndpointServicePrivateDnsVerificationTimeouts) {
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
      service_id: cdktf.stringToTerraform(this._serviceId),
      wait_for_verification: cdktf.booleanToTerraform(this._waitForVerification),
      timeouts: vpcEndpointServicePrivateDnsVerificationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      service_id: {
        value: cdktf.stringToHclTerraform(this._serviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_for_verification: {
        value: cdktf.booleanToHclTerraform(this._waitForVerification),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: vpcEndpointServicePrivateDnsVerificationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VpcEndpointServicePrivateDnsVerificationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
