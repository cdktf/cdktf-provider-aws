// https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafregionalWebAclAssociationConfig extends cdktf.TerraformMetaArguments {
  readonly resourceArn: string;
  readonly webAclId: string;
}

// Resource

export class WafregionalWebAclAssociation extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: WafregionalWebAclAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_wafregional_web_acl_association',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._resourceArn = config.resourceArn;
    this._webAclId = config.webAclId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // resource_arn - computed: false, optional: false, required: true
  private _resourceArn: string;
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn
  }

  // web_acl_id - computed: false, optional: false, required: true
  private _webAclId: string;
  public get webAclId() {
    return this.getStringAttribute('web_acl_id');
  }
  public set webAclId(value: string) {
    this._webAclId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webAclIdInput() {
    return this._webAclId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      resource_arn: cdktf.stringToTerraform(this._resourceArn),
      web_acl_id: cdktf.stringToTerraform(this._webAclId),
    };
  }
}
