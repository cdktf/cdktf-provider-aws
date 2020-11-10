// https://www.terraform.io/docs/providers/aws/r/default_network_acl.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DefaultNetworkAclConfig extends TerraformMetaArguments {
  readonly defaultNetworkAclId: string;
  readonly subnetIds?: string[];
  readonly tags?: { [key: string]: string };
  /** egress block */
  readonly egress?: DefaultNetworkAclEgress[];
  /** ingress block */
  readonly ingress?: DefaultNetworkAclIngress[];
}
export interface DefaultNetworkAclEgress {
  readonly action: string;
  readonly cidrBlock?: string;
  readonly fromPort: number;
  readonly icmpCode?: number;
  readonly icmpType?: number;
  readonly ipv6CidrBlock?: string;
  readonly protocol: string;
  readonly ruleNo: number;
  readonly toPort: number;
}
export interface DefaultNetworkAclIngress {
  readonly action: string;
  readonly cidrBlock?: string;
  readonly fromPort: number;
  readonly icmpCode?: number;
  readonly icmpType?: number;
  readonly ipv6CidrBlock?: string;
  readonly protocol: string;
  readonly ruleNo: number;
  readonly toPort: number;
}

// Resource

export class DefaultNetworkAcl extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DefaultNetworkAclConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_default_network_acl',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._defaultNetworkAclId = config.defaultNetworkAclId;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
    this._egress = config.egress;
    this._ingress = config.ingress;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // default_network_acl_id - computed: false, optional: false, required: true
  private _defaultNetworkAclId: string;
  public get defaultNetworkAclId() {
    return this.getStringAttribute('default_network_acl_id');
  }
  public set defaultNetworkAclId(value: string) {
    this._defaultNetworkAclId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultNetworkAclIdInput() {
    return this._defaultNetworkAclId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // subnet_ids - computed: false, optional: true, required: false
  private _subnetIds?: string[];
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[] ) {
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

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // egress - computed: false, optional: true, required: false
  private _egress?: DefaultNetworkAclEgress[];
  public get egress() {
    return this.interpolationForAttribute('egress') as any;
  }
  public set egress(value: DefaultNetworkAclEgress[] ) {
    this._egress = value;
  }
  public resetEgress() {
    this._egress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressInput() {
    return this._egress
  }

  // ingress - computed: false, optional: true, required: false
  private _ingress?: DefaultNetworkAclIngress[];
  public get ingress() {
    return this.interpolationForAttribute('ingress') as any;
  }
  public set ingress(value: DefaultNetworkAclIngress[] ) {
    this._ingress = value;
  }
  public resetIngress() {
    this._ingress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_network_acl_id: this._defaultNetworkAclId,
      subnet_ids: this._subnetIds,
      tags: this._tags,
      egress: this._egress,
      ingress: this._ingress,
    };
  }
}
