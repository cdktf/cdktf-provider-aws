/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/route53_hosted_zone_dnssec
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Route53HostedZoneDnssecConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/route53_hosted_zone_dnssec#hosted_zone_id Route53HostedZoneDnssec#hosted_zone_id}
  */
  readonly hostedZoneId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/route53_hosted_zone_dnssec#id Route53HostedZoneDnssec#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/route53_hosted_zone_dnssec#signing_status Route53HostedZoneDnssec#signing_status}
  */
  readonly signingStatus?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/route53_hosted_zone_dnssec#timeouts Route53HostedZoneDnssec#timeouts}
  */
  readonly timeouts?: Route53HostedZoneDnssecTimeouts;
}
export interface Route53HostedZoneDnssecTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/route53_hosted_zone_dnssec#create Route53HostedZoneDnssec#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/route53_hosted_zone_dnssec#delete Route53HostedZoneDnssec#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/route53_hosted_zone_dnssec#update Route53HostedZoneDnssec#update}
  */
  readonly update?: string;
}

export function route53HostedZoneDnssecTimeoutsToTerraform(struct?: Route53HostedZoneDnssecTimeouts | cdktf.IResolvable): any {
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


export function route53HostedZoneDnssecTimeoutsToHclTerraform(struct?: Route53HostedZoneDnssecTimeouts | cdktf.IResolvable): any {
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
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Route53HostedZoneDnssecTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Route53HostedZoneDnssecTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Route53HostedZoneDnssecTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/route53_hosted_zone_dnssec aws_route53_hosted_zone_dnssec}
*/
export class Route53HostedZoneDnssec extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_route53_hosted_zone_dnssec";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Route53HostedZoneDnssec resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Route53HostedZoneDnssec to import
  * @param importFromId The id of the existing Route53HostedZoneDnssec that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/route53_hosted_zone_dnssec#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Route53HostedZoneDnssec to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_route53_hosted_zone_dnssec", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/route53_hosted_zone_dnssec aws_route53_hosted_zone_dnssec} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Route53HostedZoneDnssecConfig
  */
  public constructor(scope: Construct, id: string, config: Route53HostedZoneDnssecConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_route53_hosted_zone_dnssec',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.2.0',
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
    this._hostedZoneId = config.hostedZoneId;
    this._id = config.id;
    this._signingStatus = config.signingStatus;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hosted_zone_id - computed: false, optional: false, required: true
  private _hostedZoneId?: string; 
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
  }
  public set hostedZoneId(value: string) {
    this._hostedZoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostedZoneIdInput() {
    return this._hostedZoneId;
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

  // signing_status - computed: false, optional: true, required: false
  private _signingStatus?: string; 
  public get signingStatus() {
    return this.getStringAttribute('signing_status');
  }
  public set signingStatus(value: string) {
    this._signingStatus = value;
  }
  public resetSigningStatus() {
    this._signingStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingStatusInput() {
    return this._signingStatus;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new Route53HostedZoneDnssecTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: Route53HostedZoneDnssecTimeouts) {
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
      hosted_zone_id: cdktf.stringToTerraform(this._hostedZoneId),
      id: cdktf.stringToTerraform(this._id),
      signing_status: cdktf.stringToTerraform(this._signingStatus),
      timeouts: route53HostedZoneDnssecTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      hosted_zone_id: {
        value: cdktf.stringToHclTerraform(this._hostedZoneId),
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
      signing_status: {
        value: cdktf.stringToHclTerraform(this._signingStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: route53HostedZoneDnssecTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Route53HostedZoneDnssecTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
