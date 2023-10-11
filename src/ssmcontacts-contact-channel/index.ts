// https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/ssmcontacts_contact_channel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsmcontactsContactChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/ssmcontacts_contact_channel#contact_id SsmcontactsContactChannel#contact_id}
  */
  readonly contactId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/ssmcontacts_contact_channel#id SsmcontactsContactChannel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/ssmcontacts_contact_channel#name SsmcontactsContactChannel#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/ssmcontacts_contact_channel#type SsmcontactsContactChannel#type}
  */
  readonly type: string;
  /**
  * delivery_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/ssmcontacts_contact_channel#delivery_address SsmcontactsContactChannel#delivery_address}
  */
  readonly deliveryAddress: SsmcontactsContactChannelDeliveryAddress;
}
export interface SsmcontactsContactChannelDeliveryAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/ssmcontacts_contact_channel#simple_address SsmcontactsContactChannel#simple_address}
  */
  readonly simpleAddress: string;
}

export function ssmcontactsContactChannelDeliveryAddressToTerraform(struct?: SsmcontactsContactChannelDeliveryAddressOutputReference | SsmcontactsContactChannelDeliveryAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_address: cdktf.stringToTerraform(struct!.simpleAddress),
  }
}

export class SsmcontactsContactChannelDeliveryAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SsmcontactsContactChannelDeliveryAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._simpleAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleAddress = this._simpleAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmcontactsContactChannelDeliveryAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._simpleAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._simpleAddress = value.simpleAddress;
    }
  }

  // simple_address - computed: false, optional: false, required: true
  private _simpleAddress?: string; 
  public get simpleAddress() {
    return this.getStringAttribute('simple_address');
  }
  public set simpleAddress(value: string) {
    this._simpleAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleAddressInput() {
    return this._simpleAddress;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/ssmcontacts_contact_channel aws_ssmcontacts_contact_channel}
*/
export class SsmcontactsContactChannel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ssmcontacts_contact_channel";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/ssmcontacts_contact_channel aws_ssmcontacts_contact_channel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsmcontactsContactChannelConfig
  */
  public constructor(scope: Construct, id: string, config: SsmcontactsContactChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssmcontacts_contact_channel',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.20.1',
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
    this._contactId = config.contactId;
    this._id = config.id;
    this._name = config.name;
    this._type = config.type;
    this._deliveryAddress.internalValue = config.deliveryAddress;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activation_status - computed: true, optional: false, required: false
  public get activationStatus() {
    return this.getStringAttribute('activation_status');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // contact_id - computed: false, optional: false, required: true
  private _contactId?: string; 
  public get contactId() {
    return this.getStringAttribute('contact_id');
  }
  public set contactId(value: string) {
    this._contactId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactIdInput() {
    return this._contactId;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // delivery_address - computed: false, optional: false, required: true
  private _deliveryAddress = new SsmcontactsContactChannelDeliveryAddressOutputReference(this, "delivery_address");
  public get deliveryAddress() {
    return this._deliveryAddress;
  }
  public putDeliveryAddress(value: SsmcontactsContactChannelDeliveryAddress) {
    this._deliveryAddress.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryAddressInput() {
    return this._deliveryAddress.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contact_id: cdktf.stringToTerraform(this._contactId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
      delivery_address: ssmcontactsContactChannelDeliveryAddressToTerraform(this._deliveryAddress.internalValue),
    };
  }
}
