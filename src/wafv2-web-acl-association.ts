// https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Wafv2WebAclAssociationConfig extends cdktf.TerraformMetaArguments {
  readonly resourceArn: string;
  readonly webAclArn: string;
}

// Resource

export class Wafv2WebAclAssociation extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Wafv2WebAclAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_wafv2_web_acl_association',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._resourceArn = config.resourceArn;
    this._webAclArn = config.webAclArn;
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

  // web_acl_arn - computed: false, optional: false, required: true
  private _webAclArn: string;
  public get webAclArn() {
    return this.getStringAttribute('web_acl_arn');
  }
  public set webAclArn(value: string) {
    this._webAclArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webAclArnInput() {
    return this._webAclArn
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      resource_arn: cdktf.stringToTerraform(this._resourceArn),
      web_acl_arn: cdktf.stringToTerraform(this._webAclArn),
    };
  }
}
