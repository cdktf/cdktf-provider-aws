/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/ec2_transit_gateway_multicast_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2TransitGatewayMulticastDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/ec2_transit_gateway_multicast_domain#auto_accept_shared_associations Ec2TransitGatewayMulticastDomain#auto_accept_shared_associations}
  */
  readonly autoAcceptSharedAssociations?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/ec2_transit_gateway_multicast_domain#id Ec2TransitGatewayMulticastDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/ec2_transit_gateway_multicast_domain#igmpv2_support Ec2TransitGatewayMulticastDomain#igmpv2_support}
  */
  readonly igmpv2Support?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/ec2_transit_gateway_multicast_domain#region Ec2TransitGatewayMulticastDomain#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/ec2_transit_gateway_multicast_domain#static_sources_support Ec2TransitGatewayMulticastDomain#static_sources_support}
  */
  readonly staticSourcesSupport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/ec2_transit_gateway_multicast_domain#tags Ec2TransitGatewayMulticastDomain#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/ec2_transit_gateway_multicast_domain#tags_all Ec2TransitGatewayMulticastDomain#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/ec2_transit_gateway_multicast_domain#transit_gateway_id Ec2TransitGatewayMulticastDomain#transit_gateway_id}
  */
  readonly transitGatewayId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/ec2_transit_gateway_multicast_domain#timeouts Ec2TransitGatewayMulticastDomain#timeouts}
  */
  readonly timeouts?: Ec2TransitGatewayMulticastDomainTimeouts;
}
export interface Ec2TransitGatewayMulticastDomainTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/ec2_transit_gateway_multicast_domain#create Ec2TransitGatewayMulticastDomain#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/ec2_transit_gateway_multicast_domain#delete Ec2TransitGatewayMulticastDomain#delete}
  */
  readonly delete?: string;
}

export function ec2TransitGatewayMulticastDomainTimeoutsToTerraform(struct?: Ec2TransitGatewayMulticastDomainTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function ec2TransitGatewayMulticastDomainTimeoutsToHclTerraform(struct?: Ec2TransitGatewayMulticastDomainTimeouts | cdktf.IResolvable): any {
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
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2TransitGatewayMulticastDomainTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2TransitGatewayMulticastDomainTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2TransitGatewayMulticastDomainTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/ec2_transit_gateway_multicast_domain aws_ec2_transit_gateway_multicast_domain}
*/
export class Ec2TransitGatewayMulticastDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ec2_transit_gateway_multicast_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ec2TransitGatewayMulticastDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ec2TransitGatewayMulticastDomain to import
  * @param importFromId The id of the existing Ec2TransitGatewayMulticastDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/ec2_transit_gateway_multicast_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ec2TransitGatewayMulticastDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ec2_transit_gateway_multicast_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/ec2_transit_gateway_multicast_domain aws_ec2_transit_gateway_multicast_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2TransitGatewayMulticastDomainConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2TransitGatewayMulticastDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_transit_gateway_multicast_domain',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.12.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoAcceptSharedAssociations = config.autoAcceptSharedAssociations;
    this._id = config.id;
    this._igmpv2Support = config.igmpv2Support;
    this._region = config.region;
    this._staticSourcesSupport = config.staticSourcesSupport;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._transitGatewayId = config.transitGatewayId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_accept_shared_associations - computed: false, optional: true, required: false
  private _autoAcceptSharedAssociations?: string; 
  public get autoAcceptSharedAssociations() {
    return this.getStringAttribute('auto_accept_shared_associations');
  }
  public set autoAcceptSharedAssociations(value: string) {
    this._autoAcceptSharedAssociations = value;
  }
  public resetAutoAcceptSharedAssociations() {
    this._autoAcceptSharedAssociations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAcceptSharedAssociationsInput() {
    return this._autoAcceptSharedAssociations;
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

  // igmpv2_support - computed: false, optional: true, required: false
  private _igmpv2Support?: string; 
  public get igmpv2Support() {
    return this.getStringAttribute('igmpv2_support');
  }
  public set igmpv2Support(value: string) {
    this._igmpv2Support = value;
  }
  public resetIgmpv2Support() {
    this._igmpv2Support = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igmpv2SupportInput() {
    return this._igmpv2Support;
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // static_sources_support - computed: false, optional: true, required: false
  private _staticSourcesSupport?: string; 
  public get staticSourcesSupport() {
    return this.getStringAttribute('static_sources_support');
  }
  public set staticSourcesSupport(value: string) {
    this._staticSourcesSupport = value;
  }
  public resetStaticSourcesSupport() {
    this._staticSourcesSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticSourcesSupportInput() {
    return this._staticSourcesSupport;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // transit_gateway_id - computed: false, optional: false, required: true
  private _transitGatewayId?: string; 
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }
  public set transitGatewayId(value: string) {
    this._transitGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayIdInput() {
    return this._transitGatewayId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new Ec2TransitGatewayMulticastDomainTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: Ec2TransitGatewayMulticastDomainTimeouts) {
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
      auto_accept_shared_associations: cdktf.stringToTerraform(this._autoAcceptSharedAssociations),
      id: cdktf.stringToTerraform(this._id),
      igmpv2_support: cdktf.stringToTerraform(this._igmpv2Support),
      region: cdktf.stringToTerraform(this._region),
      static_sources_support: cdktf.stringToTerraform(this._staticSourcesSupport),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      transit_gateway_id: cdktf.stringToTerraform(this._transitGatewayId),
      timeouts: ec2TransitGatewayMulticastDomainTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_accept_shared_associations: {
        value: cdktf.stringToHclTerraform(this._autoAcceptSharedAssociations),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      igmpv2_support: {
        value: cdktf.stringToHclTerraform(this._igmpv2Support),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_sources_support: {
        value: cdktf.stringToHclTerraform(this._staticSourcesSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      transit_gateway_id: {
        value: cdktf.stringToHclTerraform(this._transitGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: ec2TransitGatewayMulticastDomainTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Ec2TransitGatewayMulticastDomainTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
