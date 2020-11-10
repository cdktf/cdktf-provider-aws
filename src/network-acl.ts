// https://www.terraform.io/docs/providers/aws/r/network_acl.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface NetworkAclConfig extends TerraformMetaArguments {
  readonly egress?: NetworkAclEgress[];
  readonly ingress?: NetworkAclIngress[];
  readonly subnetId?: string;
  readonly subnetIds?: string[];
  readonly tags?: { [key: string]: string };
  readonly vpcId: string;
}
export interface NetworkAclEgress {
  readonly action?: string;
  readonly cidrBlock?: string;
  readonly fromPort?: number;
  readonly icmpCode?: number;
  readonly icmpType?: number;
  readonly ipv6CidrBlock?: string;
  readonly protocol?: string;
  readonly ruleNo?: number;
  readonly toPort?: number;
}
export interface NetworkAclIngress {
  readonly action?: string;
  readonly cidrBlock?: string;
  readonly fromPort?: number;
  readonly icmpCode?: number;
  readonly icmpType?: number;
  readonly ipv6CidrBlock?: string;
  readonly protocol?: string;
  readonly ruleNo?: number;
  readonly toPort?: number;
}

// Resource

export class NetworkAcl extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: NetworkAclConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_network_acl',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._egress = config.egress;
    this._ingress = config.ingress;
    this._subnetId = config.subnetId;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // egress - computed: true, optional: true, required: false
  private _egress?: NetworkAclEgress[]
  public get egress(): NetworkAclEgress[] {
    return this.interpolationForAttribute('egress') as any; // Getting the computed value is not yet implemented
  }
  public set egress(value: NetworkAclEgress[]) {
    this._egress = value;
  }
  public resetEgress() {
    this._egress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressInput() {
    return this._egress
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ingress - computed: true, optional: true, required: false
  private _ingress?: NetworkAclIngress[]
  public get ingress(): NetworkAclIngress[] {
    return this.interpolationForAttribute('ingress') as any; // Getting the computed value is not yet implemented
  }
  public set ingress(value: NetworkAclIngress[]) {
    this._ingress = value;
  }
  public resetIngress() {
    this._ingress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string;
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string ) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId
  }

  // subnet_ids - computed: true, optional: true, required: false
  private _subnetIds?: string[];
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId: string;
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      egress: this._egress,
      ingress: this._ingress,
      subnet_id: this._subnetId,
      subnet_ids: this._subnetIds,
      tags: this._tags,
      vpc_id: this._vpcId,
    };
  }
}
